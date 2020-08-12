.PHONY: requirements common gw geo nc ns as as-integration as-external-api publish

GOOGLEAPIS_PATH := "/googleapis"

OUTPUT_DIR := ./build/src/main/java
PROTOC_ARGS := --plugin=protoc-gen-grpc-java=/protoc-gen-grpc-java --grpc-java_out=$(OUTPUT_DIR) --java_out=$(OUTPUT_DIR)

BASE_PATH := ../protobuf

all: requirements version common gw geo nc ns as as-integration as-external-api google-api publish

requirements:
	rm -rf build
	cp -r template build
	mvn -f build/pom.xml clean verify

version:
	sed -i 's/<version>1.0-SNAPSHOT<\/version>/<version>$(VERSION)<\/version>/g' build/pom.xml

common:
	protoc -I=${BASE_PATH} -I=${BASE_PATH}/common $(PROTOC_ARGS) ${BASE_PATH}/common/common.proto

gw:
	protoc -I=${BASE_PATH} -I=${BASE_PATH}/gw $(PROTOC_ARGS) ${BASE_PATH}/gw/gw.proto

geo:
	protoc -I=${BASE_PATH} -I=${BASE_PATH}/geo $(PROTOC_ARGS) ${BASE_PATH}/geo/geo.proto

nc:
	protoc -I=${BASE_PATH} -I=${BASE_PATH}/nc $(PROTOC_ARGS) ${BASE_PATH}/nc/nc.proto

ns:
	protoc -I=${BASE_PATH} -I=${BASE_PATH}/ns $(PROTOC_ARGS) ${BASE_PATH}/ns/profiles.proto
	protoc -I=${BASE_PATH} -I=${BASE_PATH}/ns $(PROTOC_ARGS) ${BASE_PATH}/ns/ns.proto

as:
	protoc -I=${BASE_PATH} -I=${BASE_PATH}/as $(PROTOC_ARGS) ${BASE_PATH}/as/as.proto

as-integration:
	protoc -I=${BASE_PATH} -I=${BASE_PATH}/as/integration $(PROTOC_ARGS) ${BASE_PATH}/as/integration/integration.proto

as-external-api:
	# gRPC
	protoc -I=$(GOOGLEAPIS_PATH) -I=${BASE_PATH} -I=${BASE_PATH}/as/external/api $(PROTOC_ARGS) ${BASE_PATH}/as/external/api/application.proto
	protoc -I=$(GOOGLEAPIS_PATH) -I=${BASE_PATH} -I=${BASE_PATH}/as/external/api $(PROTOC_ARGS) ${BASE_PATH}/as/external/api/frameLog.proto
	protoc -I=$(GOOGLEAPIS_PATH) -I=${BASE_PATH} -I=${BASE_PATH}/as/external/api $(PROTOC_ARGS) ${BASE_PATH}/as/external/api/device.proto
	protoc -I=$(GOOGLEAPIS_PATH) -I=${BASE_PATH} -I=${BASE_PATH}/as/external/api $(PROTOC_ARGS) ${BASE_PATH}/as/external/api/deviceProfile.proto
	protoc -I=$(GOOGLEAPIS_PATH) -I=${BASE_PATH} -I=${BASE_PATH}/as/external/api $(PROTOC_ARGS) ${BASE_PATH}/as/external/api/deviceQueue.proto
	protoc -I=$(GOOGLEAPIS_PATH) -I=${BASE_PATH} -I=${BASE_PATH}/as/external/api $(PROTOC_ARGS) ${BASE_PATH}/as/external/api/fuotaDeployment.proto
	protoc -I=$(GOOGLEAPIS_PATH) -I=${BASE_PATH} -I=${BASE_PATH}/as/external/api $(PROTOC_ARGS) ${BASE_PATH}/as/external/api/gateway.proto
	protoc -I=$(GOOGLEAPIS_PATH) -I=${BASE_PATH} -I=${BASE_PATH}/as/external/api $(PROTOC_ARGS) ${BASE_PATH}/as/external/api/gatewayProfile.proto
	protoc -I=$(GOOGLEAPIS_PATH) -I=${BASE_PATH} -I=${BASE_PATH}/as/external/api $(PROTOC_ARGS) ${BASE_PATH}/as/external/api/internal.proto
	protoc -I=$(GOOGLEAPIS_PATH) -I=${BASE_PATH} -I=${BASE_PATH}/as/external/api $(PROTOC_ARGS) ${BASE_PATH}/as/external/api/multicastGroup.proto
	protoc -I=$(GOOGLEAPIS_PATH) -I=${BASE_PATH} -I=${BASE_PATH}/as/external/api $(PROTOC_ARGS) ${BASE_PATH}/as/external/api/networkServer.proto
	protoc -I=$(GOOGLEAPIS_PATH) -I=${BASE_PATH} -I=${BASE_PATH}/as/external/api $(PROTOC_ARGS) ${BASE_PATH}/as/external/api/organization.proto
	protoc -I=$(GOOGLEAPIS_PATH) -I=${BASE_PATH} -I=${BASE_PATH}/as/external/api $(PROTOC_ARGS) ${BASE_PATH}/as/external/api/profiles.proto
	protoc -I=$(GOOGLEAPIS_PATH) -I=${BASE_PATH} -I=${BASE_PATH}/as/external/api $(PROTOC_ARGS) ${BASE_PATH}/as/external/api/serviceProfile.proto
	protoc -I=$(GOOGLEAPIS_PATH) -I=${BASE_PATH} -I=${BASE_PATH}/as/external/api $(PROTOC_ARGS) ${BASE_PATH}/as/external/api/user.proto

google-api:
	protoc -I=$(GOOGLEAPIS_PATH) $(PROTOC_ARGS) $(GOOGLEAPIS_PATH)/google/api/*.proto

install: version
	# install maven artifact local
	mvn -f build/pom.xml install

publish: version
	#TODO: maven publish
	mvn -f build/pom.xml package
