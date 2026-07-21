---
title: Welcome to ADAC
---

# Welcome to ADAC

**ADAC (Architecture Diagram as Code)** is an open specification for describing cloud and hybrid infrastructure architectures in a machine-readable, human-friendly YAML or JSON format. 

Think of it as **"OpenAPI for infrastructure."**

:::info Current Version
**v0.1 — Release Candidate (Under Community Review)**

We are actively seeking feedback from the community. See [Contributing & Roadmap](../contributing) to get involved.
:::

## The Problem (Before ADAC)

Managing cloud architectures is historically complex, disconnected, and error-prone. Modern engineering teams often face the following challenges:

1. **Scattered Documentation:** Architecture details are spread across Confluence, Jira, Lucidchart, and Terraform code.
2. **Stale Diagrams:** Visual architecture diagrams are created manually and become stale within weeks of creation.
3. **Black Box Costs:** Cost estimates are done in external spreadsheets and are disconnected from the actual architecture design.
4. **Compliance Nightmares:** Security audits take weeks because there is no programmatic way to verify what services handle sensitive data.

## The Solution (After ADAC)

ADAC provides a single, unified specification to solve these problems at the root.

| Feature | How ADAC Solves It |
|---|---|
| **Single source of truth** | You write one YAML file. That file is stored in Git alongside your code. |
| **Always current diagrams** | The ADAC CLI generates SVG architecture diagrams directly from the YAML spec. |
| **Cost transparency** | You can embed monthly cost estimates and instance types directly into the `cost` metadata of the YAML. |
| **Compliance ready** | Services and connections can be tagged with `compliance: ["PCI-DSS", "HIPAA"]`, allowing automated audit scripts to parse the architecture. |

## Choose Your Path

Whether you're looking to document your architecture or build tools for the ADAC ecosystem, we have a path for you.

- **I want to write ADAC files:** Head straight to the [Quick Start (5-Minute Path)](./quick-start) to see a minimal example.
- **I want to understand the schema:** Read the [Core Schema Reference](../reference/schema), learn how to model [Connections](../core-concepts/connections), and check the [Supported Cloud Services](../reference/supported-clouds/aws) list.
- **I want to build tools:** Review the [Validation Rules](../contributing) and join the discussion on [GitHub](https://github.com/lakinmindfire/adac-specification).

## What does it look like?

Here is a sneak peek at a simple ADAC file defining a frontend application and its infrastructure. 

```yaml title="simple-app.adac.yaml"
version: "0.1"
metadata:
  name: "Simple Web Application"
  created: "2025-01-08"

applications:
  - id: "web-app"
    name: "Frontend"
    type: "frontend"

infrastructure:
  clouds:
    - id: "aws-prod"
      provider: "aws"
      region: "us-east-1"
      services:
        - id: "ecs-frontend"
          service: "ecs-fargate"
          runs: ["web-app"]
```

Ready to dive in? [Get started now →](./quick-start)
