## Route53
A highly available, scalable, fully managed and *Authoritative* DNS

### Features
#### general
- is authoritative:
    - you can update the DNS records
    - more about [authoritative DNS server][authoritative DNS server]
- is a Domain Registrar
- is able to check the health of your resources
- is the only AWS service which provides 100% availability SLA (Service Level Agreement)
- 53 is a reference to the tranditional DNS port

#### Hosted Zones
- which seems equiv of [zone files][zone-file] in Domain Name System
- read more about [zone files](https://docs.redhat.com/en/documentation/red_hat_enterprise_linux/4/html/reference_guide/s2-bind-zone-examples)
- you pay $0.50 per month per hosted zone

#### DNS/Route53 Record
- purpose:
    - define how to route traffic for your domain
- feature:
    - domain/subdomain name e.g., example.com
    - [record type][record-types]
    - value:
        - target desination (ip address or another dns name)
    - routing policy:
        - how route 53 responds to queries
    - [TTL(Time To Live)](#time-to-live)

#### TTL(Time To Live):
- lifetime for cache that your DNS client has for DNS record from your DNS server.
- amount of time the record cached at DNS resovlers
- in other words, the amount of time (usually in seconds) that DNS resolvers cache a record before checking for updates (= sending queries to DNS servers).
- Lower TTL = more frequent updates; higher TTL = more cahcing.
- example:
    - while the cached record is alive (still in TTL), it won't try to look up a new DNS record even if the dns server had made a change in its DNS record.

#### checking DNS Records
```bash
DOMAIN_NAME=example.com
dig $DOMAIN_NAME

# or use ```nslookup $DOMAIN_NAME```
```

#### Zone Apex (Apex, apex level, and so on)
- the root of a DNS zone — the domain name without any subdomain.
- e.g., For example.com, the zone apex is example.com (not www.example.com or api.example.com).

#### DNS Resolvers
- They are servers (usually run by ISPs or public DNS providers like Google or Cloudflare) that take a domain name and find its IP address by querying other DNS servers. They cache responses based on TTL.

#### Route53 Resolver Endpoint
- It's a customizable DNS endpoint in AWS Route 53 that lets your on-premises network resolve DNS names in AWS (inbound) or lets AWS resources resolve names in your on-premises network (outbound).

#### Hybrid DNS
- Hybrid DNS combines on-premises DNS (like Microsoft AD DNS) with cloud DNS (like Route 53) to allow name resolution across both environments. It's common in hybrid cloud setups.
- Example:
    - A company runs applications partly on-premises and partly in AWS. Their internal apps use on-prem DNS, but cloud apps use Route 53. Hybrid DNS lets users seamlessly access both on-prem and cloud resources by resolving names across both DNS systems.

### References
[authoritative DNS server]: ./dns.md
[zone-file]: ../../static/examples/zonefile.example
[record-types]: ./route53-general/route53-records.md
![your-img-name](your/image/path)