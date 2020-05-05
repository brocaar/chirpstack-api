/**
 * @fileoverview
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var common_common_pb = require('../common/common_pb.js');
var gw_gw_pb = require('../gw/gw_pb.js');
var ns_profiles_pb = require('../ns/profiles_pb.js');
goog.exportSymbol('proto.ns.ActivateDeviceRequest', null, global);
goog.exportSymbol('proto.ns.AddDeviceToMulticastGroupRequest', null, global);
goog.exportSymbol('proto.ns.AggregationInterval', null, global);
goog.exportSymbol('proto.ns.CreateDeviceProfileRequest', null, global);
goog.exportSymbol('proto.ns.CreateDeviceProfileResponse', null, global);
goog.exportSymbol('proto.ns.CreateDeviceQueueItemRequest', null, global);
goog.exportSymbol('proto.ns.CreateDeviceRequest', null, global);
goog.exportSymbol('proto.ns.CreateGatewayProfileRequest', null, global);
goog.exportSymbol('proto.ns.CreateGatewayProfileResponse', null, global);
goog.exportSymbol('proto.ns.CreateGatewayRequest', null, global);
goog.exportSymbol('proto.ns.CreateMACCommandQueueItemRequest', null, global);
goog.exportSymbol('proto.ns.CreateMulticastGroupRequest', null, global);
goog.exportSymbol('proto.ns.CreateMulticastGroupResponse', null, global);
goog.exportSymbol('proto.ns.CreateRoutingProfileRequest', null, global);
goog.exportSymbol('proto.ns.CreateRoutingProfileResponse', null, global);
goog.exportSymbol('proto.ns.CreateServiceProfileRequest', null, global);
goog.exportSymbol('proto.ns.CreateServiceProfileResponse', null, global);
goog.exportSymbol('proto.ns.DeactivateDeviceRequest', null, global);
goog.exportSymbol('proto.ns.DeleteDeviceProfileRequest', null, global);
goog.exportSymbol('proto.ns.DeleteDeviceRequest', null, global);
goog.exportSymbol('proto.ns.DeleteGatewayProfileRequest', null, global);
goog.exportSymbol('proto.ns.DeleteGatewayRequest', null, global);
goog.exportSymbol('proto.ns.DeleteMulticastGroupRequest', null, global);
goog.exportSymbol('proto.ns.DeleteRoutingProfileRequest', null, global);
goog.exportSymbol('proto.ns.DeleteServiceProfileRequest', null, global);
goog.exportSymbol('proto.ns.Device', null, global);
goog.exportSymbol('proto.ns.DeviceActivation', null, global);
goog.exportSymbol('proto.ns.DeviceQueueItem', null, global);
goog.exportSymbol('proto.ns.DownlinkFrameLog', null, global);
goog.exportSymbol('proto.ns.EnqueueMulticastQueueItemRequest', null, global);
goog.exportSymbol('proto.ns.FlushDeviceQueueForDevEUIRequest', null, global);
goog.exportSymbol('proto.ns.FlushMulticastQueueForMulticastGroupRequest', null, global);
goog.exportSymbol('proto.ns.Gateway', null, global);
goog.exportSymbol('proto.ns.GatewayBoard', null, global);
goog.exportSymbol('proto.ns.GatewayProfile', null, global);
goog.exportSymbol('proto.ns.GatewayProfileExtraChannel', null, global);
goog.exportSymbol('proto.ns.GatewayStats', null, global);
goog.exportSymbol('proto.ns.GetDeviceActivationRequest', null, global);
goog.exportSymbol('proto.ns.GetDeviceActivationResponse', null, global);
goog.exportSymbol('proto.ns.GetDeviceProfileRequest', null, global);
goog.exportSymbol('proto.ns.GetDeviceProfileResponse', null, global);
goog.exportSymbol('proto.ns.GetDeviceQueueItemsForDevEUIRequest', null, global);
goog.exportSymbol('proto.ns.GetDeviceQueueItemsForDevEUIResponse', null, global);
goog.exportSymbol('proto.ns.GetDeviceRequest', null, global);
goog.exportSymbol('proto.ns.GetDeviceResponse', null, global);
goog.exportSymbol('proto.ns.GetGatewayProfileRequest', null, global);
goog.exportSymbol('proto.ns.GetGatewayProfileResponse', null, global);
goog.exportSymbol('proto.ns.GetGatewayRequest', null, global);
goog.exportSymbol('proto.ns.GetGatewayResponse', null, global);
goog.exportSymbol('proto.ns.GetGatewayStatsRequest', null, global);
goog.exportSymbol('proto.ns.GetGatewayStatsResponse', null, global);
goog.exportSymbol('proto.ns.GetMulticastGroupRequest', null, global);
goog.exportSymbol('proto.ns.GetMulticastGroupResponse', null, global);
goog.exportSymbol('proto.ns.GetMulticastQueueItemsForMulticastGroupRequest', null, global);
goog.exportSymbol('proto.ns.GetMulticastQueueItemsForMulticastGroupResponse', null, global);
goog.exportSymbol('proto.ns.GetNextDownlinkFCntForDevEUIRequest', null, global);
goog.exportSymbol('proto.ns.GetNextDownlinkFCntForDevEUIResponse', null, global);
goog.exportSymbol('proto.ns.GetRandomDevAddrResponse', null, global);
goog.exportSymbol('proto.ns.GetRoutingProfileRequest', null, global);
goog.exportSymbol('proto.ns.GetRoutingProfileResponse', null, global);
goog.exportSymbol('proto.ns.GetServiceProfileRequest', null, global);
goog.exportSymbol('proto.ns.GetServiceProfileResponse', null, global);
goog.exportSymbol('proto.ns.GetVersionResponse', null, global);
goog.exportSymbol('proto.ns.MulticastGroup', null, global);
goog.exportSymbol('proto.ns.MulticastGroupType', null, global);
goog.exportSymbol('proto.ns.MulticastQueueItem', null, global);
goog.exportSymbol('proto.ns.RXWindow', null, global);
goog.exportSymbol('proto.ns.RemoveDeviceFromMulticastGroupRequest', null, global);
goog.exportSymbol('proto.ns.SendProprietaryPayloadRequest', null, global);
goog.exportSymbol('proto.ns.StreamFrameLogsForDeviceRequest', null, global);
goog.exportSymbol('proto.ns.StreamFrameLogsForDeviceResponse', null, global);
goog.exportSymbol('proto.ns.StreamFrameLogsForGatewayRequest', null, global);
goog.exportSymbol('proto.ns.StreamFrameLogsForGatewayResponse', null, global);
goog.exportSymbol('proto.ns.UpdateDeviceProfileRequest', null, global);
goog.exportSymbol('proto.ns.UpdateDeviceRequest', null, global);
goog.exportSymbol('proto.ns.UpdateGatewayProfileRequest', null, global);
goog.exportSymbol('proto.ns.UpdateGatewayRequest', null, global);
goog.exportSymbol('proto.ns.UpdateMulticastGroupRequest', null, global);
goog.exportSymbol('proto.ns.UpdateRoutingProfileRequest', null, global);
goog.exportSymbol('proto.ns.UpdateServiceProfileRequest', null, global);
goog.exportSymbol('proto.ns.UplinkFrameLog', null, global);

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
proto.ns.CreateServiceProfileRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ns.CreateServiceProfileRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.ns.CreateServiceProfileRequest.displayName = 'proto.ns.CreateServiceProfileRequest';
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
proto.ns.CreateServiceProfileRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ns.CreateServiceProfileRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ns.CreateServiceProfileRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.ns.CreateServiceProfileRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    serviceProfile: (f = msg.getServiceProfile()) && ns_profiles_pb.ServiceProfile.toObject(includeInstance, f)
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
 * @return {!proto.ns.CreateServiceProfileRequest}
 */
proto.ns.CreateServiceProfileRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ns.CreateServiceProfileRequest;
  return proto.ns.CreateServiceProfileRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ns.CreateServiceProfileRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ns.CreateServiceProfileRequest}
 */
proto.ns.CreateServiceProfileRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new ns_profiles_pb.ServiceProfile;
      reader.readMessage(value,ns_profiles_pb.ServiceProfile.deserializeBinaryFromReader);
      msg.setServiceProfile(value);
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
 * @param {!proto.ns.CreateServiceProfileRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.ns.CreateServiceProfileRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ns.CreateServiceProfileRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.ns.CreateServiceProfileRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getServiceProfile();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      ns_profiles_pb.ServiceProfile.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.ns.CreateServiceProfileRequest} The clone.
 */
proto.ns.CreateServiceProfileRequest.prototype.cloneMessage = function() {
  return /** @type {!proto.ns.CreateServiceProfileRequest} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional ServiceProfile service_profile = 1;
 * @return {proto.ns.ServiceProfile}
 */
proto.ns.CreateServiceProfileRequest.prototype.getServiceProfile = function() {
  return /** @type{proto.ns.ServiceProfile} */ (
    jspb.Message.getWrapperField(this, ns_profiles_pb.ServiceProfile, 1));
};


/** @param {proto.ns.ServiceProfile|undefined} value  */
proto.ns.CreateServiceProfileRequest.prototype.setServiceProfile = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.ns.CreateServiceProfileRequest.prototype.clearServiceProfile = function() {
  this.setServiceProfile(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.ns.CreateServiceProfileRequest.prototype.hasServiceProfile = function() {
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
proto.ns.CreateServiceProfileResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ns.CreateServiceProfileResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.ns.CreateServiceProfileResponse.displayName = 'proto.ns.CreateServiceProfileResponse';
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
proto.ns.CreateServiceProfileResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.ns.CreateServiceProfileResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ns.CreateServiceProfileResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.ns.CreateServiceProfileResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: msg.getId_asB64()
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
 * @return {!proto.ns.CreateServiceProfileResponse}
 */
proto.ns.CreateServiceProfileResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ns.CreateServiceProfileResponse;
  return proto.ns.CreateServiceProfileResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ns.CreateServiceProfileResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ns.CreateServiceProfileResponse}
 */
proto.ns.CreateServiceProfileResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
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
 * @param {!proto.ns.CreateServiceProfileResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.ns.CreateServiceProfileResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ns.CreateServiceProfileResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.ns.CreateServiceProfileResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getId_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.ns.CreateServiceProfileResponse} The clone.
 */
proto.ns.CreateServiceProfileResponse.prototype.cloneMessage = function() {
  return /** @type {!proto.ns.CreateServiceProfileResponse} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional bytes id = 1;
 * @return {!(string|Uint8Array)}
 */
proto.ns.CreateServiceProfileResponse.prototype.getId = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldProto3(this, 1, ""));
};


/**
 * optional bytes id = 1;
 * This is a type-conversion wrapper around `getId()`
 * @return {string}
 */
proto.ns.CreateServiceProfileResponse.prototype.getId_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getId()));
};


/**
 * optional bytes id = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getId()`
 * @return {!Uint8Array}
 */
proto.ns.CreateServiceProfileResponse.prototype.getId_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getId()));
};


/** @param {!(string|Uint8Array)} value  */
proto.ns.CreateServiceProfileResponse.prototype.setId = function(value) {
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
proto.ns.GetServiceProfileRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ns.GetServiceProfileRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.ns.GetServiceProfileRequest.displayName = 'proto.ns.GetServiceProfileRequest';
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
proto.ns.GetServiceProfileRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ns.GetServiceProfileRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ns.GetServiceProfileRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.ns.GetServiceProfileRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: msg.getId_asB64()
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
 * @return {!proto.ns.GetServiceProfileRequest}
 */
proto.ns.GetServiceProfileRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ns.GetServiceProfileRequest;
  return proto.ns.GetServiceProfileRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ns.GetServiceProfileRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ns.GetServiceProfileRequest}
 */
proto.ns.GetServiceProfileRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
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
 * @param {!proto.ns.GetServiceProfileRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.ns.GetServiceProfileRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ns.GetServiceProfileRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.ns.GetServiceProfileRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getId_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.ns.GetServiceProfileRequest} The clone.
 */
proto.ns.GetServiceProfileRequest.prototype.cloneMessage = function() {
  return /** @type {!proto.ns.GetServiceProfileRequest} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional bytes id = 1;
 * @return {!(string|Uint8Array)}
 */
proto.ns.GetServiceProfileRequest.prototype.getId = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldProto3(this, 1, ""));
};


/**
 * optional bytes id = 1;
 * This is a type-conversion wrapper around `getId()`
 * @return {string}
 */
proto.ns.GetServiceProfileRequest.prototype.getId_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getId()));
};


/**
 * optional bytes id = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getId()`
 * @return {!Uint8Array}
 */
proto.ns.GetServiceProfileRequest.prototype.getId_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getId()));
};


/** @param {!(string|Uint8Array)} value  */
proto.ns.GetServiceProfileRequest.prototype.setId = function(value) {
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
proto.ns.GetServiceProfileResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ns.GetServiceProfileResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.ns.GetServiceProfileResponse.displayName = 'proto.ns.GetServiceProfileResponse';
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
proto.ns.GetServiceProfileResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.ns.GetServiceProfileResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ns.GetServiceProfileResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.ns.GetServiceProfileResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    serviceProfile: (f = msg.getServiceProfile()) && ns_profiles_pb.ServiceProfile.toObject(includeInstance, f),
    createdAt: (f = msg.getCreatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    updatedAt: (f = msg.getUpdatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
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
 * @return {!proto.ns.GetServiceProfileResponse}
 */
proto.ns.GetServiceProfileResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ns.GetServiceProfileResponse;
  return proto.ns.GetServiceProfileResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ns.GetServiceProfileResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ns.GetServiceProfileResponse}
 */
proto.ns.GetServiceProfileResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new ns_profiles_pb.ServiceProfile;
      reader.readMessage(value,ns_profiles_pb.ServiceProfile.deserializeBinaryFromReader);
      msg.setServiceProfile(value);
      break;
    case 2:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreatedAt(value);
      break;
    case 3:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setUpdatedAt(value);
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
 * @param {!proto.ns.GetServiceProfileResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.ns.GetServiceProfileResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ns.GetServiceProfileResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.ns.GetServiceProfileResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getServiceProfile();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      ns_profiles_pb.ServiceProfile.serializeBinaryToWriter
    );
  }
  f = this.getCreatedAt();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = this.getUpdatedAt();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.ns.GetServiceProfileResponse} The clone.
 */
proto.ns.GetServiceProfileResponse.prototype.cloneMessage = function() {
  return /** @type {!proto.ns.GetServiceProfileResponse} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional ServiceProfile service_profile = 1;
 * @return {proto.ns.ServiceProfile}
 */
proto.ns.GetServiceProfileResponse.prototype.getServiceProfile = function() {
  return /** @type{proto.ns.ServiceProfile} */ (
    jspb.Message.getWrapperField(this, ns_profiles_pb.ServiceProfile, 1));
};


/** @param {proto.ns.ServiceProfile|undefined} value  */
proto.ns.GetServiceProfileResponse.prototype.setServiceProfile = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.ns.GetServiceProfileResponse.prototype.clearServiceProfile = function() {
  this.setServiceProfile(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.ns.GetServiceProfileResponse.prototype.hasServiceProfile = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.Timestamp created_at = 2;
 * @return {proto.google.protobuf.Timestamp}
 */
proto.ns.GetServiceProfileResponse.prototype.getCreatedAt = function() {
  return /** @type{proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/** @param {proto.google.protobuf.Timestamp|undefined} value  */
proto.ns.GetServiceProfileResponse.prototype.setCreatedAt = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.ns.GetServiceProfileResponse.prototype.clearCreatedAt = function() {
  this.setCreatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.ns.GetServiceProfileResponse.prototype.hasCreatedAt = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.Timestamp updated_at = 3;
 * @return {proto.google.protobuf.Timestamp}
 */
proto.ns.GetServiceProfileResponse.prototype.getUpdatedAt = function() {
  return /** @type{proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/** @param {proto.google.protobuf.Timestamp|undefined} value  */
proto.ns.GetServiceProfileResponse.prototype.setUpdatedAt = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.ns.GetServiceProfileResponse.prototype.clearUpdatedAt = function() {
  this.setUpdatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.ns.GetServiceProfileResponse.prototype.hasUpdatedAt = function() {
  return jspb.Message.getField(this, 3) != null;
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
proto.ns.UpdateServiceProfileRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ns.UpdateServiceProfileRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.ns.UpdateServiceProfileRequest.displayName = 'proto.ns.UpdateServiceProfileRequest';
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
proto.ns.UpdateServiceProfileRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ns.UpdateServiceProfileRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ns.UpdateServiceProfileRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.ns.UpdateServiceProfileRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    serviceProfile: (f = msg.getServiceProfile()) && ns_profiles_pb.ServiceProfile.toObject(includeInstance, f)
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
 * @return {!proto.ns.UpdateServiceProfileRequest}
 */
proto.ns.UpdateServiceProfileRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ns.UpdateServiceProfileRequest;
  return proto.ns.UpdateServiceProfileRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ns.UpdateServiceProfileRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ns.UpdateServiceProfileRequest}
 */
proto.ns.UpdateServiceProfileRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new ns_profiles_pb.ServiceProfile;
      reader.readMessage(value,ns_profiles_pb.ServiceProfile.deserializeBinaryFromReader);
      msg.setServiceProfile(value);
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
 * @param {!proto.ns.UpdateServiceProfileRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.ns.UpdateServiceProfileRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ns.UpdateServiceProfileRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.ns.UpdateServiceProfileRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getServiceProfile();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      ns_profiles_pb.ServiceProfile.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.ns.UpdateServiceProfileRequest} The clone.
 */
proto.ns.UpdateServiceProfileRequest.prototype.cloneMessage = function() {
  return /** @type {!proto.ns.UpdateServiceProfileRequest} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional ServiceProfile service_profile = 1;
 * @return {proto.ns.ServiceProfile}
 */
proto.ns.UpdateServiceProfileRequest.prototype.getServiceProfile = function() {
  return /** @type{proto.ns.ServiceProfile} */ (
    jspb.Message.getWrapperField(this, ns_profiles_pb.ServiceProfile, 1));
};


/** @param {proto.ns.ServiceProfile|undefined} value  */
proto.ns.UpdateServiceProfileRequest.prototype.setServiceProfile = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.ns.UpdateServiceProfileRequest.prototype.clearServiceProfile = function() {
  this.setServiceProfile(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.ns.UpdateServiceProfileRequest.prototype.hasServiceProfile = function() {
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
proto.ns.DeleteServiceProfileRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ns.DeleteServiceProfileRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.ns.DeleteServiceProfileRequest.displayName = 'proto.ns.DeleteServiceProfileRequest';
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
proto.ns.DeleteServiceProfileRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ns.DeleteServiceProfileRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ns.DeleteServiceProfileRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.ns.DeleteServiceProfileRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: msg.getId_asB64()
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
 * @return {!proto.ns.DeleteServiceProfileRequest}
 */
proto.ns.DeleteServiceProfileRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ns.DeleteServiceProfileRequest;
  return proto.ns.DeleteServiceProfileRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ns.DeleteServiceProfileRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ns.DeleteServiceProfileRequest}
 */
proto.ns.DeleteServiceProfileRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
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
 * @param {!proto.ns.DeleteServiceProfileRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.ns.DeleteServiceProfileRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ns.DeleteServiceProfileRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.ns.DeleteServiceProfileRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getId_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.ns.DeleteServiceProfileRequest} The clone.
 */
proto.ns.DeleteServiceProfileRequest.prototype.cloneMessage = function() {
  return /** @type {!proto.ns.DeleteServiceProfileRequest} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional bytes id = 1;
 * @return {!(string|Uint8Array)}
 */
proto.ns.DeleteServiceProfileRequest.prototype.getId = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldProto3(this, 1, ""));
};


/**
 * optional bytes id = 1;
 * This is a type-conversion wrapper around `getId()`
 * @return {string}
 */
proto.ns.DeleteServiceProfileRequest.prototype.getId_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getId()));
};


/**
 * optional bytes id = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getId()`
 * @return {!Uint8Array}
 */
proto.ns.DeleteServiceProfileRequest.prototype.getId_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getId()));
};


/** @param {!(string|Uint8Array)} value  */
proto.ns.DeleteServiceProfileRequest.prototype.setId = function(value) {
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
proto.ns.CreateRoutingProfileRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ns.CreateRoutingProfileRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.ns.CreateRoutingProfileRequest.displayName = 'proto.ns.CreateRoutingProfileRequest';
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
proto.ns.CreateRoutingProfileRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ns.CreateRoutingProfileRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ns.CreateRoutingProfileRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.ns.CreateRoutingProfileRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    routingProfile: (f = msg.getRoutingProfile()) && ns_profiles_pb.RoutingProfile.toObject(includeInstance, f)
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
 * @return {!proto.ns.CreateRoutingProfileRequest}
 */
proto.ns.CreateRoutingProfileRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ns.CreateRoutingProfileRequest;
  return proto.ns.CreateRoutingProfileRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ns.CreateRoutingProfileRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ns.CreateRoutingProfileRequest}
 */
proto.ns.CreateRoutingProfileRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new ns_profiles_pb.RoutingProfile;
      reader.readMessage(value,ns_profiles_pb.RoutingProfile.deserializeBinaryFromReader);
      msg.setRoutingProfile(value);
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
 * @param {!proto.ns.CreateRoutingProfileRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.ns.CreateRoutingProfileRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ns.CreateRoutingProfileRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.ns.CreateRoutingProfileRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getRoutingProfile();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      ns_profiles_pb.RoutingProfile.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.ns.CreateRoutingProfileRequest} The clone.
 */
proto.ns.CreateRoutingProfileRequest.prototype.cloneMessage = function() {
  return /** @type {!proto.ns.CreateRoutingProfileRequest} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional RoutingProfile routing_profile = 1;
 * @return {proto.ns.RoutingProfile}
 */
proto.ns.CreateRoutingProfileRequest.prototype.getRoutingProfile = function() {
  return /** @type{proto.ns.RoutingProfile} */ (
    jspb.Message.getWrapperField(this, ns_profiles_pb.RoutingProfile, 1));
};


/** @param {proto.ns.RoutingProfile|undefined} value  */
proto.ns.CreateRoutingProfileRequest.prototype.setRoutingProfile = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.ns.CreateRoutingProfileRequest.prototype.clearRoutingProfile = function() {
  this.setRoutingProfile(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.ns.CreateRoutingProfileRequest.prototype.hasRoutingProfile = function() {
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
proto.ns.CreateRoutingProfileResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ns.CreateRoutingProfileResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.ns.CreateRoutingProfileResponse.displayName = 'proto.ns.CreateRoutingProfileResponse';
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
proto.ns.CreateRoutingProfileResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.ns.CreateRoutingProfileResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ns.CreateRoutingProfileResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.ns.CreateRoutingProfileResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: msg.getId_asB64()
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
 * @return {!proto.ns.CreateRoutingProfileResponse}
 */
proto.ns.CreateRoutingProfileResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ns.CreateRoutingProfileResponse;
  return proto.ns.CreateRoutingProfileResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ns.CreateRoutingProfileResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ns.CreateRoutingProfileResponse}
 */
proto.ns.CreateRoutingProfileResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
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
 * @param {!proto.ns.CreateRoutingProfileResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.ns.CreateRoutingProfileResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ns.CreateRoutingProfileResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.ns.CreateRoutingProfileResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getId_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.ns.CreateRoutingProfileResponse} The clone.
 */
proto.ns.CreateRoutingProfileResponse.prototype.cloneMessage = function() {
  return /** @type {!proto.ns.CreateRoutingProfileResponse} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional bytes id = 1;
 * @return {!(string|Uint8Array)}
 */
proto.ns.CreateRoutingProfileResponse.prototype.getId = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldProto3(this, 1, ""));
};


/**
 * optional bytes id = 1;
 * This is a type-conversion wrapper around `getId()`
 * @return {string}
 */
proto.ns.CreateRoutingProfileResponse.prototype.getId_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getId()));
};


/**
 * optional bytes id = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getId()`
 * @return {!Uint8Array}
 */
proto.ns.CreateRoutingProfileResponse.prototype.getId_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getId()));
};


/** @param {!(string|Uint8Array)} value  */
proto.ns.CreateRoutingProfileResponse.prototype.setId = function(value) {
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
proto.ns.GetRoutingProfileRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ns.GetRoutingProfileRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.ns.GetRoutingProfileRequest.displayName = 'proto.ns.GetRoutingProfileRequest';
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
proto.ns.GetRoutingProfileRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ns.GetRoutingProfileRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ns.GetRoutingProfileRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.ns.GetRoutingProfileRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: msg.getId_asB64()
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
 * @return {!proto.ns.GetRoutingProfileRequest}
 */
proto.ns.GetRoutingProfileRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ns.GetRoutingProfileRequest;
  return proto.ns.GetRoutingProfileRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ns.GetRoutingProfileRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ns.GetRoutingProfileRequest}
 */
proto.ns.GetRoutingProfileRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
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
 * @param {!proto.ns.GetRoutingProfileRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.ns.GetRoutingProfileRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ns.GetRoutingProfileRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.ns.GetRoutingProfileRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getId_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.ns.GetRoutingProfileRequest} The clone.
 */
proto.ns.GetRoutingProfileRequest.prototype.cloneMessage = function() {
  return /** @type {!proto.ns.GetRoutingProfileRequest} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional bytes id = 1;
 * @return {!(string|Uint8Array)}
 */
proto.ns.GetRoutingProfileRequest.prototype.getId = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldProto3(this, 1, ""));
};


/**
 * optional bytes id = 1;
 * This is a type-conversion wrapper around `getId()`
 * @return {string}
 */
proto.ns.GetRoutingProfileRequest.prototype.getId_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getId()));
};


/**
 * optional bytes id = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getId()`
 * @return {!Uint8Array}
 */
proto.ns.GetRoutingProfileRequest.prototype.getId_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getId()));
};


/** @param {!(string|Uint8Array)} value  */
proto.ns.GetRoutingProfileRequest.prototype.setId = function(value) {
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
proto.ns.GetRoutingProfileResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ns.GetRoutingProfileResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.ns.GetRoutingProfileResponse.displayName = 'proto.ns.GetRoutingProfileResponse';
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
proto.ns.GetRoutingProfileResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.ns.GetRoutingProfileResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ns.GetRoutingProfileResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.ns.GetRoutingProfileResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    routingProfile: (f = msg.getRoutingProfile()) && ns_profiles_pb.RoutingProfile.toObject(includeInstance, f),
    createdAt: (f = msg.getCreatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    updatedAt: (f = msg.getUpdatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
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
 * @return {!proto.ns.GetRoutingProfileResponse}
 */
proto.ns.GetRoutingProfileResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ns.GetRoutingProfileResponse;
  return proto.ns.GetRoutingProfileResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ns.GetRoutingProfileResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ns.GetRoutingProfileResponse}
 */
proto.ns.GetRoutingProfileResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new ns_profiles_pb.RoutingProfile;
      reader.readMessage(value,ns_profiles_pb.RoutingProfile.deserializeBinaryFromReader);
      msg.setRoutingProfile(value);
      break;
    case 2:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreatedAt(value);
      break;
    case 3:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setUpdatedAt(value);
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
 * @param {!proto.ns.GetRoutingProfileResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.ns.GetRoutingProfileResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ns.GetRoutingProfileResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.ns.GetRoutingProfileResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getRoutingProfile();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      ns_profiles_pb.RoutingProfile.serializeBinaryToWriter
    );
  }
  f = this.getCreatedAt();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = this.getUpdatedAt();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.ns.GetRoutingProfileResponse} The clone.
 */
proto.ns.GetRoutingProfileResponse.prototype.cloneMessage = function() {
  return /** @type {!proto.ns.GetRoutingProfileResponse} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional RoutingProfile routing_profile = 1;
 * @return {proto.ns.RoutingProfile}
 */
proto.ns.GetRoutingProfileResponse.prototype.getRoutingProfile = function() {
  return /** @type{proto.ns.RoutingProfile} */ (
    jspb.Message.getWrapperField(this, ns_profiles_pb.RoutingProfile, 1));
};


/** @param {proto.ns.RoutingProfile|undefined} value  */
proto.ns.GetRoutingProfileResponse.prototype.setRoutingProfile = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.ns.GetRoutingProfileResponse.prototype.clearRoutingProfile = function() {
  this.setRoutingProfile(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.ns.GetRoutingProfileResponse.prototype.hasRoutingProfile = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.Timestamp created_at = 2;
 * @return {proto.google.protobuf.Timestamp}
 */
proto.ns.GetRoutingProfileResponse.prototype.getCreatedAt = function() {
  return /** @type{proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/** @param {proto.google.protobuf.Timestamp|undefined} value  */
proto.ns.GetRoutingProfileResponse.prototype.setCreatedAt = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.ns.GetRoutingProfileResponse.prototype.clearCreatedAt = function() {
  this.setCreatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.ns.GetRoutingProfileResponse.prototype.hasCreatedAt = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.Timestamp updated_at = 3;
 * @return {proto.google.protobuf.Timestamp}
 */
proto.ns.GetRoutingProfileResponse.prototype.getUpdatedAt = function() {
  return /** @type{proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/** @param {proto.google.protobuf.Timestamp|undefined} value  */
proto.ns.GetRoutingProfileResponse.prototype.setUpdatedAt = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.ns.GetRoutingProfileResponse.prototype.clearUpdatedAt = function() {
  this.setUpdatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.ns.GetRoutingProfileResponse.prototype.hasUpdatedAt = function() {
  return jspb.Message.getField(this, 3) != null;
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
proto.ns.UpdateRoutingProfileRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ns.UpdateRoutingProfileRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.ns.UpdateRoutingProfileRequest.displayName = 'proto.ns.UpdateRoutingProfileRequest';
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
proto.ns.UpdateRoutingProfileRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ns.UpdateRoutingProfileRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ns.UpdateRoutingProfileRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.ns.UpdateRoutingProfileRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    routingProfile: (f = msg.getRoutingProfile()) && ns_profiles_pb.RoutingProfile.toObject(includeInstance, f)
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
 * @return {!proto.ns.UpdateRoutingProfileRequest}
 */
proto.ns.UpdateRoutingProfileRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ns.UpdateRoutingProfileRequest;
  return proto.ns.UpdateRoutingProfileRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ns.UpdateRoutingProfileRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ns.UpdateRoutingProfileRequest}
 */
proto.ns.UpdateRoutingProfileRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new ns_profiles_pb.RoutingProfile;
      reader.readMessage(value,ns_profiles_pb.RoutingProfile.deserializeBinaryFromReader);
      msg.setRoutingProfile(value);
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
 * @param {!proto.ns.UpdateRoutingProfileRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.ns.UpdateRoutingProfileRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ns.UpdateRoutingProfileRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.ns.UpdateRoutingProfileRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getRoutingProfile();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      ns_profiles_pb.RoutingProfile.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.ns.UpdateRoutingProfileRequest} The clone.
 */
proto.ns.UpdateRoutingProfileRequest.prototype.cloneMessage = function() {
  return /** @type {!proto.ns.UpdateRoutingProfileRequest} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional RoutingProfile routing_profile = 1;
 * @return {proto.ns.RoutingProfile}
 */
proto.ns.UpdateRoutingProfileRequest.prototype.getRoutingProfile = function() {
  return /** @type{proto.ns.RoutingProfile} */ (
    jspb.Message.getWrapperField(this, ns_profiles_pb.RoutingProfile, 1));
};


/** @param {proto.ns.RoutingProfile|undefined} value  */
proto.ns.UpdateRoutingProfileRequest.prototype.setRoutingProfile = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.ns.UpdateRoutingProfileRequest.prototype.clearRoutingProfile = function() {
  this.setRoutingProfile(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.ns.UpdateRoutingProfileRequest.prototype.hasRoutingProfile = function() {
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
proto.ns.DeleteRoutingProfileRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ns.DeleteRoutingProfileRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.ns.DeleteRoutingProfileRequest.displayName = 'proto.ns.DeleteRoutingProfileRequest';
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
proto.ns.DeleteRoutingProfileRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ns.DeleteRoutingProfileRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ns.DeleteRoutingProfileRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.ns.DeleteRoutingProfileRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: msg.getId_asB64()
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
 * @return {!proto.ns.DeleteRoutingProfileRequest}
 */
proto.ns.DeleteRoutingProfileRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ns.DeleteRoutingProfileRequest;
  return proto.ns.DeleteRoutingProfileRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ns.DeleteRoutingProfileRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ns.DeleteRoutingProfileRequest}
 */
proto.ns.DeleteRoutingProfileRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
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
 * @param {!proto.ns.DeleteRoutingProfileRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.ns.DeleteRoutingProfileRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ns.DeleteRoutingProfileRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.ns.DeleteRoutingProfileRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getId_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.ns.DeleteRoutingProfileRequest} The clone.
 */
proto.ns.DeleteRoutingProfileRequest.prototype.cloneMessage = function() {
  return /** @type {!proto.ns.DeleteRoutingProfileRequest} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional bytes id = 1;
 * @return {!(string|Uint8Array)}
 */
proto.ns.DeleteRoutingProfileRequest.prototype.getId = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldProto3(this, 1, ""));
};


/**
 * optional bytes id = 1;
 * This is a type-conversion wrapper around `getId()`
 * @return {string}
 */
proto.ns.DeleteRoutingProfileRequest.prototype.getId_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getId()));
};


/**
 * optional bytes id = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getId()`
 * @return {!Uint8Array}
 */
proto.ns.DeleteRoutingProfileRequest.prototype.getId_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getId()));
};


/** @param {!(string|Uint8Array)} value  */
proto.ns.DeleteRoutingProfileRequest.prototype.setId = function(value) {
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
proto.ns.CreateDeviceProfileRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ns.CreateDeviceProfileRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.ns.CreateDeviceProfileRequest.displayName = 'proto.ns.CreateDeviceProfileRequest';
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
proto.ns.CreateDeviceProfileRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ns.CreateDeviceProfileRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ns.CreateDeviceProfileRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.ns.CreateDeviceProfileRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    deviceProfile: (f = msg.getDeviceProfile()) && ns_profiles_pb.DeviceProfile.toObject(includeInstance, f)
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
 * @return {!proto.ns.CreateDeviceProfileRequest}
 */
proto.ns.CreateDeviceProfileRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ns.CreateDeviceProfileRequest;
  return proto.ns.CreateDeviceProfileRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ns.CreateDeviceProfileRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ns.CreateDeviceProfileRequest}
 */
proto.ns.CreateDeviceProfileRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new ns_profiles_pb.DeviceProfile;
      reader.readMessage(value,ns_profiles_pb.DeviceProfile.deserializeBinaryFromReader);
      msg.setDeviceProfile(value);
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
 * @param {!proto.ns.CreateDeviceProfileRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.ns.CreateDeviceProfileRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ns.CreateDeviceProfileRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.ns.CreateDeviceProfileRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getDeviceProfile();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      ns_profiles_pb.DeviceProfile.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.ns.CreateDeviceProfileRequest} The clone.
 */
proto.ns.CreateDeviceProfileRequest.prototype.cloneMessage = function() {
  return /** @type {!proto.ns.CreateDeviceProfileRequest} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional DeviceProfile device_profile = 1;
 * @return {proto.ns.DeviceProfile}
 */
proto.ns.CreateDeviceProfileRequest.prototype.getDeviceProfile = function() {
  return /** @type{proto.ns.DeviceProfile} */ (
    jspb.Message.getWrapperField(this, ns_profiles_pb.DeviceProfile, 1));
};


/** @param {proto.ns.DeviceProfile|undefined} value  */
proto.ns.CreateDeviceProfileRequest.prototype.setDeviceProfile = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.ns.CreateDeviceProfileRequest.prototype.clearDeviceProfile = function() {
  this.setDeviceProfile(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.ns.CreateDeviceProfileRequest.prototype.hasDeviceProfile = function() {
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
proto.ns.CreateDeviceProfileResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ns.CreateDeviceProfileResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.ns.CreateDeviceProfileResponse.displayName = 'proto.ns.CreateDeviceProfileResponse';
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
proto.ns.CreateDeviceProfileResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.ns.CreateDeviceProfileResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ns.CreateDeviceProfileResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.ns.CreateDeviceProfileResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: msg.getId_asB64()
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
 * @return {!proto.ns.CreateDeviceProfileResponse}
 */
proto.ns.CreateDeviceProfileResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ns.CreateDeviceProfileResponse;
  return proto.ns.CreateDeviceProfileResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ns.CreateDeviceProfileResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ns.CreateDeviceProfileResponse}
 */
proto.ns.CreateDeviceProfileResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
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
 * @param {!proto.ns.CreateDeviceProfileResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.ns.CreateDeviceProfileResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ns.CreateDeviceProfileResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.ns.CreateDeviceProfileResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getId_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.ns.CreateDeviceProfileResponse} The clone.
 */
proto.ns.CreateDeviceProfileResponse.prototype.cloneMessage = function() {
  return /** @type {!proto.ns.CreateDeviceProfileResponse} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional bytes id = 1;
 * @return {!(string|Uint8Array)}
 */
proto.ns.CreateDeviceProfileResponse.prototype.getId = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldProto3(this, 1, ""));
};


/**
 * optional bytes id = 1;
 * This is a type-conversion wrapper around `getId()`
 * @return {string}
 */
proto.ns.CreateDeviceProfileResponse.prototype.getId_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getId()));
};


/**
 * optional bytes id = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getId()`
 * @return {!Uint8Array}
 */
proto.ns.CreateDeviceProfileResponse.prototype.getId_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getId()));
};


/** @param {!(string|Uint8Array)} value  */
proto.ns.CreateDeviceProfileResponse.prototype.setId = function(value) {
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
proto.ns.GetDeviceProfileRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ns.GetDeviceProfileRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.ns.GetDeviceProfileRequest.displayName = 'proto.ns.GetDeviceProfileRequest';
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
proto.ns.GetDeviceProfileRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ns.GetDeviceProfileRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ns.GetDeviceProfileRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.ns.GetDeviceProfileRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: msg.getId_asB64()
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
 * @return {!proto.ns.GetDeviceProfileRequest}
 */
proto.ns.GetDeviceProfileRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ns.GetDeviceProfileRequest;
  return proto.ns.GetDeviceProfileRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ns.GetDeviceProfileRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ns.GetDeviceProfileRequest}
 */
proto.ns.GetDeviceProfileRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
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
 * @param {!proto.ns.GetDeviceProfileRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.ns.GetDeviceProfileRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ns.GetDeviceProfileRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.ns.GetDeviceProfileRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getId_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.ns.GetDeviceProfileRequest} The clone.
 */
proto.ns.GetDeviceProfileRequest.prototype.cloneMessage = function() {
  return /** @type {!proto.ns.GetDeviceProfileRequest} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional bytes id = 1;
 * @return {!(string|Uint8Array)}
 */
proto.ns.GetDeviceProfileRequest.prototype.getId = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldProto3(this, 1, ""));
};


/**
 * optional bytes id = 1;
 * This is a type-conversion wrapper around `getId()`
 * @return {string}
 */
proto.ns.GetDeviceProfileRequest.prototype.getId_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getId()));
};


/**
 * optional bytes id = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getId()`
 * @return {!Uint8Array}
 */
proto.ns.GetDeviceProfileRequest.prototype.getId_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getId()));
};


/** @param {!(string|Uint8Array)} value  */
proto.ns.GetDeviceProfileRequest.prototype.setId = function(value) {
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
proto.ns.GetDeviceProfileResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ns.GetDeviceProfileResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.ns.GetDeviceProfileResponse.displayName = 'proto.ns.GetDeviceProfileResponse';
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
proto.ns.GetDeviceProfileResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.ns.GetDeviceProfileResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ns.GetDeviceProfileResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.ns.GetDeviceProfileResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    deviceProfile: (f = msg.getDeviceProfile()) && ns_profiles_pb.DeviceProfile.toObject(includeInstance, f),
    createdAt: (f = msg.getCreatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    updatedAt: (f = msg.getUpdatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
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
 * @return {!proto.ns.GetDeviceProfileResponse}
 */
proto.ns.GetDeviceProfileResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ns.GetDeviceProfileResponse;
  return proto.ns.GetDeviceProfileResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ns.GetDeviceProfileResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ns.GetDeviceProfileResponse}
 */
proto.ns.GetDeviceProfileResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new ns_profiles_pb.DeviceProfile;
      reader.readMessage(value,ns_profiles_pb.DeviceProfile.deserializeBinaryFromReader);
      msg.setDeviceProfile(value);
      break;
    case 2:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreatedAt(value);
      break;
    case 3:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setUpdatedAt(value);
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
 * @param {!proto.ns.GetDeviceProfileResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.ns.GetDeviceProfileResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ns.GetDeviceProfileResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.ns.GetDeviceProfileResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getDeviceProfile();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      ns_profiles_pb.DeviceProfile.serializeBinaryToWriter
    );
  }
  f = this.getCreatedAt();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = this.getUpdatedAt();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.ns.GetDeviceProfileResponse} The clone.
 */
proto.ns.GetDeviceProfileResponse.prototype.cloneMessage = function() {
  return /** @type {!proto.ns.GetDeviceProfileResponse} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional DeviceProfile device_profile = 1;
 * @return {proto.ns.DeviceProfile}
 */
proto.ns.GetDeviceProfileResponse.prototype.getDeviceProfile = function() {
  return /** @type{proto.ns.DeviceProfile} */ (
    jspb.Message.getWrapperField(this, ns_profiles_pb.DeviceProfile, 1));
};


/** @param {proto.ns.DeviceProfile|undefined} value  */
proto.ns.GetDeviceProfileResponse.prototype.setDeviceProfile = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.ns.GetDeviceProfileResponse.prototype.clearDeviceProfile = function() {
  this.setDeviceProfile(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.ns.GetDeviceProfileResponse.prototype.hasDeviceProfile = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.Timestamp created_at = 2;
 * @return {proto.google.protobuf.Timestamp}
 */
proto.ns.GetDeviceProfileResponse.prototype.getCreatedAt = function() {
  return /** @type{proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/** @param {proto.google.protobuf.Timestamp|undefined} value  */
proto.ns.GetDeviceProfileResponse.prototype.setCreatedAt = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.ns.GetDeviceProfileResponse.prototype.clearCreatedAt = function() {
  this.setCreatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.ns.GetDeviceProfileResponse.prototype.hasCreatedAt = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.Timestamp updated_at = 3;
 * @return {proto.google.protobuf.Timestamp}
 */
proto.ns.GetDeviceProfileResponse.prototype.getUpdatedAt = function() {
  return /** @type{proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/** @param {proto.google.protobuf.Timestamp|undefined} value  */
proto.ns.GetDeviceProfileResponse.prototype.setUpdatedAt = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.ns.GetDeviceProfileResponse.prototype.clearUpdatedAt = function() {
  this.setUpdatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.ns.GetDeviceProfileResponse.prototype.hasUpdatedAt = function() {
  return jspb.Message.getField(this, 3) != null;
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
proto.ns.UpdateDeviceProfileRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ns.UpdateDeviceProfileRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.ns.UpdateDeviceProfileRequest.displayName = 'proto.ns.UpdateDeviceProfileRequest';
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
proto.ns.UpdateDeviceProfileRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ns.UpdateDeviceProfileRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ns.UpdateDeviceProfileRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.ns.UpdateDeviceProfileRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    deviceProfile: (f = msg.getDeviceProfile()) && ns_profiles_pb.DeviceProfile.toObject(includeInstance, f)
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
 * @return {!proto.ns.UpdateDeviceProfileRequest}
 */
proto.ns.UpdateDeviceProfileRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ns.UpdateDeviceProfileRequest;
  return proto.ns.UpdateDeviceProfileRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ns.UpdateDeviceProfileRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ns.UpdateDeviceProfileRequest}
 */
proto.ns.UpdateDeviceProfileRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new ns_profiles_pb.DeviceProfile;
      reader.readMessage(value,ns_profiles_pb.DeviceProfile.deserializeBinaryFromReader);
      msg.setDeviceProfile(value);
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
 * @param {!proto.ns.UpdateDeviceProfileRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.ns.UpdateDeviceProfileRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ns.UpdateDeviceProfileRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.ns.UpdateDeviceProfileRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getDeviceProfile();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      ns_profiles_pb.DeviceProfile.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.ns.UpdateDeviceProfileRequest} The clone.
 */
proto.ns.UpdateDeviceProfileRequest.prototype.cloneMessage = function() {
  return /** @type {!proto.ns.UpdateDeviceProfileRequest} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional DeviceProfile device_profile = 1;
 * @return {proto.ns.DeviceProfile}
 */
proto.ns.UpdateDeviceProfileRequest.prototype.getDeviceProfile = function() {
  return /** @type{proto.ns.DeviceProfile} */ (
    jspb.Message.getWrapperField(this, ns_profiles_pb.DeviceProfile, 1));
};


/** @param {proto.ns.DeviceProfile|undefined} value  */
proto.ns.UpdateDeviceProfileRequest.prototype.setDeviceProfile = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.ns.UpdateDeviceProfileRequest.prototype.clearDeviceProfile = function() {
  this.setDeviceProfile(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.ns.UpdateDeviceProfileRequest.prototype.hasDeviceProfile = function() {
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
proto.ns.DeleteDeviceProfileRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ns.DeleteDeviceProfileRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.ns.DeleteDeviceProfileRequest.displayName = 'proto.ns.DeleteDeviceProfileRequest';
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
proto.ns.DeleteDeviceProfileRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ns.DeleteDeviceProfileRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ns.DeleteDeviceProfileRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.ns.DeleteDeviceProfileRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: msg.getId_asB64()
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
 * @return {!proto.ns.DeleteDeviceProfileRequest}
 */
proto.ns.DeleteDeviceProfileRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ns.DeleteDeviceProfileRequest;
  return proto.ns.DeleteDeviceProfileRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ns.DeleteDeviceProfileRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ns.DeleteDeviceProfileRequest}
 */
proto.ns.DeleteDeviceProfileRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
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
 * @param {!proto.ns.DeleteDeviceProfileRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.ns.DeleteDeviceProfileRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ns.DeleteDeviceProfileRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.ns.DeleteDeviceProfileRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getId_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.ns.DeleteDeviceProfileRequest} The clone.
 */
proto.ns.DeleteDeviceProfileRequest.prototype.cloneMessage = function() {
  return /** @type {!proto.ns.DeleteDeviceProfileRequest} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional bytes id = 1;
 * @return {!(string|Uint8Array)}
 */
proto.ns.DeleteDeviceProfileRequest.prototype.getId = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldProto3(this, 1, ""));
};


/**
 * optional bytes id = 1;
 * This is a type-conversion wrapper around `getId()`
 * @return {string}
 */
proto.ns.DeleteDeviceProfileRequest.prototype.getId_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getId()));
};


/**
 * optional bytes id = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getId()`
 * @return {!Uint8Array}
 */
proto.ns.DeleteDeviceProfileRequest.prototype.getId_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getId()));
};


/** @param {!(string|Uint8Array)} value  */
proto.ns.DeleteDeviceProfileRequest.prototype.setId = function(value) {
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
proto.ns.Device = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ns.Device, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.ns.Device.displayName = 'proto.ns.Device';
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
proto.ns.Device.prototype.toObject = function(opt_includeInstance) {
  return proto.ns.Device.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ns.Device} msg The msg instance to transform.
 * @return {!Object}
 */
proto.ns.Device.toObject = function(includeInstance, msg) {
  var f, obj = {
    devEui: msg.getDevEui_asB64(),
    deviceProfileId: msg.getDeviceProfileId_asB64(),
    serviceProfileId: msg.getServiceProfileId_asB64(),
    routingProfileId: msg.getRoutingProfileId_asB64(),
    skipFCntCheck: msg.getSkipFCntCheck(),
    referenceAltitude: msg.getReferenceAltitude()
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
 * @return {!proto.ns.Device}
 */
proto.ns.Device.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ns.Device;
  return proto.ns.Device.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ns.Device} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ns.Device}
 */
proto.ns.Device.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setDevEui(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setDeviceProfileId(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setServiceProfileId(value);
      break;
    case 4:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setRoutingProfileId(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSkipFCntCheck(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setReferenceAltitude(value);
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
 * @param {!proto.ns.Device} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.ns.Device.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ns.Device.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.ns.Device.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getDevEui_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = this.getDeviceProfileId_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = this.getServiceProfileId_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      3,
      f
    );
  }
  f = this.getRoutingProfileId_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      4,
      f
    );
  }
  f = this.getSkipFCntCheck();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
  f = this.getReferenceAltitude();
  if (f !== 0.0) {
    writer.writeDouble(
      6,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.ns.Device} The clone.
 */
proto.ns.Device.prototype.cloneMessage = function() {
  return /** @type {!proto.ns.Device} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional bytes dev_eui = 1;
 * @return {!(string|Uint8Array)}
 */
proto.ns.Device.prototype.getDevEui = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldProto3(this, 1, ""));
};


/**
 * optional bytes dev_eui = 1;
 * This is a type-conversion wrapper around `getDevEui()`
 * @return {string}
 */
proto.ns.Device.prototype.getDevEui_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getDevEui()));
};


/**
 * optional bytes dev_eui = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getDevEui()`
 * @return {!Uint8Array}
 */
proto.ns.Device.prototype.getDevEui_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getDevEui()));
};


/** @param {!(string|Uint8Array)} value  */
proto.ns.Device.prototype.setDevEui = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional bytes device_profile_id = 2;
 * @return {!(string|Uint8Array)}
 */
proto.ns.Device.prototype.getDeviceProfileId = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldProto3(this, 2, ""));
};


/**
 * optional bytes device_profile_id = 2;
 * This is a type-conversion wrapper around `getDeviceProfileId()`
 * @return {string}
 */
proto.ns.Device.prototype.getDeviceProfileId_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getDeviceProfileId()));
};


/**
 * optional bytes device_profile_id = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getDeviceProfileId()`
 * @return {!Uint8Array}
 */
proto.ns.Device.prototype.getDeviceProfileId_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getDeviceProfileId()));
};


/** @param {!(string|Uint8Array)} value  */
proto.ns.Device.prototype.setDeviceProfileId = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional bytes service_profile_id = 3;
 * @return {!(string|Uint8Array)}
 */
proto.ns.Device.prototype.getServiceProfileId = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldProto3(this, 3, ""));
};


/**
 * optional bytes service_profile_id = 3;
 * This is a type-conversion wrapper around `getServiceProfileId()`
 * @return {string}
 */
proto.ns.Device.prototype.getServiceProfileId_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getServiceProfileId()));
};


/**
 * optional bytes service_profile_id = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getServiceProfileId()`
 * @return {!Uint8Array}
 */
proto.ns.Device.prototype.getServiceProfileId_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getServiceProfileId()));
};


/** @param {!(string|Uint8Array)} value  */
proto.ns.Device.prototype.setServiceProfileId = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional bytes routing_profile_id = 4;
 * @return {!(string|Uint8Array)}
 */
proto.ns.Device.prototype.getRoutingProfileId = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldProto3(this, 4, ""));
};


/**
 * optional bytes routing_profile_id = 4;
 * This is a type-conversion wrapper around `getRoutingProfileId()`
 * @return {string}
 */
proto.ns.Device.prototype.getRoutingProfileId_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getRoutingProfileId()));
};


/**
 * optional bytes routing_profile_id = 4;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getRoutingProfileId()`
 * @return {!Uint8Array}
 */
proto.ns.Device.prototype.getRoutingProfileId_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getRoutingProfileId()));
};


/** @param {!(string|Uint8Array)} value  */
proto.ns.Device.prototype.setRoutingProfileId = function(value) {
  jspb.Message.setField(this, 4, value);
};


/**
 * optional bool skip_f_cnt_check = 5;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.ns.Device.prototype.getSkipFCntCheck = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldProto3(this, 5, false));
};


/** @param {boolean} value  */
proto.ns.Device.prototype.setSkipFCntCheck = function(value) {
  jspb.Message.setField(this, 5, value);
};


/**
 * optional double reference_altitude = 6;
 * @return {number}
 */
proto.ns.Device.prototype.getReferenceAltitude = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 6, 0));
};


/** @param {number} value  */
proto.ns.Device.prototype.setReferenceAltitude = function(value) {
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
proto.ns.CreateDeviceRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ns.CreateDeviceRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.ns.CreateDeviceRequest.displayName = 'proto.ns.CreateDeviceRequest';
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
proto.ns.CreateDeviceRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ns.CreateDeviceRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ns.CreateDeviceRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.ns.CreateDeviceRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    device: (f = msg.getDevice()) && proto.ns.Device.toObject(includeInstance, f)
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
 * @return {!proto.ns.CreateDeviceRequest}
 */
proto.ns.CreateDeviceRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ns.CreateDeviceRequest;
  return proto.ns.CreateDeviceRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ns.CreateDeviceRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ns.CreateDeviceRequest}
 */
proto.ns.CreateDeviceRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ns.Device;
      reader.readMessage(value,proto.ns.Device.deserializeBinaryFromReader);
      msg.setDevice(value);
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
 * @param {!proto.ns.CreateDeviceRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.ns.CreateDeviceRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ns.CreateDeviceRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.ns.CreateDeviceRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getDevice();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.ns.Device.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.ns.CreateDeviceRequest} The clone.
 */
proto.ns.CreateDeviceRequest.prototype.cloneMessage = function() {
  return /** @type {!proto.ns.CreateDeviceRequest} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional Device device = 1;
 * @return {proto.ns.Device}
 */
proto.ns.CreateDeviceRequest.prototype.getDevice = function() {
  return /** @type{proto.ns.Device} */ (
    jspb.Message.getWrapperField(this, proto.ns.Device, 1));
};


/** @param {proto.ns.Device|undefined} value  */
proto.ns.CreateDeviceRequest.prototype.setDevice = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.ns.CreateDeviceRequest.prototype.clearDevice = function() {
  this.setDevice(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.ns.CreateDeviceRequest.prototype.hasDevice = function() {
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
proto.ns.GetDeviceRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ns.GetDeviceRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.ns.GetDeviceRequest.displayName = 'proto.ns.GetDeviceRequest';
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
proto.ns.GetDeviceRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ns.GetDeviceRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ns.GetDeviceRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.ns.GetDeviceRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    devEui: msg.getDevEui_asB64()
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
 * @return {!proto.ns.GetDeviceRequest}
 */
proto.ns.GetDeviceRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ns.GetDeviceRequest;
  return proto.ns.GetDeviceRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ns.GetDeviceRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ns.GetDeviceRequest}
 */
proto.ns.GetDeviceRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setDevEui(value);
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
 * @param {!proto.ns.GetDeviceRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.ns.GetDeviceRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ns.GetDeviceRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.ns.GetDeviceRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getDevEui_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.ns.GetDeviceRequest} The clone.
 */
proto.ns.GetDeviceRequest.prototype.cloneMessage = function() {
  return /** @type {!proto.ns.GetDeviceRequest} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional bytes dev_eui = 1;
 * @return {!(string|Uint8Array)}
 */
proto.ns.GetDeviceRequest.prototype.getDevEui = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldProto3(this, 1, ""));
};


/**
 * optional bytes dev_eui = 1;
 * This is a type-conversion wrapper around `getDevEui()`
 * @return {string}
 */
proto.ns.GetDeviceRequest.prototype.getDevEui_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getDevEui()));
};


/**
 * optional bytes dev_eui = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getDevEui()`
 * @return {!Uint8Array}
 */
proto.ns.GetDeviceRequest.prototype.getDevEui_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getDevEui()));
};


/** @param {!(string|Uint8Array)} value  */
proto.ns.GetDeviceRequest.prototype.setDevEui = function(value) {
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
proto.ns.GetDeviceResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ns.GetDeviceResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.ns.GetDeviceResponse.displayName = 'proto.ns.GetDeviceResponse';
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
proto.ns.GetDeviceResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.ns.GetDeviceResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ns.GetDeviceResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.ns.GetDeviceResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    device: (f = msg.getDevice()) && proto.ns.Device.toObject(includeInstance, f),
    createdAt: (f = msg.getCreatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    updatedAt: (f = msg.getUpdatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
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
 * @return {!proto.ns.GetDeviceResponse}
 */
proto.ns.GetDeviceResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ns.GetDeviceResponse;
  return proto.ns.GetDeviceResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ns.GetDeviceResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ns.GetDeviceResponse}
 */
proto.ns.GetDeviceResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ns.Device;
      reader.readMessage(value,proto.ns.Device.deserializeBinaryFromReader);
      msg.setDevice(value);
      break;
    case 2:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreatedAt(value);
      break;
    case 3:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setUpdatedAt(value);
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
 * @param {!proto.ns.GetDeviceResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.ns.GetDeviceResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ns.GetDeviceResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.ns.GetDeviceResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getDevice();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.ns.Device.serializeBinaryToWriter
    );
  }
  f = this.getCreatedAt();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = this.getUpdatedAt();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.ns.GetDeviceResponse} The clone.
 */
proto.ns.GetDeviceResponse.prototype.cloneMessage = function() {
  return /** @type {!proto.ns.GetDeviceResponse} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional Device device = 1;
 * @return {proto.ns.Device}
 */
proto.ns.GetDeviceResponse.prototype.getDevice = function() {
  return /** @type{proto.ns.Device} */ (
    jspb.Message.getWrapperField(this, proto.ns.Device, 1));
};


/** @param {proto.ns.Device|undefined} value  */
proto.ns.GetDeviceResponse.prototype.setDevice = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.ns.GetDeviceResponse.prototype.clearDevice = function() {
  this.setDevice(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.ns.GetDeviceResponse.prototype.hasDevice = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.Timestamp created_at = 2;
 * @return {proto.google.protobuf.Timestamp}
 */
proto.ns.GetDeviceResponse.prototype.getCreatedAt = function() {
  return /** @type{proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/** @param {proto.google.protobuf.Timestamp|undefined} value  */
proto.ns.GetDeviceResponse.prototype.setCreatedAt = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.ns.GetDeviceResponse.prototype.clearCreatedAt = function() {
  this.setCreatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.ns.GetDeviceResponse.prototype.hasCreatedAt = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.Timestamp updated_at = 3;
 * @return {proto.google.protobuf.Timestamp}
 */
proto.ns.GetDeviceResponse.prototype.getUpdatedAt = function() {
  return /** @type{proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/** @param {proto.google.protobuf.Timestamp|undefined} value  */
proto.ns.GetDeviceResponse.prototype.setUpdatedAt = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.ns.GetDeviceResponse.prototype.clearUpdatedAt = function() {
  this.setUpdatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.ns.GetDeviceResponse.prototype.hasUpdatedAt = function() {
  return jspb.Message.getField(this, 3) != null;
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
proto.ns.UpdateDeviceRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ns.UpdateDeviceRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.ns.UpdateDeviceRequest.displayName = 'proto.ns.UpdateDeviceRequest';
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
proto.ns.UpdateDeviceRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ns.UpdateDeviceRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ns.UpdateDeviceRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.ns.UpdateDeviceRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    device: (f = msg.getDevice()) && proto.ns.Device.toObject(includeInstance, f)
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
 * @return {!proto.ns.UpdateDeviceRequest}
 */
proto.ns.UpdateDeviceRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ns.UpdateDeviceRequest;
  return proto.ns.UpdateDeviceRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ns.UpdateDeviceRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ns.UpdateDeviceRequest}
 */
proto.ns.UpdateDeviceRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ns.Device;
      reader.readMessage(value,proto.ns.Device.deserializeBinaryFromReader);
      msg.setDevice(value);
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
 * @param {!proto.ns.UpdateDeviceRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.ns.UpdateDeviceRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ns.UpdateDeviceRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.ns.UpdateDeviceRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getDevice();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.ns.Device.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.ns.UpdateDeviceRequest} The clone.
 */
proto.ns.UpdateDeviceRequest.prototype.cloneMessage = function() {
  return /** @type {!proto.ns.UpdateDeviceRequest} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional Device device = 1;
 * @return {proto.ns.Device}
 */
proto.ns.UpdateDeviceRequest.prototype.getDevice = function() {
  return /** @type{proto.ns.Device} */ (
    jspb.Message.getWrapperField(this, proto.ns.Device, 1));
};


/** @param {proto.ns.Device|undefined} value  */
proto.ns.UpdateDeviceRequest.prototype.setDevice = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.ns.UpdateDeviceRequest.prototype.clearDevice = function() {
  this.setDevice(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.ns.UpdateDeviceRequest.prototype.hasDevice = function() {
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
proto.ns.DeleteDeviceRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ns.DeleteDeviceRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.ns.DeleteDeviceRequest.displayName = 'proto.ns.DeleteDeviceRequest';
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
proto.ns.DeleteDeviceRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ns.DeleteDeviceRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ns.DeleteDeviceRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.ns.DeleteDeviceRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    devEui: msg.getDevEui_asB64()
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
 * @return {!proto.ns.DeleteDeviceRequest}
 */
proto.ns.DeleteDeviceRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ns.DeleteDeviceRequest;
  return proto.ns.DeleteDeviceRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ns.DeleteDeviceRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ns.DeleteDeviceRequest}
 */
proto.ns.DeleteDeviceRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setDevEui(value);
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
 * @param {!proto.ns.DeleteDeviceRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.ns.DeleteDeviceRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ns.DeleteDeviceRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.ns.DeleteDeviceRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getDevEui_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.ns.DeleteDeviceRequest} The clone.
 */
proto.ns.DeleteDeviceRequest.prototype.cloneMessage = function() {
  return /** @type {!proto.ns.DeleteDeviceRequest} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional bytes dev_eui = 1;
 * @return {!(string|Uint8Array)}
 */
proto.ns.DeleteDeviceRequest.prototype.getDevEui = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldProto3(this, 1, ""));
};


/**
 * optional bytes dev_eui = 1;
 * This is a type-conversion wrapper around `getDevEui()`
 * @return {string}
 */
proto.ns.DeleteDeviceRequest.prototype.getDevEui_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getDevEui()));
};


/**
 * optional bytes dev_eui = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getDevEui()`
 * @return {!Uint8Array}
 */
proto.ns.DeleteDeviceRequest.prototype.getDevEui_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getDevEui()));
};


/** @param {!(string|Uint8Array)} value  */
proto.ns.DeleteDeviceRequest.prototype.setDevEui = function(value) {
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
proto.ns.DeviceActivation = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ns.DeviceActivation, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.ns.DeviceActivation.displayName = 'proto.ns.DeviceActivation';
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
proto.ns.DeviceActivation.prototype.toObject = function(opt_includeInstance) {
  return proto.ns.DeviceActivation.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ns.DeviceActivation} msg The msg instance to transform.
 * @return {!Object}
 */
proto.ns.DeviceActivation.toObject = function(includeInstance, msg) {
  var f, obj = {
    devEui: msg.getDevEui_asB64(),
    devAddr: msg.getDevAddr_asB64(),
    sNwkSIntKey: msg.getSNwkSIntKey_asB64(),
    fNwkSIntKey: msg.getFNwkSIntKey_asB64(),
    nwkSEncKey: msg.getNwkSEncKey_asB64(),
    fCntUp: msg.getFCntUp(),
    nFCntDown: msg.getNFCntDown(),
    aFCntDown: msg.getAFCntDown(),
    skipFCntCheck: msg.getSkipFCntCheck()
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
 * @return {!proto.ns.DeviceActivation}
 */
proto.ns.DeviceActivation.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ns.DeviceActivation;
  return proto.ns.DeviceActivation.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ns.DeviceActivation} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ns.DeviceActivation}
 */
proto.ns.DeviceActivation.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setDevEui(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setDevAddr(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setSNwkSIntKey(value);
      break;
    case 4:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setFNwkSIntKey(value);
      break;
    case 5:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setNwkSEncKey(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setFCntUp(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setNFCntDown(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setAFCntDown(value);
      break;
    case 9:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSkipFCntCheck(value);
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
 * @param {!proto.ns.DeviceActivation} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.ns.DeviceActivation.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ns.DeviceActivation.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.ns.DeviceActivation.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getDevEui_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = this.getDevAddr_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = this.getSNwkSIntKey_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      3,
      f
    );
  }
  f = this.getFNwkSIntKey_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      4,
      f
    );
  }
  f = this.getNwkSEncKey_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      5,
      f
    );
  }
  f = this.getFCntUp();
  if (f !== 0) {
    writer.writeUint32(
      6,
      f
    );
  }
  f = this.getNFCntDown();
  if (f !== 0) {
    writer.writeUint32(
      7,
      f
    );
  }
  f = this.getAFCntDown();
  if (f !== 0) {
    writer.writeUint32(
      8,
      f
    );
  }
  f = this.getSkipFCntCheck();
  if (f) {
    writer.writeBool(
      9,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.ns.DeviceActivation} The clone.
 */
proto.ns.DeviceActivation.prototype.cloneMessage = function() {
  return /** @type {!proto.ns.DeviceActivation} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional bytes dev_eui = 1;
 * @return {!(string|Uint8Array)}
 */
proto.ns.DeviceActivation.prototype.getDevEui = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldProto3(this, 1, ""));
};


/**
 * optional bytes dev_eui = 1;
 * This is a type-conversion wrapper around `getDevEui()`
 * @return {string}
 */
proto.ns.DeviceActivation.prototype.getDevEui_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getDevEui()));
};


/**
 * optional bytes dev_eui = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getDevEui()`
 * @return {!Uint8Array}
 */
proto.ns.DeviceActivation.prototype.getDevEui_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getDevEui()));
};


/** @param {!(string|Uint8Array)} value  */
proto.ns.DeviceActivation.prototype.setDevEui = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional bytes dev_addr = 2;
 * @return {!(string|Uint8Array)}
 */
proto.ns.DeviceActivation.prototype.getDevAddr = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldProto3(this, 2, ""));
};


/**
 * optional bytes dev_addr = 2;
 * This is a type-conversion wrapper around `getDevAddr()`
 * @return {string}
 */
proto.ns.DeviceActivation.prototype.getDevAddr_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getDevAddr()));
};


/**
 * optional bytes dev_addr = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getDevAddr()`
 * @return {!Uint8Array}
 */
proto.ns.DeviceActivation.prototype.getDevAddr_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getDevAddr()));
};


/** @param {!(string|Uint8Array)} value  */
proto.ns.DeviceActivation.prototype.setDevAddr = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional bytes s_nwk_s_int_key = 3;
 * @return {!(string|Uint8Array)}
 */
proto.ns.DeviceActivation.prototype.getSNwkSIntKey = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldProto3(this, 3, ""));
};


/**
 * optional bytes s_nwk_s_int_key = 3;
 * This is a type-conversion wrapper around `getSNwkSIntKey()`
 * @return {string}
 */
proto.ns.DeviceActivation.prototype.getSNwkSIntKey_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getSNwkSIntKey()));
};


/**
 * optional bytes s_nwk_s_int_key = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getSNwkSIntKey()`
 * @return {!Uint8Array}
 */
proto.ns.DeviceActivation.prototype.getSNwkSIntKey_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getSNwkSIntKey()));
};


/** @param {!(string|Uint8Array)} value  */
proto.ns.DeviceActivation.prototype.setSNwkSIntKey = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional bytes f_nwk_s_int_key = 4;
 * @return {!(string|Uint8Array)}
 */
proto.ns.DeviceActivation.prototype.getFNwkSIntKey = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldProto3(this, 4, ""));
};


/**
 * optional bytes f_nwk_s_int_key = 4;
 * This is a type-conversion wrapper around `getFNwkSIntKey()`
 * @return {string}
 */
proto.ns.DeviceActivation.prototype.getFNwkSIntKey_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getFNwkSIntKey()));
};


/**
 * optional bytes f_nwk_s_int_key = 4;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getFNwkSIntKey()`
 * @return {!Uint8Array}
 */
proto.ns.DeviceActivation.prototype.getFNwkSIntKey_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getFNwkSIntKey()));
};


/** @param {!(string|Uint8Array)} value  */
proto.ns.DeviceActivation.prototype.setFNwkSIntKey = function(value) {
  jspb.Message.setField(this, 4, value);
};


/**
 * optional bytes nwk_s_enc_key = 5;
 * @return {!(string|Uint8Array)}
 */
proto.ns.DeviceActivation.prototype.getNwkSEncKey = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldProto3(this, 5, ""));
};


/**
 * optional bytes nwk_s_enc_key = 5;
 * This is a type-conversion wrapper around `getNwkSEncKey()`
 * @return {string}
 */
proto.ns.DeviceActivation.prototype.getNwkSEncKey_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getNwkSEncKey()));
};


/**
 * optional bytes nwk_s_enc_key = 5;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getNwkSEncKey()`
 * @return {!Uint8Array}
 */
proto.ns.DeviceActivation.prototype.getNwkSEncKey_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getNwkSEncKey()));
};


/** @param {!(string|Uint8Array)} value  */
proto.ns.DeviceActivation.prototype.setNwkSEncKey = function(value) {
  jspb.Message.setField(this, 5, value);
};


/**
 * optional uint32 f_cnt_up = 6;
 * @return {number}
 */
proto.ns.DeviceActivation.prototype.getFCntUp = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 6, 0));
};


/** @param {number} value  */
proto.ns.DeviceActivation.prototype.setFCntUp = function(value) {
  jspb.Message.setField(this, 6, value);
};


/**
 * optional uint32 n_f_cnt_down = 7;
 * @return {number}
 */
proto.ns.DeviceActivation.prototype.getNFCntDown = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 7, 0));
};


/** @param {number} value  */
proto.ns.DeviceActivation.prototype.setNFCntDown = function(value) {
  jspb.Message.setField(this, 7, value);
};


/**
 * optional uint32 a_f_cnt_down = 8;
 * @return {number}
 */
proto.ns.DeviceActivation.prototype.getAFCntDown = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 8, 0));
};


/** @param {number} value  */
proto.ns.DeviceActivation.prototype.setAFCntDown = function(value) {
  jspb.Message.setField(this, 8, value);
};


/**
 * optional bool skip_f_cnt_check = 9;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.ns.DeviceActivation.prototype.getSkipFCntCheck = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldProto3(this, 9, false));
};


/** @param {boolean} value  */
proto.ns.DeviceActivation.prototype.setSkipFCntCheck = function(value) {
  jspb.Message.setField(this, 9, value);
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
proto.ns.ActivateDeviceRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ns.ActivateDeviceRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.ns.ActivateDeviceRequest.displayName = 'proto.ns.ActivateDeviceRequest';
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
proto.ns.ActivateDeviceRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ns.ActivateDeviceRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ns.ActivateDeviceRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.ns.ActivateDeviceRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    deviceActivation: (f = msg.getDeviceActivation()) && proto.ns.DeviceActivation.toObject(includeInstance, f)
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
 * @return {!proto.ns.ActivateDeviceRequest}
 */
proto.ns.ActivateDeviceRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ns.ActivateDeviceRequest;
  return proto.ns.ActivateDeviceRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ns.ActivateDeviceRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ns.ActivateDeviceRequest}
 */
proto.ns.ActivateDeviceRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ns.DeviceActivation;
      reader.readMessage(value,proto.ns.DeviceActivation.deserializeBinaryFromReader);
      msg.setDeviceActivation(value);
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
 * @param {!proto.ns.ActivateDeviceRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.ns.ActivateDeviceRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ns.ActivateDeviceRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.ns.ActivateDeviceRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getDeviceActivation();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.ns.DeviceActivation.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.ns.ActivateDeviceRequest} The clone.
 */
proto.ns.ActivateDeviceRequest.prototype.cloneMessage = function() {
  return /** @type {!proto.ns.ActivateDeviceRequest} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional DeviceActivation device_activation = 1;
 * @return {proto.ns.DeviceActivation}
 */
proto.ns.ActivateDeviceRequest.prototype.getDeviceActivation = function() {
  return /** @type{proto.ns.DeviceActivation} */ (
    jspb.Message.getWrapperField(this, proto.ns.DeviceActivation, 1));
};


/** @param {proto.ns.DeviceActivation|undefined} value  */
proto.ns.ActivateDeviceRequest.prototype.setDeviceActivation = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.ns.ActivateDeviceRequest.prototype.clearDeviceActivation = function() {
  this.setDeviceActivation(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.ns.ActivateDeviceRequest.prototype.hasDeviceActivation = function() {
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
proto.ns.DeactivateDeviceRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ns.DeactivateDeviceRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.ns.DeactivateDeviceRequest.displayName = 'proto.ns.DeactivateDeviceRequest';
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
proto.ns.DeactivateDeviceRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ns.DeactivateDeviceRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ns.DeactivateDeviceRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.ns.DeactivateDeviceRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    devEui: msg.getDevEui_asB64()
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
 * @return {!proto.ns.DeactivateDeviceRequest}
 */
proto.ns.DeactivateDeviceRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ns.DeactivateDeviceRequest;
  return proto.ns.DeactivateDeviceRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ns.DeactivateDeviceRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ns.DeactivateDeviceRequest}
 */
proto.ns.DeactivateDeviceRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setDevEui(value);
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
 * @param {!proto.ns.DeactivateDeviceRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.ns.DeactivateDeviceRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ns.DeactivateDeviceRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.ns.DeactivateDeviceRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getDevEui_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.ns.DeactivateDeviceRequest} The clone.
 */
proto.ns.DeactivateDeviceRequest.prototype.cloneMessage = function() {
  return /** @type {!proto.ns.DeactivateDeviceRequest} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional bytes dev_eui = 1;
 * @return {!(string|Uint8Array)}
 */
proto.ns.DeactivateDeviceRequest.prototype.getDevEui = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldProto3(this, 1, ""));
};


/**
 * optional bytes dev_eui = 1;
 * This is a type-conversion wrapper around `getDevEui()`
 * @return {string}
 */
proto.ns.DeactivateDeviceRequest.prototype.getDevEui_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getDevEui()));
};


/**
 * optional bytes dev_eui = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getDevEui()`
 * @return {!Uint8Array}
 */
proto.ns.DeactivateDeviceRequest.prototype.getDevEui_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getDevEui()));
};


/** @param {!(string|Uint8Array)} value  */
proto.ns.DeactivateDeviceRequest.prototype.setDevEui = function(value) {
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
proto.ns.GetDeviceActivationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ns.GetDeviceActivationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.ns.GetDeviceActivationRequest.displayName = 'proto.ns.GetDeviceActivationRequest';
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
proto.ns.GetDeviceActivationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ns.GetDeviceActivationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ns.GetDeviceActivationRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.ns.GetDeviceActivationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    devEui: msg.getDevEui_asB64()
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
 * @return {!proto.ns.GetDeviceActivationRequest}
 */
proto.ns.GetDeviceActivationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ns.GetDeviceActivationRequest;
  return proto.ns.GetDeviceActivationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ns.GetDeviceActivationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ns.GetDeviceActivationRequest}
 */
proto.ns.GetDeviceActivationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setDevEui(value);
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
 * @param {!proto.ns.GetDeviceActivationRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.ns.GetDeviceActivationRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ns.GetDeviceActivationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.ns.GetDeviceActivationRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getDevEui_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.ns.GetDeviceActivationRequest} The clone.
 */
proto.ns.GetDeviceActivationRequest.prototype.cloneMessage = function() {
  return /** @type {!proto.ns.GetDeviceActivationRequest} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional bytes dev_eui = 1;
 * @return {!(string|Uint8Array)}
 */
proto.ns.GetDeviceActivationRequest.prototype.getDevEui = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldProto3(this, 1, ""));
};


/**
 * optional bytes dev_eui = 1;
 * This is a type-conversion wrapper around `getDevEui()`
 * @return {string}
 */
proto.ns.GetDeviceActivationRequest.prototype.getDevEui_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getDevEui()));
};


/**
 * optional bytes dev_eui = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getDevEui()`
 * @return {!Uint8Array}
 */
proto.ns.GetDeviceActivationRequest.prototype.getDevEui_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getDevEui()));
};


/** @param {!(string|Uint8Array)} value  */
proto.ns.GetDeviceActivationRequest.prototype.setDevEui = function(value) {
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
proto.ns.GetDeviceActivationResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ns.GetDeviceActivationResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.ns.GetDeviceActivationResponse.displayName = 'proto.ns.GetDeviceActivationResponse';
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
proto.ns.GetDeviceActivationResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.ns.GetDeviceActivationResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ns.GetDeviceActivationResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.ns.GetDeviceActivationResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    deviceActivation: (f = msg.getDeviceActivation()) && proto.ns.DeviceActivation.toObject(includeInstance, f)
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
 * @return {!proto.ns.GetDeviceActivationResponse}
 */
proto.ns.GetDeviceActivationResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ns.GetDeviceActivationResponse;
  return proto.ns.GetDeviceActivationResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ns.GetDeviceActivationResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ns.GetDeviceActivationResponse}
 */
proto.ns.GetDeviceActivationResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ns.DeviceActivation;
      reader.readMessage(value,proto.ns.DeviceActivation.deserializeBinaryFromReader);
      msg.setDeviceActivation(value);
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
 * @param {!proto.ns.GetDeviceActivationResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.ns.GetDeviceActivationResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ns.GetDeviceActivationResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.ns.GetDeviceActivationResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getDeviceActivation();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.ns.DeviceActivation.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.ns.GetDeviceActivationResponse} The clone.
 */
proto.ns.GetDeviceActivationResponse.prototype.cloneMessage = function() {
  return /** @type {!proto.ns.GetDeviceActivationResponse} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional DeviceActivation device_activation = 1;
 * @return {proto.ns.DeviceActivation}
 */
proto.ns.GetDeviceActivationResponse.prototype.getDeviceActivation = function() {
  return /** @type{proto.ns.DeviceActivation} */ (
    jspb.Message.getWrapperField(this, proto.ns.DeviceActivation, 1));
};


/** @param {proto.ns.DeviceActivation|undefined} value  */
proto.ns.GetDeviceActivationResponse.prototype.setDeviceActivation = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.ns.GetDeviceActivationResponse.prototype.clearDeviceActivation = function() {
  this.setDeviceActivation(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.ns.GetDeviceActivationResponse.prototype.hasDeviceActivation = function() {
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
proto.ns.GetRandomDevAddrResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ns.GetRandomDevAddrResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.ns.GetRandomDevAddrResponse.displayName = 'proto.ns.GetRandomDevAddrResponse';
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
proto.ns.GetRandomDevAddrResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.ns.GetRandomDevAddrResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ns.GetRandomDevAddrResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.ns.GetRandomDevAddrResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    devAddr: msg.getDevAddr_asB64()
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
 * @return {!proto.ns.GetRandomDevAddrResponse}
 */
proto.ns.GetRandomDevAddrResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ns.GetRandomDevAddrResponse;
  return proto.ns.GetRandomDevAddrResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ns.GetRandomDevAddrResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ns.GetRandomDevAddrResponse}
 */
proto.ns.GetRandomDevAddrResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setDevAddr(value);
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
 * @param {!proto.ns.GetRandomDevAddrResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.ns.GetRandomDevAddrResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ns.GetRandomDevAddrResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.ns.GetRandomDevAddrResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getDevAddr_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.ns.GetRandomDevAddrResponse} The clone.
 */
proto.ns.GetRandomDevAddrResponse.prototype.cloneMessage = function() {
  return /** @type {!proto.ns.GetRandomDevAddrResponse} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional bytes dev_addr = 1;
 * @return {!(string|Uint8Array)}
 */
proto.ns.GetRandomDevAddrResponse.prototype.getDevAddr = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldProto3(this, 1, ""));
};


/**
 * optional bytes dev_addr = 1;
 * This is a type-conversion wrapper around `getDevAddr()`
 * @return {string}
 */
proto.ns.GetRandomDevAddrResponse.prototype.getDevAddr_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getDevAddr()));
};


/**
 * optional bytes dev_addr = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getDevAddr()`
 * @return {!Uint8Array}
 */
proto.ns.GetRandomDevAddrResponse.prototype.getDevAddr_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getDevAddr()));
};


/** @param {!(string|Uint8Array)} value  */
proto.ns.GetRandomDevAddrResponse.prototype.setDevAddr = function(value) {
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
proto.ns.CreateMACCommandQueueItemRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ns.CreateMACCommandQueueItemRequest.repeatedFields_, null);
};
goog.inherits(proto.ns.CreateMACCommandQueueItemRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.ns.CreateMACCommandQueueItemRequest.displayName = 'proto.ns.CreateMACCommandQueueItemRequest';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ns.CreateMACCommandQueueItemRequest.repeatedFields_ = [5];



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
proto.ns.CreateMACCommandQueueItemRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ns.CreateMACCommandQueueItemRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ns.CreateMACCommandQueueItemRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.ns.CreateMACCommandQueueItemRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    devEui: msg.getDevEui_asB64(),
    cid: msg.getCid(),
    commandsList: msg.getCommandsList_asB64()
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
 * @return {!proto.ns.CreateMACCommandQueueItemRequest}
 */
proto.ns.CreateMACCommandQueueItemRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ns.CreateMACCommandQueueItemRequest;
  return proto.ns.CreateMACCommandQueueItemRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ns.CreateMACCommandQueueItemRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ns.CreateMACCommandQueueItemRequest}
 */
proto.ns.CreateMACCommandQueueItemRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setDevEui(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setCid(value);
      break;
    case 5:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.getCommandsList().push(value);
      msg.setCommandsList(msg.getCommandsList());
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
 * @param {!proto.ns.CreateMACCommandQueueItemRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.ns.CreateMACCommandQueueItemRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ns.CreateMACCommandQueueItemRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.ns.CreateMACCommandQueueItemRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getDevEui_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = this.getCid();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = this.getCommandsList_asU8();
  if (f.length > 0) {
    writer.writeRepeatedBytes(
      5,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.ns.CreateMACCommandQueueItemRequest} The clone.
 */
proto.ns.CreateMACCommandQueueItemRequest.prototype.cloneMessage = function() {
  return /** @type {!proto.ns.CreateMACCommandQueueItemRequest} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional bytes dev_eui = 1;
 * @return {!(string|Uint8Array)}
 */
proto.ns.CreateMACCommandQueueItemRequest.prototype.getDevEui = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldProto3(this, 1, ""));
};


/**
 * optional bytes dev_eui = 1;
 * This is a type-conversion wrapper around `getDevEui()`
 * @return {string}
 */
proto.ns.CreateMACCommandQueueItemRequest.prototype.getDevEui_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getDevEui()));
};


/**
 * optional bytes dev_eui = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getDevEui()`
 * @return {!Uint8Array}
 */
proto.ns.CreateMACCommandQueueItemRequest.prototype.getDevEui_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getDevEui()));
};


/** @param {!(string|Uint8Array)} value  */
proto.ns.CreateMACCommandQueueItemRequest.prototype.setDevEui = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional uint32 cid = 4;
 * @return {number}
 */
proto.ns.CreateMACCommandQueueItemRequest.prototype.getCid = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 4, 0));
};


/** @param {number} value  */
proto.ns.CreateMACCommandQueueItemRequest.prototype.setCid = function(value) {
  jspb.Message.setField(this, 4, value);
};


/**
 * repeated bytes commands = 5;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!(Array<!Uint8Array>|Array<string>)}
 */
proto.ns.CreateMACCommandQueueItemRequest.prototype.getCommandsList = function() {
  return /** @type {!(Array<!Uint8Array>|Array<string>)} */ (jspb.Message.getField(this, 5));
};


/**
 * repeated bytes commands = 5;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * This is a type-conversion wrapper around `getCommandsList()`
 * @return {!Array.<string>}
 */
proto.ns.CreateMACCommandQueueItemRequest.prototype.getCommandsList_asB64 = function() {
  return /** @type {!Array.<string>} */ (jspb.Message.bytesListAsB64(
      this.getCommandsList()));
};


/**
 * repeated bytes commands = 5;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getCommandsList()`
 * @return {!Array.<!Uint8Array>}
 */
proto.ns.CreateMACCommandQueueItemRequest.prototype.getCommandsList_asU8 = function() {
  return /** @type {!Array.<!Uint8Array>} */ (jspb.Message.bytesListAsU8(
      this.getCommandsList()));
};


/** @param {!(Array<!Uint8Array>|Array<string>)} value  */
proto.ns.CreateMACCommandQueueItemRequest.prototype.setCommandsList = function(value) {
  jspb.Message.setField(this, 5, value || []);
};


proto.ns.CreateMACCommandQueueItemRequest.prototype.clearCommandsList = function() {
  jspb.Message.setField(this, 5, []);
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
proto.ns.SendProprietaryPayloadRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ns.SendProprietaryPayloadRequest.repeatedFields_, null);
};
goog.inherits(proto.ns.SendProprietaryPayloadRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.ns.SendProprietaryPayloadRequest.displayName = 'proto.ns.SendProprietaryPayloadRequest';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ns.SendProprietaryPayloadRequest.repeatedFields_ = [3];



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
proto.ns.SendProprietaryPayloadRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ns.SendProprietaryPayloadRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ns.SendProprietaryPayloadRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.ns.SendProprietaryPayloadRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    macPayload: msg.getMacPayload_asB64(),
    mic: msg.getMic_asB64(),
    gatewayMacsList: msg.getGatewayMacsList_asB64(),
    polarizationInversion: msg.getPolarizationInversion(),
    frequency: msg.getFrequency(),
    dr: msg.getDr()
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
 * @return {!proto.ns.SendProprietaryPayloadRequest}
 */
proto.ns.SendProprietaryPayloadRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ns.SendProprietaryPayloadRequest;
  return proto.ns.SendProprietaryPayloadRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ns.SendProprietaryPayloadRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ns.SendProprietaryPayloadRequest}
 */
proto.ns.SendProprietaryPayloadRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setMacPayload(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setMic(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.getGatewayMacsList().push(value);
      msg.setGatewayMacsList(msg.getGatewayMacsList());
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPolarizationInversion(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setFrequency(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setDr(value);
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
 * @param {!proto.ns.SendProprietaryPayloadRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.ns.SendProprietaryPayloadRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ns.SendProprietaryPayloadRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.ns.SendProprietaryPayloadRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getMacPayload_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = this.getMic_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = this.getGatewayMacsList_asU8();
  if (f.length > 0) {
    writer.writeRepeatedBytes(
      3,
      f
    );
  }
  f = this.getPolarizationInversion();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = this.getFrequency();
  if (f !== 0) {
    writer.writeUint32(
      5,
      f
    );
  }
  f = this.getDr();
  if (f !== 0) {
    writer.writeUint32(
      6,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.ns.SendProprietaryPayloadRequest} The clone.
 */
proto.ns.SendProprietaryPayloadRequest.prototype.cloneMessage = function() {
  return /** @type {!proto.ns.SendProprietaryPayloadRequest} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional bytes mac_payload = 1;
 * @return {!(string|Uint8Array)}
 */
proto.ns.SendProprietaryPayloadRequest.prototype.getMacPayload = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldProto3(this, 1, ""));
};


/**
 * optional bytes mac_payload = 1;
 * This is a type-conversion wrapper around `getMacPayload()`
 * @return {string}
 */
proto.ns.SendProprietaryPayloadRequest.prototype.getMacPayload_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getMacPayload()));
};


/**
 * optional bytes mac_payload = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getMacPayload()`
 * @return {!Uint8Array}
 */
proto.ns.SendProprietaryPayloadRequest.prototype.getMacPayload_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getMacPayload()));
};


/** @param {!(string|Uint8Array)} value  */
proto.ns.SendProprietaryPayloadRequest.prototype.setMacPayload = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional bytes mic = 2;
 * @return {!(string|Uint8Array)}
 */
proto.ns.SendProprietaryPayloadRequest.prototype.getMic = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldProto3(this, 2, ""));
};


/**
 * optional bytes mic = 2;
 * This is a type-conversion wrapper around `getMic()`
 * @return {string}
 */
proto.ns.SendProprietaryPayloadRequest.prototype.getMic_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getMic()));
};


/**
 * optional bytes mic = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getMic()`
 * @return {!Uint8Array}
 */
proto.ns.SendProprietaryPayloadRequest.prototype.getMic_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getMic()));
};


/** @param {!(string|Uint8Array)} value  */
proto.ns.SendProprietaryPayloadRequest.prototype.setMic = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * repeated bytes gateway_macs = 3;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!(Array<!Uint8Array>|Array<string>)}
 */
proto.ns.SendProprietaryPayloadRequest.prototype.getGatewayMacsList = function() {
  return /** @type {!(Array<!Uint8Array>|Array<string>)} */ (jspb.Message.getField(this, 3));
};


/**
 * repeated bytes gateway_macs = 3;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * This is a type-conversion wrapper around `getGatewayMacsList()`
 * @return {!Array.<string>}
 */
proto.ns.SendProprietaryPayloadRequest.prototype.getGatewayMacsList_asB64 = function() {
  return /** @type {!Array.<string>} */ (jspb.Message.bytesListAsB64(
      this.getGatewayMacsList()));
};


/**
 * repeated bytes gateway_macs = 3;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getGatewayMacsList()`
 * @return {!Array.<!Uint8Array>}
 */
proto.ns.SendProprietaryPayloadRequest.prototype.getGatewayMacsList_asU8 = function() {
  return /** @type {!Array.<!Uint8Array>} */ (jspb.Message.bytesListAsU8(
      this.getGatewayMacsList()));
};


/** @param {!(Array<!Uint8Array>|Array<string>)} value  */
proto.ns.SendProprietaryPayloadRequest.prototype.setGatewayMacsList = function(value) {
  jspb.Message.setField(this, 3, value || []);
};


proto.ns.SendProprietaryPayloadRequest.prototype.clearGatewayMacsList = function() {
  jspb.Message.setField(this, 3, []);
};


/**
 * optional bool polarization_inversion = 4;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.ns.SendProprietaryPayloadRequest.prototype.getPolarizationInversion = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldProto3(this, 4, false));
};


/** @param {boolean} value  */
proto.ns.SendProprietaryPayloadRequest.prototype.setPolarizationInversion = function(value) {
  jspb.Message.setField(this, 4, value);
};


/**
 * optional uint32 frequency = 5;
 * @return {number}
 */
proto.ns.SendProprietaryPayloadRequest.prototype.getFrequency = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 5, 0));
};


/** @param {number} value  */
proto.ns.SendProprietaryPayloadRequest.prototype.setFrequency = function(value) {
  jspb.Message.setField(this, 5, value);
};


/**
 * optional uint32 dr = 6;
 * @return {number}
 */
proto.ns.SendProprietaryPayloadRequest.prototype.getDr = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 6, 0));
};


/** @param {number} value  */
proto.ns.SendProprietaryPayloadRequest.prototype.setDr = function(value) {
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
proto.ns.Gateway = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ns.Gateway.repeatedFields_, null);
};
goog.inherits(proto.ns.Gateway, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.ns.Gateway.displayName = 'proto.ns.Gateway';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ns.Gateway.repeatedFields_ = [4];



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
proto.ns.Gateway.prototype.toObject = function(opt_includeInstance) {
  return proto.ns.Gateway.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ns.Gateway} msg The msg instance to transform.
 * @return {!Object}
 */
proto.ns.Gateway.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: msg.getId_asB64(),
    location: (f = msg.getLocation()) && common_common_pb.Location.toObject(includeInstance, f),
    gatewayProfileId: msg.getGatewayProfileId_asB64(),
    boardsList: jspb.Message.toObjectList(msg.getBoardsList(),
    proto.ns.GatewayBoard.toObject, includeInstance),
    routingProfileId: msg.getRoutingProfileId_asB64()
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
 * @return {!proto.ns.Gateway}
 */
proto.ns.Gateway.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ns.Gateway;
  return proto.ns.Gateway.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ns.Gateway} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ns.Gateway}
 */
proto.ns.Gateway.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setId(value);
      break;
    case 2:
      var value = new common_common_pb.Location;
      reader.readMessage(value,common_common_pb.Location.deserializeBinaryFromReader);
      msg.setLocation(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setGatewayProfileId(value);
      break;
    case 4:
      var value = new proto.ns.GatewayBoard;
      reader.readMessage(value,proto.ns.GatewayBoard.deserializeBinaryFromReader);
      msg.getBoardsList().push(value);
      msg.setBoardsList(msg.getBoardsList());
      break;
    case 5:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setRoutingProfileId(value);
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
 * @param {!proto.ns.Gateway} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.ns.Gateway.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ns.Gateway.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.ns.Gateway.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getId_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = this.getLocation();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      common_common_pb.Location.serializeBinaryToWriter
    );
  }
  f = this.getGatewayProfileId_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      3,
      f
    );
  }
  f = this.getBoardsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.ns.GatewayBoard.serializeBinaryToWriter
    );
  }
  f = this.getRoutingProfileId_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      5,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.ns.Gateway} The clone.
 */
proto.ns.Gateway.prototype.cloneMessage = function() {
  return /** @type {!proto.ns.Gateway} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional bytes id = 1;
 * @return {!(string|Uint8Array)}
 */
proto.ns.Gateway.prototype.getId = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldProto3(this, 1, ""));
};


/**
 * optional bytes id = 1;
 * This is a type-conversion wrapper around `getId()`
 * @return {string}
 */
proto.ns.Gateway.prototype.getId_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getId()));
};


/**
 * optional bytes id = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getId()`
 * @return {!Uint8Array}
 */
proto.ns.Gateway.prototype.getId_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getId()));
};


/** @param {!(string|Uint8Array)} value  */
proto.ns.Gateway.prototype.setId = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional common.Location location = 2;
 * @return {proto.common.Location}
 */
proto.ns.Gateway.prototype.getLocation = function() {
  return /** @type{proto.common.Location} */ (
    jspb.Message.getWrapperField(this, common_common_pb.Location, 2));
};


/** @param {proto.common.Location|undefined} value  */
proto.ns.Gateway.prototype.setLocation = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.ns.Gateway.prototype.clearLocation = function() {
  this.setLocation(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.ns.Gateway.prototype.hasLocation = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bytes gateway_profile_id = 3;
 * @return {!(string|Uint8Array)}
 */
proto.ns.Gateway.prototype.getGatewayProfileId = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldProto3(this, 3, ""));
};


/**
 * optional bytes gateway_profile_id = 3;
 * This is a type-conversion wrapper around `getGatewayProfileId()`
 * @return {string}
 */
proto.ns.Gateway.prototype.getGatewayProfileId_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getGatewayProfileId()));
};


/**
 * optional bytes gateway_profile_id = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getGatewayProfileId()`
 * @return {!Uint8Array}
 */
proto.ns.Gateway.prototype.getGatewayProfileId_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getGatewayProfileId()));
};


/** @param {!(string|Uint8Array)} value  */
proto.ns.Gateway.prototype.setGatewayProfileId = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * repeated GatewayBoard boards = 4;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.ns.GatewayBoard>}
 */
proto.ns.Gateway.prototype.getBoardsList = function() {
  return /** @type{!Array.<!proto.ns.GatewayBoard>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ns.GatewayBoard, 4));
};


/** @param {Array.<!proto.ns.GatewayBoard>} value  */
proto.ns.Gateway.prototype.setBoardsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 4, value);
};


proto.ns.Gateway.prototype.clearBoardsList = function() {
  this.setBoardsList([]);
};


/**
 * optional bytes routing_profile_id = 5;
 * @return {!(string|Uint8Array)}
 */
proto.ns.Gateway.prototype.getRoutingProfileId = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldProto3(this, 5, ""));
};


/**
 * optional bytes routing_profile_id = 5;
 * This is a type-conversion wrapper around `getRoutingProfileId()`
 * @return {string}
 */
proto.ns.Gateway.prototype.getRoutingProfileId_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getRoutingProfileId()));
};


/**
 * optional bytes routing_profile_id = 5;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getRoutingProfileId()`
 * @return {!Uint8Array}
 */
proto.ns.Gateway.prototype.getRoutingProfileId_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getRoutingProfileId()));
};


/** @param {!(string|Uint8Array)} value  */
proto.ns.Gateway.prototype.setRoutingProfileId = function(value) {
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
proto.ns.GatewayBoard = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ns.GatewayBoard, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.ns.GatewayBoard.displayName = 'proto.ns.GatewayBoard';
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
proto.ns.GatewayBoard.prototype.toObject = function(opt_includeInstance) {
  return proto.ns.GatewayBoard.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ns.GatewayBoard} msg The msg instance to transform.
 * @return {!Object}
 */
proto.ns.GatewayBoard.toObject = function(includeInstance, msg) {
  var f, obj = {
    fpgaId: msg.getFpgaId_asB64(),
    fineTimestampKey: msg.getFineTimestampKey_asB64()
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
 * @return {!proto.ns.GatewayBoard}
 */
proto.ns.GatewayBoard.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ns.GatewayBoard;
  return proto.ns.GatewayBoard.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ns.GatewayBoard} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ns.GatewayBoard}
 */
proto.ns.GatewayBoard.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setFpgaId(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setFineTimestampKey(value);
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
 * @param {!proto.ns.GatewayBoard} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.ns.GatewayBoard.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ns.GatewayBoard.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.ns.GatewayBoard.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getFpgaId_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = this.getFineTimestampKey_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.ns.GatewayBoard} The clone.
 */
proto.ns.GatewayBoard.prototype.cloneMessage = function() {
  return /** @type {!proto.ns.GatewayBoard} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional bytes fpga_id = 1;
 * @return {!(string|Uint8Array)}
 */
proto.ns.GatewayBoard.prototype.getFpgaId = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldProto3(this, 1, ""));
};


/**
 * optional bytes fpga_id = 1;
 * This is a type-conversion wrapper around `getFpgaId()`
 * @return {string}
 */
proto.ns.GatewayBoard.prototype.getFpgaId_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getFpgaId()));
};


/**
 * optional bytes fpga_id = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getFpgaId()`
 * @return {!Uint8Array}
 */
proto.ns.GatewayBoard.prototype.getFpgaId_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getFpgaId()));
};


/** @param {!(string|Uint8Array)} value  */
proto.ns.GatewayBoard.prototype.setFpgaId = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional bytes fine_timestamp_key = 2;
 * @return {!(string|Uint8Array)}
 */
proto.ns.GatewayBoard.prototype.getFineTimestampKey = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldProto3(this, 2, ""));
};


/**
 * optional bytes fine_timestamp_key = 2;
 * This is a type-conversion wrapper around `getFineTimestampKey()`
 * @return {string}
 */
proto.ns.GatewayBoard.prototype.getFineTimestampKey_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getFineTimestampKey()));
};


/**
 * optional bytes fine_timestamp_key = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getFineTimestampKey()`
 * @return {!Uint8Array}
 */
proto.ns.GatewayBoard.prototype.getFineTimestampKey_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getFineTimestampKey()));
};


/** @param {!(string|Uint8Array)} value  */
proto.ns.GatewayBoard.prototype.setFineTimestampKey = function(value) {
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
proto.ns.CreateGatewayRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ns.CreateGatewayRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.ns.CreateGatewayRequest.displayName = 'proto.ns.CreateGatewayRequest';
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
proto.ns.CreateGatewayRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ns.CreateGatewayRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ns.CreateGatewayRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.ns.CreateGatewayRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    gateway: (f = msg.getGateway()) && proto.ns.Gateway.toObject(includeInstance, f)
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
 * @return {!proto.ns.CreateGatewayRequest}
 */
proto.ns.CreateGatewayRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ns.CreateGatewayRequest;
  return proto.ns.CreateGatewayRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ns.CreateGatewayRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ns.CreateGatewayRequest}
 */
proto.ns.CreateGatewayRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ns.Gateway;
      reader.readMessage(value,proto.ns.Gateway.deserializeBinaryFromReader);
      msg.setGateway(value);
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
 * @param {!proto.ns.CreateGatewayRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.ns.CreateGatewayRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ns.CreateGatewayRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.ns.CreateGatewayRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getGateway();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.ns.Gateway.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.ns.CreateGatewayRequest} The clone.
 */
proto.ns.CreateGatewayRequest.prototype.cloneMessage = function() {
  return /** @type {!proto.ns.CreateGatewayRequest} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional Gateway gateway = 1;
 * @return {proto.ns.Gateway}
 */
proto.ns.CreateGatewayRequest.prototype.getGateway = function() {
  return /** @type{proto.ns.Gateway} */ (
    jspb.Message.getWrapperField(this, proto.ns.Gateway, 1));
};


/** @param {proto.ns.Gateway|undefined} value  */
proto.ns.CreateGatewayRequest.prototype.setGateway = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.ns.CreateGatewayRequest.prototype.clearGateway = function() {
  this.setGateway(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.ns.CreateGatewayRequest.prototype.hasGateway = function() {
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
proto.ns.GetGatewayRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ns.GetGatewayRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.ns.GetGatewayRequest.displayName = 'proto.ns.GetGatewayRequest';
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
proto.ns.GetGatewayRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ns.GetGatewayRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ns.GetGatewayRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.ns.GetGatewayRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: msg.getId_asB64()
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
 * @return {!proto.ns.GetGatewayRequest}
 */
proto.ns.GetGatewayRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ns.GetGatewayRequest;
  return proto.ns.GetGatewayRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ns.GetGatewayRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ns.GetGatewayRequest}
 */
proto.ns.GetGatewayRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
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
 * @param {!proto.ns.GetGatewayRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.ns.GetGatewayRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ns.GetGatewayRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.ns.GetGatewayRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getId_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.ns.GetGatewayRequest} The clone.
 */
proto.ns.GetGatewayRequest.prototype.cloneMessage = function() {
  return /** @type {!proto.ns.GetGatewayRequest} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional bytes id = 1;
 * @return {!(string|Uint8Array)}
 */
proto.ns.GetGatewayRequest.prototype.getId = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldProto3(this, 1, ""));
};


/**
 * optional bytes id = 1;
 * This is a type-conversion wrapper around `getId()`
 * @return {string}
 */
proto.ns.GetGatewayRequest.prototype.getId_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getId()));
};


/**
 * optional bytes id = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getId()`
 * @return {!Uint8Array}
 */
proto.ns.GetGatewayRequest.prototype.getId_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getId()));
};


/** @param {!(string|Uint8Array)} value  */
proto.ns.GetGatewayRequest.prototype.setId = function(value) {
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
proto.ns.GetGatewayResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ns.GetGatewayResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.ns.GetGatewayResponse.displayName = 'proto.ns.GetGatewayResponse';
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
proto.ns.GetGatewayResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.ns.GetGatewayResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ns.GetGatewayResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.ns.GetGatewayResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    gateway: (f = msg.getGateway()) && proto.ns.Gateway.toObject(includeInstance, f),
    createdAt: (f = msg.getCreatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    updatedAt: (f = msg.getUpdatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    firstSeenAt: (f = msg.getFirstSeenAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    lastSeenAt: (f = msg.getLastSeenAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
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
 * @return {!proto.ns.GetGatewayResponse}
 */
proto.ns.GetGatewayResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ns.GetGatewayResponse;
  return proto.ns.GetGatewayResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ns.GetGatewayResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ns.GetGatewayResponse}
 */
proto.ns.GetGatewayResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ns.Gateway;
      reader.readMessage(value,proto.ns.Gateway.deserializeBinaryFromReader);
      msg.setGateway(value);
      break;
    case 2:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreatedAt(value);
      break;
    case 3:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setUpdatedAt(value);
      break;
    case 4:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setFirstSeenAt(value);
      break;
    case 5:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setLastSeenAt(value);
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
 * @param {!proto.ns.GetGatewayResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.ns.GetGatewayResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ns.GetGatewayResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.ns.GetGatewayResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getGateway();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.ns.Gateway.serializeBinaryToWriter
    );
  }
  f = this.getCreatedAt();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = this.getUpdatedAt();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = this.getFirstSeenAt();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = this.getLastSeenAt();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.ns.GetGatewayResponse} The clone.
 */
proto.ns.GetGatewayResponse.prototype.cloneMessage = function() {
  return /** @type {!proto.ns.GetGatewayResponse} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional Gateway gateway = 1;
 * @return {proto.ns.Gateway}
 */
proto.ns.GetGatewayResponse.prototype.getGateway = function() {
  return /** @type{proto.ns.Gateway} */ (
    jspb.Message.getWrapperField(this, proto.ns.Gateway, 1));
};


/** @param {proto.ns.Gateway|undefined} value  */
proto.ns.GetGatewayResponse.prototype.setGateway = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.ns.GetGatewayResponse.prototype.clearGateway = function() {
  this.setGateway(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.ns.GetGatewayResponse.prototype.hasGateway = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.Timestamp created_at = 2;
 * @return {proto.google.protobuf.Timestamp}
 */
proto.ns.GetGatewayResponse.prototype.getCreatedAt = function() {
  return /** @type{proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/** @param {proto.google.protobuf.Timestamp|undefined} value  */
proto.ns.GetGatewayResponse.prototype.setCreatedAt = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.ns.GetGatewayResponse.prototype.clearCreatedAt = function() {
  this.setCreatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.ns.GetGatewayResponse.prototype.hasCreatedAt = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.Timestamp updated_at = 3;
 * @return {proto.google.protobuf.Timestamp}
 */
proto.ns.GetGatewayResponse.prototype.getUpdatedAt = function() {
  return /** @type{proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/** @param {proto.google.protobuf.Timestamp|undefined} value  */
proto.ns.GetGatewayResponse.prototype.setUpdatedAt = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.ns.GetGatewayResponse.prototype.clearUpdatedAt = function() {
  this.setUpdatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.ns.GetGatewayResponse.prototype.hasUpdatedAt = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.Timestamp first_seen_at = 4;
 * @return {proto.google.protobuf.Timestamp}
 */
proto.ns.GetGatewayResponse.prototype.getFirstSeenAt = function() {
  return /** @type{proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 4));
};


/** @param {proto.google.protobuf.Timestamp|undefined} value  */
proto.ns.GetGatewayResponse.prototype.setFirstSeenAt = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.ns.GetGatewayResponse.prototype.clearFirstSeenAt = function() {
  this.setFirstSeenAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.ns.GetGatewayResponse.prototype.hasFirstSeenAt = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional google.protobuf.Timestamp last_seen_at = 5;
 * @return {proto.google.protobuf.Timestamp}
 */
proto.ns.GetGatewayResponse.prototype.getLastSeenAt = function() {
  return /** @type{proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 5));
};


/** @param {proto.google.protobuf.Timestamp|undefined} value  */
proto.ns.GetGatewayResponse.prototype.setLastSeenAt = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


proto.ns.GetGatewayResponse.prototype.clearLastSeenAt = function() {
  this.setLastSeenAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.ns.GetGatewayResponse.prototype.hasLastSeenAt = function() {
  return jspb.Message.getField(this, 5) != null;
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
proto.ns.UpdateGatewayRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ns.UpdateGatewayRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.ns.UpdateGatewayRequest.displayName = 'proto.ns.UpdateGatewayRequest';
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
proto.ns.UpdateGatewayRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ns.UpdateGatewayRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ns.UpdateGatewayRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.ns.UpdateGatewayRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    gateway: (f = msg.getGateway()) && proto.ns.Gateway.toObject(includeInstance, f)
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
 * @return {!proto.ns.UpdateGatewayRequest}
 */
proto.ns.UpdateGatewayRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ns.UpdateGatewayRequest;
  return proto.ns.UpdateGatewayRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ns.UpdateGatewayRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ns.UpdateGatewayRequest}
 */
proto.ns.UpdateGatewayRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ns.Gateway;
      reader.readMessage(value,proto.ns.Gateway.deserializeBinaryFromReader);
      msg.setGateway(value);
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
 * @param {!proto.ns.UpdateGatewayRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.ns.UpdateGatewayRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ns.UpdateGatewayRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.ns.UpdateGatewayRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getGateway();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.ns.Gateway.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.ns.UpdateGatewayRequest} The clone.
 */
proto.ns.UpdateGatewayRequest.prototype.cloneMessage = function() {
  return /** @type {!proto.ns.UpdateGatewayRequest} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional Gateway gateway = 1;
 * @return {proto.ns.Gateway}
 */
proto.ns.UpdateGatewayRequest.prototype.getGateway = function() {
  return /** @type{proto.ns.Gateway} */ (
    jspb.Message.getWrapperField(this, proto.ns.Gateway, 1));
};


/** @param {proto.ns.Gateway|undefined} value  */
proto.ns.UpdateGatewayRequest.prototype.setGateway = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.ns.UpdateGatewayRequest.prototype.clearGateway = function() {
  this.setGateway(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.ns.UpdateGatewayRequest.prototype.hasGateway = function() {
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
proto.ns.DeleteGatewayRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ns.DeleteGatewayRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.ns.DeleteGatewayRequest.displayName = 'proto.ns.DeleteGatewayRequest';
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
proto.ns.DeleteGatewayRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ns.DeleteGatewayRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ns.DeleteGatewayRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.ns.DeleteGatewayRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: msg.getId_asB64()
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
 * @return {!proto.ns.DeleteGatewayRequest}
 */
proto.ns.DeleteGatewayRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ns.DeleteGatewayRequest;
  return proto.ns.DeleteGatewayRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ns.DeleteGatewayRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ns.DeleteGatewayRequest}
 */
proto.ns.DeleteGatewayRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
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
 * @param {!proto.ns.DeleteGatewayRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.ns.DeleteGatewayRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ns.DeleteGatewayRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.ns.DeleteGatewayRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getId_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.ns.DeleteGatewayRequest} The clone.
 */
proto.ns.DeleteGatewayRequest.prototype.cloneMessage = function() {
  return /** @type {!proto.ns.DeleteGatewayRequest} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional bytes id = 1;
 * @return {!(string|Uint8Array)}
 */
proto.ns.DeleteGatewayRequest.prototype.getId = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldProto3(this, 1, ""));
};


/**
 * optional bytes id = 1;
 * This is a type-conversion wrapper around `getId()`
 * @return {string}
 */
proto.ns.DeleteGatewayRequest.prototype.getId_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getId()));
};


/**
 * optional bytes id = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getId()`
 * @return {!Uint8Array}
 */
proto.ns.DeleteGatewayRequest.prototype.getId_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getId()));
};


/** @param {!(string|Uint8Array)} value  */
proto.ns.DeleteGatewayRequest.prototype.setId = function(value) {
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
proto.ns.GatewayStats = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ns.GatewayStats, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.ns.GatewayStats.displayName = 'proto.ns.GatewayStats';
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
proto.ns.GatewayStats.prototype.toObject = function(opt_includeInstance) {
  return proto.ns.GatewayStats.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ns.GatewayStats} msg The msg instance to transform.
 * @return {!Object}
 */
proto.ns.GatewayStats.toObject = function(includeInstance, msg) {
  var f, obj = {
    timestamp: (f = msg.getTimestamp()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    rxPacketsReceived: msg.getRxPacketsReceived(),
    rxPacketsReceivedOk: msg.getRxPacketsReceivedOk(),
    txPacketsReceived: msg.getTxPacketsReceived(),
    txPacketsEmitted: msg.getTxPacketsEmitted()
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
 * @return {!proto.ns.GatewayStats}
 */
proto.ns.GatewayStats.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ns.GatewayStats;
  return proto.ns.GatewayStats.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ns.GatewayStats} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ns.GatewayStats}
 */
proto.ns.GatewayStats.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setTimestamp(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRxPacketsReceived(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRxPacketsReceivedOk(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTxPacketsReceived(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTxPacketsEmitted(value);
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
 * @param {!proto.ns.GatewayStats} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.ns.GatewayStats.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ns.GatewayStats.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.ns.GatewayStats.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getTimestamp();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = this.getRxPacketsReceived();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = this.getRxPacketsReceivedOk();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = this.getTxPacketsReceived();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = this.getTxPacketsEmitted();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.ns.GatewayStats} The clone.
 */
proto.ns.GatewayStats.prototype.cloneMessage = function() {
  return /** @type {!proto.ns.GatewayStats} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional google.protobuf.Timestamp timestamp = 1;
 * @return {proto.google.protobuf.Timestamp}
 */
proto.ns.GatewayStats.prototype.getTimestamp = function() {
  return /** @type{proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 1));
};


/** @param {proto.google.protobuf.Timestamp|undefined} value  */
proto.ns.GatewayStats.prototype.setTimestamp = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.ns.GatewayStats.prototype.clearTimestamp = function() {
  this.setTimestamp(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.ns.GatewayStats.prototype.hasTimestamp = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int32 rx_packets_received = 2;
 * @return {number}
 */
proto.ns.GatewayStats.prototype.getRxPacketsReceived = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 2, 0));
};


/** @param {number} value  */
proto.ns.GatewayStats.prototype.setRxPacketsReceived = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional int32 rx_packets_received_ok = 3;
 * @return {number}
 */
proto.ns.GatewayStats.prototype.getRxPacketsReceivedOk = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 3, 0));
};


/** @param {number} value  */
proto.ns.GatewayStats.prototype.setRxPacketsReceivedOk = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional int32 tx_packets_received = 4;
 * @return {number}
 */
proto.ns.GatewayStats.prototype.getTxPacketsReceived = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 4, 0));
};


/** @param {number} value  */
proto.ns.GatewayStats.prototype.setTxPacketsReceived = function(value) {
  jspb.Message.setField(this, 4, value);
};


/**
 * optional int32 tx_packets_emitted = 5;
 * @return {number}
 */
proto.ns.GatewayStats.prototype.getTxPacketsEmitted = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 5, 0));
};


/** @param {number} value  */
proto.ns.GatewayStats.prototype.setTxPacketsEmitted = function(value) {
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
proto.ns.GetGatewayStatsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ns.GetGatewayStatsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.ns.GetGatewayStatsRequest.displayName = 'proto.ns.GetGatewayStatsRequest';
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
proto.ns.GetGatewayStatsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ns.GetGatewayStatsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ns.GetGatewayStatsRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.ns.GetGatewayStatsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    gatewayId: msg.getGatewayId_asB64(),
    interval: msg.getInterval(),
    startTimestamp: (f = msg.getStartTimestamp()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    endTimestamp: (f = msg.getEndTimestamp()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
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
 * @return {!proto.ns.GetGatewayStatsRequest}
 */
proto.ns.GetGatewayStatsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ns.GetGatewayStatsRequest;
  return proto.ns.GetGatewayStatsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ns.GetGatewayStatsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ns.GetGatewayStatsRequest}
 */
proto.ns.GetGatewayStatsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setGatewayId(value);
      break;
    case 2:
      var value = /** @type {!proto.ns.AggregationInterval} */ (reader.readEnum());
      msg.setInterval(value);
      break;
    case 3:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setStartTimestamp(value);
      break;
    case 4:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setEndTimestamp(value);
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
 * @param {!proto.ns.GetGatewayStatsRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.ns.GetGatewayStatsRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ns.GetGatewayStatsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.ns.GetGatewayStatsRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getGatewayId_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = this.getInterval();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = this.getStartTimestamp();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = this.getEndTimestamp();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.ns.GetGatewayStatsRequest} The clone.
 */
proto.ns.GetGatewayStatsRequest.prototype.cloneMessage = function() {
  return /** @type {!proto.ns.GetGatewayStatsRequest} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional bytes gateway_id = 1;
 * @return {!(string|Uint8Array)}
 */
proto.ns.GetGatewayStatsRequest.prototype.getGatewayId = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldProto3(this, 1, ""));
};


/**
 * optional bytes gateway_id = 1;
 * This is a type-conversion wrapper around `getGatewayId()`
 * @return {string}
 */
proto.ns.GetGatewayStatsRequest.prototype.getGatewayId_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getGatewayId()));
};


/**
 * optional bytes gateway_id = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getGatewayId()`
 * @return {!Uint8Array}
 */
proto.ns.GetGatewayStatsRequest.prototype.getGatewayId_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getGatewayId()));
};


/** @param {!(string|Uint8Array)} value  */
proto.ns.GetGatewayStatsRequest.prototype.setGatewayId = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional AggregationInterval interval = 2;
 * @return {!proto.ns.AggregationInterval}
 */
proto.ns.GetGatewayStatsRequest.prototype.getInterval = function() {
  return /** @type {!proto.ns.AggregationInterval} */ (jspb.Message.getFieldProto3(this, 2, 0));
};


/** @param {!proto.ns.AggregationInterval} value  */
proto.ns.GetGatewayStatsRequest.prototype.setInterval = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional google.protobuf.Timestamp start_timestamp = 3;
 * @return {proto.google.protobuf.Timestamp}
 */
proto.ns.GetGatewayStatsRequest.prototype.getStartTimestamp = function() {
  return /** @type{proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/** @param {proto.google.protobuf.Timestamp|undefined} value  */
proto.ns.GetGatewayStatsRequest.prototype.setStartTimestamp = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.ns.GetGatewayStatsRequest.prototype.clearStartTimestamp = function() {
  this.setStartTimestamp(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.ns.GetGatewayStatsRequest.prototype.hasStartTimestamp = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.Timestamp end_timestamp = 4;
 * @return {proto.google.protobuf.Timestamp}
 */
proto.ns.GetGatewayStatsRequest.prototype.getEndTimestamp = function() {
  return /** @type{proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 4));
};


/** @param {proto.google.protobuf.Timestamp|undefined} value  */
proto.ns.GetGatewayStatsRequest.prototype.setEndTimestamp = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.ns.GetGatewayStatsRequest.prototype.clearEndTimestamp = function() {
  this.setEndTimestamp(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.ns.GetGatewayStatsRequest.prototype.hasEndTimestamp = function() {
  return jspb.Message.getField(this, 4) != null;
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
proto.ns.GetGatewayStatsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ns.GetGatewayStatsResponse.repeatedFields_, null);
};
goog.inherits(proto.ns.GetGatewayStatsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.ns.GetGatewayStatsResponse.displayName = 'proto.ns.GetGatewayStatsResponse';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ns.GetGatewayStatsResponse.repeatedFields_ = [1];



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
proto.ns.GetGatewayStatsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.ns.GetGatewayStatsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ns.GetGatewayStatsResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.ns.GetGatewayStatsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    resultList: jspb.Message.toObjectList(msg.getResultList(),
    proto.ns.GatewayStats.toObject, includeInstance)
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
 * @return {!proto.ns.GetGatewayStatsResponse}
 */
proto.ns.GetGatewayStatsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ns.GetGatewayStatsResponse;
  return proto.ns.GetGatewayStatsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ns.GetGatewayStatsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ns.GetGatewayStatsResponse}
 */
proto.ns.GetGatewayStatsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ns.GatewayStats;
      reader.readMessage(value,proto.ns.GatewayStats.deserializeBinaryFromReader);
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
 * @param {!proto.ns.GetGatewayStatsResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.ns.GetGatewayStatsResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ns.GetGatewayStatsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.ns.GetGatewayStatsResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getResultList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.ns.GatewayStats.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.ns.GetGatewayStatsResponse} The clone.
 */
proto.ns.GetGatewayStatsResponse.prototype.cloneMessage = function() {
  return /** @type {!proto.ns.GetGatewayStatsResponse} */ (jspb.Message.cloneMessage(this));
};


/**
 * repeated GatewayStats result = 1;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.ns.GatewayStats>}
 */
proto.ns.GetGatewayStatsResponse.prototype.getResultList = function() {
  return /** @type{!Array.<!proto.ns.GatewayStats>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ns.GatewayStats, 1));
};


/** @param {Array.<!proto.ns.GatewayStats>} value  */
proto.ns.GetGatewayStatsResponse.prototype.setResultList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


proto.ns.GetGatewayStatsResponse.prototype.clearResultList = function() {
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
proto.ns.DeviceQueueItem = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ns.DeviceQueueItem, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.ns.DeviceQueueItem.displayName = 'proto.ns.DeviceQueueItem';
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
proto.ns.DeviceQueueItem.prototype.toObject = function(opt_includeInstance) {
  return proto.ns.DeviceQueueItem.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ns.DeviceQueueItem} msg The msg instance to transform.
 * @return {!Object}
 */
proto.ns.DeviceQueueItem.toObject = function(includeInstance, msg) {
  var f, obj = {
    devEui: msg.getDevEui_asB64(),
    frmPayload: msg.getFrmPayload_asB64(),
    fCnt: msg.getFCnt(),
    fPort: msg.getFPort(),
    confirmed: msg.getConfirmed(),
    devAddr: msg.getDevAddr_asB64()
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
 * @return {!proto.ns.DeviceQueueItem}
 */
proto.ns.DeviceQueueItem.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ns.DeviceQueueItem;
  return proto.ns.DeviceQueueItem.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ns.DeviceQueueItem} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ns.DeviceQueueItem}
 */
proto.ns.DeviceQueueItem.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setDevEui(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setFrmPayload(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setFCnt(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setFPort(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setConfirmed(value);
      break;
    case 6:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setDevAddr(value);
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
 * @param {!proto.ns.DeviceQueueItem} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.ns.DeviceQueueItem.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ns.DeviceQueueItem.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.ns.DeviceQueueItem.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getDevEui_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = this.getFrmPayload_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = this.getFCnt();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = this.getFPort();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = this.getConfirmed();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
  f = this.getDevAddr_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      6,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.ns.DeviceQueueItem} The clone.
 */
proto.ns.DeviceQueueItem.prototype.cloneMessage = function() {
  return /** @type {!proto.ns.DeviceQueueItem} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional bytes dev_eui = 1;
 * @return {!(string|Uint8Array)}
 */
proto.ns.DeviceQueueItem.prototype.getDevEui = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldProto3(this, 1, ""));
};


/**
 * optional bytes dev_eui = 1;
 * This is a type-conversion wrapper around `getDevEui()`
 * @return {string}
 */
proto.ns.DeviceQueueItem.prototype.getDevEui_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getDevEui()));
};


/**
 * optional bytes dev_eui = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getDevEui()`
 * @return {!Uint8Array}
 */
proto.ns.DeviceQueueItem.prototype.getDevEui_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getDevEui()));
};


/** @param {!(string|Uint8Array)} value  */
proto.ns.DeviceQueueItem.prototype.setDevEui = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional bytes frm_payload = 2;
 * @return {!(string|Uint8Array)}
 */
proto.ns.DeviceQueueItem.prototype.getFrmPayload = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldProto3(this, 2, ""));
};


/**
 * optional bytes frm_payload = 2;
 * This is a type-conversion wrapper around `getFrmPayload()`
 * @return {string}
 */
proto.ns.DeviceQueueItem.prototype.getFrmPayload_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getFrmPayload()));
};


/**
 * optional bytes frm_payload = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getFrmPayload()`
 * @return {!Uint8Array}
 */
proto.ns.DeviceQueueItem.prototype.getFrmPayload_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getFrmPayload()));
};


/** @param {!(string|Uint8Array)} value  */
proto.ns.DeviceQueueItem.prototype.setFrmPayload = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional uint32 f_cnt = 3;
 * @return {number}
 */
proto.ns.DeviceQueueItem.prototype.getFCnt = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 3, 0));
};


/** @param {number} value  */
proto.ns.DeviceQueueItem.prototype.setFCnt = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional uint32 f_port = 4;
 * @return {number}
 */
proto.ns.DeviceQueueItem.prototype.getFPort = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 4, 0));
};


/** @param {number} value  */
proto.ns.DeviceQueueItem.prototype.setFPort = function(value) {
  jspb.Message.setField(this, 4, value);
};


/**
 * optional bool confirmed = 5;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.ns.DeviceQueueItem.prototype.getConfirmed = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldProto3(this, 5, false));
};


/** @param {boolean} value  */
proto.ns.DeviceQueueItem.prototype.setConfirmed = function(value) {
  jspb.Message.setField(this, 5, value);
};


/**
 * optional bytes dev_addr = 6;
 * @return {!(string|Uint8Array)}
 */
proto.ns.DeviceQueueItem.prototype.getDevAddr = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldProto3(this, 6, ""));
};


/**
 * optional bytes dev_addr = 6;
 * This is a type-conversion wrapper around `getDevAddr()`
 * @return {string}
 */
proto.ns.DeviceQueueItem.prototype.getDevAddr_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getDevAddr()));
};


/**
 * optional bytes dev_addr = 6;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getDevAddr()`
 * @return {!Uint8Array}
 */
proto.ns.DeviceQueueItem.prototype.getDevAddr_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getDevAddr()));
};


/** @param {!(string|Uint8Array)} value  */
proto.ns.DeviceQueueItem.prototype.setDevAddr = function(value) {
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
proto.ns.CreateDeviceQueueItemRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ns.CreateDeviceQueueItemRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.ns.CreateDeviceQueueItemRequest.displayName = 'proto.ns.CreateDeviceQueueItemRequest';
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
proto.ns.CreateDeviceQueueItemRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ns.CreateDeviceQueueItemRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ns.CreateDeviceQueueItemRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.ns.CreateDeviceQueueItemRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    item: (f = msg.getItem()) && proto.ns.DeviceQueueItem.toObject(includeInstance, f)
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
 * @return {!proto.ns.CreateDeviceQueueItemRequest}
 */
proto.ns.CreateDeviceQueueItemRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ns.CreateDeviceQueueItemRequest;
  return proto.ns.CreateDeviceQueueItemRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ns.CreateDeviceQueueItemRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ns.CreateDeviceQueueItemRequest}
 */
proto.ns.CreateDeviceQueueItemRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ns.DeviceQueueItem;
      reader.readMessage(value,proto.ns.DeviceQueueItem.deserializeBinaryFromReader);
      msg.setItem(value);
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
 * @param {!proto.ns.CreateDeviceQueueItemRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.ns.CreateDeviceQueueItemRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ns.CreateDeviceQueueItemRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.ns.CreateDeviceQueueItemRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getItem();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.ns.DeviceQueueItem.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.ns.CreateDeviceQueueItemRequest} The clone.
 */
proto.ns.CreateDeviceQueueItemRequest.prototype.cloneMessage = function() {
  return /** @type {!proto.ns.CreateDeviceQueueItemRequest} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional DeviceQueueItem item = 1;
 * @return {proto.ns.DeviceQueueItem}
 */
proto.ns.CreateDeviceQueueItemRequest.prototype.getItem = function() {
  return /** @type{proto.ns.DeviceQueueItem} */ (
    jspb.Message.getWrapperField(this, proto.ns.DeviceQueueItem, 1));
};


/** @param {proto.ns.DeviceQueueItem|undefined} value  */
proto.ns.CreateDeviceQueueItemRequest.prototype.setItem = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.ns.CreateDeviceQueueItemRequest.prototype.clearItem = function() {
  this.setItem(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.ns.CreateDeviceQueueItemRequest.prototype.hasItem = function() {
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
proto.ns.FlushDeviceQueueForDevEUIRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ns.FlushDeviceQueueForDevEUIRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.ns.FlushDeviceQueueForDevEUIRequest.displayName = 'proto.ns.FlushDeviceQueueForDevEUIRequest';
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
proto.ns.FlushDeviceQueueForDevEUIRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ns.FlushDeviceQueueForDevEUIRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ns.FlushDeviceQueueForDevEUIRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.ns.FlushDeviceQueueForDevEUIRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    devEui: msg.getDevEui_asB64()
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
 * @return {!proto.ns.FlushDeviceQueueForDevEUIRequest}
 */
proto.ns.FlushDeviceQueueForDevEUIRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ns.FlushDeviceQueueForDevEUIRequest;
  return proto.ns.FlushDeviceQueueForDevEUIRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ns.FlushDeviceQueueForDevEUIRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ns.FlushDeviceQueueForDevEUIRequest}
 */
proto.ns.FlushDeviceQueueForDevEUIRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setDevEui(value);
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
 * @param {!proto.ns.FlushDeviceQueueForDevEUIRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.ns.FlushDeviceQueueForDevEUIRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ns.FlushDeviceQueueForDevEUIRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.ns.FlushDeviceQueueForDevEUIRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getDevEui_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.ns.FlushDeviceQueueForDevEUIRequest} The clone.
 */
proto.ns.FlushDeviceQueueForDevEUIRequest.prototype.cloneMessage = function() {
  return /** @type {!proto.ns.FlushDeviceQueueForDevEUIRequest} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional bytes dev_eui = 1;
 * @return {!(string|Uint8Array)}
 */
proto.ns.FlushDeviceQueueForDevEUIRequest.prototype.getDevEui = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldProto3(this, 1, ""));
};


/**
 * optional bytes dev_eui = 1;
 * This is a type-conversion wrapper around `getDevEui()`
 * @return {string}
 */
proto.ns.FlushDeviceQueueForDevEUIRequest.prototype.getDevEui_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getDevEui()));
};


/**
 * optional bytes dev_eui = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getDevEui()`
 * @return {!Uint8Array}
 */
proto.ns.FlushDeviceQueueForDevEUIRequest.prototype.getDevEui_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getDevEui()));
};


/** @param {!(string|Uint8Array)} value  */
proto.ns.FlushDeviceQueueForDevEUIRequest.prototype.setDevEui = function(value) {
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
proto.ns.GetDeviceQueueItemsForDevEUIRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ns.GetDeviceQueueItemsForDevEUIRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.ns.GetDeviceQueueItemsForDevEUIRequest.displayName = 'proto.ns.GetDeviceQueueItemsForDevEUIRequest';
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
proto.ns.GetDeviceQueueItemsForDevEUIRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ns.GetDeviceQueueItemsForDevEUIRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ns.GetDeviceQueueItemsForDevEUIRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.ns.GetDeviceQueueItemsForDevEUIRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    devEui: msg.getDevEui_asB64(),
    countOnly: msg.getCountOnly()
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
 * @return {!proto.ns.GetDeviceQueueItemsForDevEUIRequest}
 */
proto.ns.GetDeviceQueueItemsForDevEUIRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ns.GetDeviceQueueItemsForDevEUIRequest;
  return proto.ns.GetDeviceQueueItemsForDevEUIRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ns.GetDeviceQueueItemsForDevEUIRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ns.GetDeviceQueueItemsForDevEUIRequest}
 */
proto.ns.GetDeviceQueueItemsForDevEUIRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setDevEui(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCountOnly(value);
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
 * @param {!proto.ns.GetDeviceQueueItemsForDevEUIRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.ns.GetDeviceQueueItemsForDevEUIRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ns.GetDeviceQueueItemsForDevEUIRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.ns.GetDeviceQueueItemsForDevEUIRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getDevEui_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = this.getCountOnly();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.ns.GetDeviceQueueItemsForDevEUIRequest} The clone.
 */
proto.ns.GetDeviceQueueItemsForDevEUIRequest.prototype.cloneMessage = function() {
  return /** @type {!proto.ns.GetDeviceQueueItemsForDevEUIRequest} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional bytes dev_eui = 1;
 * @return {!(string|Uint8Array)}
 */
proto.ns.GetDeviceQueueItemsForDevEUIRequest.prototype.getDevEui = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldProto3(this, 1, ""));
};


/**
 * optional bytes dev_eui = 1;
 * This is a type-conversion wrapper around `getDevEui()`
 * @return {string}
 */
proto.ns.GetDeviceQueueItemsForDevEUIRequest.prototype.getDevEui_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getDevEui()));
};


/**
 * optional bytes dev_eui = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getDevEui()`
 * @return {!Uint8Array}
 */
proto.ns.GetDeviceQueueItemsForDevEUIRequest.prototype.getDevEui_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getDevEui()));
};


/** @param {!(string|Uint8Array)} value  */
proto.ns.GetDeviceQueueItemsForDevEUIRequest.prototype.setDevEui = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional bool count_only = 2;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.ns.GetDeviceQueueItemsForDevEUIRequest.prototype.getCountOnly = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldProto3(this, 2, false));
};


/** @param {boolean} value  */
proto.ns.GetDeviceQueueItemsForDevEUIRequest.prototype.setCountOnly = function(value) {
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
proto.ns.GetDeviceQueueItemsForDevEUIResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ns.GetDeviceQueueItemsForDevEUIResponse.repeatedFields_, null);
};
goog.inherits(proto.ns.GetDeviceQueueItemsForDevEUIResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.ns.GetDeviceQueueItemsForDevEUIResponse.displayName = 'proto.ns.GetDeviceQueueItemsForDevEUIResponse';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ns.GetDeviceQueueItemsForDevEUIResponse.repeatedFields_ = [1];



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
proto.ns.GetDeviceQueueItemsForDevEUIResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.ns.GetDeviceQueueItemsForDevEUIResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ns.GetDeviceQueueItemsForDevEUIResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.ns.GetDeviceQueueItemsForDevEUIResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    itemsList: jspb.Message.toObjectList(msg.getItemsList(),
    proto.ns.DeviceQueueItem.toObject, includeInstance),
    totalCount: msg.getTotalCount()
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
 * @return {!proto.ns.GetDeviceQueueItemsForDevEUIResponse}
 */
proto.ns.GetDeviceQueueItemsForDevEUIResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ns.GetDeviceQueueItemsForDevEUIResponse;
  return proto.ns.GetDeviceQueueItemsForDevEUIResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ns.GetDeviceQueueItemsForDevEUIResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ns.GetDeviceQueueItemsForDevEUIResponse}
 */
proto.ns.GetDeviceQueueItemsForDevEUIResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ns.DeviceQueueItem;
      reader.readMessage(value,proto.ns.DeviceQueueItem.deserializeBinaryFromReader);
      msg.getItemsList().push(value);
      msg.setItemsList(msg.getItemsList());
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setTotalCount(value);
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
 * @param {!proto.ns.GetDeviceQueueItemsForDevEUIResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.ns.GetDeviceQueueItemsForDevEUIResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ns.GetDeviceQueueItemsForDevEUIResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.ns.GetDeviceQueueItemsForDevEUIResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getItemsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.ns.DeviceQueueItem.serializeBinaryToWriter
    );
  }
  f = this.getTotalCount();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.ns.GetDeviceQueueItemsForDevEUIResponse} The clone.
 */
proto.ns.GetDeviceQueueItemsForDevEUIResponse.prototype.cloneMessage = function() {
  return /** @type {!proto.ns.GetDeviceQueueItemsForDevEUIResponse} */ (jspb.Message.cloneMessage(this));
};


/**
 * repeated DeviceQueueItem items = 1;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.ns.DeviceQueueItem>}
 */
proto.ns.GetDeviceQueueItemsForDevEUIResponse.prototype.getItemsList = function() {
  return /** @type{!Array.<!proto.ns.DeviceQueueItem>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ns.DeviceQueueItem, 1));
};


/** @param {Array.<!proto.ns.DeviceQueueItem>} value  */
proto.ns.GetDeviceQueueItemsForDevEUIResponse.prototype.setItemsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


proto.ns.GetDeviceQueueItemsForDevEUIResponse.prototype.clearItemsList = function() {
  this.setItemsList([]);
};


/**
 * optional uint32 total_count = 2;
 * @return {number}
 */
proto.ns.GetDeviceQueueItemsForDevEUIResponse.prototype.getTotalCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 2, 0));
};


/** @param {number} value  */
proto.ns.GetDeviceQueueItemsForDevEUIResponse.prototype.setTotalCount = function(value) {
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
proto.ns.GetNextDownlinkFCntForDevEUIRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ns.GetNextDownlinkFCntForDevEUIRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.ns.GetNextDownlinkFCntForDevEUIRequest.displayName = 'proto.ns.GetNextDownlinkFCntForDevEUIRequest';
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
proto.ns.GetNextDownlinkFCntForDevEUIRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ns.GetNextDownlinkFCntForDevEUIRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ns.GetNextDownlinkFCntForDevEUIRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.ns.GetNextDownlinkFCntForDevEUIRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    devEui: msg.getDevEui_asB64()
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
 * @return {!proto.ns.GetNextDownlinkFCntForDevEUIRequest}
 */
proto.ns.GetNextDownlinkFCntForDevEUIRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ns.GetNextDownlinkFCntForDevEUIRequest;
  return proto.ns.GetNextDownlinkFCntForDevEUIRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ns.GetNextDownlinkFCntForDevEUIRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ns.GetNextDownlinkFCntForDevEUIRequest}
 */
proto.ns.GetNextDownlinkFCntForDevEUIRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setDevEui(value);
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
 * @param {!proto.ns.GetNextDownlinkFCntForDevEUIRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.ns.GetNextDownlinkFCntForDevEUIRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ns.GetNextDownlinkFCntForDevEUIRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.ns.GetNextDownlinkFCntForDevEUIRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getDevEui_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.ns.GetNextDownlinkFCntForDevEUIRequest} The clone.
 */
proto.ns.GetNextDownlinkFCntForDevEUIRequest.prototype.cloneMessage = function() {
  return /** @type {!proto.ns.GetNextDownlinkFCntForDevEUIRequest} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional bytes dev_eui = 1;
 * @return {!(string|Uint8Array)}
 */
proto.ns.GetNextDownlinkFCntForDevEUIRequest.prototype.getDevEui = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldProto3(this, 1, ""));
};


/**
 * optional bytes dev_eui = 1;
 * This is a type-conversion wrapper around `getDevEui()`
 * @return {string}
 */
proto.ns.GetNextDownlinkFCntForDevEUIRequest.prototype.getDevEui_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getDevEui()));
};


/**
 * optional bytes dev_eui = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getDevEui()`
 * @return {!Uint8Array}
 */
proto.ns.GetNextDownlinkFCntForDevEUIRequest.prototype.getDevEui_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getDevEui()));
};


/** @param {!(string|Uint8Array)} value  */
proto.ns.GetNextDownlinkFCntForDevEUIRequest.prototype.setDevEui = function(value) {
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
proto.ns.GetNextDownlinkFCntForDevEUIResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ns.GetNextDownlinkFCntForDevEUIResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.ns.GetNextDownlinkFCntForDevEUIResponse.displayName = 'proto.ns.GetNextDownlinkFCntForDevEUIResponse';
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
proto.ns.GetNextDownlinkFCntForDevEUIResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.ns.GetNextDownlinkFCntForDevEUIResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ns.GetNextDownlinkFCntForDevEUIResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.ns.GetNextDownlinkFCntForDevEUIResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    fCnt: msg.getFCnt()
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
 * @return {!proto.ns.GetNextDownlinkFCntForDevEUIResponse}
 */
proto.ns.GetNextDownlinkFCntForDevEUIResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ns.GetNextDownlinkFCntForDevEUIResponse;
  return proto.ns.GetNextDownlinkFCntForDevEUIResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ns.GetNextDownlinkFCntForDevEUIResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ns.GetNextDownlinkFCntForDevEUIResponse}
 */
proto.ns.GetNextDownlinkFCntForDevEUIResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setFCnt(value);
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
 * @param {!proto.ns.GetNextDownlinkFCntForDevEUIResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.ns.GetNextDownlinkFCntForDevEUIResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ns.GetNextDownlinkFCntForDevEUIResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.ns.GetNextDownlinkFCntForDevEUIResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getFCnt();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.ns.GetNextDownlinkFCntForDevEUIResponse} The clone.
 */
proto.ns.GetNextDownlinkFCntForDevEUIResponse.prototype.cloneMessage = function() {
  return /** @type {!proto.ns.GetNextDownlinkFCntForDevEUIResponse} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional uint32 f_cnt = 1;
 * @return {number}
 */
proto.ns.GetNextDownlinkFCntForDevEUIResponse.prototype.getFCnt = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 1, 0));
};


/** @param {number} value  */
proto.ns.GetNextDownlinkFCntForDevEUIResponse.prototype.setFCnt = function(value) {
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
proto.ns.UplinkFrameLog = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ns.UplinkFrameLog.repeatedFields_, null);
};
goog.inherits(proto.ns.UplinkFrameLog, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.ns.UplinkFrameLog.displayName = 'proto.ns.UplinkFrameLog';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ns.UplinkFrameLog.repeatedFields_ = [3];



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
proto.ns.UplinkFrameLog.prototype.toObject = function(opt_includeInstance) {
  return proto.ns.UplinkFrameLog.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ns.UplinkFrameLog} msg The msg instance to transform.
 * @return {!Object}
 */
proto.ns.UplinkFrameLog.toObject = function(includeInstance, msg) {
  var f, obj = {
    phyPayload: msg.getPhyPayload_asB64(),
    txInfo: (f = msg.getTxInfo()) && gw_gw_pb.UplinkTXInfo.toObject(includeInstance, f),
    rxInfoList: jspb.Message.toObjectList(msg.getRxInfoList(),
    gw_gw_pb.UplinkRXInfo.toObject, includeInstance)
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
 * @return {!proto.ns.UplinkFrameLog}
 */
proto.ns.UplinkFrameLog.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ns.UplinkFrameLog;
  return proto.ns.UplinkFrameLog.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ns.UplinkFrameLog} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ns.UplinkFrameLog}
 */
proto.ns.UplinkFrameLog.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setPhyPayload(value);
      break;
    case 2:
      var value = new gw_gw_pb.UplinkTXInfo;
      reader.readMessage(value,gw_gw_pb.UplinkTXInfo.deserializeBinaryFromReader);
      msg.setTxInfo(value);
      break;
    case 3:
      var value = new gw_gw_pb.UplinkRXInfo;
      reader.readMessage(value,gw_gw_pb.UplinkRXInfo.deserializeBinaryFromReader);
      msg.getRxInfoList().push(value);
      msg.setRxInfoList(msg.getRxInfoList());
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
 * @param {!proto.ns.UplinkFrameLog} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.ns.UplinkFrameLog.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ns.UplinkFrameLog.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.ns.UplinkFrameLog.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getPhyPayload_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = this.getTxInfo();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      gw_gw_pb.UplinkTXInfo.serializeBinaryToWriter
    );
  }
  f = this.getRxInfoList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      gw_gw_pb.UplinkRXInfo.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.ns.UplinkFrameLog} The clone.
 */
proto.ns.UplinkFrameLog.prototype.cloneMessage = function() {
  return /** @type {!proto.ns.UplinkFrameLog} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional bytes phy_payload = 1;
 * @return {!(string|Uint8Array)}
 */
proto.ns.UplinkFrameLog.prototype.getPhyPayload = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldProto3(this, 1, ""));
};


/**
 * optional bytes phy_payload = 1;
 * This is a type-conversion wrapper around `getPhyPayload()`
 * @return {string}
 */
proto.ns.UplinkFrameLog.prototype.getPhyPayload_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getPhyPayload()));
};


/**
 * optional bytes phy_payload = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getPhyPayload()`
 * @return {!Uint8Array}
 */
proto.ns.UplinkFrameLog.prototype.getPhyPayload_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getPhyPayload()));
};


/** @param {!(string|Uint8Array)} value  */
proto.ns.UplinkFrameLog.prototype.setPhyPayload = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional gw.UplinkTXInfo tx_info = 2;
 * @return {proto.gw.UplinkTXInfo}
 */
proto.ns.UplinkFrameLog.prototype.getTxInfo = function() {
  return /** @type{proto.gw.UplinkTXInfo} */ (
    jspb.Message.getWrapperField(this, gw_gw_pb.UplinkTXInfo, 2));
};


/** @param {proto.gw.UplinkTXInfo|undefined} value  */
proto.ns.UplinkFrameLog.prototype.setTxInfo = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.ns.UplinkFrameLog.prototype.clearTxInfo = function() {
  this.setTxInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.ns.UplinkFrameLog.prototype.hasTxInfo = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated gw.UplinkRXInfo rx_info = 3;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.gw.UplinkRXInfo>}
 */
proto.ns.UplinkFrameLog.prototype.getRxInfoList = function() {
  return /** @type{!Array.<!proto.gw.UplinkRXInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, gw_gw_pb.UplinkRXInfo, 3));
};


/** @param {Array.<!proto.gw.UplinkRXInfo>} value  */
proto.ns.UplinkFrameLog.prototype.setRxInfoList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 3, value);
};


proto.ns.UplinkFrameLog.prototype.clearRxInfoList = function() {
  this.setRxInfoList([]);
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
proto.ns.DownlinkFrameLog = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ns.DownlinkFrameLog, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.ns.DownlinkFrameLog.displayName = 'proto.ns.DownlinkFrameLog';
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
proto.ns.DownlinkFrameLog.prototype.toObject = function(opt_includeInstance) {
  return proto.ns.DownlinkFrameLog.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ns.DownlinkFrameLog} msg The msg instance to transform.
 * @return {!Object}
 */
proto.ns.DownlinkFrameLog.toObject = function(includeInstance, msg) {
  var f, obj = {
    phyPayload: msg.getPhyPayload_asB64(),
    txInfo: (f = msg.getTxInfo()) && gw_gw_pb.DownlinkTXInfo.toObject(includeInstance, f),
    token: msg.getToken(),
    downlinkId: msg.getDownlinkId_asB64(),
    gatewayId: msg.getGatewayId_asB64()
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
 * @return {!proto.ns.DownlinkFrameLog}
 */
proto.ns.DownlinkFrameLog.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ns.DownlinkFrameLog;
  return proto.ns.DownlinkFrameLog.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ns.DownlinkFrameLog} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ns.DownlinkFrameLog}
 */
proto.ns.DownlinkFrameLog.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setPhyPayload(value);
      break;
    case 2:
      var value = new gw_gw_pb.DownlinkTXInfo;
      reader.readMessage(value,gw_gw_pb.DownlinkTXInfo.deserializeBinaryFromReader);
      msg.setTxInfo(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setToken(value);
      break;
    case 4:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setDownlinkId(value);
      break;
    case 5:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setGatewayId(value);
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
 * @param {!proto.ns.DownlinkFrameLog} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.ns.DownlinkFrameLog.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ns.DownlinkFrameLog.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.ns.DownlinkFrameLog.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getPhyPayload_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = this.getTxInfo();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      gw_gw_pb.DownlinkTXInfo.serializeBinaryToWriter
    );
  }
  f = this.getToken();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = this.getDownlinkId_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      4,
      f
    );
  }
  f = this.getGatewayId_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      5,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.ns.DownlinkFrameLog} The clone.
 */
proto.ns.DownlinkFrameLog.prototype.cloneMessage = function() {
  return /** @type {!proto.ns.DownlinkFrameLog} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional bytes phy_payload = 1;
 * @return {!(string|Uint8Array)}
 */
proto.ns.DownlinkFrameLog.prototype.getPhyPayload = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldProto3(this, 1, ""));
};


/**
 * optional bytes phy_payload = 1;
 * This is a type-conversion wrapper around `getPhyPayload()`
 * @return {string}
 */
proto.ns.DownlinkFrameLog.prototype.getPhyPayload_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getPhyPayload()));
};


/**
 * optional bytes phy_payload = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getPhyPayload()`
 * @return {!Uint8Array}
 */
proto.ns.DownlinkFrameLog.prototype.getPhyPayload_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getPhyPayload()));
};


/** @param {!(string|Uint8Array)} value  */
proto.ns.DownlinkFrameLog.prototype.setPhyPayload = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional gw.DownlinkTXInfo tx_info = 2;
 * @return {proto.gw.DownlinkTXInfo}
 */
proto.ns.DownlinkFrameLog.prototype.getTxInfo = function() {
  return /** @type{proto.gw.DownlinkTXInfo} */ (
    jspb.Message.getWrapperField(this, gw_gw_pb.DownlinkTXInfo, 2));
};


/** @param {proto.gw.DownlinkTXInfo|undefined} value  */
proto.ns.DownlinkFrameLog.prototype.setTxInfo = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.ns.DownlinkFrameLog.prototype.clearTxInfo = function() {
  this.setTxInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.ns.DownlinkFrameLog.prototype.hasTxInfo = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint32 token = 3;
 * @return {number}
 */
proto.ns.DownlinkFrameLog.prototype.getToken = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 3, 0));
};


/** @param {number} value  */
proto.ns.DownlinkFrameLog.prototype.setToken = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional bytes downlink_id = 4;
 * @return {!(string|Uint8Array)}
 */
proto.ns.DownlinkFrameLog.prototype.getDownlinkId = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldProto3(this, 4, ""));
};


/**
 * optional bytes downlink_id = 4;
 * This is a type-conversion wrapper around `getDownlinkId()`
 * @return {string}
 */
proto.ns.DownlinkFrameLog.prototype.getDownlinkId_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getDownlinkId()));
};


/**
 * optional bytes downlink_id = 4;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getDownlinkId()`
 * @return {!Uint8Array}
 */
proto.ns.DownlinkFrameLog.prototype.getDownlinkId_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getDownlinkId()));
};


/** @param {!(string|Uint8Array)} value  */
proto.ns.DownlinkFrameLog.prototype.setDownlinkId = function(value) {
  jspb.Message.setField(this, 4, value);
};


/**
 * optional bytes gateway_id = 5;
 * @return {!(string|Uint8Array)}
 */
proto.ns.DownlinkFrameLog.prototype.getGatewayId = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldProto3(this, 5, ""));
};


/**
 * optional bytes gateway_id = 5;
 * This is a type-conversion wrapper around `getGatewayId()`
 * @return {string}
 */
proto.ns.DownlinkFrameLog.prototype.getGatewayId_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getGatewayId()));
};


/**
 * optional bytes gateway_id = 5;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getGatewayId()`
 * @return {!Uint8Array}
 */
proto.ns.DownlinkFrameLog.prototype.getGatewayId_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getGatewayId()));
};


/** @param {!(string|Uint8Array)} value  */
proto.ns.DownlinkFrameLog.prototype.setGatewayId = function(value) {
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
proto.ns.StreamFrameLogsForGatewayRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ns.StreamFrameLogsForGatewayRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.ns.StreamFrameLogsForGatewayRequest.displayName = 'proto.ns.StreamFrameLogsForGatewayRequest';
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
proto.ns.StreamFrameLogsForGatewayRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ns.StreamFrameLogsForGatewayRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ns.StreamFrameLogsForGatewayRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.ns.StreamFrameLogsForGatewayRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    gatewayId: msg.getGatewayId_asB64()
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
 * @return {!proto.ns.StreamFrameLogsForGatewayRequest}
 */
proto.ns.StreamFrameLogsForGatewayRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ns.StreamFrameLogsForGatewayRequest;
  return proto.ns.StreamFrameLogsForGatewayRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ns.StreamFrameLogsForGatewayRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ns.StreamFrameLogsForGatewayRequest}
 */
proto.ns.StreamFrameLogsForGatewayRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setGatewayId(value);
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
 * @param {!proto.ns.StreamFrameLogsForGatewayRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.ns.StreamFrameLogsForGatewayRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ns.StreamFrameLogsForGatewayRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.ns.StreamFrameLogsForGatewayRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getGatewayId_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.ns.StreamFrameLogsForGatewayRequest} The clone.
 */
proto.ns.StreamFrameLogsForGatewayRequest.prototype.cloneMessage = function() {
  return /** @type {!proto.ns.StreamFrameLogsForGatewayRequest} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional bytes gateway_id = 1;
 * @return {!(string|Uint8Array)}
 */
proto.ns.StreamFrameLogsForGatewayRequest.prototype.getGatewayId = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldProto3(this, 1, ""));
};


/**
 * optional bytes gateway_id = 1;
 * This is a type-conversion wrapper around `getGatewayId()`
 * @return {string}
 */
proto.ns.StreamFrameLogsForGatewayRequest.prototype.getGatewayId_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getGatewayId()));
};


/**
 * optional bytes gateway_id = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getGatewayId()`
 * @return {!Uint8Array}
 */
proto.ns.StreamFrameLogsForGatewayRequest.prototype.getGatewayId_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getGatewayId()));
};


/** @param {!(string|Uint8Array)} value  */
proto.ns.StreamFrameLogsForGatewayRequest.prototype.setGatewayId = function(value) {
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
proto.ns.StreamFrameLogsForGatewayResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.ns.StreamFrameLogsForGatewayResponse.oneofGroups_);
};
goog.inherits(proto.ns.StreamFrameLogsForGatewayResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.ns.StreamFrameLogsForGatewayResponse.displayName = 'proto.ns.StreamFrameLogsForGatewayResponse';
}
/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.ns.StreamFrameLogsForGatewayResponse.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.ns.StreamFrameLogsForGatewayResponse.FrameCase = {
  FRAME_NOT_SET: 0,
  UPLINK_FRAME_SET: 1,
  DOWNLINK_FRAME: 2
};

/**
 * @return {proto.ns.StreamFrameLogsForGatewayResponse.FrameCase}
 */
proto.ns.StreamFrameLogsForGatewayResponse.prototype.getFrameCase = function() {
  return /** @type {proto.ns.StreamFrameLogsForGatewayResponse.FrameCase} */(jspb.Message.computeOneofCase(this, proto.ns.StreamFrameLogsForGatewayResponse.oneofGroups_[0]));
};



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
proto.ns.StreamFrameLogsForGatewayResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.ns.StreamFrameLogsForGatewayResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ns.StreamFrameLogsForGatewayResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.ns.StreamFrameLogsForGatewayResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    uplinkFrameSet: (f = msg.getUplinkFrameSet()) && proto.ns.UplinkFrameLog.toObject(includeInstance, f),
    downlinkFrame: (f = msg.getDownlinkFrame()) && proto.ns.DownlinkFrameLog.toObject(includeInstance, f)
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
 * @return {!proto.ns.StreamFrameLogsForGatewayResponse}
 */
proto.ns.StreamFrameLogsForGatewayResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ns.StreamFrameLogsForGatewayResponse;
  return proto.ns.StreamFrameLogsForGatewayResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ns.StreamFrameLogsForGatewayResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ns.StreamFrameLogsForGatewayResponse}
 */
proto.ns.StreamFrameLogsForGatewayResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ns.UplinkFrameLog;
      reader.readMessage(value,proto.ns.UplinkFrameLog.deserializeBinaryFromReader);
      msg.setUplinkFrameSet(value);
      break;
    case 2:
      var value = new proto.ns.DownlinkFrameLog;
      reader.readMessage(value,proto.ns.DownlinkFrameLog.deserializeBinaryFromReader);
      msg.setDownlinkFrame(value);
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
 * @param {!proto.ns.StreamFrameLogsForGatewayResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.ns.StreamFrameLogsForGatewayResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ns.StreamFrameLogsForGatewayResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.ns.StreamFrameLogsForGatewayResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getUplinkFrameSet();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.ns.UplinkFrameLog.serializeBinaryToWriter
    );
  }
  f = this.getDownlinkFrame();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.ns.DownlinkFrameLog.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.ns.StreamFrameLogsForGatewayResponse} The clone.
 */
proto.ns.StreamFrameLogsForGatewayResponse.prototype.cloneMessage = function() {
  return /** @type {!proto.ns.StreamFrameLogsForGatewayResponse} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional UplinkFrameLog uplink_frame_set = 1;
 * @return {proto.ns.UplinkFrameLog}
 */
proto.ns.StreamFrameLogsForGatewayResponse.prototype.getUplinkFrameSet = function() {
  return /** @type{proto.ns.UplinkFrameLog} */ (
    jspb.Message.getWrapperField(this, proto.ns.UplinkFrameLog, 1));
};


/** @param {proto.ns.UplinkFrameLog|undefined} value  */
proto.ns.StreamFrameLogsForGatewayResponse.prototype.setUplinkFrameSet = function(value) {
  jspb.Message.setOneofWrapperField(this, 1, proto.ns.StreamFrameLogsForGatewayResponse.oneofGroups_[0], value);
};


proto.ns.StreamFrameLogsForGatewayResponse.prototype.clearUplinkFrameSet = function() {
  this.setUplinkFrameSet(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.ns.StreamFrameLogsForGatewayResponse.prototype.hasUplinkFrameSet = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional DownlinkFrameLog downlink_frame = 2;
 * @return {proto.ns.DownlinkFrameLog}
 */
proto.ns.StreamFrameLogsForGatewayResponse.prototype.getDownlinkFrame = function() {
  return /** @type{proto.ns.DownlinkFrameLog} */ (
    jspb.Message.getWrapperField(this, proto.ns.DownlinkFrameLog, 2));
};


/** @param {proto.ns.DownlinkFrameLog|undefined} value  */
proto.ns.StreamFrameLogsForGatewayResponse.prototype.setDownlinkFrame = function(value) {
  jspb.Message.setOneofWrapperField(this, 2, proto.ns.StreamFrameLogsForGatewayResponse.oneofGroups_[0], value);
};


proto.ns.StreamFrameLogsForGatewayResponse.prototype.clearDownlinkFrame = function() {
  this.setDownlinkFrame(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.ns.StreamFrameLogsForGatewayResponse.prototype.hasDownlinkFrame = function() {
  return jspb.Message.getField(this, 2) != null;
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
proto.ns.StreamFrameLogsForDeviceRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ns.StreamFrameLogsForDeviceRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.ns.StreamFrameLogsForDeviceRequest.displayName = 'proto.ns.StreamFrameLogsForDeviceRequest';
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
proto.ns.StreamFrameLogsForDeviceRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ns.StreamFrameLogsForDeviceRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ns.StreamFrameLogsForDeviceRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.ns.StreamFrameLogsForDeviceRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    devEui: msg.getDevEui_asB64()
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
 * @return {!proto.ns.StreamFrameLogsForDeviceRequest}
 */
proto.ns.StreamFrameLogsForDeviceRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ns.StreamFrameLogsForDeviceRequest;
  return proto.ns.StreamFrameLogsForDeviceRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ns.StreamFrameLogsForDeviceRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ns.StreamFrameLogsForDeviceRequest}
 */
proto.ns.StreamFrameLogsForDeviceRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setDevEui(value);
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
 * @param {!proto.ns.StreamFrameLogsForDeviceRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.ns.StreamFrameLogsForDeviceRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ns.StreamFrameLogsForDeviceRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.ns.StreamFrameLogsForDeviceRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getDevEui_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.ns.StreamFrameLogsForDeviceRequest} The clone.
 */
proto.ns.StreamFrameLogsForDeviceRequest.prototype.cloneMessage = function() {
  return /** @type {!proto.ns.StreamFrameLogsForDeviceRequest} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional bytes dev_eui = 1;
 * @return {!(string|Uint8Array)}
 */
proto.ns.StreamFrameLogsForDeviceRequest.prototype.getDevEui = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldProto3(this, 1, ""));
};


/**
 * optional bytes dev_eui = 1;
 * This is a type-conversion wrapper around `getDevEui()`
 * @return {string}
 */
proto.ns.StreamFrameLogsForDeviceRequest.prototype.getDevEui_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getDevEui()));
};


/**
 * optional bytes dev_eui = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getDevEui()`
 * @return {!Uint8Array}
 */
proto.ns.StreamFrameLogsForDeviceRequest.prototype.getDevEui_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getDevEui()));
};


/** @param {!(string|Uint8Array)} value  */
proto.ns.StreamFrameLogsForDeviceRequest.prototype.setDevEui = function(value) {
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
proto.ns.StreamFrameLogsForDeviceResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.ns.StreamFrameLogsForDeviceResponse.oneofGroups_);
};
goog.inherits(proto.ns.StreamFrameLogsForDeviceResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.ns.StreamFrameLogsForDeviceResponse.displayName = 'proto.ns.StreamFrameLogsForDeviceResponse';
}
/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.ns.StreamFrameLogsForDeviceResponse.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.ns.StreamFrameLogsForDeviceResponse.FrameCase = {
  FRAME_NOT_SET: 0,
  UPLINK_FRAME_SET: 1,
  DOWNLINK_FRAME: 2
};

/**
 * @return {proto.ns.StreamFrameLogsForDeviceResponse.FrameCase}
 */
proto.ns.StreamFrameLogsForDeviceResponse.prototype.getFrameCase = function() {
  return /** @type {proto.ns.StreamFrameLogsForDeviceResponse.FrameCase} */(jspb.Message.computeOneofCase(this, proto.ns.StreamFrameLogsForDeviceResponse.oneofGroups_[0]));
};



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
proto.ns.StreamFrameLogsForDeviceResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.ns.StreamFrameLogsForDeviceResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ns.StreamFrameLogsForDeviceResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.ns.StreamFrameLogsForDeviceResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    uplinkFrameSet: (f = msg.getUplinkFrameSet()) && proto.ns.UplinkFrameLog.toObject(includeInstance, f),
    downlinkFrame: (f = msg.getDownlinkFrame()) && proto.ns.DownlinkFrameLog.toObject(includeInstance, f)
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
 * @return {!proto.ns.StreamFrameLogsForDeviceResponse}
 */
proto.ns.StreamFrameLogsForDeviceResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ns.StreamFrameLogsForDeviceResponse;
  return proto.ns.StreamFrameLogsForDeviceResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ns.StreamFrameLogsForDeviceResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ns.StreamFrameLogsForDeviceResponse}
 */
proto.ns.StreamFrameLogsForDeviceResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ns.UplinkFrameLog;
      reader.readMessage(value,proto.ns.UplinkFrameLog.deserializeBinaryFromReader);
      msg.setUplinkFrameSet(value);
      break;
    case 2:
      var value = new proto.ns.DownlinkFrameLog;
      reader.readMessage(value,proto.ns.DownlinkFrameLog.deserializeBinaryFromReader);
      msg.setDownlinkFrame(value);
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
 * @param {!proto.ns.StreamFrameLogsForDeviceResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.ns.StreamFrameLogsForDeviceResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ns.StreamFrameLogsForDeviceResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.ns.StreamFrameLogsForDeviceResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getUplinkFrameSet();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.ns.UplinkFrameLog.serializeBinaryToWriter
    );
  }
  f = this.getDownlinkFrame();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.ns.DownlinkFrameLog.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.ns.StreamFrameLogsForDeviceResponse} The clone.
 */
proto.ns.StreamFrameLogsForDeviceResponse.prototype.cloneMessage = function() {
  return /** @type {!proto.ns.StreamFrameLogsForDeviceResponse} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional UplinkFrameLog uplink_frame_set = 1;
 * @return {proto.ns.UplinkFrameLog}
 */
proto.ns.StreamFrameLogsForDeviceResponse.prototype.getUplinkFrameSet = function() {
  return /** @type{proto.ns.UplinkFrameLog} */ (
    jspb.Message.getWrapperField(this, proto.ns.UplinkFrameLog, 1));
};


/** @param {proto.ns.UplinkFrameLog|undefined} value  */
proto.ns.StreamFrameLogsForDeviceResponse.prototype.setUplinkFrameSet = function(value) {
  jspb.Message.setOneofWrapperField(this, 1, proto.ns.StreamFrameLogsForDeviceResponse.oneofGroups_[0], value);
};


proto.ns.StreamFrameLogsForDeviceResponse.prototype.clearUplinkFrameSet = function() {
  this.setUplinkFrameSet(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.ns.StreamFrameLogsForDeviceResponse.prototype.hasUplinkFrameSet = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional DownlinkFrameLog downlink_frame = 2;
 * @return {proto.ns.DownlinkFrameLog}
 */
proto.ns.StreamFrameLogsForDeviceResponse.prototype.getDownlinkFrame = function() {
  return /** @type{proto.ns.DownlinkFrameLog} */ (
    jspb.Message.getWrapperField(this, proto.ns.DownlinkFrameLog, 2));
};


/** @param {proto.ns.DownlinkFrameLog|undefined} value  */
proto.ns.StreamFrameLogsForDeviceResponse.prototype.setDownlinkFrame = function(value) {
  jspb.Message.setOneofWrapperField(this, 2, proto.ns.StreamFrameLogsForDeviceResponse.oneofGroups_[0], value);
};


proto.ns.StreamFrameLogsForDeviceResponse.prototype.clearDownlinkFrame = function() {
  this.setDownlinkFrame(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.ns.StreamFrameLogsForDeviceResponse.prototype.hasDownlinkFrame = function() {
  return jspb.Message.getField(this, 2) != null;
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
proto.ns.GetVersionResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ns.GetVersionResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.ns.GetVersionResponse.displayName = 'proto.ns.GetVersionResponse';
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
proto.ns.GetVersionResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.ns.GetVersionResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ns.GetVersionResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.ns.GetVersionResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    version: msg.getVersion(),
    region: msg.getRegion()
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
 * @return {!proto.ns.GetVersionResponse}
 */
proto.ns.GetVersionResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ns.GetVersionResponse;
  return proto.ns.GetVersionResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ns.GetVersionResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ns.GetVersionResponse}
 */
proto.ns.GetVersionResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setVersion(value);
      break;
    case 2:
      var value = /** @type {!proto.common.Region} */ (reader.readEnum());
      msg.setRegion(value);
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
 * @param {!proto.ns.GetVersionResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.ns.GetVersionResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ns.GetVersionResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.ns.GetVersionResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getVersion();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = this.getRegion();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.ns.GetVersionResponse} The clone.
 */
proto.ns.GetVersionResponse.prototype.cloneMessage = function() {
  return /** @type {!proto.ns.GetVersionResponse} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional string version = 1;
 * @return {string}
 */
proto.ns.GetVersionResponse.prototype.getVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 1, ""));
};


/** @param {string} value  */
proto.ns.GetVersionResponse.prototype.setVersion = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional common.Region region = 2;
 * @return {!proto.common.Region}
 */
proto.ns.GetVersionResponse.prototype.getRegion = function() {
  return /** @type {!proto.common.Region} */ (jspb.Message.getFieldProto3(this, 2, 0));
};


/** @param {!proto.common.Region} value  */
proto.ns.GetVersionResponse.prototype.setRegion = function(value) {
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
proto.ns.GatewayProfile = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ns.GatewayProfile.repeatedFields_, null);
};
goog.inherits(proto.ns.GatewayProfile, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.ns.GatewayProfile.displayName = 'proto.ns.GatewayProfile';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ns.GatewayProfile.repeatedFields_ = [2,3];



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
proto.ns.GatewayProfile.prototype.toObject = function(opt_includeInstance) {
  return proto.ns.GatewayProfile.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ns.GatewayProfile} msg The msg instance to transform.
 * @return {!Object}
 */
proto.ns.GatewayProfile.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: msg.getId_asB64(),
    channelsList: jspb.Message.getField(msg, 2),
    extraChannelsList: jspb.Message.toObjectList(msg.getExtraChannelsList(),
    proto.ns.GatewayProfileExtraChannel.toObject, includeInstance)
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
 * @return {!proto.ns.GatewayProfile}
 */
proto.ns.GatewayProfile.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ns.GatewayProfile;
  return proto.ns.GatewayProfile.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ns.GatewayProfile} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ns.GatewayProfile}
 */
proto.ns.GatewayProfile.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {!Array.<number>} */ (reader.readPackedUint32());
      msg.setChannelsList(value);
      break;
    case 3:
      var value = new proto.ns.GatewayProfileExtraChannel;
      reader.readMessage(value,proto.ns.GatewayProfileExtraChannel.deserializeBinaryFromReader);
      msg.getExtraChannelsList().push(value);
      msg.setExtraChannelsList(msg.getExtraChannelsList());
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
 * @param {!proto.ns.GatewayProfile} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.ns.GatewayProfile.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ns.GatewayProfile.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.ns.GatewayProfile.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getId_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = this.getChannelsList();
  if (f.length > 0) {
    writer.writePackedUint32(
      2,
      f
    );
  }
  f = this.getExtraChannelsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.ns.GatewayProfileExtraChannel.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.ns.GatewayProfile} The clone.
 */
proto.ns.GatewayProfile.prototype.cloneMessage = function() {
  return /** @type {!proto.ns.GatewayProfile} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional bytes id = 1;
 * @return {!(string|Uint8Array)}
 */
proto.ns.GatewayProfile.prototype.getId = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldProto3(this, 1, ""));
};


/**
 * optional bytes id = 1;
 * This is a type-conversion wrapper around `getId()`
 * @return {string}
 */
proto.ns.GatewayProfile.prototype.getId_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getId()));
};


/**
 * optional bytes id = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getId()`
 * @return {!Uint8Array}
 */
proto.ns.GatewayProfile.prototype.getId_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getId()));
};


/** @param {!(string|Uint8Array)} value  */
proto.ns.GatewayProfile.prototype.setId = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * repeated uint32 channels = 2;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<number>}
 */
proto.ns.GatewayProfile.prototype.getChannelsList = function() {
  return /** @type {!Array.<number>} */ (jspb.Message.getField(this, 2));
};


/** @param {Array.<number>} value  */
proto.ns.GatewayProfile.prototype.setChannelsList = function(value) {
  jspb.Message.setField(this, 2, value || []);
};


proto.ns.GatewayProfile.prototype.clearChannelsList = function() {
  jspb.Message.setField(this, 2, []);
};


/**
 * repeated GatewayProfileExtraChannel extra_channels = 3;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.ns.GatewayProfileExtraChannel>}
 */
proto.ns.GatewayProfile.prototype.getExtraChannelsList = function() {
  return /** @type{!Array.<!proto.ns.GatewayProfileExtraChannel>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ns.GatewayProfileExtraChannel, 3));
};


/** @param {Array.<!proto.ns.GatewayProfileExtraChannel>} value  */
proto.ns.GatewayProfile.prototype.setExtraChannelsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 3, value);
};


proto.ns.GatewayProfile.prototype.clearExtraChannelsList = function() {
  this.setExtraChannelsList([]);
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
proto.ns.GatewayProfileExtraChannel = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ns.GatewayProfileExtraChannel.repeatedFields_, null);
};
goog.inherits(proto.ns.GatewayProfileExtraChannel, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.ns.GatewayProfileExtraChannel.displayName = 'proto.ns.GatewayProfileExtraChannel';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ns.GatewayProfileExtraChannel.repeatedFields_ = [5];



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
proto.ns.GatewayProfileExtraChannel.prototype.toObject = function(opt_includeInstance) {
  return proto.ns.GatewayProfileExtraChannel.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ns.GatewayProfileExtraChannel} msg The msg instance to transform.
 * @return {!Object}
 */
proto.ns.GatewayProfileExtraChannel.toObject = function(includeInstance, msg) {
  var f, obj = {
    modulation: msg.getModulation(),
    frequency: msg.getFrequency(),
    bandwidth: msg.getBandwidth(),
    bitrate: msg.getBitrate(),
    spreadingFactorsList: jspb.Message.getField(msg, 5)
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
 * @return {!proto.ns.GatewayProfileExtraChannel}
 */
proto.ns.GatewayProfileExtraChannel.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ns.GatewayProfileExtraChannel;
  return proto.ns.GatewayProfileExtraChannel.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ns.GatewayProfileExtraChannel} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ns.GatewayProfileExtraChannel}
 */
proto.ns.GatewayProfileExtraChannel.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.common.Modulation} */ (reader.readEnum());
      msg.setModulation(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setFrequency(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setBandwidth(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setBitrate(value);
      break;
    case 5:
      var value = /** @type {!Array.<number>} */ (reader.readPackedUint32());
      msg.setSpreadingFactorsList(value);
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
 * @param {!proto.ns.GatewayProfileExtraChannel} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.ns.GatewayProfileExtraChannel.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ns.GatewayProfileExtraChannel.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.ns.GatewayProfileExtraChannel.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getModulation();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = this.getFrequency();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = this.getBandwidth();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = this.getBitrate();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = this.getSpreadingFactorsList();
  if (f.length > 0) {
    writer.writePackedUint32(
      5,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.ns.GatewayProfileExtraChannel} The clone.
 */
proto.ns.GatewayProfileExtraChannel.prototype.cloneMessage = function() {
  return /** @type {!proto.ns.GatewayProfileExtraChannel} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional common.Modulation modulation = 1;
 * @return {!proto.common.Modulation}
 */
proto.ns.GatewayProfileExtraChannel.prototype.getModulation = function() {
  return /** @type {!proto.common.Modulation} */ (jspb.Message.getFieldProto3(this, 1, 0));
};


/** @param {!proto.common.Modulation} value  */
proto.ns.GatewayProfileExtraChannel.prototype.setModulation = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional uint32 frequency = 2;
 * @return {number}
 */
proto.ns.GatewayProfileExtraChannel.prototype.getFrequency = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 2, 0));
};


/** @param {number} value  */
proto.ns.GatewayProfileExtraChannel.prototype.setFrequency = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional uint32 bandwidth = 3;
 * @return {number}
 */
proto.ns.GatewayProfileExtraChannel.prototype.getBandwidth = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 3, 0));
};


/** @param {number} value  */
proto.ns.GatewayProfileExtraChannel.prototype.setBandwidth = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional uint32 bitrate = 4;
 * @return {number}
 */
proto.ns.GatewayProfileExtraChannel.prototype.getBitrate = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 4, 0));
};


/** @param {number} value  */
proto.ns.GatewayProfileExtraChannel.prototype.setBitrate = function(value) {
  jspb.Message.setField(this, 4, value);
};


/**
 * repeated uint32 spreading_factors = 5;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<number>}
 */
proto.ns.GatewayProfileExtraChannel.prototype.getSpreadingFactorsList = function() {
  return /** @type {!Array.<number>} */ (jspb.Message.getField(this, 5));
};


/** @param {Array.<number>} value  */
proto.ns.GatewayProfileExtraChannel.prototype.setSpreadingFactorsList = function(value) {
  jspb.Message.setField(this, 5, value || []);
};


proto.ns.GatewayProfileExtraChannel.prototype.clearSpreadingFactorsList = function() {
  jspb.Message.setField(this, 5, []);
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
proto.ns.CreateGatewayProfileRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ns.CreateGatewayProfileRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.ns.CreateGatewayProfileRequest.displayName = 'proto.ns.CreateGatewayProfileRequest';
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
proto.ns.CreateGatewayProfileRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ns.CreateGatewayProfileRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ns.CreateGatewayProfileRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.ns.CreateGatewayProfileRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    gatewayProfile: (f = msg.getGatewayProfile()) && proto.ns.GatewayProfile.toObject(includeInstance, f)
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
 * @return {!proto.ns.CreateGatewayProfileRequest}
 */
proto.ns.CreateGatewayProfileRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ns.CreateGatewayProfileRequest;
  return proto.ns.CreateGatewayProfileRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ns.CreateGatewayProfileRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ns.CreateGatewayProfileRequest}
 */
proto.ns.CreateGatewayProfileRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ns.GatewayProfile;
      reader.readMessage(value,proto.ns.GatewayProfile.deserializeBinaryFromReader);
      msg.setGatewayProfile(value);
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
 * @param {!proto.ns.CreateGatewayProfileRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.ns.CreateGatewayProfileRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ns.CreateGatewayProfileRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.ns.CreateGatewayProfileRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getGatewayProfile();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.ns.GatewayProfile.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.ns.CreateGatewayProfileRequest} The clone.
 */
proto.ns.CreateGatewayProfileRequest.prototype.cloneMessage = function() {
  return /** @type {!proto.ns.CreateGatewayProfileRequest} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional GatewayProfile gateway_profile = 1;
 * @return {proto.ns.GatewayProfile}
 */
proto.ns.CreateGatewayProfileRequest.prototype.getGatewayProfile = function() {
  return /** @type{proto.ns.GatewayProfile} */ (
    jspb.Message.getWrapperField(this, proto.ns.GatewayProfile, 1));
};


/** @param {proto.ns.GatewayProfile|undefined} value  */
proto.ns.CreateGatewayProfileRequest.prototype.setGatewayProfile = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.ns.CreateGatewayProfileRequest.prototype.clearGatewayProfile = function() {
  this.setGatewayProfile(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.ns.CreateGatewayProfileRequest.prototype.hasGatewayProfile = function() {
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
proto.ns.CreateGatewayProfileResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ns.CreateGatewayProfileResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.ns.CreateGatewayProfileResponse.displayName = 'proto.ns.CreateGatewayProfileResponse';
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
proto.ns.CreateGatewayProfileResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.ns.CreateGatewayProfileResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ns.CreateGatewayProfileResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.ns.CreateGatewayProfileResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: msg.getId_asB64()
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
 * @return {!proto.ns.CreateGatewayProfileResponse}
 */
proto.ns.CreateGatewayProfileResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ns.CreateGatewayProfileResponse;
  return proto.ns.CreateGatewayProfileResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ns.CreateGatewayProfileResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ns.CreateGatewayProfileResponse}
 */
proto.ns.CreateGatewayProfileResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
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
 * @param {!proto.ns.CreateGatewayProfileResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.ns.CreateGatewayProfileResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ns.CreateGatewayProfileResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.ns.CreateGatewayProfileResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getId_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.ns.CreateGatewayProfileResponse} The clone.
 */
proto.ns.CreateGatewayProfileResponse.prototype.cloneMessage = function() {
  return /** @type {!proto.ns.CreateGatewayProfileResponse} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional bytes id = 1;
 * @return {!(string|Uint8Array)}
 */
proto.ns.CreateGatewayProfileResponse.prototype.getId = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldProto3(this, 1, ""));
};


/**
 * optional bytes id = 1;
 * This is a type-conversion wrapper around `getId()`
 * @return {string}
 */
proto.ns.CreateGatewayProfileResponse.prototype.getId_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getId()));
};


/**
 * optional bytes id = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getId()`
 * @return {!Uint8Array}
 */
proto.ns.CreateGatewayProfileResponse.prototype.getId_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getId()));
};


/** @param {!(string|Uint8Array)} value  */
proto.ns.CreateGatewayProfileResponse.prototype.setId = function(value) {
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
proto.ns.GetGatewayProfileRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ns.GetGatewayProfileRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.ns.GetGatewayProfileRequest.displayName = 'proto.ns.GetGatewayProfileRequest';
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
proto.ns.GetGatewayProfileRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ns.GetGatewayProfileRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ns.GetGatewayProfileRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.ns.GetGatewayProfileRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: msg.getId_asB64()
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
 * @return {!proto.ns.GetGatewayProfileRequest}
 */
proto.ns.GetGatewayProfileRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ns.GetGatewayProfileRequest;
  return proto.ns.GetGatewayProfileRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ns.GetGatewayProfileRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ns.GetGatewayProfileRequest}
 */
proto.ns.GetGatewayProfileRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
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
 * @param {!proto.ns.GetGatewayProfileRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.ns.GetGatewayProfileRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ns.GetGatewayProfileRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.ns.GetGatewayProfileRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getId_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.ns.GetGatewayProfileRequest} The clone.
 */
proto.ns.GetGatewayProfileRequest.prototype.cloneMessage = function() {
  return /** @type {!proto.ns.GetGatewayProfileRequest} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional bytes id = 1;
 * @return {!(string|Uint8Array)}
 */
proto.ns.GetGatewayProfileRequest.prototype.getId = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldProto3(this, 1, ""));
};


/**
 * optional bytes id = 1;
 * This is a type-conversion wrapper around `getId()`
 * @return {string}
 */
proto.ns.GetGatewayProfileRequest.prototype.getId_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getId()));
};


/**
 * optional bytes id = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getId()`
 * @return {!Uint8Array}
 */
proto.ns.GetGatewayProfileRequest.prototype.getId_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getId()));
};


/** @param {!(string|Uint8Array)} value  */
proto.ns.GetGatewayProfileRequest.prototype.setId = function(value) {
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
proto.ns.GetGatewayProfileResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ns.GetGatewayProfileResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.ns.GetGatewayProfileResponse.displayName = 'proto.ns.GetGatewayProfileResponse';
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
proto.ns.GetGatewayProfileResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.ns.GetGatewayProfileResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ns.GetGatewayProfileResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.ns.GetGatewayProfileResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    gatewayProfile: (f = msg.getGatewayProfile()) && proto.ns.GatewayProfile.toObject(includeInstance, f),
    createdAt: (f = msg.getCreatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    updatedAt: (f = msg.getUpdatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
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
 * @return {!proto.ns.GetGatewayProfileResponse}
 */
proto.ns.GetGatewayProfileResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ns.GetGatewayProfileResponse;
  return proto.ns.GetGatewayProfileResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ns.GetGatewayProfileResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ns.GetGatewayProfileResponse}
 */
proto.ns.GetGatewayProfileResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ns.GatewayProfile;
      reader.readMessage(value,proto.ns.GatewayProfile.deserializeBinaryFromReader);
      msg.setGatewayProfile(value);
      break;
    case 2:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreatedAt(value);
      break;
    case 3:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setUpdatedAt(value);
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
 * @param {!proto.ns.GetGatewayProfileResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.ns.GetGatewayProfileResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ns.GetGatewayProfileResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.ns.GetGatewayProfileResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getGatewayProfile();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.ns.GatewayProfile.serializeBinaryToWriter
    );
  }
  f = this.getCreatedAt();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = this.getUpdatedAt();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.ns.GetGatewayProfileResponse} The clone.
 */
proto.ns.GetGatewayProfileResponse.prototype.cloneMessage = function() {
  return /** @type {!proto.ns.GetGatewayProfileResponse} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional GatewayProfile gateway_profile = 1;
 * @return {proto.ns.GatewayProfile}
 */
proto.ns.GetGatewayProfileResponse.prototype.getGatewayProfile = function() {
  return /** @type{proto.ns.GatewayProfile} */ (
    jspb.Message.getWrapperField(this, proto.ns.GatewayProfile, 1));
};


/** @param {proto.ns.GatewayProfile|undefined} value  */
proto.ns.GetGatewayProfileResponse.prototype.setGatewayProfile = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.ns.GetGatewayProfileResponse.prototype.clearGatewayProfile = function() {
  this.setGatewayProfile(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.ns.GetGatewayProfileResponse.prototype.hasGatewayProfile = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.Timestamp created_at = 2;
 * @return {proto.google.protobuf.Timestamp}
 */
proto.ns.GetGatewayProfileResponse.prototype.getCreatedAt = function() {
  return /** @type{proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/** @param {proto.google.protobuf.Timestamp|undefined} value  */
proto.ns.GetGatewayProfileResponse.prototype.setCreatedAt = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.ns.GetGatewayProfileResponse.prototype.clearCreatedAt = function() {
  this.setCreatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.ns.GetGatewayProfileResponse.prototype.hasCreatedAt = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.Timestamp updated_at = 3;
 * @return {proto.google.protobuf.Timestamp}
 */
proto.ns.GetGatewayProfileResponse.prototype.getUpdatedAt = function() {
  return /** @type{proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/** @param {proto.google.protobuf.Timestamp|undefined} value  */
proto.ns.GetGatewayProfileResponse.prototype.setUpdatedAt = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.ns.GetGatewayProfileResponse.prototype.clearUpdatedAt = function() {
  this.setUpdatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.ns.GetGatewayProfileResponse.prototype.hasUpdatedAt = function() {
  return jspb.Message.getField(this, 3) != null;
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
proto.ns.UpdateGatewayProfileRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ns.UpdateGatewayProfileRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.ns.UpdateGatewayProfileRequest.displayName = 'proto.ns.UpdateGatewayProfileRequest';
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
proto.ns.UpdateGatewayProfileRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ns.UpdateGatewayProfileRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ns.UpdateGatewayProfileRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.ns.UpdateGatewayProfileRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    gatewayProfile: (f = msg.getGatewayProfile()) && proto.ns.GatewayProfile.toObject(includeInstance, f)
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
 * @return {!proto.ns.UpdateGatewayProfileRequest}
 */
proto.ns.UpdateGatewayProfileRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ns.UpdateGatewayProfileRequest;
  return proto.ns.UpdateGatewayProfileRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ns.UpdateGatewayProfileRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ns.UpdateGatewayProfileRequest}
 */
proto.ns.UpdateGatewayProfileRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ns.GatewayProfile;
      reader.readMessage(value,proto.ns.GatewayProfile.deserializeBinaryFromReader);
      msg.setGatewayProfile(value);
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
 * @param {!proto.ns.UpdateGatewayProfileRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.ns.UpdateGatewayProfileRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ns.UpdateGatewayProfileRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.ns.UpdateGatewayProfileRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getGatewayProfile();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.ns.GatewayProfile.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.ns.UpdateGatewayProfileRequest} The clone.
 */
proto.ns.UpdateGatewayProfileRequest.prototype.cloneMessage = function() {
  return /** @type {!proto.ns.UpdateGatewayProfileRequest} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional GatewayProfile gateway_profile = 1;
 * @return {proto.ns.GatewayProfile}
 */
proto.ns.UpdateGatewayProfileRequest.prototype.getGatewayProfile = function() {
  return /** @type{proto.ns.GatewayProfile} */ (
    jspb.Message.getWrapperField(this, proto.ns.GatewayProfile, 1));
};


/** @param {proto.ns.GatewayProfile|undefined} value  */
proto.ns.UpdateGatewayProfileRequest.prototype.setGatewayProfile = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.ns.UpdateGatewayProfileRequest.prototype.clearGatewayProfile = function() {
  this.setGatewayProfile(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.ns.UpdateGatewayProfileRequest.prototype.hasGatewayProfile = function() {
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
proto.ns.DeleteGatewayProfileRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ns.DeleteGatewayProfileRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.ns.DeleteGatewayProfileRequest.displayName = 'proto.ns.DeleteGatewayProfileRequest';
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
proto.ns.DeleteGatewayProfileRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ns.DeleteGatewayProfileRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ns.DeleteGatewayProfileRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.ns.DeleteGatewayProfileRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: msg.getId_asB64()
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
 * @return {!proto.ns.DeleteGatewayProfileRequest}
 */
proto.ns.DeleteGatewayProfileRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ns.DeleteGatewayProfileRequest;
  return proto.ns.DeleteGatewayProfileRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ns.DeleteGatewayProfileRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ns.DeleteGatewayProfileRequest}
 */
proto.ns.DeleteGatewayProfileRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
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
 * @param {!proto.ns.DeleteGatewayProfileRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.ns.DeleteGatewayProfileRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ns.DeleteGatewayProfileRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.ns.DeleteGatewayProfileRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getId_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.ns.DeleteGatewayProfileRequest} The clone.
 */
proto.ns.DeleteGatewayProfileRequest.prototype.cloneMessage = function() {
  return /** @type {!proto.ns.DeleteGatewayProfileRequest} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional bytes id = 1;
 * @return {!(string|Uint8Array)}
 */
proto.ns.DeleteGatewayProfileRequest.prototype.getId = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldProto3(this, 1, ""));
};


/**
 * optional bytes id = 1;
 * This is a type-conversion wrapper around `getId()`
 * @return {string}
 */
proto.ns.DeleteGatewayProfileRequest.prototype.getId_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getId()));
};


/**
 * optional bytes id = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getId()`
 * @return {!Uint8Array}
 */
proto.ns.DeleteGatewayProfileRequest.prototype.getId_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getId()));
};


/** @param {!(string|Uint8Array)} value  */
proto.ns.DeleteGatewayProfileRequest.prototype.setId = function(value) {
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
proto.ns.MulticastGroup = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ns.MulticastGroup, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.ns.MulticastGroup.displayName = 'proto.ns.MulticastGroup';
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
proto.ns.MulticastGroup.prototype.toObject = function(opt_includeInstance) {
  return proto.ns.MulticastGroup.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ns.MulticastGroup} msg The msg instance to transform.
 * @return {!Object}
 */
proto.ns.MulticastGroup.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: msg.getId_asB64(),
    mcAddr: msg.getMcAddr_asB64(),
    mcNwkSKey: msg.getMcNwkSKey_asB64(),
    fCnt: msg.getFCnt(),
    groupType: msg.getGroupType(),
    dr: msg.getDr(),
    frequency: msg.getFrequency(),
    pingSlotPeriod: msg.getPingSlotPeriod(),
    serviceProfileId: msg.getServiceProfileId_asB64(),
    routingProfileId: msg.getRoutingProfileId_asB64()
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
 * @return {!proto.ns.MulticastGroup}
 */
proto.ns.MulticastGroup.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ns.MulticastGroup;
  return proto.ns.MulticastGroup.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ns.MulticastGroup} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ns.MulticastGroup}
 */
proto.ns.MulticastGroup.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setMcAddr(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setMcNwkSKey(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setFCnt(value);
      break;
    case 5:
      var value = /** @type {!proto.ns.MulticastGroupType} */ (reader.readEnum());
      msg.setGroupType(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setDr(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setFrequency(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPingSlotPeriod(value);
      break;
    case 9:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setServiceProfileId(value);
      break;
    case 10:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setRoutingProfileId(value);
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
 * @param {!proto.ns.MulticastGroup} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.ns.MulticastGroup.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ns.MulticastGroup.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.ns.MulticastGroup.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getId_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = this.getMcAddr_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = this.getMcNwkSKey_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      3,
      f
    );
  }
  f = this.getFCnt();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = this.getGroupType();
  if (f !== 0.0) {
    writer.writeEnum(
      5,
      f
    );
  }
  f = this.getDr();
  if (f !== 0) {
    writer.writeUint32(
      6,
      f
    );
  }
  f = this.getFrequency();
  if (f !== 0) {
    writer.writeUint32(
      7,
      f
    );
  }
  f = this.getPingSlotPeriod();
  if (f !== 0) {
    writer.writeUint32(
      8,
      f
    );
  }
  f = this.getServiceProfileId_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      9,
      f
    );
  }
  f = this.getRoutingProfileId_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      10,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.ns.MulticastGroup} The clone.
 */
proto.ns.MulticastGroup.prototype.cloneMessage = function() {
  return /** @type {!proto.ns.MulticastGroup} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional bytes id = 1;
 * @return {!(string|Uint8Array)}
 */
proto.ns.MulticastGroup.prototype.getId = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldProto3(this, 1, ""));
};


/**
 * optional bytes id = 1;
 * This is a type-conversion wrapper around `getId()`
 * @return {string}
 */
proto.ns.MulticastGroup.prototype.getId_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getId()));
};


/**
 * optional bytes id = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getId()`
 * @return {!Uint8Array}
 */
proto.ns.MulticastGroup.prototype.getId_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getId()));
};


/** @param {!(string|Uint8Array)} value  */
proto.ns.MulticastGroup.prototype.setId = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional bytes mc_addr = 2;
 * @return {!(string|Uint8Array)}
 */
proto.ns.MulticastGroup.prototype.getMcAddr = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldProto3(this, 2, ""));
};


/**
 * optional bytes mc_addr = 2;
 * This is a type-conversion wrapper around `getMcAddr()`
 * @return {string}
 */
proto.ns.MulticastGroup.prototype.getMcAddr_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getMcAddr()));
};


/**
 * optional bytes mc_addr = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getMcAddr()`
 * @return {!Uint8Array}
 */
proto.ns.MulticastGroup.prototype.getMcAddr_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getMcAddr()));
};


/** @param {!(string|Uint8Array)} value  */
proto.ns.MulticastGroup.prototype.setMcAddr = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional bytes mc_nwk_s_key = 3;
 * @return {!(string|Uint8Array)}
 */
proto.ns.MulticastGroup.prototype.getMcNwkSKey = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldProto3(this, 3, ""));
};


/**
 * optional bytes mc_nwk_s_key = 3;
 * This is a type-conversion wrapper around `getMcNwkSKey()`
 * @return {string}
 */
proto.ns.MulticastGroup.prototype.getMcNwkSKey_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getMcNwkSKey()));
};


/**
 * optional bytes mc_nwk_s_key = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getMcNwkSKey()`
 * @return {!Uint8Array}
 */
proto.ns.MulticastGroup.prototype.getMcNwkSKey_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getMcNwkSKey()));
};


/** @param {!(string|Uint8Array)} value  */
proto.ns.MulticastGroup.prototype.setMcNwkSKey = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional uint32 f_cnt = 4;
 * @return {number}
 */
proto.ns.MulticastGroup.prototype.getFCnt = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 4, 0));
};


/** @param {number} value  */
proto.ns.MulticastGroup.prototype.setFCnt = function(value) {
  jspb.Message.setField(this, 4, value);
};


/**
 * optional MulticastGroupType group_type = 5;
 * @return {!proto.ns.MulticastGroupType}
 */
proto.ns.MulticastGroup.prototype.getGroupType = function() {
  return /** @type {!proto.ns.MulticastGroupType} */ (jspb.Message.getFieldProto3(this, 5, 0));
};


/** @param {!proto.ns.MulticastGroupType} value  */
proto.ns.MulticastGroup.prototype.setGroupType = function(value) {
  jspb.Message.setField(this, 5, value);
};


/**
 * optional uint32 dr = 6;
 * @return {number}
 */
proto.ns.MulticastGroup.prototype.getDr = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 6, 0));
};


/** @param {number} value  */
proto.ns.MulticastGroup.prototype.setDr = function(value) {
  jspb.Message.setField(this, 6, value);
};


/**
 * optional uint32 frequency = 7;
 * @return {number}
 */
proto.ns.MulticastGroup.prototype.getFrequency = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 7, 0));
};


/** @param {number} value  */
proto.ns.MulticastGroup.prototype.setFrequency = function(value) {
  jspb.Message.setField(this, 7, value);
};


/**
 * optional uint32 ping_slot_period = 8;
 * @return {number}
 */
proto.ns.MulticastGroup.prototype.getPingSlotPeriod = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 8, 0));
};


/** @param {number} value  */
proto.ns.MulticastGroup.prototype.setPingSlotPeriod = function(value) {
  jspb.Message.setField(this, 8, value);
};


/**
 * optional bytes service_profile_id = 9;
 * @return {!(string|Uint8Array)}
 */
proto.ns.MulticastGroup.prototype.getServiceProfileId = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldProto3(this, 9, ""));
};


/**
 * optional bytes service_profile_id = 9;
 * This is a type-conversion wrapper around `getServiceProfileId()`
 * @return {string}
 */
proto.ns.MulticastGroup.prototype.getServiceProfileId_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getServiceProfileId()));
};


/**
 * optional bytes service_profile_id = 9;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getServiceProfileId()`
 * @return {!Uint8Array}
 */
proto.ns.MulticastGroup.prototype.getServiceProfileId_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getServiceProfileId()));
};


/** @param {!(string|Uint8Array)} value  */
proto.ns.MulticastGroup.prototype.setServiceProfileId = function(value) {
  jspb.Message.setField(this, 9, value);
};


/**
 * optional bytes routing_profile_id = 10;
 * @return {!(string|Uint8Array)}
 */
proto.ns.MulticastGroup.prototype.getRoutingProfileId = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldProto3(this, 10, ""));
};


/**
 * optional bytes routing_profile_id = 10;
 * This is a type-conversion wrapper around `getRoutingProfileId()`
 * @return {string}
 */
proto.ns.MulticastGroup.prototype.getRoutingProfileId_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getRoutingProfileId()));
};


/**
 * optional bytes routing_profile_id = 10;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getRoutingProfileId()`
 * @return {!Uint8Array}
 */
proto.ns.MulticastGroup.prototype.getRoutingProfileId_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getRoutingProfileId()));
};


/** @param {!(string|Uint8Array)} value  */
proto.ns.MulticastGroup.prototype.setRoutingProfileId = function(value) {
  jspb.Message.setField(this, 10, value);
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
proto.ns.CreateMulticastGroupRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ns.CreateMulticastGroupRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.ns.CreateMulticastGroupRequest.displayName = 'proto.ns.CreateMulticastGroupRequest';
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
proto.ns.CreateMulticastGroupRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ns.CreateMulticastGroupRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ns.CreateMulticastGroupRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.ns.CreateMulticastGroupRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    multicastGroup: (f = msg.getMulticastGroup()) && proto.ns.MulticastGroup.toObject(includeInstance, f)
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
 * @return {!proto.ns.CreateMulticastGroupRequest}
 */
proto.ns.CreateMulticastGroupRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ns.CreateMulticastGroupRequest;
  return proto.ns.CreateMulticastGroupRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ns.CreateMulticastGroupRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ns.CreateMulticastGroupRequest}
 */
proto.ns.CreateMulticastGroupRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ns.MulticastGroup;
      reader.readMessage(value,proto.ns.MulticastGroup.deserializeBinaryFromReader);
      msg.setMulticastGroup(value);
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
 * @param {!proto.ns.CreateMulticastGroupRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.ns.CreateMulticastGroupRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ns.CreateMulticastGroupRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.ns.CreateMulticastGroupRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getMulticastGroup();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.ns.MulticastGroup.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.ns.CreateMulticastGroupRequest} The clone.
 */
proto.ns.CreateMulticastGroupRequest.prototype.cloneMessage = function() {
  return /** @type {!proto.ns.CreateMulticastGroupRequest} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional MulticastGroup multicast_group = 1;
 * @return {proto.ns.MulticastGroup}
 */
proto.ns.CreateMulticastGroupRequest.prototype.getMulticastGroup = function() {
  return /** @type{proto.ns.MulticastGroup} */ (
    jspb.Message.getWrapperField(this, proto.ns.MulticastGroup, 1));
};


/** @param {proto.ns.MulticastGroup|undefined} value  */
proto.ns.CreateMulticastGroupRequest.prototype.setMulticastGroup = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.ns.CreateMulticastGroupRequest.prototype.clearMulticastGroup = function() {
  this.setMulticastGroup(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.ns.CreateMulticastGroupRequest.prototype.hasMulticastGroup = function() {
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
proto.ns.CreateMulticastGroupResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ns.CreateMulticastGroupResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.ns.CreateMulticastGroupResponse.displayName = 'proto.ns.CreateMulticastGroupResponse';
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
proto.ns.CreateMulticastGroupResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.ns.CreateMulticastGroupResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ns.CreateMulticastGroupResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.ns.CreateMulticastGroupResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: msg.getId_asB64()
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
 * @return {!proto.ns.CreateMulticastGroupResponse}
 */
proto.ns.CreateMulticastGroupResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ns.CreateMulticastGroupResponse;
  return proto.ns.CreateMulticastGroupResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ns.CreateMulticastGroupResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ns.CreateMulticastGroupResponse}
 */
proto.ns.CreateMulticastGroupResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
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
 * @param {!proto.ns.CreateMulticastGroupResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.ns.CreateMulticastGroupResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ns.CreateMulticastGroupResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.ns.CreateMulticastGroupResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getId_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.ns.CreateMulticastGroupResponse} The clone.
 */
proto.ns.CreateMulticastGroupResponse.prototype.cloneMessage = function() {
  return /** @type {!proto.ns.CreateMulticastGroupResponse} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional bytes id = 1;
 * @return {!(string|Uint8Array)}
 */
proto.ns.CreateMulticastGroupResponse.prototype.getId = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldProto3(this, 1, ""));
};


/**
 * optional bytes id = 1;
 * This is a type-conversion wrapper around `getId()`
 * @return {string}
 */
proto.ns.CreateMulticastGroupResponse.prototype.getId_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getId()));
};


/**
 * optional bytes id = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getId()`
 * @return {!Uint8Array}
 */
proto.ns.CreateMulticastGroupResponse.prototype.getId_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getId()));
};


/** @param {!(string|Uint8Array)} value  */
proto.ns.CreateMulticastGroupResponse.prototype.setId = function(value) {
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
proto.ns.GetMulticastGroupRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ns.GetMulticastGroupRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.ns.GetMulticastGroupRequest.displayName = 'proto.ns.GetMulticastGroupRequest';
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
proto.ns.GetMulticastGroupRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ns.GetMulticastGroupRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ns.GetMulticastGroupRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.ns.GetMulticastGroupRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: msg.getId_asB64()
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
 * @return {!proto.ns.GetMulticastGroupRequest}
 */
proto.ns.GetMulticastGroupRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ns.GetMulticastGroupRequest;
  return proto.ns.GetMulticastGroupRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ns.GetMulticastGroupRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ns.GetMulticastGroupRequest}
 */
proto.ns.GetMulticastGroupRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
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
 * @param {!proto.ns.GetMulticastGroupRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.ns.GetMulticastGroupRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ns.GetMulticastGroupRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.ns.GetMulticastGroupRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getId_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.ns.GetMulticastGroupRequest} The clone.
 */
proto.ns.GetMulticastGroupRequest.prototype.cloneMessage = function() {
  return /** @type {!proto.ns.GetMulticastGroupRequest} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional bytes id = 1;
 * @return {!(string|Uint8Array)}
 */
proto.ns.GetMulticastGroupRequest.prototype.getId = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldProto3(this, 1, ""));
};


/**
 * optional bytes id = 1;
 * This is a type-conversion wrapper around `getId()`
 * @return {string}
 */
proto.ns.GetMulticastGroupRequest.prototype.getId_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getId()));
};


/**
 * optional bytes id = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getId()`
 * @return {!Uint8Array}
 */
proto.ns.GetMulticastGroupRequest.prototype.getId_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getId()));
};


/** @param {!(string|Uint8Array)} value  */
proto.ns.GetMulticastGroupRequest.prototype.setId = function(value) {
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
proto.ns.GetMulticastGroupResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ns.GetMulticastGroupResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.ns.GetMulticastGroupResponse.displayName = 'proto.ns.GetMulticastGroupResponse';
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
proto.ns.GetMulticastGroupResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.ns.GetMulticastGroupResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ns.GetMulticastGroupResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.ns.GetMulticastGroupResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    multicastGroup: (f = msg.getMulticastGroup()) && proto.ns.MulticastGroup.toObject(includeInstance, f),
    createdAt: (f = msg.getCreatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    updatedAt: (f = msg.getUpdatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
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
 * @return {!proto.ns.GetMulticastGroupResponse}
 */
proto.ns.GetMulticastGroupResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ns.GetMulticastGroupResponse;
  return proto.ns.GetMulticastGroupResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ns.GetMulticastGroupResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ns.GetMulticastGroupResponse}
 */
proto.ns.GetMulticastGroupResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ns.MulticastGroup;
      reader.readMessage(value,proto.ns.MulticastGroup.deserializeBinaryFromReader);
      msg.setMulticastGroup(value);
      break;
    case 2:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreatedAt(value);
      break;
    case 3:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setUpdatedAt(value);
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
 * @param {!proto.ns.GetMulticastGroupResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.ns.GetMulticastGroupResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ns.GetMulticastGroupResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.ns.GetMulticastGroupResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getMulticastGroup();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.ns.MulticastGroup.serializeBinaryToWriter
    );
  }
  f = this.getCreatedAt();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = this.getUpdatedAt();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.ns.GetMulticastGroupResponse} The clone.
 */
proto.ns.GetMulticastGroupResponse.prototype.cloneMessage = function() {
  return /** @type {!proto.ns.GetMulticastGroupResponse} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional MulticastGroup multicast_group = 1;
 * @return {proto.ns.MulticastGroup}
 */
proto.ns.GetMulticastGroupResponse.prototype.getMulticastGroup = function() {
  return /** @type{proto.ns.MulticastGroup} */ (
    jspb.Message.getWrapperField(this, proto.ns.MulticastGroup, 1));
};


/** @param {proto.ns.MulticastGroup|undefined} value  */
proto.ns.GetMulticastGroupResponse.prototype.setMulticastGroup = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.ns.GetMulticastGroupResponse.prototype.clearMulticastGroup = function() {
  this.setMulticastGroup(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.ns.GetMulticastGroupResponse.prototype.hasMulticastGroup = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.Timestamp created_at = 2;
 * @return {proto.google.protobuf.Timestamp}
 */
proto.ns.GetMulticastGroupResponse.prototype.getCreatedAt = function() {
  return /** @type{proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/** @param {proto.google.protobuf.Timestamp|undefined} value  */
proto.ns.GetMulticastGroupResponse.prototype.setCreatedAt = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.ns.GetMulticastGroupResponse.prototype.clearCreatedAt = function() {
  this.setCreatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.ns.GetMulticastGroupResponse.prototype.hasCreatedAt = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.Timestamp updated_at = 3;
 * @return {proto.google.protobuf.Timestamp}
 */
proto.ns.GetMulticastGroupResponse.prototype.getUpdatedAt = function() {
  return /** @type{proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/** @param {proto.google.protobuf.Timestamp|undefined} value  */
proto.ns.GetMulticastGroupResponse.prototype.setUpdatedAt = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.ns.GetMulticastGroupResponse.prototype.clearUpdatedAt = function() {
  this.setUpdatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.ns.GetMulticastGroupResponse.prototype.hasUpdatedAt = function() {
  return jspb.Message.getField(this, 3) != null;
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
proto.ns.UpdateMulticastGroupRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ns.UpdateMulticastGroupRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.ns.UpdateMulticastGroupRequest.displayName = 'proto.ns.UpdateMulticastGroupRequest';
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
proto.ns.UpdateMulticastGroupRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ns.UpdateMulticastGroupRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ns.UpdateMulticastGroupRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.ns.UpdateMulticastGroupRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    multicastGroup: (f = msg.getMulticastGroup()) && proto.ns.MulticastGroup.toObject(includeInstance, f)
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
 * @return {!proto.ns.UpdateMulticastGroupRequest}
 */
proto.ns.UpdateMulticastGroupRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ns.UpdateMulticastGroupRequest;
  return proto.ns.UpdateMulticastGroupRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ns.UpdateMulticastGroupRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ns.UpdateMulticastGroupRequest}
 */
proto.ns.UpdateMulticastGroupRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ns.MulticastGroup;
      reader.readMessage(value,proto.ns.MulticastGroup.deserializeBinaryFromReader);
      msg.setMulticastGroup(value);
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
 * @param {!proto.ns.UpdateMulticastGroupRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.ns.UpdateMulticastGroupRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ns.UpdateMulticastGroupRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.ns.UpdateMulticastGroupRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getMulticastGroup();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.ns.MulticastGroup.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.ns.UpdateMulticastGroupRequest} The clone.
 */
proto.ns.UpdateMulticastGroupRequest.prototype.cloneMessage = function() {
  return /** @type {!proto.ns.UpdateMulticastGroupRequest} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional MulticastGroup multicast_group = 1;
 * @return {proto.ns.MulticastGroup}
 */
proto.ns.UpdateMulticastGroupRequest.prototype.getMulticastGroup = function() {
  return /** @type{proto.ns.MulticastGroup} */ (
    jspb.Message.getWrapperField(this, proto.ns.MulticastGroup, 1));
};


/** @param {proto.ns.MulticastGroup|undefined} value  */
proto.ns.UpdateMulticastGroupRequest.prototype.setMulticastGroup = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.ns.UpdateMulticastGroupRequest.prototype.clearMulticastGroup = function() {
  this.setMulticastGroup(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.ns.UpdateMulticastGroupRequest.prototype.hasMulticastGroup = function() {
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
proto.ns.DeleteMulticastGroupRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ns.DeleteMulticastGroupRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.ns.DeleteMulticastGroupRequest.displayName = 'proto.ns.DeleteMulticastGroupRequest';
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
proto.ns.DeleteMulticastGroupRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ns.DeleteMulticastGroupRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ns.DeleteMulticastGroupRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.ns.DeleteMulticastGroupRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: msg.getId_asB64()
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
 * @return {!proto.ns.DeleteMulticastGroupRequest}
 */
proto.ns.DeleteMulticastGroupRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ns.DeleteMulticastGroupRequest;
  return proto.ns.DeleteMulticastGroupRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ns.DeleteMulticastGroupRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ns.DeleteMulticastGroupRequest}
 */
proto.ns.DeleteMulticastGroupRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
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
 * @param {!proto.ns.DeleteMulticastGroupRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.ns.DeleteMulticastGroupRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ns.DeleteMulticastGroupRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.ns.DeleteMulticastGroupRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getId_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.ns.DeleteMulticastGroupRequest} The clone.
 */
proto.ns.DeleteMulticastGroupRequest.prototype.cloneMessage = function() {
  return /** @type {!proto.ns.DeleteMulticastGroupRequest} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional bytes id = 1;
 * @return {!(string|Uint8Array)}
 */
proto.ns.DeleteMulticastGroupRequest.prototype.getId = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldProto3(this, 1, ""));
};


/**
 * optional bytes id = 1;
 * This is a type-conversion wrapper around `getId()`
 * @return {string}
 */
proto.ns.DeleteMulticastGroupRequest.prototype.getId_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getId()));
};


/**
 * optional bytes id = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getId()`
 * @return {!Uint8Array}
 */
proto.ns.DeleteMulticastGroupRequest.prototype.getId_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getId()));
};


/** @param {!(string|Uint8Array)} value  */
proto.ns.DeleteMulticastGroupRequest.prototype.setId = function(value) {
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
proto.ns.AddDeviceToMulticastGroupRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ns.AddDeviceToMulticastGroupRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.ns.AddDeviceToMulticastGroupRequest.displayName = 'proto.ns.AddDeviceToMulticastGroupRequest';
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
proto.ns.AddDeviceToMulticastGroupRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ns.AddDeviceToMulticastGroupRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ns.AddDeviceToMulticastGroupRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.ns.AddDeviceToMulticastGroupRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    devEui: msg.getDevEui_asB64(),
    multicastGroupId: msg.getMulticastGroupId_asB64()
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
 * @return {!proto.ns.AddDeviceToMulticastGroupRequest}
 */
proto.ns.AddDeviceToMulticastGroupRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ns.AddDeviceToMulticastGroupRequest;
  return proto.ns.AddDeviceToMulticastGroupRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ns.AddDeviceToMulticastGroupRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ns.AddDeviceToMulticastGroupRequest}
 */
proto.ns.AddDeviceToMulticastGroupRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setDevEui(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setMulticastGroupId(value);
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
 * @param {!proto.ns.AddDeviceToMulticastGroupRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.ns.AddDeviceToMulticastGroupRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ns.AddDeviceToMulticastGroupRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.ns.AddDeviceToMulticastGroupRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getDevEui_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = this.getMulticastGroupId_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.ns.AddDeviceToMulticastGroupRequest} The clone.
 */
proto.ns.AddDeviceToMulticastGroupRequest.prototype.cloneMessage = function() {
  return /** @type {!proto.ns.AddDeviceToMulticastGroupRequest} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional bytes dev_eui = 1;
 * @return {!(string|Uint8Array)}
 */
proto.ns.AddDeviceToMulticastGroupRequest.prototype.getDevEui = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldProto3(this, 1, ""));
};


/**
 * optional bytes dev_eui = 1;
 * This is a type-conversion wrapper around `getDevEui()`
 * @return {string}
 */
proto.ns.AddDeviceToMulticastGroupRequest.prototype.getDevEui_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getDevEui()));
};


/**
 * optional bytes dev_eui = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getDevEui()`
 * @return {!Uint8Array}
 */
proto.ns.AddDeviceToMulticastGroupRequest.prototype.getDevEui_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getDevEui()));
};


/** @param {!(string|Uint8Array)} value  */
proto.ns.AddDeviceToMulticastGroupRequest.prototype.setDevEui = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional bytes multicast_group_id = 2;
 * @return {!(string|Uint8Array)}
 */
proto.ns.AddDeviceToMulticastGroupRequest.prototype.getMulticastGroupId = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldProto3(this, 2, ""));
};


/**
 * optional bytes multicast_group_id = 2;
 * This is a type-conversion wrapper around `getMulticastGroupId()`
 * @return {string}
 */
proto.ns.AddDeviceToMulticastGroupRequest.prototype.getMulticastGroupId_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getMulticastGroupId()));
};


/**
 * optional bytes multicast_group_id = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getMulticastGroupId()`
 * @return {!Uint8Array}
 */
proto.ns.AddDeviceToMulticastGroupRequest.prototype.getMulticastGroupId_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getMulticastGroupId()));
};


/** @param {!(string|Uint8Array)} value  */
proto.ns.AddDeviceToMulticastGroupRequest.prototype.setMulticastGroupId = function(value) {
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
proto.ns.RemoveDeviceFromMulticastGroupRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ns.RemoveDeviceFromMulticastGroupRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.ns.RemoveDeviceFromMulticastGroupRequest.displayName = 'proto.ns.RemoveDeviceFromMulticastGroupRequest';
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
proto.ns.RemoveDeviceFromMulticastGroupRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ns.RemoveDeviceFromMulticastGroupRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ns.RemoveDeviceFromMulticastGroupRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.ns.RemoveDeviceFromMulticastGroupRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    devEui: msg.getDevEui_asB64(),
    multicastGroupId: msg.getMulticastGroupId_asB64()
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
 * @return {!proto.ns.RemoveDeviceFromMulticastGroupRequest}
 */
proto.ns.RemoveDeviceFromMulticastGroupRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ns.RemoveDeviceFromMulticastGroupRequest;
  return proto.ns.RemoveDeviceFromMulticastGroupRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ns.RemoveDeviceFromMulticastGroupRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ns.RemoveDeviceFromMulticastGroupRequest}
 */
proto.ns.RemoveDeviceFromMulticastGroupRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setDevEui(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setMulticastGroupId(value);
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
 * @param {!proto.ns.RemoveDeviceFromMulticastGroupRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.ns.RemoveDeviceFromMulticastGroupRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ns.RemoveDeviceFromMulticastGroupRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.ns.RemoveDeviceFromMulticastGroupRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getDevEui_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = this.getMulticastGroupId_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.ns.RemoveDeviceFromMulticastGroupRequest} The clone.
 */
proto.ns.RemoveDeviceFromMulticastGroupRequest.prototype.cloneMessage = function() {
  return /** @type {!proto.ns.RemoveDeviceFromMulticastGroupRequest} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional bytes dev_eui = 1;
 * @return {!(string|Uint8Array)}
 */
proto.ns.RemoveDeviceFromMulticastGroupRequest.prototype.getDevEui = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldProto3(this, 1, ""));
};


/**
 * optional bytes dev_eui = 1;
 * This is a type-conversion wrapper around `getDevEui()`
 * @return {string}
 */
proto.ns.RemoveDeviceFromMulticastGroupRequest.prototype.getDevEui_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getDevEui()));
};


/**
 * optional bytes dev_eui = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getDevEui()`
 * @return {!Uint8Array}
 */
proto.ns.RemoveDeviceFromMulticastGroupRequest.prototype.getDevEui_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getDevEui()));
};


/** @param {!(string|Uint8Array)} value  */
proto.ns.RemoveDeviceFromMulticastGroupRequest.prototype.setDevEui = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional bytes multicast_group_id = 2;
 * @return {!(string|Uint8Array)}
 */
proto.ns.RemoveDeviceFromMulticastGroupRequest.prototype.getMulticastGroupId = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldProto3(this, 2, ""));
};


/**
 * optional bytes multicast_group_id = 2;
 * This is a type-conversion wrapper around `getMulticastGroupId()`
 * @return {string}
 */
proto.ns.RemoveDeviceFromMulticastGroupRequest.prototype.getMulticastGroupId_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getMulticastGroupId()));
};


/**
 * optional bytes multicast_group_id = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getMulticastGroupId()`
 * @return {!Uint8Array}
 */
proto.ns.RemoveDeviceFromMulticastGroupRequest.prototype.getMulticastGroupId_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getMulticastGroupId()));
};


/** @param {!(string|Uint8Array)} value  */
proto.ns.RemoveDeviceFromMulticastGroupRequest.prototype.setMulticastGroupId = function(value) {
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
proto.ns.MulticastQueueItem = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ns.MulticastQueueItem, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.ns.MulticastQueueItem.displayName = 'proto.ns.MulticastQueueItem';
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
proto.ns.MulticastQueueItem.prototype.toObject = function(opt_includeInstance) {
  return proto.ns.MulticastQueueItem.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ns.MulticastQueueItem} msg The msg instance to transform.
 * @return {!Object}
 */
proto.ns.MulticastQueueItem.toObject = function(includeInstance, msg) {
  var f, obj = {
    multicastGroupId: msg.getMulticastGroupId_asB64(),
    fCnt: msg.getFCnt(),
    fPort: msg.getFPort(),
    frmPayload: msg.getFrmPayload_asB64()
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
 * @return {!proto.ns.MulticastQueueItem}
 */
proto.ns.MulticastQueueItem.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ns.MulticastQueueItem;
  return proto.ns.MulticastQueueItem.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ns.MulticastQueueItem} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ns.MulticastQueueItem}
 */
proto.ns.MulticastQueueItem.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setMulticastGroupId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setFCnt(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setFPort(value);
      break;
    case 4:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setFrmPayload(value);
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
 * @param {!proto.ns.MulticastQueueItem} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.ns.MulticastQueueItem.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ns.MulticastQueueItem.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.ns.MulticastQueueItem.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getMulticastGroupId_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = this.getFCnt();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = this.getFPort();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = this.getFrmPayload_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      4,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.ns.MulticastQueueItem} The clone.
 */
proto.ns.MulticastQueueItem.prototype.cloneMessage = function() {
  return /** @type {!proto.ns.MulticastQueueItem} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional bytes multicast_group_id = 1;
 * @return {!(string|Uint8Array)}
 */
proto.ns.MulticastQueueItem.prototype.getMulticastGroupId = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldProto3(this, 1, ""));
};


/**
 * optional bytes multicast_group_id = 1;
 * This is a type-conversion wrapper around `getMulticastGroupId()`
 * @return {string}
 */
proto.ns.MulticastQueueItem.prototype.getMulticastGroupId_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getMulticastGroupId()));
};


/**
 * optional bytes multicast_group_id = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getMulticastGroupId()`
 * @return {!Uint8Array}
 */
proto.ns.MulticastQueueItem.prototype.getMulticastGroupId_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getMulticastGroupId()));
};


/** @param {!(string|Uint8Array)} value  */
proto.ns.MulticastQueueItem.prototype.setMulticastGroupId = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional uint32 f_cnt = 2;
 * @return {number}
 */
proto.ns.MulticastQueueItem.prototype.getFCnt = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 2, 0));
};


/** @param {number} value  */
proto.ns.MulticastQueueItem.prototype.setFCnt = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional uint32 f_port = 3;
 * @return {number}
 */
proto.ns.MulticastQueueItem.prototype.getFPort = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 3, 0));
};


/** @param {number} value  */
proto.ns.MulticastQueueItem.prototype.setFPort = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional bytes frm_payload = 4;
 * @return {!(string|Uint8Array)}
 */
proto.ns.MulticastQueueItem.prototype.getFrmPayload = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldProto3(this, 4, ""));
};


/**
 * optional bytes frm_payload = 4;
 * This is a type-conversion wrapper around `getFrmPayload()`
 * @return {string}
 */
proto.ns.MulticastQueueItem.prototype.getFrmPayload_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getFrmPayload()));
};


/**
 * optional bytes frm_payload = 4;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getFrmPayload()`
 * @return {!Uint8Array}
 */
proto.ns.MulticastQueueItem.prototype.getFrmPayload_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getFrmPayload()));
};


/** @param {!(string|Uint8Array)} value  */
proto.ns.MulticastQueueItem.prototype.setFrmPayload = function(value) {
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
proto.ns.EnqueueMulticastQueueItemRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ns.EnqueueMulticastQueueItemRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.ns.EnqueueMulticastQueueItemRequest.displayName = 'proto.ns.EnqueueMulticastQueueItemRequest';
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
proto.ns.EnqueueMulticastQueueItemRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ns.EnqueueMulticastQueueItemRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ns.EnqueueMulticastQueueItemRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.ns.EnqueueMulticastQueueItemRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    multicastQueueItem: (f = msg.getMulticastQueueItem()) && proto.ns.MulticastQueueItem.toObject(includeInstance, f)
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
 * @return {!proto.ns.EnqueueMulticastQueueItemRequest}
 */
proto.ns.EnqueueMulticastQueueItemRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ns.EnqueueMulticastQueueItemRequest;
  return proto.ns.EnqueueMulticastQueueItemRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ns.EnqueueMulticastQueueItemRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ns.EnqueueMulticastQueueItemRequest}
 */
proto.ns.EnqueueMulticastQueueItemRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ns.MulticastQueueItem;
      reader.readMessage(value,proto.ns.MulticastQueueItem.deserializeBinaryFromReader);
      msg.setMulticastQueueItem(value);
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
 * @param {!proto.ns.EnqueueMulticastQueueItemRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.ns.EnqueueMulticastQueueItemRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ns.EnqueueMulticastQueueItemRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.ns.EnqueueMulticastQueueItemRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getMulticastQueueItem();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.ns.MulticastQueueItem.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.ns.EnqueueMulticastQueueItemRequest} The clone.
 */
proto.ns.EnqueueMulticastQueueItemRequest.prototype.cloneMessage = function() {
  return /** @type {!proto.ns.EnqueueMulticastQueueItemRequest} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional MulticastQueueItem multicast_queue_item = 1;
 * @return {proto.ns.MulticastQueueItem}
 */
proto.ns.EnqueueMulticastQueueItemRequest.prototype.getMulticastQueueItem = function() {
  return /** @type{proto.ns.MulticastQueueItem} */ (
    jspb.Message.getWrapperField(this, proto.ns.MulticastQueueItem, 1));
};


/** @param {proto.ns.MulticastQueueItem|undefined} value  */
proto.ns.EnqueueMulticastQueueItemRequest.prototype.setMulticastQueueItem = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.ns.EnqueueMulticastQueueItemRequest.prototype.clearMulticastQueueItem = function() {
  this.setMulticastQueueItem(undefined);
};


/**
 * Returns whether this field is set.
 * @return{!boolean}
 */
proto.ns.EnqueueMulticastQueueItemRequest.prototype.hasMulticastQueueItem = function() {
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
proto.ns.FlushMulticastQueueForMulticastGroupRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ns.FlushMulticastQueueForMulticastGroupRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.ns.FlushMulticastQueueForMulticastGroupRequest.displayName = 'proto.ns.FlushMulticastQueueForMulticastGroupRequest';
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
proto.ns.FlushMulticastQueueForMulticastGroupRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ns.FlushMulticastQueueForMulticastGroupRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ns.FlushMulticastQueueForMulticastGroupRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.ns.FlushMulticastQueueForMulticastGroupRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    multicastGroupId: msg.getMulticastGroupId_asB64()
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
 * @return {!proto.ns.FlushMulticastQueueForMulticastGroupRequest}
 */
proto.ns.FlushMulticastQueueForMulticastGroupRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ns.FlushMulticastQueueForMulticastGroupRequest;
  return proto.ns.FlushMulticastQueueForMulticastGroupRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ns.FlushMulticastQueueForMulticastGroupRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ns.FlushMulticastQueueForMulticastGroupRequest}
 */
proto.ns.FlushMulticastQueueForMulticastGroupRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setMulticastGroupId(value);
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
 * @param {!proto.ns.FlushMulticastQueueForMulticastGroupRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.ns.FlushMulticastQueueForMulticastGroupRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ns.FlushMulticastQueueForMulticastGroupRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.ns.FlushMulticastQueueForMulticastGroupRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getMulticastGroupId_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.ns.FlushMulticastQueueForMulticastGroupRequest} The clone.
 */
proto.ns.FlushMulticastQueueForMulticastGroupRequest.prototype.cloneMessage = function() {
  return /** @type {!proto.ns.FlushMulticastQueueForMulticastGroupRequest} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional bytes multicast_group_id = 1;
 * @return {!(string|Uint8Array)}
 */
proto.ns.FlushMulticastQueueForMulticastGroupRequest.prototype.getMulticastGroupId = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldProto3(this, 1, ""));
};


/**
 * optional bytes multicast_group_id = 1;
 * This is a type-conversion wrapper around `getMulticastGroupId()`
 * @return {string}
 */
proto.ns.FlushMulticastQueueForMulticastGroupRequest.prototype.getMulticastGroupId_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getMulticastGroupId()));
};


/**
 * optional bytes multicast_group_id = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getMulticastGroupId()`
 * @return {!Uint8Array}
 */
proto.ns.FlushMulticastQueueForMulticastGroupRequest.prototype.getMulticastGroupId_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getMulticastGroupId()));
};


/** @param {!(string|Uint8Array)} value  */
proto.ns.FlushMulticastQueueForMulticastGroupRequest.prototype.setMulticastGroupId = function(value) {
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
proto.ns.GetMulticastQueueItemsForMulticastGroupRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ns.GetMulticastQueueItemsForMulticastGroupRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.ns.GetMulticastQueueItemsForMulticastGroupRequest.displayName = 'proto.ns.GetMulticastQueueItemsForMulticastGroupRequest';
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
proto.ns.GetMulticastQueueItemsForMulticastGroupRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ns.GetMulticastQueueItemsForMulticastGroupRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ns.GetMulticastQueueItemsForMulticastGroupRequest} msg The msg instance to transform.
 * @return {!Object}
 */
proto.ns.GetMulticastQueueItemsForMulticastGroupRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    multicastGroupId: msg.getMulticastGroupId_asB64()
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
 * @return {!proto.ns.GetMulticastQueueItemsForMulticastGroupRequest}
 */
proto.ns.GetMulticastQueueItemsForMulticastGroupRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ns.GetMulticastQueueItemsForMulticastGroupRequest;
  return proto.ns.GetMulticastQueueItemsForMulticastGroupRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ns.GetMulticastQueueItemsForMulticastGroupRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ns.GetMulticastQueueItemsForMulticastGroupRequest}
 */
proto.ns.GetMulticastQueueItemsForMulticastGroupRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setMulticastGroupId(value);
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
 * @param {!proto.ns.GetMulticastQueueItemsForMulticastGroupRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.ns.GetMulticastQueueItemsForMulticastGroupRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ns.GetMulticastQueueItemsForMulticastGroupRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.ns.GetMulticastQueueItemsForMulticastGroupRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getMulticastGroupId_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.ns.GetMulticastQueueItemsForMulticastGroupRequest} The clone.
 */
proto.ns.GetMulticastQueueItemsForMulticastGroupRequest.prototype.cloneMessage = function() {
  return /** @type {!proto.ns.GetMulticastQueueItemsForMulticastGroupRequest} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional bytes multicast_group_id = 1;
 * @return {!(string|Uint8Array)}
 */
proto.ns.GetMulticastQueueItemsForMulticastGroupRequest.prototype.getMulticastGroupId = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldProto3(this, 1, ""));
};


/**
 * optional bytes multicast_group_id = 1;
 * This is a type-conversion wrapper around `getMulticastGroupId()`
 * @return {string}
 */
proto.ns.GetMulticastQueueItemsForMulticastGroupRequest.prototype.getMulticastGroupId_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getMulticastGroupId()));
};


/**
 * optional bytes multicast_group_id = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getMulticastGroupId()`
 * @return {!Uint8Array}
 */
proto.ns.GetMulticastQueueItemsForMulticastGroupRequest.prototype.getMulticastGroupId_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getMulticastGroupId()));
};


/** @param {!(string|Uint8Array)} value  */
proto.ns.GetMulticastQueueItemsForMulticastGroupRequest.prototype.setMulticastGroupId = function(value) {
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
proto.ns.GetMulticastQueueItemsForMulticastGroupResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ns.GetMulticastQueueItemsForMulticastGroupResponse.repeatedFields_, null);
};
goog.inherits(proto.ns.GetMulticastQueueItemsForMulticastGroupResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.ns.GetMulticastQueueItemsForMulticastGroupResponse.displayName = 'proto.ns.GetMulticastQueueItemsForMulticastGroupResponse';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ns.GetMulticastQueueItemsForMulticastGroupResponse.repeatedFields_ = [1];



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
proto.ns.GetMulticastQueueItemsForMulticastGroupResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.ns.GetMulticastQueueItemsForMulticastGroupResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ns.GetMulticastQueueItemsForMulticastGroupResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.ns.GetMulticastQueueItemsForMulticastGroupResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    multicastQueueItemsList: jspb.Message.toObjectList(msg.getMulticastQueueItemsList(),
    proto.ns.MulticastQueueItem.toObject, includeInstance)
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
 * @return {!proto.ns.GetMulticastQueueItemsForMulticastGroupResponse}
 */
proto.ns.GetMulticastQueueItemsForMulticastGroupResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ns.GetMulticastQueueItemsForMulticastGroupResponse;
  return proto.ns.GetMulticastQueueItemsForMulticastGroupResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ns.GetMulticastQueueItemsForMulticastGroupResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ns.GetMulticastQueueItemsForMulticastGroupResponse}
 */
proto.ns.GetMulticastQueueItemsForMulticastGroupResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ns.MulticastQueueItem;
      reader.readMessage(value,proto.ns.MulticastQueueItem.deserializeBinaryFromReader);
      msg.getMulticastQueueItemsList().push(value);
      msg.setMulticastQueueItemsList(msg.getMulticastQueueItemsList());
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
 * @param {!proto.ns.GetMulticastQueueItemsForMulticastGroupResponse} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.ns.GetMulticastQueueItemsForMulticastGroupResponse.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ns.GetMulticastQueueItemsForMulticastGroupResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.ns.GetMulticastQueueItemsForMulticastGroupResponse.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getMulticastQueueItemsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.ns.MulticastQueueItem.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.ns.GetMulticastQueueItemsForMulticastGroupResponse} The clone.
 */
proto.ns.GetMulticastQueueItemsForMulticastGroupResponse.prototype.cloneMessage = function() {
  return /** @type {!proto.ns.GetMulticastQueueItemsForMulticastGroupResponse} */ (jspb.Message.cloneMessage(this));
};


/**
 * repeated MulticastQueueItem multicast_queue_items = 1;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.ns.MulticastQueueItem>}
 */
proto.ns.GetMulticastQueueItemsForMulticastGroupResponse.prototype.getMulticastQueueItemsList = function() {
  return /** @type{!Array.<!proto.ns.MulticastQueueItem>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ns.MulticastQueueItem, 1));
};


/** @param {Array.<!proto.ns.MulticastQueueItem>} value  */
proto.ns.GetMulticastQueueItemsForMulticastGroupResponse.prototype.setMulticastQueueItemsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


proto.ns.GetMulticastQueueItemsForMulticastGroupResponse.prototype.clearMulticastQueueItemsList = function() {
  this.setMulticastQueueItemsList([]);
};


/**
 * @enum {number}
 */
proto.ns.RXWindow = {
  RX1: 0,
  RX2: 1
};

/**
 * @enum {number}
 */
proto.ns.AggregationInterval = {
  SECOND: 0,
  MINUTE: 1,
  HOUR: 2,
  DAY: 3,
  WEEK: 4,
  MONTH: 5,
  QUARTER: 6,
  YEAR: 7
};

/**
 * @enum {number}
 */
proto.ns.MulticastGroupType = {
  CLASS_C: 0,
  CLASS_B: 1
};

goog.object.extend(exports, proto.ns);
