## Amazon ElastiCache
in-memory cache database with memcached/redis

### Features
#### General features
- ElastiCache is to get/use a cloud-native Redis/Memcached which is managed by AWS
- high-performance/low-latency
- helps
    - reduce load off of databases for read intensive workloads
    - make your app stateless (since state info/data can be stored in in-memory cache apart from the app itself)
- aws takes care of OS maintennace/patching, optimisations, setup, config, monitoring, failure-recover(failover) and backups, etc
- using elasti-cache involves heavy application code changes
- **cache-hit/miss** cases/situations
    - cache-hit: data your app's query was looking for has been found in in-memory cache(= elasti-cache)
    - cache-miss: read data from db(like RDS/Aurora) and write to cache
- cache must be configured with invalidation strategy, in order to keep data up-to-date

### Terms
#### [displayed-link-name][your-link-name]

### References
[your-link-name]: your/file/path
![your-img-name](your/image/path)