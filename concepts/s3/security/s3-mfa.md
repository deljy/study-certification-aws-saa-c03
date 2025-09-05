## S3 Multi-Factor Authentication
short explanation comes here

### Features
#### general
- is a way to authenticate users with a code generated from multi-factor features like an app on a mobile phone or two factor device like ubikey
- in order to enable MFA, **versioning must be enabled** on the bucket
- only the bucket owner(root account) can enable/disable MFA delete
- when enabled, MFA will be required:
    - permanently delete an object version
    - suspend versioning on the bucket
- MFA won't be required to:
    - enable versioning
    - list deleted versions

### References
[your-link-name]: your/file/path
![your-img-name](your/image/path)