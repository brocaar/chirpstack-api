// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var as_external_api_device_pb = require('../../../as/external/api/device_pb.js');
var google_api_annotations_pb = require('../../../google/api/annotations_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var common_common_pb = require('../../../common/common_pb.js');
var as_external_api_frameLog_pb = require('../../../as/external/api/frameLog_pb.js');

function serialize_api_ActivateDeviceRequest(arg) {
  if (!(arg instanceof as_external_api_device_pb.ActivateDeviceRequest)) {
    throw new Error('Expected argument of type api.ActivateDeviceRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_ActivateDeviceRequest(buffer_arg) {
  return as_external_api_device_pb.ActivateDeviceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_CreateDeviceKeysRequest(arg) {
  if (!(arg instanceof as_external_api_device_pb.CreateDeviceKeysRequest)) {
    throw new Error('Expected argument of type api.CreateDeviceKeysRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_CreateDeviceKeysRequest(buffer_arg) {
  return as_external_api_device_pb.CreateDeviceKeysRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_CreateDeviceRequest(arg) {
  if (!(arg instanceof as_external_api_device_pb.CreateDeviceRequest)) {
    throw new Error('Expected argument of type api.CreateDeviceRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_CreateDeviceRequest(buffer_arg) {
  return as_external_api_device_pb.CreateDeviceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_DeactivateDeviceRequest(arg) {
  if (!(arg instanceof as_external_api_device_pb.DeactivateDeviceRequest)) {
    throw new Error('Expected argument of type api.DeactivateDeviceRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_DeactivateDeviceRequest(buffer_arg) {
  return as_external_api_device_pb.DeactivateDeviceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_DeleteDeviceKeysRequest(arg) {
  if (!(arg instanceof as_external_api_device_pb.DeleteDeviceKeysRequest)) {
    throw new Error('Expected argument of type api.DeleteDeviceKeysRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_DeleteDeviceKeysRequest(buffer_arg) {
  return as_external_api_device_pb.DeleteDeviceKeysRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_DeleteDeviceRequest(arg) {
  if (!(arg instanceof as_external_api_device_pb.DeleteDeviceRequest)) {
    throw new Error('Expected argument of type api.DeleteDeviceRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_DeleteDeviceRequest(buffer_arg) {
  return as_external_api_device_pb.DeleteDeviceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_GetDeviceActivationRequest(arg) {
  if (!(arg instanceof as_external_api_device_pb.GetDeviceActivationRequest)) {
    throw new Error('Expected argument of type api.GetDeviceActivationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_GetDeviceActivationRequest(buffer_arg) {
  return as_external_api_device_pb.GetDeviceActivationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_GetDeviceActivationResponse(arg) {
  if (!(arg instanceof as_external_api_device_pb.GetDeviceActivationResponse)) {
    throw new Error('Expected argument of type api.GetDeviceActivationResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_GetDeviceActivationResponse(buffer_arg) {
  return as_external_api_device_pb.GetDeviceActivationResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_GetDeviceKeysRequest(arg) {
  if (!(arg instanceof as_external_api_device_pb.GetDeviceKeysRequest)) {
    throw new Error('Expected argument of type api.GetDeviceKeysRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_GetDeviceKeysRequest(buffer_arg) {
  return as_external_api_device_pb.GetDeviceKeysRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_GetDeviceKeysResponse(arg) {
  if (!(arg instanceof as_external_api_device_pb.GetDeviceKeysResponse)) {
    throw new Error('Expected argument of type api.GetDeviceKeysResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_GetDeviceKeysResponse(buffer_arg) {
  return as_external_api_device_pb.GetDeviceKeysResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_GetDeviceRequest(arg) {
  if (!(arg instanceof as_external_api_device_pb.GetDeviceRequest)) {
    throw new Error('Expected argument of type api.GetDeviceRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_GetDeviceRequest(buffer_arg) {
  return as_external_api_device_pb.GetDeviceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_GetDeviceResponse(arg) {
  if (!(arg instanceof as_external_api_device_pb.GetDeviceResponse)) {
    throw new Error('Expected argument of type api.GetDeviceResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_GetDeviceResponse(buffer_arg) {
  return as_external_api_device_pb.GetDeviceResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_GetRandomDevAddrRequest(arg) {
  if (!(arg instanceof as_external_api_device_pb.GetRandomDevAddrRequest)) {
    throw new Error('Expected argument of type api.GetRandomDevAddrRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_GetRandomDevAddrRequest(buffer_arg) {
  return as_external_api_device_pb.GetRandomDevAddrRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_GetRandomDevAddrResponse(arg) {
  if (!(arg instanceof as_external_api_device_pb.GetRandomDevAddrResponse)) {
    throw new Error('Expected argument of type api.GetRandomDevAddrResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_GetRandomDevAddrResponse(buffer_arg) {
  return as_external_api_device_pb.GetRandomDevAddrResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_ListDeviceRequest(arg) {
  if (!(arg instanceof as_external_api_device_pb.ListDeviceRequest)) {
    throw new Error('Expected argument of type api.ListDeviceRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_ListDeviceRequest(buffer_arg) {
  return as_external_api_device_pb.ListDeviceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_ListDeviceResponse(arg) {
  if (!(arg instanceof as_external_api_device_pb.ListDeviceResponse)) {
    throw new Error('Expected argument of type api.ListDeviceResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_ListDeviceResponse(buffer_arg) {
  return as_external_api_device_pb.ListDeviceResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_StreamDeviceEventLogsRequest(arg) {
  if (!(arg instanceof as_external_api_device_pb.StreamDeviceEventLogsRequest)) {
    throw new Error('Expected argument of type api.StreamDeviceEventLogsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_StreamDeviceEventLogsRequest(buffer_arg) {
  return as_external_api_device_pb.StreamDeviceEventLogsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_StreamDeviceEventLogsResponse(arg) {
  if (!(arg instanceof as_external_api_device_pb.StreamDeviceEventLogsResponse)) {
    throw new Error('Expected argument of type api.StreamDeviceEventLogsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_StreamDeviceEventLogsResponse(buffer_arg) {
  return as_external_api_device_pb.StreamDeviceEventLogsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_StreamDeviceFrameLogsRequest(arg) {
  if (!(arg instanceof as_external_api_device_pb.StreamDeviceFrameLogsRequest)) {
    throw new Error('Expected argument of type api.StreamDeviceFrameLogsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_StreamDeviceFrameLogsRequest(buffer_arg) {
  return as_external_api_device_pb.StreamDeviceFrameLogsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_StreamDeviceFrameLogsResponse(arg) {
  if (!(arg instanceof as_external_api_device_pb.StreamDeviceFrameLogsResponse)) {
    throw new Error('Expected argument of type api.StreamDeviceFrameLogsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_StreamDeviceFrameLogsResponse(buffer_arg) {
  return as_external_api_device_pb.StreamDeviceFrameLogsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_UpdateDeviceKeysRequest(arg) {
  if (!(arg instanceof as_external_api_device_pb.UpdateDeviceKeysRequest)) {
    throw new Error('Expected argument of type api.UpdateDeviceKeysRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_UpdateDeviceKeysRequest(buffer_arg) {
  return as_external_api_device_pb.UpdateDeviceKeysRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_UpdateDeviceRequest(arg) {
  if (!(arg instanceof as_external_api_device_pb.UpdateDeviceRequest)) {
    throw new Error('Expected argument of type api.UpdateDeviceRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_UpdateDeviceRequest(buffer_arg) {
  return as_external_api_device_pb.UpdateDeviceRequest.deserializeBinary(new Uint8Array(buffer_arg));
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


// DeviceService is the service managing the devices.
var DeviceServiceService = exports.DeviceServiceService = {
  // Create creates the given device.
create: {
    path: '/api.DeviceService/Create',
    requestStream: false,
    responseStream: false,
    requestType: as_external_api_device_pb.CreateDeviceRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_api_CreateDeviceRequest,
    requestDeserialize: deserialize_api_CreateDeviceRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Get returns the device matching the given DevEUI.
get: {
    path: '/api.DeviceService/Get',
    requestStream: false,
    responseStream: false,
    requestType: as_external_api_device_pb.GetDeviceRequest,
    responseType: as_external_api_device_pb.GetDeviceResponse,
    requestSerialize: serialize_api_GetDeviceRequest,
    requestDeserialize: deserialize_api_GetDeviceRequest,
    responseSerialize: serialize_api_GetDeviceResponse,
    responseDeserialize: deserialize_api_GetDeviceResponse,
  },
  // List returns the available devices.
list: {
    path: '/api.DeviceService/List',
    requestStream: false,
    responseStream: false,
    requestType: as_external_api_device_pb.ListDeviceRequest,
    responseType: as_external_api_device_pb.ListDeviceResponse,
    requestSerialize: serialize_api_ListDeviceRequest,
    requestDeserialize: deserialize_api_ListDeviceRequest,
    responseSerialize: serialize_api_ListDeviceResponse,
    responseDeserialize: deserialize_api_ListDeviceResponse,
  },
  // Delete deletes the device matching the given DevEUI.
delete: {
    path: '/api.DeviceService/Delete',
    requestStream: false,
    responseStream: false,
    requestType: as_external_api_device_pb.DeleteDeviceRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_api_DeleteDeviceRequest,
    requestDeserialize: deserialize_api_DeleteDeviceRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Update updates the device matching the given DevEUI.
update: {
    path: '/api.DeviceService/Update',
    requestStream: false,
    responseStream: false,
    requestType: as_external_api_device_pb.UpdateDeviceRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_api_UpdateDeviceRequest,
    requestDeserialize: deserialize_api_UpdateDeviceRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // CreateKeys creates the given device-keys.
createKeys: {
    path: '/api.DeviceService/CreateKeys',
    requestStream: false,
    responseStream: false,
    requestType: as_external_api_device_pb.CreateDeviceKeysRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_api_CreateDeviceKeysRequest,
    requestDeserialize: deserialize_api_CreateDeviceKeysRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // GetKeys returns the device-keys for the given DevEUI.
getKeys: {
    path: '/api.DeviceService/GetKeys',
    requestStream: false,
    responseStream: false,
    requestType: as_external_api_device_pb.GetDeviceKeysRequest,
    responseType: as_external_api_device_pb.GetDeviceKeysResponse,
    requestSerialize: serialize_api_GetDeviceKeysRequest,
    requestDeserialize: deserialize_api_GetDeviceKeysRequest,
    responseSerialize: serialize_api_GetDeviceKeysResponse,
    responseDeserialize: deserialize_api_GetDeviceKeysResponse,
  },
  // UpdateKeys updates the device-keys.
updateKeys: {
    path: '/api.DeviceService/UpdateKeys',
    requestStream: false,
    responseStream: false,
    requestType: as_external_api_device_pb.UpdateDeviceKeysRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_api_UpdateDeviceKeysRequest,
    requestDeserialize: deserialize_api_UpdateDeviceKeysRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // DeleteKeys deletes the device-keys for the given DevEUI.
deleteKeys: {
    path: '/api.DeviceService/DeleteKeys',
    requestStream: false,
    responseStream: false,
    requestType: as_external_api_device_pb.DeleteDeviceKeysRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_api_DeleteDeviceKeysRequest,
    requestDeserialize: deserialize_api_DeleteDeviceKeysRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Activate (re)activates the device with the given parameters (for ABP or for importing OTAA activations).
activate: {
    path: '/api.DeviceService/Activate',
    requestStream: false,
    responseStream: false,
    requestType: as_external_api_device_pb.ActivateDeviceRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_api_ActivateDeviceRequest,
    requestDeserialize: deserialize_api_ActivateDeviceRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Deactivate de-activates the device.
deactivate: {
    path: '/api.DeviceService/Deactivate',
    requestStream: false,
    responseStream: false,
    requestType: as_external_api_device_pb.DeactivateDeviceRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_api_DeactivateDeviceRequest,
    requestDeserialize: deserialize_api_DeactivateDeviceRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // GetActivation returns the current activation details of the device (OTAA and ABP).
getActivation: {
    path: '/api.DeviceService/GetActivation',
    requestStream: false,
    responseStream: false,
    requestType: as_external_api_device_pb.GetDeviceActivationRequest,
    responseType: as_external_api_device_pb.GetDeviceActivationResponse,
    requestSerialize: serialize_api_GetDeviceActivationRequest,
    requestDeserialize: deserialize_api_GetDeviceActivationRequest,
    responseSerialize: serialize_api_GetDeviceActivationResponse,
    responseDeserialize: deserialize_api_GetDeviceActivationResponse,
  },
  // GetRandomDevAddr returns a random DevAddr taking the NwkID prefix into account.
getRandomDevAddr: {
    path: '/api.DeviceService/GetRandomDevAddr',
    requestStream: false,
    responseStream: false,
    requestType: as_external_api_device_pb.GetRandomDevAddrRequest,
    responseType: as_external_api_device_pb.GetRandomDevAddrResponse,
    requestSerialize: serialize_api_GetRandomDevAddrRequest,
    requestDeserialize: deserialize_api_GetRandomDevAddrRequest,
    responseSerialize: serialize_api_GetRandomDevAddrResponse,
    responseDeserialize: deserialize_api_GetRandomDevAddrResponse,
  },
  // StreamFrameLogs streams the uplink and downlink frame-logs for the given DevEUI.
//   * These are the raw LoRaWAN frames and this endpoint is intended for debugging only.
//   * This endpoint does not work from a web-browser.
streamFrameLogs: {
    path: '/api.DeviceService/StreamFrameLogs',
    requestStream: false,
    responseStream: true,
    requestType: as_external_api_device_pb.StreamDeviceFrameLogsRequest,
    responseType: as_external_api_device_pb.StreamDeviceFrameLogsResponse,
    requestSerialize: serialize_api_StreamDeviceFrameLogsRequest,
    requestDeserialize: deserialize_api_StreamDeviceFrameLogsRequest,
    responseSerialize: serialize_api_StreamDeviceFrameLogsResponse,
    responseDeserialize: deserialize_api_StreamDeviceFrameLogsResponse,
  },
  // StreamEventLogs stream the device events (uplink payloads, ACKs, joins, errors).
//   * This endpoint is intended for debugging only.
//   * This endpoint does not work from a web-browser.
streamEventLogs: {
    path: '/api.DeviceService/StreamEventLogs',
    requestStream: false,
    responseStream: true,
    requestType: as_external_api_device_pb.StreamDeviceEventLogsRequest,
    responseType: as_external_api_device_pb.StreamDeviceEventLogsResponse,
    requestSerialize: serialize_api_StreamDeviceEventLogsRequest,
    requestDeserialize: deserialize_api_StreamDeviceEventLogsRequest,
    responseSerialize: serialize_api_StreamDeviceEventLogsResponse,
    responseDeserialize: deserialize_api_StreamDeviceEventLogsResponse,
  },
};

exports.DeviceServiceClient = grpc.makeGenericClientConstructor(DeviceServiceService);
