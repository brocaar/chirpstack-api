// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var as_external_api_gateway_pb = require('../../../as/external/api/gateway_pb.js');
var google_api_annotations_pb = require('../../../google/api/annotations_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var common_common_pb = require('../../../common/common_pb.js');
var as_external_api_common_pb = require('../../../as/external/api/common_pb.js');

function serialize_api_CreateGatewayRequest(arg) {
  if (!(arg instanceof as_external_api_gateway_pb.CreateGatewayRequest)) {
    throw new Error('Expected argument of type api.CreateGatewayRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_CreateGatewayRequest(buffer_arg) {
  return as_external_api_gateway_pb.CreateGatewayRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_DeleteGatewayRequest(arg) {
  if (!(arg instanceof as_external_api_gateway_pb.DeleteGatewayRequest)) {
    throw new Error('Expected argument of type api.DeleteGatewayRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_DeleteGatewayRequest(buffer_arg) {
  return as_external_api_gateway_pb.DeleteGatewayRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_GetGatewayRequest(arg) {
  if (!(arg instanceof as_external_api_gateway_pb.GetGatewayRequest)) {
    throw new Error('Expected argument of type api.GetGatewayRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_GetGatewayRequest(buffer_arg) {
  return as_external_api_gateway_pb.GetGatewayRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_GetGatewayResponse(arg) {
  if (!(arg instanceof as_external_api_gateway_pb.GetGatewayResponse)) {
    throw new Error('Expected argument of type api.GetGatewayResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_GetGatewayResponse(buffer_arg) {
  return as_external_api_gateway_pb.GetGatewayResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_GetGatewayStatsRequest(arg) {
  if (!(arg instanceof as_external_api_gateway_pb.GetGatewayStatsRequest)) {
    throw new Error('Expected argument of type api.GetGatewayStatsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_GetGatewayStatsRequest(buffer_arg) {
  return as_external_api_gateway_pb.GetGatewayStatsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_GetGatewayStatsResponse(arg) {
  if (!(arg instanceof as_external_api_gateway_pb.GetGatewayStatsResponse)) {
    throw new Error('Expected argument of type api.GetGatewayStatsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_GetGatewayStatsResponse(buffer_arg) {
  return as_external_api_gateway_pb.GetGatewayStatsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_GetLastPingRequest(arg) {
  if (!(arg instanceof as_external_api_gateway_pb.GetLastPingRequest)) {
    throw new Error('Expected argument of type api.GetLastPingRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_GetLastPingRequest(buffer_arg) {
  return as_external_api_gateway_pb.GetLastPingRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_GetLastPingResponse(arg) {
  if (!(arg instanceof as_external_api_gateway_pb.GetLastPingResponse)) {
    throw new Error('Expected argument of type api.GetLastPingResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_GetLastPingResponse(buffer_arg) {
  return as_external_api_gateway_pb.GetLastPingResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_ListGatewayRequest(arg) {
  if (!(arg instanceof as_external_api_gateway_pb.ListGatewayRequest)) {
    throw new Error('Expected argument of type api.ListGatewayRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_ListGatewayRequest(buffer_arg) {
  return as_external_api_gateway_pb.ListGatewayRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_ListGatewayResponse(arg) {
  if (!(arg instanceof as_external_api_gateway_pb.ListGatewayResponse)) {
    throw new Error('Expected argument of type api.ListGatewayResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_ListGatewayResponse(buffer_arg) {
  return as_external_api_gateway_pb.ListGatewayResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_StreamGatewayFrameLogsRequest(arg) {
  if (!(arg instanceof as_external_api_gateway_pb.StreamGatewayFrameLogsRequest)) {
    throw new Error('Expected argument of type api.StreamGatewayFrameLogsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_StreamGatewayFrameLogsRequest(buffer_arg) {
  return as_external_api_gateway_pb.StreamGatewayFrameLogsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_StreamGatewayFrameLogsResponse(arg) {
  if (!(arg instanceof as_external_api_gateway_pb.StreamGatewayFrameLogsResponse)) {
    throw new Error('Expected argument of type api.StreamGatewayFrameLogsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_StreamGatewayFrameLogsResponse(buffer_arg) {
  return as_external_api_gateway_pb.StreamGatewayFrameLogsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_UpdateGatewayRequest(arg) {
  if (!(arg instanceof as_external_api_gateway_pb.UpdateGatewayRequest)) {
    throw new Error('Expected argument of type api.UpdateGatewayRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_UpdateGatewayRequest(buffer_arg) {
  return as_external_api_gateway_pb.UpdateGatewayRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}


// GatewayService is the service managing the gateways.
var GatewayServiceService = exports.GatewayServiceService = {
  // Create creates the given gateway.
  create: {
    path: '/api.GatewayService/Create',
    requestStream: false,
    responseStream: false,
    requestType: as_external_api_gateway_pb.CreateGatewayRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_api_CreateGatewayRequest,
    requestDeserialize: deserialize_api_CreateGatewayRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Get returns the gateway for the requested mac address.
  get: {
    path: '/api.GatewayService/Get',
    requestStream: false,
    responseStream: false,
    requestType: as_external_api_gateway_pb.GetGatewayRequest,
    responseType: as_external_api_gateway_pb.GetGatewayResponse,
    requestSerialize: serialize_api_GetGatewayRequest,
    requestDeserialize: deserialize_api_GetGatewayRequest,
    responseSerialize: serialize_api_GetGatewayResponse,
    responseDeserialize: deserialize_api_GetGatewayResponse,
  },
  // Update updates the gateway matching the given mac address.
  update: {
    path: '/api.GatewayService/Update',
    requestStream: false,
    responseStream: false,
    requestType: as_external_api_gateway_pb.UpdateGatewayRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_api_UpdateGatewayRequest,
    requestDeserialize: deserialize_api_UpdateGatewayRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Delete deletes the gateway matching the given mac address.
  delete: {
    path: '/api.GatewayService/Delete',
    requestStream: false,
    responseStream: false,
    requestType: as_external_api_gateway_pb.DeleteGatewayRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_api_DeleteGatewayRequest,
    requestDeserialize: deserialize_api_DeleteGatewayRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // List lists the gateways.
  list: {
    path: '/api.GatewayService/List',
    requestStream: false,
    responseStream: false,
    requestType: as_external_api_gateway_pb.ListGatewayRequest,
    responseType: as_external_api_gateway_pb.ListGatewayResponse,
    requestSerialize: serialize_api_ListGatewayRequest,
    requestDeserialize: deserialize_api_ListGatewayRequest,
    responseSerialize: serialize_api_ListGatewayResponse,
    responseDeserialize: deserialize_api_ListGatewayResponse,
  },
  // GetStats lists the gateway stats given the query parameters.
  getStats: {
    path: '/api.GatewayService/GetStats',
    requestStream: false,
    responseStream: false,
    requestType: as_external_api_gateway_pb.GetGatewayStatsRequest,
    responseType: as_external_api_gateway_pb.GetGatewayStatsResponse,
    requestSerialize: serialize_api_GetGatewayStatsRequest,
    requestDeserialize: deserialize_api_GetGatewayStatsRequest,
    responseSerialize: serialize_api_GetGatewayStatsResponse,
    responseDeserialize: deserialize_api_GetGatewayStatsResponse,
  },
  // GetLastPing returns the last emitted ping and gateways receiving this ping.
  getLastPing: {
    path: '/api.GatewayService/GetLastPing',
    requestStream: false,
    responseStream: false,
    requestType: as_external_api_gateway_pb.GetLastPingRequest,
    responseType: as_external_api_gateway_pb.GetLastPingResponse,
    requestSerialize: serialize_api_GetLastPingRequest,
    requestDeserialize: deserialize_api_GetLastPingRequest,
    responseSerialize: serialize_api_GetLastPingResponse,
    responseDeserialize: deserialize_api_GetLastPingResponse,
  },
  // StreamFrameLogs streams the uplink and downlink frame-logs for the given gateway ID.
  // Notes:
  //   * These are the raw LoRaWAN frames and this endpoint is intended for debugging only.
  //   * This endpoint does not work from a web-browser.
  streamFrameLogs: {
    path: '/api.GatewayService/StreamFrameLogs',
    requestStream: false,
    responseStream: true,
    requestType: as_external_api_gateway_pb.StreamGatewayFrameLogsRequest,
    responseType: as_external_api_gateway_pb.StreamGatewayFrameLogsResponse,
    requestSerialize: serialize_api_StreamGatewayFrameLogsRequest,
    requestDeserialize: deserialize_api_StreamGatewayFrameLogsRequest,
    responseSerialize: serialize_api_StreamGatewayFrameLogsResponse,
    responseDeserialize: deserialize_api_StreamGatewayFrameLogsResponse,
  },
};

exports.GatewayServiceClient = grpc.makeGenericClientConstructor(GatewayServiceService);
