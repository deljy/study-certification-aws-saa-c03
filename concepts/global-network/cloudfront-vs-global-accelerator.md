## Comparison: CloudFront vs Global Accelerator
short explanation comes here

### Features
#### general
- both:
    - use the AWS global network and its edge locations around the world
    - can integrate with AWs shield for DDoS protection.
- CloudFront:
    - improves performance for both
        - static content such as images and videos
        - dynamic content such as API acceleration and dynamic site delivery
    - content is served at the edge location
- Global Accelerator:
    - improves performance for a wide range of applications over TCP or UDP.
    - proxying packets at the edge to applications running in one or more AWS regions.
    - good fit for non-HTTP use cases, such as gaming(UDP), IoT(MQTT), or Voice over IP.
    - Good for HTTP use cases that require static IP addresses thanks to the 2 anycast IP addresses.
    - Good for HTTP use cases that require deterministic(=predictable/reliable) fast regional failover.


### References
[your-link-name]: your/file/path
![your-img-name](your/image/path)