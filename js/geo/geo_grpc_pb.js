// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var geo_geo_pb = require('../geo/geo_pb.js');
var gw_gw_pb = require('../gw/gw_pb.js');
var common_common_pb = require('../common/common_pb.js');

function serialize_geo_ResolveMultiFrameTDOARequest(arg) {
  if (!(arg instanceof geo_geo_pb.ResolveMultiFrameTDOARequest)) {
    throw new Error('Expected argument of type geo.ResolveMultiFrameTDOARequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_geo_ResolveMultiFrameTDOARequest(buffer_arg) {
  return geo_geo_pb.ResolveMultiFrameTDOARequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_geo_ResolveMultiFrameTDOAResponse(arg) {
  if (!(arg instanceof geo_geo_pb.ResolveMultiFrameTDOAResponse)) {
    throw new Error('Expected argument of type geo.ResolveMultiFrameTDOAResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_geo_ResolveMultiFrameTDOAResponse(buffer_arg) {
  return geo_geo_pb.ResolveMultiFrameTDOAResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_geo_ResolveTDOARequest(arg) {
  if (!(arg instanceof geo_geo_pb.ResolveTDOARequest)) {
    throw new Error('Expected argument of type geo.ResolveTDOARequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_geo_ResolveTDOARequest(buffer_arg) {
  return geo_geo_pb.ResolveTDOARequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_geo_ResolveTDOAResponse(arg) {
  if (!(arg instanceof geo_geo_pb.ResolveTDOAResponse)) {
    throw new Error('Expected argument of type geo.ResolveTDOAResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_geo_ResolveTDOAResponse(buffer_arg) {
  return geo_geo_pb.ResolveTDOAResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// GeolocationServerService implements a geolocation-server service.
var GeolocationServerServiceService = exports.GeolocationServerServiceService = {
  // ResolveTDOA resolves the location based on TDOA.
resolveTDOA: {
    path: '/geo.GeolocationServerService/ResolveTDOA',
    requestStream: false,
    responseStream: false,
    requestType: geo_geo_pb.ResolveTDOARequest,
    responseType: geo_geo_pb.ResolveTDOAResponse,
    requestSerialize: serialize_geo_ResolveTDOARequest,
    requestDeserialize: deserialize_geo_ResolveTDOARequest,
    responseSerialize: serialize_geo_ResolveTDOAResponse,
    responseDeserialize: deserialize_geo_ResolveTDOAResponse,
  },
  // ResolveMultiFrameTDOA resolves the location using TDOA, based on
// multiple frames.
resolveMultiFrameTDOA: {
    path: '/geo.GeolocationServerService/ResolveMultiFrameTDOA',
    requestStream: false,
    responseStream: false,
    requestType: geo_geo_pb.ResolveMultiFrameTDOARequest,
    responseType: geo_geo_pb.ResolveMultiFrameTDOAResponse,
    requestSerialize: serialize_geo_ResolveMultiFrameTDOARequest,
    requestDeserialize: deserialize_geo_ResolveMultiFrameTDOARequest,
    responseSerialize: serialize_geo_ResolveMultiFrameTDOAResponse,
    responseDeserialize: deserialize_geo_ResolveMultiFrameTDOAResponse,
  },
};

exports.GeolocationServerServiceClient = grpc.makeGenericClientConstructor(GeolocationServerServiceService);
