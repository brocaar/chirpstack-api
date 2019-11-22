// GENERATED CODE -- DO NOT EDIT!

// package: nc
// file: nc/nc.proto

import * as nc_nc_pb from "../nc/nc_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as grpc from "grpc";

interface INetworkControllerServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  handleUplinkMetaData: grpc.MethodDefinition<nc_nc_pb.HandleUplinkMetaDataRequest, google_protobuf_empty_pb.Empty>;
  handleDownlinkMetaData: grpc.MethodDefinition<nc_nc_pb.HandleDownlinkMetaDataRequest, google_protobuf_empty_pb.Empty>;
  handleUplinkMACCommand: grpc.MethodDefinition<nc_nc_pb.HandleUplinkMACCommandRequest, google_protobuf_empty_pb.Empty>;
}

export const NetworkControllerServiceService: INetworkControllerServiceService;

export class NetworkControllerServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  handleUplinkMetaData(argument: nc_nc_pb.HandleUplinkMetaDataRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  handleUplinkMetaData(argument: nc_nc_pb.HandleUplinkMetaDataRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  handleUplinkMetaData(argument: nc_nc_pb.HandleUplinkMetaDataRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  handleDownlinkMetaData(argument: nc_nc_pb.HandleDownlinkMetaDataRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  handleDownlinkMetaData(argument: nc_nc_pb.HandleDownlinkMetaDataRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  handleDownlinkMetaData(argument: nc_nc_pb.HandleDownlinkMetaDataRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  handleUplinkMACCommand(argument: nc_nc_pb.HandleUplinkMACCommandRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  handleUplinkMACCommand(argument: nc_nc_pb.HandleUplinkMACCommandRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  handleUplinkMACCommand(argument: nc_nc_pb.HandleUplinkMACCommandRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
}
