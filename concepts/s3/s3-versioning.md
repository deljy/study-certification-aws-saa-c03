## S3 Versioning
short explanation comes here

### Features
#### general
- you can version your files under the same key
- it is enabled at the bucket level
- same key overwrite will leave each version of the previous files
- it is the best practice to version your buckets
    - when protecting against unintended deletes (ability to restore a version)
    - easy roll back to previous version
- notes:
    - any file that is not versioned prior to enabling versioning will have version id "null" (while verioned objects have hashed version ids)
    - suspending versioning does not delete the previous versions.
    - if you delete an object of a type of "delete marker(instead of extension name)", the file will be restored

### References
[your-link-name]: your/file/path
![your-img-name](your/image/path)