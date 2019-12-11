// GENERATED CODE -- DO NOT EDIT!

// package: api
// file: as/external/api/internal.proto

import * as as_external_api_internal_pb from "../../../as/external/api/internal_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as grpc from "grpc";

interface IInternalServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  login: grpc.MethodDefinition<as_external_api_internal_pb.LoginRequest, as_external_api_internal_pb.LoginResponse>;
  profile: grpc.MethodDefinition<google_protobuf_empty_pb.Empty, as_external_api_internal_pb.ProfileResponse>;
  branding: grpc.MethodDefinition<google_protobuf_empty_pb.Empty, as_external_api_internal_pb.BrandingResponse>;
  globalSearch: grpc.MethodDefinition<as_external_api_internal_pb.GlobalSearchRequest, as_external_api_internal_pb.GlobalSearchResponse>;
}

export const InternalServiceService: IInternalServiceService;

export class InternalServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  login(argument: as_external_api_internal_pb.LoginRequest, callback: grpc.requestCallback<as_external_api_internal_pb.LoginResponse>): grpc.ClientUnaryCall;
  login(argument: as_external_api_internal_pb.LoginRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<as_external_api_internal_pb.LoginResponse>): grpc.ClientUnaryCall;
  login(argument: as_external_api_internal_pb.LoginRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<as_external_api_internal_pb.LoginResponse>): grpc.ClientUnaryCall;
  profile(argument: google_protobuf_empty_pb.Empty, callback: grpc.requestCallback<as_external_api_internal_pb.ProfileResponse>): grpc.ClientUnaryCall;
  profile(argument: google_protobuf_empty_pb.Empty, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<as_external_api_internal_pb.ProfileResponse>): grpc.ClientUnaryCall;
  profile(argument: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<as_external_api_internal_pb.ProfileResponse>): grpc.ClientUnaryCall;
  branding(argument: google_protobuf_empty_pb.Empty, callback: grpc.requestCallback<as_external_api_internal_pb.BrandingResponse>): grpc.ClientUnaryCall;
  branding(argument: google_protobuf_empty_pb.Empty, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<as_external_api_internal_pb.BrandingResponse>): grpc.ClientUnaryCall;
  branding(argument: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<as_external_api_internal_pb.BrandingResponse>): grpc.ClientUnaryCall;
  globalSearch(argument: as_external_api_internal_pb.GlobalSearchRequest, callback: grpc.requestCallback<as_external_api_internal_pb.GlobalSearchResponse>): grpc.ClientUnaryCall;
  globalSearch(argument: as_external_api_internal_pb.GlobalSearchRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<as_external_api_internal_pb.GlobalSearchResponse>): grpc.ClientUnaryCall;
  globalSearch(argument: as_external_api_internal_pb.GlobalSearchRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<as_external_api_internal_pb.GlobalSearchResponse>): grpc.ClientUnaryCall;
}
