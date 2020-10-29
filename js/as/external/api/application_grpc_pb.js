// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var as_external_api_application_pb = require('../../../as/external/api/application_pb.js');
var google_api_annotations_pb = require('../../../google/api/annotations_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');

function serialize_api_CreateAWSSNSIntegrationRequest(arg) {
  if (!(arg instanceof as_external_api_application_pb.CreateAWSSNSIntegrationRequest)) {
    throw new Error('Expected argument of type api.CreateAWSSNSIntegrationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_CreateAWSSNSIntegrationRequest(buffer_arg) {
  return as_external_api_application_pb.CreateAWSSNSIntegrationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_CreateApplicationRequest(arg) {
  if (!(arg instanceof as_external_api_application_pb.CreateApplicationRequest)) {
    throw new Error('Expected argument of type api.CreateApplicationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_CreateApplicationRequest(buffer_arg) {
  return as_external_api_application_pb.CreateApplicationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_CreateApplicationResponse(arg) {
  if (!(arg instanceof as_external_api_application_pb.CreateApplicationResponse)) {
    throw new Error('Expected argument of type api.CreateApplicationResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_CreateApplicationResponse(buffer_arg) {
  return as_external_api_application_pb.CreateApplicationResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_CreateAzureServiceBusIntegrationRequest(arg) {
  if (!(arg instanceof as_external_api_application_pb.CreateAzureServiceBusIntegrationRequest)) {
    throw new Error('Expected argument of type api.CreateAzureServiceBusIntegrationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_CreateAzureServiceBusIntegrationRequest(buffer_arg) {
  return as_external_api_application_pb.CreateAzureServiceBusIntegrationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_CreateGCPPubSubIntegrationRequest(arg) {
  if (!(arg instanceof as_external_api_application_pb.CreateGCPPubSubIntegrationRequest)) {
    throw new Error('Expected argument of type api.CreateGCPPubSubIntegrationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_CreateGCPPubSubIntegrationRequest(buffer_arg) {
  return as_external_api_application_pb.CreateGCPPubSubIntegrationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_CreateHTTPIntegrationRequest(arg) {
  if (!(arg instanceof as_external_api_application_pb.CreateHTTPIntegrationRequest)) {
    throw new Error('Expected argument of type api.CreateHTTPIntegrationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_CreateHTTPIntegrationRequest(buffer_arg) {
  return as_external_api_application_pb.CreateHTTPIntegrationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_CreateInfluxDBIntegrationRequest(arg) {
  if (!(arg instanceof as_external_api_application_pb.CreateInfluxDBIntegrationRequest)) {
    throw new Error('Expected argument of type api.CreateInfluxDBIntegrationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_CreateInfluxDBIntegrationRequest(buffer_arg) {
  return as_external_api_application_pb.CreateInfluxDBIntegrationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_CreateLoRaCloudIntegrationRequest(arg) {
  if (!(arg instanceof as_external_api_application_pb.CreateLoRaCloudIntegrationRequest)) {
    throw new Error('Expected argument of type api.CreateLoRaCloudIntegrationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_CreateLoRaCloudIntegrationRequest(buffer_arg) {
  return as_external_api_application_pb.CreateLoRaCloudIntegrationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_CreateMyDevicesIntegrationRequest(arg) {
  if (!(arg instanceof as_external_api_application_pb.CreateMyDevicesIntegrationRequest)) {
    throw new Error('Expected argument of type api.CreateMyDevicesIntegrationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_CreateMyDevicesIntegrationRequest(buffer_arg) {
  return as_external_api_application_pb.CreateMyDevicesIntegrationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_CreatePilotThingsIntegrationRequest(arg) {
  if (!(arg instanceof as_external_api_application_pb.CreatePilotThingsIntegrationRequest)) {
    throw new Error('Expected argument of type api.CreatePilotThingsIntegrationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_CreatePilotThingsIntegrationRequest(buffer_arg) {
  return as_external_api_application_pb.CreatePilotThingsIntegrationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_CreateThingsBoardIntegrationRequest(arg) {
  if (!(arg instanceof as_external_api_application_pb.CreateThingsBoardIntegrationRequest)) {
    throw new Error('Expected argument of type api.CreateThingsBoardIntegrationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_CreateThingsBoardIntegrationRequest(buffer_arg) {
  return as_external_api_application_pb.CreateThingsBoardIntegrationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_DeleteAWSSNSIntegrationRequest(arg) {
  if (!(arg instanceof as_external_api_application_pb.DeleteAWSSNSIntegrationRequest)) {
    throw new Error('Expected argument of type api.DeleteAWSSNSIntegrationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_DeleteAWSSNSIntegrationRequest(buffer_arg) {
  return as_external_api_application_pb.DeleteAWSSNSIntegrationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_DeleteApplicationRequest(arg) {
  if (!(arg instanceof as_external_api_application_pb.DeleteApplicationRequest)) {
    throw new Error('Expected argument of type api.DeleteApplicationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_DeleteApplicationRequest(buffer_arg) {
  return as_external_api_application_pb.DeleteApplicationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_DeleteAzureServiceBusIntegrationRequest(arg) {
  if (!(arg instanceof as_external_api_application_pb.DeleteAzureServiceBusIntegrationRequest)) {
    throw new Error('Expected argument of type api.DeleteAzureServiceBusIntegrationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_DeleteAzureServiceBusIntegrationRequest(buffer_arg) {
  return as_external_api_application_pb.DeleteAzureServiceBusIntegrationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_DeleteGCPPubSubIntegrationRequest(arg) {
  if (!(arg instanceof as_external_api_application_pb.DeleteGCPPubSubIntegrationRequest)) {
    throw new Error('Expected argument of type api.DeleteGCPPubSubIntegrationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_DeleteGCPPubSubIntegrationRequest(buffer_arg) {
  return as_external_api_application_pb.DeleteGCPPubSubIntegrationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_DeleteHTTPIntegrationRequest(arg) {
  if (!(arg instanceof as_external_api_application_pb.DeleteHTTPIntegrationRequest)) {
    throw new Error('Expected argument of type api.DeleteHTTPIntegrationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_DeleteHTTPIntegrationRequest(buffer_arg) {
  return as_external_api_application_pb.DeleteHTTPIntegrationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_DeleteInfluxDBIntegrationRequest(arg) {
  if (!(arg instanceof as_external_api_application_pb.DeleteInfluxDBIntegrationRequest)) {
    throw new Error('Expected argument of type api.DeleteInfluxDBIntegrationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_DeleteInfluxDBIntegrationRequest(buffer_arg) {
  return as_external_api_application_pb.DeleteInfluxDBIntegrationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_DeleteLoRaCloudIntegrationRequest(arg) {
  if (!(arg instanceof as_external_api_application_pb.DeleteLoRaCloudIntegrationRequest)) {
    throw new Error('Expected argument of type api.DeleteLoRaCloudIntegrationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_DeleteLoRaCloudIntegrationRequest(buffer_arg) {
  return as_external_api_application_pb.DeleteLoRaCloudIntegrationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_DeleteMyDevicesIntegrationRequest(arg) {
  if (!(arg instanceof as_external_api_application_pb.DeleteMyDevicesIntegrationRequest)) {
    throw new Error('Expected argument of type api.DeleteMyDevicesIntegrationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_DeleteMyDevicesIntegrationRequest(buffer_arg) {
  return as_external_api_application_pb.DeleteMyDevicesIntegrationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_DeletePilotThingsIntegrationRequest(arg) {
  if (!(arg instanceof as_external_api_application_pb.DeletePilotThingsIntegrationRequest)) {
    throw new Error('Expected argument of type api.DeletePilotThingsIntegrationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_DeletePilotThingsIntegrationRequest(buffer_arg) {
  return as_external_api_application_pb.DeletePilotThingsIntegrationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_DeleteThingsBoardIntegrationRequest(arg) {
  if (!(arg instanceof as_external_api_application_pb.DeleteThingsBoardIntegrationRequest)) {
    throw new Error('Expected argument of type api.DeleteThingsBoardIntegrationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_DeleteThingsBoardIntegrationRequest(buffer_arg) {
  return as_external_api_application_pb.DeleteThingsBoardIntegrationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_GetAWSSNSIntegrationRequest(arg) {
  if (!(arg instanceof as_external_api_application_pb.GetAWSSNSIntegrationRequest)) {
    throw new Error('Expected argument of type api.GetAWSSNSIntegrationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_GetAWSSNSIntegrationRequest(buffer_arg) {
  return as_external_api_application_pb.GetAWSSNSIntegrationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_GetAWSSNSIntegrationResponse(arg) {
  if (!(arg instanceof as_external_api_application_pb.GetAWSSNSIntegrationResponse)) {
    throw new Error('Expected argument of type api.GetAWSSNSIntegrationResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_GetAWSSNSIntegrationResponse(buffer_arg) {
  return as_external_api_application_pb.GetAWSSNSIntegrationResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_GetApplicationRequest(arg) {
  if (!(arg instanceof as_external_api_application_pb.GetApplicationRequest)) {
    throw new Error('Expected argument of type api.GetApplicationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_GetApplicationRequest(buffer_arg) {
  return as_external_api_application_pb.GetApplicationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_GetApplicationResponse(arg) {
  if (!(arg instanceof as_external_api_application_pb.GetApplicationResponse)) {
    throw new Error('Expected argument of type api.GetApplicationResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_GetApplicationResponse(buffer_arg) {
  return as_external_api_application_pb.GetApplicationResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_GetAzureServiceBusIntegrationRequest(arg) {
  if (!(arg instanceof as_external_api_application_pb.GetAzureServiceBusIntegrationRequest)) {
    throw new Error('Expected argument of type api.GetAzureServiceBusIntegrationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_GetAzureServiceBusIntegrationRequest(buffer_arg) {
  return as_external_api_application_pb.GetAzureServiceBusIntegrationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_GetAzureServiceBusIntegrationResponse(arg) {
  if (!(arg instanceof as_external_api_application_pb.GetAzureServiceBusIntegrationResponse)) {
    throw new Error('Expected argument of type api.GetAzureServiceBusIntegrationResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_GetAzureServiceBusIntegrationResponse(buffer_arg) {
  return as_external_api_application_pb.GetAzureServiceBusIntegrationResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_GetGCPPubSubIntegrationRequest(arg) {
  if (!(arg instanceof as_external_api_application_pb.GetGCPPubSubIntegrationRequest)) {
    throw new Error('Expected argument of type api.GetGCPPubSubIntegrationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_GetGCPPubSubIntegrationRequest(buffer_arg) {
  return as_external_api_application_pb.GetGCPPubSubIntegrationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_GetGCPPubSubIntegrationResponse(arg) {
  if (!(arg instanceof as_external_api_application_pb.GetGCPPubSubIntegrationResponse)) {
    throw new Error('Expected argument of type api.GetGCPPubSubIntegrationResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_GetGCPPubSubIntegrationResponse(buffer_arg) {
  return as_external_api_application_pb.GetGCPPubSubIntegrationResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_GetHTTPIntegrationRequest(arg) {
  if (!(arg instanceof as_external_api_application_pb.GetHTTPIntegrationRequest)) {
    throw new Error('Expected argument of type api.GetHTTPIntegrationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_GetHTTPIntegrationRequest(buffer_arg) {
  return as_external_api_application_pb.GetHTTPIntegrationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_GetHTTPIntegrationResponse(arg) {
  if (!(arg instanceof as_external_api_application_pb.GetHTTPIntegrationResponse)) {
    throw new Error('Expected argument of type api.GetHTTPIntegrationResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_GetHTTPIntegrationResponse(buffer_arg) {
  return as_external_api_application_pb.GetHTTPIntegrationResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_GetInfluxDBIntegrationRequest(arg) {
  if (!(arg instanceof as_external_api_application_pb.GetInfluxDBIntegrationRequest)) {
    throw new Error('Expected argument of type api.GetInfluxDBIntegrationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_GetInfluxDBIntegrationRequest(buffer_arg) {
  return as_external_api_application_pb.GetInfluxDBIntegrationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_GetInfluxDBIntegrationResponse(arg) {
  if (!(arg instanceof as_external_api_application_pb.GetInfluxDBIntegrationResponse)) {
    throw new Error('Expected argument of type api.GetInfluxDBIntegrationResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_GetInfluxDBIntegrationResponse(buffer_arg) {
  return as_external_api_application_pb.GetInfluxDBIntegrationResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_GetLoRaCloudIntegrationRequest(arg) {
  if (!(arg instanceof as_external_api_application_pb.GetLoRaCloudIntegrationRequest)) {
    throw new Error('Expected argument of type api.GetLoRaCloudIntegrationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_GetLoRaCloudIntegrationRequest(buffer_arg) {
  return as_external_api_application_pb.GetLoRaCloudIntegrationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_GetLoRaCloudIntegrationResponse(arg) {
  if (!(arg instanceof as_external_api_application_pb.GetLoRaCloudIntegrationResponse)) {
    throw new Error('Expected argument of type api.GetLoRaCloudIntegrationResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_GetLoRaCloudIntegrationResponse(buffer_arg) {
  return as_external_api_application_pb.GetLoRaCloudIntegrationResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_GetMyDevicesIntegrationRequest(arg) {
  if (!(arg instanceof as_external_api_application_pb.GetMyDevicesIntegrationRequest)) {
    throw new Error('Expected argument of type api.GetMyDevicesIntegrationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_GetMyDevicesIntegrationRequest(buffer_arg) {
  return as_external_api_application_pb.GetMyDevicesIntegrationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_GetMyDevicesIntegrationResponse(arg) {
  if (!(arg instanceof as_external_api_application_pb.GetMyDevicesIntegrationResponse)) {
    throw new Error('Expected argument of type api.GetMyDevicesIntegrationResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_GetMyDevicesIntegrationResponse(buffer_arg) {
  return as_external_api_application_pb.GetMyDevicesIntegrationResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_GetPilotThingsIntegrationRequest(arg) {
  if (!(arg instanceof as_external_api_application_pb.GetPilotThingsIntegrationRequest)) {
    throw new Error('Expected argument of type api.GetPilotThingsIntegrationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_GetPilotThingsIntegrationRequest(buffer_arg) {
  return as_external_api_application_pb.GetPilotThingsIntegrationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_GetPilotThingsIntegrationResponse(arg) {
  if (!(arg instanceof as_external_api_application_pb.GetPilotThingsIntegrationResponse)) {
    throw new Error('Expected argument of type api.GetPilotThingsIntegrationResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_GetPilotThingsIntegrationResponse(buffer_arg) {
  return as_external_api_application_pb.GetPilotThingsIntegrationResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_GetThingsBoardIntegrationRequest(arg) {
  if (!(arg instanceof as_external_api_application_pb.GetThingsBoardIntegrationRequest)) {
    throw new Error('Expected argument of type api.GetThingsBoardIntegrationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_GetThingsBoardIntegrationRequest(buffer_arg) {
  return as_external_api_application_pb.GetThingsBoardIntegrationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_GetThingsBoardIntegrationResponse(arg) {
  if (!(arg instanceof as_external_api_application_pb.GetThingsBoardIntegrationResponse)) {
    throw new Error('Expected argument of type api.GetThingsBoardIntegrationResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_GetThingsBoardIntegrationResponse(buffer_arg) {
  return as_external_api_application_pb.GetThingsBoardIntegrationResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_ListApplicationRequest(arg) {
  if (!(arg instanceof as_external_api_application_pb.ListApplicationRequest)) {
    throw new Error('Expected argument of type api.ListApplicationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_ListApplicationRequest(buffer_arg) {
  return as_external_api_application_pb.ListApplicationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_ListApplicationResponse(arg) {
  if (!(arg instanceof as_external_api_application_pb.ListApplicationResponse)) {
    throw new Error('Expected argument of type api.ListApplicationResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_ListApplicationResponse(buffer_arg) {
  return as_external_api_application_pb.ListApplicationResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_ListIntegrationRequest(arg) {
  if (!(arg instanceof as_external_api_application_pb.ListIntegrationRequest)) {
    throw new Error('Expected argument of type api.ListIntegrationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_ListIntegrationRequest(buffer_arg) {
  return as_external_api_application_pb.ListIntegrationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_ListIntegrationResponse(arg) {
  if (!(arg instanceof as_external_api_application_pb.ListIntegrationResponse)) {
    throw new Error('Expected argument of type api.ListIntegrationResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_ListIntegrationResponse(buffer_arg) {
  return as_external_api_application_pb.ListIntegrationResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_UpdateAWSSNSIntegrationRequest(arg) {
  if (!(arg instanceof as_external_api_application_pb.UpdateAWSSNSIntegrationRequest)) {
    throw new Error('Expected argument of type api.UpdateAWSSNSIntegrationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_UpdateAWSSNSIntegrationRequest(buffer_arg) {
  return as_external_api_application_pb.UpdateAWSSNSIntegrationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_UpdateApplicationRequest(arg) {
  if (!(arg instanceof as_external_api_application_pb.UpdateApplicationRequest)) {
    throw new Error('Expected argument of type api.UpdateApplicationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_UpdateApplicationRequest(buffer_arg) {
  return as_external_api_application_pb.UpdateApplicationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_UpdateAzureServiceBusIntegrationRequest(arg) {
  if (!(arg instanceof as_external_api_application_pb.UpdateAzureServiceBusIntegrationRequest)) {
    throw new Error('Expected argument of type api.UpdateAzureServiceBusIntegrationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_UpdateAzureServiceBusIntegrationRequest(buffer_arg) {
  return as_external_api_application_pb.UpdateAzureServiceBusIntegrationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_UpdateGCPPubSubIntegrationRequest(arg) {
  if (!(arg instanceof as_external_api_application_pb.UpdateGCPPubSubIntegrationRequest)) {
    throw new Error('Expected argument of type api.UpdateGCPPubSubIntegrationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_UpdateGCPPubSubIntegrationRequest(buffer_arg) {
  return as_external_api_application_pb.UpdateGCPPubSubIntegrationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_UpdateHTTPIntegrationRequest(arg) {
  if (!(arg instanceof as_external_api_application_pb.UpdateHTTPIntegrationRequest)) {
    throw new Error('Expected argument of type api.UpdateHTTPIntegrationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_UpdateHTTPIntegrationRequest(buffer_arg) {
  return as_external_api_application_pb.UpdateHTTPIntegrationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_UpdateInfluxDBIntegrationRequest(arg) {
  if (!(arg instanceof as_external_api_application_pb.UpdateInfluxDBIntegrationRequest)) {
    throw new Error('Expected argument of type api.UpdateInfluxDBIntegrationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_UpdateInfluxDBIntegrationRequest(buffer_arg) {
  return as_external_api_application_pb.UpdateInfluxDBIntegrationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_UpdateLoRaCloudIntegrationRequest(arg) {
  if (!(arg instanceof as_external_api_application_pb.UpdateLoRaCloudIntegrationRequest)) {
    throw new Error('Expected argument of type api.UpdateLoRaCloudIntegrationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_UpdateLoRaCloudIntegrationRequest(buffer_arg) {
  return as_external_api_application_pb.UpdateLoRaCloudIntegrationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_UpdateMyDevicesIntegrationRequest(arg) {
  if (!(arg instanceof as_external_api_application_pb.UpdateMyDevicesIntegrationRequest)) {
    throw new Error('Expected argument of type api.UpdateMyDevicesIntegrationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_UpdateMyDevicesIntegrationRequest(buffer_arg) {
  return as_external_api_application_pb.UpdateMyDevicesIntegrationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_UpdatePilotThingsIntegrationRequest(arg) {
  if (!(arg instanceof as_external_api_application_pb.UpdatePilotThingsIntegrationRequest)) {
    throw new Error('Expected argument of type api.UpdatePilotThingsIntegrationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_UpdatePilotThingsIntegrationRequest(buffer_arg) {
  return as_external_api_application_pb.UpdatePilotThingsIntegrationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_api_UpdateThingsBoardIntegrationRequest(arg) {
  if (!(arg instanceof as_external_api_application_pb.UpdateThingsBoardIntegrationRequest)) {
    throw new Error('Expected argument of type api.UpdateThingsBoardIntegrationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_UpdateThingsBoardIntegrationRequest(buffer_arg) {
  return as_external_api_application_pb.UpdateThingsBoardIntegrationRequest.deserializeBinary(new Uint8Array(buffer_arg));
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


// ApplicationService is the service managing applications.
var ApplicationServiceService = exports.ApplicationServiceService = {
  // Create creates the given application.
  create: {
    path: '/api.ApplicationService/Create',
    requestStream: false,
    responseStream: false,
    requestType: as_external_api_application_pb.CreateApplicationRequest,
    responseType: as_external_api_application_pb.CreateApplicationResponse,
    requestSerialize: serialize_api_CreateApplicationRequest,
    requestDeserialize: deserialize_api_CreateApplicationRequest,
    responseSerialize: serialize_api_CreateApplicationResponse,
    responseDeserialize: deserialize_api_CreateApplicationResponse,
  },
  // Get returns the requested application.
  get: {
    path: '/api.ApplicationService/Get',
    requestStream: false,
    responseStream: false,
    requestType: as_external_api_application_pb.GetApplicationRequest,
    responseType: as_external_api_application_pb.GetApplicationResponse,
    requestSerialize: serialize_api_GetApplicationRequest,
    requestDeserialize: deserialize_api_GetApplicationRequest,
    responseSerialize: serialize_api_GetApplicationResponse,
    responseDeserialize: deserialize_api_GetApplicationResponse,
  },
  // Update updates the given application.
  update: {
    path: '/api.ApplicationService/Update',
    requestStream: false,
    responseStream: false,
    requestType: as_external_api_application_pb.UpdateApplicationRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_api_UpdateApplicationRequest,
    requestDeserialize: deserialize_api_UpdateApplicationRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Delete deletes the given application.
  delete: {
    path: '/api.ApplicationService/Delete',
    requestStream: false,
    responseStream: false,
    requestType: as_external_api_application_pb.DeleteApplicationRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_api_DeleteApplicationRequest,
    requestDeserialize: deserialize_api_DeleteApplicationRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // List lists the available applications.
  list: {
    path: '/api.ApplicationService/List',
    requestStream: false,
    responseStream: false,
    requestType: as_external_api_application_pb.ListApplicationRequest,
    responseType: as_external_api_application_pb.ListApplicationResponse,
    requestSerialize: serialize_api_ListApplicationRequest,
    requestDeserialize: deserialize_api_ListApplicationRequest,
    responseSerialize: serialize_api_ListApplicationResponse,
    responseDeserialize: deserialize_api_ListApplicationResponse,
  },
  // CreateHTTPIntegration creates a HTTP application-integration.
  createHTTPIntegration: {
    path: '/api.ApplicationService/CreateHTTPIntegration',
    requestStream: false,
    responseStream: false,
    requestType: as_external_api_application_pb.CreateHTTPIntegrationRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_api_CreateHTTPIntegrationRequest,
    requestDeserialize: deserialize_api_CreateHTTPIntegrationRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // GetHTTPIntegration returns the HTTP application-integration.
  getHTTPIntegration: {
    path: '/api.ApplicationService/GetHTTPIntegration',
    requestStream: false,
    responseStream: false,
    requestType: as_external_api_application_pb.GetHTTPIntegrationRequest,
    responseType: as_external_api_application_pb.GetHTTPIntegrationResponse,
    requestSerialize: serialize_api_GetHTTPIntegrationRequest,
    requestDeserialize: deserialize_api_GetHTTPIntegrationRequest,
    responseSerialize: serialize_api_GetHTTPIntegrationResponse,
    responseDeserialize: deserialize_api_GetHTTPIntegrationResponse,
  },
  // UpdateHTTPIntegration updates the HTTP application-integration.
  updateHTTPIntegration: {
    path: '/api.ApplicationService/UpdateHTTPIntegration',
    requestStream: false,
    responseStream: false,
    requestType: as_external_api_application_pb.UpdateHTTPIntegrationRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_api_UpdateHTTPIntegrationRequest,
    requestDeserialize: deserialize_api_UpdateHTTPIntegrationRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // DeleteIntegration deletes the HTTP application-integration.
  deleteHTTPIntegration: {
    path: '/api.ApplicationService/DeleteHTTPIntegration',
    requestStream: false,
    responseStream: false,
    requestType: as_external_api_application_pb.DeleteHTTPIntegrationRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_api_DeleteHTTPIntegrationRequest,
    requestDeserialize: deserialize_api_DeleteHTTPIntegrationRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // CreateInfluxDBIntegration create an InfluxDB application-integration.
  createInfluxDBIntegration: {
    path: '/api.ApplicationService/CreateInfluxDBIntegration',
    requestStream: false,
    responseStream: false,
    requestType: as_external_api_application_pb.CreateInfluxDBIntegrationRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_api_CreateInfluxDBIntegrationRequest,
    requestDeserialize: deserialize_api_CreateInfluxDBIntegrationRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // GetInfluxDBIntegration returns the InfluxDB application-integration.
  getInfluxDBIntegration: {
    path: '/api.ApplicationService/GetInfluxDBIntegration',
    requestStream: false,
    responseStream: false,
    requestType: as_external_api_application_pb.GetInfluxDBIntegrationRequest,
    responseType: as_external_api_application_pb.GetInfluxDBIntegrationResponse,
    requestSerialize: serialize_api_GetInfluxDBIntegrationRequest,
    requestDeserialize: deserialize_api_GetInfluxDBIntegrationRequest,
    responseSerialize: serialize_api_GetInfluxDBIntegrationResponse,
    responseDeserialize: deserialize_api_GetInfluxDBIntegrationResponse,
  },
  // UpdateInfluxDBIntegration updates the InfluxDB application-integration.
  updateInfluxDBIntegration: {
    path: '/api.ApplicationService/UpdateInfluxDBIntegration',
    requestStream: false,
    responseStream: false,
    requestType: as_external_api_application_pb.UpdateInfluxDBIntegrationRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_api_UpdateInfluxDBIntegrationRequest,
    requestDeserialize: deserialize_api_UpdateInfluxDBIntegrationRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // DeleteInfluxDBIntegration deletes the InfluxDB application-integration.
  deleteInfluxDBIntegration: {
    path: '/api.ApplicationService/DeleteInfluxDBIntegration',
    requestStream: false,
    responseStream: false,
    requestType: as_external_api_application_pb.DeleteInfluxDBIntegrationRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_api_DeleteInfluxDBIntegrationRequest,
    requestDeserialize: deserialize_api_DeleteInfluxDBIntegrationRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // CreateThingsBoardIntegration creates a ThingsBoard application-integration.
  createThingsBoardIntegration: {
    path: '/api.ApplicationService/CreateThingsBoardIntegration',
    requestStream: false,
    responseStream: false,
    requestType: as_external_api_application_pb.CreateThingsBoardIntegrationRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_api_CreateThingsBoardIntegrationRequest,
    requestDeserialize: deserialize_api_CreateThingsBoardIntegrationRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // GetThingsBoardIntegration returns the ThingsBoard application-integration.
  getThingsBoardIntegration: {
    path: '/api.ApplicationService/GetThingsBoardIntegration',
    requestStream: false,
    responseStream: false,
    requestType: as_external_api_application_pb.GetThingsBoardIntegrationRequest,
    responseType: as_external_api_application_pb.GetThingsBoardIntegrationResponse,
    requestSerialize: serialize_api_GetThingsBoardIntegrationRequest,
    requestDeserialize: deserialize_api_GetThingsBoardIntegrationRequest,
    responseSerialize: serialize_api_GetThingsBoardIntegrationResponse,
    responseDeserialize: deserialize_api_GetThingsBoardIntegrationResponse,
  },
  // UpdateThingsBoardIntegration updates the ThingsBoard application-integration.
  updateThingsBoardIntegration: {
    path: '/api.ApplicationService/UpdateThingsBoardIntegration',
    requestStream: false,
    responseStream: false,
    requestType: as_external_api_application_pb.UpdateThingsBoardIntegrationRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_api_UpdateThingsBoardIntegrationRequest,
    requestDeserialize: deserialize_api_UpdateThingsBoardIntegrationRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // DeleteThingsBoardIntegration deletes the ThingsBoard application-integration.
  deleteThingsBoardIntegration: {
    path: '/api.ApplicationService/DeleteThingsBoardIntegration',
    requestStream: false,
    responseStream: false,
    requestType: as_external_api_application_pb.DeleteThingsBoardIntegrationRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_api_DeleteThingsBoardIntegrationRequest,
    requestDeserialize: deserialize_api_DeleteThingsBoardIntegrationRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // CreateMyDevicesIntegration creates a MyDevices application-integration.
  createMyDevicesIntegration: {
    path: '/api.ApplicationService/CreateMyDevicesIntegration',
    requestStream: false,
    responseStream: false,
    requestType: as_external_api_application_pb.CreateMyDevicesIntegrationRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_api_CreateMyDevicesIntegrationRequest,
    requestDeserialize: deserialize_api_CreateMyDevicesIntegrationRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // GetMyDevicesIntegration returns the MyDevices application-integration.
  getMyDevicesIntegration: {
    path: '/api.ApplicationService/GetMyDevicesIntegration',
    requestStream: false,
    responseStream: false,
    requestType: as_external_api_application_pb.GetMyDevicesIntegrationRequest,
    responseType: as_external_api_application_pb.GetMyDevicesIntegrationResponse,
    requestSerialize: serialize_api_GetMyDevicesIntegrationRequest,
    requestDeserialize: deserialize_api_GetMyDevicesIntegrationRequest,
    responseSerialize: serialize_api_GetMyDevicesIntegrationResponse,
    responseDeserialize: deserialize_api_GetMyDevicesIntegrationResponse,
  },
  // UpdateMyDevicesIntegration updates the MyDevices application-integration.
  updateMyDevicesIntegration: {
    path: '/api.ApplicationService/UpdateMyDevicesIntegration',
    requestStream: false,
    responseStream: false,
    requestType: as_external_api_application_pb.UpdateMyDevicesIntegrationRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_api_UpdateMyDevicesIntegrationRequest,
    requestDeserialize: deserialize_api_UpdateMyDevicesIntegrationRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // DeleteMyDevicesIntegration deletes the MyDevices application-integration.
  deleteMyDevicesIntegration: {
    path: '/api.ApplicationService/DeleteMyDevicesIntegration',
    requestStream: false,
    responseStream: false,
    requestType: as_external_api_application_pb.DeleteMyDevicesIntegrationRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_api_DeleteMyDevicesIntegrationRequest,
    requestDeserialize: deserialize_api_DeleteMyDevicesIntegrationRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // CreateLoRaCloudIntegration creates A LoRaCloud application-integration.
  createLoRaCloudIntegration: {
    path: '/api.ApplicationService/CreateLoRaCloudIntegration',
    requestStream: false,
    responseStream: false,
    requestType: as_external_api_application_pb.CreateLoRaCloudIntegrationRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_api_CreateLoRaCloudIntegrationRequest,
    requestDeserialize: deserialize_api_CreateLoRaCloudIntegrationRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // GetLoRaCloudIntegration returns the LoRaCloud application-integration.
  getLoRaCloudIntegration: {
    path: '/api.ApplicationService/GetLoRaCloudIntegration',
    requestStream: false,
    responseStream: false,
    requestType: as_external_api_application_pb.GetLoRaCloudIntegrationRequest,
    responseType: as_external_api_application_pb.GetLoRaCloudIntegrationResponse,
    requestSerialize: serialize_api_GetLoRaCloudIntegrationRequest,
    requestDeserialize: deserialize_api_GetLoRaCloudIntegrationRequest,
    responseSerialize: serialize_api_GetLoRaCloudIntegrationResponse,
    responseDeserialize: deserialize_api_GetLoRaCloudIntegrationResponse,
  },
  // UpdateLoRaCloudIntegration updates the LoRaCloud application-integration.
  updateLoRaCloudIntegration: {
    path: '/api.ApplicationService/UpdateLoRaCloudIntegration',
    requestStream: false,
    responseStream: false,
    requestType: as_external_api_application_pb.UpdateLoRaCloudIntegrationRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_api_UpdateLoRaCloudIntegrationRequest,
    requestDeserialize: deserialize_api_UpdateLoRaCloudIntegrationRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // DeleteLoRaCloudIntegration deletes the LoRaCloud application-integration.
  deleteLoRaCloudIntegration: {
    path: '/api.ApplicationService/DeleteLoRaCloudIntegration',
    requestStream: false,
    responseStream: false,
    requestType: as_external_api_application_pb.DeleteLoRaCloudIntegrationRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_api_DeleteLoRaCloudIntegrationRequest,
    requestDeserialize: deserialize_api_DeleteLoRaCloudIntegrationRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // CreateGCPPubSubIntegration creates a GCP PubSub application-integration.
  createGCPPubSubIntegration: {
    path: '/api.ApplicationService/CreateGCPPubSubIntegration',
    requestStream: false,
    responseStream: false,
    requestType: as_external_api_application_pb.CreateGCPPubSubIntegrationRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_api_CreateGCPPubSubIntegrationRequest,
    requestDeserialize: deserialize_api_CreateGCPPubSubIntegrationRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // GetGCPPubSubIntegration returns the GCP PubSub application-integration.
  getGCPPubSubIntegration: {
    path: '/api.ApplicationService/GetGCPPubSubIntegration',
    requestStream: false,
    responseStream: false,
    requestType: as_external_api_application_pb.GetGCPPubSubIntegrationRequest,
    responseType: as_external_api_application_pb.GetGCPPubSubIntegrationResponse,
    requestSerialize: serialize_api_GetGCPPubSubIntegrationRequest,
    requestDeserialize: deserialize_api_GetGCPPubSubIntegrationRequest,
    responseSerialize: serialize_api_GetGCPPubSubIntegrationResponse,
    responseDeserialize: deserialize_api_GetGCPPubSubIntegrationResponse,
  },
  // UpdateGCPPubSubIntegration updates the GCP PubSub application-integration.
  updateGCPPubSubIntegration: {
    path: '/api.ApplicationService/UpdateGCPPubSubIntegration',
    requestStream: false,
    responseStream: false,
    requestType: as_external_api_application_pb.UpdateGCPPubSubIntegrationRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_api_UpdateGCPPubSubIntegrationRequest,
    requestDeserialize: deserialize_api_UpdateGCPPubSubIntegrationRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // DeleteGCPPubSubIntegration deletes the GCP PubSub application-integration.
  deleteGCPPubSubIntegration: {
    path: '/api.ApplicationService/DeleteGCPPubSubIntegration',
    requestStream: false,
    responseStream: false,
    requestType: as_external_api_application_pb.DeleteGCPPubSubIntegrationRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_api_DeleteGCPPubSubIntegrationRequest,
    requestDeserialize: deserialize_api_DeleteGCPPubSubIntegrationRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // CreateAWSSNSIntegration creates a AWS SNS application-integration.
  createAWSSNSIntegration: {
    path: '/api.ApplicationService/CreateAWSSNSIntegration',
    requestStream: false,
    responseStream: false,
    requestType: as_external_api_application_pb.CreateAWSSNSIntegrationRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_api_CreateAWSSNSIntegrationRequest,
    requestDeserialize: deserialize_api_CreateAWSSNSIntegrationRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // GetAWSSNSIntegration returns the AWS SNS application-integration.
  getAWSSNSIntegration: {
    path: '/api.ApplicationService/GetAWSSNSIntegration',
    requestStream: false,
    responseStream: false,
    requestType: as_external_api_application_pb.GetAWSSNSIntegrationRequest,
    responseType: as_external_api_application_pb.GetAWSSNSIntegrationResponse,
    requestSerialize: serialize_api_GetAWSSNSIntegrationRequest,
    requestDeserialize: deserialize_api_GetAWSSNSIntegrationRequest,
    responseSerialize: serialize_api_GetAWSSNSIntegrationResponse,
    responseDeserialize: deserialize_api_GetAWSSNSIntegrationResponse,
  },
  // UpdateAWSSNSIntegration updates the AWS SNS application-integration.
  updateAWSSNSIntegration: {
    path: '/api.ApplicationService/UpdateAWSSNSIntegration',
    requestStream: false,
    responseStream: false,
    requestType: as_external_api_application_pb.UpdateAWSSNSIntegrationRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_api_UpdateAWSSNSIntegrationRequest,
    requestDeserialize: deserialize_api_UpdateAWSSNSIntegrationRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // DeleteAWSSNSIntegration deletes the AWS SNS application-integration.
  deleteAWSSNSIntegration: {
    path: '/api.ApplicationService/DeleteAWSSNSIntegration',
    requestStream: false,
    responseStream: false,
    requestType: as_external_api_application_pb.DeleteAWSSNSIntegrationRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_api_DeleteAWSSNSIntegrationRequest,
    requestDeserialize: deserialize_api_DeleteAWSSNSIntegrationRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // CreateAzureServiceBusIntegration creates an Azure Service-Bus application-integration.
  createAzureServiceBusIntegration: {
    path: '/api.ApplicationService/CreateAzureServiceBusIntegration',
    requestStream: false,
    responseStream: false,
    requestType: as_external_api_application_pb.CreateAzureServiceBusIntegrationRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_api_CreateAzureServiceBusIntegrationRequest,
    requestDeserialize: deserialize_api_CreateAzureServiceBusIntegrationRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // GetAzureServiceBusIntegration returns the Azure Service-Bus application-integration.
  getAzureServiceBusIntegration: {
    path: '/api.ApplicationService/GetAzureServiceBusIntegration',
    requestStream: false,
    responseStream: false,
    requestType: as_external_api_application_pb.GetAzureServiceBusIntegrationRequest,
    responseType: as_external_api_application_pb.GetAzureServiceBusIntegrationResponse,
    requestSerialize: serialize_api_GetAzureServiceBusIntegrationRequest,
    requestDeserialize: deserialize_api_GetAzureServiceBusIntegrationRequest,
    responseSerialize: serialize_api_GetAzureServiceBusIntegrationResponse,
    responseDeserialize: deserialize_api_GetAzureServiceBusIntegrationResponse,
  },
  // UpdateAzureServiceBusIntegration updates the Azure Service-Bus application-integration.
  updateAzureServiceBusIntegration: {
    path: '/api.ApplicationService/UpdateAzureServiceBusIntegration',
    requestStream: false,
    responseStream: false,
    requestType: as_external_api_application_pb.UpdateAzureServiceBusIntegrationRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_api_UpdateAzureServiceBusIntegrationRequest,
    requestDeserialize: deserialize_api_UpdateAzureServiceBusIntegrationRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // DeleteAzureServiceBusIntegration deletes the Azure Service-Bus application-integration.
  deleteAzureServiceBusIntegration: {
    path: '/api.ApplicationService/DeleteAzureServiceBusIntegration',
    requestStream: false,
    responseStream: false,
    requestType: as_external_api_application_pb.DeleteAzureServiceBusIntegrationRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_api_DeleteAzureServiceBusIntegrationRequest,
    requestDeserialize: deserialize_api_DeleteAzureServiceBusIntegrationRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // CreatePilotThingsIntegration creates an Pilot Things application-integration.
  createPilotThingsIntegration: {
    path: '/api.ApplicationService/CreatePilotThingsIntegration',
    requestStream: false,
    responseStream: false,
    requestType: as_external_api_application_pb.CreatePilotThingsIntegrationRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_api_CreatePilotThingsIntegrationRequest,
    requestDeserialize: deserialize_api_CreatePilotThingsIntegrationRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // GetPilotThingsIntegration returns the Pilot Things application-integration.
  getPilotThingsIntegration: {
    path: '/api.ApplicationService/GetPilotThingsIntegration',
    requestStream: false,
    responseStream: false,
    requestType: as_external_api_application_pb.GetPilotThingsIntegrationRequest,
    responseType: as_external_api_application_pb.GetPilotThingsIntegrationResponse,
    requestSerialize: serialize_api_GetPilotThingsIntegrationRequest,
    requestDeserialize: deserialize_api_GetPilotThingsIntegrationRequest,
    responseSerialize: serialize_api_GetPilotThingsIntegrationResponse,
    responseDeserialize: deserialize_api_GetPilotThingsIntegrationResponse,
  },
  // UpdatePilotThingsIntegration updates the Pilot Things application-integration.
  updatePilotThingsIntegration: {
    path: '/api.ApplicationService/UpdatePilotThingsIntegration',
    requestStream: false,
    responseStream: false,
    requestType: as_external_api_application_pb.UpdatePilotThingsIntegrationRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_api_UpdatePilotThingsIntegrationRequest,
    requestDeserialize: deserialize_api_UpdatePilotThingsIntegrationRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // DeletePilotThingsIntegration deletes the Pilot Things application-integration.
  deletePilotThingsIntegration: {
    path: '/api.ApplicationService/DeletePilotThingsIntegration',
    requestStream: false,
    responseStream: false,
    requestType: as_external_api_application_pb.DeletePilotThingsIntegrationRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_api_DeletePilotThingsIntegrationRequest,
    requestDeserialize: deserialize_api_DeletePilotThingsIntegrationRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // ListIntegrations lists all configured integrations.
  listIntegrations: {
    path: '/api.ApplicationService/ListIntegrations',
    requestStream: false,
    responseStream: false,
    requestType: as_external_api_application_pb.ListIntegrationRequest,
    responseType: as_external_api_application_pb.ListIntegrationResponse,
    requestSerialize: serialize_api_ListIntegrationRequest,
    requestDeserialize: deserialize_api_ListIntegrationRequest,
    responseSerialize: serialize_api_ListIntegrationResponse,
    responseDeserialize: deserialize_api_ListIntegrationResponse,
  },
};

exports.ApplicationServiceClient = grpc.makeGenericClientConstructor(ApplicationServiceService);
