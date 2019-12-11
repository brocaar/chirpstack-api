// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var as_external_api_multicastGroup_pb = require('../../../as/external/api/multicastGroup_pb.js');
var google_api_annotations_pb = require('../../../google/api/annotations_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');

function serialize_api_AddDeviceToMulticastGroupRequest(arg) {
  if (!(arg instanceof as_external_api_multicastGroup_pb.AddDeviceToMulticastGroupRequest)) {
    throw new Error('Expected argument of type api.AddDeviceToMulticastGroupRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_AddDeviceToMulticastGroupRequest(buffer_arg) {
  return as_external_api_multicastGroup_pb.AddDeviceToMulticastGroupRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_CreateMulticastGroupRequest(arg) {
  if (!(arg instanceof as_external_api_multicastGroup_pb.CreateMulticastGroupRequest)) {
    throw new Error('Expected argument of type api.CreateMulticastGroupRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_CreateMulticastGroupRequest(buffer_arg) {
  return as_external_api_multicastGroup_pb.CreateMulticastGroupRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_CreateMulticastGroupResponse(arg) {
  if (!(arg instanceof as_external_api_multicastGroup_pb.CreateMulticastGroupResponse)) {
    throw new Error('Expected argument of type api.CreateMulticastGroupResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_CreateMulticastGroupResponse(buffer_arg) {
  return as_external_api_multicastGroup_pb.CreateMulticastGroupResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_DeleteMulticastGroupRequest(arg) {
  if (!(arg instanceof as_external_api_multicastGroup_pb.DeleteMulticastGroupRequest)) {
    throw new Error('Expected argument of type api.DeleteMulticastGroupRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_DeleteMulticastGroupRequest(buffer_arg) {
  return as_external_api_multicastGroup_pb.DeleteMulticastGroupRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_EnqueueMulticastQueueItemRequest(arg) {
  if (!(arg instanceof as_external_api_multicastGroup_pb.EnqueueMulticastQueueItemRequest)) {
    throw new Error('Expected argument of type api.EnqueueMulticastQueueItemRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_EnqueueMulticastQueueItemRequest(buffer_arg) {
  return as_external_api_multicastGroup_pb.EnqueueMulticastQueueItemRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_EnqueueMulticastQueueItemResponse(arg) {
  if (!(arg instanceof as_external_api_multicastGroup_pb.EnqueueMulticastQueueItemResponse)) {
    throw new Error('Expected argument of type api.EnqueueMulticastQueueItemResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_EnqueueMulticastQueueItemResponse(buffer_arg) {
  return as_external_api_multicastGroup_pb.EnqueueMulticastQueueItemResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_FlushMulticastGroupQueueItemsRequest(arg) {
  if (!(arg instanceof as_external_api_multicastGroup_pb.FlushMulticastGroupQueueItemsRequest)) {
    throw new Error('Expected argument of type api.FlushMulticastGroupQueueItemsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_FlushMulticastGroupQueueItemsRequest(buffer_arg) {
  return as_external_api_multicastGroup_pb.FlushMulticastGroupQueueItemsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_GetMulticastGroupRequest(arg) {
  if (!(arg instanceof as_external_api_multicastGroup_pb.GetMulticastGroupRequest)) {
    throw new Error('Expected argument of type api.GetMulticastGroupRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_GetMulticastGroupRequest(buffer_arg) {
  return as_external_api_multicastGroup_pb.GetMulticastGroupRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_GetMulticastGroupResponse(arg) {
  if (!(arg instanceof as_external_api_multicastGroup_pb.GetMulticastGroupResponse)) {
    throw new Error('Expected argument of type api.GetMulticastGroupResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_GetMulticastGroupResponse(buffer_arg) {
  return as_external_api_multicastGroup_pb.GetMulticastGroupResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_ListMulticastGroupQueueItemsRequest(arg) {
  if (!(arg instanceof as_external_api_multicastGroup_pb.ListMulticastGroupQueueItemsRequest)) {
    throw new Error('Expected argument of type api.ListMulticastGroupQueueItemsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_ListMulticastGroupQueueItemsRequest(buffer_arg) {
  return as_external_api_multicastGroup_pb.ListMulticastGroupQueueItemsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_ListMulticastGroupQueueItemsResponse(arg) {
  if (!(arg instanceof as_external_api_multicastGroup_pb.ListMulticastGroupQueueItemsResponse)) {
    throw new Error('Expected argument of type api.ListMulticastGroupQueueItemsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_ListMulticastGroupQueueItemsResponse(buffer_arg) {
  return as_external_api_multicastGroup_pb.ListMulticastGroupQueueItemsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_ListMulticastGroupRequest(arg) {
  if (!(arg instanceof as_external_api_multicastGroup_pb.ListMulticastGroupRequest)) {
    throw new Error('Expected argument of type api.ListMulticastGroupRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_ListMulticastGroupRequest(buffer_arg) {
  return as_external_api_multicastGroup_pb.ListMulticastGroupRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_ListMulticastGroupResponse(arg) {
  if (!(arg instanceof as_external_api_multicastGroup_pb.ListMulticastGroupResponse)) {
    throw new Error('Expected argument of type api.ListMulticastGroupResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_ListMulticastGroupResponse(buffer_arg) {
  return as_external_api_multicastGroup_pb.ListMulticastGroupResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_RemoveDeviceFromMulticastGroupRequest(arg) {
  if (!(arg instanceof as_external_api_multicastGroup_pb.RemoveDeviceFromMulticastGroupRequest)) {
    throw new Error('Expected argument of type api.RemoveDeviceFromMulticastGroupRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_RemoveDeviceFromMulticastGroupRequest(buffer_arg) {
  return as_external_api_multicastGroup_pb.RemoveDeviceFromMulticastGroupRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_UpdateMulticastGroupRequest(arg) {
  if (!(arg instanceof as_external_api_multicastGroup_pb.UpdateMulticastGroupRequest)) {
    throw new Error('Expected argument of type api.UpdateMulticastGroupRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_UpdateMulticastGroupRequest(buffer_arg) {
  return as_external_api_multicastGroup_pb.UpdateMulticastGroupRequest.deserializeBinary(new Uint8Array(buffer_arg));
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


// MulticastGroupService is the service managing multicast-groups.
var MulticastGroupServiceService = exports.MulticastGroupServiceService = {
  // Create creates the given multicast-group.
  create: {
    path: '/api.MulticastGroupService/Create',
    requestStream: false,
    responseStream: false,
    requestType: as_external_api_multicastGroup_pb.CreateMulticastGroupRequest,
    responseType: as_external_api_multicastGroup_pb.CreateMulticastGroupResponse,
    requestSerialize: serialize_api_CreateMulticastGroupRequest,
    requestDeserialize: deserialize_api_CreateMulticastGroupRequest,
    responseSerialize: serialize_api_CreateMulticastGroupResponse,
    responseDeserialize: deserialize_api_CreateMulticastGroupResponse,
  },
  // Get returns a multicast-group given an ID.
  get: {
    path: '/api.MulticastGroupService/Get',
    requestStream: false,
    responseStream: false,
    requestType: as_external_api_multicastGroup_pb.GetMulticastGroupRequest,
    responseType: as_external_api_multicastGroup_pb.GetMulticastGroupResponse,
    requestSerialize: serialize_api_GetMulticastGroupRequest,
    requestDeserialize: deserialize_api_GetMulticastGroupRequest,
    responseSerialize: serialize_api_GetMulticastGroupResponse,
    responseDeserialize: deserialize_api_GetMulticastGroupResponse,
  },
  // Update updates the given multicast-group.
  update: {
    path: '/api.MulticastGroupService/Update',
    requestStream: false,
    responseStream: false,
    requestType: as_external_api_multicastGroup_pb.UpdateMulticastGroupRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_api_UpdateMulticastGroupRequest,
    requestDeserialize: deserialize_api_UpdateMulticastGroupRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Delete deletes a multicast-group given an ID.
  delete: {
    path: '/api.MulticastGroupService/Delete',
    requestStream: false,
    responseStream: false,
    requestType: as_external_api_multicastGroup_pb.DeleteMulticastGroupRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_api_DeleteMulticastGroupRequest,
    requestDeserialize: deserialize_api_DeleteMulticastGroupRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // List lists the available multicast-groups.
  list: {
    path: '/api.MulticastGroupService/List',
    requestStream: false,
    responseStream: false,
    requestType: as_external_api_multicastGroup_pb.ListMulticastGroupRequest,
    responseType: as_external_api_multicastGroup_pb.ListMulticastGroupResponse,
    requestSerialize: serialize_api_ListMulticastGroupRequest,
    requestDeserialize: deserialize_api_ListMulticastGroupRequest,
    responseSerialize: serialize_api_ListMulticastGroupResponse,
    responseDeserialize: deserialize_api_ListMulticastGroupResponse,
  },
  // AddDevice adds the given device to the multicast-group.
  addDevice: {
    path: '/api.MulticastGroupService/AddDevice',
    requestStream: false,
    responseStream: false,
    requestType: as_external_api_multicastGroup_pb.AddDeviceToMulticastGroupRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_api_AddDeviceToMulticastGroupRequest,
    requestDeserialize: deserialize_api_AddDeviceToMulticastGroupRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // RemoveDevice removes the given device from the multicast-group.
  removeDevice: {
    path: '/api.MulticastGroupService/RemoveDevice',
    requestStream: false,
    responseStream: false,
    requestType: as_external_api_multicastGroup_pb.RemoveDeviceFromMulticastGroupRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_api_RemoveDeviceFromMulticastGroupRequest,
    requestDeserialize: deserialize_api_RemoveDeviceFromMulticastGroupRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Enqueue adds the given item to the multicast-queue.
  enqueue: {
    path: '/api.MulticastGroupService/Enqueue',
    requestStream: false,
    responseStream: false,
    requestType: as_external_api_multicastGroup_pb.EnqueueMulticastQueueItemRequest,
    responseType: as_external_api_multicastGroup_pb.EnqueueMulticastQueueItemResponse,
    requestSerialize: serialize_api_EnqueueMulticastQueueItemRequest,
    requestDeserialize: deserialize_api_EnqueueMulticastQueueItemRequest,
    responseSerialize: serialize_api_EnqueueMulticastQueueItemResponse,
    responseDeserialize: deserialize_api_EnqueueMulticastQueueItemResponse,
  },
  // FlushQueue flushes the multicast-group queue.
  flushQueue: {
    path: '/api.MulticastGroupService/FlushQueue',
    requestStream: false,
    responseStream: false,
    requestType: as_external_api_multicastGroup_pb.FlushMulticastGroupQueueItemsRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_api_FlushMulticastGroupQueueItemsRequest,
    requestDeserialize: deserialize_api_FlushMulticastGroupQueueItemsRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // ListQueue lists the items in the multicast-group queue.
  listQueue: {
    path: '/api.MulticastGroupService/ListQueue',
    requestStream: false,
    responseStream: false,
    requestType: as_external_api_multicastGroup_pb.ListMulticastGroupQueueItemsRequest,
    responseType: as_external_api_multicastGroup_pb.ListMulticastGroupQueueItemsResponse,
    requestSerialize: serialize_api_ListMulticastGroupQueueItemsRequest,
    requestDeserialize: deserialize_api_ListMulticastGroupQueueItemsRequest,
    responseSerialize: serialize_api_ListMulticastGroupQueueItemsResponse,
    responseDeserialize: deserialize_api_ListMulticastGroupQueueItemsResponse,
  },
};

exports.MulticastGroupServiceClient = grpc.makeGenericClientConstructor(MulticastGroupServiceService);
