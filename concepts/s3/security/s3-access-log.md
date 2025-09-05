## S3 Access logs
short explanation comes here

### Features
#### general
- for audit purpose, you may want to log all access to s3 buckets.
- any request made to s3, from any account, authorised or denied, will be logged into another s3 bucket.
- that data can be analysed using data analysis tools like amazon athena.
- the target logging bucket must be in the same AWS region.
- [log format][aws-log-format]
#### WARNING
- **DON'T SET YOUR LOGGING BUCKET TO BE THE MONITORING TARGET BUCKET**. this will create **a logging loop**, and the bucket will grow exponentially.

### References
[aws-log-format]: https://docs.aws.amazon.com/AmazonS3/latest/userguide/LogFormat.html
![your-img-name](your/image/path)