## ElastiCache usage patterns
short explanation comes here

### Features
#### general
- lazy loading: all the read data is cached, data can become stale in cache
- write through: add/update data in the cache when data is written to a DB (no stale data)
- session store: store temporary session data in a cache (using [TTL](#time-to-live-ttl) features)

#### Redis use case
- gaming leaderboards:
    - **redis sorted sets** guarantee both uniqueness and element ordering
    - each time a new element added, it's ranked in real time, then added in correct order

### Terms
#### Time To Live (TTL)
- data saved in the cache will automatically expire and be removed after a certain time.

### References
[your-link-name]: your/file/path
![your-img-name](your/image/path)