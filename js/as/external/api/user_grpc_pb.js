// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var as_external_api_user_pb = require('../../../as/external/api/user_pb.js');
var google_api_annotations_pb = require('../../../google/api/annotations_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');

function serialize_api_CreateUserRequest(arg) {
  if (!(arg instanceof as_external_api_user_pb.CreateUserRequest)) {
    throw new Error('Expected argument of type api.CreateUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_CreateUserRequest(buffer_arg) {
  return as_external_api_user_pb.CreateUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_CreateUserResponse(arg) {
  if (!(arg instanceof as_external_api_user_pb.CreateUserResponse)) {
    throw new Error('Expected argument of type api.CreateUserResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_CreateUserResponse(buffer_arg) {
  return as_external_api_user_pb.CreateUserResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_DeleteUserRequest(arg) {
  if (!(arg instanceof as_external_api_user_pb.DeleteUserRequest)) {
    throw new Error('Expected argument of type api.DeleteUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_DeleteUserRequest(buffer_arg) {
  return as_external_api_user_pb.DeleteUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_GetUserRequest(arg) {
  if (!(arg instanceof as_external_api_user_pb.GetUserRequest)) {
    throw new Error('Expected argument of type api.GetUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_GetUserRequest(buffer_arg) {
  return as_external_api_user_pb.GetUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_GetUserResponse(arg) {
  if (!(arg instanceof as_external_api_user_pb.GetUserResponse)) {
    throw new Error('Expected argument of type api.GetUserResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_GetUserResponse(buffer_arg) {
  return as_external_api_user_pb.GetUserResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_ListUserRequest(arg) {
  if (!(arg instanceof as_external_api_user_pb.ListUserRequest)) {
    throw new Error('Expected argument of type api.ListUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_ListUserRequest(buffer_arg) {
  return as_external_api_user_pb.ListUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_ListUserResponse(arg) {
  if (!(arg instanceof as_external_api_user_pb.ListUserResponse)) {
    throw new Error('Expected argument of type api.ListUserResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_ListUserResponse(buffer_arg) {
  return as_external_api_user_pb.ListUserResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_UpdateUserPasswordRequest(arg) {
  if (!(arg instanceof as_external_api_user_pb.UpdateUserPasswordRequest)) {
    throw new Error('Expected argument of type api.UpdateUserPasswordRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_UpdateUserPasswordRequest(buffer_arg) {
  return as_external_api_user_pb.UpdateUserPasswordRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_UpdateUserRequest(arg) {
  if (!(arg instanceof as_external_api_user_pb.UpdateUserRequest)) {
    throw new Error('Expected argument of type api.UpdateUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_UpdateUserRequest(buffer_arg) {
  return as_external_api_user_pb.UpdateUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
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


// UserService is the service managing the user access.
var UserServiceService = exports.UserServiceService = {
  // Get user list.
list: {
    path: '/api.UserService/List',
    requestStream: false,
    responseStream: false,
    requestType: as_external_api_user_pb.ListUserRequest,
    responseType: as_external_api_user_pb.ListUserResponse,
    requestSerialize: serialize_api_ListUserRequest,
    requestDeserialize: deserialize_api_ListUserRequest,
    responseSerialize: serialize_api_ListUserResponse,
    responseDeserialize: deserialize_api_ListUserResponse,
  },
  // Get data for a particular user.
get: {
    path: '/api.UserService/Get',
    requestStream: false,
    responseStream: false,
    requestType: as_external_api_user_pb.GetUserRequest,
    responseType: as_external_api_user_pb.GetUserResponse,
    requestSerialize: serialize_api_GetUserRequest,
    requestDeserialize: deserialize_api_GetUserRequest,
    responseSerialize: serialize_api_GetUserResponse,
    responseDeserialize: deserialize_api_GetUserResponse,
  },
  // Create a new user.
create: {
    path: '/api.UserService/Create',
    requestStream: false,
    responseStream: false,
    requestType: as_external_api_user_pb.CreateUserRequest,
    responseType: as_external_api_user_pb.CreateUserResponse,
    requestSerialize: serialize_api_CreateUserRequest,
    requestDeserialize: deserialize_api_CreateUserRequest,
    responseSerialize: serialize_api_CreateUserResponse,
    responseDeserialize: deserialize_api_CreateUserResponse,
  },
  // Update an existing user.
update: {
    path: '/api.UserService/Update',
    requestStream: false,
    responseStream: false,
    requestType: as_external_api_user_pb.UpdateUserRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_api_UpdateUserRequest,
    requestDeserialize: deserialize_api_UpdateUserRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Delete a user.
delete: {
    path: '/api.UserService/Delete',
    requestStream: false,
    responseStream: false,
    requestType: as_external_api_user_pb.DeleteUserRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_api_DeleteUserRequest,
    requestDeserialize: deserialize_api_DeleteUserRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // UpdatePassword updates a password.
updatePassword: {
    path: '/api.UserService/UpdatePassword',
    requestStream: false,
    responseStream: false,
    requestType: as_external_api_user_pb.UpdateUserPasswordRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_api_UpdateUserPasswordRequest,
    requestDeserialize: deserialize_api_UpdateUserPasswordRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
};

exports.UserServiceClient = grpc.makeGenericClientConstructor(UserServiceService);
