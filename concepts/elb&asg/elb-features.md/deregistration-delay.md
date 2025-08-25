### Deregistration Delay (= Connection Draining)
short explanation comes here

#### Features
- naming
    - Connection Draining - for ALB & NLB
    - Deregistration Delay - for CLB
- allows load balancers to give its target instances time to handle/complete in-flight/active requests, while the instance is de-registering/unhealthy
- if deregistration delay (draining mode) is set to 0, the load balancer will immediately stop routing new requests to the target and terminate existing connections right away—no waiting. So, active connections may be cut off abruptly.
- 0 deregistration delay can be useful in testing, but might be risky in production.

#### Terms
- [displayed-link-name][your-link-name]

#### References
[your-link-name]: your/file/path
![your-img-name](your/image/path)