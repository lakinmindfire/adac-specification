---
sidebar_position: 1
title: Quick Start
---

# 🚀 Quick Start (5-Minute Path)

Get up and running with ADAC by creating and validating your first architecture file.

:::tip Prerequisites
You can write ADAC files in any text editor. For the best experience, we recommend using VS Code with a YAML extension.
:::

## 1. Create Your First ADAC File

Create a new file named `my-architecture.adac.yaml` and paste the following minimal working example:

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="yaml" label="YAML" default>
    ```yaml
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
              service: "ecs-fargate"
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
    ```json
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

:::info Validator Status
The official Node.js validator is currently in development. You can validate manually using the JSON Schema.
:::

```bash
# Using Node.js validator (coming soon)
npm install -g adac-validator
adac validate my-architecture.adac.yaml

# Using JSON Schema directly
ajv validate -s adac-v0.1-schema.json -d my-architecture.adac.yaml
```

## 3. Generate Documentation & Diagrams

Once validated, your ADAC file becomes the single source of truth for your architecture.

```bash
# Generate diagram (tool coming soon)
adac diagram my-architecture.adac.yaml -o architecture.svg

# Generate cost report
adac cost my-architecture.adac.yaml
```

## Next Steps

Now that you've seen a basic ADAC file, you can:
- Explore the [Core Schema](../reference/core-schema) to see all available fields.
- Check out the [Supported AWS Services](../reference/aws-services) list.
- See more complex [Use Cases](./use-cases).
