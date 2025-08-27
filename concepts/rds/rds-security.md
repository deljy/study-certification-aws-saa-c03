<!-- https://mynavidigitech.udemy.com/course/aws-certified-solutions-architect-associate-saa-c03/learn/lecture/13528156#content -->

## RDS Security
short explanation comes here

### Features
#### At-rest encryption
- database master & replicas encryption using AWS KMS (this must be defined at launch time)
- if the master is not encrypted, the read replicas can not be encrypted either.
- to encrypt an un-encrypted database, go through a DB snapshot & restore as encrypted
#### In-flight encryption
- TLS-ready by default, uses the AWS TLS root certificates client-side
    - each database on RDS and Aurora is ready to have in-flight encryption by default
    - client must use aws tls root certs
#### IAM authentication
- IAM roles to connect to your database (instead of username/pw for the db)
#### security groups
- control network access to your RDS/Aurora DB
#### Misc
- No SSH available (except for RDS Custom)
- Audit logs can be enabled (and sent to cloudwatch logs for longer term of retention)

### Terms
#### [displayed-link-name][your-link-name]

### References
[your-link-name]: your/file/path
![your-img-name](your/image/path)