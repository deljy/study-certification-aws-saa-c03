This markdown includes answers I got wrong or wasn’t sure about.

<<<<<<< HEAD
### questionN
description

- Options:
    -
- Answer:
    -
- Explanation:
    -
=======
### question6
You would like to encrypt an unencrypted EBS volume attached to your EC2 instance. What should you do?

- Answer: Create an EBS snapshot of your EBS volume. Copy the snapshot and tick the option to encrypt the copied snapshot. Then, use the encrypted snapshot to create a new EBS volume.

- Options: 
    - Create an EBS snapshot of your EBS volume. Copy the snapshot and tick the option to encrypt the copied snapshot. Then, use the encrypted snapshot to create a new EBS volume.
    - Select your EBS volume, choose Edit Attributes, then tick the Encrypt using KMS option.
    - Create a new encrypted EBS volume, then copy data from your unencrypted EBS volume to the new EBS volume.
    - Submit a request to AWS support to encrypt your EBS volume

- Explanation: 

### question7
You have a fleet of EC2 instances distributes across AZs that process a large data set. What do you recommend to make the same data to be accessible as an NFS drive to all of your EC2 instances?

- Answer: Use EFS.

- Options:
    - Use EFS
    - Use EBS
    - Use an Instance Store.

- Explanation: EFS is a network file system (NFS) that allows you to mount the same file system on EC2 instances that are in different AZs.

### question8
You would like to have a high-performance local cache for your application hosted on an EC2 instance. You don't mind losing the cache upon the termination of your EC2 instance. Which storage mechanism do you recommend as a Solutions Architect?

- Answer: Use an Instance Store.

- Options:
    - Use EFS
    - Use EBS
    - Use an Instance Store.

- Explanation: EFS is a network file system (NFS) that allows you to mount the same file system on EC2 instances that are in different AZs.
    - Instance Store: Use this option, when you don't mind losing the data for better performance. You can leverage AWS instance store to get higher performance since the disk will be a hard drive attached to the physical server so it provides the best disk I/O performance, but the data will be lost when the instance stops or terminates.

### question0
You are running a high-performance database that requires an IOPS of 310,000 for its underlying storage. What do you recommend?

- Answer: Use an ec2 instance store

- Options:
    - Use an EBS gp2 drive
    - Use an EBS io1 drive
    - Use an EC2 Instance Store
    - Use an EBS io2 block express drive

- Explanation: You can run a database on an EC2 instance that uses an Instance Store, but you'll have a problem that the data will be lost if the EC2 instance is stopped (it can be restarted without problems). One solution is that you can set up a replication mechanism on another EC2 instance with an Instance Store to have a standby copy. Another solution is to set up backup mechanisms for your data. It's all up to you how you want to set up your architecture to validate your requirements. In this use case, it's around IOPS, so we have to choose an EC2 Instance Store.
>>>>>>> f831c957e969f25fcc9c688cfe684602503f7477
