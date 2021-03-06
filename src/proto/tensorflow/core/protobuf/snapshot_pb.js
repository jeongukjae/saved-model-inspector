// source: tensorflow/core/protobuf/snapshot.proto
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

var tensorflow_core_framework_tensor_pb = require('../../../tensorflow/core/framework/tensor_pb.js');
goog.object.extend(proto, tensorflow_core_framework_tensor_pb);
var tensorflow_core_framework_tensor_shape_pb = require('../../../tensorflow/core/framework/tensor_shape_pb.js');
goog.object.extend(proto, tensorflow_core_framework_tensor_shape_pb);
var tensorflow_core_framework_types_pb = require('../../../tensorflow/core/framework/types_pb.js');
goog.object.extend(proto, tensorflow_core_framework_types_pb);
goog.exportSymbol('proto.tensorflow.data.experimental.SnapshotMetadataRecord', null, global);
goog.exportSymbol('proto.tensorflow.data.experimental.SnapshotRecord', null, global);
goog.exportSymbol('proto.tensorflow.data.experimental.SnapshotTensorMetadata', null, global);
goog.exportSymbol('proto.tensorflow.data.experimental.TensorMetadata', null, global);
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
proto.tensorflow.data.experimental.SnapshotRecord = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tensorflow.data.experimental.SnapshotRecord.repeatedFields_, null);
};
goog.inherits(proto.tensorflow.data.experimental.SnapshotRecord, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tensorflow.data.experimental.SnapshotRecord.displayName = 'proto.tensorflow.data.experimental.SnapshotRecord';
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
proto.tensorflow.data.experimental.SnapshotMetadataRecord = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, 500, proto.tensorflow.data.experimental.SnapshotMetadataRecord.repeatedFields_, null);
};
goog.inherits(proto.tensorflow.data.experimental.SnapshotMetadataRecord, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tensorflow.data.experimental.SnapshotMetadataRecord.displayName = 'proto.tensorflow.data.experimental.SnapshotMetadataRecord';
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
proto.tensorflow.data.experimental.TensorMetadata = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tensorflow.data.experimental.TensorMetadata, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tensorflow.data.experimental.TensorMetadata.displayName = 'proto.tensorflow.data.experimental.TensorMetadata';
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
proto.tensorflow.data.experimental.SnapshotTensorMetadata = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tensorflow.data.experimental.SnapshotTensorMetadata.repeatedFields_, null);
};
goog.inherits(proto.tensorflow.data.experimental.SnapshotTensorMetadata, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tensorflow.data.experimental.SnapshotTensorMetadata.displayName = 'proto.tensorflow.data.experimental.SnapshotTensorMetadata';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tensorflow.data.experimental.SnapshotRecord.repeatedFields_ = [1];



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
proto.tensorflow.data.experimental.SnapshotRecord.prototype.toObject = function(opt_includeInstance) {
  return proto.tensorflow.data.experimental.SnapshotRecord.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tensorflow.data.experimental.SnapshotRecord} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tensorflow.data.experimental.SnapshotRecord.toObject = function(includeInstance, msg) {
  var f, obj = {
    tensorList: jspb.Message.toObjectList(msg.getTensorList(),
    tensorflow_core_framework_tensor_pb.TensorProto.toObject, includeInstance)
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
 * @return {!proto.tensorflow.data.experimental.SnapshotRecord}
 */
proto.tensorflow.data.experimental.SnapshotRecord.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tensorflow.data.experimental.SnapshotRecord;
  return proto.tensorflow.data.experimental.SnapshotRecord.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tensorflow.data.experimental.SnapshotRecord} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tensorflow.data.experimental.SnapshotRecord}
 */
proto.tensorflow.data.experimental.SnapshotRecord.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new tensorflow_core_framework_tensor_pb.TensorProto;
      reader.readMessage(value,tensorflow_core_framework_tensor_pb.TensorProto.deserializeBinaryFromReader);
      msg.addTensor(value);
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
proto.tensorflow.data.experimental.SnapshotRecord.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tensorflow.data.experimental.SnapshotRecord.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tensorflow.data.experimental.SnapshotRecord} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tensorflow.data.experimental.SnapshotRecord.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTensorList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      tensorflow_core_framework_tensor_pb.TensorProto.serializeBinaryToWriter
    );
  }
};


/**
 * repeated tensorflow.TensorProto tensor = 1;
 * @return {!Array<!proto.tensorflow.TensorProto>}
 */
proto.tensorflow.data.experimental.SnapshotRecord.prototype.getTensorList = function() {
  return /** @type{!Array<!proto.tensorflow.TensorProto>} */ (
    jspb.Message.getRepeatedWrapperField(this, tensorflow_core_framework_tensor_pb.TensorProto, 1));
};


/**
 * @param {!Array<!proto.tensorflow.TensorProto>} value
 * @return {!proto.tensorflow.data.experimental.SnapshotRecord} returns this
*/
proto.tensorflow.data.experimental.SnapshotRecord.prototype.setTensorList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.tensorflow.TensorProto=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tensorflow.TensorProto}
 */
proto.tensorflow.data.experimental.SnapshotRecord.prototype.addTensor = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.tensorflow.TensorProto, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tensorflow.data.experimental.SnapshotRecord} returns this
 */
proto.tensorflow.data.experimental.SnapshotRecord.prototype.clearTensorList = function() {
  return this.setTensorList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tensorflow.data.experimental.SnapshotMetadataRecord.repeatedFields_ = [5];



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
proto.tensorflow.data.experimental.SnapshotMetadataRecord.prototype.toObject = function(opt_includeInstance) {
  return proto.tensorflow.data.experimental.SnapshotMetadataRecord.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tensorflow.data.experimental.SnapshotMetadataRecord} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tensorflow.data.experimental.SnapshotMetadataRecord.toObject = function(includeInstance, msg) {
  var f, obj = {
    graphHash: jspb.Message.getFieldWithDefault(msg, 1, ""),
    runId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    creationTimestamp: jspb.Message.getFieldWithDefault(msg, 3, 0),
    version: jspb.Message.getFieldWithDefault(msg, 4, 0),
    dtypeList: (f = jspb.Message.getRepeatedField(msg, 5)) == null ? undefined : f,
    numElements: jspb.Message.getFieldWithDefault(msg, 6, 0),
    finalized: jspb.Message.getBooleanFieldWithDefault(msg, 1000, false)
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
 * @return {!proto.tensorflow.data.experimental.SnapshotMetadataRecord}
 */
proto.tensorflow.data.experimental.SnapshotMetadataRecord.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tensorflow.data.experimental.SnapshotMetadataRecord;
  return proto.tensorflow.data.experimental.SnapshotMetadataRecord.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tensorflow.data.experimental.SnapshotMetadataRecord} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tensorflow.data.experimental.SnapshotMetadataRecord}
 */
proto.tensorflow.data.experimental.SnapshotMetadataRecord.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setGraphHash(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setRunId(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCreationTimestamp(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setVersion(value);
      break;
    case 5:
      var values = /** @type {!Array<!proto.tensorflow.DataType>} */ (reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()]);
      for (var i = 0; i < values.length; i++) {
        msg.addDtype(values[i]);
      }
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setNumElements(value);
      break;
    case 1000:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setFinalized(value);
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
proto.tensorflow.data.experimental.SnapshotMetadataRecord.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tensorflow.data.experimental.SnapshotMetadataRecord.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tensorflow.data.experimental.SnapshotMetadataRecord} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tensorflow.data.experimental.SnapshotMetadataRecord.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGraphHash();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getRunId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getCreationTimestamp();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getVersion();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getDtypeList();
  if (f.length > 0) {
    writer.writePackedEnum(
      5,
      f
    );
  }
  f = message.getNumElements();
  if (f !== 0) {
    writer.writeInt64(
      6,
      f
    );
  }
  f = message.getFinalized();
  if (f) {
    writer.writeBool(
      1000,
      f
    );
  }
};


/**
 * optional string graph_hash = 1;
 * @return {string}
 */
proto.tensorflow.data.experimental.SnapshotMetadataRecord.prototype.getGraphHash = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.tensorflow.data.experimental.SnapshotMetadataRecord} returns this
 */
proto.tensorflow.data.experimental.SnapshotMetadataRecord.prototype.setGraphHash = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string run_id = 2;
 * @return {string}
 */
proto.tensorflow.data.experimental.SnapshotMetadataRecord.prototype.getRunId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.tensorflow.data.experimental.SnapshotMetadataRecord} returns this
 */
proto.tensorflow.data.experimental.SnapshotMetadataRecord.prototype.setRunId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int64 creation_timestamp = 3;
 * @return {number}
 */
proto.tensorflow.data.experimental.SnapshotMetadataRecord.prototype.getCreationTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.tensorflow.data.experimental.SnapshotMetadataRecord} returns this
 */
proto.tensorflow.data.experimental.SnapshotMetadataRecord.prototype.setCreationTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int64 version = 4;
 * @return {number}
 */
proto.tensorflow.data.experimental.SnapshotMetadataRecord.prototype.getVersion = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.tensorflow.data.experimental.SnapshotMetadataRecord} returns this
 */
proto.tensorflow.data.experimental.SnapshotMetadataRecord.prototype.setVersion = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * repeated tensorflow.DataType dtype = 5;
 * @return {!Array<!proto.tensorflow.DataType>}
 */
proto.tensorflow.data.experimental.SnapshotMetadataRecord.prototype.getDtypeList = function() {
  return /** @type {!Array<!proto.tensorflow.DataType>} */ (jspb.Message.getRepeatedField(this, 5));
};


/**
 * @param {!Array<!proto.tensorflow.DataType>} value
 * @return {!proto.tensorflow.data.experimental.SnapshotMetadataRecord} returns this
 */
proto.tensorflow.data.experimental.SnapshotMetadataRecord.prototype.setDtypeList = function(value) {
  return jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {!proto.tensorflow.DataType} value
 * @param {number=} opt_index
 * @return {!proto.tensorflow.data.experimental.SnapshotMetadataRecord} returns this
 */
proto.tensorflow.data.experimental.SnapshotMetadataRecord.prototype.addDtype = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tensorflow.data.experimental.SnapshotMetadataRecord} returns this
 */
proto.tensorflow.data.experimental.SnapshotMetadataRecord.prototype.clearDtypeList = function() {
  return this.setDtypeList([]);
};


/**
 * optional int64 num_elements = 6;
 * @return {number}
 */
proto.tensorflow.data.experimental.SnapshotMetadataRecord.prototype.getNumElements = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.tensorflow.data.experimental.SnapshotMetadataRecord} returns this
 */
proto.tensorflow.data.experimental.SnapshotMetadataRecord.prototype.setNumElements = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional bool finalized = 1000;
 * @return {boolean}
 */
proto.tensorflow.data.experimental.SnapshotMetadataRecord.prototype.getFinalized = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1000, false));
};


/**
 * @param {boolean} value
 * @return {!proto.tensorflow.data.experimental.SnapshotMetadataRecord} returns this
 */
proto.tensorflow.data.experimental.SnapshotMetadataRecord.prototype.setFinalized = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1000, value);
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
proto.tensorflow.data.experimental.TensorMetadata.prototype.toObject = function(opt_includeInstance) {
  return proto.tensorflow.data.experimental.TensorMetadata.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tensorflow.data.experimental.TensorMetadata} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tensorflow.data.experimental.TensorMetadata.toObject = function(includeInstance, msg) {
  var f, obj = {
    tensorShape: (f = msg.getTensorShape()) && tensorflow_core_framework_tensor_shape_pb.TensorShapeProto.toObject(includeInstance, f),
    tensorSizeBytes: jspb.Message.getFieldWithDefault(msg, 3, 0)
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
 * @return {!proto.tensorflow.data.experimental.TensorMetadata}
 */
proto.tensorflow.data.experimental.TensorMetadata.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tensorflow.data.experimental.TensorMetadata;
  return proto.tensorflow.data.experimental.TensorMetadata.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tensorflow.data.experimental.TensorMetadata} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tensorflow.data.experimental.TensorMetadata}
 */
proto.tensorflow.data.experimental.TensorMetadata.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = new tensorflow_core_framework_tensor_shape_pb.TensorShapeProto;
      reader.readMessage(value,tensorflow_core_framework_tensor_shape_pb.TensorShapeProto.deserializeBinaryFromReader);
      msg.setTensorShape(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTensorSizeBytes(value);
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
proto.tensorflow.data.experimental.TensorMetadata.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tensorflow.data.experimental.TensorMetadata.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tensorflow.data.experimental.TensorMetadata} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tensorflow.data.experimental.TensorMetadata.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTensorShape();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      tensorflow_core_framework_tensor_shape_pb.TensorShapeProto.serializeBinaryToWriter
    );
  }
  f = message.getTensorSizeBytes();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
};


/**
 * optional tensorflow.TensorShapeProto tensor_shape = 2;
 * @return {?proto.tensorflow.TensorShapeProto}
 */
proto.tensorflow.data.experimental.TensorMetadata.prototype.getTensorShape = function() {
  return /** @type{?proto.tensorflow.TensorShapeProto} */ (
    jspb.Message.getWrapperField(this, tensorflow_core_framework_tensor_shape_pb.TensorShapeProto, 2));
};


/**
 * @param {?proto.tensorflow.TensorShapeProto|undefined} value
 * @return {!proto.tensorflow.data.experimental.TensorMetadata} returns this
*/
proto.tensorflow.data.experimental.TensorMetadata.prototype.setTensorShape = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tensorflow.data.experimental.TensorMetadata} returns this
 */
proto.tensorflow.data.experimental.TensorMetadata.prototype.clearTensorShape = function() {
  return this.setTensorShape(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tensorflow.data.experimental.TensorMetadata.prototype.hasTensorShape = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int64 tensor_size_bytes = 3;
 * @return {number}
 */
proto.tensorflow.data.experimental.TensorMetadata.prototype.getTensorSizeBytes = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.tensorflow.data.experimental.TensorMetadata} returns this
 */
proto.tensorflow.data.experimental.TensorMetadata.prototype.setTensorSizeBytes = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tensorflow.data.experimental.SnapshotTensorMetadata.repeatedFields_ = [1];



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
proto.tensorflow.data.experimental.SnapshotTensorMetadata.prototype.toObject = function(opt_includeInstance) {
  return proto.tensorflow.data.experimental.SnapshotTensorMetadata.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tensorflow.data.experimental.SnapshotTensorMetadata} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tensorflow.data.experimental.SnapshotTensorMetadata.toObject = function(includeInstance, msg) {
  var f, obj = {
    tensorMetadataList: jspb.Message.toObjectList(msg.getTensorMetadataList(),
    proto.tensorflow.data.experimental.TensorMetadata.toObject, includeInstance)
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
 * @return {!proto.tensorflow.data.experimental.SnapshotTensorMetadata}
 */
proto.tensorflow.data.experimental.SnapshotTensorMetadata.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tensorflow.data.experimental.SnapshotTensorMetadata;
  return proto.tensorflow.data.experimental.SnapshotTensorMetadata.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tensorflow.data.experimental.SnapshotTensorMetadata} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tensorflow.data.experimental.SnapshotTensorMetadata}
 */
proto.tensorflow.data.experimental.SnapshotTensorMetadata.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.tensorflow.data.experimental.TensorMetadata;
      reader.readMessage(value,proto.tensorflow.data.experimental.TensorMetadata.deserializeBinaryFromReader);
      msg.addTensorMetadata(value);
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
proto.tensorflow.data.experimental.SnapshotTensorMetadata.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tensorflow.data.experimental.SnapshotTensorMetadata.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tensorflow.data.experimental.SnapshotTensorMetadata} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tensorflow.data.experimental.SnapshotTensorMetadata.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTensorMetadataList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.tensorflow.data.experimental.TensorMetadata.serializeBinaryToWriter
    );
  }
};


/**
 * repeated TensorMetadata tensor_metadata = 1;
 * @return {!Array<!proto.tensorflow.data.experimental.TensorMetadata>}
 */
proto.tensorflow.data.experimental.SnapshotTensorMetadata.prototype.getTensorMetadataList = function() {
  return /** @type{!Array<!proto.tensorflow.data.experimental.TensorMetadata>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.tensorflow.data.experimental.TensorMetadata, 1));
};


/**
 * @param {!Array<!proto.tensorflow.data.experimental.TensorMetadata>} value
 * @return {!proto.tensorflow.data.experimental.SnapshotTensorMetadata} returns this
*/
proto.tensorflow.data.experimental.SnapshotTensorMetadata.prototype.setTensorMetadataList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.tensorflow.data.experimental.TensorMetadata=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tensorflow.data.experimental.TensorMetadata}
 */
proto.tensorflow.data.experimental.SnapshotTensorMetadata.prototype.addTensorMetadata = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.tensorflow.data.experimental.TensorMetadata, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tensorflow.data.experimental.SnapshotTensorMetadata} returns this
 */
proto.tensorflow.data.experimental.SnapshotTensorMetadata.prototype.clearTensorMetadataList = function() {
  return this.setTensorMetadataList([]);
};


goog.object.extend(exports, proto.tensorflow.data.experimental);
