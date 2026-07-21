---
sidebar_position: 1
title: Introduction
slug: /
---

# Welcome to ADAC

**ADAC (Architecture Diagram as Code)** is an open specification for describing cloud infrastructure architectures in YAML or JSON format. 

Think of it as **"OpenAPI for infrastructure."**

:::info Current Version
**v0.1 — Release Candidate (Under Community Review)**

We are actively seeking feedback from the community. See [Contributing & Roadmap](./contributing) to get involved.
:::

## 🎯 Why ADAC?

Managing cloud architectures is historically complex, disconnected, and error-prone.

| The Problem (Before ADAC) | The Solution (After ADAC) |
|---|---|
| Architecture docs scattered across Confluence, Lucidchart, and Terraform | ✅ **Single source of truth** - One YAML file in Git |
| Diagrams become stale within weeks of creation | ✅ **Always current** - Version controlled architecture |
| Cost estimates are manual and error-prone | ✅ **Cost transparency** - Built-in cost metadata |
| Compliance audits take weeks | ✅ **Compliance ready** - Tag services with requirements |

## 🚀 Choose Your Path

Whether you're looking to document your architecture or build tools for the ADAC ecosystem, we have a path for you.

- **I want to write ADAC files:** Head straight to the [Quick Start (5-Minute Path)](./guides/quick-start) to see a minimal example.
- **I want to understand the schema:** Read the [Core Schema Reference](./reference/core-schema) and the [Supported AWS Services](./reference/aws-services) list.
- **I want to build tools:** Review the [Validation Rules](./contributing#validation-rules-for-tool-authors) and join the discussion on [GitHub](https://github.com/lakinmindfire/adac-specification).

## 💡 What does it look like?

Here is a sneak peek at a simple ADAC file defining a frontend application and its infrastructure. 

```yaml
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

Ready to dive in? [Get started now →](./guides/quick-start)
