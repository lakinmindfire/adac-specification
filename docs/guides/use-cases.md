---
sidebar_position: 5
title: Example Use Cases
---

# 📊 Example Use Cases

Explore real-world architecture examples defined using the ADAC specification.

## 1. Simple Web Application

A classic 3-tier web application architecture.

- Frontend (CloudFront + S3)
- Backend (ECS Fargate)
- Database (RDS PostgreSQL)
- Cache (ElastiCache Redis)

**Estimated Cost:** ~$2,200/month  
**ADAC Example File:** `examples/simple-web-app.adac.yaml`

## 2. Microservices Architecture

A robust microservices platform built on Kubernetes.

- EKS cluster with 8 microservices
- Aurora PostgreSQL + DynamoDB
- SQS + SNS + Kinesis
- SageMaker ML inference

**Estimated Cost:** ~$8,300/month  
**ADAC Example File:** `examples/microservices.adac.yaml`

## 3. Data Analytics Pipeline

A serverless big data ingestion and processing pipeline.

- Kinesis Streams ingestion
- EMR Flink real-time processing
- Redshift data warehouse
- QuickSight dashboards

**Estimated Cost:** ~$23,600/month  
**ADAC Example File:** `examples/data-pipeline.adac.yaml`
