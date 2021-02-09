// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var ns_ns_pb = require('../ns/ns_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var google_protobuf_duration_pb = require('google-protobuf/google/protobuf/duration_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var common_common_pb = require('../common/common_pb.js');
var gw_gw_pb = require('../gw/gw_pb.js');
var ns_profiles_pb = require('../ns/profiles_pb.js');

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ns_ActivateDeviceRequest(arg) {
  if (!(arg instanceof ns_ns_pb.ActivateDeviceRequest)) {
    throw new Error('Expected argument of type ns.ActivateDeviceRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ns_ActivateDeviceRequest(buffer_arg) {
  return ns_ns_pb.ActivateDeviceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ns_AddDeviceToMulticastGroupRequest(arg) {
  if (!(arg instanceof ns_ns_pb.AddDeviceToMulticastGroupRequest)) {
    throw new Error('Expected argument of type ns.AddDeviceToMulticastGroupRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ns_AddDeviceToMulticastGroupRequest(buffer_arg) {
  return ns_ns_pb.AddDeviceToMulticastGroupRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ns_CreateDeviceProfileRequest(arg) {
  if (!(arg instanceof ns_ns_pb.CreateDeviceProfileRequest)) {
    throw new Error('Expected argument of type ns.CreateDeviceProfileRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ns_CreateDeviceProfileRequest(buffer_arg) {
  return ns_ns_pb.CreateDeviceProfileRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ns_CreateDeviceProfileResponse(arg) {
  if (!(arg instanceof ns_ns_pb.CreateDeviceProfileResponse)) {
    throw new Error('Expected argument of type ns.CreateDeviceProfileResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ns_CreateDeviceProfileResponse(buffer_arg) {
  return ns_ns_pb.CreateDeviceProfileResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ns_CreateDeviceQueueItemRequest(arg) {
  if (!(arg instanceof ns_ns_pb.CreateDeviceQueueItemRequest)) {
    throw new Error('Expected argument of type ns.CreateDeviceQueueItemRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ns_CreateDeviceQueueItemRequest(buffer_arg) {
  return ns_ns_pb.CreateDeviceQueueItemRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ns_CreateDeviceRequest(arg) {
  if (!(arg instanceof ns_ns_pb.CreateDeviceRequest)) {
    throw new Error('Expected argument of type ns.CreateDeviceRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ns_CreateDeviceRequest(buffer_arg) {
  return ns_ns_pb.CreateDeviceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ns_CreateGatewayProfileRequest(arg) {
  if (!(arg instanceof ns_ns_pb.CreateGatewayProfileRequest)) {
    throw new Error('Expected argument of type ns.CreateGatewayProfileRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ns_CreateGatewayProfileRequest(buffer_arg) {
  return ns_ns_pb.CreateGatewayProfileRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ns_CreateGatewayProfileResponse(arg) {
  if (!(arg instanceof ns_ns_pb.CreateGatewayProfileResponse)) {
    throw new Error('Expected argument of type ns.CreateGatewayProfileResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ns_CreateGatewayProfileResponse(buffer_arg) {
  return ns_ns_pb.CreateGatewayProfileResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ns_CreateGatewayRequest(arg) {
  if (!(arg instanceof ns_ns_pb.CreateGatewayRequest)) {
    throw new Error('Expected argument of type ns.CreateGatewayRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ns_CreateGatewayRequest(buffer_arg) {
  return ns_ns_pb.CreateGatewayRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ns_CreateMACCommandQueueItemRequest(arg) {
  if (!(arg instanceof ns_ns_pb.CreateMACCommandQueueItemRequest)) {
    throw new Error('Expected argument of type ns.CreateMACCommandQueueItemRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ns_CreateMACCommandQueueItemRequest(buffer_arg) {
  return ns_ns_pb.CreateMACCommandQueueItemRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ns_CreateMulticastGroupRequest(arg) {
  if (!(arg instanceof ns_ns_pb.CreateMulticastGroupRequest)) {
    throw new Error('Expected argument of type ns.CreateMulticastGroupRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ns_CreateMulticastGroupRequest(buffer_arg) {
  return ns_ns_pb.CreateMulticastGroupRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ns_CreateMulticastGroupResponse(arg) {
  if (!(arg instanceof ns_ns_pb.CreateMulticastGroupResponse)) {
    throw new Error('Expected argument of type ns.CreateMulticastGroupResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ns_CreateMulticastGroupResponse(buffer_arg) {
  return ns_ns_pb.CreateMulticastGroupResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ns_CreateRoutingProfileRequest(arg) {
  if (!(arg instanceof ns_ns_pb.CreateRoutingProfileRequest)) {
    throw new Error('Expected argument of type ns.CreateRoutingProfileRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ns_CreateRoutingProfileRequest(buffer_arg) {
  return ns_ns_pb.CreateRoutingProfileRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ns_CreateRoutingProfileResponse(arg) {
  if (!(arg instanceof ns_ns_pb.CreateRoutingProfileResponse)) {
    throw new Error('Expected argument of type ns.CreateRoutingProfileResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ns_CreateRoutingProfileResponse(buffer_arg) {
  return ns_ns_pb.CreateRoutingProfileResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ns_CreateServiceProfileRequest(arg) {
  if (!(arg instanceof ns_ns_pb.CreateServiceProfileRequest)) {
    throw new Error('Expected argument of type ns.CreateServiceProfileRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ns_CreateServiceProfileRequest(buffer_arg) {
  return ns_ns_pb.CreateServiceProfileRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ns_CreateServiceProfileResponse(arg) {
  if (!(arg instanceof ns_ns_pb.CreateServiceProfileResponse)) {
    throw new Error('Expected argument of type ns.CreateServiceProfileResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ns_CreateServiceProfileResponse(buffer_arg) {
  return ns_ns_pb.CreateServiceProfileResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ns_DeactivateDeviceRequest(arg) {
  if (!(arg instanceof ns_ns_pb.DeactivateDeviceRequest)) {
    throw new Error('Expected argument of type ns.DeactivateDeviceRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ns_DeactivateDeviceRequest(buffer_arg) {
  return ns_ns_pb.DeactivateDeviceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ns_DeleteDeviceProfileRequest(arg) {
  if (!(arg instanceof ns_ns_pb.DeleteDeviceProfileRequest)) {
    throw new Error('Expected argument of type ns.DeleteDeviceProfileRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ns_DeleteDeviceProfileRequest(buffer_arg) {
  return ns_ns_pb.DeleteDeviceProfileRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ns_DeleteDeviceRequest(arg) {
  if (!(arg instanceof ns_ns_pb.DeleteDeviceRequest)) {
    throw new Error('Expected argument of type ns.DeleteDeviceRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ns_DeleteDeviceRequest(buffer_arg) {
  return ns_ns_pb.DeleteDeviceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ns_DeleteGatewayProfileRequest(arg) {
  if (!(arg instanceof ns_ns_pb.DeleteGatewayProfileRequest)) {
    throw new Error('Expected argument of type ns.DeleteGatewayProfileRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ns_DeleteGatewayProfileRequest(buffer_arg) {
  return ns_ns_pb.DeleteGatewayProfileRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ns_DeleteGatewayRequest(arg) {
  if (!(arg instanceof ns_ns_pb.DeleteGatewayRequest)) {
    throw new Error('Expected argument of type ns.DeleteGatewayRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ns_DeleteGatewayRequest(buffer_arg) {
  return ns_ns_pb.DeleteGatewayRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ns_DeleteMulticastGroupRequest(arg) {
  if (!(arg instanceof ns_ns_pb.DeleteMulticastGroupRequest)) {
    throw new Error('Expected argument of type ns.DeleteMulticastGroupRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ns_DeleteMulticastGroupRequest(buffer_arg) {
  return ns_ns_pb.DeleteMulticastGroupRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ns_DeleteRoutingProfileRequest(arg) {
  if (!(arg instanceof ns_ns_pb.DeleteRoutingProfileRequest)) {
    throw new Error('Expected argument of type ns.DeleteRoutingProfileRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ns_DeleteRoutingProfileRequest(buffer_arg) {
  return ns_ns_pb.DeleteRoutingProfileRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ns_DeleteServiceProfileRequest(arg) {
  if (!(arg instanceof ns_ns_pb.DeleteServiceProfileRequest)) {
    throw new Error('Expected argument of type ns.DeleteServiceProfileRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ns_DeleteServiceProfileRequest(buffer_arg) {
  return ns_ns_pb.DeleteServiceProfileRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ns_EnqueueMulticastQueueItemRequest(arg) {
  if (!(arg instanceof ns_ns_pb.EnqueueMulticastQueueItemRequest)) {
    throw new Error('Expected argument of type ns.EnqueueMulticastQueueItemRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ns_EnqueueMulticastQueueItemRequest(buffer_arg) {
  return ns_ns_pb.EnqueueMulticastQueueItemRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ns_FlushDeviceQueueForDevEUIRequest(arg) {
  if (!(arg instanceof ns_ns_pb.FlushDeviceQueueForDevEUIRequest)) {
    throw new Error('Expected argument of type ns.FlushDeviceQueueForDevEUIRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ns_FlushDeviceQueueForDevEUIRequest(buffer_arg) {
  return ns_ns_pb.FlushDeviceQueueForDevEUIRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ns_FlushMulticastQueueForMulticastGroupRequest(arg) {
  if (!(arg instanceof ns_ns_pb.FlushMulticastQueueForMulticastGroupRequest)) {
    throw new Error('Expected argument of type ns.FlushMulticastQueueForMulticastGroupRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ns_FlushMulticastQueueForMulticastGroupRequest(buffer_arg) {
  return ns_ns_pb.FlushMulticastQueueForMulticastGroupRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ns_GenerateGatewayClientCertificateRequest(arg) {
  if (!(arg instanceof ns_ns_pb.GenerateGatewayClientCertificateRequest)) {
    throw new Error('Expected argument of type ns.GenerateGatewayClientCertificateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ns_GenerateGatewayClientCertificateRequest(buffer_arg) {
  return ns_ns_pb.GenerateGatewayClientCertificateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ns_GenerateGatewayClientCertificateResponse(arg) {
  if (!(arg instanceof ns_ns_pb.GenerateGatewayClientCertificateResponse)) {
    throw new Error('Expected argument of type ns.GenerateGatewayClientCertificateResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ns_GenerateGatewayClientCertificateResponse(buffer_arg) {
  return ns_ns_pb.GenerateGatewayClientCertificateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ns_GetADRAlgorithmsResponse(arg) {
  if (!(arg instanceof ns_ns_pb.GetADRAlgorithmsResponse)) {
    throw new Error('Expected argument of type ns.GetADRAlgorithmsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ns_GetADRAlgorithmsResponse(buffer_arg) {
  return ns_ns_pb.GetADRAlgorithmsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ns_GetDeviceActivationRequest(arg) {
  if (!(arg instanceof ns_ns_pb.GetDeviceActivationRequest)) {
    throw new Error('Expected argument of type ns.GetDeviceActivationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ns_GetDeviceActivationRequest(buffer_arg) {
  return ns_ns_pb.GetDeviceActivationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ns_GetDeviceActivationResponse(arg) {
  if (!(arg instanceof ns_ns_pb.GetDeviceActivationResponse)) {
    throw new Error('Expected argument of type ns.GetDeviceActivationResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ns_GetDeviceActivationResponse(buffer_arg) {
  return ns_ns_pb.GetDeviceActivationResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ns_GetDeviceProfileRequest(arg) {
  if (!(arg instanceof ns_ns_pb.GetDeviceProfileRequest)) {
    throw new Error('Expected argument of type ns.GetDeviceProfileRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ns_GetDeviceProfileRequest(buffer_arg) {
  return ns_ns_pb.GetDeviceProfileRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ns_GetDeviceProfileResponse(arg) {
  if (!(arg instanceof ns_ns_pb.GetDeviceProfileResponse)) {
    throw new Error('Expected argument of type ns.GetDeviceProfileResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ns_GetDeviceProfileResponse(buffer_arg) {
  return ns_ns_pb.GetDeviceProfileResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ns_GetDeviceQueueItemsForDevEUIRequest(arg) {
  if (!(arg instanceof ns_ns_pb.GetDeviceQueueItemsForDevEUIRequest)) {
    throw new Error('Expected argument of type ns.GetDeviceQueueItemsForDevEUIRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ns_GetDeviceQueueItemsForDevEUIRequest(buffer_arg) {
  return ns_ns_pb.GetDeviceQueueItemsForDevEUIRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ns_GetDeviceQueueItemsForDevEUIResponse(arg) {
  if (!(arg instanceof ns_ns_pb.GetDeviceQueueItemsForDevEUIResponse)) {
    throw new Error('Expected argument of type ns.GetDeviceQueueItemsForDevEUIResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ns_GetDeviceQueueItemsForDevEUIResponse(buffer_arg) {
  return ns_ns_pb.GetDeviceQueueItemsForDevEUIResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ns_GetDeviceRequest(arg) {
  if (!(arg instanceof ns_ns_pb.GetDeviceRequest)) {
    throw new Error('Expected argument of type ns.GetDeviceRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ns_GetDeviceRequest(buffer_arg) {
  return ns_ns_pb.GetDeviceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ns_GetDeviceResponse(arg) {
  if (!(arg instanceof ns_ns_pb.GetDeviceResponse)) {
    throw new Error('Expected argument of type ns.GetDeviceResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ns_GetDeviceResponse(buffer_arg) {
  return ns_ns_pb.GetDeviceResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ns_GetGatewayProfileRequest(arg) {
  if (!(arg instanceof ns_ns_pb.GetGatewayProfileRequest)) {
    throw new Error('Expected argument of type ns.GetGatewayProfileRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ns_GetGatewayProfileRequest(buffer_arg) {
  return ns_ns_pb.GetGatewayProfileRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ns_GetGatewayProfileResponse(arg) {
  if (!(arg instanceof ns_ns_pb.GetGatewayProfileResponse)) {
    throw new Error('Expected argument of type ns.GetGatewayProfileResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ns_GetGatewayProfileResponse(buffer_arg) {
  return ns_ns_pb.GetGatewayProfileResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ns_GetGatewayRequest(arg) {
  if (!(arg instanceof ns_ns_pb.GetGatewayRequest)) {
    throw new Error('Expected argument of type ns.GetGatewayRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ns_GetGatewayRequest(buffer_arg) {
  return ns_ns_pb.GetGatewayRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ns_GetGatewayResponse(arg) {
  if (!(arg instanceof ns_ns_pb.GetGatewayResponse)) {
    throw new Error('Expected argument of type ns.GetGatewayResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ns_GetGatewayResponse(buffer_arg) {
  return ns_ns_pb.GetGatewayResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ns_GetGatewayStatsRequest(arg) {
  if (!(arg instanceof ns_ns_pb.GetGatewayStatsRequest)) {
    throw new Error('Expected argument of type ns.GetGatewayStatsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ns_GetGatewayStatsRequest(buffer_arg) {
  return ns_ns_pb.GetGatewayStatsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ns_GetGatewayStatsResponse(arg) {
  if (!(arg instanceof ns_ns_pb.GetGatewayStatsResponse)) {
    throw new Error('Expected argument of type ns.GetGatewayStatsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ns_GetGatewayStatsResponse(buffer_arg) {
  return ns_ns_pb.GetGatewayStatsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ns_GetMulticastGroupRequest(arg) {
  if (!(arg instanceof ns_ns_pb.GetMulticastGroupRequest)) {
    throw new Error('Expected argument of type ns.GetMulticastGroupRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ns_GetMulticastGroupRequest(buffer_arg) {
  return ns_ns_pb.GetMulticastGroupRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ns_GetMulticastGroupResponse(arg) {
  if (!(arg instanceof ns_ns_pb.GetMulticastGroupResponse)) {
    throw new Error('Expected argument of type ns.GetMulticastGroupResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ns_GetMulticastGroupResponse(buffer_arg) {
  return ns_ns_pb.GetMulticastGroupResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ns_GetMulticastQueueItemsForMulticastGroupRequest(arg) {
  if (!(arg instanceof ns_ns_pb.GetMulticastQueueItemsForMulticastGroupRequest)) {
    throw new Error('Expected argument of type ns.GetMulticastQueueItemsForMulticastGroupRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ns_GetMulticastQueueItemsForMulticastGroupRequest(buffer_arg) {
  return ns_ns_pb.GetMulticastQueueItemsForMulticastGroupRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ns_GetMulticastQueueItemsForMulticastGroupResponse(arg) {
  if (!(arg instanceof ns_ns_pb.GetMulticastQueueItemsForMulticastGroupResponse)) {
    throw new Error('Expected argument of type ns.GetMulticastQueueItemsForMulticastGroupResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ns_GetMulticastQueueItemsForMulticastGroupResponse(buffer_arg) {
  return ns_ns_pb.GetMulticastQueueItemsForMulticastGroupResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ns_GetNextDownlinkFCntForDevEUIRequest(arg) {
  if (!(arg instanceof ns_ns_pb.GetNextDownlinkFCntForDevEUIRequest)) {
    throw new Error('Expected argument of type ns.GetNextDownlinkFCntForDevEUIRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ns_GetNextDownlinkFCntForDevEUIRequest(buffer_arg) {
  return ns_ns_pb.GetNextDownlinkFCntForDevEUIRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ns_GetNextDownlinkFCntForDevEUIResponse(arg) {
  if (!(arg instanceof ns_ns_pb.GetNextDownlinkFCntForDevEUIResponse)) {
    throw new Error('Expected argument of type ns.GetNextDownlinkFCntForDevEUIResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ns_GetNextDownlinkFCntForDevEUIResponse(buffer_arg) {
  return ns_ns_pb.GetNextDownlinkFCntForDevEUIResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ns_GetRandomDevAddrResponse(arg) {
  if (!(arg instanceof ns_ns_pb.GetRandomDevAddrResponse)) {
    throw new Error('Expected argument of type ns.GetRandomDevAddrResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ns_GetRandomDevAddrResponse(buffer_arg) {
  return ns_ns_pb.GetRandomDevAddrResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ns_GetRoutingProfileRequest(arg) {
  if (!(arg instanceof ns_ns_pb.GetRoutingProfileRequest)) {
    throw new Error('Expected argument of type ns.GetRoutingProfileRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ns_GetRoutingProfileRequest(buffer_arg) {
  return ns_ns_pb.GetRoutingProfileRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ns_GetRoutingProfileResponse(arg) {
  if (!(arg instanceof ns_ns_pb.GetRoutingProfileResponse)) {
    throw new Error('Expected argument of type ns.GetRoutingProfileResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ns_GetRoutingProfileResponse(buffer_arg) {
  return ns_ns_pb.GetRoutingProfileResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ns_GetServiceProfileRequest(arg) {
  if (!(arg instanceof ns_ns_pb.GetServiceProfileRequest)) {
    throw new Error('Expected argument of type ns.GetServiceProfileRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ns_GetServiceProfileRequest(buffer_arg) {
  return ns_ns_pb.GetServiceProfileRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ns_GetServiceProfileResponse(arg) {
  if (!(arg instanceof ns_ns_pb.GetServiceProfileResponse)) {
    throw new Error('Expected argument of type ns.GetServiceProfileResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ns_GetServiceProfileResponse(buffer_arg) {
  return ns_ns_pb.GetServiceProfileResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ns_GetVersionResponse(arg) {
  if (!(arg instanceof ns_ns_pb.GetVersionResponse)) {
    throw new Error('Expected argument of type ns.GetVersionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ns_GetVersionResponse(buffer_arg) {
  return ns_ns_pb.GetVersionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ns_RemoveDeviceFromMulticastGroupRequest(arg) {
  if (!(arg instanceof ns_ns_pb.RemoveDeviceFromMulticastGroupRequest)) {
    throw new Error('Expected argument of type ns.RemoveDeviceFromMulticastGroupRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ns_RemoveDeviceFromMulticastGroupRequest(buffer_arg) {
  return ns_ns_pb.RemoveDeviceFromMulticastGroupRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ns_SendProprietaryPayloadRequest(arg) {
  if (!(arg instanceof ns_ns_pb.SendProprietaryPayloadRequest)) {
    throw new Error('Expected argument of type ns.SendProprietaryPayloadRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ns_SendProprietaryPayloadRequest(buffer_arg) {
  return ns_ns_pb.SendProprietaryPayloadRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ns_StreamFrameLogsForDeviceRequest(arg) {
  if (!(arg instanceof ns_ns_pb.StreamFrameLogsForDeviceRequest)) {
    throw new Error('Expected argument of type ns.StreamFrameLogsForDeviceRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ns_StreamFrameLogsForDeviceRequest(buffer_arg) {
  return ns_ns_pb.StreamFrameLogsForDeviceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ns_StreamFrameLogsForDeviceResponse(arg) {
  if (!(arg instanceof ns_ns_pb.StreamFrameLogsForDeviceResponse)) {
    throw new Error('Expected argument of type ns.StreamFrameLogsForDeviceResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ns_StreamFrameLogsForDeviceResponse(buffer_arg) {
  return ns_ns_pb.StreamFrameLogsForDeviceResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ns_StreamFrameLogsForGatewayRequest(arg) {
  if (!(arg instanceof ns_ns_pb.StreamFrameLogsForGatewayRequest)) {
    throw new Error('Expected argument of type ns.StreamFrameLogsForGatewayRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ns_StreamFrameLogsForGatewayRequest(buffer_arg) {
  return ns_ns_pb.StreamFrameLogsForGatewayRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ns_StreamFrameLogsForGatewayResponse(arg) {
  if (!(arg instanceof ns_ns_pb.StreamFrameLogsForGatewayResponse)) {
    throw new Error('Expected argument of type ns.StreamFrameLogsForGatewayResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ns_StreamFrameLogsForGatewayResponse(buffer_arg) {
  return ns_ns_pb.StreamFrameLogsForGatewayResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ns_UpdateDeviceProfileRequest(arg) {
  if (!(arg instanceof ns_ns_pb.UpdateDeviceProfileRequest)) {
    throw new Error('Expected argument of type ns.UpdateDeviceProfileRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ns_UpdateDeviceProfileRequest(buffer_arg) {
  return ns_ns_pb.UpdateDeviceProfileRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ns_UpdateDeviceRequest(arg) {
  if (!(arg instanceof ns_ns_pb.UpdateDeviceRequest)) {
    throw new Error('Expected argument of type ns.UpdateDeviceRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ns_UpdateDeviceRequest(buffer_arg) {
  return ns_ns_pb.UpdateDeviceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ns_UpdateGatewayProfileRequest(arg) {
  if (!(arg instanceof ns_ns_pb.UpdateGatewayProfileRequest)) {
    throw new Error('Expected argument of type ns.UpdateGatewayProfileRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ns_UpdateGatewayProfileRequest(buffer_arg) {
  return ns_ns_pb.UpdateGatewayProfileRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ns_UpdateGatewayRequest(arg) {
  if (!(arg instanceof ns_ns_pb.UpdateGatewayRequest)) {
    throw new Error('Expected argument of type ns.UpdateGatewayRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ns_UpdateGatewayRequest(buffer_arg) {
  return ns_ns_pb.UpdateGatewayRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ns_UpdateMulticastGroupRequest(arg) {
  if (!(arg instanceof ns_ns_pb.UpdateMulticastGroupRequest)) {
    throw new Error('Expected argument of type ns.UpdateMulticastGroupRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ns_UpdateMulticastGroupRequest(buffer_arg) {
  return ns_ns_pb.UpdateMulticastGroupRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ns_UpdateRoutingProfileRequest(arg) {
  if (!(arg instanceof ns_ns_pb.UpdateRoutingProfileRequest)) {
    throw new Error('Expected argument of type ns.UpdateRoutingProfileRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ns_UpdateRoutingProfileRequest(buffer_arg) {
  return ns_ns_pb.UpdateRoutingProfileRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ns_UpdateServiceProfileRequest(arg) {
  if (!(arg instanceof ns_ns_pb.UpdateServiceProfileRequest)) {
    throw new Error('Expected argument of type ns.UpdateServiceProfileRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ns_UpdateServiceProfileRequest(buffer_arg) {
  return ns_ns_pb.UpdateServiceProfileRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


// NetworkServerService provides the network-server API methods.
var NetworkServerServiceService = exports.NetworkServerServiceService = {
  // CreateServiceProfile creates the given service-profile.
  createServiceProfile: {
    path: '/ns.NetworkServerService/CreateServiceProfile',
    requestStream: false,
    responseStream: false,
    requestType: ns_ns_pb.CreateServiceProfileRequest,
    responseType: ns_ns_pb.CreateServiceProfileResponse,
    requestSerialize: serialize_ns_CreateServiceProfileRequest,
    requestDeserialize: deserialize_ns_CreateServiceProfileRequest,
    responseSerialize: serialize_ns_CreateServiceProfileResponse,
    responseDeserialize: deserialize_ns_CreateServiceProfileResponse,
  },
  // GetServiceProfile returns the service-profile matching the given id.
  getServiceProfile: {
    path: '/ns.NetworkServerService/GetServiceProfile',
    requestStream: false,
    responseStream: false,
    requestType: ns_ns_pb.GetServiceProfileRequest,
    responseType: ns_ns_pb.GetServiceProfileResponse,
    requestSerialize: serialize_ns_GetServiceProfileRequest,
    requestDeserialize: deserialize_ns_GetServiceProfileRequest,
    responseSerialize: serialize_ns_GetServiceProfileResponse,
    responseDeserialize: deserialize_ns_GetServiceProfileResponse,
  },
  // UpdateServiceProfile updates the given service-profile.
  updateServiceProfile: {
    path: '/ns.NetworkServerService/UpdateServiceProfile',
    requestStream: false,
    responseStream: false,
    requestType: ns_ns_pb.UpdateServiceProfileRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_ns_UpdateServiceProfileRequest,
    requestDeserialize: deserialize_ns_UpdateServiceProfileRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // DeleteServiceProfile deletes the service-profile matching the given id.
  deleteServiceProfile: {
    path: '/ns.NetworkServerService/DeleteServiceProfile',
    requestStream: false,
    responseStream: false,
    requestType: ns_ns_pb.DeleteServiceProfileRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_ns_DeleteServiceProfileRequest,
    requestDeserialize: deserialize_ns_DeleteServiceProfileRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // CreateRoutingProfile creates the given routing-profile.
  createRoutingProfile: {
    path: '/ns.NetworkServerService/CreateRoutingProfile',
    requestStream: false,
    responseStream: false,
    requestType: ns_ns_pb.CreateRoutingProfileRequest,
    responseType: ns_ns_pb.CreateRoutingProfileResponse,
    requestSerialize: serialize_ns_CreateRoutingProfileRequest,
    requestDeserialize: deserialize_ns_CreateRoutingProfileRequest,
    responseSerialize: serialize_ns_CreateRoutingProfileResponse,
    responseDeserialize: deserialize_ns_CreateRoutingProfileResponse,
  },
  // GetRoutingProfile returns the routing-profile matching the given id.
  getRoutingProfile: {
    path: '/ns.NetworkServerService/GetRoutingProfile',
    requestStream: false,
    responseStream: false,
    requestType: ns_ns_pb.GetRoutingProfileRequest,
    responseType: ns_ns_pb.GetRoutingProfileResponse,
    requestSerialize: serialize_ns_GetRoutingProfileRequest,
    requestDeserialize: deserialize_ns_GetRoutingProfileRequest,
    responseSerialize: serialize_ns_GetRoutingProfileResponse,
    responseDeserialize: deserialize_ns_GetRoutingProfileResponse,
  },
  // UpdateRoutingProfile updates the given routing-profile.
  updateRoutingProfile: {
    path: '/ns.NetworkServerService/UpdateRoutingProfile',
    requestStream: false,
    responseStream: false,
    requestType: ns_ns_pb.UpdateRoutingProfileRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_ns_UpdateRoutingProfileRequest,
    requestDeserialize: deserialize_ns_UpdateRoutingProfileRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // DeleteRoutingProfile deletes the routing-profile matching the given id.
  deleteRoutingProfile: {
    path: '/ns.NetworkServerService/DeleteRoutingProfile',
    requestStream: false,
    responseStream: false,
    requestType: ns_ns_pb.DeleteRoutingProfileRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_ns_DeleteRoutingProfileRequest,
    requestDeserialize: deserialize_ns_DeleteRoutingProfileRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // CreateDeviceProfile creates the given device-profile.
  createDeviceProfile: {
    path: '/ns.NetworkServerService/CreateDeviceProfile',
    requestStream: false,
    responseStream: false,
    requestType: ns_ns_pb.CreateDeviceProfileRequest,
    responseType: ns_ns_pb.CreateDeviceProfileResponse,
    requestSerialize: serialize_ns_CreateDeviceProfileRequest,
    requestDeserialize: deserialize_ns_CreateDeviceProfileRequest,
    responseSerialize: serialize_ns_CreateDeviceProfileResponse,
    responseDeserialize: deserialize_ns_CreateDeviceProfileResponse,
  },
  // GetDeviceProfile returns the device-profile matching the given id.
  getDeviceProfile: {
    path: '/ns.NetworkServerService/GetDeviceProfile',
    requestStream: false,
    responseStream: false,
    requestType: ns_ns_pb.GetDeviceProfileRequest,
    responseType: ns_ns_pb.GetDeviceProfileResponse,
    requestSerialize: serialize_ns_GetDeviceProfileRequest,
    requestDeserialize: deserialize_ns_GetDeviceProfileRequest,
    responseSerialize: serialize_ns_GetDeviceProfileResponse,
    responseDeserialize: deserialize_ns_GetDeviceProfileResponse,
  },
  // UpdateDeviceProfile updates the given device-profile.
  updateDeviceProfile: {
    path: '/ns.NetworkServerService/UpdateDeviceProfile',
    requestStream: false,
    responseStream: false,
    requestType: ns_ns_pb.UpdateDeviceProfileRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_ns_UpdateDeviceProfileRequest,
    requestDeserialize: deserialize_ns_UpdateDeviceProfileRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // DeleteDeviceProfile deletes the device-profile matching the given id.
  deleteDeviceProfile: {
    path: '/ns.NetworkServerService/DeleteDeviceProfile',
    requestStream: false,
    responseStream: false,
    requestType: ns_ns_pb.DeleteDeviceProfileRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_ns_DeleteDeviceProfileRequest,
    requestDeserialize: deserialize_ns_DeleteDeviceProfileRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // CreateDevice creates the given device.
  createDevice: {
    path: '/ns.NetworkServerService/CreateDevice',
    requestStream: false,
    responseStream: false,
    requestType: ns_ns_pb.CreateDeviceRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_ns_CreateDeviceRequest,
    requestDeserialize: deserialize_ns_CreateDeviceRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // GetDevice returns the device matching the given DevEUI.
  getDevice: {
    path: '/ns.NetworkServerService/GetDevice',
    requestStream: false,
    responseStream: false,
    requestType: ns_ns_pb.GetDeviceRequest,
    responseType: ns_ns_pb.GetDeviceResponse,
    requestSerialize: serialize_ns_GetDeviceRequest,
    requestDeserialize: deserialize_ns_GetDeviceRequest,
    responseSerialize: serialize_ns_GetDeviceResponse,
    responseDeserialize: deserialize_ns_GetDeviceResponse,
  },
  // UpdateDevice updates the given device.
  updateDevice: {
    path: '/ns.NetworkServerService/UpdateDevice',
    requestStream: false,
    responseStream: false,
    requestType: ns_ns_pb.UpdateDeviceRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_ns_UpdateDeviceRequest,
    requestDeserialize: deserialize_ns_UpdateDeviceRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // DeleteDevice deletes the device matching the given DevEUI.
  deleteDevice: {
    path: '/ns.NetworkServerService/DeleteDevice',
    requestStream: false,
    responseStream: false,
    requestType: ns_ns_pb.DeleteDeviceRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_ns_DeleteDeviceRequest,
    requestDeserialize: deserialize_ns_DeleteDeviceRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // ActivateDevice activates a device (ABP).
  activateDevice: {
    path: '/ns.NetworkServerService/ActivateDevice',
    requestStream: false,
    responseStream: false,
    requestType: ns_ns_pb.ActivateDeviceRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_ns_ActivateDeviceRequest,
    requestDeserialize: deserialize_ns_ActivateDeviceRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // DeactivateDevice de-activates a device.
  deactivateDevice: {
    path: '/ns.NetworkServerService/DeactivateDevice',
    requestStream: false,
    responseStream: false,
    requestType: ns_ns_pb.DeactivateDeviceRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_ns_DeactivateDeviceRequest,
    requestDeserialize: deserialize_ns_DeactivateDeviceRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // GetDeviceActivation returns the device activation details.
  getDeviceActivation: {
    path: '/ns.NetworkServerService/GetDeviceActivation',
    requestStream: false,
    responseStream: false,
    requestType: ns_ns_pb.GetDeviceActivationRequest,
    responseType: ns_ns_pb.GetDeviceActivationResponse,
    requestSerialize: serialize_ns_GetDeviceActivationRequest,
    requestDeserialize: deserialize_ns_GetDeviceActivationRequest,
    responseSerialize: serialize_ns_GetDeviceActivationResponse,
    responseDeserialize: deserialize_ns_GetDeviceActivationResponse,
  },
  // CreateDeviceQueueItem creates the given device-queue item.
  createDeviceQueueItem: {
    path: '/ns.NetworkServerService/CreateDeviceQueueItem',
    requestStream: false,
    responseStream: false,
    requestType: ns_ns_pb.CreateDeviceQueueItemRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_ns_CreateDeviceQueueItemRequest,
    requestDeserialize: deserialize_ns_CreateDeviceQueueItemRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // FlushDeviceQueueForDevEUI flushes the device-queue for the given DevEUI.
  flushDeviceQueueForDevEUI: {
    path: '/ns.NetworkServerService/FlushDeviceQueueForDevEUI',
    requestStream: false,
    responseStream: false,
    requestType: ns_ns_pb.FlushDeviceQueueForDevEUIRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_ns_FlushDeviceQueueForDevEUIRequest,
    requestDeserialize: deserialize_ns_FlushDeviceQueueForDevEUIRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // GetDeviceQueueItemsForDevEUI returns all device-queue items for the given DevEUI.
  getDeviceQueueItemsForDevEUI: {
    path: '/ns.NetworkServerService/GetDeviceQueueItemsForDevEUI',
    requestStream: false,
    responseStream: false,
    requestType: ns_ns_pb.GetDeviceQueueItemsForDevEUIRequest,
    responseType: ns_ns_pb.GetDeviceQueueItemsForDevEUIResponse,
    requestSerialize: serialize_ns_GetDeviceQueueItemsForDevEUIRequest,
    requestDeserialize: deserialize_ns_GetDeviceQueueItemsForDevEUIRequest,
    responseSerialize: serialize_ns_GetDeviceQueueItemsForDevEUIResponse,
    responseDeserialize: deserialize_ns_GetDeviceQueueItemsForDevEUIResponse,
  },
  // GetNextDownlinkFCntForDevEUI returns the next FCnt that must be used.
  // This also takes device-queue items for the given DevEUI into consideration.
  getNextDownlinkFCntForDevEUI: {
    path: '/ns.NetworkServerService/GetNextDownlinkFCntForDevEUI',
    requestStream: false,
    responseStream: false,
    requestType: ns_ns_pb.GetNextDownlinkFCntForDevEUIRequest,
    responseType: ns_ns_pb.GetNextDownlinkFCntForDevEUIResponse,
    requestSerialize: serialize_ns_GetNextDownlinkFCntForDevEUIRequest,
    requestDeserialize: deserialize_ns_GetNextDownlinkFCntForDevEUIRequest,
    responseSerialize: serialize_ns_GetNextDownlinkFCntForDevEUIResponse,
    responseDeserialize: deserialize_ns_GetNextDownlinkFCntForDevEUIResponse,
  },
  // GetRandomDevAddr returns a random DevAddr taking the NwkID prefix into account.
  getRandomDevAddr: {
    path: '/ns.NetworkServerService/GetRandomDevAddr',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: ns_ns_pb.GetRandomDevAddrResponse,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_ns_GetRandomDevAddrResponse,
    responseDeserialize: deserialize_ns_GetRandomDevAddrResponse,
  },
  // CreateMACCommandQueueItem adds the downlink mac-command to the queue.
  createMACCommandQueueItem: {
    path: '/ns.NetworkServerService/CreateMACCommandQueueItem',
    requestStream: false,
    responseStream: false,
    requestType: ns_ns_pb.CreateMACCommandQueueItemRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_ns_CreateMACCommandQueueItemRequest,
    requestDeserialize: deserialize_ns_CreateMACCommandQueueItemRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // SendProprietaryPayload send a payload using the 'Proprietary' LoRaWAN message-type.
  sendProprietaryPayload: {
    path: '/ns.NetworkServerService/SendProprietaryPayload',
    requestStream: false,
    responseStream: false,
    requestType: ns_ns_pb.SendProprietaryPayloadRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_ns_SendProprietaryPayloadRequest,
    requestDeserialize: deserialize_ns_SendProprietaryPayloadRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // CreateGateway creates the given gateway.
  createGateway: {
    path: '/ns.NetworkServerService/CreateGateway',
    requestStream: false,
    responseStream: false,
    requestType: ns_ns_pb.CreateGatewayRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_ns_CreateGatewayRequest,
    requestDeserialize: deserialize_ns_CreateGatewayRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // GetGateway returns data for a particular gateway.
  getGateway: {
    path: '/ns.NetworkServerService/GetGateway',
    requestStream: false,
    responseStream: false,
    requestType: ns_ns_pb.GetGatewayRequest,
    responseType: ns_ns_pb.GetGatewayResponse,
    requestSerialize: serialize_ns_GetGatewayRequest,
    requestDeserialize: deserialize_ns_GetGatewayRequest,
    responseSerialize: serialize_ns_GetGatewayResponse,
    responseDeserialize: deserialize_ns_GetGatewayResponse,
  },
  // UpdateGateway updates an existing gateway.
  updateGateway: {
    path: '/ns.NetworkServerService/UpdateGateway',
    requestStream: false,
    responseStream: false,
    requestType: ns_ns_pb.UpdateGatewayRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_ns_UpdateGatewayRequest,
    requestDeserialize: deserialize_ns_UpdateGatewayRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // DeleteGateway deletes a gateway.
  deleteGateway: {
    path: '/ns.NetworkServerService/DeleteGateway',
    requestStream: false,
    responseStream: false,
    requestType: ns_ns_pb.DeleteGatewayRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_ns_DeleteGatewayRequest,
    requestDeserialize: deserialize_ns_DeleteGatewayRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // GenerateGatewayClientCertificate returns TLS certificate gateway authentication / authorization.
  // This endpoint can ony be used when ChirpStack Network Server is configured with a gateway
  // CA certificate and key, which is used for signing the TLS certificate. The returned TLS
  // certificate will have the Gateway ID as Common Name.
  generateGatewayClientCertificate: {
    path: '/ns.NetworkServerService/GenerateGatewayClientCertificate',
    requestStream: false,
    responseStream: false,
    requestType: ns_ns_pb.GenerateGatewayClientCertificateRequest,
    responseType: ns_ns_pb.GenerateGatewayClientCertificateResponse,
    requestSerialize: serialize_ns_GenerateGatewayClientCertificateRequest,
    requestDeserialize: deserialize_ns_GenerateGatewayClientCertificateRequest,
    responseSerialize: serialize_ns_GenerateGatewayClientCertificateResponse,
    responseDeserialize: deserialize_ns_GenerateGatewayClientCertificateResponse,
  },
  // CreateGatewayProfile creates the given gateway-profile.
  createGatewayProfile: {
    path: '/ns.NetworkServerService/CreateGatewayProfile',
    requestStream: false,
    responseStream: false,
    requestType: ns_ns_pb.CreateGatewayProfileRequest,
    responseType: ns_ns_pb.CreateGatewayProfileResponse,
    requestSerialize: serialize_ns_CreateGatewayProfileRequest,
    requestDeserialize: deserialize_ns_CreateGatewayProfileRequest,
    responseSerialize: serialize_ns_CreateGatewayProfileResponse,
    responseDeserialize: deserialize_ns_CreateGatewayProfileResponse,
  },
  // GetGatewayProfile returns the gateway-profile given an id.
  getGatewayProfile: {
    path: '/ns.NetworkServerService/GetGatewayProfile',
    requestStream: false,
    responseStream: false,
    requestType: ns_ns_pb.GetGatewayProfileRequest,
    responseType: ns_ns_pb.GetGatewayProfileResponse,
    requestSerialize: serialize_ns_GetGatewayProfileRequest,
    requestDeserialize: deserialize_ns_GetGatewayProfileRequest,
    responseSerialize: serialize_ns_GetGatewayProfileResponse,
    responseDeserialize: deserialize_ns_GetGatewayProfileResponse,
  },
  // UpdateGatewayProfile updates the given gateway-profile.
  updateGatewayProfile: {
    path: '/ns.NetworkServerService/UpdateGatewayProfile',
    requestStream: false,
    responseStream: false,
    requestType: ns_ns_pb.UpdateGatewayProfileRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_ns_UpdateGatewayProfileRequest,
    requestDeserialize: deserialize_ns_UpdateGatewayProfileRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // DeleteGatewayProfile deletes the gateway-profile matching a given id.
  deleteGatewayProfile: {
    path: '/ns.NetworkServerService/DeleteGatewayProfile',
    requestStream: false,
    responseStream: false,
    requestType: ns_ns_pb.DeleteGatewayProfileRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_ns_DeleteGatewayProfileRequest,
    requestDeserialize: deserialize_ns_DeleteGatewayProfileRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // GetGatewayStats returns stats of an existing gateway.
  // Deprecated (stats are forwarded to Application Server API).
  getGatewayStats: {
    path: '/ns.NetworkServerService/GetGatewayStats',
    requestStream: false,
    responseStream: false,
    requestType: ns_ns_pb.GetGatewayStatsRequest,
    responseType: ns_ns_pb.GetGatewayStatsResponse,
    requestSerialize: serialize_ns_GetGatewayStatsRequest,
    requestDeserialize: deserialize_ns_GetGatewayStatsRequest,
    responseSerialize: serialize_ns_GetGatewayStatsResponse,
    responseDeserialize: deserialize_ns_GetGatewayStatsResponse,
  },
  // StreamFrameLogsForGateway returns a stream of frames seen by the given gateway.
  streamFrameLogsForGateway: {
    path: '/ns.NetworkServerService/StreamFrameLogsForGateway',
    requestStream: false,
    responseStream: true,
    requestType: ns_ns_pb.StreamFrameLogsForGatewayRequest,
    responseType: ns_ns_pb.StreamFrameLogsForGatewayResponse,
    requestSerialize: serialize_ns_StreamFrameLogsForGatewayRequest,
    requestDeserialize: deserialize_ns_StreamFrameLogsForGatewayRequest,
    responseSerialize: serialize_ns_StreamFrameLogsForGatewayResponse,
    responseDeserialize: deserialize_ns_StreamFrameLogsForGatewayResponse,
  },
  // StreamFrameLogsForDevice returns a stream of frames seen by the given device.
  streamFrameLogsForDevice: {
    path: '/ns.NetworkServerService/StreamFrameLogsForDevice',
    requestStream: false,
    responseStream: true,
    requestType: ns_ns_pb.StreamFrameLogsForDeviceRequest,
    responseType: ns_ns_pb.StreamFrameLogsForDeviceResponse,
    requestSerialize: serialize_ns_StreamFrameLogsForDeviceRequest,
    requestDeserialize: deserialize_ns_StreamFrameLogsForDeviceRequest,
    responseSerialize: serialize_ns_StreamFrameLogsForDeviceResponse,
    responseDeserialize: deserialize_ns_StreamFrameLogsForDeviceResponse,
  },
  // CreateMulticastGroup creates the given multicast-group.
  createMulticastGroup: {
    path: '/ns.NetworkServerService/CreateMulticastGroup',
    requestStream: false,
    responseStream: false,
    requestType: ns_ns_pb.CreateMulticastGroupRequest,
    responseType: ns_ns_pb.CreateMulticastGroupResponse,
    requestSerialize: serialize_ns_CreateMulticastGroupRequest,
    requestDeserialize: deserialize_ns_CreateMulticastGroupRequest,
    responseSerialize: serialize_ns_CreateMulticastGroupResponse,
    responseDeserialize: deserialize_ns_CreateMulticastGroupResponse,
  },
  // GetMulticastGroup returns the multicast-group given an id.
  getMulticastGroup: {
    path: '/ns.NetworkServerService/GetMulticastGroup',
    requestStream: false,
    responseStream: false,
    requestType: ns_ns_pb.GetMulticastGroupRequest,
    responseType: ns_ns_pb.GetMulticastGroupResponse,
    requestSerialize: serialize_ns_GetMulticastGroupRequest,
    requestDeserialize: deserialize_ns_GetMulticastGroupRequest,
    responseSerialize: serialize_ns_GetMulticastGroupResponse,
    responseDeserialize: deserialize_ns_GetMulticastGroupResponse,
  },
  // UpdateMulticastGroup updates the given multicast-group.
  updateMulticastGroup: {
    path: '/ns.NetworkServerService/UpdateMulticastGroup',
    requestStream: false,
    responseStream: false,
    requestType: ns_ns_pb.UpdateMulticastGroupRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_ns_UpdateMulticastGroupRequest,
    requestDeserialize: deserialize_ns_UpdateMulticastGroupRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // DeleteMulticastGroup deletes a multicast-group given an id.
  deleteMulticastGroup: {
    path: '/ns.NetworkServerService/DeleteMulticastGroup',
    requestStream: false,
    responseStream: false,
    requestType: ns_ns_pb.DeleteMulticastGroupRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_ns_DeleteMulticastGroupRequest,
    requestDeserialize: deserialize_ns_DeleteMulticastGroupRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // AddDeviceToMulticastGroup adds the given device to the given multicast-group.
  addDeviceToMulticastGroup: {
    path: '/ns.NetworkServerService/AddDeviceToMulticastGroup',
    requestStream: false,
    responseStream: false,
    requestType: ns_ns_pb.AddDeviceToMulticastGroupRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_ns_AddDeviceToMulticastGroupRequest,
    requestDeserialize: deserialize_ns_AddDeviceToMulticastGroupRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // RemoveDeviceFromMulticastGroup removes the given device from the given multicast-group.
  removeDeviceFromMulticastGroup: {
    path: '/ns.NetworkServerService/RemoveDeviceFromMulticastGroup',
    requestStream: false,
    responseStream: false,
    requestType: ns_ns_pb.RemoveDeviceFromMulticastGroupRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_ns_RemoveDeviceFromMulticastGroupRequest,
    requestDeserialize: deserialize_ns_RemoveDeviceFromMulticastGroupRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // EnqueueMulticastQueueItem enqueues the given multicast queue-item and
  // increments the frame-counter after enqueueing.
  enqueueMulticastQueueItem: {
    path: '/ns.NetworkServerService/EnqueueMulticastQueueItem',
    requestStream: false,
    responseStream: false,
    requestType: ns_ns_pb.EnqueueMulticastQueueItemRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_ns_EnqueueMulticastQueueItemRequest,
    requestDeserialize: deserialize_ns_EnqueueMulticastQueueItemRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // FlushMulticastQueueForMulticastGroup flushes the multicast device-queue given a multicast-group id.
  flushMulticastQueueForMulticastGroup: {
    path: '/ns.NetworkServerService/FlushMulticastQueueForMulticastGroup',
    requestStream: false,
    responseStream: false,
    requestType: ns_ns_pb.FlushMulticastQueueForMulticastGroupRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_ns_FlushMulticastQueueForMulticastGroupRequest,
    requestDeserialize: deserialize_ns_FlushMulticastQueueForMulticastGroupRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // GetMulticastQueueItemsForMulticastGroup returns the queue-items given a multicast-group id.
  getMulticastQueueItemsForMulticastGroup: {
    path: '/ns.NetworkServerService/GetMulticastQueueItemsForMulticastGroup',
    requestStream: false,
    responseStream: false,
    requestType: ns_ns_pb.GetMulticastQueueItemsForMulticastGroupRequest,
    responseType: ns_ns_pb.GetMulticastQueueItemsForMulticastGroupResponse,
    requestSerialize: serialize_ns_GetMulticastQueueItemsForMulticastGroupRequest,
    requestDeserialize: deserialize_ns_GetMulticastQueueItemsForMulticastGroupRequest,
    responseSerialize: serialize_ns_GetMulticastQueueItemsForMulticastGroupResponse,
    responseDeserialize: deserialize_ns_GetMulticastQueueItemsForMulticastGroupResponse,
  },
  // GetVersion returns the ChirpStack Network Server version.
  getVersion: {
    path: '/ns.NetworkServerService/GetVersion',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: ns_ns_pb.GetVersionResponse,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_ns_GetVersionResponse,
    responseDeserialize: deserialize_ns_GetVersionResponse,
  },
  // GetADRAlgorithms returns the available ADR algorithms.
  getADRAlgorithms: {
    path: '/ns.NetworkServerService/GetADRAlgorithms',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: ns_ns_pb.GetADRAlgorithmsResponse,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_ns_GetADRAlgorithmsResponse,
    responseDeserialize: deserialize_ns_GetADRAlgorithmsResponse,
  },
};

exports.NetworkServerServiceClient = grpc.makeGenericClientConstructor(NetworkServerServiceService);
