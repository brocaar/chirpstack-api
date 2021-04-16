// GENERATED CODE -- DO NOT EDIT!

// package: api
// file: as/external/api/gateway.proto

import * as as_external_api_gateway_pb from "../../../as/external/api/gateway_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as grpc from "grpc";

interface IGatewayServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  create: grpc.MethodDefinition<as_external_api_gateway_pb.CreateGatewayRequest, google_protobuf_empty_pb.Empty>;
  get: grpc.MethodDefinition<as_external_api_gateway_pb.GetGatewayRequest, as_external_api_gateway_pb.GetGatewayResponse>;
  update: grpc.MethodDefinition<as_external_api_gateway_pb.UpdateGatewayRequest, google_protobuf_empty_pb.Empty>;
  delete: grpc.MethodDefinition<as_external_api_gateway_pb.DeleteGatewayRequest, google_protobuf_empty_pb.Empty>;
  list: grpc.MethodDefinition<as_external_api_gateway_pb.ListGatewayRequest, as_external_api_gateway_pb.ListGatewayResponse>;
  getStats: grpc.MethodDefinition<as_external_api_gateway_pb.GetGatewayStatsRequest, as_external_api_gateway_pb.GetGatewayStatsResponse>;
  getLastPing: grpc.MethodDefinition<as_external_api_gateway_pb.GetLastPingRequest, as_external_api_gateway_pb.GetLastPingResponse>;
  generateGatewayClientCertificate: grpc.MethodDefinition<as_external_api_gateway_pb.GenerateGatewayClientCertificateRequest, as_external_api_gateway_pb.GenerateGatewayClientCertificateResponse>;
  streamFrameLogs: grpc.MethodDefinition<as_external_api_gateway_pb.StreamGatewayFrameLogsRequest, as_external_api_gateway_pb.StreamGatewayFrameLogsResponse>;
}

export const GatewayServiceService: IGatewayServiceService;

export interface IGatewayServiceServer extends grpc.UntypedServiceImplementation {
  create: grpc.handleUnaryCall<as_external_api_gateway_pb.CreateGatewayRequest, google_protobuf_empty_pb.Empty>;
  get: grpc.handleUnaryCall<as_external_api_gateway_pb.GetGatewayRequest, as_external_api_gateway_pb.GetGatewayResponse>;
  update: grpc.handleUnaryCall<as_external_api_gateway_pb.UpdateGatewayRequest, google_protobuf_empty_pb.Empty>;
  delete: grpc.handleUnaryCall<as_external_api_gateway_pb.DeleteGatewayRequest, google_protobuf_empty_pb.Empty>;
  list: grpc.handleUnaryCall<as_external_api_gateway_pb.ListGatewayRequest, as_external_api_gateway_pb.ListGatewayResponse>;
  getStats: grpc.handleUnaryCall<as_external_api_gateway_pb.GetGatewayStatsRequest, as_external_api_gateway_pb.GetGatewayStatsResponse>;
  getLastPing: grpc.handleUnaryCall<as_external_api_gateway_pb.GetLastPingRequest, as_external_api_gateway_pb.GetLastPingResponse>;
  generateGatewayClientCertificate: grpc.handleUnaryCall<as_external_api_gateway_pb.GenerateGatewayClientCertificateRequest, as_external_api_gateway_pb.GenerateGatewayClientCertificateResponse>;
  streamFrameLogs: grpc.handleServerStreamingCall<as_external_api_gateway_pb.StreamGatewayFrameLogsRequest, as_external_api_gateway_pb.StreamGatewayFrameLogsResponse>;
}

export class GatewayServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  create(argument: as_external_api_gateway_pb.CreateGatewayRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  create(argument: as_external_api_gateway_pb.CreateGatewayRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  create(argument: as_external_api_gateway_pb.CreateGatewayRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  get(argument: as_external_api_gateway_pb.GetGatewayRequest, callback: grpc.requestCallback<as_external_api_gateway_pb.GetGatewayResponse>): grpc.ClientUnaryCall;
  get(argument: as_external_api_gateway_pb.GetGatewayRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<as_external_api_gateway_pb.GetGatewayResponse>): grpc.ClientUnaryCall;
  get(argument: as_external_api_gateway_pb.GetGatewayRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<as_external_api_gateway_pb.GetGatewayResponse>): grpc.ClientUnaryCall;
  update(argument: as_external_api_gateway_pb.UpdateGatewayRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  update(argument: as_external_api_gateway_pb.UpdateGatewayRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  update(argument: as_external_api_gateway_pb.UpdateGatewayRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  delete(argument: as_external_api_gateway_pb.DeleteGatewayRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  delete(argument: as_external_api_gateway_pb.DeleteGatewayRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  delete(argument: as_external_api_gateway_pb.DeleteGatewayRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  list(argument: as_external_api_gateway_pb.ListGatewayRequest, callback: grpc.requestCallback<as_external_api_gateway_pb.ListGatewayResponse>): grpc.ClientUnaryCall;
  list(argument: as_external_api_gateway_pb.ListGatewayRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<as_external_api_gateway_pb.ListGatewayResponse>): grpc.ClientUnaryCall;
  list(argument: as_external_api_gateway_pb.ListGatewayRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<as_external_api_gateway_pb.ListGatewayResponse>): grpc.ClientUnaryCall;
  getStats(argument: as_external_api_gateway_pb.GetGatewayStatsRequest, callback: grpc.requestCallback<as_external_api_gateway_pb.GetGatewayStatsResponse>): grpc.ClientUnaryCall;
  getStats(argument: as_external_api_gateway_pb.GetGatewayStatsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<as_external_api_gateway_pb.GetGatewayStatsResponse>): grpc.ClientUnaryCall;
  getStats(argument: as_external_api_gateway_pb.GetGatewayStatsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<as_external_api_gateway_pb.GetGatewayStatsResponse>): grpc.ClientUnaryCall;
  getLastPing(argument: as_external_api_gateway_pb.GetLastPingRequest, callback: grpc.requestCallback<as_external_api_gateway_pb.GetLastPingResponse>): grpc.ClientUnaryCall;
  getLastPing(argument: as_external_api_gateway_pb.GetLastPingRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<as_external_api_gateway_pb.GetLastPingResponse>): grpc.ClientUnaryCall;
  getLastPing(argument: as_external_api_gateway_pb.GetLastPingRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<as_external_api_gateway_pb.GetLastPingResponse>): grpc.ClientUnaryCall;
  generateGatewayClientCertificate(argument: as_external_api_gateway_pb.GenerateGatewayClientCertificateRequest, callback: grpc.requestCallback<as_external_api_gateway_pb.GenerateGatewayClientCertificateResponse>): grpc.ClientUnaryCall;
  generateGatewayClientCertificate(argument: as_external_api_gateway_pb.GenerateGatewayClientCertificateRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<as_external_api_gateway_pb.GenerateGatewayClientCertificateResponse>): grpc.ClientUnaryCall;
  generateGatewayClientCertificate(argument: as_external_api_gateway_pb.GenerateGatewayClientCertificateRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<as_external_api_gateway_pb.GenerateGatewayClientCertificateResponse>): grpc.ClientUnaryCall;
  streamFrameLogs(argument: as_external_api_gateway_pb.StreamGatewayFrameLogsRequest, metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientReadableStream<as_external_api_gateway_pb.StreamGatewayFrameLogsResponse>;
  streamFrameLogs(argument: as_external_api_gateway_pb.StreamGatewayFrameLogsRequest, metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientReadableStream<as_external_api_gateway_pb.StreamGatewayFrameLogsResponse>;
}
