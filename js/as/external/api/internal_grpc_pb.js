// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var as_external_api_internal_pb = require('../../../as/external/api/internal_pb.js');
var google_api_annotations_pb = require('../../../google/api/annotations_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var as_external_api_user_pb = require('../../../as/external/api/user_pb.js');

function serialize_api_CreateAPIKeyRequest(arg) {
  if (!(arg instanceof as_external_api_internal_pb.CreateAPIKeyRequest)) {
    throw new Error('Expected argument of type api.CreateAPIKeyRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_CreateAPIKeyRequest(buffer_arg) {
  return as_external_api_internal_pb.CreateAPIKeyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_CreateAPIKeyResponse(arg) {
  if (!(arg instanceof as_external_api_internal_pb.CreateAPIKeyResponse)) {
    throw new Error('Expected argument of type api.CreateAPIKeyResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_CreateAPIKeyResponse(buffer_arg) {
  return as_external_api_internal_pb.CreateAPIKeyResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_DeleteAPIKeyRequest(arg) {
  if (!(arg instanceof as_external_api_internal_pb.DeleteAPIKeyRequest)) {
    throw new Error('Expected argument of type api.DeleteAPIKeyRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_DeleteAPIKeyRequest(buffer_arg) {
  return as_external_api_internal_pb.DeleteAPIKeyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_GetDevicesSummaryRequest(arg) {
  if (!(arg instanceof as_external_api_internal_pb.GetDevicesSummaryRequest)) {
    throw new Error('Expected argument of type api.GetDevicesSummaryRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_GetDevicesSummaryRequest(buffer_arg) {
  return as_external_api_internal_pb.GetDevicesSummaryRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_GetDevicesSummaryResponse(arg) {
  if (!(arg instanceof as_external_api_internal_pb.GetDevicesSummaryResponse)) {
    throw new Error('Expected argument of type api.GetDevicesSummaryResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_GetDevicesSummaryResponse(buffer_arg) {
  return as_external_api_internal_pb.GetDevicesSummaryResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_GetGatewaysSummaryRequest(arg) {
  if (!(arg instanceof as_external_api_internal_pb.GetGatewaysSummaryRequest)) {
    throw new Error('Expected argument of type api.GetGatewaysSummaryRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_GetGatewaysSummaryRequest(buffer_arg) {
  return as_external_api_internal_pb.GetGatewaysSummaryRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_GetGatewaysSummaryResponse(arg) {
  if (!(arg instanceof as_external_api_internal_pb.GetGatewaysSummaryResponse)) {
    throw new Error('Expected argument of type api.GetGatewaysSummaryResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_GetGatewaysSummaryResponse(buffer_arg) {
  return as_external_api_internal_pb.GetGatewaysSummaryResponse.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_api_ListAPIKeysRequest(arg) {
  if (!(arg instanceof as_external_api_internal_pb.ListAPIKeysRequest)) {
    throw new Error('Expected argument of type api.ListAPIKeysRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_ListAPIKeysRequest(buffer_arg) {
  return as_external_api_internal_pb.ListAPIKeysRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_ListAPIKeysResponse(arg) {
  if (!(arg instanceof as_external_api_internal_pb.ListAPIKeysResponse)) {
    throw new Error('Expected argument of type api.ListAPIKeysResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_ListAPIKeysResponse(buffer_arg) {
  return as_external_api_internal_pb.ListAPIKeysResponse.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_api_OpenIDConnectLoginRequest(arg) {
  if (!(arg instanceof as_external_api_internal_pb.OpenIDConnectLoginRequest)) {
    throw new Error('Expected argument of type api.OpenIDConnectLoginRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_OpenIDConnectLoginRequest(buffer_arg) {
  return as_external_api_internal_pb.OpenIDConnectLoginRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_OpenIDConnectLoginResponse(arg) {
  if (!(arg instanceof as_external_api_internal_pb.OpenIDConnectLoginResponse)) {
    throw new Error('Expected argument of type api.OpenIDConnectLoginResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_OpenIDConnectLoginResponse(buffer_arg) {
  return as_external_api_internal_pb.OpenIDConnectLoginResponse.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_api_SettingsResponse(arg) {
  if (!(arg instanceof as_external_api_internal_pb.SettingsResponse)) {
    throw new Error('Expected argument of type api.SettingsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_SettingsResponse(buffer_arg) {
  return as_external_api_internal_pb.SettingsResponse.deserializeBinary(new Uint8Array(buffer_arg));
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
  // CreateAPIKey creates the given API key.
createAPIKey: {
    path: '/api.InternalService/CreateAPIKey',
    requestStream: false,
    responseStream: false,
    requestType: as_external_api_internal_pb.CreateAPIKeyRequest,
    responseType: as_external_api_internal_pb.CreateAPIKeyResponse,
    requestSerialize: serialize_api_CreateAPIKeyRequest,
    requestDeserialize: deserialize_api_CreateAPIKeyRequest,
    responseSerialize: serialize_api_CreateAPIKeyResponse,
    responseDeserialize: deserialize_api_CreateAPIKeyResponse,
  },
  // DeleteAPIKey deletes the API key.
deleteAPIKey: {
    path: '/api.InternalService/DeleteAPIKey',
    requestStream: false,
    responseStream: false,
    requestType: as_external_api_internal_pb.DeleteAPIKeyRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_api_DeleteAPIKeyRequest,
    requestDeserialize: deserialize_api_DeleteAPIKeyRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // ListAPIKeys lists the available API keys.
listAPIKeys: {
    path: '/api.InternalService/ListAPIKeys',
    requestStream: false,
    responseStream: false,
    requestType: as_external_api_internal_pb.ListAPIKeysRequest,
    responseType: as_external_api_internal_pb.ListAPIKeysResponse,
    requestSerialize: serialize_api_ListAPIKeysRequest,
    requestDeserialize: deserialize_api_ListAPIKeysRequest,
    responseSerialize: serialize_api_ListAPIKeysResponse,
    responseDeserialize: deserialize_api_ListAPIKeysResponse,
  },
  // Get the global settings.
settings: {
    path: '/api.InternalService/Settings',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: as_external_api_internal_pb.SettingsResponse,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_api_SettingsResponse,
    responseDeserialize: deserialize_api_SettingsResponse,
  },
  // OpenID Connect login.
openIDConnectLogin: {
    path: '/api.InternalService/OpenIDConnectLogin',
    requestStream: false,
    responseStream: false,
    requestType: as_external_api_internal_pb.OpenIDConnectLoginRequest,
    responseType: as_external_api_internal_pb.OpenIDConnectLoginResponse,
    requestSerialize: serialize_api_OpenIDConnectLoginRequest,
    requestDeserialize: deserialize_api_OpenIDConnectLoginRequest,
    responseSerialize: serialize_api_OpenIDConnectLoginResponse,
    responseDeserialize: deserialize_api_OpenIDConnectLoginResponse,
  },
  // GetDevicesSummary returns an aggregated summary of the devices.
getDevicesSummary: {
    path: '/api.InternalService/GetDevicesSummary',
    requestStream: false,
    responseStream: false,
    requestType: as_external_api_internal_pb.GetDevicesSummaryRequest,
    responseType: as_external_api_internal_pb.GetDevicesSummaryResponse,
    requestSerialize: serialize_api_GetDevicesSummaryRequest,
    requestDeserialize: deserialize_api_GetDevicesSummaryRequest,
    responseSerialize: serialize_api_GetDevicesSummaryResponse,
    responseDeserialize: deserialize_api_GetDevicesSummaryResponse,
  },
  // GetGatewaysSummary returns an aggregated summary of the gateways.
getGatewaysSummary: {
    path: '/api.InternalService/GetGatewaysSummary',
    requestStream: false,
    responseStream: false,
    requestType: as_external_api_internal_pb.GetGatewaysSummaryRequest,
    responseType: as_external_api_internal_pb.GetGatewaysSummaryResponse,
    requestSerialize: serialize_api_GetGatewaysSummaryRequest,
    requestDeserialize: deserialize_api_GetGatewaysSummaryRequest,
    responseSerialize: serialize_api_GetGatewaysSummaryResponse,
    responseDeserialize: deserialize_api_GetGatewaysSummaryResponse,
  },
};

exports.InternalServiceClient = grpc.makeGenericClientConstructor(InternalServiceService);
