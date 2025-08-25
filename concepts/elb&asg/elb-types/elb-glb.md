### Gateway Load Balancer (GLB/GWLB)
a type of [ELB](elb).

#### Features
- resides/operates in layer 3.
- used to deploy, scale and manage a fleet of 3rd party network virtual appliances in AWS.
- network virtual appliances are like
    - firewalls.
    - intrusion detection and prevention systems.
    - deep package inspection systems.
    - payload manipulation.
- has 2 main functions/features
    - Transparent (Network) Gateway which means traffic passes through a single entry/exit point via route tables in the VPC—making inspection easier.
    - Load Balancing to distribute the traffic to downstream targets.
- workflow is basically
    1. target incoming requests/traffic with route tables in the VPC.
    2. funnel targets to 3rd party virtual appliances.
    3. decide whether to distribute/allow the traffic to the destination.
- uses GENEVE protocol on port 6081.
- target groups:
    - EC2 instances
    - private IPs (even for on-premise server)

#### Terms
- [displayed-link-name][your-link-name]

#### References
[elb]: ./elb.md
![your-img-name](your/image/path)