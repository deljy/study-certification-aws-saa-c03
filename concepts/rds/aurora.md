## Amazon Aurora
short explanation comes here

### Features
#### General
- Aurora is a proprietary tech from AWS (not open sourced)
- postgres and mysql are both supported as aurora DB (which means your drivers will work as if aurora was a postgres or mysql db)
- aurora is "AWS cloud optimised" and claims 5x performance improvement over mysql on RDS, and over 3x the performance of postgres on RDS
- aurora storage automatically grows in increments of 10 GB, up to 128 TB.
- aurora can have up to 15 replicas and the replication process is faster than mysql on RDS (sub 10ms replica lag)
- failover in aurora is instantaneous. high availability
- aurora costs generally 20% more than RDS.
#### High availability and read scaling
- 6 copies of your data exist across 3 different AZs:
    - for write operation, 4 copies are required to acknowledge the operation. (fault tolerant)
    - for read operation, 3 copies are required to acknowledge the operation. (fault tolerant)
    - self healing with peer-to-peer replication in case of data corruption
    - storage is striped across 100s of volumes
- as well as RDS with other DB engines, one aurora instance takes write ope (master/primary)
- automated failover for master will be done in less than 30 secs
- master and up-to 15 aurora read replicas can exist, and one of the read replicas will replace the master/primary instance if that fails.
#### as a cluster
- writer endpoint (a DNS name, which always points to the master/primary instance)
- reader endpoint (a DNS name, that becomes an entrypoint for a cluster of read replicas and achieves *load balancing* for the incoming requests)
    - load balancing happens at the connection level, instead of statement level.
    - connection level:
        - a client connects to a specific replica, all queries over the connection go to the same replica.
    - statement level:
        - each individual SQL query will go separately distributed across replicas.

### Terms
#### [displayed-link-name][your-link-name]

### References
[your-link-name]: your/file/path
![your-img-name](your/image/path)