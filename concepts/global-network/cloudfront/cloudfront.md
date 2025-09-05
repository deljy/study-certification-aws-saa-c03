## AWS CloudFront
AWS Content Delivery Network(CDN)

### Features
#### general
- Content Delivery Network (CDN)
- improves read performance by caching content at the edge location
- improves user expeirence (UX)
- hundreds of points of presence globally (edge locations, cache)
- DDoS protection (because worldwide), integration with Shield, AWS Web Applicaiton Firewall

#### CloudFront Origin Candidates
- S3 bucket
    - for distributing files and caching them at the edge
    - for uploading files to s3 through cloudfront
    - secured using Origin Access Control(OAC)
- VPC Origin
    - for applications hosted in VPC private subnets
    - e.g.,
        - application load balancer
        - network load balancer
        - EC2 instances
- Custom Origin(HTTP)
    - s3 website (must enable the bucket as a static s3 website)
    - any public http backend you want within or outside AWS

#### CloudFront vs S3 Cross Region Replication
- CloudFront
    - Global Edge network
    - Files are cached for a TTL(maybe a day)
    - Great for static content that must be available everywhere
- S3 Cross Region Replication
    - Must be setup for each region you want replication to happen
    - Files are updated in near real-time
    - read only
    - great for dynamic content that needs to be available at low-latency in few regions


### References
[your-link-name]: your/file/path
![your-img-name](your/image/path)