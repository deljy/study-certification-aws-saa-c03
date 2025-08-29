#### At-rest encryption
- Protects data stored on disk (DB storage, snapshots, backups, logs).
    - means that data stored on disk is encrypted.
    - for new data, encryption happens automatically at write time, before it hits the disk.
    - it does not re-encrypt everything from scratch each time—only the new or modified [blocks][block].
- Uses AWS KMS-managed keys.

#### In-flight encryption
- Protects data during transmission (between client & DB).
- Uses TLS/SSL to encrypt the connection.
- If the DB client and server are on the same machine, in-flight encryption isn't usually needed—data doesn’t leave the system.
    - in-flight encryption is required/recommended when data is stored on NAS(Network Attached Storage)

[block]: ./disk/block.md