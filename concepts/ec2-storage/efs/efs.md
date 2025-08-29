### Elastic File System
EFS is a managed network file system(NFS) that *can be mounted on many EC2 instances in multi AZs*.

#### Features
- pros
    - It's highly available and scaleable.
    - It scales automatically
- cons
    - It's almost 3 times more expensive than gp2
- use cases
    - content managemnt, web serving, data sharing, wordpress
    - it's pay as you go (pay per use for each GB of data you use in EFS)
- features
    - scales
        - it can accomodate 1000s of concurrent NFS clients
        - 10 GB plus of throughput
        - automatically grow to petabyte-scale network file system
        - performance mode:
            - can be set at EFS creation time
            - general purpose (default): latency-sensitive use cases (web server, CMS, etc...)
            - Max I/O: lower latency, throughput, highly parallel (big data, media processing)
        - throughput mode
            - bursting: you'll get a base throughput of 50MiB/s per every 1TB of data stored in EFS, and you can tempotarily burst up to 100 MiB/s when needed
            - provisioned: you set throughput regardless of storage size
            - elastic: automatically scales throughput up or down based on your workloads
    - storage classes
        - storage tiers (lifecycle management feature, move files after N days)
            - standard: for frequently accessed files.
            - EFS-IA(Infrequently Accessed): cost to retrieve files, lower price to store.
            - archive: rarely accessed data (few times each year), 50% cheaper
        - by implementing lifecycle policies, you can move files between storage tiers
    - availability and durability
        - regional(standard): multi-AZs. great option for prod
        - one zone: One AZ. great for dev stage. backup enabled by default. compatible with EFS-IA (EFS One Zone-IA)
    - it uses NFSv4.1 protocol
    - *compatible iwth Linux based AMI (not windows)*
    - encryption at rest using KMS
    - if you opt out automatic mount option at creation of your client ec2 instance, [the instance needs to explicitly mount EFS to access files](#explicitly-mounting)

#### Terms
- [displayed-link-name][your-link-name]

#### References
[your-link-name]: your/file/path
![your-img-name](your/image/path)

- ##### explicitly mounting
```bash
# 1. Install EFS utilities:
# Amazon Linux 2/AL2023
sudo yum install -y amazon-efs-utils

# Ubuntu/Debian
sudo apt-get install -y amazon-efs-utils
```
```bash
# 2. Create mount point:
sudo mkdir /mdf/efs
```
```bash
# 3. Mount EFS:
# Using EFS mount helper (recommended)
sudo mount -t efs fs-12345678:/ /mnt/efs

# Or using NFS
sudo mount -t nfs4 -o nfsvers=4.1,rsize=1048576,wsize=1048576,hard,timeo=600,retrans=2 fs-12345678.efs.region.amazonaws.com:/ /mnt/efs
```
```bash
# Add to /etc/fstab:
fs-12345678.efs.us-east-1.amazonaws.com:/ /mnt/efs efs defaults,_netdev 0 0
```