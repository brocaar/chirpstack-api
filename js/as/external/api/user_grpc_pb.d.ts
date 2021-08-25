// GENERATED CODE -- DO NOT EDIT!

// package: api
// file: as/external/api/user.proto

import * as as_external_api_user_pb from "../../../as/external/api/user_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as grpc from "@grpc/grpc-js";

interface IUserServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  list: grpc.MethodDefinition<as_external_api_user_pb.ListUserRequest, as_external_api_user_pb.ListUserResponse>;
  get: grpc.MethodDefinition<as_external_api_user_pb.GetUserRequest, as_external_api_user_pb.GetUserResponse>;
  create: grpc.MethodDefinition<as_external_api_user_pb.CreateUserRequest, as_external_api_user_pb.CreateUserResponse>;
  update: grpc.MethodDefinition<as_external_api_user_pb.UpdateUserRequest, google_protobuf_empty_pb.Empty>;
  delete: grpc.MethodDefinition<as_external_api_user_pb.DeleteUserRequest, google_protobuf_empty_pb.Empty>;
  updatePassword: grpc.MethodDefinition<as_external_api_user_pb.UpdateUserPasswordRequest, google_protobuf_empty_pb.Empty>;
}

export const UserServiceService: IUserServiceService;

export interface IUserServiceServer extends grpc.UntypedServiceImplementation {
  list: grpc.handleUnaryCall<as_external_api_user_pb.ListUserRequest, as_external_api_user_pb.ListUserResponse>;
  get: grpc.handleUnaryCall<as_external_api_user_pb.GetUserRequest, as_external_api_user_pb.GetUserResponse>;
  create: grpc.handleUnaryCall<as_external_api_user_pb.CreateUserRequest, as_external_api_user_pb.CreateUserResponse>;
  update: grpc.handleUnaryCall<as_external_api_user_pb.UpdateUserRequest, google_protobuf_empty_pb.Empty>;
  delete: grpc.handleUnaryCall<as_external_api_user_pb.DeleteUserRequest, google_protobuf_empty_pb.Empty>;
  updatePassword: grpc.handleUnaryCall<as_external_api_user_pb.UpdateUserPasswordRequest, google_protobuf_empty_pb.Empty>;
}

export class UserServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  list(argument: as_external_api_user_pb.ListUserRequest, callback: grpc.requestCallback<as_external_api_user_pb.ListUserResponse>): grpc.ClientUnaryCall;
  list(argument: as_external_api_user_pb.ListUserRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<as_external_api_user_pb.ListUserResponse>): grpc.ClientUnaryCall;
  list(argument: as_external_api_user_pb.ListUserRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<as_external_api_user_pb.ListUserResponse>): grpc.ClientUnaryCall;
  get(argument: as_external_api_user_pb.GetUserRequest, callback: grpc.requestCallback<as_external_api_user_pb.GetUserResponse>): grpc.ClientUnaryCall;
  get(argument: as_external_api_user_pb.GetUserRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<as_external_api_user_pb.GetUserResponse>): grpc.ClientUnaryCall;
  get(argument: as_external_api_user_pb.GetUserRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<as_external_api_user_pb.GetUserResponse>): grpc.ClientUnaryCall;
  create(argument: as_external_api_user_pb.CreateUserRequest, callback: grpc.requestCallback<as_external_api_user_pb.CreateUserResponse>): grpc.ClientUnaryCall;
  create(argument: as_external_api_user_pb.CreateUserRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<as_external_api_user_pb.CreateUserResponse>): grpc.ClientUnaryCall;
  create(argument: as_external_api_user_pb.CreateUserRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<as_external_api_user_pb.CreateUserResponse>): grpc.ClientUnaryCall;
  update(argument: as_external_api_user_pb.UpdateUserRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  update(argument: as_external_api_user_pb.UpdateUserRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  update(argument: as_external_api_user_pb.UpdateUserRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  delete(argument: as_external_api_user_pb.DeleteUserRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  delete(argument: as_external_api_user_pb.DeleteUserRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  delete(argument: as_external_api_user_pb.DeleteUserRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  updatePassword(argument: as_external_api_user_pb.UpdateUserPasswordRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  updatePassword(argument: as_external_api_user_pb.UpdateUserPasswordRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  updatePassword(argument: as_external_api_user_pb.UpdateUserPasswordRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
}
