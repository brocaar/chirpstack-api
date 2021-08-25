// GENERATED CODE -- DO NOT EDIT!

// package: api
// file: as/external/api/deviceProfile.proto

import * as as_external_api_deviceProfile_pb from "../../../as/external/api/deviceProfile_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as grpc from "@grpc/grpc-js";

interface IDeviceProfileServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  create: grpc.MethodDefinition<as_external_api_deviceProfile_pb.CreateDeviceProfileRequest, as_external_api_deviceProfile_pb.CreateDeviceProfileResponse>;
  get: grpc.MethodDefinition<as_external_api_deviceProfile_pb.GetDeviceProfileRequest, as_external_api_deviceProfile_pb.GetDeviceProfileResponse>;
  update: grpc.MethodDefinition<as_external_api_deviceProfile_pb.UpdateDeviceProfileRequest, google_protobuf_empty_pb.Empty>;
  delete: grpc.MethodDefinition<as_external_api_deviceProfile_pb.DeleteDeviceProfileRequest, google_protobuf_empty_pb.Empty>;
  list: grpc.MethodDefinition<as_external_api_deviceProfile_pb.ListDeviceProfileRequest, as_external_api_deviceProfile_pb.ListDeviceProfileResponse>;
}

export const DeviceProfileServiceService: IDeviceProfileServiceService;

export interface IDeviceProfileServiceServer extends grpc.UntypedServiceImplementation {
  create: grpc.handleUnaryCall<as_external_api_deviceProfile_pb.CreateDeviceProfileRequest, as_external_api_deviceProfile_pb.CreateDeviceProfileResponse>;
  get: grpc.handleUnaryCall<as_external_api_deviceProfile_pb.GetDeviceProfileRequest, as_external_api_deviceProfile_pb.GetDeviceProfileResponse>;
  update: grpc.handleUnaryCall<as_external_api_deviceProfile_pb.UpdateDeviceProfileRequest, google_protobuf_empty_pb.Empty>;
  delete: grpc.handleUnaryCall<as_external_api_deviceProfile_pb.DeleteDeviceProfileRequest, google_protobuf_empty_pb.Empty>;
  list: grpc.handleUnaryCall<as_external_api_deviceProfile_pb.ListDeviceProfileRequest, as_external_api_deviceProfile_pb.ListDeviceProfileResponse>;
}

export class DeviceProfileServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  create(argument: as_external_api_deviceProfile_pb.CreateDeviceProfileRequest, callback: grpc.requestCallback<as_external_api_deviceProfile_pb.CreateDeviceProfileResponse>): grpc.ClientUnaryCall;
  create(argument: as_external_api_deviceProfile_pb.CreateDeviceProfileRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<as_external_api_deviceProfile_pb.CreateDeviceProfileResponse>): grpc.ClientUnaryCall;
  create(argument: as_external_api_deviceProfile_pb.CreateDeviceProfileRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<as_external_api_deviceProfile_pb.CreateDeviceProfileResponse>): grpc.ClientUnaryCall;
  get(argument: as_external_api_deviceProfile_pb.GetDeviceProfileRequest, callback: grpc.requestCallback<as_external_api_deviceProfile_pb.GetDeviceProfileResponse>): grpc.ClientUnaryCall;
  get(argument: as_external_api_deviceProfile_pb.GetDeviceProfileRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<as_external_api_deviceProfile_pb.GetDeviceProfileResponse>): grpc.ClientUnaryCall;
  get(argument: as_external_api_deviceProfile_pb.GetDeviceProfileRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<as_external_api_deviceProfile_pb.GetDeviceProfileResponse>): grpc.ClientUnaryCall;
  update(argument: as_external_api_deviceProfile_pb.UpdateDeviceProfileRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  update(argument: as_external_api_deviceProfile_pb.UpdateDeviceProfileRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  update(argument: as_external_api_deviceProfile_pb.UpdateDeviceProfileRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  delete(argument: as_external_api_deviceProfile_pb.DeleteDeviceProfileRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  delete(argument: as_external_api_deviceProfile_pb.DeleteDeviceProfileRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  delete(argument: as_external_api_deviceProfile_pb.DeleteDeviceProfileRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  list(argument: as_external_api_deviceProfile_pb.ListDeviceProfileRequest, callback: grpc.requestCallback<as_external_api_deviceProfile_pb.ListDeviceProfileResponse>): grpc.ClientUnaryCall;
  list(argument: as_external_api_deviceProfile_pb.ListDeviceProfileRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<as_external_api_deviceProfile_pb.ListDeviceProfileResponse>): grpc.ClientUnaryCall;
  list(argument: as_external_api_deviceProfile_pb.ListDeviceProfileRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<as_external_api_deviceProfile_pb.ListDeviceProfileResponse>): grpc.ClientUnaryCall;
}
