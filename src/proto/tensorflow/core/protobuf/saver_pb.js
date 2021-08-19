// source: tensorflow/core/protobuf/saver.proto
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

goog.exportSymbol('proto.tensorflow.SaverDef', null, global);
goog.exportSymbol('proto.tensorflow.SaverDef.CheckpointFormatVersion', null, global);
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
proto.tensorflow.SaverDef = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tensorflow.SaverDef, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tensorflow.SaverDef.displayName = 'proto.tensorflow.SaverDef';
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
proto.tensorflow.SaverDef.prototype.toObject = function(opt_includeInstance) {
  return proto.tensorflow.SaverDef.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tensorflow.SaverDef} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tensorflow.SaverDef.toObject = function(includeInstance, msg) {
  var f, obj = {
    filenameTensorName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    saveTensorName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    restoreOpName: jspb.Message.getFieldWithDefault(msg, 3, ""),
    maxToKeep: jspb.Message.getFieldWithDefault(msg, 4, 0),
    sharded: jspb.Message.getBooleanFieldWithDefault(msg, 5, false),
    keepCheckpointEveryNHours: jspb.Message.getFloatingPointFieldWithDefault(msg, 6, 0.0),
    version: jspb.Message.getFieldWithDefault(msg, 7, 0)
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
 * @return {!proto.tensorflow.SaverDef}
 */
proto.tensorflow.SaverDef.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tensorflow.SaverDef;
  return proto.tensorflow.SaverDef.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tensorflow.SaverDef} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tensorflow.SaverDef}
 */
proto.tensorflow.SaverDef.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setFilenameTensorName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSaveTensorName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setRestoreOpName(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMaxToKeep(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSharded(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setKeepCheckpointEveryNHours(value);
      break;
    case 7:
      var value = /** @type {!proto.tensorflow.SaverDef.CheckpointFormatVersion} */ (reader.readEnum());
      msg.setVersion(value);
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
proto.tensorflow.SaverDef.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tensorflow.SaverDef.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tensorflow.SaverDef} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tensorflow.SaverDef.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFilenameTensorName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSaveTensorName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getRestoreOpName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getMaxToKeep();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getSharded();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
  f = message.getKeepCheckpointEveryNHours();
  if (f !== 0.0) {
    writer.writeFloat(
      6,
      f
    );
  }
  f = message.getVersion();
  if (f !== 0.0) {
    writer.writeEnum(
      7,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.tensorflow.SaverDef.CheckpointFormatVersion = {
  LEGACY: 0,
  V1: 1,
  V2: 2
};

/**
 * optional string filename_tensor_name = 1;
 * @return {string}
 */
proto.tensorflow.SaverDef.prototype.getFilenameTensorName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.tensorflow.SaverDef} returns this
 */
proto.tensorflow.SaverDef.prototype.setFilenameTensorName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string save_tensor_name = 2;
 * @return {string}
 */
proto.tensorflow.SaverDef.prototype.getSaveTensorName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.tensorflow.SaverDef} returns this
 */
proto.tensorflow.SaverDef.prototype.setSaveTensorName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string restore_op_name = 3;
 * @return {string}
 */
proto.tensorflow.SaverDef.prototype.getRestoreOpName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.tensorflow.SaverDef} returns this
 */
proto.tensorflow.SaverDef.prototype.setRestoreOpName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int32 max_to_keep = 4;
 * @return {number}
 */
proto.tensorflow.SaverDef.prototype.getMaxToKeep = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.tensorflow.SaverDef} returns this
 */
proto.tensorflow.SaverDef.prototype.setMaxToKeep = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional bool sharded = 5;
 * @return {boolean}
 */
proto.tensorflow.SaverDef.prototype.getSharded = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.tensorflow.SaverDef} returns this
 */
proto.tensorflow.SaverDef.prototype.setSharded = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * optional float keep_checkpoint_every_n_hours = 6;
 * @return {number}
 */
proto.tensorflow.SaverDef.prototype.getKeepCheckpointEveryNHours = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 6, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.tensorflow.SaverDef} returns this
 */
proto.tensorflow.SaverDef.prototype.setKeepCheckpointEveryNHours = function(value) {
  return jspb.Message.setProto3FloatField(this, 6, value);
};


/**
 * optional CheckpointFormatVersion version = 7;
 * @return {!proto.tensorflow.SaverDef.CheckpointFormatVersion}
 */
proto.tensorflow.SaverDef.prototype.getVersion = function() {
  return /** @type {!proto.tensorflow.SaverDef.CheckpointFormatVersion} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {!proto.tensorflow.SaverDef.CheckpointFormatVersion} value
 * @return {!proto.tensorflow.SaverDef} returns this
 */
proto.tensorflow.SaverDef.prototype.setVersion = function(value) {
  return jspb.Message.setProto3EnumField(this, 7, value);
};


goog.object.extend(exports, proto.tensorflow);
