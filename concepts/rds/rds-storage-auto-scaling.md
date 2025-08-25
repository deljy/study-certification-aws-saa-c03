## RDS Storage Auto Scaling
short explanation comes here

### Features
#### RDS Storage Auto Scaling
- Helps you increase storage on your RDS DB instance dynamically 
- When RDS detects you're running out of free database storage, it scales automatically 
- Avoid manually scaling your database storage 
- You have to set **Maximum Storage Threshold** (maximum limit for DB storage) 
- Automatically modify storage if: 
    - Free storage is less than 10% of allocated storage
    - Low-storage lasts at least 5 minutes
    - 6 hours have passed since last modification
- Useful for applications with unpredictable workloads 
- Supports all RDS database engines

### Terms
#### [displayed-link-name][your-link-name]

### References
[your-link-name]: your/file/path
![your-img-name](your/image/path)