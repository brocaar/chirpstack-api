.PHONY: requirements common gw geo nc ns as as-integration as-external-api

GRPC_GW_PATH := $(shell go list -f '{{ .Dir }}' github.com/grpc-ecosystem/grpc-gateway/protoc-gen-grpc-gateway)
GOOGLEAPIS_PATH := "$(GRPC_GW_PATH)/../third_party/googleapis"

all: requirements common gw geo nc ns as as-integration as-external-api

requirements:
	@go mod download
	@go install github.com/grpc-ecosystem/grpc-gateway/protoc-gen-grpc-gateway
	@go install github.com/golang/protobuf/protoc-gen-go

common:
	protoc -I=../protobuf -I=../protobuf/common --go_out=plugins=grpc,paths=source_relative:. common/common.proto

gw:
	protoc -I=../protobuf -I=../protobuf/gw --go_out=plugins=grpc,paths=source_relative:. gw/gw.proto

geo:
	protoc -I=../protobuf -I=../protobuf/geo --go_out=plugins=grpc,paths=source_relative:. geo/geo.proto

nc:
	protoc -I=../protobuf -I=../protobuf/nc --go_out=plugins=grpc,paths=source_relative:. nc/nc.proto

ns:
	protoc -I=../protobuf -I=../protobuf/ns --go_out=plugins=grpc,paths=source_relative:. ns/profiles.proto
	protoc -I=../protobuf -I=../protobuf/ns --go_out=plugins=grpc,paths=source_relative:. ns/ns.proto

as:
	protoc -I=../protobuf -I=../protobuf/as --go_out=plugins=grpc,paths=source_relative:. as/as.proto

as-integration:
	protoc -I=../protobuf -I=../protobuf/as/integration --go_out=plugins=grpc,paths=source_relative:. as/integration/integration.proto

as-external-api:
	# gRPC
	protoc -I=$(GOOGLEAPIS_PATH) -I=../protobuf -I=../protobuf/as/external/api --go_out=plugins=grpc,paths=source_relative:. as/external/api/application.proto
	protoc -I=$(GOOGLEAPIS_PATH) -I=../protobuf -I=../protobuf/as/external/api --go_out=plugins=grpc,paths=source_relative:. as/external/api/common.proto
	protoc -I=$(GOOGLEAPIS_PATH) -I=../protobuf -I=../protobuf/as/external/api --go_out=plugins=grpc,paths=source_relative:. as/external/api/device.proto
	protoc -I=$(GOOGLEAPIS_PATH) -I=../protobuf -I=../protobuf/as/external/api --go_out=plugins=grpc,paths=source_relative:. as/external/api/deviceProfile.proto
	protoc -I=$(GOOGLEAPIS_PATH) -I=../protobuf -I=../protobuf/as/external/api --go_out=plugins=grpc,paths=source_relative:. as/external/api/deviceQueue.proto
	protoc -I=$(GOOGLEAPIS_PATH) -I=../protobuf -I=../protobuf/as/external/api --go_out=plugins=grpc,paths=source_relative:. as/external/api/fuotaDeployment.proto
	protoc -I=$(GOOGLEAPIS_PATH) -I=../protobuf -I=../protobuf/as/external/api --go_out=plugins=grpc,paths=source_relative:. as/external/api/gateway.proto
	protoc -I=$(GOOGLEAPIS_PATH) -I=../protobuf -I=../protobuf/as/external/api --go_out=plugins=grpc,paths=source_relative:. as/external/api/gatewayProfile.proto
	protoc -I=$(GOOGLEAPIS_PATH) -I=../protobuf -I=../protobuf/as/external/api --go_out=plugins=grpc,paths=source_relative:. as/external/api/internal.proto
	protoc -I=$(GOOGLEAPIS_PATH) -I=../protobuf -I=../protobuf/as/external/api --go_out=plugins=grpc,paths=source_relative:. as/external/api/multicastGroup.proto
	protoc -I=$(GOOGLEAPIS_PATH) -I=../protobuf -I=../protobuf/as/external/api --go_out=plugins=grpc,paths=source_relative:. as/external/api/networkServer.proto
	protoc -I=$(GOOGLEAPIS_PATH) -I=../protobuf -I=../protobuf/as/external/api --go_out=plugins=grpc,paths=source_relative:. as/external/api/organization.proto
	protoc -I=$(GOOGLEAPIS_PATH) -I=../protobuf -I=../protobuf/as/external/api --go_out=plugins=grpc,paths=source_relative:. as/external/api/profiles.proto
	protoc -I=$(GOOGLEAPIS_PATH) -I=../protobuf -I=../protobuf/as/external/api --go_out=plugins=grpc,paths=source_relative:. as/external/api/serviceProfile.proto
	protoc -I=$(GOOGLEAPIS_PATH) -I=../protobuf -I=../protobuf/as/external/api --go_out=plugins=grpc,paths=source_relative:. as/external/api/user.proto
	
	protoc -I=$(GOOGLEAPIS_PATH) -I=../protobuf -I=../protobuf/as/external/api --grpc-gateway_out=paths=source_relative,logtostderr=true:. as/external/api/application.proto
	protoc -I=$(GOOGLEAPIS_PATH) -I=../protobuf -I=../protobuf/as/external/api --grpc-gateway_out=paths=source_relative,logtostderr=true:. as/external/api/common.proto
	protoc -I=$(GOOGLEAPIS_PATH) -I=../protobuf -I=../protobuf/as/external/api --grpc-gateway_out=paths=source_relative,logtostderr=true:. as/external/api/device.proto
	protoc -I=$(GOOGLEAPIS_PATH) -I=../protobuf -I=../protobuf/as/external/api --grpc-gateway_out=paths=source_relative,logtostderr=true:. as/external/api/deviceProfile.proto
	protoc -I=$(GOOGLEAPIS_PATH) -I=../protobuf -I=../protobuf/as/external/api --grpc-gateway_out=paths=source_relative,logtostderr=true:. as/external/api/deviceQueue.proto
	protoc -I=$(GOOGLEAPIS_PATH) -I=../protobuf -I=../protobuf/as/external/api --grpc-gateway_out=paths=source_relative,logtostderr=true:. as/external/api/fuotaDeployment.proto
	protoc -I=$(GOOGLEAPIS_PATH) -I=../protobuf -I=../protobuf/as/external/api --grpc-gateway_out=paths=source_relative,logtostderr=true:. as/external/api/gateway.proto
	protoc -I=$(GOOGLEAPIS_PATH) -I=../protobuf -I=../protobuf/as/external/api --grpc-gateway_out=paths=source_relative,logtostderr=true:. as/external/api/gatewayProfile.proto
	protoc -I=$(GOOGLEAPIS_PATH) -I=../protobuf -I=../protobuf/as/external/api --grpc-gateway_out=paths=source_relative,logtostderr=true:. as/external/api/internal.proto
	protoc -I=$(GOOGLEAPIS_PATH) -I=../protobuf -I=../protobuf/as/external/api --grpc-gateway_out=paths=source_relative,logtostderr=true:. as/external/api/multicastGroup.proto
	protoc -I=$(GOOGLEAPIS_PATH) -I=../protobuf -I=../protobuf/as/external/api --grpc-gateway_out=paths=source_relative,logtostderr=true:. as/external/api/networkServer.proto
	protoc -I=$(GOOGLEAPIS_PATH) -I=../protobuf -I=../protobuf/as/external/api --grpc-gateway_out=paths=source_relative,logtostderr=true:. as/external/api/organization.proto
	protoc -I=$(GOOGLEAPIS_PATH) -I=../protobuf -I=../protobuf/as/external/api --grpc-gateway_out=paths=source_relative,logtostderr=true:. as/external/api/profiles.proto
	protoc -I=$(GOOGLEAPIS_PATH) -I=../protobuf -I=../protobuf/as/external/api --grpc-gateway_out=paths=source_relative,logtostderr=true:. as/external/api/serviceProfile.proto
	protoc -I=$(GOOGLEAPIS_PATH) -I=../protobuf -I=../protobuf/as/external/api --grpc-gateway_out=paths=source_relative,logtostderr=true:. as/external/api/user.proto
