// GENERATED CODE -- DO NOT EDIT!

// package: api
// file: as/external/api/application.proto

import * as as_external_api_application_pb from "../../../as/external/api/application_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as grpc from "grpc";

interface IApplicationServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  create: grpc.MethodDefinition<as_external_api_application_pb.CreateApplicationRequest, as_external_api_application_pb.CreateApplicationResponse>;
  get: grpc.MethodDefinition<as_external_api_application_pb.GetApplicationRequest, as_external_api_application_pb.GetApplicationResponse>;
  update: grpc.MethodDefinition<as_external_api_application_pb.UpdateApplicationRequest, google_protobuf_empty_pb.Empty>;
  delete: grpc.MethodDefinition<as_external_api_application_pb.DeleteApplicationRequest, google_protobuf_empty_pb.Empty>;
  list: grpc.MethodDefinition<as_external_api_application_pb.ListApplicationRequest, as_external_api_application_pb.ListApplicationResponse>;
  createHTTPIntegration: grpc.MethodDefinition<as_external_api_application_pb.CreateHTTPIntegrationRequest, google_protobuf_empty_pb.Empty>;
  getHTTPIntegration: grpc.MethodDefinition<as_external_api_application_pb.GetHTTPIntegrationRequest, as_external_api_application_pb.GetHTTPIntegrationResponse>;
  updateHTTPIntegration: grpc.MethodDefinition<as_external_api_application_pb.UpdateHTTPIntegrationRequest, google_protobuf_empty_pb.Empty>;
  deleteHTTPIntegration: grpc.MethodDefinition<as_external_api_application_pb.DeleteHTTPIntegrationRequest, google_protobuf_empty_pb.Empty>;
  createInfluxDBIntegration: grpc.MethodDefinition<as_external_api_application_pb.CreateInfluxDBIntegrationRequest, google_protobuf_empty_pb.Empty>;
  getInfluxDBIntegration: grpc.MethodDefinition<as_external_api_application_pb.GetInfluxDBIntegrationRequest, as_external_api_application_pb.GetInfluxDBIntegrationResponse>;
  updateInfluxDBIntegration: grpc.MethodDefinition<as_external_api_application_pb.UpdateInfluxDBIntegrationRequest, google_protobuf_empty_pb.Empty>;
  deleteInfluxDBIntegration: grpc.MethodDefinition<as_external_api_application_pb.DeleteInfluxDBIntegrationRequest, google_protobuf_empty_pb.Empty>;
  createThingsBoardIntegration: grpc.MethodDefinition<as_external_api_application_pb.CreateThingsBoardIntegrationRequest, google_protobuf_empty_pb.Empty>;
  getThingsBoardIntegration: grpc.MethodDefinition<as_external_api_application_pb.GetThingsBoardIntegrationRequest, as_external_api_application_pb.GetThingsBoardIntegrationResponse>;
  updateThingsBoardIntegration: grpc.MethodDefinition<as_external_api_application_pb.UpdateThingsBoardIntegrationRequest, google_protobuf_empty_pb.Empty>;
  deleteThingsBoardIntegration: grpc.MethodDefinition<as_external_api_application_pb.DeleteThingsBoardIntegrationRequest, google_protobuf_empty_pb.Empty>;
  createMyDevicesIntegration: grpc.MethodDefinition<as_external_api_application_pb.CreateMyDevicesIntegrationRequest, google_protobuf_empty_pb.Empty>;
  getMyDevicesIntegration: grpc.MethodDefinition<as_external_api_application_pb.GetMyDevicesIntegrationRequest, as_external_api_application_pb.GetMyDevicesIntegrationResponse>;
  updateMyDevicesIntegration: grpc.MethodDefinition<as_external_api_application_pb.UpdateMyDevicesIntegrationRequest, google_protobuf_empty_pb.Empty>;
  deleteMyDevicesIntegration: grpc.MethodDefinition<as_external_api_application_pb.DeleteMyDevicesIntegrationRequest, google_protobuf_empty_pb.Empty>;
  listIntegrations: grpc.MethodDefinition<as_external_api_application_pb.ListIntegrationRequest, as_external_api_application_pb.ListIntegrationResponse>;
}

export const ApplicationServiceService: IApplicationServiceService;

export class ApplicationServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  create(argument: as_external_api_application_pb.CreateApplicationRequest, callback: grpc.requestCallback<as_external_api_application_pb.CreateApplicationResponse>): grpc.ClientUnaryCall;
  create(argument: as_external_api_application_pb.CreateApplicationRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<as_external_api_application_pb.CreateApplicationResponse>): grpc.ClientUnaryCall;
  create(argument: as_external_api_application_pb.CreateApplicationRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<as_external_api_application_pb.CreateApplicationResponse>): grpc.ClientUnaryCall;
  get(argument: as_external_api_application_pb.GetApplicationRequest, callback: grpc.requestCallback<as_external_api_application_pb.GetApplicationResponse>): grpc.ClientUnaryCall;
  get(argument: as_external_api_application_pb.GetApplicationRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<as_external_api_application_pb.GetApplicationResponse>): grpc.ClientUnaryCall;
  get(argument: as_external_api_application_pb.GetApplicationRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<as_external_api_application_pb.GetApplicationResponse>): grpc.ClientUnaryCall;
  update(argument: as_external_api_application_pb.UpdateApplicationRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  update(argument: as_external_api_application_pb.UpdateApplicationRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  update(argument: as_external_api_application_pb.UpdateApplicationRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  delete(argument: as_external_api_application_pb.DeleteApplicationRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  delete(argument: as_external_api_application_pb.DeleteApplicationRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  delete(argument: as_external_api_application_pb.DeleteApplicationRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  list(argument: as_external_api_application_pb.ListApplicationRequest, callback: grpc.requestCallback<as_external_api_application_pb.ListApplicationResponse>): grpc.ClientUnaryCall;
  list(argument: as_external_api_application_pb.ListApplicationRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<as_external_api_application_pb.ListApplicationResponse>): grpc.ClientUnaryCall;
  list(argument: as_external_api_application_pb.ListApplicationRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<as_external_api_application_pb.ListApplicationResponse>): grpc.ClientUnaryCall;
  createHTTPIntegration(argument: as_external_api_application_pb.CreateHTTPIntegrationRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  createHTTPIntegration(argument: as_external_api_application_pb.CreateHTTPIntegrationRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  createHTTPIntegration(argument: as_external_api_application_pb.CreateHTTPIntegrationRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  getHTTPIntegration(argument: as_external_api_application_pb.GetHTTPIntegrationRequest, callback: grpc.requestCallback<as_external_api_application_pb.GetHTTPIntegrationResponse>): grpc.ClientUnaryCall;
  getHTTPIntegration(argument: as_external_api_application_pb.GetHTTPIntegrationRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<as_external_api_application_pb.GetHTTPIntegrationResponse>): grpc.ClientUnaryCall;
  getHTTPIntegration(argument: as_external_api_application_pb.GetHTTPIntegrationRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<as_external_api_application_pb.GetHTTPIntegrationResponse>): grpc.ClientUnaryCall;
  updateHTTPIntegration(argument: as_external_api_application_pb.UpdateHTTPIntegrationRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  updateHTTPIntegration(argument: as_external_api_application_pb.UpdateHTTPIntegrationRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  updateHTTPIntegration(argument: as_external_api_application_pb.UpdateHTTPIntegrationRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteHTTPIntegration(argument: as_external_api_application_pb.DeleteHTTPIntegrationRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteHTTPIntegration(argument: as_external_api_application_pb.DeleteHTTPIntegrationRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteHTTPIntegration(argument: as_external_api_application_pb.DeleteHTTPIntegrationRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  createInfluxDBIntegration(argument: as_external_api_application_pb.CreateInfluxDBIntegrationRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  createInfluxDBIntegration(argument: as_external_api_application_pb.CreateInfluxDBIntegrationRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  createInfluxDBIntegration(argument: as_external_api_application_pb.CreateInfluxDBIntegrationRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  getInfluxDBIntegration(argument: as_external_api_application_pb.GetInfluxDBIntegrationRequest, callback: grpc.requestCallback<as_external_api_application_pb.GetInfluxDBIntegrationResponse>): grpc.ClientUnaryCall;
  getInfluxDBIntegration(argument: as_external_api_application_pb.GetInfluxDBIntegrationRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<as_external_api_application_pb.GetInfluxDBIntegrationResponse>): grpc.ClientUnaryCall;
  getInfluxDBIntegration(argument: as_external_api_application_pb.GetInfluxDBIntegrationRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<as_external_api_application_pb.GetInfluxDBIntegrationResponse>): grpc.ClientUnaryCall;
  updateInfluxDBIntegration(argument: as_external_api_application_pb.UpdateInfluxDBIntegrationRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  updateInfluxDBIntegration(argument: as_external_api_application_pb.UpdateInfluxDBIntegrationRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  updateInfluxDBIntegration(argument: as_external_api_application_pb.UpdateInfluxDBIntegrationRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteInfluxDBIntegration(argument: as_external_api_application_pb.DeleteInfluxDBIntegrationRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteInfluxDBIntegration(argument: as_external_api_application_pb.DeleteInfluxDBIntegrationRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteInfluxDBIntegration(argument: as_external_api_application_pb.DeleteInfluxDBIntegrationRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  createThingsBoardIntegration(argument: as_external_api_application_pb.CreateThingsBoardIntegrationRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  createThingsBoardIntegration(argument: as_external_api_application_pb.CreateThingsBoardIntegrationRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  createThingsBoardIntegration(argument: as_external_api_application_pb.CreateThingsBoardIntegrationRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  getThingsBoardIntegration(argument: as_external_api_application_pb.GetThingsBoardIntegrationRequest, callback: grpc.requestCallback<as_external_api_application_pb.GetThingsBoardIntegrationResponse>): grpc.ClientUnaryCall;
  getThingsBoardIntegration(argument: as_external_api_application_pb.GetThingsBoardIntegrationRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<as_external_api_application_pb.GetThingsBoardIntegrationResponse>): grpc.ClientUnaryCall;
  getThingsBoardIntegration(argument: as_external_api_application_pb.GetThingsBoardIntegrationRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<as_external_api_application_pb.GetThingsBoardIntegrationResponse>): grpc.ClientUnaryCall;
  updateThingsBoardIntegration(argument: as_external_api_application_pb.UpdateThingsBoardIntegrationRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  updateThingsBoardIntegration(argument: as_external_api_application_pb.UpdateThingsBoardIntegrationRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  updateThingsBoardIntegration(argument: as_external_api_application_pb.UpdateThingsBoardIntegrationRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteThingsBoardIntegration(argument: as_external_api_application_pb.DeleteThingsBoardIntegrationRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteThingsBoardIntegration(argument: as_external_api_application_pb.DeleteThingsBoardIntegrationRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteThingsBoardIntegration(argument: as_external_api_application_pb.DeleteThingsBoardIntegrationRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  createMyDevicesIntegration(argument: as_external_api_application_pb.CreateMyDevicesIntegrationRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  createMyDevicesIntegration(argument: as_external_api_application_pb.CreateMyDevicesIntegrationRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  createMyDevicesIntegration(argument: as_external_api_application_pb.CreateMyDevicesIntegrationRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  getMyDevicesIntegration(argument: as_external_api_application_pb.GetMyDevicesIntegrationRequest, callback: grpc.requestCallback<as_external_api_application_pb.GetMyDevicesIntegrationResponse>): grpc.ClientUnaryCall;
  getMyDevicesIntegration(argument: as_external_api_application_pb.GetMyDevicesIntegrationRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<as_external_api_application_pb.GetMyDevicesIntegrationResponse>): grpc.ClientUnaryCall;
  getMyDevicesIntegration(argument: as_external_api_application_pb.GetMyDevicesIntegrationRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<as_external_api_application_pb.GetMyDevicesIntegrationResponse>): grpc.ClientUnaryCall;
  updateMyDevicesIntegration(argument: as_external_api_application_pb.UpdateMyDevicesIntegrationRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  updateMyDevicesIntegration(argument: as_external_api_application_pb.UpdateMyDevicesIntegrationRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  updateMyDevicesIntegration(argument: as_external_api_application_pb.UpdateMyDevicesIntegrationRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteMyDevicesIntegration(argument: as_external_api_application_pb.DeleteMyDevicesIntegrationRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteMyDevicesIntegration(argument: as_external_api_application_pb.DeleteMyDevicesIntegrationRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteMyDevicesIntegration(argument: as_external_api_application_pb.DeleteMyDevicesIntegrationRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  listIntegrations(argument: as_external_api_application_pb.ListIntegrationRequest, callback: grpc.requestCallback<as_external_api_application_pb.ListIntegrationResponse>): grpc.ClientUnaryCall;
  listIntegrations(argument: as_external_api_application_pb.ListIntegrationRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<as_external_api_application_pb.ListIntegrationResponse>): grpc.ClientUnaryCall;
  listIntegrations(argument: as_external_api_application_pb.ListIntegrationRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<as_external_api_application_pb.ListIntegrationResponse>): grpc.ClientUnaryCall;
}
