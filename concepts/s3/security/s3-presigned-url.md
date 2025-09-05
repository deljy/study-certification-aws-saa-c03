## Amazon S3 Presigned URL
generating a url path for temporary access for i/o operations(upload/download)

### Features
#### general
- generate pre-signed URLs using the S3 console, AWS CLI, or SDK
- URL expiration differs between url generators
    - s3 console: 1-720mins(12hrs)
    - aws cli: default 3600 secs max 604800 secs(168hrs)
- users with the pre-signed URL inherit the permissions of the user who generated the URL for GET/PUT
- use cases:
    - allow only logged-in users to download a premium video from your s3 bucket
    - allow an ever-changing list of users to donwload files by generating URLs
    - allow temporarily a user to upload a file to a precise location in your s3 bucket


### References
[your-link-name]: your/file/path
![your-img-name](your/image/path)