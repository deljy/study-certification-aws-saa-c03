## Backups & Monitoring
short explanation comes here

### Features
#### Backups
#### Backups - RDS Backups
- Automated Backups
    - daily full backup of the database (during the backup window)
    - transaction logs are backed up by RDS every 5 minutes (which means you can restore to any point in time from oldest backup to 5 mins ago)
    - can be set 1-35 days of retention, or 0 to disable automated backups
- Manual DB Snapshots
    - manually trigger by user
    - retention of backup for as long as you want
    - useful when you'd like to stop using database because having a snapshot is much cheaper than an unused RDS database which consumes storage.
#### Backups - Aurora Backups
- Automated backups
    - can be set 1-35 days of retention, **but can not be set to 0 to disable automated backups**
    - point-in-time recovery in that timeframe
- Manual DB snapshots
    - the same as RDS backups' manual db snapshots
#### Restore Backups
- Restoring a RDS / Aurora backup or a snapshot creates *a new database*
- Restoring MySQL RDS database from S3
    - create/store a backup of your on-premises db
    - store it on Amazon S3 Object storage
    - restore the backup file onto a new RDS instance running MySQL
- Restoring MySQL aurora clusster from s3
    - create a backup of your on-premises database using Percona XtraBackup
    - store it on Amazon S3 Object storage
    - restore the backup file onto a new RDS instance running MySQL
#### Aurora Database Cloning
- create a new aurora db cluster from an existing one
- pros:
    - faster than snapshot & restore
        - thanks to **copy-on-write** protocol.
            - initially, the new db cluster uses the same data volume as the original db cluster (no copying is needed at this step)
            - when updates are made to the new db cluster data, then addtional storage is allocated and data is copied to be separated
    - very fast & cost-effective
 cons:
    - Cloned cluster depends on the original’s data volume  
        - You can't delete the source DB until clones are deleted.
    - Performance impact possible if both source and clone are heavily used  
        - Since they initially share the same underlying storage.
    - Limited to same AWS region  
        - You can’t clone across regions (use snapshot+restore instead).
    - No major version upgrades during cloning  
        - Clone must match the source's engine ve
- useful:
    - when creating a "staging" database from a "production" database without impacting the production database.

### Terms
#### [displayed-link-name][your-link-name]

### References
[your-link-name]: your/file/path
![your-img-name](your/image/path)