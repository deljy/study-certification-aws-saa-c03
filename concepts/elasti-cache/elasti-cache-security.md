## ElastiCache Security
short explanation comes here

### Features
#### general features
- supports IAM authentication only for Redis OSS cache
- IAM policies on elasti-cache are used only for AWS API-level security
- Redis Auth:
    - you can set a password/token when creating a cluster
    - this is an extra level of security (on top of security groups)
    - supports SSL in-flight/transit encryption
- Memcached:
    - supports SASL-based authentication

### Terms
#### [displayed-link-name][your-link-name]

### References
[your-link-name]: your/file/path
![your-img-name](your/image/path)