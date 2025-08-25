### Cross-Zone Load Balancing
short explanation comes here

#### Features
- works for
    - ALB (enabled by default & no charges)
    - NLB & GLB (disabled by default & charges for inter AZ data if enabled)
- evenly distribute requests/traffic across all registered instances in all AZs
- but, without this feature activated, requests will be evenly distributed by the number of AZs.
- examples
    - with CZLB, 2 instances in A-AZ and 8 instances in B-AZ will evenly have 10 requests per second
    - without CZLB, 2 instances in A-AZ will have 25 requests, wihle 8 instances in B-AZ will have 6.25 requests.

#### Terms
- [displayed-link-name][your-link-name]

#### References
[your-link-name]: your/file/path
![your-img-name](your/image/path)