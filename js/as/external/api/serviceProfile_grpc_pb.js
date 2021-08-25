// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var as_external_api_serviceProfile_pb = require('../../../as/external/api/serviceProfile_pb.js');
var google_api_annotations_pb = require('../../../google/api/annotations_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var as_external_api_profiles_pb = require('../../../as/external/api/profiles_pb.js');

function serialize_api_CreateServiceProfileRequest(arg) {
  if (!(arg instanceof as_external_api_serviceProfile_pb.CreateServiceProfileRequest)) {
    throw new Error('Expected argument of type api.CreateServiceProfileRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_CreateServiceProfileRequest(buffer_arg) {
  return as_external_api_serviceProfile_pb.CreateServiceProfileRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_CreateServiceProfileResponse(arg) {
  if (!(arg instanceof as_external_api_serviceProfile_pb.CreateServiceProfileResponse)) {
    throw new Error('Expected argument of type api.CreateServiceProfileResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_CreateServiceProfileResponse(buffer_arg) {
  return as_external_api_serviceProfile_pb.CreateServiceProfileResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_DeleteServiceProfileRequest(arg) {
  if (!(arg instanceof as_external_api_serviceProfile_pb.DeleteServiceProfileRequest)) {
    throw new Error('Expected argument of type api.DeleteServiceProfileRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_DeleteServiceProfileRequest(buffer_arg) {
  return as_external_api_serviceProfile_pb.DeleteServiceProfileRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_GetServiceProfileRequest(arg) {
  if (!(arg instanceof as_external_api_serviceProfile_pb.GetServiceProfileRequest)) {
    throw new Error('Expected argument of type api.GetServiceProfileRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_GetServiceProfileRequest(buffer_arg) {
  return as_external_api_serviceProfile_pb.GetServiceProfileRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_GetServiceProfileResponse(arg) {
  if (!(arg instanceof as_external_api_serviceProfile_pb.GetServiceProfileResponse)) {
    throw new Error('Expected argument of type api.GetServiceProfileResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_GetServiceProfileResponse(buffer_arg) {
  return as_external_api_serviceProfile_pb.GetServiceProfileResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_ListServiceProfileRequest(arg) {
  if (!(arg instanceof as_external_api_serviceProfile_pb.ListServiceProfileRequest)) {
    throw new Error('Expected argument of type api.ListServiceProfileRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_ListServiceProfileRequest(buffer_arg) {
  return as_external_api_serviceProfile_pb.ListServiceProfileRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_ListServiceProfileResponse(arg) {
  if (!(arg instanceof as_external_api_serviceProfile_pb.ListServiceProfileResponse)) {
    throw new Error('Expected argument of type api.ListServiceProfileResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_ListServiceProfileResponse(buffer_arg) {
  return as_external_api_serviceProfile_pb.ListServiceProfileResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_UpdateServiceProfileRequest(arg) {
  if (!(arg instanceof as_external_api_serviceProfile_pb.UpdateServiceProfileRequest)) {
    throw new Error('Expected argument of type api.UpdateServiceProfileRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_UpdateServiceProfileRequest(buffer_arg) {
  return as_external_api_serviceProfile_pb.UpdateServiceProfileRequest.deserializeBinary(new Uint8Array(buffer_arg));
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


// ServiceProfileService is the service managing service-profiles.
var ServiceProfileServiceService = exports.ServiceProfileServiceService = {
  // Create creates the given service-profile.
create: {
    path: '/api.ServiceProfileService/Create',
    requestStream: false,
    responseStream: false,
    requestType: as_external_api_serviceProfile_pb.CreateServiceProfileRequest,
    responseType: as_external_api_serviceProfile_pb.CreateServiceProfileResponse,
    requestSerialize: serialize_api_CreateServiceProfileRequest,
    requestDeserialize: deserialize_api_CreateServiceProfileRequest,
    responseSerialize: serialize_api_CreateServiceProfileResponse,
    responseDeserialize: deserialize_api_CreateServiceProfileResponse,
  },
  // Get returns the service-profile matching the given id.
get: {
    path: '/api.ServiceProfileService/Get',
    requestStream: false,
    responseStream: false,
    requestType: as_external_api_serviceProfile_pb.GetServiceProfileRequest,
    responseType: as_external_api_serviceProfile_pb.GetServiceProfileResponse,
    requestSerialize: serialize_api_GetServiceProfileRequest,
    requestDeserialize: deserialize_api_GetServiceProfileRequest,
    responseSerialize: serialize_api_GetServiceProfileResponse,
    responseDeserialize: deserialize_api_GetServiceProfileResponse,
  },
  // Update updates the given serviceprofile.
update: {
    path: '/api.ServiceProfileService/Update',
    requestStream: false,
    responseStream: false,
    requestType: as_external_api_serviceProfile_pb.UpdateServiceProfileRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_api_UpdateServiceProfileRequest,
    requestDeserialize: deserialize_api_UpdateServiceProfileRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Delete deletes the service-profile matching the given id.
delete: {
    path: '/api.ServiceProfileService/Delete',
    requestStream: false,
    responseStream: false,
    requestType: as_external_api_serviceProfile_pb.DeleteServiceProfileRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_api_DeleteServiceProfileRequest,
    requestDeserialize: deserialize_api_DeleteServiceProfileRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // List lists the available service-profiles.
list: {
    path: '/api.ServiceProfileService/List',
    requestStream: false,
    responseStream: false,
    requestType: as_external_api_serviceProfile_pb.ListServiceProfileRequest,
    responseType: as_external_api_serviceProfile_pb.ListServiceProfileResponse,
    requestSerialize: serialize_api_ListServiceProfileRequest,
    requestDeserialize: deserialize_api_ListServiceProfileRequest,
    responseSerialize: serialize_api_ListServiceProfileResponse,
    responseDeserialize: deserialize_api_ListServiceProfileResponse,
  },
};

exports.ServiceProfileServiceClient = grpc.makeGenericClientConstructor(ServiceProfileServiceService);
