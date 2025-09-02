## Amazon S3 Security
short explanation comes here

### Features
#### user based
- IAM policies which makes whether or not API calls should be allowed for a specific user from IAM

#### resource based
- bucket policies: bucket wide rules from the s3 console (allows cross account)
- object access control list (ACL):  finer grain (can be disabled)
- bucket access control list (ACL): less common (can be disabled)

#### notes
- an IAM principal can access an s3 object if
    - the user IAM permissions ALLOW if OR the resource policy ALLOWs it
    - AND there's no explict DENY
- encryption
    - can encrypt objects using encryption keys

#### S3 bucket policies
- JSON based policies:
    - resources: buckets and objects
    - effect: allow or deny
    - actions: set of API to allow or deny
    - principal: the account or user to apply the policy to
- s3 bucket for policy to:
    - grant public access to the bucket
    - force objects to be encrypted at upload
    - grant access to another account (cross account)

#### bucket settings for block public access
- settings created by aws to prevent company data leaks
- can be set at the account level (applying all buckets in the account)
- even if bucket/iam policies are enabled, if this setting is on, then none of the bucket targetted by this setting will be accessed


### References
[your-link-name]: your/file/path
![your-img-name](your/image/path)