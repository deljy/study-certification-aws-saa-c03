### Network Load Balancer (NLB)
a type of [ELB](elb).

#### Features
- resides/operates in layer 4.
- Ultra low latency thanks to its TCP/UDP supports
- NLB has one static IP per AZ, and support assigning Elastic IP which is helpful for whitelisting specific IPs
- supports:
    - TCP/UDP
- target groups:
    - EC2 instances
    - Lambda Funtions
    - private IPs (even for on-premise server)
    - [Application Load Balancer (ALB)](elb-alb)
    - health checks support TCP, HTTP and HTTPs.
- use cases:
    - game servers thanks to its udp support.
    - for combition with ALB. thanks to NLB, get a fixed IP, thanks to ALB, apply rules around handling HTTP traffic.

#### Terms
- [displayed-link-name][your-link-name]

#### References
[elb]: ./elb.md
[elb-alb]: ./elb-alb.md
![your-img-name](your/image/path)