## Route53 CNAME vs Alias
short explanation comes here

### Features
#### similarities
- both can be used to reference a domain name.

#### differences
- Alias records:
    - an Alias record is a special type of A or AAAA record that lets you point your domain to AWS resources (like CloudFront, ELB, S3 buckets) without using an IP address.
    - Unlike regular records, Alias records:
        - Don’t incur DNS query charges.
        - Automatically follow the target’s IP changes.
        - Can be set at the zone apex (unlike CNAME).
- CNAME records:
    - CNAME records are meant to point a domain name which must have A/AAAA records.
    - CNAME records can't point DNS name at apex.

### References
[your-link-name]: your/file/path
![your-img-name](your/image/path)