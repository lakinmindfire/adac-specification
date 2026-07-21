---
title: Simple Web Application
---

# Simple Web Application

This use case demonstrates a standard 3-tier web application architecture modeled in ADAC. It consists of a frontend Single Page Application (SPA), a backend API, and a managed relational database.

:::info In this use case
**Time to read:** 4 minutes
**Goal:** Learn how to model a classic frontend-backend-database architecture and see how connections flow between them.
:::

## Architecture Diagram

The ADAC specification below natively generates the following architectural topology.

```mermaid
graph TD
  A[Users / Internet] -- HTTPS --> B[Frontend SPA]
  B -- HTTPS API --> C[Backend API]
  C -- TCP 5432 --> D[(PostgreSQL Database)]

  classDef external fill:#f5f5f5,stroke:#999,stroke-width:2px;
  classDef app fill:var(--ifm-color-primary-lightest),stroke:var(--ifm-color-primary),stroke-width:2px;
  classDef db fill:#e8f4f8,stroke:#2b85c1,stroke-width:2px;
  
  class A external;
  class B,C app;
  class D db;
```

## ADAC Specification File

You can copy and paste the following YAML into an `architecture.adac.yaml` file. It completely describes the applications, the AWS infrastructure they run on, and how they connect.

```yaml title="web-application.adac.yaml"
version: "0.1"

metadata:
  name: "Customer Portal"
  author: "Web Team"
  created: "2025-01-08"
  environment: "production"

applications:
  - id: "portal-ui"
    name: "React Frontend"
    type: "frontend"
    technology: "React 18"
    
  - id: "portal-api"
    name: "Node.js Backend"
    type: "api"
    technology: "Express.js"

infrastructure:
  clouds:
    - id: "aws-prod"
      provider: "aws"
      region: "us-east-1"
      
      services:
        # Frontend Hosting
        - id: "cdn-frontend"
          service: "cloudfront"
          runs: ["portal-ui"]
        - id: "storage-frontend"
          service: "s3"
          runs: ["portal-ui"]
          
        # Backend Compute
        - id: "compute-backend"
          service: "ecs-fargate"
          runs: ["portal-api"]
          configuration:
            memory_mb: 4096
            instance_count: 2
            
        # Database
        - id: "db-primary"
          service: "rds-postgres"
          configuration:
            instance_type: "db.r6g.large"
            storage_gb: 100

connections:
  # Users hit the CDN
  - id: "conn-users-to-cdn"
    from: "internet"
    to: "cdn-frontend"
    protocol: "HTTPS"
    
  # Frontend calls the API
  - id: "conn-ui-to-api"
    from: "portal-ui"
    to: "portal-api"
    protocol: "HTTPS"
    type: "api-call"
    
  # API queries the Database
  - id: "conn-api-to-db"
    from: "portal-api"
    to: "db-primary"
    protocol: "TCP"
    port: 5432
    type: "database-query"
```

## Key Takeaways

1. **Logical-Physical Mapping:** Notice how the `portal-ui` application runs on *both* `cloudfront` and `s3` services. This is a common pattern for static SPAs.
2. **Implicit Routing:** The connections explicitly state that `portal-ui` connects to `portal-api`. Tools consuming this file can infer that security groups or CORS configurations must allow this flow.
