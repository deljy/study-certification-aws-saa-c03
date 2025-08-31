## Latency-based Routing Policy
a type of routing policies that Route53's record can have

### Features
#### general
- redirect dns queries to the resource that has the least latency close to the client
- super helpful when lateny for users isa priority
- latency is based on traffic between users and AWS regions
- examples:
    - germany users may be directed to the US (if that's the lowest latency)
- can be associated with Health Checks (which has a failover capabilty)


### References
[your-link-name]: your/file/path
![your-img-name](your/image/path)