// source: tensorflow/core/framework/resource_handle.proto
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

var tensorflow_core_framework_tensor_shape_pb = require('../../../tensorflow/core/framework/tensor_shape_pb.js');
goog.object.extend(proto, tensorflow_core_framework_tensor_shape_pb);
var tensorflow_core_framework_types_pb = require('../../../tensorflow/core/framework/types_pb.js');
goog.object.extend(proto, tensorflow_core_framework_types_pb);
goog.exportSymbol('proto.tensorflow.ResourceHandleProto', null, global);
goog.exportSymbol('proto.tensorflow.ResourceHandleProto.DtypeAndShape', null, global);
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
proto.tensorflow.ResourceHandleProto = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tensorflow.ResourceHandleProto.repeatedFields_, null);
};
goog.inherits(proto.tensorflow.ResourceHandleProto, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tensorflow.ResourceHandleProto.displayName = 'proto.tensorflow.ResourceHandleProto';
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
proto.tensorflow.ResourceHandleProto.DtypeAndShape = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tensorflow.ResourceHandleProto.DtypeAndShape, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tensorflow.ResourceHandleProto.DtypeAndShape.displayName = 'proto.tensorflow.ResourceHandleProto.DtypeAndShape';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tensorflow.ResourceHandleProto.repeatedFields_ = [6];



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
proto.tensorflow.ResourceHandleProto.prototype.toObject = function(opt_includeInstance) {
  return proto.tensorflow.ResourceHandleProto.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tensorflow.ResourceHandleProto} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tensorflow.ResourceHandleProto.toObject = function(includeInstance, msg) {
  var f, obj = {
    device: jspb.Message.getFieldWithDefault(msg, 1, ""),
    container: jspb.Message.getFieldWithDefault(msg, 2, ""),
    name: jspb.Message.getFieldWithDefault(msg, 3, ""),
    hashCode: jspb.Message.getFieldWithDefault(msg, 4, 0),
    maybeTypeName: jspb.Message.getFieldWithDefault(msg, 5, ""),
    dtypesAndShapesList: jspb.Message.toObjectList(msg.getDtypesAndShapesList(),
    proto.tensorflow.ResourceHandleProto.DtypeAndShape.toObject, includeInstance)
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
 * @return {!proto.tensorflow.ResourceHandleProto}
 */
proto.tensorflow.ResourceHandleProto.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tensorflow.ResourceHandleProto;
  return proto.tensorflow.ResourceHandleProto.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tensorflow.ResourceHandleProto} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tensorflow.ResourceHandleProto}
 */
proto.tensorflow.ResourceHandleProto.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDevice(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setContainer(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setHashCode(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setMaybeTypeName(value);
      break;
    case 6:
      var value = new proto.tensorflow.ResourceHandleProto.DtypeAndShape;
      reader.readMessage(value,proto.tensorflow.ResourceHandleProto.DtypeAndShape.deserializeBinaryFromReader);
      msg.addDtypesAndShapes(value);
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
proto.tensorflow.ResourceHandleProto.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tensorflow.ResourceHandleProto.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tensorflow.ResourceHandleProto} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tensorflow.ResourceHandleProto.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDevice();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getContainer();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getHashCode();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
  f = message.getMaybeTypeName();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getDtypesAndShapesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      proto.tensorflow.ResourceHandleProto.DtypeAndShape.serializeBinaryToWriter
    );
  }
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
proto.tensorflow.ResourceHandleProto.DtypeAndShape.prototype.toObject = function(opt_includeInstance) {
  return proto.tensorflow.ResourceHandleProto.DtypeAndShape.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tensorflow.ResourceHandleProto.DtypeAndShape} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tensorflow.ResourceHandleProto.DtypeAndShape.toObject = function(includeInstance, msg) {
  var f, obj = {
    dtype: jspb.Message.getFieldWithDefault(msg, 1, 0),
    shape: (f = msg.getShape()) && tensorflow_core_framework_tensor_shape_pb.TensorShapeProto.toObject(includeInstance, f)
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
 * @return {!proto.tensorflow.ResourceHandleProto.DtypeAndShape}
 */
proto.tensorflow.ResourceHandleProto.DtypeAndShape.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tensorflow.ResourceHandleProto.DtypeAndShape;
  return proto.tensorflow.ResourceHandleProto.DtypeAndShape.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tensorflow.ResourceHandleProto.DtypeAndShape} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tensorflow.ResourceHandleProto.DtypeAndShape}
 */
proto.tensorflow.ResourceHandleProto.DtypeAndShape.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.tensorflow.DataType} */ (reader.readEnum());
      msg.setDtype(value);
      break;
    case 2:
      var value = new tensorflow_core_framework_tensor_shape_pb.TensorShapeProto;
      reader.readMessage(value,tensorflow_core_framework_tensor_shape_pb.TensorShapeProto.deserializeBinaryFromReader);
      msg.setShape(value);
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
proto.tensorflow.ResourceHandleProto.DtypeAndShape.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tensorflow.ResourceHandleProto.DtypeAndShape.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tensorflow.ResourceHandleProto.DtypeAndShape} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tensorflow.ResourceHandleProto.DtypeAndShape.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDtype();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getShape();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      tensorflow_core_framework_tensor_shape_pb.TensorShapeProto.serializeBinaryToWriter
    );
  }
};


/**
 * optional DataType dtype = 1;
 * @return {!proto.tensorflow.DataType}
 */
proto.tensorflow.ResourceHandleProto.DtypeAndShape.prototype.getDtype = function() {
  return /** @type {!proto.tensorflow.DataType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.tensorflow.DataType} value
 * @return {!proto.tensorflow.ResourceHandleProto.DtypeAndShape} returns this
 */
proto.tensorflow.ResourceHandleProto.DtypeAndShape.prototype.setDtype = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional TensorShapeProto shape = 2;
 * @return {?proto.tensorflow.TensorShapeProto}
 */
proto.tensorflow.ResourceHandleProto.DtypeAndShape.prototype.getShape = function() {
  return /** @type{?proto.tensorflow.TensorShapeProto} */ (
    jspb.Message.getWrapperField(this, tensorflow_core_framework_tensor_shape_pb.TensorShapeProto, 2));
};


/**
 * @param {?proto.tensorflow.TensorShapeProto|undefined} value
 * @return {!proto.tensorflow.ResourceHandleProto.DtypeAndShape} returns this
*/
proto.tensorflow.ResourceHandleProto.DtypeAndShape.prototype.setShape = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tensorflow.ResourceHandleProto.DtypeAndShape} returns this
 */
proto.tensorflow.ResourceHandleProto.DtypeAndShape.prototype.clearShape = function() {
  return this.setShape(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tensorflow.ResourceHandleProto.DtypeAndShape.prototype.hasShape = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string device = 1;
 * @return {string}
 */
proto.tensorflow.ResourceHandleProto.prototype.getDevice = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.tensorflow.ResourceHandleProto} returns this
 */
proto.tensorflow.ResourceHandleProto.prototype.setDevice = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string container = 2;
 * @return {string}
 */
proto.tensorflow.ResourceHandleProto.prototype.getContainer = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.tensorflow.ResourceHandleProto} returns this
 */
proto.tensorflow.ResourceHandleProto.prototype.setContainer = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string name = 3;
 * @return {string}
 */
proto.tensorflow.ResourceHandleProto.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.tensorflow.ResourceHandleProto} returns this
 */
proto.tensorflow.ResourceHandleProto.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional uint64 hash_code = 4;
 * @return {number}
 */
proto.tensorflow.ResourceHandleProto.prototype.getHashCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.tensorflow.ResourceHandleProto} returns this
 */
proto.tensorflow.ResourceHandleProto.prototype.setHashCode = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional string maybe_type_name = 5;
 * @return {string}
 */
proto.tensorflow.ResourceHandleProto.prototype.getMaybeTypeName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.tensorflow.ResourceHandleProto} returns this
 */
proto.tensorflow.ResourceHandleProto.prototype.setMaybeTypeName = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * repeated DtypeAndShape dtypes_and_shapes = 6;
 * @return {!Array<!proto.tensorflow.ResourceHandleProto.DtypeAndShape>}
 */
proto.tensorflow.ResourceHandleProto.prototype.getDtypesAndShapesList = function() {
  return /** @type{!Array<!proto.tensorflow.ResourceHandleProto.DtypeAndShape>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.tensorflow.ResourceHandleProto.DtypeAndShape, 6));
};


/**
 * @param {!Array<!proto.tensorflow.ResourceHandleProto.DtypeAndShape>} value
 * @return {!proto.tensorflow.ResourceHandleProto} returns this
*/
proto.tensorflow.ResourceHandleProto.prototype.setDtypesAndShapesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.tensorflow.ResourceHandleProto.DtypeAndShape=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tensorflow.ResourceHandleProto.DtypeAndShape}
 */
proto.tensorflow.ResourceHandleProto.prototype.addDtypesAndShapes = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.tensorflow.ResourceHandleProto.DtypeAndShape, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tensorflow.ResourceHandleProto} returns this
 */
proto.tensorflow.ResourceHandleProto.prototype.clearDtypesAndShapesList = function() {
  return this.setDtypesAndShapesList([]);
};


goog.object.extend(exports, proto.tensorflow);
