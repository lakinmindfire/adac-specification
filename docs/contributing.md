---
sidebar_position: 10
title: Contributing & Roadmap
---

# Contributing to ADAC

We're currently in the **Proof of Concept (POC)** phase. Your feedback is crucial to shaping the future of the ADAC specification!

## How to Help

1. **Try the spec** - Document your own architecture and see if the schema supports your use case.
2. **Report issues** - What's confusing? What's missing?
3. **Suggest improvements** - Open GitHub discussions.
4. **Build tools** - Create exporters, visualizers, or validators.

### Questions to Answer for Feedback

- Can you describe your architecture in < 30 minutes?
- Is the generated diagram accurate?
- Would you use this instead of your current tool?
- What's the #1 missing feature?

---

## Validation Rules (For Tool Authors) {#validation-rules-for-tool-authors}

If you are building an ADAC tool, ensure your parser enforces the following rules (also defined in the JSON Schema):

1. **Required fields:** `version`, `metadata.name`, `metadata.created`, `infrastructure`
2. **ID format:** Lowercase letters, numbers, hyphens only (`^[a-z0-9-]+$`)
3. **AWS Account ID:** Exactly 12 digits
4. **VPC ID:** Format `vpc-[a-z0-9]+`
5. **Security Group ID:** Format `sg-[a-z0-9]+`
6. **Subnet ID:** Format `subnet-[a-z0-9]+`
7. **Availability Zone:** Format like `us-east-1a`
8. **Valid enums:** All service types, regions, and connection types MUST be checked against the schema.
9. **Date format:** ISO 8601 (YYYY-MM-DD)
10. **SemVer:** Version follows semantic versioning

---

## Tools Roadmap

### Phase 1: MVP (Current)
- [x] JSON Schema v0.1
- [x] Example ADAC files
- [x] CLI validator (`@mindfiredigital/adac-diagram`)
- [x] Basic diagram generator
- [x] Multi-cloud support (AWS, GCP, Azure)

### Phase 2: Core Tools 
- [ ] Interactive web viewer (`adac-web`)
- [ ] Cost analyzer plugin
- [ ] Documentation generator

### Phase 3: Advanced Features 
- [ ] Terraform export
- [ ] CloudFormation export
- [ ] GitHub Actions integration

---

## Changelog

### v0.1 (Current)
- Minimal schema with multi-cloud support (AWS, GCP, Azure)
- Over 200+ services covered natively
- Cost tracking built-in
- Compliance tagging
- SLA definitions
- Connection modeling
- CLI validator and diagram ecosystem via `@mindfiredigital/adac-tools`

### Upcoming v0.2
- Enhanced schema validation rules
- Interactive web viewer
- Cost optimization suggestions
- Compliance validators

---

## Resources

- **Schema:** `schema/adac-v0.1-schema.json`
- **Examples:** `examples/` directory
- **GitHub:** [github.com/lakinmindfire/adac-specification](https://github.com/lakinmindfire/adac-specification)
- **Discussions:** [github.com/lakinmindfire/adac-specification/discussions](https://github.com/lakinmindfire/adac-specification/discussions)

## License
Apache 2.0 - See LICENSE file
