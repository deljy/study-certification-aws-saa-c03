### Elastic Network Interface (ENI)
A virtual network card that can be attached to EC2 instances in a VPC, allowing instances to have multiple network interfaces for different purposes

#### Features
- they're bound to a specific AZ like EBS volumes
- every EC2 instance has one primary ENI by default that cannot be detached
- you can attach additional secondary ENIs for multi-homing scenarios
- hot attach/detach capability - can move ENIs between instances while running
- ENI attributes persist when moved between instances
- each ENI has its own MAC address, security groups, and IP addresses
- useful for creating management networks, network appliances, and high-availability solutions

#### Terms
- Primary ENI: The default network interface that comes with every EC2 instance and cannot be detached
- Secondary ENI: Additional network interfaces that can be attached/detached from instances
- Multi-homing: Having multiple network connections/interfaces on a single instance
- Hot attach/detach: The ability to attach or detach network interfaces while the instance is running
- MAC address: Media Access Control address, a unique identifier for network interfaces
- Source/destination check: A flag that determines whether the instance can send/receive traffic not destined for itself

#### imgs
![your-img-name](your/image/path)
