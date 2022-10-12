// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var as_external_api_organization_pb = require('../../../as/external/api/organization_pb.js');
var google_api_annotations_pb = require('../../../google/api/annotations_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');

function serialize_api_AddOrganizationUserRequest(arg) {
  if (!(arg instanceof as_external_api_organization_pb.AddOrganizationUserRequest)) {
    throw new Error('Expected argument of type api.AddOrganizationUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_AddOrganizationUserRequest(buffer_arg) {
  return as_external_api_organization_pb.AddOrganizationUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_CreateOrganizationRequest(arg) {
  if (!(arg instanceof as_external_api_organization_pb.CreateOrganizationRequest)) {
    throw new Error('Expected argument of type api.CreateOrganizationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_CreateOrganizationRequest(buffer_arg) {
  return as_external_api_organization_pb.CreateOrganizationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_CreateOrganizationResponse(arg) {
  if (!(arg instanceof as_external_api_organization_pb.CreateOrganizationResponse)) {
    throw new Error('Expected argument of type api.CreateOrganizationResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_CreateOrganizationResponse(buffer_arg) {
  return as_external_api_organization_pb.CreateOrganizationResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_DeleteOrganizationRequest(arg) {
  if (!(arg instanceof as_external_api_organization_pb.DeleteOrganizationRequest)) {
    throw new Error('Expected argument of type api.DeleteOrganizationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_DeleteOrganizationRequest(buffer_arg) {
  return as_external_api_organization_pb.DeleteOrganizationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_DeleteOrganizationUserRequest(arg) {
  if (!(arg instanceof as_external_api_organization_pb.DeleteOrganizationUserRequest)) {
    throw new Error('Expected argument of type api.DeleteOrganizationUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_DeleteOrganizationUserRequest(buffer_arg) {
  return as_external_api_organization_pb.DeleteOrganizationUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_GetOrganizationRequest(arg) {
  if (!(arg instanceof as_external_api_organization_pb.GetOrganizationRequest)) {
    throw new Error('Expected argument of type api.GetOrganizationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_GetOrganizationRequest(buffer_arg) {
  return as_external_api_organization_pb.GetOrganizationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_GetOrganizationResponse(arg) {
  if (!(arg instanceof as_external_api_organization_pb.GetOrganizationResponse)) {
    throw new Error('Expected argument of type api.GetOrganizationResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_GetOrganizationResponse(buffer_arg) {
  return as_external_api_organization_pb.GetOrganizationResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_GetOrganizationUserRequest(arg) {
  if (!(arg instanceof as_external_api_organization_pb.GetOrganizationUserRequest)) {
    throw new Error('Expected argument of type api.GetOrganizationUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_GetOrganizationUserRequest(buffer_arg) {
  return as_external_api_organization_pb.GetOrganizationUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_GetOrganizationUserResponse(arg) {
  if (!(arg instanceof as_external_api_organization_pb.GetOrganizationUserResponse)) {
    throw new Error('Expected argument of type api.GetOrganizationUserResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_GetOrganizationUserResponse(buffer_arg) {
  return as_external_api_organization_pb.GetOrganizationUserResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_ListOrganizationRequest(arg) {
  if (!(arg instanceof as_external_api_organization_pb.ListOrganizationRequest)) {
    throw new Error('Expected argument of type api.ListOrganizationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_ListOrganizationRequest(buffer_arg) {
  return as_external_api_organization_pb.ListOrganizationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_ListOrganizationResponse(arg) {
  if (!(arg instanceof as_external_api_organization_pb.ListOrganizationResponse)) {
    throw new Error('Expected argument of type api.ListOrganizationResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_ListOrganizationResponse(buffer_arg) {
  return as_external_api_organization_pb.ListOrganizationResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_ListOrganizationUsersRequest(arg) {
  if (!(arg instanceof as_external_api_organization_pb.ListOrganizationUsersRequest)) {
    throw new Error('Expected argument of type api.ListOrganizationUsersRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_ListOrganizationUsersRequest(buffer_arg) {
  return as_external_api_organization_pb.ListOrganizationUsersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_ListOrganizationUsersResponse(arg) {
  if (!(arg instanceof as_external_api_organization_pb.ListOrganizationUsersResponse)) {
    throw new Error('Expected argument of type api.ListOrganizationUsersResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_ListOrganizationUsersResponse(buffer_arg) {
  return as_external_api_organization_pb.ListOrganizationUsersResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_UpdateOrganizationRequest(arg) {
  if (!(arg instanceof as_external_api_organization_pb.UpdateOrganizationRequest)) {
    throw new Error('Expected argument of type api.UpdateOrganizationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_UpdateOrganizationRequest(buffer_arg) {
  return as_external_api_organization_pb.UpdateOrganizationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_UpdateOrganizationUserRequest(arg) {
  if (!(arg instanceof as_external_api_organization_pb.UpdateOrganizationUserRequest)) {
    throw new Error('Expected argument of type api.UpdateOrganizationUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_UpdateOrganizationUserRequest(buffer_arg) {
  return as_external_api_organization_pb.UpdateOrganizationUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
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


// OrganizationService is the service managing the organization access.
var OrganizationServiceService = exports.OrganizationServiceService = {
  // Get organization list.
list: {
    path: '/api.OrganizationService/List',
    requestStream: false,
    responseStream: false,
    requestType: as_external_api_organization_pb.ListOrganizationRequest,
    responseType: as_external_api_organization_pb.ListOrganizationResponse,
    requestSerialize: serialize_api_ListOrganizationRequest,
    requestDeserialize: deserialize_api_ListOrganizationRequest,
    responseSerialize: serialize_api_ListOrganizationResponse,
    responseDeserialize: deserialize_api_ListOrganizationResponse,
  },
  // Get data for a particular organization.
get: {
    path: '/api.OrganizationService/Get',
    requestStream: false,
    responseStream: false,
    requestType: as_external_api_organization_pb.GetOrganizationRequest,
    responseType: as_external_api_organization_pb.GetOrganizationResponse,
    requestSerialize: serialize_api_GetOrganizationRequest,
    requestDeserialize: deserialize_api_GetOrganizationRequest,
    responseSerialize: serialize_api_GetOrganizationResponse,
    responseDeserialize: deserialize_api_GetOrganizationResponse,
  },
  // Create a new organization.
create: {
    path: '/api.OrganizationService/Create',
    requestStream: false,
    responseStream: false,
    requestType: as_external_api_organization_pb.CreateOrganizationRequest,
    responseType: as_external_api_organization_pb.CreateOrganizationResponse,
    requestSerialize: serialize_api_CreateOrganizationRequest,
    requestDeserialize: deserialize_api_CreateOrganizationRequest,
    responseSerialize: serialize_api_CreateOrganizationResponse,
    responseDeserialize: deserialize_api_CreateOrganizationResponse,
  },
  // Update an existing organization.
update: {
    path: '/api.OrganizationService/Update',
    requestStream: false,
    responseStream: false,
    requestType: as_external_api_organization_pb.UpdateOrganizationRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_api_UpdateOrganizationRequest,
    requestDeserialize: deserialize_api_UpdateOrganizationRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Delete an organization.
delete: {
    path: '/api.OrganizationService/Delete',
    requestStream: false,
    responseStream: false,
    requestType: as_external_api_organization_pb.DeleteOrganizationRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_api_DeleteOrganizationRequest,
    requestDeserialize: deserialize_api_DeleteOrganizationRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Get organization's user list.
listUsers: {
    path: '/api.OrganizationService/ListUsers',
    requestStream: false,
    responseStream: false,
    requestType: as_external_api_organization_pb.ListOrganizationUsersRequest,
    responseType: as_external_api_organization_pb.ListOrganizationUsersResponse,
    requestSerialize: serialize_api_ListOrganizationUsersRequest,
    requestDeserialize: deserialize_api_ListOrganizationUsersRequest,
    responseSerialize: serialize_api_ListOrganizationUsersResponse,
    responseDeserialize: deserialize_api_ListOrganizationUsersResponse,
  },
  // Get data for a particular organization user.
getUser: {
    path: '/api.OrganizationService/GetUser',
    requestStream: false,
    responseStream: false,
    requestType: as_external_api_organization_pb.GetOrganizationUserRequest,
    responseType: as_external_api_organization_pb.GetOrganizationUserResponse,
    requestSerialize: serialize_api_GetOrganizationUserRequest,
    requestDeserialize: deserialize_api_GetOrganizationUserRequest,
    responseSerialize: serialize_api_GetOrganizationUserResponse,
    responseDeserialize: deserialize_api_GetOrganizationUserResponse,
  },
  // Add a new user to an organization. The user is matched based on email, not user id.
addUser: {
    path: '/api.OrganizationService/AddUser',
    requestStream: false,
    responseStream: false,
    requestType: as_external_api_organization_pb.AddOrganizationUserRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_api_AddOrganizationUserRequest,
    requestDeserialize: deserialize_api_AddOrganizationUserRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Update a user in an organization.
updateUser: {
    path: '/api.OrganizationService/UpdateUser',
    requestStream: false,
    responseStream: false,
    requestType: as_external_api_organization_pb.UpdateOrganizationUserRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_api_UpdateOrganizationUserRequest,
    requestDeserialize: deserialize_api_UpdateOrganizationUserRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Delete a user from an organization.
deleteUser: {
    path: '/api.OrganizationService/DeleteUser',
    requestStream: false,
    responseStream: false,
    requestType: as_external_api_organization_pb.DeleteOrganizationUserRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_api_DeleteOrganizationUserRequest,
    requestDeserialize: deserialize_api_DeleteOrganizationUserRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
};

exports.OrganizationServiceClient = grpc.makeGenericClientConstructor(OrganizationServiceService);
