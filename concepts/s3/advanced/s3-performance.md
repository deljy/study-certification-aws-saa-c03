## Amazon S3 in aspect of performance
short explanation comes here

### Features
#### general
- s3 automatically scales to high request rates, latency 100-200 ms
- your app can achieve at least 3,500 put/copy/post/delete or 5,500 get/head requests per second **per prefix in a bucket**
- no limits to the number of prefixes in a bucket
    - > the more prefixes you spread/have, the more requests per a second can be achieved

#### multi-part upload:
- parallelize uploads (just dividing a file into small pieces, then upload in parallel)
- recommended for files larger than 100 MB
- must for files larger than 5GB.

#### transfer acceleration
- increase transfer speed by transferring file to an aws edge location via public internet, then forward the data to the s3 bucket in the target region via private internet.
- compatible with multi-part upload
- key point:
    - maximise private network usage instead of relying on public internet to accelerate transfer speed
    - sender location >--(public)--> edge location >--(private)--> bucket in the target region

#### s3 byte-range fetches
- parallelise GET requests by requesting specific byte ranges (just getting divided pieces of a file in parallel)
- better resilience in case of failures
- can be used to speed up downloads
- can be used to retrieve only partial data (for example, the head/metadata of a file)




### References
[your-link-name]: your/file/path
![your-img-name](your/image/path)