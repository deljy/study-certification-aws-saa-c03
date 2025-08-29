## Route53 Health check measure: endpoint
short explanation comes here

### Features
#### general
- about 15 global health checkers will check the endpoint health
    - healthy/unhealthy threshold - 3 (default) // you can set up-to 3 thresholds for both situations?
    - 2 options for checking intervals: by default, interval - 30 sec (can set to 10 sec - higher cost)
    - supports: http/s, tcp
    - if more than 18% of health checkers report the endpoint is healthy, route 53(hosted zone) is considered healthy. otherwise, it's unhealthy.
    - ability to choose which locations you want Route 53 to use.

- Health checks pass only when the endpoint responds with the 2xx or 3xx status code
- Health checks can be setup to pass/fail based on the text in the first 5120 bytes of the response
- In order to enalbe health checks by checkers, the SGs for your instances/services have to allow their incoming requests.

### References
[your-link-name]: your/file/path
![your-img-name](your/image/path)