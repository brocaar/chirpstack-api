// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var as_external_api_networkServer_pb = require('../../../as/external/api/networkServer_pb.js');
var google_api_annotations_pb = require('../../../google/api/annotations_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');

function serialize_api_CreateNetworkServerRequest(arg) {
  if (!(arg instanceof as_external_api_networkServer_pb.CreateNetworkServerRequest)) {
    throw new Error('Expected argument of type api.CreateNetworkServerRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_CreateNetworkServerRequest(buffer_arg) {
  return as_external_api_networkServer_pb.CreateNetworkServerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_CreateNetworkServerResponse(arg) {
  if (!(arg instanceof as_external_api_networkServer_pb.CreateNetworkServerResponse)) {
    throw new Error('Expected argument of type api.CreateNetworkServerResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_CreateNetworkServerResponse(buffer_arg) {
  return as_external_api_networkServer_pb.CreateNetworkServerResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_DeleteNetworkServerRequest(arg) {
  if (!(arg instanceof as_external_api_networkServer_pb.DeleteNetworkServerRequest)) {
    throw new Error('Expected argument of type api.DeleteNetworkServerRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_DeleteNetworkServerRequest(buffer_arg) {
  return as_external_api_networkServer_pb.DeleteNetworkServerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_GetADRAlgorithmsRequest(arg) {
  if (!(arg instanceof as_external_api_networkServer_pb.GetADRAlgorithmsRequest)) {
    throw new Error('Expected argument of type api.GetADRAlgorithmsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_GetADRAlgorithmsRequest(buffer_arg) {
  return as_external_api_networkServer_pb.GetADRAlgorithmsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_GetADRAlgorithmsResponse(arg) {
  if (!(arg instanceof as_external_api_networkServer_pb.GetADRAlgorithmsResponse)) {
    throw new Error('Expected argument of type api.GetADRAlgorithmsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_GetADRAlgorithmsResponse(buffer_arg) {
  return as_external_api_networkServer_pb.GetADRAlgorithmsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_GetNetworkServerRequest(arg) {
  if (!(arg instanceof as_external_api_networkServer_pb.GetNetworkServerRequest)) {
    throw new Error('Expected argument of type api.GetNetworkServerRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_GetNetworkServerRequest(buffer_arg) {
  return as_external_api_networkServer_pb.GetNetworkServerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_GetNetworkServerResponse(arg) {
  if (!(arg instanceof as_external_api_networkServer_pb.GetNetworkServerResponse)) {
    throw new Error('Expected argument of type api.GetNetworkServerResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_GetNetworkServerResponse(buffer_arg) {
  return as_external_api_networkServer_pb.GetNetworkServerResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_ListNetworkServerRequest(arg) {
  if (!(arg instanceof as_external_api_networkServer_pb.ListNetworkServerRequest)) {
    throw new Error('Expected argument of type api.ListNetworkServerRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_ListNetworkServerRequest(buffer_arg) {
  return as_external_api_networkServer_pb.ListNetworkServerRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_ListNetworkServerResponse(arg) {
  if (!(arg instanceof as_external_api_networkServer_pb.ListNetworkServerResponse)) {
    throw new Error('Expected argument of type api.ListNetworkServerResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_ListNetworkServerResponse(buffer_arg) {
  return as_external_api_networkServer_pb.ListNetworkServerResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_UpdateNetworkServerRequest(arg) {
  if (!(arg instanceof as_external_api_networkServer_pb.UpdateNetworkServerRequest)) {
    throw new Error('Expected argument of type api.UpdateNetworkServerRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_UpdateNetworkServerRequest(buffer_arg) {
  return as_external_api_networkServer_pb.UpdateNetworkServerRequest.deserializeBinary(new Uint8Array(buffer_arg));
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


// NetworkServerService is the service managing network-servers.
var NetworkServerServiceService = exports.NetworkServerServiceService = {
  // Create creates the given network-server.
create: {
    path: '/api.NetworkServerService/Create',
    requestStream: false,
    responseStream: false,
    requestType: as_external_api_networkServer_pb.CreateNetworkServerRequest,
    responseType: as_external_api_networkServer_pb.CreateNetworkServerResponse,
    requestSerialize: serialize_api_CreateNetworkServerRequest,
    requestDeserialize: deserialize_api_CreateNetworkServerRequest,
    responseSerialize: serialize_api_CreateNetworkServerResponse,
    responseDeserialize: deserialize_api_CreateNetworkServerResponse,
  },
  // Get returns the network-server matching the given id.
get: {
    path: '/api.NetworkServerService/Get',
    requestStream: false,
    responseStream: false,
    requestType: as_external_api_networkServer_pb.GetNetworkServerRequest,
    responseType: as_external_api_networkServer_pb.GetNetworkServerResponse,
    requestSerialize: serialize_api_GetNetworkServerRequest,
    requestDeserialize: deserialize_api_GetNetworkServerRequest,
    responseSerialize: serialize_api_GetNetworkServerResponse,
    responseDeserialize: deserialize_api_GetNetworkServerResponse,
  },
  // Update updates the given network-server.
update: {
    path: '/api.NetworkServerService/Update',
    requestStream: false,
    responseStream: false,
    requestType: as_external_api_networkServer_pb.UpdateNetworkServerRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_api_UpdateNetworkServerRequest,
    requestDeserialize: deserialize_api_UpdateNetworkServerRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Delete deletes the network-server matching the given id.
delete: {
    path: '/api.NetworkServerService/Delete',
    requestStream: false,
    responseStream: false,
    requestType: as_external_api_networkServer_pb.DeleteNetworkServerRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_api_DeleteNetworkServerRequest,
    requestDeserialize: deserialize_api_DeleteNetworkServerRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // List lists the available network-servers.
list: {
    path: '/api.NetworkServerService/List',
    requestStream: false,
    responseStream: false,
    requestType: as_external_api_networkServer_pb.ListNetworkServerRequest,
    responseType: as_external_api_networkServer_pb.ListNetworkServerResponse,
    requestSerialize: serialize_api_ListNetworkServerRequest,
    requestDeserialize: deserialize_api_ListNetworkServerRequest,
    responseSerialize: serialize_api_ListNetworkServerResponse,
    responseDeserialize: deserialize_api_ListNetworkServerResponse,
  },
  // GetADRAlgorithms returns the available ADR algorithms.
getADRAlgorithms: {
    path: '/api.NetworkServerService/GetADRAlgorithms',
    requestStream: false,
    responseStream: false,
    requestType: as_external_api_networkServer_pb.GetADRAlgorithmsRequest,
    responseType: as_external_api_networkServer_pb.GetADRAlgorithmsResponse,
    requestSerialize: serialize_api_GetADRAlgorithmsRequest,
    requestDeserialize: deserialize_api_GetADRAlgorithmsRequest,
    responseSerialize: serialize_api_GetADRAlgorithmsResponse,
    responseDeserialize: deserialize_api_GetADRAlgorithmsResponse,
  },
};

exports.NetworkServerServiceClient = grpc.makeGenericClientConstructor(NetworkServerServiceService);
