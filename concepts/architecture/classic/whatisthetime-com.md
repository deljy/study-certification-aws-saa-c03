## Case - WhatIsTheTime.com
short explanation comes here

### Features
#### architecture changes
- 1. One t2 micro instance

- 2. 3 m5 large instance with
    - an elastic ip address

- 3. 3 m5 large instance with
    - an elastic ip address
    - route53 A record TTL 1hr

- 3. 3 m5 large private instance with
    - ELB ALB + health check in the same AZ
    - route53 Alias A record

- 4. 3 m5 large private instance with
    - ASG
    - ELB ALB + health check in the same AZ
    - route53 Alias A record

- 5. 3 m5 large private instance with
    - ASG spanned in Multi-AZs (asg=[az1, az2, az3])
    - ELB ALB + health check in Multi-AZs (az1-3)
    - route53 Alias A record
    - reserved instances for minimum capacity in asg


### References
[your-link-name]: your/file/path
![your-img-name](your/image/path)