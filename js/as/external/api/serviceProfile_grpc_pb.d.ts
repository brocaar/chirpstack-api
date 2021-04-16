// GENERATED CODE -- DO NOT EDIT!

// package: api
// file: as/external/api/serviceProfile.proto

import * as as_external_api_serviceProfile_pb from "../../../as/external/api/serviceProfile_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as grpc from "grpc";

interface IServiceProfileServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  create: grpc.MethodDefinition<as_external_api_serviceProfile_pb.CreateServiceProfileRequest, as_external_api_serviceProfile_pb.CreateServiceProfileResponse>;
  get: grpc.MethodDefinition<as_external_api_serviceProfile_pb.GetServiceProfileRequest, as_external_api_serviceProfile_pb.GetServiceProfileResponse>;
  update: grpc.MethodDefinition<as_external_api_serviceProfile_pb.UpdateServiceProfileRequest, google_protobuf_empty_pb.Empty>;
  delete: grpc.MethodDefinition<as_external_api_serviceProfile_pb.DeleteServiceProfileRequest, google_protobuf_empty_pb.Empty>;
  list: grpc.MethodDefinition<as_external_api_serviceProfile_pb.ListServiceProfileRequest, as_external_api_serviceProfile_pb.ListServiceProfileResponse>;
}

export const ServiceProfileServiceService: IServiceProfileServiceService;

export interface IServiceProfileServiceServer extends grpc.UntypedServiceImplementation {
  create: grpc.handleUnaryCall<as_external_api_serviceProfile_pb.CreateServiceProfileRequest, as_external_api_serviceProfile_pb.CreateServiceProfileResponse>;
  get: grpc.handleUnaryCall<as_external_api_serviceProfile_pb.GetServiceProfileRequest, as_external_api_serviceProfile_pb.GetServiceProfileResponse>;
  update: grpc.handleUnaryCall<as_external_api_serviceProfile_pb.UpdateServiceProfileRequest, google_protobuf_empty_pb.Empty>;
  delete: grpc.handleUnaryCall<as_external_api_serviceProfile_pb.DeleteServiceProfileRequest, google_protobuf_empty_pb.Empty>;
  list: grpc.handleUnaryCall<as_external_api_serviceProfile_pb.ListServiceProfileRequest, as_external_api_serviceProfile_pb.ListServiceProfileResponse>;
}

export class ServiceProfileServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  create(argument: as_external_api_serviceProfile_pb.CreateServiceProfileRequest, callback: grpc.requestCallback<as_external_api_serviceProfile_pb.CreateServiceProfileResponse>): grpc.ClientUnaryCall;
  create(argument: as_external_api_serviceProfile_pb.CreateServiceProfileRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<as_external_api_serviceProfile_pb.CreateServiceProfileResponse>): grpc.ClientUnaryCall;
  create(argument: as_external_api_serviceProfile_pb.CreateServiceProfileRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<as_external_api_serviceProfile_pb.CreateServiceProfileResponse>): grpc.ClientUnaryCall;
  get(argument: as_external_api_serviceProfile_pb.GetServiceProfileRequest, callback: grpc.requestCallback<as_external_api_serviceProfile_pb.GetServiceProfileResponse>): grpc.ClientUnaryCall;
  get(argument: as_external_api_serviceProfile_pb.GetServiceProfileRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<as_external_api_serviceProfile_pb.GetServiceProfileResponse>): grpc.ClientUnaryCall;
  get(argument: as_external_api_serviceProfile_pb.GetServiceProfileRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<as_external_api_serviceProfile_pb.GetServiceProfileResponse>): grpc.ClientUnaryCall;
  update(argument: as_external_api_serviceProfile_pb.UpdateServiceProfileRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  update(argument: as_external_api_serviceProfile_pb.UpdateServiceProfileRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  update(argument: as_external_api_serviceProfile_pb.UpdateServiceProfileRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  delete(argument: as_external_api_serviceProfile_pb.DeleteServiceProfileRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  delete(argument: as_external_api_serviceProfile_pb.DeleteServiceProfileRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  delete(argument: as_external_api_serviceProfile_pb.DeleteServiceProfileRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  list(argument: as_external_api_serviceProfile_pb.ListServiceProfileRequest, callback: grpc.requestCallback<as_external_api_serviceProfile_pb.ListServiceProfileResponse>): grpc.ClientUnaryCall;
  list(argument: as_external_api_serviceProfile_pb.ListServiceProfileRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<as_external_api_serviceProfile_pb.ListServiceProfileResponse>): grpc.ClientUnaryCall;
  list(argument: as_external_api_serviceProfile_pb.ListServiceProfileRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<as_external_api_serviceProfile_pb.ListServiceProfileResponse>): grpc.ClientUnaryCall;
}
