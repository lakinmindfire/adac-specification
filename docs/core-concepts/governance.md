---
title: Governance
---

# Governance

Governance allows organizations to encode Service Level Agreements (SLAs), compliance frameworks, and security guardrails directly into their architecture.

:::info In this concept guide
**Time to read:** 3 minutes
**Goal:** Learn how to embed compliance requirements and SLAs so they can be tracked and validated programmatically.
:::

## Why Encode Governance?

In a typical enterprise, ensuring an architecture meets compliance (e.g., HIPAA, SOC2) requires manual security reviews. By encoding these requirements in ADAC:

1. **Automated Audits:** Tools can scan the architecture file to verify that any service touching a HIPAA workload is properly encrypted.
2. **SLA Tracking:** You can define maximum latency or minimum uptime directly on the application, allowing monitoring tools to alert if the underlying infrastructure is insufficient.
3. **Guardrails:** Prevent junior developers from accidentally deploying unapproved instance types to production.

```mermaid
graph TD
  A[Governance Policy] --> B{Validator}
  C[Architecture YAML] --> B
  B -- Pass --> D[Deploy]
  B -- Fail --> E[Block Pipeline]

  classDef policy fill:var(--ifm-color-primary-lightest),stroke:var(--ifm-color-primary),stroke-width:2px;
  classDef decision fill:#f5f5f5,stroke:#999,stroke-width:2px,shape:diamond;
  class A policy;
  class B decision;
```

## Schema

The `governance` object sits at the root of the ADAC document.

| Field | Type | Requirement | Description |
|---|---|---|---|
| `compliance` | `array` | **OPTIONAL** | Array of compliance frameworks (e.g., `["SOC2", "GDPR"]`) |
| `data_classification` | `enum` | **OPTIONAL** | `public`, `internal`, `confidential`, `restricted` |
| `allowed_regions` | `array` | **OPTIONAL** | Restrict deployment to specific regions |
| `allowed_instance_types` | `array` | **OPTIONAL** | Prevent expensive or unapproved compute |

## Example

```yaml title="governance.adac.yaml"
governance:
  compliance:
    - "SOC2"
    - "HIPAA"
  data_classification: "restricted"
  allowed_regions:
    - "us-east-1"
    - "us-west-2"
  allowed_instance_types:
    - "t3.medium"
    - "m5.large"
```

## Applying Governance

Once defined, the official ADAC CLI will strictly enforce these rules. If a developer attempts to add a cloud region like `eu-central-1` to the `infrastructure` block, `adac validate` will fail the CI/CD pipeline immediately.
