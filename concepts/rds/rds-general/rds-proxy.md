## RDS Proxy
A connection pooler for RDS/Aurora. (also can be described as a fully managed database proxy for RDS)

### Features
#### Purpose
- manages and re-uses DB connections
- improves app scalability and failover time
- secures DB credentials via IAM or Secrets Manager
#### general features
- allows apps to pool and share DB connections established with the database
- improving database efficiency by reducing the stress on database resoureces (e.g., CPU, RAM) and *minimise open connections* (and timeouts)
- Fully serverless, autoscaling, highly available (supporting multi-AZ)
- reduce RDS/Aurora failover time by upto 66% (making transition between primary/standby instances)
- supports RDS (mysql, postgres, mariaDB, ms sql server) and aurora (mysql, postgresql)
- no code changess required for most apps
- enforce iam authentication for db, and securely store credentials in aws secrets managers
- RDS proxy is never publicly accessible (must be acceessed from VPC)
#### ALB vs RDS Proxy
- ALB: for HTTP/s traffic
- RDS Proxy: for database traffic (e.g., MySQL, PostgreSQL)

### Terms
#### [displayed-link-name][your-link-name]

### References
[your-link-name]: your/file/path
![your-img-name](your/image/path)