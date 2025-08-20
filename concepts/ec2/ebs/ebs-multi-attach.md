### EBS Multi-Attach
Attach one EBS volume to a multitude of EC2 instances in the same AZ.

#### Features
- *Multi-Attach EBS Volumes can not be used as root/boot volumes*
- This feature is only available for provisioned [io1/io2 family EBS volumes](./ebs-volume-types.md).
- The max number of instances that one EBS volume can be attached at a time is 16.
- EBS Multi Attach requires cluster-aware file systems (like cluster file systems) to prevent data corruption

#### Terms
- 

#### imgs
![your-img-name](your/image/path)