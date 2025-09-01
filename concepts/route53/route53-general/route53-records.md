## Route53 record types
short explanation comes here

### Features
#### general
- A:
    - target value: IPv4 address
- AAAA: IPv6 address
- CNAME:
    - target value: a domain name which must have A/AAAA records
    - a hostname to another hostname.
    - cna't create a CNAME record for the top node of a DNS namespace (Zone Apex) e.g., you can't create for exmaple.com but www.example.com
    - read more about [difference between alias records and CNAME records][route53-cname-vs-alias]
- NS: 
    - target value: name servers for the hosted zone
    - An NS (Name Server) record specifies the authoritative DNS servers for a domain. These servers answer queries about that domain.


### References
[route53-cname-vs-alias]: ./route53-cname-vs-alias.md
![your-img-name](your/image/path)