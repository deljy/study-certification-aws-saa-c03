## Route53 Health Check
short explanation comes here

### Features
#### general
- HTTP Health Checks are available only for public resources (e.g., ALB in public subnet)
- purpose:
    - automate DNS failover.
- Health Checks can monitor:
    - [an endpoint][endpoint-healthcheck] (e.g., application, server, other aws resource)
    - other health checks (e.g., [Calculated Health Checks][calculated-healthcheck])
    - [CloudWatch Alarms][cloudwatch-healthcheck]
        - can have full control over the alarms
        - e.g., throttles of DynamoDB, alarms on RDS, custom metrics
        - helpful for private resources
- useful:
    - when you'd like to route client requests/traffic to each region by routing/ruling DNS records,
    - you'd like to have route53 hosted zone and its records to distribute to dns queries, based on latency or geolocation or others.
    - then you'll prolly want to set up some failover measures in case of regional failure or AZ failures. in that case, you can utilise this.


### References
[endpoint-healthcheck]: ./route53-healthchekers/endpoint.md
[calculated-healthcheck]: ./route53-healthchekers/calculated.md
[cloudwatch-healthcheck]: ./route53-healthchekers/cloudwatch.md
![your-img-name](your/image/path)