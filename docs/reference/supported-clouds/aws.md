---
title: Amazon Web Services (AWS)
---

# Amazon Web Services (AWS)

ADAC v0.1 provides comprehensive support for Amazon Web Services (AWS), with over 90 natively supported services mapped to architecture icons.

## Example Usage

When defining an `infrastructure.clouds` block in your YAML, set the `provider` to `aws`.

```yaml title="aws-example.adac.yaml"
infrastructure:
  clouds:
    - id: "aws-prod"
      provider: "aws"
      region: "us-east-1"
      services:
        - id: "web-cluster"
          service: "ecs-fargate"
```

## Supported Service IDs

You can use `Ctrl+F` or `Cmd+F` to quickly find a specific service in the tables below.

### Compute

| Service ID | Description |
|---|---|
| `ec2` | Elastic Compute Cloud (Virtual Machines) |
| `ecs-fargate` | Elastic Container Service (Serverless) |
| `ecs-ec2` | Elastic Container Service (EC2 backed) |
| `eks` | Elastic Kubernetes Service |
| `lambda` | Serverless Functions |
| `elastic-beanstalk` | Web App Orchestration |
| `lightsail` | Virtual Private Servers |
| `batch` | Batch Processing |

### Database (14 services)

| Service ID | Description |
|---|---|
| `rds-mysql` | Relational Database Service (MySQL) |
| `rds-postgres` | Relational Database Service (PostgreSQL) |
| `rds-mariadb` | Relational Database Service (MariaDB) |
| `rds-oracle` | Relational Database Service (Oracle) |
| `rds-sqlserver` | Relational Database Service (SQL Server) |
| `rds-aurora-mysql` | Aurora (MySQL Compatible) |
| `rds-aurora-postgres` | Aurora (PostgreSQL Compatible) |
| `dynamodb` | NoSQL Key-Value Database |
| `documentdb` | NoSQL Document Database (MongoDB Compatible) |
| `neptune` | Graph Database |
| `timestream` | Time Series Database |
| `elasticache-redis` | In-Memory Cache (Redis) |
| `elasticache-memcached`| In-Memory Cache (Memcached) |
| `redshift` | Data Warehouse |

### Storage (5 services)

| Service ID | Description |
|---|---|
| `s3` | Simple Storage Service (Object Storage) |
| `efs` | Elastic File System (NFS) |
| `fsx` | File Storage (Windows, Lustre, etc.) |
| `glacier` | Cold Storage Archival |
| `storage-gateway` | Hybrid Cloud Storage |

### Networking (17 services)

| Service ID | Description |
|---|---|
| `alb` | Application Load Balancer |
| `nlb` | Network Load Balancer |
| `clb` | Classic Load Balancer |
| `cloudfront` | Content Delivery Network (CDN) |
| `route53` | Managed DNS |
| `api-gateway-rest` | API Gateway (REST) |
| `api-gateway-http` | API Gateway (HTTP) |
| `api-gateway-websocket`| API Gateway (WebSocket) |
| `appsync` | Managed GraphQL Service |
| `vpc` | Virtual Private Cloud |
| `direct-connect` | Dedicated Network Connection |
| `vpn` | Virtual Private Network |
| `transit-gateway` | Network Routing Hub |
| `nat-gateway` | Network Address Translation |
| `internet-gateway` | VPC Internet Access |
| `vpc-peering` | VPC to VPC connection |
| `privatelink` | Private Service Access |

### Messaging & Events (8 services)

| Service ID | Description |
|---|---|
| `sqs` | Simple Queue Service |
| `sns` | Simple Notification Service |
| `kinesis-streams` | Real-time Data Streaming |
| `kinesis-firehose` | Data Stream Delivery |
| `kinesis-analytics` | Data Stream Processing |
| `msk` | Managed Streaming for Apache Kafka |
| `eventbridge` | Serverless Event Bus |
| `step-functions` | Visual Workflow Orchestration |

### Monitoring (6 services)

| Service ID | Description |
|---|---|
| `cloudwatch` | Application and Infrastructure Monitoring |
| `cloudwatch-logs` | Centralized Log Management |
| `x-ray` | Distributed Tracing |
| `cloudtrail` | API Activity Tracking |
| `config` | Resource Inventory and Configuration History |
| `systems-manager` | Operations Management |

### Security (11 services)

| Service ID | Description |
|---|---|
| `iam` | Identity and Access Management |
| `cognito` | Customer Identity and Access Management |
| `secrets-manager` | Secrets Management |
| `kms` | Key Management Service |
| `waf` | Web Application Firewall |
| `shield` | DDoS Protection |
| `guardduty` | Intelligent Threat Detection |
| `security-hub` | Cloud Security Posture Management |
| `macie` | Data Security and Privacy |
| `inspector` | Automated Vulnerability Management |
| `acm` | Certificate Manager |

### AI / ML (8 services)

| Service ID | Description |
|---|---|
| `sagemaker` | Machine Learning Platform |
| `rekognition` | Image and Video Analysis |
| `comprehend` | Natural Language Processing |
| `textract` | Document Text Extraction |
| `transcribe` | Speech to Text |
| `translate` | Language Translation |
| `polly` | Text to Speech |
| `bedrock` | Generative AI Platform |

### Analytics (5 services)

| Service ID | Description |
|---|---|
| `glue` | Serverless Data Integration |
| `athena` | Serverless Interactive Query Service |
| `emr` | Big Data Platform (Hadoop/Spark) |
| `data-pipeline` | Data Workflow Orchestration |
| `quicksight` | Business Intelligence Service |

### Developer Tools (9 services)

| Service ID | Description |
|---|---|
| `codepipeline` | Continuous Delivery Service |
| `codebuild` | Continuous Integration Service |
| `codecommit` | Managed Source Control |
| `codedeploy` | Automated Deployments |
| `codeartifact` | Artifact Repository |
| `ecr` | Elastic Container Registry |
| `amplify` | Web and Mobile App Framework |
| `ses` | Simple Email Service |
| `pinpoint` | Multichannel Marketing Communications |

### Infrastructure & Management (7 services)

| Service ID | Description |
|---|---|
| `workspaces` | Virtual Desktop Infrastructure |
| `appstream` | Desktop Application Streaming |
| `backup` | Centralized Backup Management |
| `cloudformation` | Infrastructure as Code |
| `cdk` | Cloud Development Kit |
| `opsworks` | Configuration Management (Chef/Puppet) |
| `elastic-disaster-recovery` | Disaster Recovery |
