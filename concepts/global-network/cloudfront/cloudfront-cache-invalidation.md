## CloudFront cache invalidation
short explanation comes here

### Features
#### general
- background:
    - in case you update resources in the backend origin, cloudfront does not automatically notice the change, therefore will get the refreshed content after the TTL has expired
- with cache invalidation, you can force an entire or partial cache refresh (thus, skipping the TTL)
- you can invalidate all files with an wildcard path (*) or a special path (/your/path/*)


### References
[your-link-name]: your/file/path
![your-img-name](your/image/path)