.PHONY: requirements common gw geo nc ns as as-integration as-external-api

VERSION := $(shell git describe --always |sed -e "s/^v//")
GOOGLEAPIS_PATH := "/googleapis"

PROTOC_PATH := ./node_modules/grpc-tools/bin/protoc
PROTOC_GEN_TS_PATH := ./node_modules/.bin/protoc-gen-ts
PROTOC_GEN_GRPC_PATH := ./node_modules/.bin/grpc_tools_node_protoc_plugin
PROTOC_ARGS := --plugin=protoc-gen-ts=$(PROTOC_GEN_TS_PATH) --plugin=protoc-gen-grpc=$(PROTOC_GEN_GRPC_PATH) --js_out=import_style=commonjs,binary:. --ts_out=service=grpc-node:. --grpc_out=.

all: requirements version common gw geo nc ns as as-integration as-external-api google-api

requirements:
	yarn install

version:
	sed -i 's/"version.*/"version": "$(VERSION)",/g' ./package.json

common:
	protoc -I=../protobuf -I=../protobuf/common $(PROTOC_ARGS) ../protobuf/common/common.proto

gw:
	protoc -I=../protobuf -I=../protobuf/gw $(PROTOC_ARGS) ../protobuf/gw/gw.proto

geo:
	protoc -I=../protobuf -I=../protobuf/geo $(PROTOC_ARGS) ../protobuf/geo/geo.proto

nc:
	protoc -I=../protobuf -I=../protobuf/nc $(PROTOC_ARGS) ../protobuf/nc/nc.proto

ns:
	protoc -I=../protobuf -I=../protobuf/ns $(PROTOC_ARGS) ../protobuf/ns/profiles.proto
	protoc -I=../protobuf -I=../protobuf/ns $(PROTOC_ARGS) ../protobuf/ns/ns.proto

as:
	protoc -I=../protobuf -I=../protobuf/as $(PROTOC_ARGS) ../protobuf/as/as.proto

as-integration:
	protoc -I=../protobuf -I=../protobuf/as/integration $(PROTOC_ARGS) ../protobuf/as/integration/integration.proto


as-external-api:
	# gRPC
	protoc -I=$(GOOGLEAPIS_PATH) -I=../protobuf -I=../protobuf/as/external/api $(PROTOC_ARGS) ../protobuf/as/external/api/application.proto
	protoc -I=$(GOOGLEAPIS_PATH) -I=../protobuf -I=../protobuf/as/external/api $(PROTOC_ARGS) ../protobuf/as/external/api/frameLog.proto
	protoc -I=$(GOOGLEAPIS_PATH) -I=../protobuf -I=../protobuf/as/external/api $(PROTOC_ARGS) ../protobuf/as/external/api/device.proto
	protoc -I=$(GOOGLEAPIS_PATH) -I=../protobuf -I=../protobuf/as/external/api $(PROTOC_ARGS) ../protobuf/as/external/api/deviceProfile.proto
	protoc -I=$(GOOGLEAPIS_PATH) -I=../protobuf -I=../protobuf/as/external/api $(PROTOC_ARGS) ../protobuf/as/external/api/deviceQueue.proto
	protoc -I=$(GOOGLEAPIS_PATH) -I=../protobuf -I=../protobuf/as/external/api $(PROTOC_ARGS) ../protobuf/as/external/api/fuotaDeployment.proto
	protoc -I=$(GOOGLEAPIS_PATH) -I=../protobuf -I=../protobuf/as/external/api $(PROTOC_ARGS) ../protobuf/as/external/api/gateway.proto
	protoc -I=$(GOOGLEAPIS_PATH) -I=../protobuf -I=../protobuf/as/external/api $(PROTOC_ARGS) ../protobuf/as/external/api/gatewayProfile.proto
	protoc -I=$(GOOGLEAPIS_PATH) -I=../protobuf -I=../protobuf/as/external/api $(PROTOC_ARGS) ../protobuf/as/external/api/internal.proto
	protoc -I=$(GOOGLEAPIS_PATH) -I=../protobuf -I=../protobuf/as/external/api $(PROTOC_ARGS) ../protobuf/as/external/api/multicastGroup.proto
	protoc -I=$(GOOGLEAPIS_PATH) -I=../protobuf -I=../protobuf/as/external/api $(PROTOC_ARGS) ../protobuf/as/external/api/networkServer.proto
	protoc -I=$(GOOGLEAPIS_PATH) -I=../protobuf -I=../protobuf/as/external/api $(PROTOC_ARGS) ../protobuf/as/external/api/organization.proto
	protoc -I=$(GOOGLEAPIS_PATH) -I=../protobuf -I=../protobuf/as/external/api $(PROTOC_ARGS) ../protobuf/as/external/api/profiles.proto
	protoc -I=$(GOOGLEAPIS_PATH) -I=../protobuf -I=../protobuf/as/external/api $(PROTOC_ARGS) ../protobuf/as/external/api/serviceProfile.proto
	protoc -I=$(GOOGLEAPIS_PATH) -I=../protobuf -I=../protobuf/as/external/api $(PROTOC_ARGS) ../protobuf/as/external/api/user.proto

google-api:
	protoc -I=$(GOOGLEAPIS_PATH) $(PROTOC_ARGS) $(GOOGLEAPIS_PATH)/google/api/*.proto
