## Amazon S3 Replication
replicate newly added/updated objects into another bucket.

### Features
#### general
- in order to enable replication
    - **versioning** must be enabled in both source and destination buckets
- buckets can be in different AWS accounts
- copying is **asynchronous**
- must give proper iam permissions to S3.
- in order to *replicate existing objects*, you need to use **S3 batch replication**. This will replicate existing objects and objects that failed replication
- in order to run DELETE operations
    - can replicate delete markers from source to target (optional setting)
    - deletions with a version ID are not replicated (to avoid malicious deletes)
- There is no "chaining of replication"
    - even if bucket 1 has replication into bucket 2, and bucket 2 has replication into bucket 3, objcets created in bucket 1 are not going to be replicated into bucket 3
- delete markers can also be replicated by set up

#### Cross Region Replication (CRR)
- use case:
    - compliance
    - lower latency access
    - replication across acocunts
#### Same Region Replication (SRR)
- use case:
    - log aggregation
    - live replication between prod and test accounts

#### How to set up replication
- steps
    - go to the bucket
    - management in bucket
    - create a replication rule
        - you can set if the rule is enabled/disabled
        - you can select a rule scope whether to apply all objects in the bucket or not
        - select a bucket in your or others account
        - target bucket can be in other regions
        - can select whether to enable encryption or not
        - can select if you replicate the existing objects with batch operations
    - 

### References
[your-link-name]: your/file/path
![your-img-name](your/image/path)