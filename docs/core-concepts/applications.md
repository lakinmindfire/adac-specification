---
title: Applications
---

# Applications

Applications represent logical units of compute or functionality in your architecture. They describe *what* your system is doing, rather than the physical infrastructure it runs on.

:::info In this concept guide
**Time to read:** 4 minutes
**Goal:** Learn how to model your logical software components independently from their hardware infrastructure.
:::

## The Logical Layer

In ADAC, we separate the **Logical Layer** (Applications) from the **Physical Layer** (Infrastructure). This separation of concerns allows you to:
- Move an application from EC2 to Kubernetes without redefining the application itself.
- Assign ownership (teams, repositories) directly to the software, not the hardware.
- Model complex multi-cloud deployments where a single application might run in AWS and failover to GCP.

```mermaid
graph TD
  subgraph Logical Layer
    A[Frontend App]
    B[Backend API]
  end
  
  subgraph Physical Layer
    C[AWS ECS Fargate]
    D[Azure App Service]
  end

  A -. runs on .-> C
  B -. runs on .-> C
  B -. runs on .-> D

  classDef logical fill:var(--ifm-color-primary-lightest),stroke:var(--ifm-color-primary),stroke-width:2px;
  classDef physical fill:#f5f5f5,stroke:#999,stroke-width:2px;
  class A,B logical;
  class C,D physical;
```

## Schema Breakdown

The `applications` array sits at the root of the ADAC document.

| Field | Type | Requirement | Description |
|---|---|---|---|
| `id` | `string` | **REQUIRED** | Unique ID (lowercase-with-dashes) |
| `name` | `string` | **REQUIRED** | Human Readable Name |
| `type` | `enum` | **REQUIRED** | Application archetype |
| `technology` | `string` | **OPTIONAL** | E.g. "Node.js + Express" |
| `description` | `string` | **OPTIONAL** | What it does |
| `owner` | `string` | **OPTIONAL** | Team Name |
| `repository` | `string` | **OPTIONAL** | Link to source code repository |
| `sla` | `object` | **OPTIONAL** | Service Level Agreement details |

### Best Practices for IDs

> [!TIP]
> Always use descriptive, unique `id` fields. Avoid generic names like `app-1`. Prefer business domain names like `checkout-service` or `auth-worker`.

### Application Types

The `type` field helps diagramming tools render the correct icon and visual style for your application. Supported enums include:

- `frontend`, `backend`, `api`, `database`, `cache`, `queue`
- `worker`, `batch-job`, `mobile`, `desktop`, `iot`
- `ml-model`, `data-pipeline`, `microservice`

## Complete Example

Here is a fully populated application definition:

```yaml title="application.adac.yaml"
applications:
  - id: "payment-gateway"                       
    name: "Stripe Payment Gateway"           
    type: "microservice"                  
    technology: "Go 1.21"       
    description: "Handles all incoming Stripe webhooks and checkout sessions."           
    owner: "Checkout Team"                    
    repository: "https://github.com/my-org/payment-gateway"  
    sla:                                  
      availability_percent: 99.99
      max_latency_ms: 200
      rto_minutes: 5
      rpo_minutes: 1
```

## Mapping to Infrastructure

Once you define an application, you must map it to the infrastructure it runs on. This is done inside the `infrastructure` block using the `runs: ["application-id"]` array on a specific service.

*Next, read about [Infrastructure](./infrastructure) to see how this mapping works.*
