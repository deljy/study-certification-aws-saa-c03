## ServiceName
short explanation comes here

### Features
#### general
- Server-Side Encryption (SSE)
    - [SSE with Amazon S3-Managed Keys (SSE-S3)](#sse-with-amazon-s3-managed-keys-sse-s3)
    - [SSE wth KMS Keys stored in AWS KMS (SSE-KMS)](#sse-wth-kms-keys-stored-in-aws-kms-sse-kms)
    - [SSE with Customer-Provided Keys (SSE-C)](#sse-with-customer-provided-keys-sse-c)
- Client-Side Encryption

#### SSE with Amazon S3-Managed Keys (SSE-S3)
- Encryption S3 objects using keys handled, managed, and owned by AWS (enabled by default)
- object is encrypted in server-side
- encryption type/algorithm is AES-256
- **must set header called** "x-amz-server-side-encryption": "AES256"
- enabled by default for new buckets and new objects 

#### SSE wth KMS Keys stored in AWS KMS (SSE-KMS)
- leverage AWS key management service (AWS KMS) to manage encryption keys
- object is encrypted in server-side
- **must set header called** "x-amz-server-side-encryption": "aws:kms"
- advantages:
    - user control
    - audit key usage using CloudTrail (logging usage of key)
- difference between SSE-KMS and SSE-S3
    - SSE-KMS stores the key in AWS KMS
- limitation
    - "PUT"(upload) operation calls KMS API called "GenerateDataKey"
    - "READ"(READ) operation also calls KMS API called "Decrypt"
    - each api call is going to count towards the KMS quota per second
        - 5500, 10000, 30000 req/s based on your region
        - you can increase the quota using Service Quotas Console

#### SSE with Customer-Provided Keys (SSE-C)
- when you want to manage your own encrpytion keys outside of AWS
- since Amazon S3 does not store the encryption key, you need
    - to use HTTPS
    - to provide the encryption key for your PUT/READ operations in HTTP headers for every HTTP request

#### Client-Side Encryption
- encryption/decryption happens in client side.
- by doing that, clients can manage their encryption cycles.

#### default encryption vs bucket policy
- default encryption (SSE-S3)
    - SSE-S3 is going to be automatically applied to new objects to your bucket
- bucket policy
    - optional
    - you can preemptively apply this on top of your default encryption
    - you can explicitly reject/deny requests without encryption header by setting up this. 

#### About encryption in flight/transit (SSL/TLS)
- encryption in flight/transit is also called SSL/TLS
- amazon s3 exposes 2 endpoints
    - HTTP enpdoint
    - HTTPS endpoint
- HTTPS is recommended obviously
- HTTPS is mandatory for SSE-C
- you can force encryption in flight/transit attaching bucket policy with a condition that looks like
    ```JSON
    "Condition": {
        "Bool": {
            "aws:SecureTransport": "false"
        }
    }
    ```
    this will block clients/users request not on HTTPS

### References
[your-link-name]: your/file/path
![your-img-name](your/image/path)