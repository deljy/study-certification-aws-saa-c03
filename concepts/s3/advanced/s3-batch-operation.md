## S3 batch operations 
short explanation comes here

### Features
#### general
- perform bulk operations on existing S3 objects with a single request
- example:
    - modify object metadata & properties
    - copy objects between s3 buckets
    - encrypt un-encrypted objects
    - modify ACLs, tags
    - restore objects from S3 glacier
    - invoke Lambda function to perform custom action on each object
- a job consists of a list of objects, the action to perform and optional parameters
- S3 batch operations can
    - manage retries
    - track prgress
    - send completion notifications
    - generate reports
- you can use S3 inventory to get object list and use Athena to query and filter your objects


### References
[your-link-name]: your/file/path
![your-img-name](your/image/path)