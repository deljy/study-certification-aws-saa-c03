### Amazon Machine Image
AMI are a customisation of an EC2 instance as well as container images

#### Features
- AMI are built for a specific region, and then can be copied across regions
- EC2 instances are launched from
    - a public AMI that aws provides
    - your own AMI that you make/maintain them on your own
    - an aws marketplace AMI that someone else makes/maintains
- can be built
    - 1. start an ec2 and customise it
    - 2. stop the instance for data integrity, if you integrate data into the image
    - 3. build an AMI — this will also create EBS snapshots
    - 4. launch instances from other AMIs.
- when you launch ec2 instances with ami, you can add more userdata (obviously)
- [Recycle bin](../recycle-bin.md)

#### Terms
- 

#### imgs
![your-img-name](your/image/path)