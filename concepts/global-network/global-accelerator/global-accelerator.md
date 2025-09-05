## AWS Global Accelerator
Network highway for requests
Accelerate the network by avoiding public network hobs through routers to the request's destination

### Features
#### general
- more stable, less latency.
- leverage [the AWS internal network](#how-aws-global-accelerator-works) to route to your application.
- [2 anycast IP addresses](#unicast-ip-vs-anycast-ip) are going to be created for your application.
- The anycast IP address send traffic directly to edge locations.
- The edge locations then will send the traffic to your application.
- can be used for multiple target destination resources.
- work with on either public or private subnet.
    - Elastic IP address.
    - EC2 instances.
    - Application Load balancer.
    - Network Load balancer.
- has a consistent performance thanks to:
    - intelligent routing to lowest latency and fast regional failover.
    - no issue with client cache (because the IP does not change).
    - Internal AWS network.
- has health check:
    - global accelerator performs a helath check for your apps.
    - helps make your application global (failover in less than 1 minute for unhealthies).
    - great for disaster recovery thanks to the health checks.
- in terms of security:
    - only 2 external IP addresses need to be whitelisted(relatively secure).
    - has DDoS protection thanks to AWS Shield

#### background/motivation
    - assume that you hava deployed an application with public ALB in India and have global users from all around the worlds.
    - they go over the public internet, which can add a lot of latency due to many hops through routers to the destination.
    - so, you wish client's requests to go as fast as possible through AWS network to minimise latency.

#### Unicast IP vs Anycast IP
- Unicast IP
    - one server holds one IP address
- Anycast IP
    - multiple servers hold the same IP address, and the client's request is routed to the nearest server.
- global accelerator uses Anycast IP address

#### How AWS global accelerator works
- each client all over the world is going to talk to the closest edge location to it, thanks to the Anycast IP address concept.
- then, the edge location will reach the destination server through AWS' internal/private network.
- therefore, the request does not need to go through all the public hobs that might lead to network errors, increased latencies, and other concerns.

#### AWS Global Private Backbone
- more optimized than the public internet
- less congested, with lower packet loss and jitter
- faster for cross-region traffic (e.g., US ↔ Asia)


### References
[your-link-name]: your/file/path
![your-img-name](your/image/path)