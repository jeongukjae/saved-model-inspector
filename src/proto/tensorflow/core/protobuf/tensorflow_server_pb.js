// source: tensorflow/core/protobuf/tensorflow_server.proto
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

var tensorflow_core_protobuf_cluster_pb = require('../../../tensorflow/core/protobuf/cluster_pb.js');
goog.object.extend(proto, tensorflow_core_protobuf_cluster_pb);
var tensorflow_core_protobuf_config_pb = require('../../../tensorflow/core/protobuf/config_pb.js');
goog.object.extend(proto, tensorflow_core_protobuf_config_pb);
var tensorflow_core_protobuf_device_filters_pb = require('../../../tensorflow/core/protobuf/device_filters_pb.js');
goog.object.extend(proto, tensorflow_core_protobuf_device_filters_pb);
goog.exportSymbol('proto.tensorflow.ServerDef', null, global);
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
proto.tensorflow.ServerDef = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tensorflow.ServerDef, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tensorflow.ServerDef.displayName = 'proto.tensorflow.ServerDef';
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
proto.tensorflow.ServerDef.prototype.toObject = function(opt_includeInstance) {
  return proto.tensorflow.ServerDef.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tensorflow.ServerDef} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tensorflow.ServerDef.toObject = function(includeInstance, msg) {
  var f, obj = {
    cluster: (f = msg.getCluster()) && tensorflow_core_protobuf_cluster_pb.ClusterDef.toObject(includeInstance, f),
    jobName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    taskIndex: jspb.Message.getFieldWithDefault(msg, 3, 0),
    defaultSessionConfig: (f = msg.getDefaultSessionConfig()) && tensorflow_core_protobuf_config_pb.ConfigProto.toObject(includeInstance, f),
    protocol: jspb.Message.getFieldWithDefault(msg, 5, ""),
    port: jspb.Message.getFieldWithDefault(msg, 6, 0),
    clusterDeviceFilters: (f = msg.getClusterDeviceFilters()) && tensorflow_core_protobuf_device_filters_pb.ClusterDeviceFilters.toObject(includeInstance, f)
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
 * @return {!proto.tensorflow.ServerDef}
 */
proto.tensorflow.ServerDef.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tensorflow.ServerDef;
  return proto.tensorflow.ServerDef.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tensorflow.ServerDef} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tensorflow.ServerDef}
 */
proto.tensorflow.ServerDef.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new tensorflow_core_protobuf_cluster_pb.ClusterDef;
      reader.readMessage(value,tensorflow_core_protobuf_cluster_pb.ClusterDef.deserializeBinaryFromReader);
      msg.setCluster(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setJobName(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTaskIndex(value);
      break;
    case 4:
      var value = new tensorflow_core_protobuf_config_pb.ConfigProto;
      reader.readMessage(value,tensorflow_core_protobuf_config_pb.ConfigProto.deserializeBinaryFromReader);
      msg.setDefaultSessionConfig(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setProtocol(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPort(value);
      break;
    case 7:
      var value = new tensorflow_core_protobuf_device_filters_pb.ClusterDeviceFilters;
      reader.readMessage(value,tensorflow_core_protobuf_device_filters_pb.ClusterDeviceFilters.deserializeBinaryFromReader);
      msg.setClusterDeviceFilters(value);
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
proto.tensorflow.ServerDef.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tensorflow.ServerDef.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tensorflow.ServerDef} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tensorflow.ServerDef.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCluster();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      tensorflow_core_protobuf_cluster_pb.ClusterDef.serializeBinaryToWriter
    );
  }
  f = message.getJobName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTaskIndex();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getDefaultSessionConfig();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      tensorflow_core_protobuf_config_pb.ConfigProto.serializeBinaryToWriter
    );
  }
  f = message.getProtocol();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getPort();
  if (f !== 0) {
    writer.writeInt32(
      6,
      f
    );
  }
  f = message.getClusterDeviceFilters();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      tensorflow_core_protobuf_device_filters_pb.ClusterDeviceFilters.serializeBinaryToWriter
    );
  }
};


/**
 * optional ClusterDef cluster = 1;
 * @return {?proto.tensorflow.ClusterDef}
 */
proto.tensorflow.ServerDef.prototype.getCluster = function() {
  return /** @type{?proto.tensorflow.ClusterDef} */ (
    jspb.Message.getWrapperField(this, tensorflow_core_protobuf_cluster_pb.ClusterDef, 1));
};


/**
 * @param {?proto.tensorflow.ClusterDef|undefined} value
 * @return {!proto.tensorflow.ServerDef} returns this
*/
proto.tensorflow.ServerDef.prototype.setCluster = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tensorflow.ServerDef} returns this
 */
proto.tensorflow.ServerDef.prototype.clearCluster = function() {
  return this.setCluster(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tensorflow.ServerDef.prototype.hasCluster = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string job_name = 2;
 * @return {string}
 */
proto.tensorflow.ServerDef.prototype.getJobName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.tensorflow.ServerDef} returns this
 */
proto.tensorflow.ServerDef.prototype.setJobName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 task_index = 3;
 * @return {number}
 */
proto.tensorflow.ServerDef.prototype.getTaskIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.tensorflow.ServerDef} returns this
 */
proto.tensorflow.ServerDef.prototype.setTaskIndex = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional ConfigProto default_session_config = 4;
 * @return {?proto.tensorflow.ConfigProto}
 */
proto.tensorflow.ServerDef.prototype.getDefaultSessionConfig = function() {
  return /** @type{?proto.tensorflow.ConfigProto} */ (
    jspb.Message.getWrapperField(this, tensorflow_core_protobuf_config_pb.ConfigProto, 4));
};


/**
 * @param {?proto.tensorflow.ConfigProto|undefined} value
 * @return {!proto.tensorflow.ServerDef} returns this
*/
proto.tensorflow.ServerDef.prototype.setDefaultSessionConfig = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tensorflow.ServerDef} returns this
 */
proto.tensorflow.ServerDef.prototype.clearDefaultSessionConfig = function() {
  return this.setDefaultSessionConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tensorflow.ServerDef.prototype.hasDefaultSessionConfig = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string protocol = 5;
 * @return {string}
 */
proto.tensorflow.ServerDef.prototype.getProtocol = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.tensorflow.ServerDef} returns this
 */
proto.tensorflow.ServerDef.prototype.setProtocol = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional int32 port = 6;
 * @return {number}
 */
proto.tensorflow.ServerDef.prototype.getPort = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.tensorflow.ServerDef} returns this
 */
proto.tensorflow.ServerDef.prototype.setPort = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional ClusterDeviceFilters cluster_device_filters = 7;
 * @return {?proto.tensorflow.ClusterDeviceFilters}
 */
proto.tensorflow.ServerDef.prototype.getClusterDeviceFilters = function() {
  return /** @type{?proto.tensorflow.ClusterDeviceFilters} */ (
    jspb.Message.getWrapperField(this, tensorflow_core_protobuf_device_filters_pb.ClusterDeviceFilters, 7));
};


/**
 * @param {?proto.tensorflow.ClusterDeviceFilters|undefined} value
 * @return {!proto.tensorflow.ServerDef} returns this
*/
proto.tensorflow.ServerDef.prototype.setClusterDeviceFilters = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tensorflow.ServerDef} returns this
 */
proto.tensorflow.ServerDef.prototype.clearClusterDeviceFilters = function() {
  return this.setClusterDeviceFilters(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tensorflow.ServerDef.prototype.hasClusterDeviceFilters = function() {
  return jspb.Message.getField(this, 7) != null;
};


goog.object.extend(exports, proto.tensorflow);