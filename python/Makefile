GOOGLEAPIS_PATH := "/googleapis"
IMPORT_AS := import \"as_pb/
PACKAGE_NAME := import \"chirpstack-api/

all: requirements version pre-build common gw geo nc ns fuota as as-integration as-external-api

requirements:
	pip install grpcio-tools mypy-protobuf

version:
	sed -i 's/version.*/version = "$(VERSION)",/g' ./src/setup.py

pre-build:
	rm -rf proto
	mkdir -p proto/chirpstack-api
	cp -r ../protobuf/* proto/chirpstack-api/
	mv -n  proto/chirpstack-api/as  proto/chirpstack-api/as_pb
	mv -n proto/chirpstack-api/as_pb/as.proto proto/chirpstack-api/as_pb/as_pb.proto
	sed -i 's@^import "as/@$(IMPORT_AS)@g' `find proto/chirpstack-api -type f -name "*.proto*"`
	sed -i 's@^import "common/@$(PACKAGE_NAME)common/@g' `find proto/chirpstack-api -type f -name "*.proto*"`
	sed -i 's@^import "gw/@$(PACKAGE_NAME)gw/@g' `find proto/chirpstack-api -type f -name "*.proto*"`
	sed -i 's@^import "as_pb/@$(PACKAGE_NAME)as_pb/@g' `find proto/chirpstack-api -type f -name "*.proto*"`
	sed -i 's@^import "ns/@$(PACKAGE_NAME)ns/@g' `find proto/chirpstack-api -type f -name "*.proto*"`
	mkdir -p src

common:
	python -m grpc_tools.protoc -I=proto --python_out=src --mypy_out=src proto/chirpstack-api/common/common.proto

gw:
	python -m grpc_tools.protoc -I=proto --python_out=src --mypy_out=src proto/chirpstack-api/gw/gw.proto

geo:
	python -m grpc_tools.protoc -I=proto --python_out=src --mypy_out=src --python_grpc_out=src --mypy_grpc_out=src proto/chirpstack-api/geo/geo.proto
	rm src/chirpstack_api/geo/geo_grpc.py
	
nc:
	python -m grpc_tools.protoc -I=proto --python_out=src --mypy_out=src --python_grpc_out=src --mypy_grpc_out=src proto/chirpstack-api/nc/nc.proto
	rm src/chirpstack_api/nc/nc_grpc.py

ns:
	python -m grpc_tools.protoc -I=proto --python_out=src --mypy_out=src proto/chirpstack-api/ns/profiles.proto
	python -m grpc_tools.protoc -I=proto --python_out=src --mypy_out=src --python_grpc_out=src --mypy_grpc_out=src proto/chirpstack-api/ns/ns.proto
	rm src/chirpstack_api/ns/ns_grpc.py

fuota:
	python -m grpc_tools.protoc -I grpc_tools.protoc -I=proto --python_out=src --mypy_out=src --python_grpc_out=src --mypy_grpc_out=src proto/chirpstack-api/fuota/fuota.proto
	rm src/chirpstack_api/fuota/fuota_grpc.py

as:
	python -m grpc_tools.protoc -I=proto --python_out=src --mypy_out=src --python_grpc_out=src --mypy_grpc_out=src proto/chirpstack-api/as_pb/as_pb.proto
	rm src/chirpstack_api/as_pb/as_pb_grpc.py

as-integration:
	python -m grpc_tools.protoc -I=proto --python_out=src --mypy_out=src proto/chirpstack-api/as_pb/integration/integration.proto

as-external-api:
	$(eval PROTOC_GEN := python -m grpc_tools.protoc -I=proto -I=$(GOOGLEAPIS_PATH) --python_out=src --mypy_out=src --python_grpc_out=src --mypy_grpc_out=src)

	$(PROTOC_GEN) proto/chirpstack-api/as_pb/external/api/application.proto
	$(PROTOC_GEN) proto/chirpstack-api/as_pb/external/api/frameLog.proto
	$(PROTOC_GEN) proto/chirpstack-api/as_pb/external/api/device.proto
	$(PROTOC_GEN) proto/chirpstack-api/as_pb/external/api/deviceProfile.proto
	$(PROTOC_GEN) proto/chirpstack-api/as_pb/external/api/deviceQueue.proto
	$(PROTOC_GEN) proto/chirpstack-api/as_pb/external/api/gateway.proto
	$(PROTOC_GEN) proto/chirpstack-api/as_pb/external/api/gatewayProfile.proto
	$(PROTOC_GEN) proto/chirpstack-api/as_pb/external/api/internal.proto
	$(PROTOC_GEN) proto/chirpstack-api/as_pb/external/api/multicastGroup.proto
	$(PROTOC_GEN) proto/chirpstack-api/as_pb/external/api/networkServer.proto
	$(PROTOC_GEN) proto/chirpstack-api/as_pb/external/api/organization.proto
	$(PROTOC_GEN) proto/chirpstack-api/as_pb/external/api/profiles.proto
	$(PROTOC_GEN) proto/chirpstack-api/as_pb/external/api/serviceProfile.proto
	$(PROTOC_GEN) proto/chirpstack-api/as_pb/external/api/user.proto
	
	find src/chirpstack_api/as_pb/external/api -type f -name "*grpc.py" ! -name "*pb2*.py" -delete
