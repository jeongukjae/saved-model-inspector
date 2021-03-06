// source: tensorflow/core/framework/reader_base.proto
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

goog.exportSymbol('proto.tensorflow.ReaderBaseState', null, global);
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
proto.tensorflow.ReaderBaseState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tensorflow.ReaderBaseState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tensorflow.ReaderBaseState.displayName = 'proto.tensorflow.ReaderBaseState';
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
proto.tensorflow.ReaderBaseState.prototype.toObject = function(opt_includeInstance) {
  return proto.tensorflow.ReaderBaseState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tensorflow.ReaderBaseState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tensorflow.ReaderBaseState.toObject = function(includeInstance, msg) {
  var f, obj = {
    workStarted: jspb.Message.getFieldWithDefault(msg, 1, 0),
    workFinished: jspb.Message.getFieldWithDefault(msg, 2, 0),
    numRecordsProduced: jspb.Message.getFieldWithDefault(msg, 3, 0),
    currentWork: msg.getCurrentWork_asB64()
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
 * @return {!proto.tensorflow.ReaderBaseState}
 */
proto.tensorflow.ReaderBaseState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tensorflow.ReaderBaseState;
  return proto.tensorflow.ReaderBaseState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tensorflow.ReaderBaseState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tensorflow.ReaderBaseState}
 */
proto.tensorflow.ReaderBaseState.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setWorkStarted(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setWorkFinished(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setNumRecordsProduced(value);
      break;
    case 4:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setCurrentWork(value);
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
proto.tensorflow.ReaderBaseState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tensorflow.ReaderBaseState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tensorflow.ReaderBaseState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tensorflow.ReaderBaseState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWorkStarted();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getWorkFinished();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getNumRecordsProduced();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getCurrentWork_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      4,
      f
    );
  }
};


/**
 * optional int64 work_started = 1;
 * @return {number}
 */
proto.tensorflow.ReaderBaseState.prototype.getWorkStarted = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.tensorflow.ReaderBaseState} returns this
 */
proto.tensorflow.ReaderBaseState.prototype.setWorkStarted = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 work_finished = 2;
 * @return {number}
 */
proto.tensorflow.ReaderBaseState.prototype.getWorkFinished = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.tensorflow.ReaderBaseState} returns this
 */
proto.tensorflow.ReaderBaseState.prototype.setWorkFinished = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 num_records_produced = 3;
 * @return {number}
 */
proto.tensorflow.ReaderBaseState.prototype.getNumRecordsProduced = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.tensorflow.ReaderBaseState} returns this
 */
proto.tensorflow.ReaderBaseState.prototype.setNumRecordsProduced = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional bytes current_work = 4;
 * @return {!(string|Uint8Array)}
 */
proto.tensorflow.ReaderBaseState.prototype.getCurrentWork = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * optional bytes current_work = 4;
 * This is a type-conversion wrapper around `getCurrentWork()`
 * @return {string}
 */
proto.tensorflow.ReaderBaseState.prototype.getCurrentWork_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getCurrentWork()));
};


/**
 * optional bytes current_work = 4;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getCurrentWork()`
 * @return {!Uint8Array}
 */
proto.tensorflow.ReaderBaseState.prototype.getCurrentWork_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getCurrentWork()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.tensorflow.ReaderBaseState} returns this
 */
proto.tensorflow.ReaderBaseState.prototype.setCurrentWork = function(value) {
  return jspb.Message.setProto3BytesField(this, 4, value);
};


goog.object.extend(exports, proto.tensorflow);
