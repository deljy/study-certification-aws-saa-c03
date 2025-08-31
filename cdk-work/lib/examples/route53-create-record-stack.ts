import * as cdk from 'aws-cdk-lib';
import * as route53 from 'aws-cdk-lib/aws-route53';
import * as targets from 'aws-cdk-lib/aws-route53-targets';
import * as elbv2 from 'aws-cdk-lib/aws-elasticloadbalancingv2';
import { Construct } from 'constructs';

export class Route53CreateRecordStack extends cdk.Stack {
    constructor(scope: Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        // Array of load balancer configurations
        const loadBalancers = [
            { name: 'demo-alb-tokyo', region: 'ap-northeast-1' },
            { name: 'demo-alb-oregon', region: 'us-west-2' },
            { name: 'demo-alb-virginia', region: 'us-east-1' }
        ];

        // Select load balancer (first one for demo)
        const selectedLB = loadBalancers[0];

        // Import existing hosted zone
        const hostedZone = route53.HostedZone.fromLookup(this, 'DemoZone', {
            domainName: 'demo.com'
        });

        // Import existing ALB by name
        const alb = elbv2.ApplicationLoadBalancer.fromLookup(this, 'DemoALB', {
            loadBalancerArn: `arn:aws:elasticloadbalancing:${selectedLB.region}:${this.account}:loadbalancer/app/${selectedLB.name}/*`
        });

        // Create A record alias to ALB
        new route53.ARecord(this, 'SubdomainRecord', {
            zone: hostedZone,
            recordName: 'subdomain',
            target: route53.RecordTarget.fromAlias(new targets.LoadBalancerTarget(alb))
        });
    }
}
