## Amazon FSx
Launch your file system on AWS as a fully managed service, like RDS but for File System.

### Features
#### general
- can launch those file systems
    - [FSx for NetApp ONTAP](#fsx-for-netapp-ontap)
    - [FSx for OpenAFS](#fsx-for-openafs)
    - [FSx for Windows File Server](#fsx-for-windows-file-server)
    - [FSx for Lustre](#fsx-for-lustre)
- has 2 deployment options
    - scratch file system
        - temporary storage
        - data is not replicated (doesn't persist if file server fails)
        - high burst (6x faster, 200MBps per TiB)
        - usage: short-term processing, optimise costs
    - persistent file system
        - long-term storage
        - data is replicated within the same AZ
        - replace failed files within minutes
        - usage: long-term processing, sensitive data

#### summary
| FSx Type                        | Use Case / Features                                                    | Protocols          | Ideal For                                                  |
| ------------------------------- | ---------------------------------------------------------------------- | ------------------ | ---------------------------------------------------------- |
| **FSx for NetApp ONTAP**        | Move NetApp NAS workloads to AWS, auto-scaling, snapshots, compression | NFS, SMB, iSCSI    | Mixed OS environments, data management, backup-friendly    |
| **FSx for OpenZFS (OpenAFS)**   | High IOPS, low latency, ZFS on AWS                                     | NFS v3/v4          | Linux-heavy environments needing ZFS features              |
| **FSx for Windows File Server** | Windows file shares, Active Directory integration, scalable            | SMB, NTFS          | Windows workloads, shared drives, multi-AZ, on-prem access |
| **FSx for Lustre**              | HPC, machine learning, video processing, financial modeling            | POSIX-like (Linux) | High-performance, large-scale compute with S3 integration  |


#### FSx for NetApp ONTAP
- ONTAP is NetApp’s data management software that powers their NAS storage systems.
- managed netApp's ONTAP on AWs
- file system compatible with NFS, SMB, iSCSI protocol.
- move workloads running on ONTAP or NAS on your on-premises to AWS.
- Works with:
    - linux
    - windows
    - MacOS
    - VMware Cloud on AWS
    - amazon workspaces & AppStream 2.0
    - Amazon EC2 & ECS and EKS
- storage shrinks or grows automatically.
- snapshots, replication, low-cost, compression and data de-duplication
- point-in-time instantaneous cloning (helpful for testing new workloads)

#### FSx for OpenAFS
- managed OpenZFS file system on AWS.
- file system compatible with NFS (v3, v4, v4.1, v4.2).
- move worklodas running on ZFS to AWS
- Works with:
    - linux
    - windows
    - MacOS
    - VMware Cloud on AWS
    - amazon workspaces & AppStream 2.0
    - Amazon EC2 & ECS and EKS
- up to 1,000,000 IOPS with less than 0.5ms latency
- snapshots, compression and low-cost
- point-in-time instantaneous cloning (helpful for testing new workloads)

#### FSx for Windows File Server
- is a fully managed windows file system share drive
- supports SMB protocol & windows NTFS
- microsoft active directory integration & ACLs, user quotas
- can be mounted on Linux EC2 instances
- supports microsoft's distributed file system (DFS) namespaces (group files across multiple FS)
- scale up to **10s of GB/s, millions of IOPS, 100s PB of data**
- storage options:
    - SSD: latency sensitive workloads (databases, media processing, data analytics, and so on)
    - HDD: broad sepctrum of wordloads (home directory, CMS, ...)
- can be accessed from your on-premises infrastructure (VPN or Direct Connect)
- can be configured to be multi-az (high availability)
- data is backed-up daily to s3

#### FSx for Lustre
- Lustre is a type of parallel distributed file system, for large-scale computing. the name lustre is derived from "Linux" and "cluster"
- is aimed for machine learning, high performance computing (HPC)
    - video processing
    - financial modeling
    - electronic design automation
- scale up to **100s of GB/s, millions of IOPS, sub-ms latencies**
- storage options:
    - SSD: low-latency, IOPS intensive workloads, small & random file operations
    - HDD: throughput-intensive workloads, large * sequential file operations
- seamless integration with S3
    - can "read S3" as a file system (through FSx)
    - can write the output of the computations back to s3 (through FSx)
can be used from on-premises servers (VPN or Direct Connect)

#### Comparison between FSx Lustre and EFS
| Feature               | **Amazon FSx for Lustre**                         | **EFS with Max I/O**                     |
| --------------------- | ------------------------------------------------- | ---------------------------------------- |
| **IOPS performance**  | Scales to **millions of IOPS**                    | Good, but not millions; less predictable |
| **Latency**           | **Sub-millisecond latency**                       | Higher latency (\~ms level)              |
| **Designed for HPC?** | ✅ **Yes** – built for HPC, ML, genomics workloads | ❌ No – general purpose                   |
| **POSIX compliant?**  | ✅ Yes                                             | ✅ Yes                                    |



### References
[your-link-name]: your/file/path
![your-img-name](your/image/path)