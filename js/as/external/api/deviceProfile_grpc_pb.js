// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var as_external_api_deviceProfile_pb = require('../../../as/external/api/deviceProfile_pb.js');
var google_api_annotations_pb = require('../../../google/api/annotations_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var as_external_api_profiles_pb = require('../../../as/external/api/profiles_pb.js');

function serialize_api_CreateDeviceProfileRequest(arg) {
  if (!(arg instanceof as_external_api_deviceProfile_pb.CreateDeviceProfileRequest)) {
    throw new Error('Expected argument of type api.CreateDeviceProfileRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_CreateDeviceProfileRequest(buffer_arg) {
  return as_external_api_deviceProfile_pb.CreateDeviceProfileRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_CreateDeviceProfileResponse(arg) {
  if (!(arg instanceof as_external_api_deviceProfile_pb.CreateDeviceProfileResponse)) {
    throw new Error('Expected argument of type api.CreateDeviceProfileResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_CreateDeviceProfileResponse(buffer_arg) {
  return as_external_api_deviceProfile_pb.CreateDeviceProfileResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_DeleteDeviceProfileRequest(arg) {
  if (!(arg instanceof as_external_api_deviceProfile_pb.DeleteDeviceProfileRequest)) {
    throw new Error('Expected argument of type api.DeleteDeviceProfileRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_DeleteDeviceProfileRequest(buffer_arg) {
  return as_external_api_deviceProfile_pb.DeleteDeviceProfileRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_GetDeviceProfileRequest(arg) {
  if (!(arg instanceof as_external_api_deviceProfile_pb.GetDeviceProfileRequest)) {
    throw new Error('Expected argument of type api.GetDeviceProfileRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_GetDeviceProfileRequest(buffer_arg) {
  return as_external_api_deviceProfile_pb.GetDeviceProfileRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_GetDeviceProfileResponse(arg) {
  if (!(arg instanceof as_external_api_deviceProfile_pb.GetDeviceProfileResponse)) {
    throw new Error('Expected argument of type api.GetDeviceProfileResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_GetDeviceProfileResponse(buffer_arg) {
  return as_external_api_deviceProfile_pb.GetDeviceProfileResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_ListDeviceProfileRequest(arg) {
  if (!(arg instanceof as_external_api_deviceProfile_pb.ListDeviceProfileRequest)) {
    throw new Error('Expected argument of type api.ListDeviceProfileRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_ListDeviceProfileRequest(buffer_arg) {
  return as_external_api_deviceProfile_pb.ListDeviceProfileRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_ListDeviceProfileResponse(arg) {
  if (!(arg instanceof as_external_api_deviceProfile_pb.ListDeviceProfileResponse)) {
    throw new Error('Expected argument of type api.ListDeviceProfileResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_ListDeviceProfileResponse(buffer_arg) {
  return as_external_api_deviceProfile_pb.ListDeviceProfileResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_UpdateDeviceProfileRequest(arg) {
  if (!(arg instanceof as_external_api_deviceProfile_pb.UpdateDeviceProfileRequest)) {
    throw new Error('Expected argument of type api.UpdateDeviceProfileRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_UpdateDeviceProfileRequest(buffer_arg) {
  return as_external_api_deviceProfile_pb.UpdateDeviceProfileRequest.deserializeBinary(new Uint8Array(buffer_arg));
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


// DeviceProfileService is the service managing device-profiles.
var DeviceProfileServiceService = exports.DeviceProfileServiceService = {
  // Create creates the given device-profile.
create: {
    path: '/api.DeviceProfileService/Create',
    requestStream: false,
    responseStream: false,
    requestType: as_external_api_deviceProfile_pb.CreateDeviceProfileRequest,
    responseType: as_external_api_deviceProfile_pb.CreateDeviceProfileResponse,
    requestSerialize: serialize_api_CreateDeviceProfileRequest,
    requestDeserialize: deserialize_api_CreateDeviceProfileRequest,
    responseSerialize: serialize_api_CreateDeviceProfileResponse,
    responseDeserialize: deserialize_api_CreateDeviceProfileResponse,
  },
  // Get returns the device-profile matching the given id.
get: {
    path: '/api.DeviceProfileService/Get',
    requestStream: false,
    responseStream: false,
    requestType: as_external_api_deviceProfile_pb.GetDeviceProfileRequest,
    responseType: as_external_api_deviceProfile_pb.GetDeviceProfileResponse,
    requestSerialize: serialize_api_GetDeviceProfileRequest,
    requestDeserialize: deserialize_api_GetDeviceProfileRequest,
    responseSerialize: serialize_api_GetDeviceProfileResponse,
    responseDeserialize: deserialize_api_GetDeviceProfileResponse,
  },
  // Update updates the given device-profile.
update: {
    path: '/api.DeviceProfileService/Update',
    requestStream: false,
    responseStream: false,
    requestType: as_external_api_deviceProfile_pb.UpdateDeviceProfileRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_api_UpdateDeviceProfileRequest,
    requestDeserialize: deserialize_api_UpdateDeviceProfileRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Delete deletes the device-profile matching the given id.
delete: {
    path: '/api.DeviceProfileService/Delete',
    requestStream: false,
    responseStream: false,
    requestType: as_external_api_deviceProfile_pb.DeleteDeviceProfileRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_api_DeleteDeviceProfileRequest,
    requestDeserialize: deserialize_api_DeleteDeviceProfileRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // List lists the available device-profiles.
list: {
    path: '/api.DeviceProfileService/List',
    requestStream: false,
    responseStream: false,
    requestType: as_external_api_deviceProfile_pb.ListDeviceProfileRequest,
    responseType: as_external_api_deviceProfile_pb.ListDeviceProfileResponse,
    requestSerialize: serialize_api_ListDeviceProfileRequest,
    requestDeserialize: deserialize_api_ListDeviceProfileRequest,
    responseSerialize: serialize_api_ListDeviceProfileResponse,
    responseDeserialize: deserialize_api_ListDeviceProfileResponse,
  },
};

exports.DeviceProfileServiceClient = grpc.makeGenericClientConstructor(DeviceProfileServiceService);
