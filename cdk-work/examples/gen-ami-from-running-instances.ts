// @ts-nocheck
/**
 * GenerateAmiFromRunningInstancesStack
 * 
 * This CDK stack demonstrates how to automatically create an AMI (Amazon Machine Image) 
 * from a running EC2 instance within a specific Availability Zone.
 * 
 * Purpose:
 * - Automate AMI creation for backup, scaling, or disaster recovery scenarios
 * - Capture the current state of running instances without manual intervention
 * - Enable infrastructure-as-code approach for AMI management
 * 
 * How it works:
 * 1. Uses a Lambda function to query all running instances in a target AZ (us-east-1a)
 * 2. Selects the first available running instance from the list
 * 3. Creates an AMI from that instance using CloudFormation's AWS::EC2::Image resource
 * 4. Uses noReboot=true to minimize disruption to the running instance
 * 
 * Use cases:
 * - Creating golden images from configured instances
 * - Automated backup workflows
 * - Blue/green deployment preparations
 * - Disaster recovery image creation
 */

import * as cdk from 'aws-cdk-lib';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as cr from 'aws-cdk-lib/custom-resources';
import { Construct } from 'constructs';

export class GenerateAmiFromRunningInstancesStack extends cdk.Stack {
	constructor(scope: Construct, id: string, props?: cdk.StackProps) {
		super(scope, id, props);

		const targetAz = 'us-east-1a'; // Example AZ

		// Custom resource to list running instances in the specified AZ
		const listInstancesProvider = new cr.Provider(this, 'ListInstancesProvider', {
			onEventHandler: new cdk.aws_lambda.Function(this, 'ListInstancesFunction', {
				runtime: cdk.aws_lambda.Runtime.PYTHON_3_9,
				handler: 'index.handler',
				code: cdk.aws_lambda.Code.fromInline(`
					import boto3
					import json

					def handler(event, context):
						ec2 = boto3.client('ec2')
						
						# List running instances in the specified AZ
						response = ec2.describe_instances(
							Filters=[
								{'Name': 'instance-state-name', 'Values': ['running']},
								{'Name': 'availability-zone', 'Values': ['${targetAz}']}
							]
						)
						
						instances = []
						for reservation in response['Reservations']:
							for instance in reservation['Instances']:
								instances.append({
									'InstanceId': instance['InstanceId'],
									'InstanceType': instance['InstanceType'],
									'LaunchTime': instance['LaunchTime'].isoformat()
								})
						
						if not instances:
							return {
								'Status': 'SUCCESS',
								'Data': {'Message': 'No running instances found in AZ ${targetAz}'}
							}
						
						# Pick the first running instance for AMI creation
						selected_instance = instances[0]
						
						return {
							'Status': 'SUCCESS',
							'Data': {
								'SelectedInstanceId': selected_instance['InstanceId'],
								'InstanceType': selected_instance['InstanceType'],
								'TotalInstances': len(instances)
							}
						}
				`),
				timeout: cdk.Duration.minutes(5)
			}),
		});

		// Grant EC2 permissions to the Lambda function
		listInstancesProvider.onEventHandler.addToRolePolicy(
			new cdk.aws_iam.PolicyStatement({
				effect: cdk.aws_iam.Effect.ALLOW,
				actions: [
				'ec2:DescribeInstances',
				'ec2:CreateImage',
				'ec2:DescribeImages'
				],
				resources: ['*'],
			}),
		);

		// Custom resource to get the instance ID
		const instanceLookup = new cdk.CustomResource(this, 'InstanceLookup', {
			serviceToken: listInstancesProvider.serviceToken,
		});

		// Create AMI from the selected running instance
		const ami = new ec2.CfnImage(this, 'GeneratedAMI', {
			instanceId: instanceLookup.getAttString('SelectedInstanceId'),
			name: `ami-from-${targetAz}-${Date.now()}`,
			description: `AMI created from running instance in ${targetAz}`,
			noReboot: true, // Avoid rebooting the instance
		});

		// Add dependency to ensure instance lookup completes first
		ami.addDependency(instanceLookup.node.defaultChild as cdk.CfnResource);

		// Outputs
		new cdk.CfnOutput(this, 'TargetAZ', {
			value: targetAz,
			description: 'Availability Zone where instances were searched',
		});

		new cdk.CfnOutput(this, 'SelectedInstanceId', {
			value: instanceLookup.getAttString('SelectedInstanceId'),
			description: 'Instance ID used for AMI creation',
		});

		new cdk.CfnOutput(this, 'GeneratedAMIId', {
			value: ami.ref,
			description: 'ID of the generated AMI',
		});

		new cdk.CfnOutput(this, 'TotalRunningInstances', {
			value: instanceLookup.getAttString('TotalInstances'),
			description: 'Total running instances found in the AZ',
		});
	}
}

// App instantiation
const app = new cdk.App();
new GenerateAmiFromRunningInstancesStack(app, 'GenerateAmiFromRunningInstancesStack', {
	env: {
		account: process.env.CDK_DEFAULT_ACCOUNT,
		region: process.env.CDK_DEFAULT_REGION,
	},
});
