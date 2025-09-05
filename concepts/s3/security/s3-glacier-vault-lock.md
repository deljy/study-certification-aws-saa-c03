## S3 Glacier Vault Lock
an optional way in S3 Glacier to adopt a WORM(Write Once Read Many) model

### Features
#### general
- insert/take objects into a S3 Glacier Vault
- create a vault lock policy on top of your glacier, and lock the policy not to be modified/deleted in the future
- helpful for compliance and data retention
- requirements:
    - enable versioning

#### S3 object lock
- adopt a WORM(Write Once Read Many) model
- block an object version deletion for a specific amount of time
- retention modes:
    - compliance:
        - object versions can't be overwritten/deleted by any user, including the root user
        - object retention modes can't be changed, and retention period can't be shortened
    - governance
        - more flexible than compliance retention mode
        - most users can't overwrite/delete an object version or alter its lock settings
        - some users have special permissions to change the retention or delete the object
- retention period: protect the object for a fixed period, it can be extended
- legal hold:
    - protect the object indefinitely, independantly from retention period
    - can be freely placed and removed using the "s3:PutObjectLegalHold" IAM permission


### References
[your-link-name]: your/file/path
![your-img-name](your/image/path)