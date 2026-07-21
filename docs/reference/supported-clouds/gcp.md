---
title: Google Cloud Platform (GCP)
---

# Google Cloud Platform (GCP)

ADAC provides core support for GCP. Full icon and service mapping support is provided via the `@mindfiredigital/adac-icons-gcp` ecosystem package.

## Example Usage

When modeling GCP infrastructure, ensure the `provider` field is set to `gcp`.

```yaml title="gcp-example.adac.yaml"
infrastructure:
  clouds:
    - id: "gcp-prod"
      provider: "gcp"
      region: "us-central1"
      services:
        - id: "web-server"
          service: "compute-engine"
```

## Supported Service IDs

| Service ID | Description |
|---|---|
| `compute-engine` | Virtual Machines |
| `kubernetes-engine` | Managed Kubernetes (GKE) |
| `cloud-functions` | Serverless Functions |
| `cloud-run` | Serverless Containers |
| `cloud-storage` | Object Storage |
| `cloud-sql` | Relational Database |
| `spanner` | Globally Consistent Database |
| `pubsub` | Messaging and Event Ingestion |

*Note: This is a core subset of supported GCP services. More services will be added in upcoming releases.*
