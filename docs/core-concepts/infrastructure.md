---
title: Infrastructure
---

# Infrastructure

The infrastructure object holds your physical and virtual cloud resources. This section maps directly to real-world cloud provider environments and tracks the topology of your deployed architecture.

:::info In this concept guide
**Time to read:** 5 minutes
**Goal:** Learn how to define multi-cloud environments, VPCs, and individual compute/database services.
:::

## The Physical Layer

Unlike applications, which define *what* your software does, infrastructure defines *where* it runs. ADAC uses a nested structure to organize your resources logically:

1. **Clouds:** The top-level boundaries (e.g., AWS Production, GCP Failover).
2. **Services:** The individual resources inside a cloud (e.g., EC2, RDS, Cloud SQL).

```mermaid
graph TD
  subgraph ADAC Document
    subgraph Cloud: aws-prod
      A[Service: ecs-cluster]
      B[Service: rds-primary]
    end
    subgraph Cloud: gcp-backup
      C[Service: cloud-sql-replica]
    end
  end

  A --> B
  B -. async replication .-> C

  classDef cloud fill:transparent,stroke:var(--border),stroke-width:2px,stroke-dasharray: 5 5;
  classDef service fill:var(--ifm-color-primary-lightest),stroke:var(--ifm-color-primary),stroke-width:2px;
  class A,B,C service;
```

## Cloud Environments

A Cloud Object represents a distinct provider region or account. You can have multiple clouds in a single ADAC file.

| Field | Type | Requirement | Description |
|---|---|---|---|
| `id` | `string` | **REQUIRED** | Unique ID for this cloud environment |
| `provider` | `string` | **REQUIRED** | Cloud provider (e.g. `aws`, `gcp`, `azure`) |
| `region` | `string` | **REQUIRED** | Cloud region (e.g. `us-east-1`) |
| `account_id` | `string` | **OPTIONAL** | 12 digit AWS account ID (or equivalent) |
| `vpc_id` | `string` | **OPTIONAL** | VPC ID |
| `tier` | `enum` | **OPTIONAL** | `primary`, `secondary`, `failover`, `development`, `test` |
| `services` | `array` | **REQUIRED** | Array of Service objects deployed here |

## Services

Services represent individual cloud resources (like an EC2 instance or RDS database). 

> [!IMPORTANT]
> The `service` enum must exactly match one of the predefined IDs in the [Supported Clouds](../reference/supported-clouds/aws) list. This ensures diagrams render the correct icons and validators can check region availability.

| Field | Type | Requirement | Description |
|---|---|---|---|
| `id` | `string` | **REQUIRED** | Unique service ID |
| `service` | `enum` | **REQUIRED** | Identifier of supported service (e.g. `rds-postgres`) |
| `name` | `string` | **OPTIONAL** | Human Readable Name |
| `description` | `string` | **OPTIONAL** | What it does |
| `runs` | `array` | **OPTIONAL** | Array of Application IDs that run on this service |
| `configuration` | `object` | **OPTIONAL** | Service-specific configuration (memory, vCPU) |
| `availability_zones` | `array` | **OPTIONAL** | List of AZs (e.g., `["us-east-1a", "us-east-1b"]`) |
| `security_groups` | `array` | **OPTIONAL** | List of Security Group IDs |
| `subnets` | `array` | **OPTIONAL** | List of Subnet IDs |
| `tags` | `object` | **OPTIONAL** | Key-value cloud tags |

### The `runs` mapping

The `runs` array is the critical bridge between your Logical Layer and Physical Layer. 

```yaml title="infrastructure.adac.yaml"
infrastructure:
  clouds:
    - id: "aws-prod"                      
      provider: "aws"                     
      region: "us-east-1"                 
      vpc_id: "vpc-abc123"                
      tier: "primary"                     
      services:
        - id: "ecs-frontend"
          service: "ecs-fargate"
          name: "Frontend Container Cluster"
          runs: ["payment-gateway"] # Maps back to the Application ID
          configuration:
            memory_mb: 2048
            instance_count: 3
```

By linking `payment-gateway` to `ecs-frontend`, ADAC tools can automatically generate diagrams that show your Stipe Gateway application living inside an ECS cluster in AWS `us-east-1`.
