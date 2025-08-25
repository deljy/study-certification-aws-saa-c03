### Appilcation Load Balancer (ALB)
a type of [ELB](elb).

#### Features
- resides/operates in layer 7.
- forward traffic multiple (http) apps across machines.
- support:
    - http/2 and websocket (prolly http/3 too?).
    - redirects (e.g., from http to https).
- target groups:
    - EC2 instances
    - ECS Tasks
    - Lambda Funtions
    - private IPs (even for on-premise server)
- as well as other reverse proxy servers:
    - can set up rules before forwarding traffic to downstream servers.
    - downstream servers will get request info with a "x-forwarded" prefix. e.g., "X-Forwarded-For", "X-Forwarded-Port", and "X-Forwarded-Proto".
- SGs in its target group can have ALB's SG as their inbound rule's source.
- 

#### Terms
- [displayed-link-name][your-link-name]

#### References
[elb]: ./elb.md
![your-img-name](your/image/path)