#### Resource Access Policy
- attached to the resource (S3 bucket, SNS topic, SQS queue, Lambda function). it controls who (which principals) can access that resource
- example:
    - S3 bucket policy allowing SNS or Lambda to be triggered by the bucket
- in short:
    - Resource policies say "who can use me?"

#### IAM Policy
- attached to users, roles, or services. it defines what actions that identity can perform on resources.
- example:
    - an IAM role with permissions to read from s3 or publish to SNS.
- in short:
    - IAM Policies say "what can you do?"