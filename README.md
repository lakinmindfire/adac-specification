# ADAC - Architecture Diagram as Code

[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](LICENSE)
[![Website](https://img.shields.io/badge/Website-mindfiredigital.github.io-red.svg)](https://mindfiredigital.github.io/adac-specification/)

ADAC (Architecture Diagram as Code) is an open specification for describing cloud and hybrid infrastructure architectures in a machine-readable, human-friendly YAML format. 

Think of it as **"OpenAPI for infrastructure."**

## Why ADAC?
- 📖 **Single source of truth** - One YAML file in Git holds your architecture.
- 🎨 **Always current** - Generate diagrams automatically from the spec.
- 💰 **Cost transparency** - Built-in cost and SLA metadata fields.
- ✅ **Compliance ready** - Tag services with security frameworks.

## Quick Start

You can validate ADAC files and generate diagrams using the official CLI from our ecosystem tooling:

```bash
npm install -g @mindfiredigital/adac-diagram
adac validate my-architecture.adac.yaml
adac diagram my-architecture.adac.yaml -o architecture.svg
```

## Documentation

- [Introduction](https://mindfiredigital.github.io/adac-specification/)
- [Quick Start Guide](https://mindfiredigital.github.io/adac-specification/docs/guides/quick-start)
- [Core Schema Reference](https://mindfiredigital.github.io/adac-specification/docs/reference/core-schema)
- [Supported Cloud Services](https://mindfiredigital.github.io/adac-specification/docs/reference/supported-services)

## Contributing

The specification is currently in **v0.1 (Release Candidate)**. We are actively seeking community feedback! 

See the [Contributing Guide](https://mindfiredigital.github.io/adac-specification/docs/contributing) to learn how to help shape the future of ADAC.

## License

This specification is licensed under the [Apache 2.0 License](LICENSE).
