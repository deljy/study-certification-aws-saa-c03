## Amazon S3 event notification 
Create notifications based on events happening in your bucket

### Features
#### general
- event type examples:
    - S3:ObjectCreated
    - S3:ObjectRemoved
    - S3:ObjectRestore
    - S3:Replication
- event can be applied with filters on object name (e.g., *.jpg)
- use cases:
    - generate thumbnails of uploaded images
    - edit images before sending to the next storage class
- can create as many "s3 events" as desired
- s3 event notifications typically deliver events in seconds but can sometimes take a minute or longer
- destinations(event notification targets) can be like:
    - event notification targets
        - Amazon SNS
        - Amazon SQS
        - Amazon Lambda function
    - the 3 targets need [resource access policy][resource-access-policy] for integration
- s3 event notification with Amazon EventBridge
    - event bridge can reside between amazon s3 bucket and over 18 aws services as destination.
    - event bridge can enhance s3 event notification's capability by increasing event targets over the typical desination specified above
    - with event bridge, you can :
        - set up multiple destinations (e.g., aws step functions, aws kinesis data streams, aws data firehose)
        - archive events(? or objects that incur the event)
        - replay events
        - make the delivery more reliable

### References
[resource-access-policy]: ../../../notes/resource-access-policy-vs-iam-policy.md
![your-img-name](your/image/path)