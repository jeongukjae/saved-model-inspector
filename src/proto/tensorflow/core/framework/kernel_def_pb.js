// source: tensorflow/core/framework/kernel_def.proto
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

var tensorflow_core_framework_attr_value_pb = require('../../../tensorflow/core/framework/attr_value_pb.js');
goog.object.extend(proto, tensorflow_core_framework_attr_value_pb);
goog.exportSymbol('proto.tensorflow.KernelDef', null, global);
goog.exportSymbol('proto.tensorflow.KernelDef.AttrConstraint', null, global);
goog.exportSymbol('proto.tensorflow.KernelList', null, global);
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
proto.tensorflow.KernelDef = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tensorflow.KernelDef.repeatedFields_, null);
};
goog.inherits(proto.tensorflow.KernelDef, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tensorflow.KernelDef.displayName = 'proto.tensorflow.KernelDef';
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
proto.tensorflow.KernelDef.AttrConstraint = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tensorflow.KernelDef.AttrConstraint, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tensorflow.KernelDef.AttrConstraint.displayName = 'proto.tensorflow.KernelDef.AttrConstraint';
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
proto.tensorflow.KernelList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tensorflow.KernelList.repeatedFields_, null);
};
goog.inherits(proto.tensorflow.KernelList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tensorflow.KernelList.displayName = 'proto.tensorflow.KernelList';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tensorflow.KernelDef.repeatedFields_ = [3,4];



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
proto.tensorflow.KernelDef.prototype.toObject = function(opt_includeInstance) {
  return proto.tensorflow.KernelDef.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tensorflow.KernelDef} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tensorflow.KernelDef.toObject = function(includeInstance, msg) {
  var f, obj = {
    op: jspb.Message.getFieldWithDefault(msg, 1, ""),
    deviceType: jspb.Message.getFieldWithDefault(msg, 2, ""),
    constraintList: jspb.Message.toObjectList(msg.getConstraintList(),
    proto.tensorflow.KernelDef.AttrConstraint.toObject, includeInstance),
    hostMemoryArgList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f,
    label: jspb.Message.getFieldWithDefault(msg, 5, ""),
    priority: jspb.Message.getFieldWithDefault(msg, 6, 0)
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
 * @return {!proto.tensorflow.KernelDef}
 */
proto.tensorflow.KernelDef.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tensorflow.KernelDef;
  return proto.tensorflow.KernelDef.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tensorflow.KernelDef} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tensorflow.KernelDef}
 */
proto.tensorflow.KernelDef.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOp(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDeviceType(value);
      break;
    case 3:
      var value = new proto.tensorflow.KernelDef.AttrConstraint;
      reader.readMessage(value,proto.tensorflow.KernelDef.AttrConstraint.deserializeBinaryFromReader);
      msg.addConstraint(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.addHostMemoryArg(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setLabel(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPriority(value);
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
proto.tensorflow.KernelDef.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tensorflow.KernelDef.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tensorflow.KernelDef} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tensorflow.KernelDef.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOp();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDeviceType();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getConstraintList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.tensorflow.KernelDef.AttrConstraint.serializeBinaryToWriter
    );
  }
  f = message.getHostMemoryArgList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      4,
      f
    );
  }
  f = message.getLabel();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getPriority();
  if (f !== 0) {
    writer.writeInt32(
      6,
      f
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
proto.tensorflow.KernelDef.AttrConstraint.prototype.toObject = function(opt_includeInstance) {
  return proto.tensorflow.KernelDef.AttrConstraint.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tensorflow.KernelDef.AttrConstraint} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tensorflow.KernelDef.AttrConstraint.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    allowedValues: (f = msg.getAllowedValues()) && tensorflow_core_framework_attr_value_pb.AttrValue.toObject(includeInstance, f)
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
 * @return {!proto.tensorflow.KernelDef.AttrConstraint}
 */
proto.tensorflow.KernelDef.AttrConstraint.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tensorflow.KernelDef.AttrConstraint;
  return proto.tensorflow.KernelDef.AttrConstraint.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tensorflow.KernelDef.AttrConstraint} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tensorflow.KernelDef.AttrConstraint}
 */
proto.tensorflow.KernelDef.AttrConstraint.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = new tensorflow_core_framework_attr_value_pb.AttrValue;
      reader.readMessage(value,tensorflow_core_framework_attr_value_pb.AttrValue.deserializeBinaryFromReader);
      msg.setAllowedValues(value);
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
proto.tensorflow.KernelDef.AttrConstraint.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tensorflow.KernelDef.AttrConstraint.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tensorflow.KernelDef.AttrConstraint} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tensorflow.KernelDef.AttrConstraint.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAllowedValues();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      tensorflow_core_framework_attr_value_pb.AttrValue.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.tensorflow.KernelDef.AttrConstraint.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.tensorflow.KernelDef.AttrConstraint} returns this
 */
proto.tensorflow.KernelDef.AttrConstraint.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional AttrValue allowed_values = 2;
 * @return {?proto.tensorflow.AttrValue}
 */
proto.tensorflow.KernelDef.AttrConstraint.prototype.getAllowedValues = function() {
  return /** @type{?proto.tensorflow.AttrValue} */ (
    jspb.Message.getWrapperField(this, tensorflow_core_framework_attr_value_pb.AttrValue, 2));
};


/**
 * @param {?proto.tensorflow.AttrValue|undefined} value
 * @return {!proto.tensorflow.KernelDef.AttrConstraint} returns this
*/
proto.tensorflow.KernelDef.AttrConstraint.prototype.setAllowedValues = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tensorflow.KernelDef.AttrConstraint} returns this
 */
proto.tensorflow.KernelDef.AttrConstraint.prototype.clearAllowedValues = function() {
  return this.setAllowedValues(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tensorflow.KernelDef.AttrConstraint.prototype.hasAllowedValues = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string op = 1;
 * @return {string}
 */
proto.tensorflow.KernelDef.prototype.getOp = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.tensorflow.KernelDef} returns this
 */
proto.tensorflow.KernelDef.prototype.setOp = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string device_type = 2;
 * @return {string}
 */
proto.tensorflow.KernelDef.prototype.getDeviceType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.tensorflow.KernelDef} returns this
 */
proto.tensorflow.KernelDef.prototype.setDeviceType = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated AttrConstraint constraint = 3;
 * @return {!Array<!proto.tensorflow.KernelDef.AttrConstraint>}
 */
proto.tensorflow.KernelDef.prototype.getConstraintList = function() {
  return /** @type{!Array<!proto.tensorflow.KernelDef.AttrConstraint>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.tensorflow.KernelDef.AttrConstraint, 3));
};


/**
 * @param {!Array<!proto.tensorflow.KernelDef.AttrConstraint>} value
 * @return {!proto.tensorflow.KernelDef} returns this
*/
proto.tensorflow.KernelDef.prototype.setConstraintList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.tensorflow.KernelDef.AttrConstraint=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tensorflow.KernelDef.AttrConstraint}
 */
proto.tensorflow.KernelDef.prototype.addConstraint = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.tensorflow.KernelDef.AttrConstraint, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tensorflow.KernelDef} returns this
 */
proto.tensorflow.KernelDef.prototype.clearConstraintList = function() {
  return this.setConstraintList([]);
};


/**
 * repeated string host_memory_arg = 4;
 * @return {!Array<string>}
 */
proto.tensorflow.KernelDef.prototype.getHostMemoryArgList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.tensorflow.KernelDef} returns this
 */
proto.tensorflow.KernelDef.prototype.setHostMemoryArgList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.tensorflow.KernelDef} returns this
 */
proto.tensorflow.KernelDef.prototype.addHostMemoryArg = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tensorflow.KernelDef} returns this
 */
proto.tensorflow.KernelDef.prototype.clearHostMemoryArgList = function() {
  return this.setHostMemoryArgList([]);
};


/**
 * optional string label = 5;
 * @return {string}
 */
proto.tensorflow.KernelDef.prototype.getLabel = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.tensorflow.KernelDef} returns this
 */
proto.tensorflow.KernelDef.prototype.setLabel = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional int32 priority = 6;
 * @return {number}
 */
proto.tensorflow.KernelDef.prototype.getPriority = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.tensorflow.KernelDef} returns this
 */
proto.tensorflow.KernelDef.prototype.setPriority = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tensorflow.KernelList.repeatedFields_ = [1];



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
proto.tensorflow.KernelList.prototype.toObject = function(opt_includeInstance) {
  return proto.tensorflow.KernelList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tensorflow.KernelList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tensorflow.KernelList.toObject = function(includeInstance, msg) {
  var f, obj = {
    kernelList: jspb.Message.toObjectList(msg.getKernelList(),
    proto.tensorflow.KernelDef.toObject, includeInstance)
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
 * @return {!proto.tensorflow.KernelList}
 */
proto.tensorflow.KernelList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tensorflow.KernelList;
  return proto.tensorflow.KernelList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tensorflow.KernelList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tensorflow.KernelList}
 */
proto.tensorflow.KernelList.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.tensorflow.KernelDef;
      reader.readMessage(value,proto.tensorflow.KernelDef.deserializeBinaryFromReader);
      msg.addKernel(value);
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
proto.tensorflow.KernelList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tensorflow.KernelList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tensorflow.KernelList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tensorflow.KernelList.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKernelList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.tensorflow.KernelDef.serializeBinaryToWriter
    );
  }
};


/**
 * repeated KernelDef kernel = 1;
 * @return {!Array<!proto.tensorflow.KernelDef>}
 */
proto.tensorflow.KernelList.prototype.getKernelList = function() {
  return /** @type{!Array<!proto.tensorflow.KernelDef>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.tensorflow.KernelDef, 1));
};


/**
 * @param {!Array<!proto.tensorflow.KernelDef>} value
 * @return {!proto.tensorflow.KernelList} returns this
*/
proto.tensorflow.KernelList.prototype.setKernelList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.tensorflow.KernelDef=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tensorflow.KernelDef}
 */
proto.tensorflow.KernelList.prototype.addKernel = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.tensorflow.KernelDef, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tensorflow.KernelList} returns this
 */
proto.tensorflow.KernelList.prototype.clearKernelList = function() {
  return this.setKernelList([]);
};


goog.object.extend(exports, proto.tensorflow);
