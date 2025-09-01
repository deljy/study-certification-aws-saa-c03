## Geolocation Routing Policy
a type of routing policies that Route53's record can have

### Features
#### general
- different from "latency-based" routing policy
- this routing policy is based on user location
- specify location by continent, country or by US states (if there's overlapping, most precise loation will be selected)
- should create a "default" record in case there's no match on location
- use cases:
    - website localisation
    - restrict
    - content distribution
    - load balancing
- can be associated with health check
- can select a region where requests are comming from to route them to the target value of the record



### References
[your-link-name]: your/file/path
![your-img-name](your/image/path)