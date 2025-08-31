This markdown includes answers I got wrong or wasn’t sure about.

### question3
Elastic Load Balancers provide a .......................

- Options:
    - static IPv4 we can use in our app
    - static DNS name we can use in our app
    - static IPv6 we can use in our app

- Answer: 
    - static DNS name we can use in our app

- Explanation:
    - Only network load balancer provides both static DNS anme and static IP. while, application load balancer provides a static DNS name but it does not provide a static IP. the reason is because aws wants your elastic load balancer to be accessible using a static endpoint, even if the underlying infrastructure that aws manages changes.

### question19
An application is deployed with an Application Load Balancer and an Auto Scaling Group. Currently, you manually scale the ASG and you would like to define a Scaling Policy that will ensure the average number of connections to your EC2 instances is around 1000. Which Scaling Policy should you use?

- Options:
    - Simple Scaling Policy
    - Step Scaling Policy
    - Target Tracking Policy
    - Scheduled Scaling Policy
- Answer:
    - Target Tracking Policy
- Explanation:
    - Target Tracking Policy is the best choice when you want to maintain a specific metric target automatically. In this case, you want to keep the average number of connections around 1000. Target Tracking adjusts the number of instances dynamically to maintain that target without needing to define specific thresholds or steps, making it ideal for this scenario. [read more about ASG.](../../concepts/elb&asg/asg.md)

### questionN
description

- Options:
    -
- Answer:
    -
- Explanation:
    -