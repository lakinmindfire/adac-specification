---
title: Data Pipeline
---

# Data Pipeline

This use case demonstrates how to model a large-scale data ingestion and analytics pipeline using ADAC. It highlights cross-cloud architectures and big data service definitions.

:::info In this use case
**Time to read:** 4 minutes
**Goal:** Learn how to model batch processing, data lakes, and complex multi-cloud data flows.
:::

## Architecture Diagram

The ADAC specification below natively generates the following architectural topology.

```mermaid
graph TD
  A[IoT Devices] -- Raw Data --> B[AWS Kinesis]
  B -- Streams to --> C[AWS S3 Data Lake]
  C -- Batch Processing --> D[Spark Cluster]
  D -- Curated Data --> E[Snowflake]
  F[BI Tools] -- Queries --> E

  classDef source fill:#f5f5f5,stroke:#999,stroke-width:2px;
  classDef stream fill:#e1bee7,stroke:#8e24aa,stroke-width:2px;
  classDef storage fill:#c8e6c9,stroke:#388e3c,stroke-width:2px;
  classDef compute fill:var(--ifm-color-primary-lightest),stroke:var(--ifm-color-primary),stroke-width:2px;
  classDef wh fill:#bbdefb,stroke:#1976d2,stroke-width:2px;
  
  class A,F source;
  class B stream;
  class C storage;
  class D compute;
  class E wh;
```

## ADAC Specification File

```yaml title="data-pipeline.adac.yaml"
version: "0.1"

metadata:
  name: "IoT Telemetry Pipeline"
  environment: "production"

applications:
  - id: "etl-job"
    name: "Nightly Spark Job"
    type: "batch-job"

infrastructure:
  clouds:
    - id: "aws-ingestion"
      provider: "aws"
      region: "us-east-1"
      
      services:
        # Streaming Ingestion
        - id: "stream-kinesis"
          service: "kinesis"
          
        # Data Lake
        - id: "lake-s3"
          service: "s3"
          
        # Compute for ETL
        - id: "compute-emr"
          service: "emr"
          runs: ["etl-job"]
          configuration:
            instance_count: 10
            instance_type: "r5.2xlarge"

    # Multi-Cloud / SaaS Data Warehouse
    - id: "snowflake-analytics"
      provider: "snowflake"
      region: "us-east-1"
      
      services:
        - id: "warehouse-main"
          service: "snowflake-warehouse"

connections:
  # Ingestion
  - id: "conn-iot-to-stream"
    from: "iot-devices"
    to: "stream-kinesis"
    
  - id: "conn-stream-to-lake"
    from: "stream-kinesis"
    to: "lake-s3"
    
  # ETL Processing
  - id: "conn-job-reads-lake"
    from: "etl-job"
    to: "lake-s3"
    type: "read"
    
  - id: "conn-job-writes-dw"
    from: "etl-job"
    to: "warehouse-main"
    type: "write"
    
  # BI Analytics
  - id: "conn-bi-to-dw"
    from: "tableau"
    to: "warehouse-main"
    type: "database-query"
```

## Key Takeaways

1. **Multi-Cloud/SaaS Integration:** This file seamlessly blends AWS infrastructure with a Snowflake data warehouse, demonstrating ADAC's provider-agnostic flexibility.
2. **Read/Write Connections:** The connections use explicit `type: "read"` and `type: "write"` classifications to clarify the direction of data movement during the ETL process.
