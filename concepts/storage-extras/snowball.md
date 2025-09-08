## AWS Snowball
"Never underestimate the bandwidth of a station wagon full of tapes hurtling down the highway"

### Features
#### general
- highly-secure, portable devices to collect and process data at the edge, and migrate data into/out of aws.
- helps migrate petabytes of data.
- can run ec2 instances or lambda functions at the edge.
- device types:
    - snowball edge **storage** optimised / 104 vCPUs / 416 GB of Memory / 210 TB of SSD storage
    - snowball edge **compute** optimised / 104 vCPUs / 416 GB of Memory / 28 TB of SSD storage
- background/motivation:
    - for example, 10 TB of data will take 30 hours to transfer on 1 Gbps of bandwidth, and 1 PB of data transfer will take 124 days.
    - those kind of challenges happen due to
        - limited conenctivity
        - limited bandwidth
        - high network cost
        - shared bandwidth (can't maximise the line)
        - conenction stability
    - aws snowball's offline devices help perfom faster data transfer/migrations for those cases above.
    - if it takes more than a week to transfer over the network, then use snowball devices.
- purposes:
    - clients will receive or deliver Snowball devices to a location they designate, either to export data from an S3 bucket to their on-premises environment or to import data from their on-premises environment into an S3 bucket.
    - for edge computing like on a truck on the road, a ship on the sea, a mining station underground which have limited internet access and computing power. by setting up a snowball edge device, you can achieve edge computing for pre-processing data, machine leanring, and transscoding media.
- in order to import data into S3 glacier, you must insert the data into s3 bucket with an S3 lifecycle policy

#### Comparison between Snowcone and Snowball Edge
| Feature       | **Snowcone**                            | **Snowball Edge**                          |
| ------------- | --------------------------------------- | ------------------------------------------ |
| **Size**      | Small, portable (8.8 lbs / \~4 kg)      | Larger, heavier (50+ lbs / \~23 kg)        |
| **Storage**   | \~8 TB usable                           | 42–80 TB usable                            |
| **Compute**   | Limited (2 vCPUs)                       | More powerful (up to 52 vCPUs, GPU option) |
| **Power**     | Can run on battery or DC                | Requires AC power                          |
| **Use Cases** | Edge data collection, IoT, portable use | Large-scale migration, edge computing      |
| **Network**   | Wi-Fi or wired                          | Wired only                                 |


### References
[your-link-name]: your/file/path
![your-img-name](your/image/path)