## AWS Tranfer Family
a fully managed service that lets you securely transfer files into and out of AWS using protocols like SFTP, FTPS, and FTP. It’s great for migrating or integrating existing file transfer workflows with AWS storage like S3 or EFS.

### Features
#### general
- is a fully managed service for file transfers into and out of Amazon S3 or Amazon EFS using the FTP protocol
- supports those protocols:
    - aws transfer for FTP (File Transfer Protocol)
    - aws transfer for FTPS (File Transfer Protocol over SSL)
    - aws transfer for SFTP (Secure File Transfer Protocol)
- managed infrastructure, scalable, reliable, highly available (multi-AZ)
- pay per provisioned endpoint per hour + data transfers in GB
- store and manage users' credentials within the service
- integrate with existing authentication systems (microsoft active directory, LDAP, Okta, Amazon Cognito, custom)
- use cases:
    - sharing files
    - public datasets
    - CRM
    - ERP
- how it works:
    - users (FTP clients) connect to transfer family which has a protocol listed above (optionally via DNS like Route53)
    - then the transfer family will be assumed to have an IAM role to read/put data from/to amazon s3 or amazon EFS
    - in the meantime, requests from FTP clients can be authenticated with external systems like LDAP

### References
[your-link-name]: your/file/path
![your-img-name](your/image/path)