// GENERATED CODE -- DO NOT EDIT!

// package: api
// file: as/external/api/fuotaDeployment.proto

import * as as_external_api_fuotaDeployment_pb from "../../../as/external/api/fuotaDeployment_pb";
import * as grpc from "grpc";

interface IFUOTADeploymentServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  createForDevice: grpc.MethodDefinition<as_external_api_fuotaDeployment_pb.CreateFUOTADeploymentForDeviceRequest, as_external_api_fuotaDeployment_pb.CreateFUOTADeploymentForDeviceResponse>;
  get: grpc.MethodDefinition<as_external_api_fuotaDeployment_pb.GetFUOTADeploymentRequest, as_external_api_fuotaDeployment_pb.GetFUOTADeploymentResponse>;
  list: grpc.MethodDefinition<as_external_api_fuotaDeployment_pb.ListFUOTADeploymentRequest, as_external_api_fuotaDeployment_pb.ListFUOTADeploymentResponse>;
  getDeploymentDevice: grpc.MethodDefinition<as_external_api_fuotaDeployment_pb.GetFUOTADeploymentDeviceRequest, as_external_api_fuotaDeployment_pb.GetFUOTADeploymentDeviceResponse>;
  listDeploymentDevices: grpc.MethodDefinition<as_external_api_fuotaDeployment_pb.ListFUOTADeploymentDevicesRequest, as_external_api_fuotaDeployment_pb.ListFUOTADeploymentDevicesResponse>;
}

export const FUOTADeploymentServiceService: IFUOTADeploymentServiceService;

export class FUOTADeploymentServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  createForDevice(argument: as_external_api_fuotaDeployment_pb.CreateFUOTADeploymentForDeviceRequest, callback: grpc.requestCallback<as_external_api_fuotaDeployment_pb.CreateFUOTADeploymentForDeviceResponse>): grpc.ClientUnaryCall;
  createForDevice(argument: as_external_api_fuotaDeployment_pb.CreateFUOTADeploymentForDeviceRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<as_external_api_fuotaDeployment_pb.CreateFUOTADeploymentForDeviceResponse>): grpc.ClientUnaryCall;
  createForDevice(argument: as_external_api_fuotaDeployment_pb.CreateFUOTADeploymentForDeviceRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<as_external_api_fuotaDeployment_pb.CreateFUOTADeploymentForDeviceResponse>): grpc.ClientUnaryCall;
  get(argument: as_external_api_fuotaDeployment_pb.GetFUOTADeploymentRequest, callback: grpc.requestCallback<as_external_api_fuotaDeployment_pb.GetFUOTADeploymentResponse>): grpc.ClientUnaryCall;
  get(argument: as_external_api_fuotaDeployment_pb.GetFUOTADeploymentRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<as_external_api_fuotaDeployment_pb.GetFUOTADeploymentResponse>): grpc.ClientUnaryCall;
  get(argument: as_external_api_fuotaDeployment_pb.GetFUOTADeploymentRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<as_external_api_fuotaDeployment_pb.GetFUOTADeploymentResponse>): grpc.ClientUnaryCall;
  list(argument: as_external_api_fuotaDeployment_pb.ListFUOTADeploymentRequest, callback: grpc.requestCallback<as_external_api_fuotaDeployment_pb.ListFUOTADeploymentResponse>): grpc.ClientUnaryCall;
  list(argument: as_external_api_fuotaDeployment_pb.ListFUOTADeploymentRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<as_external_api_fuotaDeployment_pb.ListFUOTADeploymentResponse>): grpc.ClientUnaryCall;
  list(argument: as_external_api_fuotaDeployment_pb.ListFUOTADeploymentRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<as_external_api_fuotaDeployment_pb.ListFUOTADeploymentResponse>): grpc.ClientUnaryCall;
  getDeploymentDevice(argument: as_external_api_fuotaDeployment_pb.GetFUOTADeploymentDeviceRequest, callback: grpc.requestCallback<as_external_api_fuotaDeployment_pb.GetFUOTADeploymentDeviceResponse>): grpc.ClientUnaryCall;
  getDeploymentDevice(argument: as_external_api_fuotaDeployment_pb.GetFUOTADeploymentDeviceRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<as_external_api_fuotaDeployment_pb.GetFUOTADeploymentDeviceResponse>): grpc.ClientUnaryCall;
  getDeploymentDevice(argument: as_external_api_fuotaDeployment_pb.GetFUOTADeploymentDeviceRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<as_external_api_fuotaDeployment_pb.GetFUOTADeploymentDeviceResponse>): grpc.ClientUnaryCall;
  listDeploymentDevices(argument: as_external_api_fuotaDeployment_pb.ListFUOTADeploymentDevicesRequest, callback: grpc.requestCallback<as_external_api_fuotaDeployment_pb.ListFUOTADeploymentDevicesResponse>): grpc.ClientUnaryCall;
  listDeploymentDevices(argument: as_external_api_fuotaDeployment_pb.ListFUOTADeploymentDevicesRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<as_external_api_fuotaDeployment_pb.ListFUOTADeploymentDevicesResponse>): grpc.ClientUnaryCall;
  listDeploymentDevices(argument: as_external_api_fuotaDeployment_pb.ListFUOTADeploymentDevicesRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<as_external_api_fuotaDeployment_pb.ListFUOTADeploymentDevicesResponse>): grpc.ClientUnaryCall;
}
