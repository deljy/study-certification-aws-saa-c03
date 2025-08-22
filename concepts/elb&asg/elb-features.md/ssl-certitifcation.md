### SSL Certification
short explanation comes here

#### Features
- uses an X.509 certificate (SSL/TLS server certificate)
- users can manage certificate using ACM (AWS Certificate Manager)
- alternately, users can create/upload their own certificates
- for HTTPs listeners in Load Balancer
    - a default certficate must be specified.
    - an optional list of certs can be added to support multiple domains.
    - a security policy to support older versions of SSL/TLS (legacy clients) can be specified.
    - clients can use [SNI](#server-name-indication-sni) to specify the hostname they reach
- for ALB & NLB
    - supports multiple listeners with multiple SSL certs
    - uses SNI to make it work.

#### Terms

##### Server Name Indication (SNI)
- SNI solves the problme of loading multiple SSL certs onto one web server, in order for the web server to serve multiple websites.
- SNI is a newer protocol which requires the client to indicate the hostname of the target server in the initial SSL handshake.
- then, the server will find the correct certificate, or return the default one.
- SNI works for
    - ALB
    - NLB
    - CLoudFront
- summary: SNI enables load balancers to have multiple certificates to route requests to correct targets.

#### References
[your-link-name]: your/file/path
![your-img-name](your/image/path)