This markdown includes answers I got wrong or wasn’t sure about.

### question4
Elastic Network Interface (ENI) can be attached to EC2 instances in another AZ.

- Answer: Elastic Network Interfaces(ENIs) are bounded to a specific AZ. you can not attach an ENI to an EC2 instance in a different AZ.

- Explanation: an Elastic Network Interface (ENI) can only be created and used within a single Availability Zone (AZ)—it can't move between AZs.

### question5

about ec2 hibernate

- Explanation: In order to enable ec2 hibernate, the ec2 instance root volumn type must be an EBS volume and must be encrypted to nsure the protection of sensitive content. Also, it must
    - supports on-demand and reserved instnaces.
    - has ram less than 150gb.
    - has root volume type an EBS volume.