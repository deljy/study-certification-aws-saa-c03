This markdown includes answers I got wrong or wasn’t sure about.

### question8
You would like to ensure you have a replica of your database available in another AWS Region if a disaster happens to your main AWS Region. Which database do you recommend to implement this easily?

- Options:
    - rds read replicas
    - RDS Multi-AZ
    - Aurora Read REplicas
    - Aurora Global Database

- Answer: 
    - Aurora Global Database

- Explanation:
    - AUrora Global Databases allows you to have an Aurora Replicas in another AWS Region, with up to 5 secondary regions

### question9
How can you enhance the security of your ElastiCache Redis Cluster by allowing users to access your ElastiCache Redis Cluster using their IAM Identities (e.g., Users, Roles)?

- Options:
    - Using Redis Authentication
    - Using IAM Authentication
    - Use Security Groups

- Answer:
    - Using IAM Authentication

- Explanation:
    -

### question11
You would like to create a disaster recovery strategy for your RDS PostgreSQL database so that in case of a regional outage the database can be quickly made available for both read and write workloads in another AWS Region. The DR(Disaster Recovery) database must be highly available. What do you recommend?

- Options:
    - Create a read replica in the sme region and enable Multi-AZ on the main database
    - Create a read replica in a different region and enable Multi-AZ on the read replica
    - Create a read replica in the same region and enable Multi-AZ on the read replica 
    - Enable Multi-Region option on the main database
- Answer:
    - Create a read replica in a different region and enable Multi-AZ on the read replica
- Explanation:
    - A cross-region read replica provides a standby copy in another AWS Region, which can be promoted to a standalone, writable DB during a regional outage. Enabling Multi-AZ on the replica ensures high availability in the target region, meeting both disaster recovery and availability requirements.
    - [read more about it](../../concepts/rds/rds-general/read-replicas-vs-multi-azs.md)

### question12
You have migrated the MySQL database from on-premises to RDS. You have a lot of applications and developers interacting with your database. Each developer has an IAM user in the company's AWS account. What is a suitable approach to give access to developers to the MySQL RDS DB instance instead of creating a DB user for each one?

- Options:
    - By default IAM users have access to your RDS database
    - Use Amazon Cognito
    - Enable IAM Database Authentication
- Answer:
    - Enable IAM Database Authentication
- Explanation:
    -

### question23
You need to store long-term backups for your Aurora database for disaster recovery and audit purposes. What do you recommend?

- Options:
    - Enable automated backups
    - Perform on demand backups
    - Use aurora database cloning
- Answer:
    - Perform on demand backups
- Explanation:
    - read about [manual db snapshot](../../concepts/rds/rds-general/backup&monitoring.md) 

### question24
Your development team would like to perform a suite of read and write tests against your production Aurora database because they need access to production data as soon as possible. What do you advise?

- Options:
    - Create an aurora read replica for them
    - Do the test against the production database
    - Make a DB snapshot and restore it into a new database
    - Use the aurora cloning feature
- Answer:
    - Use the aurora cloning feature
- Explanation:
    - "Making a DB snapshot and restore it into a new database" is not suitable for a situation where you need to quickly create a clone of DB.

### question25
You have 100 EC2 instances connected to your RDS database and you see that upon a maintenance of the database, all your applications take a lot of time to reconnect to RDS, due to poor application logic. How do you improve this? 

- Options:
    - fix all the applications
    - disable Multi-AZ
    - enable Multi-AZ
    - use an RDS Proxy
- Answer:
    - use an RDS Proxy
- Explanation:
    - Using an RDS proxy can reduce the failover time by up-to 66% and keeps connection active for your applications

### questionN
description

- Options:
    -
- Answer:
    -
- Explanation:
    -

