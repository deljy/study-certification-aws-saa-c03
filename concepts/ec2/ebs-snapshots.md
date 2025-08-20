### EBS Snapshots
EBS Snapshot makes a backup (snapshot) of your EBS volume at a point in time

#### Features
- EBS Snapshots
    - can copy snapshots across AZ or Region.
    - in order to make it, it is not necessary to detach volume to do snapshot, but recommended.
    - makes a backup (snapshot) of your EBS volume at a point in time.
    - an ebs snapshot is an independant backup copy of a volume — not linked to to the original volume.
- Archive tier
    -archive tier for EBS Snapshots is a low-cost storage option for infrequently accessed snapshots. It's cheaper than the standard tier but takes longer (up to 72 hours) to restore.
- [Recycle bin](./recycle-bin.md)
- Fast Snapshot Restore(FSR)
    - it enables you to create EBS volumes from snapshots with full performance instantly, without waiting for initialization.
    - so obviously, it costs a lot.



#### Terms
- 

#### imgs
![your-img-name](your/image/path)