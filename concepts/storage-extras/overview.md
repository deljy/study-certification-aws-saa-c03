## Overview of AWS Storages
short explanation comes here

### Features
#### general
- So, some are interchangeable, but many are complementary and designed to be used in combination.

✅ Used Together (Common Combos)
- **S3 + Glacier**:
    - Store frequently accessed data in S3, archive old data to Glacier.
- **EBS + EC2**:
    - EBS provides the root or data volumes for EC2 instances.
- **EFS or FSx + EC2/ECS/EKS**:
    - Share file systems across compute resources.
- **Storage Gateway + S3**:
    - Backup or extend on-prem storage to S3 via gateway.
- **Transfer Family + S3/EFS**:
    - Receive files via SFTP/FTP and store them in S3/EFS.
- **DataSync + S3/EFS/FSx**:
    - Regularly sync data between on-prem and AWS storage.
- **Snow Family + S3/Glacier**:
    - Move massive data into AWS, then store in S3 or archive.

❌ Usually Used Separately
- **EBS vs. Instance Store**:
    - Both attach to EC2 but serve different needs; rarely used together.
- **FSx Types**:
    - You pick the one best suited to your workload; not used together in most cases.

#### s3
- Object Storage
- use case:
    - Object storage for backups, static website hosting, and big data lakes
#### s3 glacier
- Objact Archive
- use case:
    - Long-term archival storage with infrequent access
#### EBS volumes
- Network storage for one EC2 instance at a time
- use case:
    - Block storage for EC2 instances, e.g., databases or boot volumes
#### instance store
- [physical storage](https://www.w3schools.com/aws/aws_cloudessentials_instancestores.php#:~:text=Instance%20Store%20is%20a%20storage,the%20instance%20store%20will%20persist.) for your ec2 instance (high IOPS)
- use case:
    - Temporary local storage for fast, ephemeral data during instance life
#### EFS
- Network File System for Linux instances, POSIX filesystem
- use case:
    - Shared file storage for Linux-based workloads needing scalable NFS access
#### FSx for Windows
- Network File System for windows servers
- use case:
    - Managed Windows file shares with SMB and Active Directory integration
#### FSx for Lustre
- High performance computing linux file system
- use case:
    - High-performance parallel file system for HPC and ML workloads
#### FSx for NetApp ONTAP
- Hgih OS compatibility
- use case:
    - Enterprise NAS features and data management for mixed OS environments
#### FSx for OpenZFS
- Managed ZFS file system
- use case:
    - ZFS features like snapshots and compression on AWS for Linux workloads
#### Storage Gateway
- S3 & FSx File gateway, volume gateway (cached & stored), tape gateway
- use case:
    - Hybrid cloud storage integration for backup, archiving, and disaster recovery
#### Transfer Family
- FTP, FTPS, SFTP interface on top of Amazon S3 or Amazon EFS
- use case:
    - Managed SFTP/FTP/FTPS service to securely transfer files into AWS
#### DataSync
- Schedule data synchronisation between on-premises and AWS, or between AWS and AWS
- use case:
    - Automated data transfer and syncing between on-premises and AWS storage
#### Snowcone / Snowball /Snowmobile
- physically move large amount of data to the cloud
- use case:
    - Physical data transport devices for large offline data migrations
#### Database
- for specific workloads, usually with indexing and querying
- use case:
    - Managed relational and NoSQL databases for application data storage and querying

    


### References
[your-link-name]: your/file/path
![your-img-name](your/image/path)