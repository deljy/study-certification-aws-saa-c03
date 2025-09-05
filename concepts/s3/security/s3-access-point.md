## S3 Access Point
short explanation comes here

### Features
#### general
- create an access point policy in case that
    - there are a multitude of user groups using the one bucket
    - each user group wants to access different resources
    - the more you use the bucket the more complicated the structure in the bucket becomes
    - create a access policy to control the traffic to the bucket
    - e.g.
        - divide objects into each prefix like /finance, /sales, and so on.
        - create an access point for each prefix
- each access point will have
    - its own DNS name (you can choose internet origin or [VPC](#vpc-origin-access-point))
    - an access point policy (similar to bucket policy) - manage security at scale

#### VPC Origin Access Point
- you can define the access point to be accessible only from within the VPC
- you must create a VPC endpoint to access the access point (Gateway o Interface Endpoint)
- the VPC Endpoint Policy must allow access to the target bucket and Access Point

#### S3 Object Lambda
- allows you to use aws lambda functions to change/modify retreive objects before it is returned to the caller app(s3 clients)
- only the one s3 bucket is needed on top of which we create S3 Access point and S3 Object lambda Access Points
- use cases:
    - redacting/deleting personally identifiable information (PII) for analytics or non-production environments
    - converting access data formats such as converting XML to JSON.
    - resizing and watermarking images on the fly using caller-specific details, such as the user who reqeusted the objects


### References
[your-link-name]: your/file/path
![your-img-name](your/image/path)