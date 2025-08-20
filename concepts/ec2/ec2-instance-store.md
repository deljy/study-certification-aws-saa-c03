### EC2 Instance Store
A **hard drive** attached to the physical server where your instance resides(= hardware attached volume).

#### Features
- Pros
    - It can perform better for I/O operation than EBS volumes which are *network drives*.
    - It has better/shorter IOPS for both 100% random read and write operations
- Cons 
    - EC2 instance store loses their storage if the instance is stopped/terminated(ephemeral)
    - risk of data loss if hardware fails
    - backups and replication of data are user's responsibility
- Use cases
    - buffer / cache / scratch data / temporary content

#### Terms
- 

#### imgs
![your-img-name](your/image/path)