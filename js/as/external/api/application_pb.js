/**
 * @fileoverview
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var google_api_annotations_pb = require('../../../google/api/annotations_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
goog.exportSymbol('proto.api.AWSSNSIntegration', null, global);
goog.exportSymbol('proto.api.Application', null, global);
goog.exportSymbol('proto.api.ApplicationListItem', null, global);
goog.exportSymbol('proto.api.AzureServiceBusIntegration', null, global);
goog.exportSymbol('proto.api.CreateAWSSNSIntegrationRequest', null, global);
goog.exportSymbol('proto.api.CreateApplicationRequest', null, global);
goog.exportSymbol('proto.api.CreateApplicationResponse', null, global);
goog.exportSymbol('proto.api.CreateAzureServiceBusIntegrationRequest', null, global);
goog.exportSymbol('proto.api.CreateGCPPubSubIntegrationRequest', null, global);
goog.exportSymbol('proto.api.CreateHTTPIntegrationRequest', null, global);
goog.exportSymbol('proto.api.CreateInfluxDBIntegrationRequest', null, global);
goog.exportSymbol('proto.api.CreateLoRaCloudIntegrationRequest', null, global);
goog.exportSymbol('proto.api.CreateMyDevicesIntegrationRequest', null, global);
goog.exportSymbol('proto.api.CreateThingsBoardIntegrationRequest', null, global);
goog.exportSymbol('proto.api.DeleteAWSSNSIntegrationRequest', null, global);
goog.exportSymbol('proto.api.DeleteApplicationRequest', null, global);
goog.exportSymbol('proto.api.DeleteAzureServiceBusIntegrationRequest', null, global);
goog.exportSymbol('proto.api.DeleteGCPPubSubIntegrationRequest', null, global);
goog.exportSymbol('proto.api.DeleteHTTPIntegrationRequest', null, global);
goog.exportSymbol('proto.api.DeleteInfluxDBIntegrationRequest', null, global);
goog.exportSymbol('proto.api.DeleteLoRaCloudIntegrationRequest', null, global);
goog.exportSymbol('proto.api.DeleteMyDevicesIntegrationRequest', null, global);
goog.exportSymbol('proto.api.DeleteThingsBoardIntegrationRequest', null, global);
goog.exportSymbol('proto.api.GCPPubSubIntegration', null, global);
goog.exportSymbol('proto.api.GetAWSSNSIntegrationRequest', null, global);
goog.exportSymbol('proto.api.GetAWSSNSIntegrationResponse', null, global);
goog.exportSymbol('proto.api.GetApplicationRequest', null, global);
goog.exportSymbol('proto.api.GetApplicationResponse', null, global);
goog.exportSymbol('proto.api.GetAzureServiceBusIntegrationRequest', null, global);
goog.exportSymbol('proto.api.GetAzureServiceBusIntegrationResponse', null, global);
goog.exportSymbol('proto.api.GetGCPPubSubIntegrationRequest', null, global);
goog.exportSymbol('proto.api.GetGCPPubSubIntegrationResponse', null, global);
goog.exportSymbol('proto.api.GetHTTPIntegrationRequest', null, global);
goog.exportSymbol('proto.api.GetHTTPIntegrationResponse', null, global);
goog.exportSymbol('proto.api.GetInfluxDBIntegrationRequest', null, global);
goog.exportSymbol('proto.api.GetInfluxDBIntegrationResponse', null, global);
goog.exportSymbol('proto.api.GetLoRaCloudIntegrationRequest', null, global);
goog.exportSymbol('proto.api.GetLoRaCloudIntegrationResponse', null, global);
goog.exportSymbol('proto.api.GetMyDevicesIntegrationRequest', null, global);
goog.exportSymbol('proto.api.GetMyDevicesIntegrationResponse', null, global);
goog.exportSymbol('proto.api.GetThingsBoardIntegrationRequest', null, global);
goog.exportSymbol('proto.api.GetThingsBoardIntegrationResponse', null, global);
goog.exportSymbol('proto.api.HTTPIntegration', null, global);
goog.exportSymbol('proto.api.HTTPIntegrationHeader', null, global);
goog.exportSymbol('proto.api.InfluxDBIntegration', null, global);
goog.exportSymbol('proto.api.InfluxDBPrecision', null, global);
goog.exportSymbol('proto.api.IntegrationKind', null, global);
goog.exportSymbol('proto.api.IntegrationListItem', null, global);
goog.exportSymbol('proto.api.ListApplicationRequest', null, global);
goog.exportSymbol('proto.api.ListApplicationResponse', null, global);
goog.exportSymbol('proto.api.ListIntegrationRequest', null, global);
goog.exportSymbol('proto.api.ListIntegrationResponse', null, global);
goog.exportSymbol('proto.api.LoRaCloudIntegration', null, global);
goog.exportSymbol('proto.api.Marshaler', null, global);
goog.exportSymbol('proto.api.MyDevicesIntegration', null, global);
goog.exportSymbol('proto.api.ThingsBoardIntegration', null, global);
goog.exportSymbol('proto.api.UpdateAWSSNSIntegrationRequest', null, global);
goog.exportSymbol('proto.api.UpdateApplicationRequest', null, global);
goog.exportSymbol('proto.api.UpdateAzureServiceBusIntegrationRequest', null, global);
goog.exportSymbol('proto.api.UpdateGCPPubSubIntegrationRequest', null, global);
goog.exportSymbol('proto.api.UpdateHTTPIntegrationRequest', null, global);
goog.exportSymbol('proto.api.UpdateInfluxDBIntegrationRequest', null, global);
goog.exportSymbol('proto.api.UpdateLoRaCloudIntegrationRequest', null, global);
goog.exportSymbol('proto.api.UpdateMyDevicesIntegrationRequest', null, global);
goog.exportSymbol('proto.api.UpdateThingsBoardIntegrationRequest', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.Application = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.Application, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.api.Application.displayName = 'proto.api.Application';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.Application.prototype.toObject = function(opt_includeInstance) {
  return proto.api.Application.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.Application} msg The msg instance to transform.
 * @return {!Object}
 */
proto.api.Application.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: msg.getId(),
    name: msg.getName(),
    description: msg.getDescription(),
    organizationId: msg.getOrganizationId(),
    serviceProfileId: msg.getServiceProfileId(),
    payloadCodec: msg.getPayloadCodec(),
    payloadEncoderScript: msg.getPayloadEncoderScript(),
    payloadDecoderScript: msg.getPayloadDecoderScript()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.Application}
 */
proto.api.Application.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.Application;
  return proto.api.Application.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.Application} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.Application}
 */
proto.api.Application.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setOrganizationId(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setServiceProfileId(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setPayloadCodec(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setPayloadEncoderScript(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setPayloadDecoderScript(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.api.Application} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.api.Application.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.Application.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.api.Application.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = this.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = this.getDescription();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = this.getOrganizationId();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = this.getServiceProfileId();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = this.getPayloadCodec();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = this.getPayloadEncoderScript();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = this.getPayloadDecoderScript();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.api.Application} The clone.
 */
proto.api.Application.prototype.cloneMessage = function() {
  return /** @type {!proto.api.Application} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional int64 id = 1;
 * @return {number}
 */
proto.api.Application.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 1, 0));
};


/** @param {number} value  */
proto.api.Application.prototype.setId = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.api.Application.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 2, ""));
};


/** @param {string} value  */
proto.api.Application.prototype.setName = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional string description = 3;
 * @return {string}
 */
proto.api.Application.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 3, ""));
};


/** @param {string} value  */
proto.api.Application.prototype.setDescription = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional int64 organization_id = 4;
 * @return {number}
 */
proto.api.Application.prototype.getOrganizationId = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 4, 0));
};


/** @param {number} value  */
proto.api.Application.prototype.setOrganizationId = function(value) {
  jspb.Message.setField(this, 4, value);
};


/**
 * optional string service_profile_id = 5;
 * @return {string}
 */
proto.api.Application.prototype.getServiceProfileId = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 5, ""));
};


/** @param {string} value  */
proto.api.Application.prototype.setServiceProfileId = function(value) {
  jspb.Message.setField(this, 5, value);
};


/**
 * optional string payload_codec = 6;
 * @return {string}
 */
proto.api.Application.prototype.getPayloadCodec = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 6, ""));
};


/** @param {string} value  */
proto.api.Application.prototype.setPayloadCodec = function(value) {
  jspb.Message.setField(this, 6, value);
};


/**
 * optional string payload_encoder_script = 7;
 * @return {string}
 */
proto.api.Application.prototype.getPayloadEncoderScript = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 7, ""));
};


/** @param {string} value  */
proto.api.Application.prototype.setPayloadEncoderScript = function(value) {
  jspb.Message.setField(this, 7, value);
};


/**
 * optional string payload_decoder_script = 8;
 * @return {string}
 */
proto.api.Application.prototype.getPayloadDecoderScript = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 8, ""));
};


/** @param {string} value  */
proto.api.Application.prototype.setPayloadDecoderScript = function(value) {
  jspb.Message.setField(this, 8, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.ApplicationListItem = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.ApplicationListItem, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.api.ApplicationListItem.displayName = 'proto.api.ApplicationListItem';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.ApplicationListItem.prototype.toObject = function(opt_includeInstance) {
  return proto.api.ApplicationListItem.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.ApplicationListItem} msg The msg instance to transform.
 * @return {!Object}
 */
proto.api.ApplicationListItem.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: msg.getId(),
    name: msg.getName(),
    description: msg.getDescription(),
    organizationId: msg.getOrganizationId(),
    serviceProfileId: msg.getServiceProfileId(),
    serviceProfileName: msg.getServiceProfileName()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.ApplicationListItem}
 */
proto.api.ApplicationListItem.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.ApplicationListItem;
  return proto.api.ApplicationListItem.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.ApplicationListItem} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.ApplicationListItem}
 */
proto.api.ApplicationListItem.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setOrganizationId(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setServiceProfileId(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setServiceProfileName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.api.ApplicationListItem} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.api.ApplicationListItem.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.ApplicationListItem.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.api.ApplicationListItem.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = this.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = this.getDescription();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = this.getOrganizationId();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = this.getServiceProfileId();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = this.getServiceProfileName();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.api.ApplicationListItem} The clone.
 */
proto.api.ApplicationListItem.prototype.cloneMessage = function() {
  return /** @type {!proto.api.ApplicationListItem} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional int64 id = 1;
 * @return {number}
 */
proto.api.ApplicationListItem.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 1, 0));
};


/** @param {number} value  */
proto.api.ApplicationListItem.prototype.setId = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.api.ApplicationListItem.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 2, ""));
};


/** @param {string} value  */
proto.api.ApplicationListItem.prototype.setName = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional string description = 3;
 * @return {string}
 */
proto.api.ApplicationListItem.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 3, ""));
};


/** @param {string} value  */
proto.api.ApplicationListItem.prototype.setDescription = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional int64 organization_id = 4;
 * @return {number}
 */
proto.api.ApplicationListItem.prototype.getOrganizationId = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 4, 0));
};


/** @param {number} value  */
proto.api.ApplicationListItem.prototype.setOrganizationId = function(value) {
  jspb.Message.setField(this, 4, value);
};


/**
 * optional string service_profile_id = 5;
 * @return {string}
 */
proto.api.ApplicationListItem.prototype.getServiceProfileId = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 5, ""));
};


/** @param {string} value  */
proto.api.ApplicationListItem.prototype.setServiceProfileId = function(value) {
  jspb.Message.setField(this, 5, value);
};


/**
 * optional string service_profile_name = 6;
 * @return {string}
 */
proto.api.ApplicationListItem.prototype.getServiceProfileName = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 6, ""));
};


/** @param {string} value  */
proto.api.ApplicationListItem.prototype.setServiceProfileName = function(value) {
  jspb.Message.setField(this, 6, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.CreateApplicationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.CreateApplicationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.api.CreateApplicationRequest.displayName = 'proto.api.CreateApplicationRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.CreateApplicationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.CreateApplicationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.CreateApplicationRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.api.CreateApplicationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    application: (f = msg.getApplication()) && proto.api.Application.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.CreateApplicationRequest}
 */
proto.api.CreateApplicationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.CreateApplicationRequest;
  return proto.api.CreateApplicationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.CreateApplicationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.CreateApplicationRequest}
 */
proto.api.CreateApplicationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.Application;
      reader.readMessage(value,proto.api.Application.deserializeBinaryFromReader);
      msg.setApplication(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.api.CreateApplicationRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.api.CreateApplicationRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.CreateApplicationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.api.CreateApplicationRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getApplication();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.Application.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.api.CreateApplicationRequest} The clone.
 */
proto.api.CreateApplicationRequest.prototype.cloneMessage = function() {
  return /** @type {!proto.api.CreateApplicationRequest} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional Application application = 1;
 * @return {proto.api.Application}
 */
proto.api.CreateApplicationRequest.prototype.getApplication = function() {
  return /** @type{proto.api.Application} */ (
    jspb.Message.getWrapperField(this, proto.api.Application, 1));
};


/** @param {proto.api.Application|undefined} value  */
proto.api.CreateApplicationRequest.prototype.setApplication = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.api.CreateApplicationRequest.prototype.clearApplication = function() {
  this.setApplication(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.api.CreateApplicationRequest.prototype.hasApplication = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.CreateApplicationResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.CreateApplicationResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.api.CreateApplicationResponse.displayName = 'proto.api.CreateApplicationResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.CreateApplicationResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.CreateApplicationResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.CreateApplicationResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.api.CreateApplicationResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: msg.getId()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.CreateApplicationResponse}
 */
proto.api.CreateApplicationResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.CreateApplicationResponse;
  return proto.api.CreateApplicationResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.CreateApplicationResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.CreateApplicationResponse}
 */
proto.api.CreateApplicationResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.api.CreateApplicationResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.api.CreateApplicationResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.CreateApplicationResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.api.CreateApplicationResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.api.CreateApplicationResponse} The clone.
 */
proto.api.CreateApplicationResponse.prototype.cloneMessage = function() {
  return /** @type {!proto.api.CreateApplicationResponse} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional int64 id = 1;
 * @return {number}
 */
proto.api.CreateApplicationResponse.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 1, 0));
};


/** @param {number} value  */
proto.api.CreateApplicationResponse.prototype.setId = function(value) {
  jspb.Message.setField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.GetApplicationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.GetApplicationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.api.GetApplicationRequest.displayName = 'proto.api.GetApplicationRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.GetApplicationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.GetApplicationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.GetApplicationRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.api.GetApplicationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: msg.getId()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.GetApplicationRequest}
 */
proto.api.GetApplicationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.GetApplicationRequest;
  return proto.api.GetApplicationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.GetApplicationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.GetApplicationRequest}
 */
proto.api.GetApplicationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.api.GetApplicationRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.api.GetApplicationRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.GetApplicationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.api.GetApplicationRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.api.GetApplicationRequest} The clone.
 */
proto.api.GetApplicationRequest.prototype.cloneMessage = function() {
  return /** @type {!proto.api.GetApplicationRequest} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional int64 id = 1;
 * @return {number}
 */
proto.api.GetApplicationRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 1, 0));
};


/** @param {number} value  */
proto.api.GetApplicationRequest.prototype.setId = function(value) {
  jspb.Message.setField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.GetApplicationResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.GetApplicationResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.api.GetApplicationResponse.displayName = 'proto.api.GetApplicationResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.GetApplicationResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.GetApplicationResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.GetApplicationResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.api.GetApplicationResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    application: (f = msg.getApplication()) && proto.api.Application.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.GetApplicationResponse}
 */
proto.api.GetApplicationResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.GetApplicationResponse;
  return proto.api.GetApplicationResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.GetApplicationResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.GetApplicationResponse}
 */
proto.api.GetApplicationResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.Application;
      reader.readMessage(value,proto.api.Application.deserializeBinaryFromReader);
      msg.setApplication(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.api.GetApplicationResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.api.GetApplicationResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.GetApplicationResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.api.GetApplicationResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getApplication();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.Application.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.api.GetApplicationResponse} The clone.
 */
proto.api.GetApplicationResponse.prototype.cloneMessage = function() {
  return /** @type {!proto.api.GetApplicationResponse} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional Application application = 1;
 * @return {proto.api.Application}
 */
proto.api.GetApplicationResponse.prototype.getApplication = function() {
  return /** @type{proto.api.Application} */ (
    jspb.Message.getWrapperField(this, proto.api.Application, 1));
};


/** @param {proto.api.Application|undefined} value  */
proto.api.GetApplicationResponse.prototype.setApplication = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.api.GetApplicationResponse.prototype.clearApplication = function() {
  this.setApplication(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.api.GetApplicationResponse.prototype.hasApplication = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.UpdateApplicationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.UpdateApplicationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.api.UpdateApplicationRequest.displayName = 'proto.api.UpdateApplicationRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.UpdateApplicationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.UpdateApplicationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.UpdateApplicationRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.api.UpdateApplicationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    application: (f = msg.getApplication()) && proto.api.Application.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.UpdateApplicationRequest}
 */
proto.api.UpdateApplicationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.UpdateApplicationRequest;
  return proto.api.UpdateApplicationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.UpdateApplicationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.UpdateApplicationRequest}
 */
proto.api.UpdateApplicationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.Application;
      reader.readMessage(value,proto.api.Application.deserializeBinaryFromReader);
      msg.setApplication(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.api.UpdateApplicationRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.api.UpdateApplicationRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.UpdateApplicationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.api.UpdateApplicationRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getApplication();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.Application.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.api.UpdateApplicationRequest} The clone.
 */
proto.api.UpdateApplicationRequest.prototype.cloneMessage = function() {
  return /** @type {!proto.api.UpdateApplicationRequest} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional Application application = 1;
 * @return {proto.api.Application}
 */
proto.api.UpdateApplicationRequest.prototype.getApplication = function() {
  return /** @type{proto.api.Application} */ (
    jspb.Message.getWrapperField(this, proto.api.Application, 1));
};


/** @param {proto.api.Application|undefined} value  */
proto.api.UpdateApplicationRequest.prototype.setApplication = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.api.UpdateApplicationRequest.prototype.clearApplication = function() {
  this.setApplication(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.api.UpdateApplicationRequest.prototype.hasApplication = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.DeleteApplicationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.DeleteApplicationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.api.DeleteApplicationRequest.displayName = 'proto.api.DeleteApplicationRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.DeleteApplicationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.DeleteApplicationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.DeleteApplicationRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.api.DeleteApplicationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: msg.getId()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.DeleteApplicationRequest}
 */
proto.api.DeleteApplicationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.DeleteApplicationRequest;
  return proto.api.DeleteApplicationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.DeleteApplicationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.DeleteApplicationRequest}
 */
proto.api.DeleteApplicationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.api.DeleteApplicationRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.api.DeleteApplicationRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.DeleteApplicationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.api.DeleteApplicationRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.api.DeleteApplicationRequest} The clone.
 */
proto.api.DeleteApplicationRequest.prototype.cloneMessage = function() {
  return /** @type {!proto.api.DeleteApplicationRequest} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional int64 id = 1;
 * @return {number}
 */
proto.api.DeleteApplicationRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 1, 0));
};


/** @param {number} value  */
proto.api.DeleteApplicationRequest.prototype.setId = function(value) {
  jspb.Message.setField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.ListApplicationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.ListApplicationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.api.ListApplicationRequest.displayName = 'proto.api.ListApplicationRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.ListApplicationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.ListApplicationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.ListApplicationRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.api.ListApplicationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    limit: msg.getLimit(),
    offset: msg.getOffset(),
    organizationId: msg.getOrganizationId(),
    search: msg.getSearch()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.ListApplicationRequest}
 */
proto.api.ListApplicationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.ListApplicationRequest;
  return proto.api.ListApplicationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.ListApplicationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.ListApplicationRequest}
 */
proto.api.ListApplicationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setLimit(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setOffset(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setOrganizationId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setSearch(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.api.ListApplicationRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.api.ListApplicationRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.ListApplicationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.api.ListApplicationRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getLimit();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = this.getOffset();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = this.getOrganizationId();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = this.getSearch();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.api.ListApplicationRequest} The clone.
 */
proto.api.ListApplicationRequest.prototype.cloneMessage = function() {
  return /** @type {!proto.api.ListApplicationRequest} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional int64 limit = 1;
 * @return {number}
 */
proto.api.ListApplicationRequest.prototype.getLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 1, 0));
};


/** @param {number} value  */
proto.api.ListApplicationRequest.prototype.setLimit = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional int64 offset = 2;
 * @return {number}
 */
proto.api.ListApplicationRequest.prototype.getOffset = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 2, 0));
};


/** @param {number} value  */
proto.api.ListApplicationRequest.prototype.setOffset = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional int64 organization_id = 3;
 * @return {number}
 */
proto.api.ListApplicationRequest.prototype.getOrganizationId = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 3, 0));
};


/** @param {number} value  */
proto.api.ListApplicationRequest.prototype.setOrganizationId = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional string search = 4;
 * @return {string}
 */
proto.api.ListApplicationRequest.prototype.getSearch = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 4, ""));
};


/** @param {string} value  */
proto.api.ListApplicationRequest.prototype.setSearch = function(value) {
  jspb.Message.setField(this, 4, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.ListApplicationResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.ListApplicationResponse.repeatedFields_, null);
};
goog.inherits(proto.api.ListApplicationResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.api.ListApplicationResponse.displayName = 'proto.api.ListApplicationResponse';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.ListApplicationResponse.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.ListApplicationResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.ListApplicationResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.ListApplicationResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.api.ListApplicationResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    totalCount: msg.getTotalCount(),
    resultList: jspb.Message.toObjectList(msg.getResultList(),
    proto.api.ApplicationListItem.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.ListApplicationResponse}
 */
proto.api.ListApplicationResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.ListApplicationResponse;
  return proto.api.ListApplicationResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.ListApplicationResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.ListApplicationResponse}
 */
proto.api.ListApplicationResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTotalCount(value);
      break;
    case 2:
      var value = new proto.api.ApplicationListItem;
      reader.readMessage(value,proto.api.ApplicationListItem.deserializeBinaryFromReader);
      msg.getResultList().push(value);
      msg.setResultList(msg.getResultList());
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.api.ListApplicationResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.api.ListApplicationResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.ListApplicationResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.api.ListApplicationResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getTotalCount();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = this.getResultList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.api.ApplicationListItem.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.api.ListApplicationResponse} The clone.
 */
proto.api.ListApplicationResponse.prototype.cloneMessage = function() {
  return /** @type {!proto.api.ListApplicationResponse} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional int64 total_count = 1;
 * @return {number}
 */
proto.api.ListApplicationResponse.prototype.getTotalCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 1, 0));
};


/** @param {number} value  */
proto.api.ListApplicationResponse.prototype.setTotalCount = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * repeated ApplicationListItem result = 2;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.api.ApplicationListItem>}
 */
proto.api.ListApplicationResponse.prototype.getResultList = function() {
  return /** @type{!Array.<!proto.api.ApplicationListItem>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.ApplicationListItem, 2));
};


/** @param {Array.<!proto.api.ApplicationListItem>} value  */
proto.api.ListApplicationResponse.prototype.setResultList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


proto.api.ListApplicationResponse.prototype.clearResultList = function() {
  this.setResultList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.HTTPIntegrationHeader = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.HTTPIntegrationHeader, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.api.HTTPIntegrationHeader.displayName = 'proto.api.HTTPIntegrationHeader';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.HTTPIntegrationHeader.prototype.toObject = function(opt_includeInstance) {
  return proto.api.HTTPIntegrationHeader.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.HTTPIntegrationHeader} msg The msg instance to transform.
 * @return {!Object}
 */
proto.api.HTTPIntegrationHeader.toObject = function(includeInstance, msg) {
  var f, obj = {
    key: msg.getKey(),
    value: msg.getValue()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.HTTPIntegrationHeader}
 */
proto.api.HTTPIntegrationHeader.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.HTTPIntegrationHeader;
  return proto.api.HTTPIntegrationHeader.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.HTTPIntegrationHeader} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.HTTPIntegrationHeader}
 */
proto.api.HTTPIntegrationHeader.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setKey(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.api.HTTPIntegrationHeader} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.api.HTTPIntegrationHeader.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.HTTPIntegrationHeader.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.api.HTTPIntegrationHeader.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getKey();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = this.getValue();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.api.HTTPIntegrationHeader} The clone.
 */
proto.api.HTTPIntegrationHeader.prototype.cloneMessage = function() {
  return /** @type {!proto.api.HTTPIntegrationHeader} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional string key = 1;
 * @return {string}
 */
proto.api.HTTPIntegrationHeader.prototype.getKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 1, ""));
};


/** @param {string} value  */
proto.api.HTTPIntegrationHeader.prototype.setKey = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string value = 2;
 * @return {string}
 */
proto.api.HTTPIntegrationHeader.prototype.getValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 2, ""));
};


/** @param {string} value  */
proto.api.HTTPIntegrationHeader.prototype.setValue = function(value) {
  jspb.Message.setField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.HTTPIntegration = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.HTTPIntegration.repeatedFields_, null);
};
goog.inherits(proto.api.HTTPIntegration, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.api.HTTPIntegration.displayName = 'proto.api.HTTPIntegration';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.HTTPIntegration.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.HTTPIntegration.prototype.toObject = function(opt_includeInstance) {
  return proto.api.HTTPIntegration.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.HTTPIntegration} msg The msg instance to transform.
 * @return {!Object}
 */
proto.api.HTTPIntegration.toObject = function(includeInstance, msg) {
  var f, obj = {
    applicationId: msg.getApplicationId(),
    headersList: jspb.Message.toObjectList(msg.getHeadersList(),
    proto.api.HTTPIntegrationHeader.toObject, includeInstance),
    uplinkDataUrl: msg.getUplinkDataUrl(),
    joinNotificationUrl: msg.getJoinNotificationUrl(),
    ackNotificationUrl: msg.getAckNotificationUrl(),
    errorNotificationUrl: msg.getErrorNotificationUrl(),
    statusNotificationUrl: msg.getStatusNotificationUrl(),
    locationNotificationUrl: msg.getLocationNotificationUrl(),
    txAckNotificationUrl: msg.getTxAckNotificationUrl(),
    integrationNotificationUrl: msg.getIntegrationNotificationUrl(),
    marshaler: msg.getMarshaler(),
    eventEndpointUrl: msg.getEventEndpointUrl()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.HTTPIntegration}
 */
proto.api.HTTPIntegration.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.HTTPIntegration;
  return proto.api.HTTPIntegration.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.HTTPIntegration} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.HTTPIntegration}
 */
proto.api.HTTPIntegration.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setApplicationId(value);
      break;
    case 2:
      var value = new proto.api.HTTPIntegrationHeader;
      reader.readMessage(value,proto.api.HTTPIntegrationHeader.deserializeBinaryFromReader);
      msg.getHeadersList().push(value);
      msg.setHeadersList(msg.getHeadersList());
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setUplinkDataUrl(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setJoinNotificationUrl(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setAckNotificationUrl(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setErrorNotificationUrl(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setStatusNotificationUrl(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setLocationNotificationUrl(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setTxAckNotificationUrl(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setIntegrationNotificationUrl(value);
      break;
    case 11:
      var value = /** @type {!proto.api.Marshaler} */ (reader.readEnum());
      msg.setMarshaler(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setEventEndpointUrl(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.api.HTTPIntegration} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.api.HTTPIntegration.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.HTTPIntegration.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.api.HTTPIntegration.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getApplicationId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = this.getHeadersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.api.HTTPIntegrationHeader.serializeBinaryToWriter
    );
  }
  f = this.getUplinkDataUrl();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = this.getJoinNotificationUrl();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = this.getAckNotificationUrl();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = this.getErrorNotificationUrl();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = this.getStatusNotificationUrl();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = this.getLocationNotificationUrl();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = this.getTxAckNotificationUrl();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = this.getIntegrationNotificationUrl();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = this.getMarshaler();
  if (f !== 0.0) {
    writer.writeEnum(
      11,
      f
    );
  }
  f = this.getEventEndpointUrl();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.api.HTTPIntegration} The clone.
 */
proto.api.HTTPIntegration.prototype.cloneMessage = function() {
  return /** @type {!proto.api.HTTPIntegration} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional int64 application_id = 1;
 * @return {number}
 */
proto.api.HTTPIntegration.prototype.getApplicationId = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 1, 0));
};


/** @param {number} value  */
proto.api.HTTPIntegration.prototype.setApplicationId = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * repeated HTTPIntegrationHeader headers = 2;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.api.HTTPIntegrationHeader>}
 */
proto.api.HTTPIntegration.prototype.getHeadersList = function() {
  return /** @type{!Array.<!proto.api.HTTPIntegrationHeader>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.HTTPIntegrationHeader, 2));
};


/** @param {Array.<!proto.api.HTTPIntegrationHeader>} value  */
proto.api.HTTPIntegration.prototype.setHeadersList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


proto.api.HTTPIntegration.prototype.clearHeadersList = function() {
  this.setHeadersList([]);
};


/**
 * optional string uplink_data_url = 3;
 * @return {string}
 */
proto.api.HTTPIntegration.prototype.getUplinkDataUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 3, ""));
};


/** @param {string} value  */
proto.api.HTTPIntegration.prototype.setUplinkDataUrl = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional string join_notification_url = 4;
 * @return {string}
 */
proto.api.HTTPIntegration.prototype.getJoinNotificationUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 4, ""));
};


/** @param {string} value  */
proto.api.HTTPIntegration.prototype.setJoinNotificationUrl = function(value) {
  jspb.Message.setField(this, 4, value);
};


/**
 * optional string ack_notification_url = 5;
 * @return {string}
 */
proto.api.HTTPIntegration.prototype.getAckNotificationUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 5, ""));
};


/** @param {string} value  */
proto.api.HTTPIntegration.prototype.setAckNotificationUrl = function(value) {
  jspb.Message.setField(this, 5, value);
};


/**
 * optional string error_notification_url = 6;
 * @return {string}
 */
proto.api.HTTPIntegration.prototype.getErrorNotificationUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 6, ""));
};


/** @param {string} value  */
proto.api.HTTPIntegration.prototype.setErrorNotificationUrl = function(value) {
  jspb.Message.setField(this, 6, value);
};


/**
 * optional string status_notification_url = 7;
 * @return {string}
 */
proto.api.HTTPIntegration.prototype.getStatusNotificationUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 7, ""));
};


/** @param {string} value  */
proto.api.HTTPIntegration.prototype.setStatusNotificationUrl = function(value) {
  jspb.Message.setField(this, 7, value);
};


/**
 * optional string location_notification_url = 8;
 * @return {string}
 */
proto.api.HTTPIntegration.prototype.getLocationNotificationUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 8, ""));
};


/** @param {string} value  */
proto.api.HTTPIntegration.prototype.setLocationNotificationUrl = function(value) {
  jspb.Message.setField(this, 8, value);
};


/**
 * optional string tx_ack_notification_url = 9;
 * @return {string}
 */
proto.api.HTTPIntegration.prototype.getTxAckNotificationUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 9, ""));
};


/** @param {string} value  */
proto.api.HTTPIntegration.prototype.setTxAckNotificationUrl = function(value) {
  jspb.Message.setField(this, 9, value);
};


/**
 * optional string integration_notification_url = 10;
 * @return {string}
 */
proto.api.HTTPIntegration.prototype.getIntegrationNotificationUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 10, ""));
};


/** @param {string} value  */
proto.api.HTTPIntegration.prototype.setIntegrationNotificationUrl = function(value) {
  jspb.Message.setField(this, 10, value);
};


/**
 * optional Marshaler marshaler = 11;
 * @return {!proto.api.Marshaler}
 */
proto.api.HTTPIntegration.prototype.getMarshaler = function() {
  return /** @type {!proto.api.Marshaler} */ (jspb.Message.getFieldProto3(this, 11, 0));
};


/** @param {!proto.api.Marshaler} value  */
proto.api.HTTPIntegration.prototype.setMarshaler = function(value) {
  jspb.Message.setField(this, 11, value);
};


/**
 * optional string event_endpoint_url = 12;
 * @return {string}
 */
proto.api.HTTPIntegration.prototype.getEventEndpointUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 12, ""));
};


/** @param {string} value  */
proto.api.HTTPIntegration.prototype.setEventEndpointUrl = function(value) {
  jspb.Message.setField(this, 12, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.CreateHTTPIntegrationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.CreateHTTPIntegrationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.api.CreateHTTPIntegrationRequest.displayName = 'proto.api.CreateHTTPIntegrationRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.CreateHTTPIntegrationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.CreateHTTPIntegrationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.CreateHTTPIntegrationRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.api.CreateHTTPIntegrationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    integration: (f = msg.getIntegration()) && proto.api.HTTPIntegration.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.CreateHTTPIntegrationRequest}
 */
proto.api.CreateHTTPIntegrationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.CreateHTTPIntegrationRequest;
  return proto.api.CreateHTTPIntegrationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.CreateHTTPIntegrationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.CreateHTTPIntegrationRequest}
 */
proto.api.CreateHTTPIntegrationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.HTTPIntegration;
      reader.readMessage(value,proto.api.HTTPIntegration.deserializeBinaryFromReader);
      msg.setIntegration(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.api.CreateHTTPIntegrationRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.api.CreateHTTPIntegrationRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.CreateHTTPIntegrationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.api.CreateHTTPIntegrationRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getIntegration();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.HTTPIntegration.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.api.CreateHTTPIntegrationRequest} The clone.
 */
proto.api.CreateHTTPIntegrationRequest.prototype.cloneMessage = function() {
  return /** @type {!proto.api.CreateHTTPIntegrationRequest} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional HTTPIntegration integration = 1;
 * @return {proto.api.HTTPIntegration}
 */
proto.api.CreateHTTPIntegrationRequest.prototype.getIntegration = function() {
  return /** @type{proto.api.HTTPIntegration} */ (
    jspb.Message.getWrapperField(this, proto.api.HTTPIntegration, 1));
};


/** @param {proto.api.HTTPIntegration|undefined} value  */
proto.api.CreateHTTPIntegrationRequest.prototype.setIntegration = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.api.CreateHTTPIntegrationRequest.prototype.clearIntegration = function() {
  this.setIntegration(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.api.CreateHTTPIntegrationRequest.prototype.hasIntegration = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.GetHTTPIntegrationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.GetHTTPIntegrationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.api.GetHTTPIntegrationRequest.displayName = 'proto.api.GetHTTPIntegrationRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.GetHTTPIntegrationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.GetHTTPIntegrationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.GetHTTPIntegrationRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.api.GetHTTPIntegrationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    applicationId: msg.getApplicationId()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.GetHTTPIntegrationRequest}
 */
proto.api.GetHTTPIntegrationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.GetHTTPIntegrationRequest;
  return proto.api.GetHTTPIntegrationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.GetHTTPIntegrationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.GetHTTPIntegrationRequest}
 */
proto.api.GetHTTPIntegrationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setApplicationId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.api.GetHTTPIntegrationRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.api.GetHTTPIntegrationRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.GetHTTPIntegrationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.api.GetHTTPIntegrationRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getApplicationId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.api.GetHTTPIntegrationRequest} The clone.
 */
proto.api.GetHTTPIntegrationRequest.prototype.cloneMessage = function() {
  return /** @type {!proto.api.GetHTTPIntegrationRequest} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional int64 application_id = 1;
 * @return {number}
 */
proto.api.GetHTTPIntegrationRequest.prototype.getApplicationId = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 1, 0));
};


/** @param {number} value  */
proto.api.GetHTTPIntegrationRequest.prototype.setApplicationId = function(value) {
  jspb.Message.setField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.GetHTTPIntegrationResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.GetHTTPIntegrationResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.api.GetHTTPIntegrationResponse.displayName = 'proto.api.GetHTTPIntegrationResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.GetHTTPIntegrationResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.GetHTTPIntegrationResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.GetHTTPIntegrationResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.api.GetHTTPIntegrationResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    integration: (f = msg.getIntegration()) && proto.api.HTTPIntegration.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.GetHTTPIntegrationResponse}
 */
proto.api.GetHTTPIntegrationResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.GetHTTPIntegrationResponse;
  return proto.api.GetHTTPIntegrationResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.GetHTTPIntegrationResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.GetHTTPIntegrationResponse}
 */
proto.api.GetHTTPIntegrationResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.HTTPIntegration;
      reader.readMessage(value,proto.api.HTTPIntegration.deserializeBinaryFromReader);
      msg.setIntegration(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.api.GetHTTPIntegrationResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.api.GetHTTPIntegrationResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.GetHTTPIntegrationResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.api.GetHTTPIntegrationResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getIntegration();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.HTTPIntegration.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.api.GetHTTPIntegrationResponse} The clone.
 */
proto.api.GetHTTPIntegrationResponse.prototype.cloneMessage = function() {
  return /** @type {!proto.api.GetHTTPIntegrationResponse} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional HTTPIntegration integration = 1;
 * @return {proto.api.HTTPIntegration}
 */
proto.api.GetHTTPIntegrationResponse.prototype.getIntegration = function() {
  return /** @type{proto.api.HTTPIntegration} */ (
    jspb.Message.getWrapperField(this, proto.api.HTTPIntegration, 1));
};


/** @param {proto.api.HTTPIntegration|undefined} value  */
proto.api.GetHTTPIntegrationResponse.prototype.setIntegration = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.api.GetHTTPIntegrationResponse.prototype.clearIntegration = function() {
  this.setIntegration(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.api.GetHTTPIntegrationResponse.prototype.hasIntegration = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.UpdateHTTPIntegrationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.UpdateHTTPIntegrationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.api.UpdateHTTPIntegrationRequest.displayName = 'proto.api.UpdateHTTPIntegrationRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.UpdateHTTPIntegrationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.UpdateHTTPIntegrationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.UpdateHTTPIntegrationRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.api.UpdateHTTPIntegrationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    integration: (f = msg.getIntegration()) && proto.api.HTTPIntegration.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.UpdateHTTPIntegrationRequest}
 */
proto.api.UpdateHTTPIntegrationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.UpdateHTTPIntegrationRequest;
  return proto.api.UpdateHTTPIntegrationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.UpdateHTTPIntegrationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.UpdateHTTPIntegrationRequest}
 */
proto.api.UpdateHTTPIntegrationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.HTTPIntegration;
      reader.readMessage(value,proto.api.HTTPIntegration.deserializeBinaryFromReader);
      msg.setIntegration(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.api.UpdateHTTPIntegrationRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.api.UpdateHTTPIntegrationRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.UpdateHTTPIntegrationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.api.UpdateHTTPIntegrationRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getIntegration();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.HTTPIntegration.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.api.UpdateHTTPIntegrationRequest} The clone.
 */
proto.api.UpdateHTTPIntegrationRequest.prototype.cloneMessage = function() {
  return /** @type {!proto.api.UpdateHTTPIntegrationRequest} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional HTTPIntegration integration = 1;
 * @return {proto.api.HTTPIntegration}
 */
proto.api.UpdateHTTPIntegrationRequest.prototype.getIntegration = function() {
  return /** @type{proto.api.HTTPIntegration} */ (
    jspb.Message.getWrapperField(this, proto.api.HTTPIntegration, 1));
};


/** @param {proto.api.HTTPIntegration|undefined} value  */
proto.api.UpdateHTTPIntegrationRequest.prototype.setIntegration = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.api.UpdateHTTPIntegrationRequest.prototype.clearIntegration = function() {
  this.setIntegration(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.api.UpdateHTTPIntegrationRequest.prototype.hasIntegration = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.DeleteHTTPIntegrationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.DeleteHTTPIntegrationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.api.DeleteHTTPIntegrationRequest.displayName = 'proto.api.DeleteHTTPIntegrationRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.DeleteHTTPIntegrationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.DeleteHTTPIntegrationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.DeleteHTTPIntegrationRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.api.DeleteHTTPIntegrationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    applicationId: msg.getApplicationId()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.DeleteHTTPIntegrationRequest}
 */
proto.api.DeleteHTTPIntegrationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.DeleteHTTPIntegrationRequest;
  return proto.api.DeleteHTTPIntegrationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.DeleteHTTPIntegrationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.DeleteHTTPIntegrationRequest}
 */
proto.api.DeleteHTTPIntegrationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setApplicationId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.api.DeleteHTTPIntegrationRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.api.DeleteHTTPIntegrationRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.DeleteHTTPIntegrationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.api.DeleteHTTPIntegrationRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getApplicationId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.api.DeleteHTTPIntegrationRequest} The clone.
 */
proto.api.DeleteHTTPIntegrationRequest.prototype.cloneMessage = function() {
  return /** @type {!proto.api.DeleteHTTPIntegrationRequest} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional int64 application_id = 1;
 * @return {number}
 */
proto.api.DeleteHTTPIntegrationRequest.prototype.getApplicationId = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 1, 0));
};


/** @param {number} value  */
proto.api.DeleteHTTPIntegrationRequest.prototype.setApplicationId = function(value) {
  jspb.Message.setField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.ListIntegrationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.ListIntegrationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.api.ListIntegrationRequest.displayName = 'proto.api.ListIntegrationRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.ListIntegrationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.ListIntegrationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.ListIntegrationRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.api.ListIntegrationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    applicationId: msg.getApplicationId()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.ListIntegrationRequest}
 */
proto.api.ListIntegrationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.ListIntegrationRequest;
  return proto.api.ListIntegrationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.ListIntegrationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.ListIntegrationRequest}
 */
proto.api.ListIntegrationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setApplicationId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.api.ListIntegrationRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.api.ListIntegrationRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.ListIntegrationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.api.ListIntegrationRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getApplicationId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.api.ListIntegrationRequest} The clone.
 */
proto.api.ListIntegrationRequest.prototype.cloneMessage = function() {
  return /** @type {!proto.api.ListIntegrationRequest} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional int64 application_id = 1;
 * @return {number}
 */
proto.api.ListIntegrationRequest.prototype.getApplicationId = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 1, 0));
};


/** @param {number} value  */
proto.api.ListIntegrationRequest.prototype.setApplicationId = function(value) {
  jspb.Message.setField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.IntegrationListItem = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.IntegrationListItem, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.api.IntegrationListItem.displayName = 'proto.api.IntegrationListItem';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.IntegrationListItem.prototype.toObject = function(opt_includeInstance) {
  return proto.api.IntegrationListItem.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.IntegrationListItem} msg The msg instance to transform.
 * @return {!Object}
 */
proto.api.IntegrationListItem.toObject = function(includeInstance, msg) {
  var f, obj = {
    kind: msg.getKind()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.IntegrationListItem}
 */
proto.api.IntegrationListItem.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.IntegrationListItem;
  return proto.api.IntegrationListItem.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.IntegrationListItem} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.IntegrationListItem}
 */
proto.api.IntegrationListItem.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.api.IntegrationKind} */ (reader.readEnum());
      msg.setKind(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.api.IntegrationListItem} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.api.IntegrationListItem.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.IntegrationListItem.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.api.IntegrationListItem.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getKind();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.api.IntegrationListItem} The clone.
 */
proto.api.IntegrationListItem.prototype.cloneMessage = function() {
  return /** @type {!proto.api.IntegrationListItem} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional IntegrationKind kind = 1;
 * @return {!proto.api.IntegrationKind}
 */
proto.api.IntegrationListItem.prototype.getKind = function() {
  return /** @type {!proto.api.IntegrationKind} */ (jspb.Message.getFieldProto3(this, 1, 0));
};


/** @param {!proto.api.IntegrationKind} value  */
proto.api.IntegrationListItem.prototype.setKind = function(value) {
  jspb.Message.setField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.ListIntegrationResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.ListIntegrationResponse.repeatedFields_, null);
};
goog.inherits(proto.api.ListIntegrationResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.api.ListIntegrationResponse.displayName = 'proto.api.ListIntegrationResponse';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.ListIntegrationResponse.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.ListIntegrationResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.ListIntegrationResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.ListIntegrationResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.api.ListIntegrationResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    totalCount: msg.getTotalCount(),
    resultList: jspb.Message.toObjectList(msg.getResultList(),
    proto.api.IntegrationListItem.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.ListIntegrationResponse}
 */
proto.api.ListIntegrationResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.ListIntegrationResponse;
  return proto.api.ListIntegrationResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.ListIntegrationResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.ListIntegrationResponse}
 */
proto.api.ListIntegrationResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTotalCount(value);
      break;
    case 2:
      var value = new proto.api.IntegrationListItem;
      reader.readMessage(value,proto.api.IntegrationListItem.deserializeBinaryFromReader);
      msg.getResultList().push(value);
      msg.setResultList(msg.getResultList());
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.api.ListIntegrationResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.api.ListIntegrationResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.ListIntegrationResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.api.ListIntegrationResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getTotalCount();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = this.getResultList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.api.IntegrationListItem.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.api.ListIntegrationResponse} The clone.
 */
proto.api.ListIntegrationResponse.prototype.cloneMessage = function() {
  return /** @type {!proto.api.ListIntegrationResponse} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional int64 total_count = 1;
 * @return {number}
 */
proto.api.ListIntegrationResponse.prototype.getTotalCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 1, 0));
};


/** @param {number} value  */
proto.api.ListIntegrationResponse.prototype.setTotalCount = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * repeated IntegrationListItem result = 2;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.api.IntegrationListItem>}
 */
proto.api.ListIntegrationResponse.prototype.getResultList = function() {
  return /** @type{!Array.<!proto.api.IntegrationListItem>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.api.IntegrationListItem, 2));
};


/** @param {Array.<!proto.api.IntegrationListItem>} value  */
proto.api.ListIntegrationResponse.prototype.setResultList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


proto.api.ListIntegrationResponse.prototype.clearResultList = function() {
  this.setResultList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.InfluxDBIntegration = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.InfluxDBIntegration, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.api.InfluxDBIntegration.displayName = 'proto.api.InfluxDBIntegration';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.InfluxDBIntegration.prototype.toObject = function(opt_includeInstance) {
  return proto.api.InfluxDBIntegration.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.InfluxDBIntegration} msg The msg instance to transform.
 * @return {!Object}
 */
proto.api.InfluxDBIntegration.toObject = function(includeInstance, msg) {
  var f, obj = {
    applicationId: msg.getApplicationId(),
    endpoint: msg.getEndpoint(),
    db: msg.getDb(),
    username: msg.getUsername(),
    password: msg.getPassword(),
    retentionPolicyName: msg.getRetentionPolicyName(),
    precision: msg.getPrecision()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.InfluxDBIntegration}
 */
proto.api.InfluxDBIntegration.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.InfluxDBIntegration;
  return proto.api.InfluxDBIntegration.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.InfluxDBIntegration} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.InfluxDBIntegration}
 */
proto.api.InfluxDBIntegration.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setApplicationId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setEndpoint(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDb(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setUsername(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setPassword(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setRetentionPolicyName(value);
      break;
    case 7:
      var value = /** @type {!proto.api.InfluxDBPrecision} */ (reader.readEnum());
      msg.setPrecision(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.api.InfluxDBIntegration} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.api.InfluxDBIntegration.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.InfluxDBIntegration.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.api.InfluxDBIntegration.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getApplicationId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = this.getEndpoint();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = this.getDb();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = this.getUsername();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = this.getPassword();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = this.getRetentionPolicyName();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = this.getPrecision();
  if (f !== 0.0) {
    writer.writeEnum(
      7,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.api.InfluxDBIntegration} The clone.
 */
proto.api.InfluxDBIntegration.prototype.cloneMessage = function() {
  return /** @type {!proto.api.InfluxDBIntegration} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional int64 application_id = 1;
 * @return {number}
 */
proto.api.InfluxDBIntegration.prototype.getApplicationId = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 1, 0));
};


/** @param {number} value  */
proto.api.InfluxDBIntegration.prototype.setApplicationId = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string endpoint = 2;
 * @return {string}
 */
proto.api.InfluxDBIntegration.prototype.getEndpoint = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 2, ""));
};


/** @param {string} value  */
proto.api.InfluxDBIntegration.prototype.setEndpoint = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional string db = 3;
 * @return {string}
 */
proto.api.InfluxDBIntegration.prototype.getDb = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 3, ""));
};


/** @param {string} value  */
proto.api.InfluxDBIntegration.prototype.setDb = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional string username = 4;
 * @return {string}
 */
proto.api.InfluxDBIntegration.prototype.getUsername = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 4, ""));
};


/** @param {string} value  */
proto.api.InfluxDBIntegration.prototype.setUsername = function(value) {
  jspb.Message.setField(this, 4, value);
};


/**
 * optional string password = 5;
 * @return {string}
 */
proto.api.InfluxDBIntegration.prototype.getPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 5, ""));
};


/** @param {string} value  */
proto.api.InfluxDBIntegration.prototype.setPassword = function(value) {
  jspb.Message.setField(this, 5, value);
};


/**
 * optional string retention_policy_name = 6;
 * @return {string}
 */
proto.api.InfluxDBIntegration.prototype.getRetentionPolicyName = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 6, ""));
};


/** @param {string} value  */
proto.api.InfluxDBIntegration.prototype.setRetentionPolicyName = function(value) {
  jspb.Message.setField(this, 6, value);
};


/**
 * optional InfluxDBPrecision precision = 7;
 * @return {!proto.api.InfluxDBPrecision}
 */
proto.api.InfluxDBIntegration.prototype.getPrecision = function() {
  return /** @type {!proto.api.InfluxDBPrecision} */ (jspb.Message.getFieldProto3(this, 7, 0));
};


/** @param {!proto.api.InfluxDBPrecision} value  */
proto.api.InfluxDBIntegration.prototype.setPrecision = function(value) {
  jspb.Message.setField(this, 7, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.CreateInfluxDBIntegrationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.CreateInfluxDBIntegrationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.api.CreateInfluxDBIntegrationRequest.displayName = 'proto.api.CreateInfluxDBIntegrationRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.CreateInfluxDBIntegrationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.CreateInfluxDBIntegrationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.CreateInfluxDBIntegrationRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.api.CreateInfluxDBIntegrationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    integration: (f = msg.getIntegration()) && proto.api.InfluxDBIntegration.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.CreateInfluxDBIntegrationRequest}
 */
proto.api.CreateInfluxDBIntegrationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.CreateInfluxDBIntegrationRequest;
  return proto.api.CreateInfluxDBIntegrationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.CreateInfluxDBIntegrationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.CreateInfluxDBIntegrationRequest}
 */
proto.api.CreateInfluxDBIntegrationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.InfluxDBIntegration;
      reader.readMessage(value,proto.api.InfluxDBIntegration.deserializeBinaryFromReader);
      msg.setIntegration(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.api.CreateInfluxDBIntegrationRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.api.CreateInfluxDBIntegrationRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.CreateInfluxDBIntegrationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.api.CreateInfluxDBIntegrationRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getIntegration();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.InfluxDBIntegration.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.api.CreateInfluxDBIntegrationRequest} The clone.
 */
proto.api.CreateInfluxDBIntegrationRequest.prototype.cloneMessage = function() {
  return /** @type {!proto.api.CreateInfluxDBIntegrationRequest} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional InfluxDBIntegration integration = 1;
 * @return {proto.api.InfluxDBIntegration}
 */
proto.api.CreateInfluxDBIntegrationRequest.prototype.getIntegration = function() {
  return /** @type{proto.api.InfluxDBIntegration} */ (
    jspb.Message.getWrapperField(this, proto.api.InfluxDBIntegration, 1));
};


/** @param {proto.api.InfluxDBIntegration|undefined} value  */
proto.api.CreateInfluxDBIntegrationRequest.prototype.setIntegration = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.api.CreateInfluxDBIntegrationRequest.prototype.clearIntegration = function() {
  this.setIntegration(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.api.CreateInfluxDBIntegrationRequest.prototype.hasIntegration = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.GetInfluxDBIntegrationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.GetInfluxDBIntegrationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.api.GetInfluxDBIntegrationRequest.displayName = 'proto.api.GetInfluxDBIntegrationRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.GetInfluxDBIntegrationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.GetInfluxDBIntegrationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.GetInfluxDBIntegrationRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.api.GetInfluxDBIntegrationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    applicationId: msg.getApplicationId()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.GetInfluxDBIntegrationRequest}
 */
proto.api.GetInfluxDBIntegrationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.GetInfluxDBIntegrationRequest;
  return proto.api.GetInfluxDBIntegrationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.GetInfluxDBIntegrationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.GetInfluxDBIntegrationRequest}
 */
proto.api.GetInfluxDBIntegrationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setApplicationId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.api.GetInfluxDBIntegrationRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.api.GetInfluxDBIntegrationRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.GetInfluxDBIntegrationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.api.GetInfluxDBIntegrationRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getApplicationId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.api.GetInfluxDBIntegrationRequest} The clone.
 */
proto.api.GetInfluxDBIntegrationRequest.prototype.cloneMessage = function() {
  return /** @type {!proto.api.GetInfluxDBIntegrationRequest} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional int64 application_id = 1;
 * @return {number}
 */
proto.api.GetInfluxDBIntegrationRequest.prototype.getApplicationId = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 1, 0));
};


/** @param {number} value  */
proto.api.GetInfluxDBIntegrationRequest.prototype.setApplicationId = function(value) {
  jspb.Message.setField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.GetInfluxDBIntegrationResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.GetInfluxDBIntegrationResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.api.GetInfluxDBIntegrationResponse.displayName = 'proto.api.GetInfluxDBIntegrationResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.GetInfluxDBIntegrationResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.GetInfluxDBIntegrationResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.GetInfluxDBIntegrationResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.api.GetInfluxDBIntegrationResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    integration: (f = msg.getIntegration()) && proto.api.InfluxDBIntegration.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.GetInfluxDBIntegrationResponse}
 */
proto.api.GetInfluxDBIntegrationResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.GetInfluxDBIntegrationResponse;
  return proto.api.GetInfluxDBIntegrationResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.GetInfluxDBIntegrationResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.GetInfluxDBIntegrationResponse}
 */
proto.api.GetInfluxDBIntegrationResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.InfluxDBIntegration;
      reader.readMessage(value,proto.api.InfluxDBIntegration.deserializeBinaryFromReader);
      msg.setIntegration(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.api.GetInfluxDBIntegrationResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.api.GetInfluxDBIntegrationResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.GetInfluxDBIntegrationResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.api.GetInfluxDBIntegrationResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getIntegration();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.InfluxDBIntegration.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.api.GetInfluxDBIntegrationResponse} The clone.
 */
proto.api.GetInfluxDBIntegrationResponse.prototype.cloneMessage = function() {
  return /** @type {!proto.api.GetInfluxDBIntegrationResponse} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional InfluxDBIntegration integration = 1;
 * @return {proto.api.InfluxDBIntegration}
 */
proto.api.GetInfluxDBIntegrationResponse.prototype.getIntegration = function() {
  return /** @type{proto.api.InfluxDBIntegration} */ (
    jspb.Message.getWrapperField(this, proto.api.InfluxDBIntegration, 1));
};


/** @param {proto.api.InfluxDBIntegration|undefined} value  */
proto.api.GetInfluxDBIntegrationResponse.prototype.setIntegration = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.api.GetInfluxDBIntegrationResponse.prototype.clearIntegration = function() {
  this.setIntegration(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.api.GetInfluxDBIntegrationResponse.prototype.hasIntegration = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.UpdateInfluxDBIntegrationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.UpdateInfluxDBIntegrationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.api.UpdateInfluxDBIntegrationRequest.displayName = 'proto.api.UpdateInfluxDBIntegrationRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.UpdateInfluxDBIntegrationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.UpdateInfluxDBIntegrationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.UpdateInfluxDBIntegrationRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.api.UpdateInfluxDBIntegrationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    integration: (f = msg.getIntegration()) && proto.api.InfluxDBIntegration.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.UpdateInfluxDBIntegrationRequest}
 */
proto.api.UpdateInfluxDBIntegrationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.UpdateInfluxDBIntegrationRequest;
  return proto.api.UpdateInfluxDBIntegrationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.UpdateInfluxDBIntegrationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.UpdateInfluxDBIntegrationRequest}
 */
proto.api.UpdateInfluxDBIntegrationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.InfluxDBIntegration;
      reader.readMessage(value,proto.api.InfluxDBIntegration.deserializeBinaryFromReader);
      msg.setIntegration(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.api.UpdateInfluxDBIntegrationRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.api.UpdateInfluxDBIntegrationRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.UpdateInfluxDBIntegrationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.api.UpdateInfluxDBIntegrationRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getIntegration();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.InfluxDBIntegration.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.api.UpdateInfluxDBIntegrationRequest} The clone.
 */
proto.api.UpdateInfluxDBIntegrationRequest.prototype.cloneMessage = function() {
  return /** @type {!proto.api.UpdateInfluxDBIntegrationRequest} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional InfluxDBIntegration integration = 1;
 * @return {proto.api.InfluxDBIntegration}
 */
proto.api.UpdateInfluxDBIntegrationRequest.prototype.getIntegration = function() {
  return /** @type{proto.api.InfluxDBIntegration} */ (
    jspb.Message.getWrapperField(this, proto.api.InfluxDBIntegration, 1));
};


/** @param {proto.api.InfluxDBIntegration|undefined} value  */
proto.api.UpdateInfluxDBIntegrationRequest.prototype.setIntegration = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.api.UpdateInfluxDBIntegrationRequest.prototype.clearIntegration = function() {
  this.setIntegration(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.api.UpdateInfluxDBIntegrationRequest.prototype.hasIntegration = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.DeleteInfluxDBIntegrationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.DeleteInfluxDBIntegrationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.api.DeleteInfluxDBIntegrationRequest.displayName = 'proto.api.DeleteInfluxDBIntegrationRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.DeleteInfluxDBIntegrationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.DeleteInfluxDBIntegrationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.DeleteInfluxDBIntegrationRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.api.DeleteInfluxDBIntegrationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    applicationId: msg.getApplicationId()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.DeleteInfluxDBIntegrationRequest}
 */
proto.api.DeleteInfluxDBIntegrationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.DeleteInfluxDBIntegrationRequest;
  return proto.api.DeleteInfluxDBIntegrationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.DeleteInfluxDBIntegrationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.DeleteInfluxDBIntegrationRequest}
 */
proto.api.DeleteInfluxDBIntegrationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setApplicationId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.api.DeleteInfluxDBIntegrationRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.api.DeleteInfluxDBIntegrationRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.DeleteInfluxDBIntegrationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.api.DeleteInfluxDBIntegrationRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getApplicationId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.api.DeleteInfluxDBIntegrationRequest} The clone.
 */
proto.api.DeleteInfluxDBIntegrationRequest.prototype.cloneMessage = function() {
  return /** @type {!proto.api.DeleteInfluxDBIntegrationRequest} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional int64 application_id = 1;
 * @return {number}
 */
proto.api.DeleteInfluxDBIntegrationRequest.prototype.getApplicationId = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 1, 0));
};


/** @param {number} value  */
proto.api.DeleteInfluxDBIntegrationRequest.prototype.setApplicationId = function(value) {
  jspb.Message.setField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.ThingsBoardIntegration = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.ThingsBoardIntegration, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.api.ThingsBoardIntegration.displayName = 'proto.api.ThingsBoardIntegration';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.ThingsBoardIntegration.prototype.toObject = function(opt_includeInstance) {
  return proto.api.ThingsBoardIntegration.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.ThingsBoardIntegration} msg The msg instance to transform.
 * @return {!Object}
 */
proto.api.ThingsBoardIntegration.toObject = function(includeInstance, msg) {
  var f, obj = {
    applicationId: msg.getApplicationId(),
    server: msg.getServer()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.ThingsBoardIntegration}
 */
proto.api.ThingsBoardIntegration.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.ThingsBoardIntegration;
  return proto.api.ThingsBoardIntegration.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.ThingsBoardIntegration} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.ThingsBoardIntegration}
 */
proto.api.ThingsBoardIntegration.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setApplicationId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setServer(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.api.ThingsBoardIntegration} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.api.ThingsBoardIntegration.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.ThingsBoardIntegration.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.api.ThingsBoardIntegration.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getApplicationId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = this.getServer();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.api.ThingsBoardIntegration} The clone.
 */
proto.api.ThingsBoardIntegration.prototype.cloneMessage = function() {
  return /** @type {!proto.api.ThingsBoardIntegration} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional int64 application_id = 1;
 * @return {number}
 */
proto.api.ThingsBoardIntegration.prototype.getApplicationId = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 1, 0));
};


/** @param {number} value  */
proto.api.ThingsBoardIntegration.prototype.setApplicationId = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string server = 2;
 * @return {string}
 */
proto.api.ThingsBoardIntegration.prototype.getServer = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 2, ""));
};


/** @param {string} value  */
proto.api.ThingsBoardIntegration.prototype.setServer = function(value) {
  jspb.Message.setField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.CreateThingsBoardIntegrationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.CreateThingsBoardIntegrationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.api.CreateThingsBoardIntegrationRequest.displayName = 'proto.api.CreateThingsBoardIntegrationRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.CreateThingsBoardIntegrationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.CreateThingsBoardIntegrationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.CreateThingsBoardIntegrationRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.api.CreateThingsBoardIntegrationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    integration: (f = msg.getIntegration()) && proto.api.ThingsBoardIntegration.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.CreateThingsBoardIntegrationRequest}
 */
proto.api.CreateThingsBoardIntegrationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.CreateThingsBoardIntegrationRequest;
  return proto.api.CreateThingsBoardIntegrationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.CreateThingsBoardIntegrationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.CreateThingsBoardIntegrationRequest}
 */
proto.api.CreateThingsBoardIntegrationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.ThingsBoardIntegration;
      reader.readMessage(value,proto.api.ThingsBoardIntegration.deserializeBinaryFromReader);
      msg.setIntegration(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.api.CreateThingsBoardIntegrationRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.api.CreateThingsBoardIntegrationRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.CreateThingsBoardIntegrationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.api.CreateThingsBoardIntegrationRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getIntegration();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.ThingsBoardIntegration.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.api.CreateThingsBoardIntegrationRequest} The clone.
 */
proto.api.CreateThingsBoardIntegrationRequest.prototype.cloneMessage = function() {
  return /** @type {!proto.api.CreateThingsBoardIntegrationRequest} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional ThingsBoardIntegration integration = 1;
 * @return {proto.api.ThingsBoardIntegration}
 */
proto.api.CreateThingsBoardIntegrationRequest.prototype.getIntegration = function() {
  return /** @type{proto.api.ThingsBoardIntegration} */ (
    jspb.Message.getWrapperField(this, proto.api.ThingsBoardIntegration, 1));
};


/** @param {proto.api.ThingsBoardIntegration|undefined} value  */
proto.api.CreateThingsBoardIntegrationRequest.prototype.setIntegration = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.api.CreateThingsBoardIntegrationRequest.prototype.clearIntegration = function() {
  this.setIntegration(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.api.CreateThingsBoardIntegrationRequest.prototype.hasIntegration = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.GetThingsBoardIntegrationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.GetThingsBoardIntegrationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.api.GetThingsBoardIntegrationRequest.displayName = 'proto.api.GetThingsBoardIntegrationRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.GetThingsBoardIntegrationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.GetThingsBoardIntegrationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.GetThingsBoardIntegrationRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.api.GetThingsBoardIntegrationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    applicationId: msg.getApplicationId()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.GetThingsBoardIntegrationRequest}
 */
proto.api.GetThingsBoardIntegrationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.GetThingsBoardIntegrationRequest;
  return proto.api.GetThingsBoardIntegrationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.GetThingsBoardIntegrationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.GetThingsBoardIntegrationRequest}
 */
proto.api.GetThingsBoardIntegrationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setApplicationId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.api.GetThingsBoardIntegrationRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.api.GetThingsBoardIntegrationRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.GetThingsBoardIntegrationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.api.GetThingsBoardIntegrationRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getApplicationId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.api.GetThingsBoardIntegrationRequest} The clone.
 */
proto.api.GetThingsBoardIntegrationRequest.prototype.cloneMessage = function() {
  return /** @type {!proto.api.GetThingsBoardIntegrationRequest} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional int64 application_id = 1;
 * @return {number}
 */
proto.api.GetThingsBoardIntegrationRequest.prototype.getApplicationId = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 1, 0));
};


/** @param {number} value  */
proto.api.GetThingsBoardIntegrationRequest.prototype.setApplicationId = function(value) {
  jspb.Message.setField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.GetThingsBoardIntegrationResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.GetThingsBoardIntegrationResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.api.GetThingsBoardIntegrationResponse.displayName = 'proto.api.GetThingsBoardIntegrationResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.GetThingsBoardIntegrationResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.GetThingsBoardIntegrationResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.GetThingsBoardIntegrationResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.api.GetThingsBoardIntegrationResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    integration: (f = msg.getIntegration()) && proto.api.ThingsBoardIntegration.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.GetThingsBoardIntegrationResponse}
 */
proto.api.GetThingsBoardIntegrationResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.GetThingsBoardIntegrationResponse;
  return proto.api.GetThingsBoardIntegrationResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.GetThingsBoardIntegrationResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.GetThingsBoardIntegrationResponse}
 */
proto.api.GetThingsBoardIntegrationResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.ThingsBoardIntegration;
      reader.readMessage(value,proto.api.ThingsBoardIntegration.deserializeBinaryFromReader);
      msg.setIntegration(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.api.GetThingsBoardIntegrationResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.api.GetThingsBoardIntegrationResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.GetThingsBoardIntegrationResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.api.GetThingsBoardIntegrationResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getIntegration();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.ThingsBoardIntegration.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.api.GetThingsBoardIntegrationResponse} The clone.
 */
proto.api.GetThingsBoardIntegrationResponse.prototype.cloneMessage = function() {
  return /** @type {!proto.api.GetThingsBoardIntegrationResponse} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional ThingsBoardIntegration integration = 1;
 * @return {proto.api.ThingsBoardIntegration}
 */
proto.api.GetThingsBoardIntegrationResponse.prototype.getIntegration = function() {
  return /** @type{proto.api.ThingsBoardIntegration} */ (
    jspb.Message.getWrapperField(this, proto.api.ThingsBoardIntegration, 1));
};


/** @param {proto.api.ThingsBoardIntegration|undefined} value  */
proto.api.GetThingsBoardIntegrationResponse.prototype.setIntegration = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.api.GetThingsBoardIntegrationResponse.prototype.clearIntegration = function() {
  this.setIntegration(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.api.GetThingsBoardIntegrationResponse.prototype.hasIntegration = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.UpdateThingsBoardIntegrationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.UpdateThingsBoardIntegrationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.api.UpdateThingsBoardIntegrationRequest.displayName = 'proto.api.UpdateThingsBoardIntegrationRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.UpdateThingsBoardIntegrationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.UpdateThingsBoardIntegrationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.UpdateThingsBoardIntegrationRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.api.UpdateThingsBoardIntegrationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    integration: (f = msg.getIntegration()) && proto.api.ThingsBoardIntegration.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.UpdateThingsBoardIntegrationRequest}
 */
proto.api.UpdateThingsBoardIntegrationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.UpdateThingsBoardIntegrationRequest;
  return proto.api.UpdateThingsBoardIntegrationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.UpdateThingsBoardIntegrationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.UpdateThingsBoardIntegrationRequest}
 */
proto.api.UpdateThingsBoardIntegrationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.ThingsBoardIntegration;
      reader.readMessage(value,proto.api.ThingsBoardIntegration.deserializeBinaryFromReader);
      msg.setIntegration(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.api.UpdateThingsBoardIntegrationRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.api.UpdateThingsBoardIntegrationRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.UpdateThingsBoardIntegrationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.api.UpdateThingsBoardIntegrationRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getIntegration();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.ThingsBoardIntegration.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.api.UpdateThingsBoardIntegrationRequest} The clone.
 */
proto.api.UpdateThingsBoardIntegrationRequest.prototype.cloneMessage = function() {
  return /** @type {!proto.api.UpdateThingsBoardIntegrationRequest} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional ThingsBoardIntegration integration = 1;
 * @return {proto.api.ThingsBoardIntegration}
 */
proto.api.UpdateThingsBoardIntegrationRequest.prototype.getIntegration = function() {
  return /** @type{proto.api.ThingsBoardIntegration} */ (
    jspb.Message.getWrapperField(this, proto.api.ThingsBoardIntegration, 1));
};


/** @param {proto.api.ThingsBoardIntegration|undefined} value  */
proto.api.UpdateThingsBoardIntegrationRequest.prototype.setIntegration = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.api.UpdateThingsBoardIntegrationRequest.prototype.clearIntegration = function() {
  this.setIntegration(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.api.UpdateThingsBoardIntegrationRequest.prototype.hasIntegration = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.DeleteThingsBoardIntegrationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.DeleteThingsBoardIntegrationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.api.DeleteThingsBoardIntegrationRequest.displayName = 'proto.api.DeleteThingsBoardIntegrationRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.DeleteThingsBoardIntegrationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.DeleteThingsBoardIntegrationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.DeleteThingsBoardIntegrationRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.api.DeleteThingsBoardIntegrationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    applicationId: msg.getApplicationId()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.DeleteThingsBoardIntegrationRequest}
 */
proto.api.DeleteThingsBoardIntegrationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.DeleteThingsBoardIntegrationRequest;
  return proto.api.DeleteThingsBoardIntegrationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.DeleteThingsBoardIntegrationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.DeleteThingsBoardIntegrationRequest}
 */
proto.api.DeleteThingsBoardIntegrationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setApplicationId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.api.DeleteThingsBoardIntegrationRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.api.DeleteThingsBoardIntegrationRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.DeleteThingsBoardIntegrationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.api.DeleteThingsBoardIntegrationRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getApplicationId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.api.DeleteThingsBoardIntegrationRequest} The clone.
 */
proto.api.DeleteThingsBoardIntegrationRequest.prototype.cloneMessage = function() {
  return /** @type {!proto.api.DeleteThingsBoardIntegrationRequest} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional int64 application_id = 1;
 * @return {number}
 */
proto.api.DeleteThingsBoardIntegrationRequest.prototype.getApplicationId = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 1, 0));
};


/** @param {number} value  */
proto.api.DeleteThingsBoardIntegrationRequest.prototype.setApplicationId = function(value) {
  jspb.Message.setField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.MyDevicesIntegration = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.MyDevicesIntegration, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.api.MyDevicesIntegration.displayName = 'proto.api.MyDevicesIntegration';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.MyDevicesIntegration.prototype.toObject = function(opt_includeInstance) {
  return proto.api.MyDevicesIntegration.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.MyDevicesIntegration} msg The msg instance to transform.
 * @return {!Object}
 */
proto.api.MyDevicesIntegration.toObject = function(includeInstance, msg) {
  var f, obj = {
    applicationId: msg.getApplicationId(),
    endpoint: msg.getEndpoint()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.MyDevicesIntegration}
 */
proto.api.MyDevicesIntegration.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.MyDevicesIntegration;
  return proto.api.MyDevicesIntegration.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.MyDevicesIntegration} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.MyDevicesIntegration}
 */
proto.api.MyDevicesIntegration.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setApplicationId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setEndpoint(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.api.MyDevicesIntegration} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.api.MyDevicesIntegration.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.MyDevicesIntegration.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.api.MyDevicesIntegration.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getApplicationId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = this.getEndpoint();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.api.MyDevicesIntegration} The clone.
 */
proto.api.MyDevicesIntegration.prototype.cloneMessage = function() {
  return /** @type {!proto.api.MyDevicesIntegration} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional int64 application_id = 1;
 * @return {number}
 */
proto.api.MyDevicesIntegration.prototype.getApplicationId = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 1, 0));
};


/** @param {number} value  */
proto.api.MyDevicesIntegration.prototype.setApplicationId = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string endpoint = 2;
 * @return {string}
 */
proto.api.MyDevicesIntegration.prototype.getEndpoint = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 2, ""));
};


/** @param {string} value  */
proto.api.MyDevicesIntegration.prototype.setEndpoint = function(value) {
  jspb.Message.setField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.CreateMyDevicesIntegrationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.CreateMyDevicesIntegrationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.api.CreateMyDevicesIntegrationRequest.displayName = 'proto.api.CreateMyDevicesIntegrationRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.CreateMyDevicesIntegrationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.CreateMyDevicesIntegrationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.CreateMyDevicesIntegrationRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.api.CreateMyDevicesIntegrationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    integration: (f = msg.getIntegration()) && proto.api.MyDevicesIntegration.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.CreateMyDevicesIntegrationRequest}
 */
proto.api.CreateMyDevicesIntegrationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.CreateMyDevicesIntegrationRequest;
  return proto.api.CreateMyDevicesIntegrationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.CreateMyDevicesIntegrationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.CreateMyDevicesIntegrationRequest}
 */
proto.api.CreateMyDevicesIntegrationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.MyDevicesIntegration;
      reader.readMessage(value,proto.api.MyDevicesIntegration.deserializeBinaryFromReader);
      msg.setIntegration(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.api.CreateMyDevicesIntegrationRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.api.CreateMyDevicesIntegrationRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.CreateMyDevicesIntegrationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.api.CreateMyDevicesIntegrationRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getIntegration();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.MyDevicesIntegration.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.api.CreateMyDevicesIntegrationRequest} The clone.
 */
proto.api.CreateMyDevicesIntegrationRequest.prototype.cloneMessage = function() {
  return /** @type {!proto.api.CreateMyDevicesIntegrationRequest} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional MyDevicesIntegration integration = 1;
 * @return {proto.api.MyDevicesIntegration}
 */
proto.api.CreateMyDevicesIntegrationRequest.prototype.getIntegration = function() {
  return /** @type{proto.api.MyDevicesIntegration} */ (
    jspb.Message.getWrapperField(this, proto.api.MyDevicesIntegration, 1));
};


/** @param {proto.api.MyDevicesIntegration|undefined} value  */
proto.api.CreateMyDevicesIntegrationRequest.prototype.setIntegration = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.api.CreateMyDevicesIntegrationRequest.prototype.clearIntegration = function() {
  this.setIntegration(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.api.CreateMyDevicesIntegrationRequest.prototype.hasIntegration = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.GetMyDevicesIntegrationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.GetMyDevicesIntegrationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.api.GetMyDevicesIntegrationRequest.displayName = 'proto.api.GetMyDevicesIntegrationRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.GetMyDevicesIntegrationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.GetMyDevicesIntegrationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.GetMyDevicesIntegrationRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.api.GetMyDevicesIntegrationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    applicationId: msg.getApplicationId()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.GetMyDevicesIntegrationRequest}
 */
proto.api.GetMyDevicesIntegrationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.GetMyDevicesIntegrationRequest;
  return proto.api.GetMyDevicesIntegrationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.GetMyDevicesIntegrationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.GetMyDevicesIntegrationRequest}
 */
proto.api.GetMyDevicesIntegrationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setApplicationId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.api.GetMyDevicesIntegrationRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.api.GetMyDevicesIntegrationRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.GetMyDevicesIntegrationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.api.GetMyDevicesIntegrationRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getApplicationId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.api.GetMyDevicesIntegrationRequest} The clone.
 */
proto.api.GetMyDevicesIntegrationRequest.prototype.cloneMessage = function() {
  return /** @type {!proto.api.GetMyDevicesIntegrationRequest} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional int64 application_id = 1;
 * @return {number}
 */
proto.api.GetMyDevicesIntegrationRequest.prototype.getApplicationId = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 1, 0));
};


/** @param {number} value  */
proto.api.GetMyDevicesIntegrationRequest.prototype.setApplicationId = function(value) {
  jspb.Message.setField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.GetMyDevicesIntegrationResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.GetMyDevicesIntegrationResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.api.GetMyDevicesIntegrationResponse.displayName = 'proto.api.GetMyDevicesIntegrationResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.GetMyDevicesIntegrationResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.GetMyDevicesIntegrationResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.GetMyDevicesIntegrationResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.api.GetMyDevicesIntegrationResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    integration: (f = msg.getIntegration()) && proto.api.MyDevicesIntegration.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.GetMyDevicesIntegrationResponse}
 */
proto.api.GetMyDevicesIntegrationResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.GetMyDevicesIntegrationResponse;
  return proto.api.GetMyDevicesIntegrationResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.GetMyDevicesIntegrationResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.GetMyDevicesIntegrationResponse}
 */
proto.api.GetMyDevicesIntegrationResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.MyDevicesIntegration;
      reader.readMessage(value,proto.api.MyDevicesIntegration.deserializeBinaryFromReader);
      msg.setIntegration(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.api.GetMyDevicesIntegrationResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.api.GetMyDevicesIntegrationResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.GetMyDevicesIntegrationResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.api.GetMyDevicesIntegrationResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getIntegration();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.MyDevicesIntegration.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.api.GetMyDevicesIntegrationResponse} The clone.
 */
proto.api.GetMyDevicesIntegrationResponse.prototype.cloneMessage = function() {
  return /** @type {!proto.api.GetMyDevicesIntegrationResponse} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional MyDevicesIntegration integration = 1;
 * @return {proto.api.MyDevicesIntegration}
 */
proto.api.GetMyDevicesIntegrationResponse.prototype.getIntegration = function() {
  return /** @type{proto.api.MyDevicesIntegration} */ (
    jspb.Message.getWrapperField(this, proto.api.MyDevicesIntegration, 1));
};


/** @param {proto.api.MyDevicesIntegration|undefined} value  */
proto.api.GetMyDevicesIntegrationResponse.prototype.setIntegration = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.api.GetMyDevicesIntegrationResponse.prototype.clearIntegration = function() {
  this.setIntegration(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.api.GetMyDevicesIntegrationResponse.prototype.hasIntegration = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.UpdateMyDevicesIntegrationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.UpdateMyDevicesIntegrationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.api.UpdateMyDevicesIntegrationRequest.displayName = 'proto.api.UpdateMyDevicesIntegrationRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.UpdateMyDevicesIntegrationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.UpdateMyDevicesIntegrationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.UpdateMyDevicesIntegrationRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.api.UpdateMyDevicesIntegrationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    integration: (f = msg.getIntegration()) && proto.api.MyDevicesIntegration.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.UpdateMyDevicesIntegrationRequest}
 */
proto.api.UpdateMyDevicesIntegrationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.UpdateMyDevicesIntegrationRequest;
  return proto.api.UpdateMyDevicesIntegrationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.UpdateMyDevicesIntegrationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.UpdateMyDevicesIntegrationRequest}
 */
proto.api.UpdateMyDevicesIntegrationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.MyDevicesIntegration;
      reader.readMessage(value,proto.api.MyDevicesIntegration.deserializeBinaryFromReader);
      msg.setIntegration(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.api.UpdateMyDevicesIntegrationRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.api.UpdateMyDevicesIntegrationRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.UpdateMyDevicesIntegrationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.api.UpdateMyDevicesIntegrationRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getIntegration();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.MyDevicesIntegration.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.api.UpdateMyDevicesIntegrationRequest} The clone.
 */
proto.api.UpdateMyDevicesIntegrationRequest.prototype.cloneMessage = function() {
  return /** @type {!proto.api.UpdateMyDevicesIntegrationRequest} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional MyDevicesIntegration integration = 1;
 * @return {proto.api.MyDevicesIntegration}
 */
proto.api.UpdateMyDevicesIntegrationRequest.prototype.getIntegration = function() {
  return /** @type{proto.api.MyDevicesIntegration} */ (
    jspb.Message.getWrapperField(this, proto.api.MyDevicesIntegration, 1));
};


/** @param {proto.api.MyDevicesIntegration|undefined} value  */
proto.api.UpdateMyDevicesIntegrationRequest.prototype.setIntegration = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.api.UpdateMyDevicesIntegrationRequest.prototype.clearIntegration = function() {
  this.setIntegration(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.api.UpdateMyDevicesIntegrationRequest.prototype.hasIntegration = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.DeleteMyDevicesIntegrationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.DeleteMyDevicesIntegrationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.api.DeleteMyDevicesIntegrationRequest.displayName = 'proto.api.DeleteMyDevicesIntegrationRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.DeleteMyDevicesIntegrationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.DeleteMyDevicesIntegrationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.DeleteMyDevicesIntegrationRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.api.DeleteMyDevicesIntegrationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    applicationId: msg.getApplicationId()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.DeleteMyDevicesIntegrationRequest}
 */
proto.api.DeleteMyDevicesIntegrationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.DeleteMyDevicesIntegrationRequest;
  return proto.api.DeleteMyDevicesIntegrationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.DeleteMyDevicesIntegrationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.DeleteMyDevicesIntegrationRequest}
 */
proto.api.DeleteMyDevicesIntegrationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setApplicationId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.api.DeleteMyDevicesIntegrationRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.api.DeleteMyDevicesIntegrationRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.DeleteMyDevicesIntegrationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.api.DeleteMyDevicesIntegrationRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getApplicationId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.api.DeleteMyDevicesIntegrationRequest} The clone.
 */
proto.api.DeleteMyDevicesIntegrationRequest.prototype.cloneMessage = function() {
  return /** @type {!proto.api.DeleteMyDevicesIntegrationRequest} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional int64 application_id = 1;
 * @return {number}
 */
proto.api.DeleteMyDevicesIntegrationRequest.prototype.getApplicationId = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 1, 0));
};


/** @param {number} value  */
proto.api.DeleteMyDevicesIntegrationRequest.prototype.setApplicationId = function(value) {
  jspb.Message.setField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.LoRaCloudIntegration = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.LoRaCloudIntegration, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.api.LoRaCloudIntegration.displayName = 'proto.api.LoRaCloudIntegration';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.LoRaCloudIntegration.prototype.toObject = function(opt_includeInstance) {
  return proto.api.LoRaCloudIntegration.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.LoRaCloudIntegration} msg The msg instance to transform.
 * @return {!Object}
 */
proto.api.LoRaCloudIntegration.toObject = function(includeInstance, msg) {
  var f, obj = {
    applicationId: msg.getApplicationId(),
    geolocation: msg.getGeolocation(),
    geolocationToken: msg.getGeolocationToken(),
    geolocationBufferTtl: msg.getGeolocationBufferTtl(),
    geolocationMinBufferSize: msg.getGeolocationMinBufferSize(),
    geolocationTdoa: msg.getGeolocationTdoa(),
    geolocationRssi: msg.getGeolocationRssi(),
    geolocationGnss: msg.getGeolocationGnss(),
    geolocationGnssPayloadField: msg.getGeolocationGnssPayloadField(),
    geolocationGnssUseRxTime: msg.getGeolocationGnssUseRxTime(),
    geolocationWifi: msg.getGeolocationWifi(),
    geolocationWifiPayloadField: msg.getGeolocationWifiPayloadField(),
    das: msg.getDas(),
    dasToken: msg.getDasToken(),
    dasModemPort: msg.getDasModemPort(),
    dasGnssPort: msg.getDasGnssPort(),
    dasGnssUseRxTime: msg.getDasGnssUseRxTime()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.LoRaCloudIntegration}
 */
proto.api.LoRaCloudIntegration.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.LoRaCloudIntegration;
  return proto.api.LoRaCloudIntegration.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.LoRaCloudIntegration} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.LoRaCloudIntegration}
 */
proto.api.LoRaCloudIntegration.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setApplicationId(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setGeolocation(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setGeolocationToken(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setGeolocationBufferTtl(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setGeolocationMinBufferSize(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setGeolocationTdoa(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setGeolocationRssi(value);
      break;
    case 8:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setGeolocationGnss(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setGeolocationGnssPayloadField(value);
      break;
    case 10:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setGeolocationGnssUseRxTime(value);
      break;
    case 11:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setGeolocationWifi(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setGeolocationWifiPayloadField(value);
      break;
    case 13:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDas(value);
      break;
    case 14:
      var value = /** @type {string} */ (reader.readString());
      msg.setDasToken(value);
      break;
    case 15:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setDasModemPort(value);
      break;
    case 16:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setDasGnssPort(value);
      break;
    case 17:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDasGnssUseRxTime(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.api.LoRaCloudIntegration} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.api.LoRaCloudIntegration.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.LoRaCloudIntegration.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.api.LoRaCloudIntegration.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getApplicationId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = this.getGeolocation();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = this.getGeolocationToken();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = this.getGeolocationBufferTtl();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = this.getGeolocationMinBufferSize();
  if (f !== 0) {
    writer.writeUint32(
      5,
      f
    );
  }
  f = this.getGeolocationTdoa();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
  f = this.getGeolocationRssi();
  if (f) {
    writer.writeBool(
      7,
      f
    );
  }
  f = this.getGeolocationGnss();
  if (f) {
    writer.writeBool(
      8,
      f
    );
  }
  f = this.getGeolocationGnssPayloadField();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = this.getGeolocationGnssUseRxTime();
  if (f) {
    writer.writeBool(
      10,
      f
    );
  }
  f = this.getGeolocationWifi();
  if (f) {
    writer.writeBool(
      11,
      f
    );
  }
  f = this.getGeolocationWifiPayloadField();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = this.getDas();
  if (f) {
    writer.writeBool(
      13,
      f
    );
  }
  f = this.getDasToken();
  if (f.length > 0) {
    writer.writeString(
      14,
      f
    );
  }
  f = this.getDasModemPort();
  if (f !== 0) {
    writer.writeUint32(
      15,
      f
    );
  }
  f = this.getDasGnssPort();
  if (f !== 0) {
    writer.writeUint32(
      16,
      f
    );
  }
  f = this.getDasGnssUseRxTime();
  if (f) {
    writer.writeBool(
      17,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.api.LoRaCloudIntegration} The clone.
 */
proto.api.LoRaCloudIntegration.prototype.cloneMessage = function() {
  return /** @type {!proto.api.LoRaCloudIntegration} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional int64 application_id = 1;
 * @return {number}
 */
proto.api.LoRaCloudIntegration.prototype.getApplicationId = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 1, 0));
};


/** @param {number} value  */
proto.api.LoRaCloudIntegration.prototype.setApplicationId = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional bool geolocation = 2;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.api.LoRaCloudIntegration.prototype.getGeolocation = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldProto3(this, 2, false));
};


/** @param {boolean} value  */
proto.api.LoRaCloudIntegration.prototype.setGeolocation = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional string geolocation_token = 3;
 * @return {string}
 */
proto.api.LoRaCloudIntegration.prototype.getGeolocationToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 3, ""));
};


/** @param {string} value  */
proto.api.LoRaCloudIntegration.prototype.setGeolocationToken = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional uint32 geolocation_buffer_ttl = 4;
 * @return {number}
 */
proto.api.LoRaCloudIntegration.prototype.getGeolocationBufferTtl = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 4, 0));
};


/** @param {number} value  */
proto.api.LoRaCloudIntegration.prototype.setGeolocationBufferTtl = function(value) {
  jspb.Message.setField(this, 4, value);
};


/**
 * optional uint32 geolocation_min_buffer_size = 5;
 * @return {number}
 */
proto.api.LoRaCloudIntegration.prototype.getGeolocationMinBufferSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 5, 0));
};


/** @param {number} value  */
proto.api.LoRaCloudIntegration.prototype.setGeolocationMinBufferSize = function(value) {
  jspb.Message.setField(this, 5, value);
};


/**
 * optional bool geolocation_tdoa = 6;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.api.LoRaCloudIntegration.prototype.getGeolocationTdoa = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldProto3(this, 6, false));
};


/** @param {boolean} value  */
proto.api.LoRaCloudIntegration.prototype.setGeolocationTdoa = function(value) {
  jspb.Message.setField(this, 6, value);
};


/**
 * optional bool geolocation_rssi = 7;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.api.LoRaCloudIntegration.prototype.getGeolocationRssi = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldProto3(this, 7, false));
};


/** @param {boolean} value  */
proto.api.LoRaCloudIntegration.prototype.setGeolocationRssi = function(value) {
  jspb.Message.setField(this, 7, value);
};


/**
 * optional bool geolocation_gnss = 8;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.api.LoRaCloudIntegration.prototype.getGeolocationGnss = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldProto3(this, 8, false));
};


/** @param {boolean} value  */
proto.api.LoRaCloudIntegration.prototype.setGeolocationGnss = function(value) {
  jspb.Message.setField(this, 8, value);
};


/**
 * optional string geolocation_gnss_payload_field = 9;
 * @return {string}
 */
proto.api.LoRaCloudIntegration.prototype.getGeolocationGnssPayloadField = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 9, ""));
};


/** @param {string} value  */
proto.api.LoRaCloudIntegration.prototype.setGeolocationGnssPayloadField = function(value) {
  jspb.Message.setField(this, 9, value);
};


/**
 * optional bool geolocation_gnss_use_rx_time = 10;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.api.LoRaCloudIntegration.prototype.getGeolocationGnssUseRxTime = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldProto3(this, 10, false));
};


/** @param {boolean} value  */
proto.api.LoRaCloudIntegration.prototype.setGeolocationGnssUseRxTime = function(value) {
  jspb.Message.setField(this, 10, value);
};


/**
 * optional bool geolocation_wifi = 11;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.api.LoRaCloudIntegration.prototype.getGeolocationWifi = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldProto3(this, 11, false));
};


/** @param {boolean} value  */
proto.api.LoRaCloudIntegration.prototype.setGeolocationWifi = function(value) {
  jspb.Message.setField(this, 11, value);
};


/**
 * optional string geolocation_wifi_payload_field = 12;
 * @return {string}
 */
proto.api.LoRaCloudIntegration.prototype.getGeolocationWifiPayloadField = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 12, ""));
};


/** @param {string} value  */
proto.api.LoRaCloudIntegration.prototype.setGeolocationWifiPayloadField = function(value) {
  jspb.Message.setField(this, 12, value);
};


/**
 * optional bool das = 13;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.api.LoRaCloudIntegration.prototype.getDas = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldProto3(this, 13, false));
};


/** @param {boolean} value  */
proto.api.LoRaCloudIntegration.prototype.setDas = function(value) {
  jspb.Message.setField(this, 13, value);
};


/**
 * optional string das_token = 14;
 * @return {string}
 */
proto.api.LoRaCloudIntegration.prototype.getDasToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 14, ""));
};


/** @param {string} value  */
proto.api.LoRaCloudIntegration.prototype.setDasToken = function(value) {
  jspb.Message.setField(this, 14, value);
};


/**
 * optional uint32 das_modem_port = 15;
 * @return {number}
 */
proto.api.LoRaCloudIntegration.prototype.getDasModemPort = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 15, 0));
};


/** @param {number} value  */
proto.api.LoRaCloudIntegration.prototype.setDasModemPort = function(value) {
  jspb.Message.setField(this, 15, value);
};


/**
 * optional uint32 das_gnss_port = 16;
 * @return {number}
 */
proto.api.LoRaCloudIntegration.prototype.getDasGnssPort = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 16, 0));
};


/** @param {number} value  */
proto.api.LoRaCloudIntegration.prototype.setDasGnssPort = function(value) {
  jspb.Message.setField(this, 16, value);
};


/**
 * optional bool das_gnss_use_rx_time = 17;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.api.LoRaCloudIntegration.prototype.getDasGnssUseRxTime = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldProto3(this, 17, false));
};


/** @param {boolean} value  */
proto.api.LoRaCloudIntegration.prototype.setDasGnssUseRxTime = function(value) {
  jspb.Message.setField(this, 17, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.CreateLoRaCloudIntegrationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.CreateLoRaCloudIntegrationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.api.CreateLoRaCloudIntegrationRequest.displayName = 'proto.api.CreateLoRaCloudIntegrationRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.CreateLoRaCloudIntegrationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.CreateLoRaCloudIntegrationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.CreateLoRaCloudIntegrationRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.api.CreateLoRaCloudIntegrationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    integration: (f = msg.getIntegration()) && proto.api.LoRaCloudIntegration.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.CreateLoRaCloudIntegrationRequest}
 */
proto.api.CreateLoRaCloudIntegrationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.CreateLoRaCloudIntegrationRequest;
  return proto.api.CreateLoRaCloudIntegrationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.CreateLoRaCloudIntegrationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.CreateLoRaCloudIntegrationRequest}
 */
proto.api.CreateLoRaCloudIntegrationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.LoRaCloudIntegration;
      reader.readMessage(value,proto.api.LoRaCloudIntegration.deserializeBinaryFromReader);
      msg.setIntegration(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.api.CreateLoRaCloudIntegrationRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.api.CreateLoRaCloudIntegrationRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.CreateLoRaCloudIntegrationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.api.CreateLoRaCloudIntegrationRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getIntegration();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.LoRaCloudIntegration.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.api.CreateLoRaCloudIntegrationRequest} The clone.
 */
proto.api.CreateLoRaCloudIntegrationRequest.prototype.cloneMessage = function() {
  return /** @type {!proto.api.CreateLoRaCloudIntegrationRequest} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional LoRaCloudIntegration integration = 1;
 * @return {proto.api.LoRaCloudIntegration}
 */
proto.api.CreateLoRaCloudIntegrationRequest.prototype.getIntegration = function() {
  return /** @type{proto.api.LoRaCloudIntegration} */ (
    jspb.Message.getWrapperField(this, proto.api.LoRaCloudIntegration, 1));
};


/** @param {proto.api.LoRaCloudIntegration|undefined} value  */
proto.api.CreateLoRaCloudIntegrationRequest.prototype.setIntegration = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.api.CreateLoRaCloudIntegrationRequest.prototype.clearIntegration = function() {
  this.setIntegration(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.api.CreateLoRaCloudIntegrationRequest.prototype.hasIntegration = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.GetLoRaCloudIntegrationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.GetLoRaCloudIntegrationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.api.GetLoRaCloudIntegrationRequest.displayName = 'proto.api.GetLoRaCloudIntegrationRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.GetLoRaCloudIntegrationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.GetLoRaCloudIntegrationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.GetLoRaCloudIntegrationRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.api.GetLoRaCloudIntegrationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    applicationId: msg.getApplicationId()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.GetLoRaCloudIntegrationRequest}
 */
proto.api.GetLoRaCloudIntegrationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.GetLoRaCloudIntegrationRequest;
  return proto.api.GetLoRaCloudIntegrationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.GetLoRaCloudIntegrationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.GetLoRaCloudIntegrationRequest}
 */
proto.api.GetLoRaCloudIntegrationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setApplicationId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.api.GetLoRaCloudIntegrationRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.api.GetLoRaCloudIntegrationRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.GetLoRaCloudIntegrationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.api.GetLoRaCloudIntegrationRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getApplicationId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.api.GetLoRaCloudIntegrationRequest} The clone.
 */
proto.api.GetLoRaCloudIntegrationRequest.prototype.cloneMessage = function() {
  return /** @type {!proto.api.GetLoRaCloudIntegrationRequest} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional int64 application_id = 1;
 * @return {number}
 */
proto.api.GetLoRaCloudIntegrationRequest.prototype.getApplicationId = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 1, 0));
};


/** @param {number} value  */
proto.api.GetLoRaCloudIntegrationRequest.prototype.setApplicationId = function(value) {
  jspb.Message.setField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.GetLoRaCloudIntegrationResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.GetLoRaCloudIntegrationResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.api.GetLoRaCloudIntegrationResponse.displayName = 'proto.api.GetLoRaCloudIntegrationResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.GetLoRaCloudIntegrationResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.GetLoRaCloudIntegrationResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.GetLoRaCloudIntegrationResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.api.GetLoRaCloudIntegrationResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    integration: (f = msg.getIntegration()) && proto.api.LoRaCloudIntegration.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.GetLoRaCloudIntegrationResponse}
 */
proto.api.GetLoRaCloudIntegrationResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.GetLoRaCloudIntegrationResponse;
  return proto.api.GetLoRaCloudIntegrationResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.GetLoRaCloudIntegrationResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.GetLoRaCloudIntegrationResponse}
 */
proto.api.GetLoRaCloudIntegrationResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.LoRaCloudIntegration;
      reader.readMessage(value,proto.api.LoRaCloudIntegration.deserializeBinaryFromReader);
      msg.setIntegration(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.api.GetLoRaCloudIntegrationResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.api.GetLoRaCloudIntegrationResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.GetLoRaCloudIntegrationResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.api.GetLoRaCloudIntegrationResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getIntegration();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.LoRaCloudIntegration.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.api.GetLoRaCloudIntegrationResponse} The clone.
 */
proto.api.GetLoRaCloudIntegrationResponse.prototype.cloneMessage = function() {
  return /** @type {!proto.api.GetLoRaCloudIntegrationResponse} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional LoRaCloudIntegration integration = 1;
 * @return {proto.api.LoRaCloudIntegration}
 */
proto.api.GetLoRaCloudIntegrationResponse.prototype.getIntegration = function() {
  return /** @type{proto.api.LoRaCloudIntegration} */ (
    jspb.Message.getWrapperField(this, proto.api.LoRaCloudIntegration, 1));
};


/** @param {proto.api.LoRaCloudIntegration|undefined} value  */
proto.api.GetLoRaCloudIntegrationResponse.prototype.setIntegration = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.api.GetLoRaCloudIntegrationResponse.prototype.clearIntegration = function() {
  this.setIntegration(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.api.GetLoRaCloudIntegrationResponse.prototype.hasIntegration = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.UpdateLoRaCloudIntegrationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.UpdateLoRaCloudIntegrationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.api.UpdateLoRaCloudIntegrationRequest.displayName = 'proto.api.UpdateLoRaCloudIntegrationRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.UpdateLoRaCloudIntegrationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.UpdateLoRaCloudIntegrationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.UpdateLoRaCloudIntegrationRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.api.UpdateLoRaCloudIntegrationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    integration: (f = msg.getIntegration()) && proto.api.LoRaCloudIntegration.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.UpdateLoRaCloudIntegrationRequest}
 */
proto.api.UpdateLoRaCloudIntegrationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.UpdateLoRaCloudIntegrationRequest;
  return proto.api.UpdateLoRaCloudIntegrationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.UpdateLoRaCloudIntegrationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.UpdateLoRaCloudIntegrationRequest}
 */
proto.api.UpdateLoRaCloudIntegrationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.LoRaCloudIntegration;
      reader.readMessage(value,proto.api.LoRaCloudIntegration.deserializeBinaryFromReader);
      msg.setIntegration(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.api.UpdateLoRaCloudIntegrationRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.api.UpdateLoRaCloudIntegrationRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.UpdateLoRaCloudIntegrationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.api.UpdateLoRaCloudIntegrationRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getIntegration();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.LoRaCloudIntegration.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.api.UpdateLoRaCloudIntegrationRequest} The clone.
 */
proto.api.UpdateLoRaCloudIntegrationRequest.prototype.cloneMessage = function() {
  return /** @type {!proto.api.UpdateLoRaCloudIntegrationRequest} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional LoRaCloudIntegration integration = 1;
 * @return {proto.api.LoRaCloudIntegration}
 */
proto.api.UpdateLoRaCloudIntegrationRequest.prototype.getIntegration = function() {
  return /** @type{proto.api.LoRaCloudIntegration} */ (
    jspb.Message.getWrapperField(this, proto.api.LoRaCloudIntegration, 1));
};


/** @param {proto.api.LoRaCloudIntegration|undefined} value  */
proto.api.UpdateLoRaCloudIntegrationRequest.prototype.setIntegration = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.api.UpdateLoRaCloudIntegrationRequest.prototype.clearIntegration = function() {
  this.setIntegration(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.api.UpdateLoRaCloudIntegrationRequest.prototype.hasIntegration = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.DeleteLoRaCloudIntegrationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.DeleteLoRaCloudIntegrationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.api.DeleteLoRaCloudIntegrationRequest.displayName = 'proto.api.DeleteLoRaCloudIntegrationRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.DeleteLoRaCloudIntegrationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.DeleteLoRaCloudIntegrationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.DeleteLoRaCloudIntegrationRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.api.DeleteLoRaCloudIntegrationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    applicationId: msg.getApplicationId()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.DeleteLoRaCloudIntegrationRequest}
 */
proto.api.DeleteLoRaCloudIntegrationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.DeleteLoRaCloudIntegrationRequest;
  return proto.api.DeleteLoRaCloudIntegrationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.DeleteLoRaCloudIntegrationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.DeleteLoRaCloudIntegrationRequest}
 */
proto.api.DeleteLoRaCloudIntegrationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setApplicationId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.api.DeleteLoRaCloudIntegrationRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.api.DeleteLoRaCloudIntegrationRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.DeleteLoRaCloudIntegrationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.api.DeleteLoRaCloudIntegrationRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getApplicationId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.api.DeleteLoRaCloudIntegrationRequest} The clone.
 */
proto.api.DeleteLoRaCloudIntegrationRequest.prototype.cloneMessage = function() {
  return /** @type {!proto.api.DeleteLoRaCloudIntegrationRequest} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional int64 application_id = 1;
 * @return {number}
 */
proto.api.DeleteLoRaCloudIntegrationRequest.prototype.getApplicationId = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 1, 0));
};


/** @param {number} value  */
proto.api.DeleteLoRaCloudIntegrationRequest.prototype.setApplicationId = function(value) {
  jspb.Message.setField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.GCPPubSubIntegration = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.GCPPubSubIntegration, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.api.GCPPubSubIntegration.displayName = 'proto.api.GCPPubSubIntegration';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.GCPPubSubIntegration.prototype.toObject = function(opt_includeInstance) {
  return proto.api.GCPPubSubIntegration.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.GCPPubSubIntegration} msg The msg instance to transform.
 * @return {!Object}
 */
proto.api.GCPPubSubIntegration.toObject = function(includeInstance, msg) {
  var f, obj = {
    applicationId: msg.getApplicationId(),
    marshaler: msg.getMarshaler(),
    credentialsFile: msg.getCredentialsFile(),
    projectId: msg.getProjectId(),
    topicName: msg.getTopicName()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.GCPPubSubIntegration}
 */
proto.api.GCPPubSubIntegration.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.GCPPubSubIntegration;
  return proto.api.GCPPubSubIntegration.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.GCPPubSubIntegration} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.GCPPubSubIntegration}
 */
proto.api.GCPPubSubIntegration.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setApplicationId(value);
      break;
    case 2:
      var value = /** @type {!proto.api.Marshaler} */ (reader.readEnum());
      msg.setMarshaler(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setCredentialsFile(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setProjectId(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setTopicName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.api.GCPPubSubIntegration} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.api.GCPPubSubIntegration.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.GCPPubSubIntegration.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.api.GCPPubSubIntegration.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getApplicationId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = this.getMarshaler();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = this.getCredentialsFile();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = this.getProjectId();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = this.getTopicName();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.api.GCPPubSubIntegration} The clone.
 */
proto.api.GCPPubSubIntegration.prototype.cloneMessage = function() {
  return /** @type {!proto.api.GCPPubSubIntegration} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional int64 application_id = 1;
 * @return {number}
 */
proto.api.GCPPubSubIntegration.prototype.getApplicationId = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 1, 0));
};


/** @param {number} value  */
proto.api.GCPPubSubIntegration.prototype.setApplicationId = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional Marshaler marshaler = 2;
 * @return {!proto.api.Marshaler}
 */
proto.api.GCPPubSubIntegration.prototype.getMarshaler = function() {
  return /** @type {!proto.api.Marshaler} */ (jspb.Message.getFieldProto3(this, 2, 0));
};


/** @param {!proto.api.Marshaler} value  */
proto.api.GCPPubSubIntegration.prototype.setMarshaler = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional string credentials_file = 3;
 * @return {string}
 */
proto.api.GCPPubSubIntegration.prototype.getCredentialsFile = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 3, ""));
};


/** @param {string} value  */
proto.api.GCPPubSubIntegration.prototype.setCredentialsFile = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional string project_id = 4;
 * @return {string}
 */
proto.api.GCPPubSubIntegration.prototype.getProjectId = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 4, ""));
};


/** @param {string} value  */
proto.api.GCPPubSubIntegration.prototype.setProjectId = function(value) {
  jspb.Message.setField(this, 4, value);
};


/**
 * optional string topic_name = 5;
 * @return {string}
 */
proto.api.GCPPubSubIntegration.prototype.getTopicName = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 5, ""));
};


/** @param {string} value  */
proto.api.GCPPubSubIntegration.prototype.setTopicName = function(value) {
  jspb.Message.setField(this, 5, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.CreateGCPPubSubIntegrationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.CreateGCPPubSubIntegrationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.api.CreateGCPPubSubIntegrationRequest.displayName = 'proto.api.CreateGCPPubSubIntegrationRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.CreateGCPPubSubIntegrationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.CreateGCPPubSubIntegrationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.CreateGCPPubSubIntegrationRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.api.CreateGCPPubSubIntegrationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    integration: (f = msg.getIntegration()) && proto.api.GCPPubSubIntegration.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.CreateGCPPubSubIntegrationRequest}
 */
proto.api.CreateGCPPubSubIntegrationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.CreateGCPPubSubIntegrationRequest;
  return proto.api.CreateGCPPubSubIntegrationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.CreateGCPPubSubIntegrationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.CreateGCPPubSubIntegrationRequest}
 */
proto.api.CreateGCPPubSubIntegrationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.GCPPubSubIntegration;
      reader.readMessage(value,proto.api.GCPPubSubIntegration.deserializeBinaryFromReader);
      msg.setIntegration(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.api.CreateGCPPubSubIntegrationRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.api.CreateGCPPubSubIntegrationRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.CreateGCPPubSubIntegrationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.api.CreateGCPPubSubIntegrationRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getIntegration();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.GCPPubSubIntegration.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.api.CreateGCPPubSubIntegrationRequest} The clone.
 */
proto.api.CreateGCPPubSubIntegrationRequest.prototype.cloneMessage = function() {
  return /** @type {!proto.api.CreateGCPPubSubIntegrationRequest} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional GCPPubSubIntegration integration = 1;
 * @return {proto.api.GCPPubSubIntegration}
 */
proto.api.CreateGCPPubSubIntegrationRequest.prototype.getIntegration = function() {
  return /** @type{proto.api.GCPPubSubIntegration} */ (
    jspb.Message.getWrapperField(this, proto.api.GCPPubSubIntegration, 1));
};


/** @param {proto.api.GCPPubSubIntegration|undefined} value  */
proto.api.CreateGCPPubSubIntegrationRequest.prototype.setIntegration = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.api.CreateGCPPubSubIntegrationRequest.prototype.clearIntegration = function() {
  this.setIntegration(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.api.CreateGCPPubSubIntegrationRequest.prototype.hasIntegration = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.GetGCPPubSubIntegrationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.GetGCPPubSubIntegrationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.api.GetGCPPubSubIntegrationRequest.displayName = 'proto.api.GetGCPPubSubIntegrationRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.GetGCPPubSubIntegrationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.GetGCPPubSubIntegrationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.GetGCPPubSubIntegrationRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.api.GetGCPPubSubIntegrationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    applicationId: msg.getApplicationId()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.GetGCPPubSubIntegrationRequest}
 */
proto.api.GetGCPPubSubIntegrationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.GetGCPPubSubIntegrationRequest;
  return proto.api.GetGCPPubSubIntegrationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.GetGCPPubSubIntegrationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.GetGCPPubSubIntegrationRequest}
 */
proto.api.GetGCPPubSubIntegrationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setApplicationId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.api.GetGCPPubSubIntegrationRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.api.GetGCPPubSubIntegrationRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.GetGCPPubSubIntegrationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.api.GetGCPPubSubIntegrationRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getApplicationId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.api.GetGCPPubSubIntegrationRequest} The clone.
 */
proto.api.GetGCPPubSubIntegrationRequest.prototype.cloneMessage = function() {
  return /** @type {!proto.api.GetGCPPubSubIntegrationRequest} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional int64 application_id = 1;
 * @return {number}
 */
proto.api.GetGCPPubSubIntegrationRequest.prototype.getApplicationId = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 1, 0));
};


/** @param {number} value  */
proto.api.GetGCPPubSubIntegrationRequest.prototype.setApplicationId = function(value) {
  jspb.Message.setField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.GetGCPPubSubIntegrationResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.GetGCPPubSubIntegrationResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.api.GetGCPPubSubIntegrationResponse.displayName = 'proto.api.GetGCPPubSubIntegrationResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.GetGCPPubSubIntegrationResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.GetGCPPubSubIntegrationResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.GetGCPPubSubIntegrationResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.api.GetGCPPubSubIntegrationResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    integration: (f = msg.getIntegration()) && proto.api.GCPPubSubIntegration.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.GetGCPPubSubIntegrationResponse}
 */
proto.api.GetGCPPubSubIntegrationResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.GetGCPPubSubIntegrationResponse;
  return proto.api.GetGCPPubSubIntegrationResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.GetGCPPubSubIntegrationResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.GetGCPPubSubIntegrationResponse}
 */
proto.api.GetGCPPubSubIntegrationResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.GCPPubSubIntegration;
      reader.readMessage(value,proto.api.GCPPubSubIntegration.deserializeBinaryFromReader);
      msg.setIntegration(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.api.GetGCPPubSubIntegrationResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.api.GetGCPPubSubIntegrationResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.GetGCPPubSubIntegrationResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.api.GetGCPPubSubIntegrationResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getIntegration();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.GCPPubSubIntegration.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.api.GetGCPPubSubIntegrationResponse} The clone.
 */
proto.api.GetGCPPubSubIntegrationResponse.prototype.cloneMessage = function() {
  return /** @type {!proto.api.GetGCPPubSubIntegrationResponse} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional GCPPubSubIntegration integration = 1;
 * @return {proto.api.GCPPubSubIntegration}
 */
proto.api.GetGCPPubSubIntegrationResponse.prototype.getIntegration = function() {
  return /** @type{proto.api.GCPPubSubIntegration} */ (
    jspb.Message.getWrapperField(this, proto.api.GCPPubSubIntegration, 1));
};


/** @param {proto.api.GCPPubSubIntegration|undefined} value  */
proto.api.GetGCPPubSubIntegrationResponse.prototype.setIntegration = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.api.GetGCPPubSubIntegrationResponse.prototype.clearIntegration = function() {
  this.setIntegration(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.api.GetGCPPubSubIntegrationResponse.prototype.hasIntegration = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.UpdateGCPPubSubIntegrationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.UpdateGCPPubSubIntegrationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.api.UpdateGCPPubSubIntegrationRequest.displayName = 'proto.api.UpdateGCPPubSubIntegrationRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.UpdateGCPPubSubIntegrationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.UpdateGCPPubSubIntegrationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.UpdateGCPPubSubIntegrationRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.api.UpdateGCPPubSubIntegrationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    integration: (f = msg.getIntegration()) && proto.api.GCPPubSubIntegration.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.UpdateGCPPubSubIntegrationRequest}
 */
proto.api.UpdateGCPPubSubIntegrationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.UpdateGCPPubSubIntegrationRequest;
  return proto.api.UpdateGCPPubSubIntegrationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.UpdateGCPPubSubIntegrationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.UpdateGCPPubSubIntegrationRequest}
 */
proto.api.UpdateGCPPubSubIntegrationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.GCPPubSubIntegration;
      reader.readMessage(value,proto.api.GCPPubSubIntegration.deserializeBinaryFromReader);
      msg.setIntegration(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.api.UpdateGCPPubSubIntegrationRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.api.UpdateGCPPubSubIntegrationRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.UpdateGCPPubSubIntegrationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.api.UpdateGCPPubSubIntegrationRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getIntegration();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.GCPPubSubIntegration.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.api.UpdateGCPPubSubIntegrationRequest} The clone.
 */
proto.api.UpdateGCPPubSubIntegrationRequest.prototype.cloneMessage = function() {
  return /** @type {!proto.api.UpdateGCPPubSubIntegrationRequest} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional GCPPubSubIntegration integration = 1;
 * @return {proto.api.GCPPubSubIntegration}
 */
proto.api.UpdateGCPPubSubIntegrationRequest.prototype.getIntegration = function() {
  return /** @type{proto.api.GCPPubSubIntegration} */ (
    jspb.Message.getWrapperField(this, proto.api.GCPPubSubIntegration, 1));
};


/** @param {proto.api.GCPPubSubIntegration|undefined} value  */
proto.api.UpdateGCPPubSubIntegrationRequest.prototype.setIntegration = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.api.UpdateGCPPubSubIntegrationRequest.prototype.clearIntegration = function() {
  this.setIntegration(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.api.UpdateGCPPubSubIntegrationRequest.prototype.hasIntegration = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.DeleteGCPPubSubIntegrationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.DeleteGCPPubSubIntegrationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.api.DeleteGCPPubSubIntegrationRequest.displayName = 'proto.api.DeleteGCPPubSubIntegrationRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.DeleteGCPPubSubIntegrationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.DeleteGCPPubSubIntegrationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.DeleteGCPPubSubIntegrationRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.api.DeleteGCPPubSubIntegrationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    applicationId: msg.getApplicationId()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.DeleteGCPPubSubIntegrationRequest}
 */
proto.api.DeleteGCPPubSubIntegrationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.DeleteGCPPubSubIntegrationRequest;
  return proto.api.DeleteGCPPubSubIntegrationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.DeleteGCPPubSubIntegrationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.DeleteGCPPubSubIntegrationRequest}
 */
proto.api.DeleteGCPPubSubIntegrationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setApplicationId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.api.DeleteGCPPubSubIntegrationRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.api.DeleteGCPPubSubIntegrationRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.DeleteGCPPubSubIntegrationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.api.DeleteGCPPubSubIntegrationRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getApplicationId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.api.DeleteGCPPubSubIntegrationRequest} The clone.
 */
proto.api.DeleteGCPPubSubIntegrationRequest.prototype.cloneMessage = function() {
  return /** @type {!proto.api.DeleteGCPPubSubIntegrationRequest} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional int64 application_id = 1;
 * @return {number}
 */
proto.api.DeleteGCPPubSubIntegrationRequest.prototype.getApplicationId = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 1, 0));
};


/** @param {number} value  */
proto.api.DeleteGCPPubSubIntegrationRequest.prototype.setApplicationId = function(value) {
  jspb.Message.setField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.AWSSNSIntegration = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.AWSSNSIntegration, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.api.AWSSNSIntegration.displayName = 'proto.api.AWSSNSIntegration';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.AWSSNSIntegration.prototype.toObject = function(opt_includeInstance) {
  return proto.api.AWSSNSIntegration.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.AWSSNSIntegration} msg The msg instance to transform.
 * @return {!Object}
 */
proto.api.AWSSNSIntegration.toObject = function(includeInstance, msg) {
  var f, obj = {
    applicationId: msg.getApplicationId(),
    marshaler: msg.getMarshaler(),
    region: msg.getRegion(),
    accessKeyId: msg.getAccessKeyId(),
    secretAccessKey: msg.getSecretAccessKey(),
    topicArn: msg.getTopicArn()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.AWSSNSIntegration}
 */
proto.api.AWSSNSIntegration.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.AWSSNSIntegration;
  return proto.api.AWSSNSIntegration.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.AWSSNSIntegration} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.AWSSNSIntegration}
 */
proto.api.AWSSNSIntegration.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setApplicationId(value);
      break;
    case 2:
      var value = /** @type {!proto.api.Marshaler} */ (reader.readEnum());
      msg.setMarshaler(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setRegion(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccessKeyId(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setSecretAccessKey(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setTopicArn(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.api.AWSSNSIntegration} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.api.AWSSNSIntegration.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.AWSSNSIntegration.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.api.AWSSNSIntegration.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getApplicationId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = this.getMarshaler();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = this.getRegion();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = this.getAccessKeyId();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = this.getSecretAccessKey();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = this.getTopicArn();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.api.AWSSNSIntegration} The clone.
 */
proto.api.AWSSNSIntegration.prototype.cloneMessage = function() {
  return /** @type {!proto.api.AWSSNSIntegration} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional int64 application_id = 1;
 * @return {number}
 */
proto.api.AWSSNSIntegration.prototype.getApplicationId = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 1, 0));
};


/** @param {number} value  */
proto.api.AWSSNSIntegration.prototype.setApplicationId = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional Marshaler marshaler = 2;
 * @return {!proto.api.Marshaler}
 */
proto.api.AWSSNSIntegration.prototype.getMarshaler = function() {
  return /** @type {!proto.api.Marshaler} */ (jspb.Message.getFieldProto3(this, 2, 0));
};


/** @param {!proto.api.Marshaler} value  */
proto.api.AWSSNSIntegration.prototype.setMarshaler = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional string region = 3;
 * @return {string}
 */
proto.api.AWSSNSIntegration.prototype.getRegion = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 3, ""));
};


/** @param {string} value  */
proto.api.AWSSNSIntegration.prototype.setRegion = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional string access_key_id = 4;
 * @return {string}
 */
proto.api.AWSSNSIntegration.prototype.getAccessKeyId = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 4, ""));
};


/** @param {string} value  */
proto.api.AWSSNSIntegration.prototype.setAccessKeyId = function(value) {
  jspb.Message.setField(this, 4, value);
};


/**
 * optional string secret_access_key = 5;
 * @return {string}
 */
proto.api.AWSSNSIntegration.prototype.getSecretAccessKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 5, ""));
};


/** @param {string} value  */
proto.api.AWSSNSIntegration.prototype.setSecretAccessKey = function(value) {
  jspb.Message.setField(this, 5, value);
};


/**
 * optional string topic_arn = 6;
 * @return {string}
 */
proto.api.AWSSNSIntegration.prototype.getTopicArn = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 6, ""));
};


/** @param {string} value  */
proto.api.AWSSNSIntegration.prototype.setTopicArn = function(value) {
  jspb.Message.setField(this, 6, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.CreateAWSSNSIntegrationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.CreateAWSSNSIntegrationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.api.CreateAWSSNSIntegrationRequest.displayName = 'proto.api.CreateAWSSNSIntegrationRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.CreateAWSSNSIntegrationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.CreateAWSSNSIntegrationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.CreateAWSSNSIntegrationRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.api.CreateAWSSNSIntegrationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    integration: (f = msg.getIntegration()) && proto.api.AWSSNSIntegration.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.CreateAWSSNSIntegrationRequest}
 */
proto.api.CreateAWSSNSIntegrationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.CreateAWSSNSIntegrationRequest;
  return proto.api.CreateAWSSNSIntegrationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.CreateAWSSNSIntegrationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.CreateAWSSNSIntegrationRequest}
 */
proto.api.CreateAWSSNSIntegrationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.AWSSNSIntegration;
      reader.readMessage(value,proto.api.AWSSNSIntegration.deserializeBinaryFromReader);
      msg.setIntegration(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.api.CreateAWSSNSIntegrationRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.api.CreateAWSSNSIntegrationRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.CreateAWSSNSIntegrationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.api.CreateAWSSNSIntegrationRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getIntegration();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.AWSSNSIntegration.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.api.CreateAWSSNSIntegrationRequest} The clone.
 */
proto.api.CreateAWSSNSIntegrationRequest.prototype.cloneMessage = function() {
  return /** @type {!proto.api.CreateAWSSNSIntegrationRequest} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional AWSSNSIntegration integration = 1;
 * @return {proto.api.AWSSNSIntegration}
 */
proto.api.CreateAWSSNSIntegrationRequest.prototype.getIntegration = function() {
  return /** @type{proto.api.AWSSNSIntegration} */ (
    jspb.Message.getWrapperField(this, proto.api.AWSSNSIntegration, 1));
};


/** @param {proto.api.AWSSNSIntegration|undefined} value  */
proto.api.CreateAWSSNSIntegrationRequest.prototype.setIntegration = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.api.CreateAWSSNSIntegrationRequest.prototype.clearIntegration = function() {
  this.setIntegration(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.api.CreateAWSSNSIntegrationRequest.prototype.hasIntegration = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.GetAWSSNSIntegrationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.GetAWSSNSIntegrationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.api.GetAWSSNSIntegrationRequest.displayName = 'proto.api.GetAWSSNSIntegrationRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.GetAWSSNSIntegrationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.GetAWSSNSIntegrationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.GetAWSSNSIntegrationRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.api.GetAWSSNSIntegrationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    applicationId: msg.getApplicationId()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.GetAWSSNSIntegrationRequest}
 */
proto.api.GetAWSSNSIntegrationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.GetAWSSNSIntegrationRequest;
  return proto.api.GetAWSSNSIntegrationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.GetAWSSNSIntegrationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.GetAWSSNSIntegrationRequest}
 */
proto.api.GetAWSSNSIntegrationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setApplicationId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.api.GetAWSSNSIntegrationRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.api.GetAWSSNSIntegrationRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.GetAWSSNSIntegrationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.api.GetAWSSNSIntegrationRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getApplicationId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.api.GetAWSSNSIntegrationRequest} The clone.
 */
proto.api.GetAWSSNSIntegrationRequest.prototype.cloneMessage = function() {
  return /** @type {!proto.api.GetAWSSNSIntegrationRequest} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional int64 application_id = 1;
 * @return {number}
 */
proto.api.GetAWSSNSIntegrationRequest.prototype.getApplicationId = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 1, 0));
};


/** @param {number} value  */
proto.api.GetAWSSNSIntegrationRequest.prototype.setApplicationId = function(value) {
  jspb.Message.setField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.GetAWSSNSIntegrationResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.GetAWSSNSIntegrationResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.api.GetAWSSNSIntegrationResponse.displayName = 'proto.api.GetAWSSNSIntegrationResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.GetAWSSNSIntegrationResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.GetAWSSNSIntegrationResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.GetAWSSNSIntegrationResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.api.GetAWSSNSIntegrationResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    integration: (f = msg.getIntegration()) && proto.api.AWSSNSIntegration.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.GetAWSSNSIntegrationResponse}
 */
proto.api.GetAWSSNSIntegrationResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.GetAWSSNSIntegrationResponse;
  return proto.api.GetAWSSNSIntegrationResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.GetAWSSNSIntegrationResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.GetAWSSNSIntegrationResponse}
 */
proto.api.GetAWSSNSIntegrationResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.AWSSNSIntegration;
      reader.readMessage(value,proto.api.AWSSNSIntegration.deserializeBinaryFromReader);
      msg.setIntegration(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.api.GetAWSSNSIntegrationResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.api.GetAWSSNSIntegrationResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.GetAWSSNSIntegrationResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.api.GetAWSSNSIntegrationResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getIntegration();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.AWSSNSIntegration.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.api.GetAWSSNSIntegrationResponse} The clone.
 */
proto.api.GetAWSSNSIntegrationResponse.prototype.cloneMessage = function() {
  return /** @type {!proto.api.GetAWSSNSIntegrationResponse} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional AWSSNSIntegration integration = 1;
 * @return {proto.api.AWSSNSIntegration}
 */
proto.api.GetAWSSNSIntegrationResponse.prototype.getIntegration = function() {
  return /** @type{proto.api.AWSSNSIntegration} */ (
    jspb.Message.getWrapperField(this, proto.api.AWSSNSIntegration, 1));
};


/** @param {proto.api.AWSSNSIntegration|undefined} value  */
proto.api.GetAWSSNSIntegrationResponse.prototype.setIntegration = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.api.GetAWSSNSIntegrationResponse.prototype.clearIntegration = function() {
  this.setIntegration(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.api.GetAWSSNSIntegrationResponse.prototype.hasIntegration = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.UpdateAWSSNSIntegrationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.UpdateAWSSNSIntegrationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.api.UpdateAWSSNSIntegrationRequest.displayName = 'proto.api.UpdateAWSSNSIntegrationRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.UpdateAWSSNSIntegrationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.UpdateAWSSNSIntegrationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.UpdateAWSSNSIntegrationRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.api.UpdateAWSSNSIntegrationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    integration: (f = msg.getIntegration()) && proto.api.AWSSNSIntegration.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.UpdateAWSSNSIntegrationRequest}
 */
proto.api.UpdateAWSSNSIntegrationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.UpdateAWSSNSIntegrationRequest;
  return proto.api.UpdateAWSSNSIntegrationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.UpdateAWSSNSIntegrationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.UpdateAWSSNSIntegrationRequest}
 */
proto.api.UpdateAWSSNSIntegrationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.AWSSNSIntegration;
      reader.readMessage(value,proto.api.AWSSNSIntegration.deserializeBinaryFromReader);
      msg.setIntegration(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.api.UpdateAWSSNSIntegrationRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.api.UpdateAWSSNSIntegrationRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.UpdateAWSSNSIntegrationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.api.UpdateAWSSNSIntegrationRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getIntegration();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.AWSSNSIntegration.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.api.UpdateAWSSNSIntegrationRequest} The clone.
 */
proto.api.UpdateAWSSNSIntegrationRequest.prototype.cloneMessage = function() {
  return /** @type {!proto.api.UpdateAWSSNSIntegrationRequest} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional AWSSNSIntegration integration = 1;
 * @return {proto.api.AWSSNSIntegration}
 */
proto.api.UpdateAWSSNSIntegrationRequest.prototype.getIntegration = function() {
  return /** @type{proto.api.AWSSNSIntegration} */ (
    jspb.Message.getWrapperField(this, proto.api.AWSSNSIntegration, 1));
};


/** @param {proto.api.AWSSNSIntegration|undefined} value  */
proto.api.UpdateAWSSNSIntegrationRequest.prototype.setIntegration = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.api.UpdateAWSSNSIntegrationRequest.prototype.clearIntegration = function() {
  this.setIntegration(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.api.UpdateAWSSNSIntegrationRequest.prototype.hasIntegration = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.DeleteAWSSNSIntegrationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.DeleteAWSSNSIntegrationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.api.DeleteAWSSNSIntegrationRequest.displayName = 'proto.api.DeleteAWSSNSIntegrationRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.DeleteAWSSNSIntegrationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.DeleteAWSSNSIntegrationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.DeleteAWSSNSIntegrationRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.api.DeleteAWSSNSIntegrationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    applicationId: msg.getApplicationId()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.DeleteAWSSNSIntegrationRequest}
 */
proto.api.DeleteAWSSNSIntegrationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.DeleteAWSSNSIntegrationRequest;
  return proto.api.DeleteAWSSNSIntegrationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.DeleteAWSSNSIntegrationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.DeleteAWSSNSIntegrationRequest}
 */
proto.api.DeleteAWSSNSIntegrationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setApplicationId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.api.DeleteAWSSNSIntegrationRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.api.DeleteAWSSNSIntegrationRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.DeleteAWSSNSIntegrationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.api.DeleteAWSSNSIntegrationRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getApplicationId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.api.DeleteAWSSNSIntegrationRequest} The clone.
 */
proto.api.DeleteAWSSNSIntegrationRequest.prototype.cloneMessage = function() {
  return /** @type {!proto.api.DeleteAWSSNSIntegrationRequest} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional int64 application_id = 1;
 * @return {number}
 */
proto.api.DeleteAWSSNSIntegrationRequest.prototype.getApplicationId = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 1, 0));
};


/** @param {number} value  */
proto.api.DeleteAWSSNSIntegrationRequest.prototype.setApplicationId = function(value) {
  jspb.Message.setField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.AzureServiceBusIntegration = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.AzureServiceBusIntegration, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.api.AzureServiceBusIntegration.displayName = 'proto.api.AzureServiceBusIntegration';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.AzureServiceBusIntegration.prototype.toObject = function(opt_includeInstance) {
  return proto.api.AzureServiceBusIntegration.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.AzureServiceBusIntegration} msg The msg instance to transform.
 * @return {!Object}
 */
proto.api.AzureServiceBusIntegration.toObject = function(includeInstance, msg) {
  var f, obj = {
    applicationId: msg.getApplicationId(),
    marshaler: msg.getMarshaler(),
    connectionString: msg.getConnectionString(),
    publishName: msg.getPublishName()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.AzureServiceBusIntegration}
 */
proto.api.AzureServiceBusIntegration.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.AzureServiceBusIntegration;
  return proto.api.AzureServiceBusIntegration.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.AzureServiceBusIntegration} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.AzureServiceBusIntegration}
 */
proto.api.AzureServiceBusIntegration.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setApplicationId(value);
      break;
    case 2:
      var value = /** @type {!proto.api.Marshaler} */ (reader.readEnum());
      msg.setMarshaler(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setConnectionString(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setPublishName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.api.AzureServiceBusIntegration} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.api.AzureServiceBusIntegration.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.AzureServiceBusIntegration.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.api.AzureServiceBusIntegration.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getApplicationId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = this.getMarshaler();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = this.getConnectionString();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = this.getPublishName();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.api.AzureServiceBusIntegration} The clone.
 */
proto.api.AzureServiceBusIntegration.prototype.cloneMessage = function() {
  return /** @type {!proto.api.AzureServiceBusIntegration} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional int64 application_id = 1;
 * @return {number}
 */
proto.api.AzureServiceBusIntegration.prototype.getApplicationId = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 1, 0));
};


/** @param {number} value  */
proto.api.AzureServiceBusIntegration.prototype.setApplicationId = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional Marshaler marshaler = 2;
 * @return {!proto.api.Marshaler}
 */
proto.api.AzureServiceBusIntegration.prototype.getMarshaler = function() {
  return /** @type {!proto.api.Marshaler} */ (jspb.Message.getFieldProto3(this, 2, 0));
};


/** @param {!proto.api.Marshaler} value  */
proto.api.AzureServiceBusIntegration.prototype.setMarshaler = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional string connection_string = 3;
 * @return {string}
 */
proto.api.AzureServiceBusIntegration.prototype.getConnectionString = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 3, ""));
};


/** @param {string} value  */
proto.api.AzureServiceBusIntegration.prototype.setConnectionString = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional string publish_name = 4;
 * @return {string}
 */
proto.api.AzureServiceBusIntegration.prototype.getPublishName = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 4, ""));
};


/** @param {string} value  */
proto.api.AzureServiceBusIntegration.prototype.setPublishName = function(value) {
  jspb.Message.setField(this, 4, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.CreateAzureServiceBusIntegrationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.CreateAzureServiceBusIntegrationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.api.CreateAzureServiceBusIntegrationRequest.displayName = 'proto.api.CreateAzureServiceBusIntegrationRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.CreateAzureServiceBusIntegrationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.CreateAzureServiceBusIntegrationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.CreateAzureServiceBusIntegrationRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.api.CreateAzureServiceBusIntegrationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    integration: (f = msg.getIntegration()) && proto.api.AzureServiceBusIntegration.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.CreateAzureServiceBusIntegrationRequest}
 */
proto.api.CreateAzureServiceBusIntegrationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.CreateAzureServiceBusIntegrationRequest;
  return proto.api.CreateAzureServiceBusIntegrationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.CreateAzureServiceBusIntegrationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.CreateAzureServiceBusIntegrationRequest}
 */
proto.api.CreateAzureServiceBusIntegrationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.AzureServiceBusIntegration;
      reader.readMessage(value,proto.api.AzureServiceBusIntegration.deserializeBinaryFromReader);
      msg.setIntegration(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.api.CreateAzureServiceBusIntegrationRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.api.CreateAzureServiceBusIntegrationRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.CreateAzureServiceBusIntegrationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.api.CreateAzureServiceBusIntegrationRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getIntegration();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.AzureServiceBusIntegration.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.api.CreateAzureServiceBusIntegrationRequest} The clone.
 */
proto.api.CreateAzureServiceBusIntegrationRequest.prototype.cloneMessage = function() {
  return /** @type {!proto.api.CreateAzureServiceBusIntegrationRequest} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional AzureServiceBusIntegration integration = 1;
 * @return {proto.api.AzureServiceBusIntegration}
 */
proto.api.CreateAzureServiceBusIntegrationRequest.prototype.getIntegration = function() {
  return /** @type{proto.api.AzureServiceBusIntegration} */ (
    jspb.Message.getWrapperField(this, proto.api.AzureServiceBusIntegration, 1));
};


/** @param {proto.api.AzureServiceBusIntegration|undefined} value  */
proto.api.CreateAzureServiceBusIntegrationRequest.prototype.setIntegration = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.api.CreateAzureServiceBusIntegrationRequest.prototype.clearIntegration = function() {
  this.setIntegration(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.api.CreateAzureServiceBusIntegrationRequest.prototype.hasIntegration = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.GetAzureServiceBusIntegrationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.GetAzureServiceBusIntegrationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.api.GetAzureServiceBusIntegrationRequest.displayName = 'proto.api.GetAzureServiceBusIntegrationRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.GetAzureServiceBusIntegrationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.GetAzureServiceBusIntegrationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.GetAzureServiceBusIntegrationRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.api.GetAzureServiceBusIntegrationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    applicationId: msg.getApplicationId()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.GetAzureServiceBusIntegrationRequest}
 */
proto.api.GetAzureServiceBusIntegrationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.GetAzureServiceBusIntegrationRequest;
  return proto.api.GetAzureServiceBusIntegrationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.GetAzureServiceBusIntegrationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.GetAzureServiceBusIntegrationRequest}
 */
proto.api.GetAzureServiceBusIntegrationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setApplicationId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.api.GetAzureServiceBusIntegrationRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.api.GetAzureServiceBusIntegrationRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.GetAzureServiceBusIntegrationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.api.GetAzureServiceBusIntegrationRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getApplicationId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.api.GetAzureServiceBusIntegrationRequest} The clone.
 */
proto.api.GetAzureServiceBusIntegrationRequest.prototype.cloneMessage = function() {
  return /** @type {!proto.api.GetAzureServiceBusIntegrationRequest} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional int64 application_id = 1;
 * @return {number}
 */
proto.api.GetAzureServiceBusIntegrationRequest.prototype.getApplicationId = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 1, 0));
};


/** @param {number} value  */
proto.api.GetAzureServiceBusIntegrationRequest.prototype.setApplicationId = function(value) {
  jspb.Message.setField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.GetAzureServiceBusIntegrationResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.GetAzureServiceBusIntegrationResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.api.GetAzureServiceBusIntegrationResponse.displayName = 'proto.api.GetAzureServiceBusIntegrationResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.GetAzureServiceBusIntegrationResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.GetAzureServiceBusIntegrationResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.GetAzureServiceBusIntegrationResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.api.GetAzureServiceBusIntegrationResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    integration: (f = msg.getIntegration()) && proto.api.AzureServiceBusIntegration.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.GetAzureServiceBusIntegrationResponse}
 */
proto.api.GetAzureServiceBusIntegrationResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.GetAzureServiceBusIntegrationResponse;
  return proto.api.GetAzureServiceBusIntegrationResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.GetAzureServiceBusIntegrationResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.GetAzureServiceBusIntegrationResponse}
 */
proto.api.GetAzureServiceBusIntegrationResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.AzureServiceBusIntegration;
      reader.readMessage(value,proto.api.AzureServiceBusIntegration.deserializeBinaryFromReader);
      msg.setIntegration(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.api.GetAzureServiceBusIntegrationResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.api.GetAzureServiceBusIntegrationResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.GetAzureServiceBusIntegrationResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.api.GetAzureServiceBusIntegrationResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getIntegration();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.AzureServiceBusIntegration.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.api.GetAzureServiceBusIntegrationResponse} The clone.
 */
proto.api.GetAzureServiceBusIntegrationResponse.prototype.cloneMessage = function() {
  return /** @type {!proto.api.GetAzureServiceBusIntegrationResponse} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional AzureServiceBusIntegration integration = 1;
 * @return {proto.api.AzureServiceBusIntegration}
 */
proto.api.GetAzureServiceBusIntegrationResponse.prototype.getIntegration = function() {
  return /** @type{proto.api.AzureServiceBusIntegration} */ (
    jspb.Message.getWrapperField(this, proto.api.AzureServiceBusIntegration, 1));
};


/** @param {proto.api.AzureServiceBusIntegration|undefined} value  */
proto.api.GetAzureServiceBusIntegrationResponse.prototype.setIntegration = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.api.GetAzureServiceBusIntegrationResponse.prototype.clearIntegration = function() {
  this.setIntegration(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.api.GetAzureServiceBusIntegrationResponse.prototype.hasIntegration = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.UpdateAzureServiceBusIntegrationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.UpdateAzureServiceBusIntegrationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.api.UpdateAzureServiceBusIntegrationRequest.displayName = 'proto.api.UpdateAzureServiceBusIntegrationRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.UpdateAzureServiceBusIntegrationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.UpdateAzureServiceBusIntegrationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.UpdateAzureServiceBusIntegrationRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.api.UpdateAzureServiceBusIntegrationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    integration: (f = msg.getIntegration()) && proto.api.AzureServiceBusIntegration.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.UpdateAzureServiceBusIntegrationRequest}
 */
proto.api.UpdateAzureServiceBusIntegrationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.UpdateAzureServiceBusIntegrationRequest;
  return proto.api.UpdateAzureServiceBusIntegrationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.UpdateAzureServiceBusIntegrationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.UpdateAzureServiceBusIntegrationRequest}
 */
proto.api.UpdateAzureServiceBusIntegrationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.AzureServiceBusIntegration;
      reader.readMessage(value,proto.api.AzureServiceBusIntegration.deserializeBinaryFromReader);
      msg.setIntegration(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.api.UpdateAzureServiceBusIntegrationRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.api.UpdateAzureServiceBusIntegrationRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.UpdateAzureServiceBusIntegrationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.api.UpdateAzureServiceBusIntegrationRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getIntegration();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.AzureServiceBusIntegration.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.api.UpdateAzureServiceBusIntegrationRequest} The clone.
 */
proto.api.UpdateAzureServiceBusIntegrationRequest.prototype.cloneMessage = function() {
  return /** @type {!proto.api.UpdateAzureServiceBusIntegrationRequest} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional AzureServiceBusIntegration integration = 1;
 * @return {proto.api.AzureServiceBusIntegration}
 */
proto.api.UpdateAzureServiceBusIntegrationRequest.prototype.getIntegration = function() {
  return /** @type{proto.api.AzureServiceBusIntegration} */ (
    jspb.Message.getWrapperField(this, proto.api.AzureServiceBusIntegration, 1));
};


/** @param {proto.api.AzureServiceBusIntegration|undefined} value  */
proto.api.UpdateAzureServiceBusIntegrationRequest.prototype.setIntegration = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.api.UpdateAzureServiceBusIntegrationRequest.prototype.clearIntegration = function() {
  this.setIntegration(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.api.UpdateAzureServiceBusIntegrationRequest.prototype.hasIntegration = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.DeleteAzureServiceBusIntegrationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.DeleteAzureServiceBusIntegrationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.api.DeleteAzureServiceBusIntegrationRequest.displayName = 'proto.api.DeleteAzureServiceBusIntegrationRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.DeleteAzureServiceBusIntegrationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.DeleteAzureServiceBusIntegrationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.DeleteAzureServiceBusIntegrationRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.api.DeleteAzureServiceBusIntegrationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    applicationId: msg.getApplicationId()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.DeleteAzureServiceBusIntegrationRequest}
 */
proto.api.DeleteAzureServiceBusIntegrationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.DeleteAzureServiceBusIntegrationRequest;
  return proto.api.DeleteAzureServiceBusIntegrationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.DeleteAzureServiceBusIntegrationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.DeleteAzureServiceBusIntegrationRequest}
 */
proto.api.DeleteAzureServiceBusIntegrationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setApplicationId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.api.DeleteAzureServiceBusIntegrationRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.api.DeleteAzureServiceBusIntegrationRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.DeleteAzureServiceBusIntegrationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.api.DeleteAzureServiceBusIntegrationRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getApplicationId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.api.DeleteAzureServiceBusIntegrationRequest} The clone.
 */
proto.api.DeleteAzureServiceBusIntegrationRequest.prototype.cloneMessage = function() {
  return /** @type {!proto.api.DeleteAzureServiceBusIntegrationRequest} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional int64 application_id = 1;
 * @return {number}
 */
proto.api.DeleteAzureServiceBusIntegrationRequest.prototype.getApplicationId = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 1, 0));
};


/** @param {number} value  */
proto.api.DeleteAzureServiceBusIntegrationRequest.prototype.setApplicationId = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * @enum {number}
 */
proto.api.IntegrationKind = {
  HTTP: 0,
  INFLUXDB: 1,
  THINGSBOARD: 2,
  MYDEVICES: 3,
  LORACLOUD: 4,
  GCP_PUBSUB: 5,
  AWS_SNS: 6,
  AZURE_SERVICE_BUS: 7
};

/**
 * @enum {number}
 */
proto.api.Marshaler = {
  JSON: 0,
  PROTOBUF: 1,
  JSON_V3: 2
};

/**
 * @enum {number}
 */
proto.api.InfluxDBPrecision = {
  NS: 0,
  U: 1,
  MS: 2,
  S: 3,
  M: 4,
  H: 5
};

goog.object.extend(exports, proto.api);
