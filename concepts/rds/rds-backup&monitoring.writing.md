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
- 

### Terms
#### [displayed-link-name][your-link-name]

### References
[your-link-name]: your/file/path
![your-img-name](your/image/path)