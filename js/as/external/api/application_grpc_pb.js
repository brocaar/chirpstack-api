// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var as_external_api_application_pb = require('../../../as/external/api/application_pb.js');
var google_api_annotations_pb = require('../../../google/api/annotations_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');

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

function serialize_api_CreateThingsBoardIntegrationRequest(arg) {
  if (!(arg instanceof as_external_api_application_pb.CreateThingsBoardIntegrationRequest)) {
    throw new Error('Expected argument of type api.CreateThingsBoardIntegrationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_CreateThingsBoardIntegrationRequest(buffer_arg) {
  return as_external_api_application_pb.CreateThingsBoardIntegrationRequest.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_api_DeleteThingsBoardIntegrationRequest(arg) {
  if (!(arg instanceof as_external_api_application_pb.DeleteThingsBoardIntegrationRequest)) {
    throw new Error('Expected argument of type api.DeleteThingsBoardIntegrationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_DeleteThingsBoardIntegrationRequest(buffer_arg) {
  return as_external_api_application_pb.DeleteThingsBoardIntegrationRequest.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_api_UpdateApplicationRequest(arg) {
  if (!(arg instanceof as_external_api_application_pb.UpdateApplicationRequest)) {
    throw new Error('Expected argument of type api.UpdateApplicationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_api_UpdateApplicationRequest(buffer_arg) {
  return as_external_api_application_pb.UpdateApplicationRequest.deserializeBinary(new Uint8Array(buffer_arg));
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
