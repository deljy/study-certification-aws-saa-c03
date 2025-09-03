## Amazon S3 Lifecycle rules
moving objects between each class in S3 bucket by rules

### Features
#### general
- rules can be created for a certain prefix
    - e.g., s3://mybucket/mp3/*
- rules can be created for certain object tags
    - e.g., department:finance
    
#### transition actions
- configure objects to transition to another storage class
- e.g.,
    - move objects to standard IA class 60 days after creation
    - move to clacier for archiving after 6 months

#### expiration actions
- configure objects to expire/be-deleted after some time
- e.g.,
    - access log files can be set to delete after 365 days
    - can be used to delete old versions of files if versioning is enabled
    - can be used to delete incomplete multi-part uploads

#### amazon s3 analytics - storage class analytics
- help you decide when to transition objects to the right storage class
- recommendations for **standard** and **standard IA**
    - does not work for One-Zone IA or Glacier
- CSV report is updated daily
- 24 to 48 hrs to start seeing data analysis
- is a good first step to put together lifecycle rules or improve them

#### use case1
your app on ec2 creates images thumbnails after profile photos are uploaded to amazon s3. these files can be easily recreated, and only need to be kept for 60 days. the source images should be able to be immediately retrieved for these 60 days, and afterwards, the user can wait up to 6 hrs.

- design
    - s3 source images can be on **standard storage class** first, with a **lifecycle config to transition them to glacier** after 60 days
    - s3 thumbnails can be on **One-Zone IA**, with a **lifecycle config to delete them (expiration)** after 60 days

#### use case2
a rule in your company states that you should be able to recover your deleted s3 objects immediately for 30 days, although this may happen rarely. after this time, and for up-to 365 days, deleted objects should be recoverable within 48 hrs

- design
    - **enable s3 versioning** in order to have object versions, so that "deleted objects" are in fact hidden by a *"delete marker"* and can be recovered.
    - then, transition the "non-current versions" of the object to **standard IA class**.
    - then, transition afterwards the "non-current versions" to **glacier deep archive** for archival purposes

### References
[your-link-name]: your/file/path
![your-img-name](your/image/path)