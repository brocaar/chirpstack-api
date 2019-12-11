// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var as_external_api_gatewayProfile_pb = require('../../../as/external/api/gatewayProfile_pb.js');
var google_api_annotations_pb = require('../../../google/api/annotations_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var common_common_pb = require('../../../common/common_pb.js');

function serialize_api_CreateGatewayProfileRequest(arg) {
  if (!(arg instanceof as_external_api_gatewayProfile_pb.CreateGatewayProfileRequest)) {
    throw new Error('Expected argument of type api.CreateGatewayProfileRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_CreateGatewayProfileRequest(buffer_arg) {
  return as_external_api_gatewayProfile_pb.CreateGatewayProfileRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_CreateGatewayProfileResponse(arg) {
  if (!(arg instanceof as_external_api_gatewayProfile_pb.CreateGatewayProfileResponse)) {
    throw new Error('Expected argument of type api.CreateGatewayProfileResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_CreateGatewayProfileResponse(buffer_arg) {
  return as_external_api_gatewayProfile_pb.CreateGatewayProfileResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_DeleteGatewayProfileRequest(arg) {
  if (!(arg instanceof as_external_api_gatewayProfile_pb.DeleteGatewayProfileRequest)) {
    throw new Error('Expected argument of type api.DeleteGatewayProfileRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_DeleteGatewayProfileRequest(buffer_arg) {
  return as_external_api_gatewayProfile_pb.DeleteGatewayProfileRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_GetGatewayProfileRequest(arg) {
  if (!(arg instanceof as_external_api_gatewayProfile_pb.GetGatewayProfileRequest)) {
    throw new Error('Expected argument of type api.GetGatewayProfileRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_GetGatewayProfileRequest(buffer_arg) {
  return as_external_api_gatewayProfile_pb.GetGatewayProfileRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_GetGatewayProfileResponse(arg) {
  if (!(arg instanceof as_external_api_gatewayProfile_pb.GetGatewayProfileResponse)) {
    throw new Error('Expected argument of type api.GetGatewayProfileResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_GetGatewayProfileResponse(buffer_arg) {
  return as_external_api_gatewayProfile_pb.GetGatewayProfileResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_ListGatewayProfilesRequest(arg) {
  if (!(arg instanceof as_external_api_gatewayProfile_pb.ListGatewayProfilesRequest)) {
    throw new Error('Expected argument of type api.ListGatewayProfilesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_ListGatewayProfilesRequest(buffer_arg) {
  return as_external_api_gatewayProfile_pb.ListGatewayProfilesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_ListGatewayProfilesResponse(arg) {
  if (!(arg instanceof as_external_api_gatewayProfile_pb.ListGatewayProfilesResponse)) {
    throw new Error('Expected argument of type api.ListGatewayProfilesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_ListGatewayProfilesResponse(buffer_arg) {
  return as_external_api_gatewayProfile_pb.ListGatewayProfilesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_UpdateGatewayProfileRequest(arg) {
  if (!(arg instanceof as_external_api_gatewayProfile_pb.UpdateGatewayProfileRequest)) {
    throw new Error('Expected argument of type api.UpdateGatewayProfileRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_UpdateGatewayProfileRequest(buffer_arg) {
  return as_external_api_gatewayProfile_pb.UpdateGatewayProfileRequest.deserializeBinary(new Uint8Array(buffer_arg));
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


// GatewayProfileService is the service managing the gateway-profiles.
var GatewayProfileServiceService = exports.GatewayProfileServiceService = {
  // Create creates the given gateway-profile.
  create: {
    path: '/api.GatewayProfileService/Create',
    requestStream: false,
    responseStream: false,
    requestType: as_external_api_gatewayProfile_pb.CreateGatewayProfileRequest,
    responseType: as_external_api_gatewayProfile_pb.CreateGatewayProfileResponse,
    requestSerialize: serialize_api_CreateGatewayProfileRequest,
    requestDeserialize: deserialize_api_CreateGatewayProfileRequest,
    responseSerialize: serialize_api_CreateGatewayProfileResponse,
    responseDeserialize: deserialize_api_CreateGatewayProfileResponse,
  },
  // Get returns the gateway-profile matching the given id.
  get: {
    path: '/api.GatewayProfileService/Get',
    requestStream: false,
    responseStream: false,
    requestType: as_external_api_gatewayProfile_pb.GetGatewayProfileRequest,
    responseType: as_external_api_gatewayProfile_pb.GetGatewayProfileResponse,
    requestSerialize: serialize_api_GetGatewayProfileRequest,
    requestDeserialize: deserialize_api_GetGatewayProfileRequest,
    responseSerialize: serialize_api_GetGatewayProfileResponse,
    responseDeserialize: deserialize_api_GetGatewayProfileResponse,
  },
  // Update updates the given gateway-profile.
  update: {
    path: '/api.GatewayProfileService/Update',
    requestStream: false,
    responseStream: false,
    requestType: as_external_api_gatewayProfile_pb.UpdateGatewayProfileRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_api_UpdateGatewayProfileRequest,
    requestDeserialize: deserialize_api_UpdateGatewayProfileRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Delete deletes the gateway-profile matching the given id.
  delete: {
    path: '/api.GatewayProfileService/Delete',
    requestStream: false,
    responseStream: false,
    requestType: as_external_api_gatewayProfile_pb.DeleteGatewayProfileRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_api_DeleteGatewayProfileRequest,
    requestDeserialize: deserialize_api_DeleteGatewayProfileRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // List returns the existing gateway-profiles.
  list: {
    path: '/api.GatewayProfileService/List',
    requestStream: false,
    responseStream: false,
    requestType: as_external_api_gatewayProfile_pb.ListGatewayProfilesRequest,
    responseType: as_external_api_gatewayProfile_pb.ListGatewayProfilesResponse,
    requestSerialize: serialize_api_ListGatewayProfilesRequest,
    requestDeserialize: deserialize_api_ListGatewayProfilesRequest,
    responseSerialize: serialize_api_ListGatewayProfilesResponse,
    responseDeserialize: deserialize_api_ListGatewayProfilesResponse,
  },
};

exports.GatewayProfileServiceClient = grpc.makeGenericClientConstructor(GatewayProfileServiceService);
