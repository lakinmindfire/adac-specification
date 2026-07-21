---
title: Microservices
---

# Microservices Architecture

This use case demonstrates how ADAC handles complex, highly distributed microservice architectures. It models multiple autonomous services communicating over an event bus and REST APIs.

:::info In this use case
**Time to read:** 5 minutes
**Goal:** Learn how to model event-driven architectures, pub/sub messaging, and multiple distinct databases.
:::

## Architecture Diagram

The ADAC specification below natively generates the following architectural topology.

```mermaid
graph TD
  A[API Gateway] -- HTTP --> B[Order Service]
  A -- HTTP --> C[Inventory Service]
  
  B -- Publishes Event --> D{Event Bus}
  D -- Triggers --> C
  D -- Triggers --> E[Notification Service]
  
  B --> F[(Orders DB)]
  C --> G[(Inventory DB)]

  classDef gateway fill:#f5f5f5,stroke:#999,stroke-width:2px;
  classDef app fill:var(--ifm-color-primary-lightest),stroke:var(--ifm-color-primary),stroke-width:2px;
  classDef db fill:#e8f4f8,stroke:#2b85c1,stroke-width:2px;
  classDef bus fill:#fff3e0,stroke:#f57c00,stroke-width:2px,shape:hexagon;
  
  class A gateway;
  class B,C,E app;
  class F,G db;
  class D bus;
```

## ADAC Specification File

```yaml title="microservices.adac.yaml"
version: "0.1"

metadata:
  name: "E-Commerce Microservices"
  environment: "production"

applications:
  - id: "order-service"
    name: "Order Processing"
    type: "microservice"
    
  - id: "inventory-service"
    name: "Inventory Management"
    type: "microservice"
    
  - id: "notification-service"
    name: "Email/SMS Notifications"
    type: "worker"

infrastructure:
  clouds:
    - id: "aws-prod"
      provider: "aws"
      region: "eu-west-1"
      
      services:
        # API Gateway
        - id: "gw-main"
          service: "api-gateway"
          
        # Compute Cluster
        - id: "k8s-cluster"
          service: "eks"
          runs: 
            - "order-service"
            - "inventory-service"
            - "notification-service"
            
        # Event Bus
        - id: "event-bus"
          service: "eventbridge"
          
        # Databases (Polyglot Persistence)
        - id: "db-orders"
          service: "rds-postgres"
        - id: "db-inventory"
          service: "dynamodb"

connections:
  # Ingress Routing
  - id: "conn-gw-to-orders"
    from: "gw-main"
    to: "order-service"
    protocol: "HTTPS"
    
  - id: "conn-gw-to-inventory"
    from: "gw-main"
    to: "inventory-service"
    protocol: "HTTPS"
    
  # Event Driven Flow
  - id: "conn-order-to-bus"
    from: "order-service"
    to: "event-bus"
    type: "event-publish"
    
  - id: "conn-bus-to-inventory"
    from: "event-bus"
    to: "inventory-service"
    type: "event-subscribe"
    
  - id: "conn-bus-to-notification"
    from: "event-bus"
    to: "notification-service"
    type: "event-subscribe"

  # Database Access
  - id: "conn-order-to-db"
    from: "order-service"
    to: "db-orders"
    
  - id: "conn-inventory-to-db"
    from: "inventory-service"
    to: "db-inventory"
```

## Key Takeaways

1. **Shared Infrastructure:** Notice how the `k8s-cluster` (EKS) service runs all three applications (`runs: [...]`). ADAC easily models dense multi-tenant compute clusters.
2. **Event-Driven Modeling:** Connections use `event-publish` and `event-subscribe` types to explicitly model asynchronous messaging architectures.
