// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var as_external_api_deviceQueue_pb = require('../../../as/external/api/deviceQueue_pb.js');
var google_api_annotations_pb = require('../../../google/api/annotations_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');

function serialize_api_EnqueueDeviceQueueItemRequest(arg) {
  if (!(arg instanceof as_external_api_deviceQueue_pb.EnqueueDeviceQueueItemRequest)) {
    throw new Error('Expected argument of type api.EnqueueDeviceQueueItemRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_EnqueueDeviceQueueItemRequest(buffer_arg) {
  return as_external_api_deviceQueue_pb.EnqueueDeviceQueueItemRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_EnqueueDeviceQueueItemResponse(arg) {
  if (!(arg instanceof as_external_api_deviceQueue_pb.EnqueueDeviceQueueItemResponse)) {
    throw new Error('Expected argument of type api.EnqueueDeviceQueueItemResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_EnqueueDeviceQueueItemResponse(buffer_arg) {
  return as_external_api_deviceQueue_pb.EnqueueDeviceQueueItemResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_FlushDeviceQueueRequest(arg) {
  if (!(arg instanceof as_external_api_deviceQueue_pb.FlushDeviceQueueRequest)) {
    throw new Error('Expected argument of type api.FlushDeviceQueueRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_FlushDeviceQueueRequest(buffer_arg) {
  return as_external_api_deviceQueue_pb.FlushDeviceQueueRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_ListDeviceQueueItemsRequest(arg) {
  if (!(arg instanceof as_external_api_deviceQueue_pb.ListDeviceQueueItemsRequest)) {
    throw new Error('Expected argument of type api.ListDeviceQueueItemsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_ListDeviceQueueItemsRequest(buffer_arg) {
  return as_external_api_deviceQueue_pb.ListDeviceQueueItemsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_ListDeviceQueueItemsResponse(arg) {
  if (!(arg instanceof as_external_api_deviceQueue_pb.ListDeviceQueueItemsResponse)) {
    throw new Error('Expected argument of type api.ListDeviceQueueItemsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_ListDeviceQueueItemsResponse(buffer_arg) {
  return as_external_api_deviceQueue_pb.ListDeviceQueueItemsResponse.deserializeBinary(new Uint8Array(buffer_arg));
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


// DeviceQueueService is the service managing the downlink data queue.
var DeviceQueueServiceService = exports.DeviceQueueServiceService = {
  // Enqueue adds the given item to the device-queue.
  enqueue: {
    path: '/api.DeviceQueueService/Enqueue',
    requestStream: false,
    responseStream: false,
    requestType: as_external_api_deviceQueue_pb.EnqueueDeviceQueueItemRequest,
    responseType: as_external_api_deviceQueue_pb.EnqueueDeviceQueueItemResponse,
    requestSerialize: serialize_api_EnqueueDeviceQueueItemRequest,
    requestDeserialize: deserialize_api_EnqueueDeviceQueueItemRequest,
    responseSerialize: serialize_api_EnqueueDeviceQueueItemResponse,
    responseDeserialize: deserialize_api_EnqueueDeviceQueueItemResponse,
  },
  // Flush flushes the downlink device-queue.
  flush: {
    path: '/api.DeviceQueueService/Flush',
    requestStream: false,
    responseStream: false,
    requestType: as_external_api_deviceQueue_pb.FlushDeviceQueueRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_api_FlushDeviceQueueRequest,
    requestDeserialize: deserialize_api_FlushDeviceQueueRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // List lists the items in the device-queue.
  list: {
    path: '/api.DeviceQueueService/List',
    requestStream: false,
    responseStream: false,
    requestType: as_external_api_deviceQueue_pb.ListDeviceQueueItemsRequest,
    responseType: as_external_api_deviceQueue_pb.ListDeviceQueueItemsResponse,
    requestSerialize: serialize_api_ListDeviceQueueItemsRequest,
    requestDeserialize: deserialize_api_ListDeviceQueueItemsRequest,
    responseSerialize: serialize_api_ListDeviceQueueItemsResponse,
    responseDeserialize: deserialize_api_ListDeviceQueueItemsResponse,
  },
};

exports.DeviceQueueServiceClient = grpc.makeGenericClientConstructor(DeviceQueueServiceService);
