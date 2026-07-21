---
sidebar_position: 4
title: Cost Tracking
---

# 💰 Cost Tracking

ADAC provides built-in fields to track and analyze infrastructure costs directly within your architecture definition. This brings cost transparency to the design phase.

## Service-Level Costs

You can define cost estimates directly on individual services.

| Field | Type | Requirement | Description |
|---|---|---|---|
| `monthly_estimate` | `number` | **REQUIRED** | Estimated monthly cost |
| `currency` | `string` | **REQUIRED** | Currency code (e.g. `USD`) |
| `breakdown` | `array` | **OPTIONAL** | Array of string explanations for the cost |
| `pricing_model` | `enum` | **OPTIONAL** | Pricing model used |

**Pricing Models:**
- `on-demand` - Pay as you go
- `reserved-1yr` - 1-year Reserved Instance
- `reserved-3yr` - 3-year Reserved Instance
- `spot` - Spot instances
- `savings-plan` - Savings Plans

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="yaml" label="YAML" default>
    ```yaml
    services:
      - id: "rds-main"
        service: "rds-postgres"
        cost:
          monthly_estimate: 650
          currency: "USD"
          breakdown:
            - "Instance: db.r5.large Multi-AZ × 730 hrs × $0.48 = $350"
            - "Storage: 500GB × $0.23/GB = $115"
            - "Backups: 500GB × $0.095 = $47.50"
            - "I/O operations: ~$100"
            - "Data transfer: ~$37.50"
          pricing_model: "reserved-1yr"
    ```
  </TabItem>
  <TabItem value="json" label="JSON">
    ```json
    {
      "services": [
        {
          "id": "rds-main",
          "service": "rds-postgres",
          "cost": {
            "monthly_estimate": 650,
            "currency": "USD",
            "breakdown": [
              "Instance: db.r5.large Multi-AZ × 730 hrs × $0.48 = $350",
              "Storage: 500GB × $0.23/GB = $115",
              "Backups: 500GB × $0.095 = $47.50",
              "I/O operations: ~$100",
              "Data transfer: ~$37.50"
            ],
            "pricing_model": "reserved-1yr"
          }
        }
      ]
    }
    ```
  </TabItem>
</Tabs>

## Overall Cost Summary

At the root level of your ADAC file, you can define an overall cost summary.

| Field | Type | Requirement | Description |
|---|---|---|---|
| `total_monthly` | `number` | **REQUIRED** | Total estimated monthly cost |
| `currency` | `string` | **REQUIRED** | Currency code (e.g. `USD`) |
| `by_service` | `object` | **OPTIONAL** | Cost breakdown by service category |
| `by_environment` | `object` | **OPTIONAL** | Cost breakdown by environment |
| `notes` | `array` | **OPTIONAL** | General notes on pricing assumptions |

<Tabs>
  <TabItem value="yaml" label="YAML" default>
    ```yaml
    cost:
      total_monthly: 5420
      currency: "USD"
      by_service:
        compute: 2100
        database: 1800
        storage: 450
        networking: 320
        monitoring: 250
      by_environment:
        production: 5420
      notes:
        - "Costs based on us-east-1 pricing as of Jan 2025"
        - "Reserved Instances applied (40% savings)"
    ```
  </TabItem>
  <TabItem value="json" label="JSON">
    ```json
    {
      "cost": {
        "total_monthly": 5420,
        "currency": "USD",
        "by_service": {
          "compute": 2100,
          "database": 1800,
          "storage": 450,
          "networking": 320,
          "monitoring": 250
        },
        "by_environment": {
          "production": 5420
        },
        "notes": [
          "Costs based on us-east-1 pricing as of Jan 2025",
          "Reserved Instances applied (40% savings)"
        ]
      }
    }
    ```
  </TabItem>
</Tabs>
