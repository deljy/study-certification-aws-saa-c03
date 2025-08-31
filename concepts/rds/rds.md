## Amazon Relational Database Service(Amazon RDS)
a managed **relational database service** offered by Amazon Web Services (AWS). It simplifies the setup, operation, and scaling of a relational database in the cloud.

### Features
#### a list of database engines that can be managed by Amazon RDS
- Postgres
- MySQL
- MariaDB
- Oracle
- Microsoft SQL Server
- IBM DB2
- Aurora(AWS Proprietary Database)
#### Pros/Cons of usign Amazon RDS (instead of running your owns on EC2 instances)
- advantages
    - Automated Provisioning, OS patching 
    - Continuous backups and restore to specific timestamp (Point in Time Restore) 
    - Monitoring dashboards 
    - Read replicas for improved read performance 
    - Multi AZ setup for DR (Disaster Recovery) 
    - Maintenance windows for upgrades 
    - Scaling capability (vertical and horizontal) 
    - Storage backed by EBS
- disadvantage
    - you can't ssh into your instances
#### RDS Storage Auto Scaling
- [RDS Storage Auto Scaling](rds-storage-auto-scaling)
#### Read replicas vs Multi AZs
- [Read replicas vs Multi AZs](read-replicas-vs-multi-azs)
#### RDS Custom
- [RDS Custom](rds-custom)
#### Amazon Aurora
- [Amazon Aurora](aurora)

### Terms
- [displayed-link-name][your-link-name]
- failover:
    - Failover is the automatic process of switching to a redundant or standby system after the primary system fails
    - similar words:
        - switchover
        - fallback
        - failback
        - redundancy
        - fault tolerance
        - high availability
        - continuous availability
- standby:
    - readiness for duty or immediate/instant deployment.
    - similar words:
        - reserve
        - backup
        - substitute
        - stand-in
        - and understudy
        
- standalone/stand-alone:
    - (of computer hardware or software) able to operate independently of other hardware or software.
    - similar words:
        - single

### References
[rds-custom]: ./rds-custom.md
[aurora]: ./aurora.md
[read-replicas-vs-multi-azs]: ./read-replicas-vs-multi-azs.md
[rds-storage-auto-scaling]: ./rds-storage-auto-scaling.md
![your-img-name](your/image/path)