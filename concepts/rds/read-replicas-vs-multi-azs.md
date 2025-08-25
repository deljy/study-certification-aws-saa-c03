## Read replicas vs Multi AZs
short explanation comes here

### Features
#### Differences
- RDS Read replica
    - Purpose:
        - Improve read scailablity/handle more read traffic
    - Key features:
        - replication is done *asynchronously*.
        - *up-to 15 read replicas* can exist at a time. (in order to use read replicas, your client app for the DB has to update its connection url/string)
        - read replica allows *"SELECT" query only*.
        - Data transfer between mutli AZs within the same region is free (*No network cost*).
        - Data transfer across multiple regions incurs a replication fee for the network.
        - Read replica of a database can be *promoted/upgraded* to a standalone-database/writable-instance.
        - Not automatically failover targets.
    - Use cases:
        - Offload read traffic
        - Analytics/reporting
        - Geographically closer replicas for latency
- Multi AZs
    - Purpose:
        - Provide high availability and automatic failover
    - Key features:
        - synchronous replication
        - One DNS name (automatic app failover to standby)
            - standby instance will be replaced to continue to use the DNS once the master/primary instance dies.
        - increase availability
        - failover in case of loss of AZ, loss of network, instance or storage failure
        - No manual intervention in apps
        - not used for scaling, just stays as a standby one for the master/primary instance.
    - Use cases:
        - Production workloads needing high availability
        - Disaster recovery
        - Compliance 

#### Notes
- you can set up your read replica as a multi AZ's standby instance.
- about transforming your RDS from single-AZ to multi-AZ:
    - zero downtime operation(no need to stop the existing running DBMS)
    - only thing to do is to click "modify" for the database and enable multi-AZ.
    - what happens internally:
        - a snapshot of the master/primary db is created
        - a new db is restored from the snapshot in a new AZ
        - synchronisation will start between the two db

### Terms
#### [displayed-link-name][your-link-name]

### References
[your-link-name]: your/file/path
![your-img-name](your/image/path)