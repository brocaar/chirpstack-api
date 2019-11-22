// GENERATED CODE -- DO NOT EDIT!

// package: api
// file: as/external/api/device.proto

import * as as_external_api_device_pb from "../../../as/external/api/device_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as grpc from "grpc";

interface IDeviceServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  create: grpc.MethodDefinition<as_external_api_device_pb.CreateDeviceRequest, google_protobuf_empty_pb.Empty>;
  get: grpc.MethodDefinition<as_external_api_device_pb.GetDeviceRequest, as_external_api_device_pb.GetDeviceResponse>;
  list: grpc.MethodDefinition<as_external_api_device_pb.ListDeviceRequest, as_external_api_device_pb.ListDeviceResponse>;
  delete: grpc.MethodDefinition<as_external_api_device_pb.DeleteDeviceRequest, google_protobuf_empty_pb.Empty>;
  update: grpc.MethodDefinition<as_external_api_device_pb.UpdateDeviceRequest, google_protobuf_empty_pb.Empty>;
  createKeys: grpc.MethodDefinition<as_external_api_device_pb.CreateDeviceKeysRequest, google_protobuf_empty_pb.Empty>;
  getKeys: grpc.MethodDefinition<as_external_api_device_pb.GetDeviceKeysRequest, as_external_api_device_pb.GetDeviceKeysResponse>;
  updateKeys: grpc.MethodDefinition<as_external_api_device_pb.UpdateDeviceKeysRequest, google_protobuf_empty_pb.Empty>;
  deleteKeys: grpc.MethodDefinition<as_external_api_device_pb.DeleteDeviceKeysRequest, google_protobuf_empty_pb.Empty>;
  activate: grpc.MethodDefinition<as_external_api_device_pb.ActivateDeviceRequest, google_protobuf_empty_pb.Empty>;
  deactivate: grpc.MethodDefinition<as_external_api_device_pb.DeactivateDeviceRequest, google_protobuf_empty_pb.Empty>;
  getActivation: grpc.MethodDefinition<as_external_api_device_pb.GetDeviceActivationRequest, as_external_api_device_pb.GetDeviceActivationResponse>;
  getRandomDevAddr: grpc.MethodDefinition<as_external_api_device_pb.GetRandomDevAddrRequest, as_external_api_device_pb.GetRandomDevAddrResponse>;
  streamFrameLogs: grpc.MethodDefinition<as_external_api_device_pb.StreamDeviceFrameLogsRequest, as_external_api_device_pb.StreamDeviceFrameLogsResponse>;
  streamEventLogs: grpc.MethodDefinition<as_external_api_device_pb.StreamDeviceEventLogsRequest, as_external_api_device_pb.StreamDeviceEventLogsResponse>;
}

export const DeviceServiceService: IDeviceServiceService;

export class DeviceServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  create(argument: as_external_api_device_pb.CreateDeviceRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  create(argument: as_external_api_device_pb.CreateDeviceRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  create(argument: as_external_api_device_pb.CreateDeviceRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  get(argument: as_external_api_device_pb.GetDeviceRequest, callback: grpc.requestCallback<as_external_api_device_pb.GetDeviceResponse>): grpc.ClientUnaryCall;
  get(argument: as_external_api_device_pb.GetDeviceRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<as_external_api_device_pb.GetDeviceResponse>): grpc.ClientUnaryCall;
  get(argument: as_external_api_device_pb.GetDeviceRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<as_external_api_device_pb.GetDeviceResponse>): grpc.ClientUnaryCall;
  list(argument: as_external_api_device_pb.ListDeviceRequest, callback: grpc.requestCallback<as_external_api_device_pb.ListDeviceResponse>): grpc.ClientUnaryCall;
  list(argument: as_external_api_device_pb.ListDeviceRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<as_external_api_device_pb.ListDeviceResponse>): grpc.ClientUnaryCall;
  list(argument: as_external_api_device_pb.ListDeviceRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<as_external_api_device_pb.ListDeviceResponse>): grpc.ClientUnaryCall;
  delete(argument: as_external_api_device_pb.DeleteDeviceRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  delete(argument: as_external_api_device_pb.DeleteDeviceRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  delete(argument: as_external_api_device_pb.DeleteDeviceRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  update(argument: as_external_api_device_pb.UpdateDeviceRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  update(argument: as_external_api_device_pb.UpdateDeviceRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  update(argument: as_external_api_device_pb.UpdateDeviceRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  createKeys(argument: as_external_api_device_pb.CreateDeviceKeysRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  createKeys(argument: as_external_api_device_pb.CreateDeviceKeysRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  createKeys(argument: as_external_api_device_pb.CreateDeviceKeysRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  getKeys(argument: as_external_api_device_pb.GetDeviceKeysRequest, callback: grpc.requestCallback<as_external_api_device_pb.GetDeviceKeysResponse>): grpc.ClientUnaryCall;
  getKeys(argument: as_external_api_device_pb.GetDeviceKeysRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<as_external_api_device_pb.GetDeviceKeysResponse>): grpc.ClientUnaryCall;
  getKeys(argument: as_external_api_device_pb.GetDeviceKeysRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<as_external_api_device_pb.GetDeviceKeysResponse>): grpc.ClientUnaryCall;
  updateKeys(argument: as_external_api_device_pb.UpdateDeviceKeysRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  updateKeys(argument: as_external_api_device_pb.UpdateDeviceKeysRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  updateKeys(argument: as_external_api_device_pb.UpdateDeviceKeysRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteKeys(argument: as_external_api_device_pb.DeleteDeviceKeysRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteKeys(argument: as_external_api_device_pb.DeleteDeviceKeysRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteKeys(argument: as_external_api_device_pb.DeleteDeviceKeysRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  activate(argument: as_external_api_device_pb.ActivateDeviceRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  activate(argument: as_external_api_device_pb.ActivateDeviceRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  activate(argument: as_external_api_device_pb.ActivateDeviceRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deactivate(argument: as_external_api_device_pb.DeactivateDeviceRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deactivate(argument: as_external_api_device_pb.DeactivateDeviceRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deactivate(argument: as_external_api_device_pb.DeactivateDeviceRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  getActivation(argument: as_external_api_device_pb.GetDeviceActivationRequest, callback: grpc.requestCallback<as_external_api_device_pb.GetDeviceActivationResponse>): grpc.ClientUnaryCall;
  getActivation(argument: as_external_api_device_pb.GetDeviceActivationRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<as_external_api_device_pb.GetDeviceActivationResponse>): grpc.ClientUnaryCall;
  getActivation(argument: as_external_api_device_pb.GetDeviceActivationRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<as_external_api_device_pb.GetDeviceActivationResponse>): grpc.ClientUnaryCall;
  getRandomDevAddr(argument: as_external_api_device_pb.GetRandomDevAddrRequest, callback: grpc.requestCallback<as_external_api_device_pb.GetRandomDevAddrResponse>): grpc.ClientUnaryCall;
  getRandomDevAddr(argument: as_external_api_device_pb.GetRandomDevAddrRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<as_external_api_device_pb.GetRandomDevAddrResponse>): grpc.ClientUnaryCall;
  getRandomDevAddr(argument: as_external_api_device_pb.GetRandomDevAddrRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<as_external_api_device_pb.GetRandomDevAddrResponse>): grpc.ClientUnaryCall;
  streamFrameLogs(argument: as_external_api_device_pb.StreamDeviceFrameLogsRequest, metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientReadableStream<as_external_api_device_pb.StreamDeviceFrameLogsResponse>;
  streamFrameLogs(argument: as_external_api_device_pb.StreamDeviceFrameLogsRequest, metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientReadableStream<as_external_api_device_pb.StreamDeviceFrameLogsResponse>;
  streamEventLogs(argument: as_external_api_device_pb.StreamDeviceEventLogsRequest, metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientReadableStream<as_external_api_device_pb.StreamDeviceEventLogsResponse>;
  streamEventLogs(argument: as_external_api_device_pb.StreamDeviceEventLogsRequest, metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientReadableStream<as_external_api_device_pb.StreamDeviceEventLogsResponse>;
}
