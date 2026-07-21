---
title: Quick Start
---

# Quick Start (5-Minute Path)

Get up and running with ADAC by creating and validating your first architecture file.

:::info In this guide
**Time to complete:** 5 minutes
**Goal:** Write a valid ADAC YAML file, install the CLI, and validate your architecture.
:::

:::tip Prerequisites
You can write ADAC files in any text editor. For the best experience, we recommend using VS Code with a YAML extension.
:::

## 1. Create Your First ADAC File

Create a new file named `my-architecture.adac.yaml` and paste the following minimal working example:

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="yaml" label="YAML" default>
    ```yaml title="my-architecture.adac.yaml"
    version: "0.1"

    metadata:
      name: "Simple Web Application"
      author: "DevOps Team"
      created: "2025-01-08"
      environment: "production"

    applications:
      - id: "web-app"
        name: "Frontend"
        type: "frontend"
        technology: "React 18"

    infrastructure:
      clouds:
        - id: "aws-prod"
          provider: "aws"
          region: "us-east-1"
          
          services:
            - id: "ecs-frontend"
              service: "ecs-fargate" # Must match exactly with ADAC's [Supported Cloud Services](../reference/supported-services)
              name: "Frontend Container"
              runs: ["web-app"]
              configuration:
                memory_mb: 2048
                instance_count: 2
              cost:
                monthly_estimate: 150
                currency: "USD"

    connections:
      - id: "user-to-ecs"
        from: "users"
        to: "ecs-frontend"
        type: "api-call"
        protocol: "HTTPS"
    ```
  </TabItem>
  <TabItem value="json" label="JSON">
    ```json title="my-architecture.adac.json"
    {
      "version": "0.1",
      "metadata": {
        "name": "Simple Web Application",
        "author": "DevOps Team",
        "created": "2025-01-08",
        "environment": "production"
      },
      "applications": [
        {
          "id": "web-app",
          "name": "Frontend",
          "type": "frontend",
          "technology": "React 18"
        }
      ],
      "infrastructure": {
        "clouds": [
          {
            "id": "aws-prod",
            "provider": "aws",
            "region": "us-east-1",
            "services": [
              {
                "id": "ecs-frontend",
                "service": "ecs-fargate",
                "name": "Frontend Container",
                "runs": ["web-app"],
                "configuration": {
                  "memory_mb": 2048,
                  "instance_count": 2
                },
                "cost": {
                  "monthly_estimate": 150,
                  "currency": "USD"
                }
              }
            ]
          }
        ]
      },
      "connections": [
        {
          "id": "user-to-ecs",
          "from": "users",
          "to": "ecs-frontend",
          "type": "api-call",
          "protocol": "HTTPS"
        }
      ]
    }
    ```
  </TabItem>
</Tabs>

## 2. Validate Your ADAC File

:::info Official Tooling
The official ADAC CLI is available via npm. It includes the validator, diagram generator, and cost analyzer.
:::

```bash title="Terminal"
# Install the official ADAC CLI
npm install -g @mindfiredigital/adac-diagram

# Validate your architecture file
adac validate my-architecture.adac.yaml
```

## 3. Generate Documentation & Diagrams

Once validated, your ADAC file becomes the single source of truth for your architecture.

```bash title="Terminal"
# Generate a visual architecture diagram
adac diagram my-architecture.adac.yaml -o architecture.svg

# Generate a cost report
adac cost my-architecture.adac.yaml
```

## Next Steps

Now that you've seen a basic ADAC file, you can:
1. Explore the [Core Schema](../reference/schema) to see all available fields.
2. Review how to model [Connections](../core-concepts/connections) between services.
3. Check out the [Supported Cloud Services](../reference/supported-clouds/aws) list.
4. See more complex [Use Cases](../use-cases/web-application).
