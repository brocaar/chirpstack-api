# ChirpStack API

This repository contains the [Protobuf](https://developers.google.com/protocol-buffers/)
and [gRPC](https://grpc.io/) API definitions for the [ChirpStack](https://www.chirpstack.io)
components.

## Protobuf / gRPC structure

```
protobuf             - Protobuf and gRPC source files
├── as
│   ├── external
│   │   └── api      - Application Server External API definitions
│   └── integration  - Application Server integration definitions
├── common           - Definitions shared across ChirpStack components
├── geo              - Geolocation Server API definitions
├── gw               - LoRa gateway definitions
├── nc               - Network Controller definitions
└── ns               - Network Server definitions
```

## Supported languages

### Go

Documentation: https://godoc.org/github.com/brocaar/chirpstack-api/go

```bash
go get github.com/brocaar/chirpstack-api/go/v3
```

### JavaScript / Typescript

See: https://www.npmjs.com/package/@chirpstack/chirpstack-api.

### Python

See: https://pypi.org/project/chirpstack-api/.

### Rust

See: https://crates.io/crates/chirpstack_api.

## Generating client libraries

These instructions require [Docker](https://docs.docker.com/install/) and
[Docker Compose](https://docs.docker.com/compose/install/) to be installed.

```bash
# (re)generate all client libraries
make all

# only (re)generate go client library
make go

# only (re)generate JavaScript / Typescript
make js

# only (re)generate Python client library
make python

# only (re)generate Swagger definitions
make swagger
```
