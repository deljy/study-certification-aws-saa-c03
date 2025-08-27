### No Service
No Service. This md file just explains a basic concept for high availability and scalability for ec2

#### Features
- vertical scaling: increase instance size (= scale up/down)
    - from: t2.nano - 0.5G of RAM, 1 vCPU
    - to: u-l2tb1.metal - 12.3TB of RAM, 448 vCPUs
- horizontal scaling: increase number of instances (= scale out/in)
    - Auto Scaling Group (ASG)
    - (Elastic) Load Balancer
- high availability: run instances for the same application across multi AZs
    - Auto Scaling Group
    - multi AZs Load Balancer multi AZs

#### Terms
- [displayed-link-name][your-link-name]

#### References
[your-link-name]: your/file/path
![your-img-name](your/image/path)