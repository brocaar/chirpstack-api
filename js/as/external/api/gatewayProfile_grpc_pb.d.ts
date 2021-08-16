// GENERATED CODE -- DO NOT EDIT!

// package: api
// file: as/external/api/gatewayProfile.proto

import * as as_external_api_gatewayProfile_pb from "../../../as/external/api/gatewayProfile_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as grpc from "grpc";

interface IGatewayProfileServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  create: grpc.MethodDefinition<as_external_api_gatewayProfile_pb.CreateGatewayProfileRequest, as_external_api_gatewayProfile_pb.CreateGatewayProfileResponse>;
  get: grpc.MethodDefinition<as_external_api_gatewayProfile_pb.GetGatewayProfileRequest, as_external_api_gatewayProfile_pb.GetGatewayProfileResponse>;
  update: grpc.MethodDefinition<as_external_api_gatewayProfile_pb.UpdateGatewayProfileRequest, google_protobuf_empty_pb.Empty>;
  delete: grpc.MethodDefinition<as_external_api_gatewayProfile_pb.DeleteGatewayProfileRequest, google_protobuf_empty_pb.Empty>;
  list: grpc.MethodDefinition<as_external_api_gatewayProfile_pb.ListGatewayProfilesRequest, as_external_api_gatewayProfile_pb.ListGatewayProfilesResponse>;
}

export const GatewayProfileServiceService: IGatewayProfileServiceService;

export interface IGatewayProfileServiceServer extends grpc.UntypedServiceImplementation {
  create: grpc.handleUnaryCall<as_external_api_gatewayProfile_pb.CreateGatewayProfileRequest, as_external_api_gatewayProfile_pb.CreateGatewayProfileResponse>;
  get: grpc.handleUnaryCall<as_external_api_gatewayProfile_pb.GetGatewayProfileRequest, as_external_api_gatewayProfile_pb.GetGatewayProfileResponse>;
  update: grpc.handleUnaryCall<as_external_api_gatewayProfile_pb.UpdateGatewayProfileRequest, google_protobuf_empty_pb.Empty>;
  delete: grpc.handleUnaryCall<as_external_api_gatewayProfile_pb.DeleteGatewayProfileRequest, google_protobuf_empty_pb.Empty>;
  list: grpc.handleUnaryCall<as_external_api_gatewayProfile_pb.ListGatewayProfilesRequest, as_external_api_gatewayProfile_pb.ListGatewayProfilesResponse>;
}

export class GatewayProfileServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  create(argument: as_external_api_gatewayProfile_pb.CreateGatewayProfileRequest, callback: grpc.requestCallback<as_external_api_gatewayProfile_pb.CreateGatewayProfileResponse>): grpc.ClientUnaryCall;
  create(argument: as_external_api_gatewayProfile_pb.CreateGatewayProfileRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<as_external_api_gatewayProfile_pb.CreateGatewayProfileResponse>): grpc.ClientUnaryCall;
  create(argument: as_external_api_gatewayProfile_pb.CreateGatewayProfileRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<as_external_api_gatewayProfile_pb.CreateGatewayProfileResponse>): grpc.ClientUnaryCall;
  get(argument: as_external_api_gatewayProfile_pb.GetGatewayProfileRequest, callback: grpc.requestCallback<as_external_api_gatewayProfile_pb.GetGatewayProfileResponse>): grpc.ClientUnaryCall;
  get(argument: as_external_api_gatewayProfile_pb.GetGatewayProfileRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<as_external_api_gatewayProfile_pb.GetGatewayProfileResponse>): grpc.ClientUnaryCall;
  get(argument: as_external_api_gatewayProfile_pb.GetGatewayProfileRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<as_external_api_gatewayProfile_pb.GetGatewayProfileResponse>): grpc.ClientUnaryCall;
  update(argument: as_external_api_gatewayProfile_pb.UpdateGatewayProfileRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  update(argument: as_external_api_gatewayProfile_pb.UpdateGatewayProfileRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  update(argument: as_external_api_gatewayProfile_pb.UpdateGatewayProfileRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  delete(argument: as_external_api_gatewayProfile_pb.DeleteGatewayProfileRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  delete(argument: as_external_api_gatewayProfile_pb.DeleteGatewayProfileRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  delete(argument: as_external_api_gatewayProfile_pb.DeleteGatewayProfileRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  list(argument: as_external_api_gatewayProfile_pb.ListGatewayProfilesRequest, callback: grpc.requestCallback<as_external_api_gatewayProfile_pb.ListGatewayProfilesResponse>): grpc.ClientUnaryCall;
  list(argument: as_external_api_gatewayProfile_pb.ListGatewayProfilesRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<as_external_api_gatewayProfile_pb.ListGatewayProfilesResponse>): grpc.ClientUnaryCall;
  list(argument: as_external_api_gatewayProfile_pb.ListGatewayProfilesRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<as_external_api_gatewayProfile_pb.ListGatewayProfilesResponse>): grpc.ClientUnaryCall;
}
