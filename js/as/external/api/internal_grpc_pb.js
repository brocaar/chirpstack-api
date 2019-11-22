// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var as_external_api_internal_pb = require('../../../as/external/api/internal_pb.js');
var google_api_annotations_pb = require('../../../google/api/annotations_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var as_external_api_user_pb = require('../../../as/external/api/user_pb.js');

function serialize_api_BrandingResponse(arg) {
  if (!(arg instanceof as_external_api_internal_pb.BrandingResponse)) {
    throw new Error('Expected argument of type api.BrandingResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_BrandingResponse(buffer_arg) {
  return as_external_api_internal_pb.BrandingResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_GlobalSearchRequest(arg) {
  if (!(arg instanceof as_external_api_internal_pb.GlobalSearchRequest)) {
    throw new Error('Expected argument of type api.GlobalSearchRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_GlobalSearchRequest(buffer_arg) {
  return as_external_api_internal_pb.GlobalSearchRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_GlobalSearchResponse(arg) {
  if (!(arg instanceof as_external_api_internal_pb.GlobalSearchResponse)) {
    throw new Error('Expected argument of type api.GlobalSearchResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_GlobalSearchResponse(buffer_arg) {
  return as_external_api_internal_pb.GlobalSearchResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_LoginRequest(arg) {
  if (!(arg instanceof as_external_api_internal_pb.LoginRequest)) {
    throw new Error('Expected argument of type api.LoginRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_LoginRequest(buffer_arg) {
  return as_external_api_internal_pb.LoginRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_LoginResponse(arg) {
  if (!(arg instanceof as_external_api_internal_pb.LoginResponse)) {
    throw new Error('Expected argument of type api.LoginResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_LoginResponse(buffer_arg) {
  return as_external_api_internal_pb.LoginResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_ProfileResponse(arg) {
  if (!(arg instanceof as_external_api_internal_pb.ProfileResponse)) {
    throw new Error('Expected argument of type api.ProfileResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_ProfileResponse(buffer_arg) {
  return as_external_api_internal_pb.ProfileResponse.deserializeBinary(new Uint8Array(buffer_arg));
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


// InternalService is the service providing API endpoints for internal usage.
var InternalServiceService = exports.InternalServiceService = {
  // Log in a user
  login: {
    path: '/api.InternalService/Login',
    requestStream: false,
    responseStream: false,
    requestType: as_external_api_internal_pb.LoginRequest,
    responseType: as_external_api_internal_pb.LoginResponse,
    requestSerialize: serialize_api_LoginRequest,
    requestDeserialize: deserialize_api_LoginRequest,
    responseSerialize: serialize_api_LoginResponse,
    responseDeserialize: deserialize_api_LoginResponse,
  },
  // Get the current user's profile
  profile: {
    path: '/api.InternalService/Profile',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: as_external_api_internal_pb.ProfileResponse,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_api_ProfileResponse,
    responseDeserialize: deserialize_api_ProfileResponse,
  },
  // Get the branding for the UI
  branding: {
    path: '/api.InternalService/Branding',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: as_external_api_internal_pb.BrandingResponse,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_api_BrandingResponse,
    responseDeserialize: deserialize_api_BrandingResponse,
  },
  // Perform a global search.
  globalSearch: {
    path: '/api.InternalService/GlobalSearch',
    requestStream: false,
    responseStream: false,
    requestType: as_external_api_internal_pb.GlobalSearchRequest,
    responseType: as_external_api_internal_pb.GlobalSearchResponse,
    requestSerialize: serialize_api_GlobalSearchRequest,
    requestDeserialize: deserialize_api_GlobalSearchRequest,
    responseSerialize: serialize_api_GlobalSearchResponse,
    responseDeserialize: deserialize_api_GlobalSearchResponse,
  },
};

exports.InternalServiceClient = grpc.makeGenericClientConstructor(InternalServiceService);
