## AWS DataSync
a way to synchronise your data between environments, keeping the original data's metadata like permissions, creation time and so on.

### Features
#### general
- helps move large amounts of data between
    - on-premises and AWS (NFS, SMB, HDFS, S3 APi). in this case, agent program has to be installed in resources outside of AWS
    - an AWS service and another AWS service. in this case, agent program is not required.
- can synchronise to
    - Amazon S3 (any storage class even including glacier)
    - Amazon EFS
    - Amazon FSx (every type)
- synchronisation can be done on a regular basis like hourly, daily, or weekly schedulably
- file permissions and metadata are preserved **as the same as original data**
    - File permissions and metadata are preserved” means when DataSync copies files, it keeps the original access rights (who can read/write/execute) and extra info like timestamps, ownership, and attributes intact during transfer.
    - Normally, copying files can create new metadata, but AWS DataSync keeps the original permissions and metadata unchanged during the transfer.
- one agent task can use 10 Gbps, while the bandwidth limitation can be set up to prevent maximising network usage by the agent.
- how it works:
    - establish connection between your server and datasync agent in the client environment.
    - then, connect the agent with datasync in the receiver's environment to access any storage class of S3, AWS EFS, or  Amazon FSx.
    - in case that you don't have much network bandwidth supported, you can utilise **"AWS Snowcone"** which has datasync pre-installed, and ship the devices between sender and receiver environments.

#### comparion between datasync and transfer family
| Feature                           | **AWS DataSync**                                            | **AWS Transfer Family**                                      |
| --------------------------------- | ----------------------------------------------------------- | ------------------------------------------------------------ |
| **Optimized for bulk transfers?** | ✅ Yes – Built for **automated, large-scale** data migration | ❌ No – Meant for **manual file transfers** via SFTP/FTP/FTPS |
| **Protocol used**                 | NFS, SMB, HDFS, S3 API                                      | SFTP, FTP, FTPS                                              |
| **Best for NFS migration?**       | ✅ Yes                                                       | ❌ No                                                         |
| **Speed/performance**             | High-speed, parallelized                                    | Slower, user-driven                                          |
| **Agent-based automation**        | ✅ Yes (DataSync agent runs on-premises)                     | ❌ No agent                                                   |

#### comparion between network file system and file transfer
A network file system (NFS) provides remote access to files, making them appear local to the user, while a file transfer protocol (FTP) is for moving files from one location to another

### References
[your-link-name]: your/file/path
![your-img-name](your/image/path)