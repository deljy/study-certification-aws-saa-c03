## Weighted Routing Policy
a type of routing policies that Route53's record can have

### Features
#### general
- description:
    - define weights for each record. route 53 uses these weights to determine the **probability** of returning each record (to clients). 
- Probabilistic:
    - Route 53 doesn’t guarantee exact percentages for DNS query distribution. Instead, it uses the weights to influence the chance of each record being returned.
    - Over a large number of queries, the distribution tends toward the defined weights — but it's never exact per time unit (**The law of large numbers**).
- traffic(Probabilistic) = weight for a specific record / sum of all the weights for all records
- DNS records must have **the same name and type**
- can be associated with Health Check
- setting up weight of a record to 0 will make DNS server stop sending the record in response to dns lookup query
- setting up weight of all records to 0 will make DNS server send all of the records evenly as a response
- example:
    - Record A: weight 70
    - Record B: weight 30
    - → A gets ~70% of DNS queries over time.


### References
[your-link-name]: your/file/path
![your-img-name](your/image/path)