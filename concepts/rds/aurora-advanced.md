## Amazon Aurora Advanced Concepts
short explanation comes here

### Features
#### Custom Endpoint
- used to create a custom endpoint which helps you group instances into a subset
- helpful when you have different kinds of Aurora instances (like ones for analytical queries, and the others for normal read ops)
#### Aurora Serverless
- automated database instantiation and auto-scaling based on actual usage
- good for infrequent, intermittent or unpredectable workloads
- no capacity planning is needed
- pay per second, which can be more cost-effective
#### Global Aurora
- Aurora cross region read replicas:
    - useful for disaster recovery
    - simple to put in place
- Aurora global database(recommended):
    - 1 primary region (read/wrte)
    - up-to 10 secondary (read-only) regions, **replication lag is less than 1 second**
    - up-to 16 read replicas per secondary region
    - helps for decreasing latency
    - promotinganother region (for disaster recovery) has an RTO of less than 1 minute
    - **typical corss-region  replication takes less than 1 second**
#### Aurora Machine Learning
- enables you to add ML-based predictions to your apps via SQL
- simple, optimized, and secure integration between Aurora and AWS ML services
- supported services
    - Amazon SageMaker(use with any ML model)
    - Amazon Comprehend(for sentiment analysis)
- ML experience is not required
- use cases:
    - fraud detection
    - ads targeting
    - sentiment analysis
    - product recommendation
- how it works
    - app sends a SQL query to Amazon Aurora
    - Aurora sends a relevant data to ML services specified above
    - then one of the services returns prediction, to aurora to client app
    - app receives the result

### Terms
#### [displayed-link-name][your-link-name]

### References
[your-link-name]: your/file/path
![your-img-name](your/image/path)