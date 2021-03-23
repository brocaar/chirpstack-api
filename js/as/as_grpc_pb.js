// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var as_as_pb = require('../as/as_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var common_common_pb = require('../common/common_pb.js');
var gw_gw_pb = require('../gw/gw_pb.js');

function serialize_as_HandleDownlinkACKRequest(arg) {
  if (!(arg instanceof as_as_pb.HandleDownlinkACKRequest)) {
    throw new Error('Expected argument of type as.HandleDownlinkACKRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_as_HandleDownlinkACKRequest(buffer_arg) {
  return as_as_pb.HandleDownlinkACKRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_as_HandleErrorRequest(arg) {
  if (!(arg instanceof as_as_pb.HandleErrorRequest)) {
    throw new Error('Expected argument of type as.HandleErrorRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_as_HandleErrorRequest(buffer_arg) {
  return as_as_pb.HandleErrorRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_as_HandleGatewayStatsRequest(arg) {
  if (!(arg instanceof as_as_pb.HandleGatewayStatsRequest)) {
    throw new Error('Expected argument of type as.HandleGatewayStatsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_as_HandleGatewayStatsRequest(buffer_arg) {
  return as_as_pb.HandleGatewayStatsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_as_HandleProprietaryUplinkRequest(arg) {
  if (!(arg instanceof as_as_pb.HandleProprietaryUplinkRequest)) {
    throw new Error('Expected argument of type as.HandleProprietaryUplinkRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_as_HandleProprietaryUplinkRequest(buffer_arg) {
  return as_as_pb.HandleProprietaryUplinkRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_as_HandleTxAckRequest(arg) {
  if (!(arg instanceof as_as_pb.HandleTxAckRequest)) {
    throw new Error('Expected argument of type as.HandleTxAckRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_as_HandleTxAckRequest(buffer_arg) {
  return as_as_pb.HandleTxAckRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_as_HandleUplinkDataRequest(arg) {
  if (!(arg instanceof as_as_pb.HandleUplinkDataRequest)) {
    throw new Error('Expected argument of type as.HandleUplinkDataRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_as_HandleUplinkDataRequest(buffer_arg) {
  return as_as_pb.HandleUplinkDataRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_as_ReEncryptDeviceQueueItemsRequest(arg) {
  if (!(arg instanceof as_as_pb.ReEncryptDeviceQueueItemsRequest)) {
    throw new Error('Expected argument of type as.ReEncryptDeviceQueueItemsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_as_ReEncryptDeviceQueueItemsRequest(buffer_arg) {
  return as_as_pb.ReEncryptDeviceQueueItemsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_as_ReEncryptDeviceQueueItemsResponse(arg) {
  if (!(arg instanceof as_as_pb.ReEncryptDeviceQueueItemsResponse)) {
    throw new Error('Expected argument of type as.ReEncryptDeviceQueueItemsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_as_ReEncryptDeviceQueueItemsResponse(buffer_arg) {
  return as_as_pb.ReEncryptDeviceQueueItemsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_as_SetDeviceLocationRequest(arg) {
  if (!(arg instanceof as_as_pb.SetDeviceLocationRequest)) {
    throw new Error('Expected argument of type as.SetDeviceLocationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_as_SetDeviceLocationRequest(buffer_arg) {
  return as_as_pb.SetDeviceLocationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_as_SetDeviceStatusRequest(arg) {
  if (!(arg instanceof as_as_pb.SetDeviceStatusRequest)) {
    throw new Error('Expected argument of type as.SetDeviceStatusRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_as_SetDeviceStatusRequest(buffer_arg) {
  return as_as_pb.SetDeviceStatusRequest.deserializeBinary(new Uint8Array(buffer_arg));
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


// ApplicationServerService is the service providing the application-server interface.
var ApplicationServerServiceService = exports.ApplicationServerServiceService = {
  // HandleUplinkData handles uplink data received from an end-device.
  handleUplinkData: {
    path: '/as.ApplicationServerService/HandleUplinkData',
    requestStream: false,
    responseStream: false,
    requestType: as_as_pb.HandleUplinkDataRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_as_HandleUplinkDataRequest,
    requestDeserialize: deserialize_as_HandleUplinkDataRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // HandleProprietaryUplink handles proprietary uplink payloads.
  handleProprietaryUplink: {
    path: '/as.ApplicationServerService/HandleProprietaryUplink',
    requestStream: false,
    responseStream: false,
    requestType: as_as_pb.HandleProprietaryUplinkRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_as_HandleProprietaryUplinkRequest,
    requestDeserialize: deserialize_as_HandleProprietaryUplinkRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // HandleError handles an error message.
  handleError: {
    path: '/as.ApplicationServerService/HandleError',
    requestStream: false,
    responseStream: false,
    requestType: as_as_pb.HandleErrorRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_as_HandleErrorRequest,
    requestDeserialize: deserialize_as_HandleErrorRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // HandleDownlinkACK handles a downlink ACK or nACK response.
  handleDownlinkACK: {
    path: '/as.ApplicationServerService/HandleDownlinkACK',
    requestStream: false,
    responseStream: false,
    requestType: as_as_pb.HandleDownlinkACKRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_as_HandleDownlinkACKRequest,
    requestDeserialize: deserialize_as_HandleDownlinkACKRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // HandleGatewayStats handles the given gateway stats.
  handleGatewayStats: {
    path: '/as.ApplicationServerService/HandleGatewayStats',
    requestStream: false,
    responseStream: false,
    requestType: as_as_pb.HandleGatewayStatsRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_as_HandleGatewayStatsRequest,
    requestDeserialize: deserialize_as_HandleGatewayStatsRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // HandleTXACK handles the TX acknowledgement.
  handleTxAck: {
    path: '/as.ApplicationServerService/HandleTxAck',
    requestStream: false,
    responseStream: false,
    requestType: as_as_pb.HandleTxAckRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_as_HandleTxAckRequest,
    requestDeserialize: deserialize_as_HandleTxAckRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // SetDeviceStatus updates the device-status for a device.
  setDeviceStatus: {
    path: '/as.ApplicationServerService/SetDeviceStatus',
    requestStream: false,
    responseStream: false,
    requestType: as_as_pb.SetDeviceStatusRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_as_SetDeviceStatusRequest,
    requestDeserialize: deserialize_as_SetDeviceStatusRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // SetDeviceLocation updates the device-location for a device.
  setDeviceLocation: {
    path: '/as.ApplicationServerService/SetDeviceLocation',
    requestStream: false,
    responseStream: false,
    requestType: as_as_pb.SetDeviceLocationRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_as_SetDeviceLocationRequest,
    requestDeserialize: deserialize_as_SetDeviceLocationRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // ReEncryptDeviceQueueItems requests the application-server to re-encrypt
  // the given payload items using the new parameters. This request is
  // for example triggered when the associated frame-counter of a downlink
  // payload will be used by a mac-layer only payload, e.g. when the NS has
  // mac-commands (or ACKs) to send to the device and combining this with
  // an application-layer payload would exceed the max. payload size.
  // Note there is no requirement that the number of returned items must be
  // equal to the number of requested items.
  reEncryptDeviceQueueItems: {
    path: '/as.ApplicationServerService/ReEncryptDeviceQueueItems',
    requestStream: false,
    responseStream: false,
    requestType: as_as_pb.ReEncryptDeviceQueueItemsRequest,
    responseType: as_as_pb.ReEncryptDeviceQueueItemsResponse,
    requestSerialize: serialize_as_ReEncryptDeviceQueueItemsRequest,
    requestDeserialize: deserialize_as_ReEncryptDeviceQueueItemsRequest,
    responseSerialize: serialize_as_ReEncryptDeviceQueueItemsResponse,
    responseDeserialize: deserialize_as_ReEncryptDeviceQueueItemsResponse,
  },
};

exports.ApplicationServerServiceClient = grpc.makeGenericClientConstructor(ApplicationServerServiceService);
