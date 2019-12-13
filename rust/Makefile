.PHONY: requirements version common gw geo nc ns as as-integration as-external-api

VERSION := $(shell git describe --always |sed -e "s/^go\///" |sed -e "s/^v//")
PROTOC_ARGS := -I=../protobuf -I=/protobuf/src -I=/googleapis

all: requirements version google common gw geo nc ns as as-integration as-external-api

requirements:
	cargo install protobuf-codegen
	cargo install grpc-compiler

version:
	sed -i 's/version.*/version = "$(VERSION)"/g' ./Cargo.toml

google:
	mkdir -p src/gen/protobuf
	protoc $(PROTOC_ARGS) --rust_out=src/gen/protobuf google/protobuf/empty.proto

common:
	mkdir -p src/gen/common
	protoc $(PROTOC_ARGS) --rust_out=src/gen/common common/common.proto

gw:
	mkdir -p src/gen/gw
	protoc $(PROTOC_ARGS) --rust_out=src/gen/gw gw/gw.proto

geo:
	mkdir -p src/gen/geo
	protoc $(PROTOC_ARGS) --rust_out=src/gen/geo --rust-grpc_out=src/gen/geo geo/geo.proto

nc:
	mkdir -p src/gen/nc
	protoc $(PROTOC_ARGS) --rust_out=src/gen/nc --rust-grpc_out=src/gen/nc nc/nc.proto

ns:
	mkdir -p src/gen/ns
	protoc $(PROTOC_ARGS) --rust_out=src/gen/ns ns/profiles.proto
	protoc $(PROTOC_ARGS) --rust_out=src/gen/ns --rust-grpc_out=src/gen/ns ns/ns.proto

as:
	# as is a reserved keyword
	mkdir -p src/gen/as_pb
	protoc $(PROTOC_ARGS) --rust_out=src/gen/as_pb --rust-grpc_out=src/gen/as_pb as/as.proto

as-integration:
	mkdir -p src/gen/as_pb/integration
	protoc $(PROTOC_ARGS) --rust_out=src/gen/as_pb/integration as/integration/integration.proto

as-external-api:
	$(eval PROTOC_GEN := protoc $(PROTOC_ARGS) --rust_out=src/gen/as_pb/external/api --rust-grpc_out=src/gen/as_pb/external/api)

	mkdir -p src/gen/as_pb/external/api
	$(PROTOC_GEN) as/external/api/application.proto
	$(PROTOC_GEN) as/external/api/device.proto
	$(PROTOC_GEN) as/external/api/deviceProfile.proto
	$(PROTOC_GEN) as/external/api/deviceQueue.proto
	$(PROTOC_GEN) as/external/api/frameLog.proto
	$(PROTOC_GEN) as/external/api/fuotaDeployment.proto
	$(PROTOC_GEN) as/external/api/gateway.proto
	$(PROTOC_GEN) as/external/api/gatewayProfile.proto
	$(PROTOC_GEN) as/external/api/internal.proto
	$(PROTOC_GEN) as/external/api/multicastGroup.proto
	$(PROTOC_GEN) as/external/api/networkServer.proto
	$(PROTOC_GEN) as/external/api/organization.proto
	$(PROTOC_GEN) as/external/api/profiles.proto
	$(PROTOC_GEN) as/external/api/serviceProfile.proto
	$(PROTOC_GEN) as/external/api/user.proto
