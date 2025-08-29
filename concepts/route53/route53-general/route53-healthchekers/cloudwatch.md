## ServiceName
how to monitor private hosted zones

### Features
#### general
- route53 health checkers are outside the vpc
- they can't access private endpoints (private vpc or on-premises resource)
- you can create a **CloudWatch Metric** and associate a **CloudWatch Alarm**, then create a health check that **checks alarm itself**


### References
[your-link-name]: your/file/path
![your-img-name](your/image/path)