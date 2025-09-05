## CloudFront VPC Origins
using ALB or EC2 as an origin using VPC origins (private network)

### Features
#### general
- advantage
    - allows you to deliver content from your apps hosted **in your VPC private subnets**(no need to expose them on the internet)
- deliver traffic to private:
    - application load balancer
    - network load balancer
    - ec2 instances
#### using VPC origins on public network
- this involves editing security groups for your resources which may lead to security concerns.


### References
[your-link-name]: your/file/path
![your-img-name](your/image/path)