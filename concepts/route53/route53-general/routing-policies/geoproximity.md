## Geoproximity Routing Policy
a type of routing policies that Route53's record can have

### Features
#### general
- Route traffic to your resources based on the geographic location of users and resources
- ability to shift more traffic to resources based on user-defined "bias"(similar to weights, but for location)
- to change the size of the geographic region, specify bias values:
    - to expand (1 to 99) - moretraffic to the resource
    - to shirnk (-1 to -99)- less traffic to the resource
- resources can be:
    - AWS resources (specify AWS region)
    - Non-AWS resources (specify latitude and longitude)
- users must use Route53 traffic flow to use this feature


### References
[your-link-name]: your/file/path
![your-img-name](your/image/path)