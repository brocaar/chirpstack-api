// GENERATED CODE -- DO NOT EDIT!

// package: geo
// file: geo/geo.proto

import * as geo_geo_pb from "../geo/geo_pb";
import * as grpc from "grpc";

interface IGeolocationServerServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  resolveTDOA: grpc.MethodDefinition<geo_geo_pb.ResolveTDOARequest, geo_geo_pb.ResolveTDOAResponse>;
  resolveMultiFrameTDOA: grpc.MethodDefinition<geo_geo_pb.ResolveMultiFrameTDOARequest, geo_geo_pb.ResolveMultiFrameTDOAResponse>;
}

export const GeolocationServerServiceService: IGeolocationServerServiceService;

export interface IGeolocationServerServiceServer extends grpc.UntypedServiceImplementation {
  resolveTDOA: grpc.handleUnaryCall<geo_geo_pb.ResolveTDOARequest, geo_geo_pb.ResolveTDOAResponse>;
  resolveMultiFrameTDOA: grpc.handleUnaryCall<geo_geo_pb.ResolveMultiFrameTDOARequest, geo_geo_pb.ResolveMultiFrameTDOAResponse>;
}

export class GeolocationServerServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  resolveTDOA(argument: geo_geo_pb.ResolveTDOARequest, callback: grpc.requestCallback<geo_geo_pb.ResolveTDOAResponse>): grpc.ClientUnaryCall;
  resolveTDOA(argument: geo_geo_pb.ResolveTDOARequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<geo_geo_pb.ResolveTDOAResponse>): grpc.ClientUnaryCall;
  resolveTDOA(argument: geo_geo_pb.ResolveTDOARequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<geo_geo_pb.ResolveTDOAResponse>): grpc.ClientUnaryCall;
  resolveMultiFrameTDOA(argument: geo_geo_pb.ResolveMultiFrameTDOARequest, callback: grpc.requestCallback<geo_geo_pb.ResolveMultiFrameTDOAResponse>): grpc.ClientUnaryCall;
  resolveMultiFrameTDOA(argument: geo_geo_pb.ResolveMultiFrameTDOARequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<geo_geo_pb.ResolveMultiFrameTDOAResponse>): grpc.ClientUnaryCall;
  resolveMultiFrameTDOA(argument: geo_geo_pb.ResolveMultiFrameTDOARequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<geo_geo_pb.ResolveMultiFrameTDOAResponse>): grpc.ClientUnaryCall;
}
