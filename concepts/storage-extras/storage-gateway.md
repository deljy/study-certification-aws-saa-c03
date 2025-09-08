## AWS Storage Gateway
AWS Storage Gateway is **a hybrid cloud service that connects on-premises environments with AWS cloud storage**. It lets you seamlessly integrate local data with cloud storage for backup, archiving, and disaster recovery.

### Features
#### general
- bridge between on-premises data and cloud data, which helps seamlessly and securely integrate your on-premises IT environment with AWS storage infrastructure.
- it seems like it just helps store backups in S3
- **The gate way has to be installed in your corporate data center(on-premises)** in order to integrate your data with aws environment
- background/motivation: aws is pushing for hybrid cloud(use both on-premises and the cloud) because of
    - long cloud migration
    - security requirements
    - compliance requirements
    - IT strategy
- use cases:
    - disaster recovery
    - backup & restore
    - tiered storage
    - on-premises cache & low-latency files access
types of storage gateway:
    - [S3 File Gateway](#s3-file-gateway)
    - [volume Gateway](#volume-gateway)
    - [Tape Gateway](#tape-gateway)

#### Summary
- user/Groupo file shares will be linked through File Gateway (storage gateway) on NFS/SMB protocols while encrypted in transit to the aws cloud environment from the on-premises environment. then, the files will be stored on S3 buckets except for under-glacier classes. however, files can be transitioned to under-glacier classes with bucket life policy. 
- application server's block will be linked to amazon s3 through volume gateway (storage gateway) on iSCSI protocol while encrypted in transit/flight. then, the data will be transformed into EBS volume
- backup application's tape data will be sent to tape gateway (storage gateway) on iSCSI VTL protocol to be stored in S3 bucket Tape Library. then, it will be ejected from backup application to Tape archive in Glacier & Glacier deep archive classes

#### AWS storage cloud native options
- block
    - Amazon EBS
    - EC2 Instance Store
- file
    - Amazon EFS
    - Amazon FSx
- object
    - Amazon S3
    - Amazon Glaciers

#### S3 File Gateway
- how it works:
    - application talks to S3 File Gateway on NFS or SMB protocols
    - then, S3 file gateway translates the request to HTTPS before sending requests to S3 buckets
- configured s3 buckets are accessible using the nfs and smb protocol
- most recently used data is cached in the file gateway for rapid access.
- supports classes:
    - s3 standards
    - s3 standard IA
    - s3 one zone a
    - s3 intelligent tiering
- transition to s3 glacier using a lifecycle policy
- bucket access using iam roles for each file gateway
- smb protocol has integration with active directory (AD) for user authentication

#### volume Gateway
- how it works:
    - application server talks to the volume gateway on iscsi protocol
    - then the gateway translates request into https before routing that to s3 bucket
    - then retrieve or create volumes in s3, which are backed up by ebs snapshots
- is backed by EBS snapshots which can help restore on-premises volumes
- 2 types of volumes:
    - cached volumes
        - low latency access to most recent data
    - stored volumes
        - entire dataset is on premises, scheduled backups to s3

#### Tape Gateway
- some companies have backup processes using physical tapes
- with tape gateway, companies use the same processes but, in the cloud
- virtual tape library (VTL) backed by Amazon S3 and Glacier
- back up data using existing tape-based processes (and iSCSI interface)
- works with leading backup software vendors


### References
[your-link-name]: your/file/path
![your-img-name](your/image/path)