// GENERATED CODE -- DO NOT EDIT!

// package: api
// file: as/external/api/networkServer.proto

import * as as_external_api_networkServer_pb from "../../../as/external/api/networkServer_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as grpc from "grpc";

interface INetworkServerServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  create: grpc.MethodDefinition<as_external_api_networkServer_pb.CreateNetworkServerRequest, as_external_api_networkServer_pb.CreateNetworkServerResponse>;
  get: grpc.MethodDefinition<as_external_api_networkServer_pb.GetNetworkServerRequest, as_external_api_networkServer_pb.GetNetworkServerResponse>;
  update: grpc.MethodDefinition<as_external_api_networkServer_pb.UpdateNetworkServerRequest, google_protobuf_empty_pb.Empty>;
  delete: grpc.MethodDefinition<as_external_api_networkServer_pb.DeleteNetworkServerRequest, google_protobuf_empty_pb.Empty>;
  list: grpc.MethodDefinition<as_external_api_networkServer_pb.ListNetworkServerRequest, as_external_api_networkServer_pb.ListNetworkServerResponse>;
  getADRAlgorithms: grpc.MethodDefinition<as_external_api_networkServer_pb.GetADRAlgorithmsRequest, as_external_api_networkServer_pb.GetADRAlgorithmsResponse>;
}

export const NetworkServerServiceService: INetworkServerServiceService;

export class NetworkServerServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  create(argument: as_external_api_networkServer_pb.CreateNetworkServerRequest, callback: grpc.requestCallback<as_external_api_networkServer_pb.CreateNetworkServerResponse>): grpc.ClientUnaryCall;
  create(argument: as_external_api_networkServer_pb.CreateNetworkServerRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<as_external_api_networkServer_pb.CreateNetworkServerResponse>): grpc.ClientUnaryCall;
  create(argument: as_external_api_networkServer_pb.CreateNetworkServerRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<as_external_api_networkServer_pb.CreateNetworkServerResponse>): grpc.ClientUnaryCall;
  get(argument: as_external_api_networkServer_pb.GetNetworkServerRequest, callback: grpc.requestCallback<as_external_api_networkServer_pb.GetNetworkServerResponse>): grpc.ClientUnaryCall;
  get(argument: as_external_api_networkServer_pb.GetNetworkServerRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<as_external_api_networkServer_pb.GetNetworkServerResponse>): grpc.ClientUnaryCall;
  get(argument: as_external_api_networkServer_pb.GetNetworkServerRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<as_external_api_networkServer_pb.GetNetworkServerResponse>): grpc.ClientUnaryCall;
  update(argument: as_external_api_networkServer_pb.UpdateNetworkServerRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  update(argument: as_external_api_networkServer_pb.UpdateNetworkServerRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  update(argument: as_external_api_networkServer_pb.UpdateNetworkServerRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  delete(argument: as_external_api_networkServer_pb.DeleteNetworkServerRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  delete(argument: as_external_api_networkServer_pb.DeleteNetworkServerRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  delete(argument: as_external_api_networkServer_pb.DeleteNetworkServerRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  list(argument: as_external_api_networkServer_pb.ListNetworkServerRequest, callback: grpc.requestCallback<as_external_api_networkServer_pb.ListNetworkServerResponse>): grpc.ClientUnaryCall;
  list(argument: as_external_api_networkServer_pb.ListNetworkServerRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<as_external_api_networkServer_pb.ListNetworkServerResponse>): grpc.ClientUnaryCall;
  list(argument: as_external_api_networkServer_pb.ListNetworkServerRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<as_external_api_networkServer_pb.ListNetworkServerResponse>): grpc.ClientUnaryCall;
  getADRAlgorithms(argument: as_external_api_networkServer_pb.GetADRAlgorithmsRequest, callback: grpc.requestCallback<as_external_api_networkServer_pb.GetADRAlgorithmsResponse>): grpc.ClientUnaryCall;
  getADRAlgorithms(argument: as_external_api_networkServer_pb.GetADRAlgorithmsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<as_external_api_networkServer_pb.GetADRAlgorithmsResponse>): grpc.ClientUnaryCall;
  getADRAlgorithms(argument: as_external_api_networkServer_pb.GetADRAlgorithmsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<as_external_api_networkServer_pb.GetADRAlgorithmsResponse>): grpc.ClientUnaryCall;
}
