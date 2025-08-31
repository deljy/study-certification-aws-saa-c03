## Domain Name System
DNS (Domain Name System) translates human-readable domain/host names (like example.com) into IP addresses (like 192.0.2.1) that computers use to identify each other on the network. It's like the internet's phonebook.

### Features
#### DNS terminologies
- domain registrar:
    - Amazon Route 53.
    - goDaddy.
- DNS Records:
    - explanation:
        - a text-based instruction stored in a DNS server's database that translates a human-readable domain name into a machine-understandable IP address or provides other information about the domain.
    - types:
        - A, AAAA, CNAME, NS, ...etc.
- Zone File:
    - A file that contains DNS records.
    - read more about [the difference between zone file and hosted zone in AWS Route53](#zone-file-vs-hosted-zone-in-route-53)
- Name Server:
    - A name server is a server that stores DNS records and answers DNS queries for domain names.
    - there are 2 kinds of name servers: [Authoritative vs Non-Authoritative](#authoritative-name-server-vs-non-authoritative-name-server)
    - [name server category](#name-server-category)
- Hierarchy:
    - Top Level Domain (TLD):
        - e.g., .com, .us, .in, .gov, .org...
    - Second Level Domain (SLD):
        - e.g., amazon.com, google.com, ...
    - example:
        - https://api.www.example.com.
        - ***************************. // root
        - ***********************.com. // TLD
        - ***************.example.com. // SLD
        - ************www.example.com. // Sub Domain
        - ********api.www.example.com. // FQDN (Fully Qualified Domain Name)
        - https**********************. // Protocol

### Terms
#### Zone File vs Hosted Zone in Route 53
- Summary:
    - In Route 53, you don’t manually manage zone files, but the hosted zone acts like a zone file, storing all your domain’s DNS records.
- Differences: 
    - Zone File: A file format (used outside AWS) that lists DNS records (A, CNAME, MX, etc.) for a domain.
    - Hosted Zone: A container for DNS records for a domain (e.g., example.com).

#### Authoritative name server vs Non-Authoritative name server
- Authoritative name server: Has the original DNS records for a domain. It gives the final, trusted answer.
- Non-authoritative name server: Caches answers from authoritative servers. It's faster but may serve slightly outdated info.

#### Name Server Category
- Root DNS Server
    - Top-level servers that direct queries to TLD servers (e.g., .com, .org). They don’t have full DNS records, just pointers.
- Top Level Domain DNS Server
    - Handle top-level domains like .com, .net. They direct to authoritative servers for specific domains.
- Second  Level Domain DNS Server
    - Servers for the actual domain (e.g., example.com). These are typically authoritative name servers.

### References
[your-link-name]: your/file/path
![your-img-name](your/image/path)