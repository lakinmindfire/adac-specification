---
sidebar_position: 2
title: Connection Object
---

# Connection Object

The connection object defines how different applications and services interact with each other. This is crucial for generating accurate architecture diagrams, validating security group rules, and ensuring compliance.

## Schema

| Field | Type | Requirement | Description |
|---|---|---|---|
| `id` | `string` | **REQUIRED** | Unique ID |
| `from` | `string` | **REQUIRED** | Source ID (App or Service ID) |
| `to` | `string` | **REQUIRED** | Target ID (App or Service ID) |
| `type` | `enum` | **REQUIRED** | Connection type category |
| `protocol` | `string` | **OPTIONAL** | Protocol used (e.g. `HTTPS`, `TCP`) |
| `port` | `number` | **OPTIONAL** | Network port (e.g. `443`) |
| `description` | `string` | **OPTIONAL** | What this connection does |
| `latency_ms` | `number` | **OPTIONAL** | Expected latency |
| `bandwidth_mbps`| `number` | **OPTIONAL** | Required bandwidth |
| `requests_per_second` | `number` | **OPTIONAL** | Expected RPS |
| `security` | `object` | **OPTIONAL** | Security and TLS configuration |
| `compliance` | `array` | **OPTIONAL** | List of compliance frameworks (e.g. `PCI-DSS`) |

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="yaml" label="YAML" default>
    ```yaml
    connections:
      - id: "unique-conn-id"                  
        from: "source-id"                     
        to: "target-id"                       
        type: "api-call"                      
        protocol: "HTTPS"                     
        port: 443                             
        description: "What this connection does" 
        
        latency_ms: 100                       
        bandwidth_mbps: 1000                  
        requests_per_second: 500              
        
        security:                             
          encryption_in_transit: true
          tls_version: "TLS1.3"
          authentication_required: true
          authentication_method: "JWT"
        
        compliance: ["PCI-DSS", "HIPAA"]      
    ```
  </TabItem>
  <TabItem value="json" label="JSON">
    ```json
    {
      "connections": [
        {
          "id": "unique-conn-id",
          "from": "source-id",
          "to": "target-id",
          "type": "api-call",
          "protocol": "HTTPS",
          "port": 443,
          "description": "What this connection does",
          "latency_ms": 100,
          "bandwidth_mbps": 1000,
          "requests_per_second": 500,
          "security": {
            "encryption_in_transit": true,
            "tls_version": "TLS1.3",
            "authentication_required": true,
            "authentication_method": "JWT"
          },
          "compliance": ["PCI-DSS", "HIPAA"]
        }
      ]
    }
    ```
  </TabItem>
</Tabs>

## Enumerations

### Connection Types

- **API:** `api-call`, `authentication`, `authorization`
- **Database:** `database-query`, `cache-read`, `cache-write`
- **Messaging:** `message-publish`, `message-consume`, `stream-read`, `stream-write`
- **Storage:** `file-upload`, `file-download`
- **Network:** `load-balancing`, `dns-resolution`, `cdn-origin`
- **Infrastructure:** `replication`, `backup`, `failover`, `vpn-tunnel`, `direct-connect`, `vpc-peering`, `transit-gateway`

### Protocols

- **HTTP:** `HTTP`, `HTTPS`, `HTTP/2`, `HTTP/3`, `WebSocket`
- **RPC:** `gRPC`, `GraphQL`, `REST`, `SOAP`
- **Network:** `TCP`, `UDP`
- **Messaging:** `MQTT`, `AMQP`
- **Database:** `Redis`, `SQL`, `MongoDB`
- **Storage:** `S3`, `NFS`, `SMB`, `FTP`, `SFTP`
- **Remote:** `SSH`, `RDP`

### Authentication Methods

`IAM`, `API-Key`, `OAuth2`, `JWT`, `SAML`, `BasicAuth`, `Certificate`

### Compliance Frameworks

`PCI-DSS`, `HIPAA`, `GDPR`, `SOC2`, `ISO27001`, `FedRAMP`
