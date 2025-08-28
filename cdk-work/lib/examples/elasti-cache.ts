// @ts-nocheck
import * as cdk from 'aws-cdk-lib';
import * as elasticache from 'aws-cdk-lib/aws-elasticache';
import * as ec2 from 'aws-cdk-lib/aws-ec2';

export class ElastiCacheStack extends cdk.Stack {
    constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        const vpc = new ec2.Vpc(this, 'VPC');

        const subnetGroup = new elasticache.CfnSubnetGroup(this, 'SubnetGroup', {
            description: 'ElastiCache subnet group',
            subnetIds: vpc.privateSubnets.map(subnet => subnet.subnetId),
        });

        const redisElastiCache = new elasticache.CfnCacheCluster(this, 'RedisCluster', {
            cacheNodeType: 'cache.t3.micro',
            engine: 'redis',
            numCacheNodes: 1,
            cacheSubnetGroupName: subnetGroup.ref,
        });
    }
}
