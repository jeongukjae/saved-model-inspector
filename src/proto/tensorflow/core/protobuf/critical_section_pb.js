// source: tensorflow/core/protobuf/critical_section.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.tensorflow.CriticalSectionDef', null, global);
goog.exportSymbol('proto.tensorflow.CriticalSectionExecutionDef', null, global);
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
proto.tensorflow.CriticalSectionDef = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tensorflow.CriticalSectionDef, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tensorflow.CriticalSectionDef.displayName = 'proto.tensorflow.CriticalSectionDef';
}
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
proto.tensorflow.CriticalSectionExecutionDef = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tensorflow.CriticalSectionExecutionDef, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tensorflow.CriticalSectionExecutionDef.displayName = 'proto.tensorflow.CriticalSectionExecutionDef';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tensorflow.CriticalSectionDef.prototype.toObject = function(opt_includeInstance) {
  return proto.tensorflow.CriticalSectionDef.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tensorflow.CriticalSectionDef} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tensorflow.CriticalSectionDef.toObject = function(includeInstance, msg) {
  var f, obj = {
    criticalSectionName: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.tensorflow.CriticalSectionDef}
 */
proto.tensorflow.CriticalSectionDef.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tensorflow.CriticalSectionDef;
  return proto.tensorflow.CriticalSectionDef.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tensorflow.CriticalSectionDef} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tensorflow.CriticalSectionDef}
 */
proto.tensorflow.CriticalSectionDef.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCriticalSectionName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tensorflow.CriticalSectionDef.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tensorflow.CriticalSectionDef.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tensorflow.CriticalSectionDef} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tensorflow.CriticalSectionDef.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCriticalSectionName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string critical_section_name = 1;
 * @return {string}
 */
proto.tensorflow.CriticalSectionDef.prototype.getCriticalSectionName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.tensorflow.CriticalSectionDef} returns this
 */
proto.tensorflow.CriticalSectionDef.prototype.setCriticalSectionName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.tensorflow.CriticalSectionExecutionDef.prototype.toObject = function(opt_includeInstance) {
  return proto.tensorflow.CriticalSectionExecutionDef.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tensorflow.CriticalSectionExecutionDef} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tensorflow.CriticalSectionExecutionDef.toObject = function(includeInstance, msg) {
  var f, obj = {
    executeInCriticalSectionName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    exclusiveResourceAccess: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
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
 * @return {!proto.tensorflow.CriticalSectionExecutionDef}
 */
proto.tensorflow.CriticalSectionExecutionDef.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tensorflow.CriticalSectionExecutionDef;
  return proto.tensorflow.CriticalSectionExecutionDef.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tensorflow.CriticalSectionExecutionDef} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tensorflow.CriticalSectionExecutionDef}
 */
proto.tensorflow.CriticalSectionExecutionDef.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setExecuteInCriticalSectionName(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setExclusiveResourceAccess(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.tensorflow.CriticalSectionExecutionDef.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tensorflow.CriticalSectionExecutionDef.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tensorflow.CriticalSectionExecutionDef} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tensorflow.CriticalSectionExecutionDef.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getExecuteInCriticalSectionName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getExclusiveResourceAccess();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional string execute_in_critical_section_name = 1;
 * @return {string}
 */
proto.tensorflow.CriticalSectionExecutionDef.prototype.getExecuteInCriticalSectionName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.tensorflow.CriticalSectionExecutionDef} returns this
 */
proto.tensorflow.CriticalSectionExecutionDef.prototype.setExecuteInCriticalSectionName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool exclusive_resource_access = 2;
 * @return {boolean}
 */
proto.tensorflow.CriticalSectionExecutionDef.prototype.getExclusiveResourceAccess = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.tensorflow.CriticalSectionExecutionDef} returns this
 */
proto.tensorflow.CriticalSectionExecutionDef.prototype.setExclusiveResourceAccess = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


goog.object.extend(exports, proto.tensorflow);