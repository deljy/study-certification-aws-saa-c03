## ## Route53 Health check measure: endpoint
short explanation comes here

### Features
#### general
- check route53's health status in combination of results of multiple health checks(=child health checkers) into a single health check(parent health checker).
- in order to health-check, you can combine OR/AND/NOT condition
- can monitor up to 256 child health checks
- can specify how many health checks are needed to pass, to make the parent pass
- use case:
    - perform maintenance/test to your website without causing all health checks to fail


### References
[your-link-name]: your/file/path
![your-img-name](your/image/path)