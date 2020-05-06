// GENERATED CODE -- DO NOT EDIT!

// package: api
// file: as/external/api/internal.proto

import * as as_external_api_internal_pb from "../../../as/external/api/internal_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as grpc from "grpc";

interface IInternalServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  login: grpc.MethodDefinition<as_external_api_internal_pb.LoginRequest, as_external_api_internal_pb.LoginResponse>;
  profile: grpc.MethodDefinition<google_protobuf_empty_pb.Empty, as_external_api_internal_pb.ProfileResponse>;
  globalSearch: grpc.MethodDefinition<as_external_api_internal_pb.GlobalSearchRequest, as_external_api_internal_pb.GlobalSearchResponse>;
  createAPIKey: grpc.MethodDefinition<as_external_api_internal_pb.CreateAPIKeyRequest, as_external_api_internal_pb.CreateAPIKeyResponse>;
  deleteAPIKey: grpc.MethodDefinition<as_external_api_internal_pb.DeleteAPIKeyRequest, google_protobuf_empty_pb.Empty>;
  listAPIKeys: grpc.MethodDefinition<as_external_api_internal_pb.ListAPIKeysRequest, as_external_api_internal_pb.ListAPIKeysResponse>;
  settings: grpc.MethodDefinition<google_protobuf_empty_pb.Empty, as_external_api_internal_pb.SettingsResponse>;
  openIDConnectLogin: grpc.MethodDefinition<as_external_api_internal_pb.OpenIDConnectLoginRequest, as_external_api_internal_pb.OpenIDConnectLoginResponse>;
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
  globalSearch(argument: as_external_api_internal_pb.GlobalSearchRequest, callback: grpc.requestCallback<as_external_api_internal_pb.GlobalSearchResponse>): grpc.ClientUnaryCall;
  globalSearch(argument: as_external_api_internal_pb.GlobalSearchRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<as_external_api_internal_pb.GlobalSearchResponse>): grpc.ClientUnaryCall;
  globalSearch(argument: as_external_api_internal_pb.GlobalSearchRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<as_external_api_internal_pb.GlobalSearchResponse>): grpc.ClientUnaryCall;
  createAPIKey(argument: as_external_api_internal_pb.CreateAPIKeyRequest, callback: grpc.requestCallback<as_external_api_internal_pb.CreateAPIKeyResponse>): grpc.ClientUnaryCall;
  createAPIKey(argument: as_external_api_internal_pb.CreateAPIKeyRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<as_external_api_internal_pb.CreateAPIKeyResponse>): grpc.ClientUnaryCall;
  createAPIKey(argument: as_external_api_internal_pb.CreateAPIKeyRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<as_external_api_internal_pb.CreateAPIKeyResponse>): grpc.ClientUnaryCall;
  deleteAPIKey(argument: as_external_api_internal_pb.DeleteAPIKeyRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteAPIKey(argument: as_external_api_internal_pb.DeleteAPIKeyRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteAPIKey(argument: as_external_api_internal_pb.DeleteAPIKeyRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  listAPIKeys(argument: as_external_api_internal_pb.ListAPIKeysRequest, callback: grpc.requestCallback<as_external_api_internal_pb.ListAPIKeysResponse>): grpc.ClientUnaryCall;
  listAPIKeys(argument: as_external_api_internal_pb.ListAPIKeysRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<as_external_api_internal_pb.ListAPIKeysResponse>): grpc.ClientUnaryCall;
  listAPIKeys(argument: as_external_api_internal_pb.ListAPIKeysRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<as_external_api_internal_pb.ListAPIKeysResponse>): grpc.ClientUnaryCall;
  settings(argument: google_protobuf_empty_pb.Empty, callback: grpc.requestCallback<as_external_api_internal_pb.SettingsResponse>): grpc.ClientUnaryCall;
  settings(argument: google_protobuf_empty_pb.Empty, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<as_external_api_internal_pb.SettingsResponse>): grpc.ClientUnaryCall;
  settings(argument: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<as_external_api_internal_pb.SettingsResponse>): grpc.ClientUnaryCall;
  openIDConnectLogin(argument: as_external_api_internal_pb.OpenIDConnectLoginRequest, callback: grpc.requestCallback<as_external_api_internal_pb.OpenIDConnectLoginResponse>): grpc.ClientUnaryCall;
  openIDConnectLogin(argument: as_external_api_internal_pb.OpenIDConnectLoginRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<as_external_api_internal_pb.OpenIDConnectLoginResponse>): grpc.ClientUnaryCall;
  openIDConnectLogin(argument: as_external_api_internal_pb.OpenIDConnectLoginRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<as_external_api_internal_pb.OpenIDConnectLoginResponse>): grpc.ClientUnaryCall;
}
