## Route53 Routing Policies
AWS-specific managed DNS logical/smart routing services for DNS records/resources.

### Features
#### general
- define how route53 responds to DNS queries
- the "routing" in the name does not mean the traffic distribution which ALB/NLB achieves. DNS does not route any traffic, it only responds to the DNS queries.
- Route53 supports the following routing policies:
    - [simple][simple]
    - [weighted][weighted]
    - [failover][failover]
    - [latency-based][latency-based]
    - [geolocation][geolocation]
    - [multi-value answer][multi-value-answer]
    - [geoproximity][geoproximity]


### References
[simple]: ./routing-policies/simple.md
[weighted]: ./routing-policies/weighted.md
[failover]: ./routing-policies/failover.md
[latency-based]: ./routing-policies/latency-based.md
[geolocation]: ./routing-policies/geolocation.md
[multi-value-answer]: ./routing-policies/multi-value-answer.md
[geoproximity]: ./routing-policies/geoproximity.md
![your-img-name](your/image/path)