// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var nc_nc_pb = require('../nc/nc_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var gw_gw_pb = require('../gw/gw_pb.js');

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nc_HandleDownlinkMetaDataRequest(arg) {
  if (!(arg instanceof nc_nc_pb.HandleDownlinkMetaDataRequest)) {
    throw new Error('Expected argument of type nc.HandleDownlinkMetaDataRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nc_HandleDownlinkMetaDataRequest(buffer_arg) {
  return nc_nc_pb.HandleDownlinkMetaDataRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nc_HandleRejectedUplinkFrameSetRequest(arg) {
  if (!(arg instanceof nc_nc_pb.HandleRejectedUplinkFrameSetRequest)) {
    throw new Error('Expected argument of type nc.HandleRejectedUplinkFrameSetRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nc_HandleRejectedUplinkFrameSetRequest(buffer_arg) {
  return nc_nc_pb.HandleRejectedUplinkFrameSetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nc_HandleUplinkMACCommandRequest(arg) {
  if (!(arg instanceof nc_nc_pb.HandleUplinkMACCommandRequest)) {
    throw new Error('Expected argument of type nc.HandleUplinkMACCommandRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nc_HandleUplinkMACCommandRequest(buffer_arg) {
  return nc_nc_pb.HandleUplinkMACCommandRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_nc_HandleUplinkMetaDataRequest(arg) {
  if (!(arg instanceof nc_nc_pb.HandleUplinkMetaDataRequest)) {
    throw new Error('Expected argument of type nc.HandleUplinkMetaDataRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_nc_HandleUplinkMetaDataRequest(buffer_arg) {
  return nc_nc_pb.HandleUplinkMetaDataRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


// NetworkControllerService is the server to be implemeted by the network-controller.
var NetworkControllerServiceService = exports.NetworkControllerServiceService = {
  // HandleUplinkMetaData handles uplink meta-rata.
handleUplinkMetaData: {
    path: '/nc.NetworkControllerService/HandleUplinkMetaData',
    requestStream: false,
    responseStream: false,
    requestType: nc_nc_pb.HandleUplinkMetaDataRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_nc_HandleUplinkMetaDataRequest,
    requestDeserialize: deserialize_nc_HandleUplinkMetaDataRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // HandleDownlinkMetaData handles downlink meta-data.
handleDownlinkMetaData: {
    path: '/nc.NetworkControllerService/HandleDownlinkMetaData',
    requestStream: false,
    responseStream: false,
    requestType: nc_nc_pb.HandleDownlinkMetaDataRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_nc_HandleDownlinkMetaDataRequest,
    requestDeserialize: deserialize_nc_HandleDownlinkMetaDataRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // HandleUplinkMACCommand handles an uplink mac-command.
// This method will only be called in case the mac-command request was
// enqueued throught the API or when the CID is >= 0x80 (proprietary
// mac-command range).
handleUplinkMACCommand: {
    path: '/nc.NetworkControllerService/HandleUplinkMACCommand',
    requestStream: false,
    responseStream: false,
    requestType: nc_nc_pb.HandleUplinkMACCommandRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_nc_HandleUplinkMACCommandRequest,
    requestDeserialize: deserialize_nc_HandleUplinkMACCommandRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // HandleRejectedUplinkFrameSet handles a rejected uplink.
// And uplink can be rejected in the case the device has not (yet) been
// provisioned, because of invalid frame-counter, MIC, ...
handleRejectedUplinkFrameSet: {
    path: '/nc.NetworkControllerService/HandleRejectedUplinkFrameSet',
    requestStream: false,
    responseStream: false,
    requestType: nc_nc_pb.HandleRejectedUplinkFrameSetRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_nc_HandleRejectedUplinkFrameSetRequest,
    requestDeserialize: deserialize_nc_HandleRejectedUplinkFrameSetRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
};

exports.NetworkControllerServiceClient = grpc.makeGenericClientConstructor(NetworkControllerServiceService);
