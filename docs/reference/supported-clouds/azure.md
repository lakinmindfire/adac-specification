---
title: Microsoft Azure
---

# Microsoft Azure

Azure support is actively maintained in the ecosystem tooling. When defining an `infrastructure.clouds` block in your YAML, the `provider` and `service` IDs must correctly match the supported entries to ensure validation works properly.

## Example Usage

```yaml title="azure-example.adac.yaml"
infrastructure:
  clouds:
    - id: "azure-prod"
      provider: "azure"
      region: "eastus"
      services:
        - id: "app-service"
          service: "app-service"
```

## Supported Service IDs

| Service ID | Description |
|---|---|
| `virtual-machines` | Virtual Machines |
| `kubernetes-service` | Managed Kubernetes (AKS) |
| `functions` | Serverless Functions |
| `app-service` | Web App Hosting |
| `blob-storage` | Object Storage |
| `cosmos-db` | NoSQL Database |
| `sql-database` | Relational Database |
| `service-bus` | Enterprise Messaging |

*Note: This is a core subset of supported Azure services. More services will be added in upcoming releases.*
