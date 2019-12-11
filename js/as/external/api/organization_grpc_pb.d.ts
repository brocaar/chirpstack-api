// GENERATED CODE -- DO NOT EDIT!

// package: api
// file: as/external/api/organization.proto

import * as as_external_api_organization_pb from "../../../as/external/api/organization_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as grpc from "grpc";

interface IOrganizationServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  list: grpc.MethodDefinition<as_external_api_organization_pb.ListOrganizationRequest, as_external_api_organization_pb.ListOrganizationResponse>;
  get: grpc.MethodDefinition<as_external_api_organization_pb.GetOrganizationRequest, as_external_api_organization_pb.GetOrganizationResponse>;
  create: grpc.MethodDefinition<as_external_api_organization_pb.CreateOrganizationRequest, as_external_api_organization_pb.CreateOrganizationResponse>;
  update: grpc.MethodDefinition<as_external_api_organization_pb.UpdateOrganizationRequest, google_protobuf_empty_pb.Empty>;
  delete: grpc.MethodDefinition<as_external_api_organization_pb.DeleteOrganizationRequest, google_protobuf_empty_pb.Empty>;
  listUsers: grpc.MethodDefinition<as_external_api_organization_pb.ListOrganizationUsersRequest, as_external_api_organization_pb.ListOrganizationUsersResponse>;
  getUser: grpc.MethodDefinition<as_external_api_organization_pb.GetOrganizationUserRequest, as_external_api_organization_pb.GetOrganizationUserResponse>;
  addUser: grpc.MethodDefinition<as_external_api_organization_pb.AddOrganizationUserRequest, google_protobuf_empty_pb.Empty>;
  updateUser: grpc.MethodDefinition<as_external_api_organization_pb.UpdateOrganizationUserRequest, google_protobuf_empty_pb.Empty>;
  deleteUser: grpc.MethodDefinition<as_external_api_organization_pb.DeleteOrganizationUserRequest, google_protobuf_empty_pb.Empty>;
}

export const OrganizationServiceService: IOrganizationServiceService;

export class OrganizationServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  list(argument: as_external_api_organization_pb.ListOrganizationRequest, callback: grpc.requestCallback<as_external_api_organization_pb.ListOrganizationResponse>): grpc.ClientUnaryCall;
  list(argument: as_external_api_organization_pb.ListOrganizationRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<as_external_api_organization_pb.ListOrganizationResponse>): grpc.ClientUnaryCall;
  list(argument: as_external_api_organization_pb.ListOrganizationRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<as_external_api_organization_pb.ListOrganizationResponse>): grpc.ClientUnaryCall;
  get(argument: as_external_api_organization_pb.GetOrganizationRequest, callback: grpc.requestCallback<as_external_api_organization_pb.GetOrganizationResponse>): grpc.ClientUnaryCall;
  get(argument: as_external_api_organization_pb.GetOrganizationRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<as_external_api_organization_pb.GetOrganizationResponse>): grpc.ClientUnaryCall;
  get(argument: as_external_api_organization_pb.GetOrganizationRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<as_external_api_organization_pb.GetOrganizationResponse>): grpc.ClientUnaryCall;
  create(argument: as_external_api_organization_pb.CreateOrganizationRequest, callback: grpc.requestCallback<as_external_api_organization_pb.CreateOrganizationResponse>): grpc.ClientUnaryCall;
  create(argument: as_external_api_organization_pb.CreateOrganizationRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<as_external_api_organization_pb.CreateOrganizationResponse>): grpc.ClientUnaryCall;
  create(argument: as_external_api_organization_pb.CreateOrganizationRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<as_external_api_organization_pb.CreateOrganizationResponse>): grpc.ClientUnaryCall;
  update(argument: as_external_api_organization_pb.UpdateOrganizationRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  update(argument: as_external_api_organization_pb.UpdateOrganizationRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  update(argument: as_external_api_organization_pb.UpdateOrganizationRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  delete(argument: as_external_api_organization_pb.DeleteOrganizationRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  delete(argument: as_external_api_organization_pb.DeleteOrganizationRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  delete(argument: as_external_api_organization_pb.DeleteOrganizationRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  listUsers(argument: as_external_api_organization_pb.ListOrganizationUsersRequest, callback: grpc.requestCallback<as_external_api_organization_pb.ListOrganizationUsersResponse>): grpc.ClientUnaryCall;
  listUsers(argument: as_external_api_organization_pb.ListOrganizationUsersRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<as_external_api_organization_pb.ListOrganizationUsersResponse>): grpc.ClientUnaryCall;
  listUsers(argument: as_external_api_organization_pb.ListOrganizationUsersRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<as_external_api_organization_pb.ListOrganizationUsersResponse>): grpc.ClientUnaryCall;
  getUser(argument: as_external_api_organization_pb.GetOrganizationUserRequest, callback: grpc.requestCallback<as_external_api_organization_pb.GetOrganizationUserResponse>): grpc.ClientUnaryCall;
  getUser(argument: as_external_api_organization_pb.GetOrganizationUserRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<as_external_api_organization_pb.GetOrganizationUserResponse>): grpc.ClientUnaryCall;
  getUser(argument: as_external_api_organization_pb.GetOrganizationUserRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<as_external_api_organization_pb.GetOrganizationUserResponse>): grpc.ClientUnaryCall;
  addUser(argument: as_external_api_organization_pb.AddOrganizationUserRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  addUser(argument: as_external_api_organization_pb.AddOrganizationUserRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  addUser(argument: as_external_api_organization_pb.AddOrganizationUserRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  updateUser(argument: as_external_api_organization_pb.UpdateOrganizationUserRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  updateUser(argument: as_external_api_organization_pb.UpdateOrganizationUserRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  updateUser(argument: as_external_api_organization_pb.UpdateOrganizationUserRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteUser(argument: as_external_api_organization_pb.DeleteOrganizationUserRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteUser(argument: as_external_api_organization_pb.DeleteOrganizationUserRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteUser(argument: as_external_api_organization_pb.DeleteOrganizationUserRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
}
