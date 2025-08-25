### Auto Scaling Group (ASG)
automatically scale in/out to respond to the change in traffic load.

#### Features
- ASG
    - allows users to configure min/desired/max number of instances.
    - allows users to pair itself with a load balancer, to automatically register new instances to the load balancer.
    - recreates an ec2 instance in case a previous one is terminated or unhealthy.
    - can be used for free.
- Launch Template (the same as the deprecated name, "Launch Configurations")
    - AMI + Instance type
    - EC2 User Data
    - EBS Volume
    - Security Groups
    - SSH key pair
    - IAM Roles for the instance
    - Network + Subnet Info
    - Load Balance Info
    - Min Size / Initial Capacity / Max Size
    - Scaling Policies
- Scaling Policies
    - e.g., scale in/out ASG based on **[CloudWatch](#cloudwatch)** alarms
    - types
        - dynamic policies
            - target tracking scaling
                - simple to set up. set a target like average ASG CPU usage, and set a goal like to make the target around 40%.
                - creating target tracking scaling will create cloudwatch alarms
            - simple/step scaling
        - scheduled policies(= scheduled actions)
            - schedule scaling. for example, increase the mininum capacity to 10 at 5 pm on Fridays.
        - predictive policies
            - analyse historical traffic/load, and generate forecast, then schedule scaling actions.
            - this is very handy when you have cyclical data for traffic load. 
- Scaling cooldowns
    - cooldown period when the ASG does not change the number of instances, in order to allow metrics to stabilise.
    - ASG goes in the cooldown period after a scaling activity happens.

#### Terms
- [displayed-link-name][your-link-name]

##### CloudWatch
- An alarm monitors a metric such as average CPU usage, or a custom metric.
- e.g., if average CPU usage as a whole in your ASG is too high, then the alarm will be triggered to notice ASG to run scaling activity.
- based on alarms, you can create scale in/out policies.

##### metrics
- measurable data. in cloudwatch and auto scaling group, it usually means data that helps determine when to scale.
- metrics common examples
    - CPU utilisation
    - Network in/out
    - Request count
    - Custom metrics(e.g., queue length)

#### References
[your-link-name]: your/file/path
![your-img-name](your/image/path)