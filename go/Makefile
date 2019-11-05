.PHONY: requirements common gw geo nc ns as as-integration as-external

GRPC_GW_PATH := $(shell go list -f '{{ .Dir }}' github.com/grpc-ecosystem/grpc-gateway/protoc-gen-grpc-gateway)
GOOGLEAPIS_PATH := "$(GRPC_GW_PATH)/../third_party/googleapis"

all: requirements common gw geo nc ns as as-integration as-external

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

as-external:
	# gRPC
	protoc -I=$(GOOGLEAPIS_PATH) -I=../protobuf -I=../protobuf/as/external --go_out=plugins=grpc,paths=source_relative:. as/external/application.proto
	protoc -I=$(GOOGLEAPIS_PATH) -I=../protobuf -I=../protobuf/as/external --go_out=plugins=grpc,paths=source_relative:. as/external/common.proto
	protoc -I=$(GOOGLEAPIS_PATH) -I=../protobuf -I=../protobuf/as/external --go_out=plugins=grpc,paths=source_relative:. as/external/device.proto
	protoc -I=$(GOOGLEAPIS_PATH) -I=../protobuf -I=../protobuf/as/external --go_out=plugins=grpc,paths=source_relative:. as/external/deviceProfile.proto
	protoc -I=$(GOOGLEAPIS_PATH) -I=../protobuf -I=../protobuf/as/external --go_out=plugins=grpc,paths=source_relative:. as/external/deviceQueue.proto
	protoc -I=$(GOOGLEAPIS_PATH) -I=../protobuf -I=../protobuf/as/external --go_out=plugins=grpc,paths=source_relative:. as/external/fuotaDeployment.proto
	protoc -I=$(GOOGLEAPIS_PATH) -I=../protobuf -I=../protobuf/as/external --go_out=plugins=grpc,paths=source_relative:. as/external/gateway.proto
	protoc -I=$(GOOGLEAPIS_PATH) -I=../protobuf -I=../protobuf/as/external --go_out=plugins=grpc,paths=source_relative:. as/external/gatewayProfile.proto
	protoc -I=$(GOOGLEAPIS_PATH) -I=../protobuf -I=../protobuf/as/external --go_out=plugins=grpc,paths=source_relative:. as/external/internal.proto
	protoc -I=$(GOOGLEAPIS_PATH) -I=../protobuf -I=../protobuf/as/external --go_out=plugins=grpc,paths=source_relative:. as/external/multicastGroup.proto
	protoc -I=$(GOOGLEAPIS_PATH) -I=../protobuf -I=../protobuf/as/external --go_out=plugins=grpc,paths=source_relative:. as/external/networkServer.proto
	protoc -I=$(GOOGLEAPIS_PATH) -I=../protobuf -I=../protobuf/as/external --go_out=plugins=grpc,paths=source_relative:. as/external/organization.proto
	protoc -I=$(GOOGLEAPIS_PATH) -I=../protobuf -I=../protobuf/as/external --go_out=plugins=grpc,paths=source_relative:. as/external/profiles.proto
	protoc -I=$(GOOGLEAPIS_PATH) -I=../protobuf -I=../protobuf/as/external --go_out=plugins=grpc,paths=source_relative:. as/external/serviceProfile.proto
	protoc -I=$(GOOGLEAPIS_PATH) -I=../protobuf -I=../protobuf/as/external --go_out=plugins=grpc,paths=source_relative:. as/external/user.proto
	
	protoc -I=$(GOOGLEAPIS_PATH) -I=../protobuf -I=../protobuf/as/external --grpc-gateway_out=paths=source_relative,logtostderr=true:. as/external/application.proto
	protoc -I=$(GOOGLEAPIS_PATH) -I=../protobuf -I=../protobuf/as/external --grpc-gateway_out=paths=source_relative,logtostderr=true:. as/external/common.proto
	protoc -I=$(GOOGLEAPIS_PATH) -I=../protobuf -I=../protobuf/as/external --grpc-gateway_out=paths=source_relative,logtostderr=true:. as/external/device.proto
	protoc -I=$(GOOGLEAPIS_PATH) -I=../protobuf -I=../protobuf/as/external --grpc-gateway_out=paths=source_relative,logtostderr=true:. as/external/deviceProfile.proto
	protoc -I=$(GOOGLEAPIS_PATH) -I=../protobuf -I=../protobuf/as/external --grpc-gateway_out=paths=source_relative,logtostderr=true:. as/external/deviceQueue.proto
	protoc -I=$(GOOGLEAPIS_PATH) -I=../protobuf -I=../protobuf/as/external --grpc-gateway_out=paths=source_relative,logtostderr=true:. as/external/fuotaDeployment.proto
	protoc -I=$(GOOGLEAPIS_PATH) -I=../protobuf -I=../protobuf/as/external --grpc-gateway_out=paths=source_relative,logtostderr=true:. as/external/gateway.proto
	protoc -I=$(GOOGLEAPIS_PATH) -I=../protobuf -I=../protobuf/as/external --grpc-gateway_out=paths=source_relative,logtostderr=true:. as/external/gatewayProfile.proto
	protoc -I=$(GOOGLEAPIS_PATH) -I=../protobuf -I=../protobuf/as/external --grpc-gateway_out=paths=source_relative,logtostderr=true:. as/external/internal.proto
	protoc -I=$(GOOGLEAPIS_PATH) -I=../protobuf -I=../protobuf/as/external --grpc-gateway_out=paths=source_relative,logtostderr=true:. as/external/multicastGroup.proto
	protoc -I=$(GOOGLEAPIS_PATH) -I=../protobuf -I=../protobuf/as/external --grpc-gateway_out=paths=source_relative,logtostderr=true:. as/external/networkServer.proto
	protoc -I=$(GOOGLEAPIS_PATH) -I=../protobuf -I=../protobuf/as/external --grpc-gateway_out=paths=source_relative,logtostderr=true:. as/external/organization.proto
	protoc -I=$(GOOGLEAPIS_PATH) -I=../protobuf -I=../protobuf/as/external --grpc-gateway_out=paths=source_relative,logtostderr=true:. as/external/profiles.proto
	protoc -I=$(GOOGLEAPIS_PATH) -I=../protobuf -I=../protobuf/as/external --grpc-gateway_out=paths=source_relative,logtostderr=true:. as/external/serviceProfile.proto
	protoc -I=$(GOOGLEAPIS_PATH) -I=../protobuf -I=../protobuf/as/external --grpc-gateway_out=paths=source_relative,logtostderr=true:. as/external/user.proto
