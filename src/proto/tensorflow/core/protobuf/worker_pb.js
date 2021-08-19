// source: tensorflow/core/protobuf/worker.proto
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

var google_protobuf_any_pb = require('google-protobuf/google/protobuf/any_pb.js');
goog.object.extend(proto, google_protobuf_any_pb);
var tensorflow_core_framework_cost_graph_pb = require('../../../tensorflow/core/framework/cost_graph_pb.js');
goog.object.extend(proto, tensorflow_core_framework_cost_graph_pb);
var tensorflow_core_framework_device_attributes_pb = require('../../../tensorflow/core/framework/device_attributes_pb.js');
goog.object.extend(proto, tensorflow_core_framework_device_attributes_pb);
var tensorflow_core_framework_graph_pb = require('../../../tensorflow/core/framework/graph_pb.js');
goog.object.extend(proto, tensorflow_core_framework_graph_pb);
var tensorflow_core_framework_step_stats_pb = require('../../../tensorflow/core/framework/step_stats_pb.js');
goog.object.extend(proto, tensorflow_core_framework_step_stats_pb);
var tensorflow_core_framework_tensor_pb = require('../../../tensorflow/core/framework/tensor_pb.js');
goog.object.extend(proto, tensorflow_core_framework_tensor_pb);
var tensorflow_core_framework_tensor_shape_pb = require('../../../tensorflow/core/framework/tensor_shape_pb.js');
goog.object.extend(proto, tensorflow_core_framework_tensor_shape_pb);
var tensorflow_core_framework_types_pb = require('../../../tensorflow/core/framework/types_pb.js');
goog.object.extend(proto, tensorflow_core_framework_types_pb);
var tensorflow_core_protobuf_config_pb = require('../../../tensorflow/core/protobuf/config_pb.js');
goog.object.extend(proto, tensorflow_core_protobuf_config_pb);
var tensorflow_core_protobuf_debug_pb = require('../../../tensorflow/core/protobuf/debug_pb.js');
goog.object.extend(proto, tensorflow_core_protobuf_debug_pb);
var tensorflow_core_protobuf_error_codes_pb = require('../../../tensorflow/core/protobuf/error_codes_pb.js');
goog.object.extend(proto, tensorflow_core_protobuf_error_codes_pb);
var tensorflow_core_protobuf_named_tensor_pb = require('../../../tensorflow/core/protobuf/named_tensor_pb.js');
goog.object.extend(proto, tensorflow_core_protobuf_named_tensor_pb);
var tensorflow_core_protobuf_tensorflow_server_pb = require('../../../tensorflow/core/protobuf/tensorflow_server_pb.js');
goog.object.extend(proto, tensorflow_core_protobuf_tensorflow_server_pb);
goog.exportSymbol('proto.tensorflow.CleanupAllRequest', null, global);
goog.exportSymbol('proto.tensorflow.CleanupAllResponse', null, global);
goog.exportSymbol('proto.tensorflow.CleanupGraphRequest', null, global);
goog.exportSymbol('proto.tensorflow.CleanupGraphResponse', null, global);
goog.exportSymbol('proto.tensorflow.CompleteGroupRequest', null, global);
goog.exportSymbol('proto.tensorflow.CompleteGroupResponse', null, global);
goog.exportSymbol('proto.tensorflow.CompleteInstanceRequest', null, global);
goog.exportSymbol('proto.tensorflow.CompleteInstanceResponse', null, global);
goog.exportSymbol('proto.tensorflow.CreateWorkerSessionRequest', null, global);
goog.exportSymbol('proto.tensorflow.CreateWorkerSessionResponse', null, global);
goog.exportSymbol('proto.tensorflow.DeleteWorkerSessionRequest', null, global);
goog.exportSymbol('proto.tensorflow.DeleteWorkerSessionResponse', null, global);
goog.exportSymbol('proto.tensorflow.DeregisterGraphRequest', null, global);
goog.exportSymbol('proto.tensorflow.DeregisterGraphResponse', null, global);
goog.exportSymbol('proto.tensorflow.ExecutorOpts', null, global);
goog.exportSymbol('proto.tensorflow.GetStatusRequest', null, global);
goog.exportSymbol('proto.tensorflow.GetStatusResponse', null, global);
goog.exportSymbol('proto.tensorflow.GetStepSequenceRequest', null, global);
goog.exportSymbol('proto.tensorflow.GetStepSequenceResponse', null, global);
goog.exportSymbol('proto.tensorflow.LabeledStepStats', null, global);
goog.exportSymbol('proto.tensorflow.LoggingRequest', null, global);
goog.exportSymbol('proto.tensorflow.LoggingResponse', null, global);
goog.exportSymbol('proto.tensorflow.MarkRecvFinishedRequest', null, global);
goog.exportSymbol('proto.tensorflow.MarkRecvFinishedResponse', null, global);
goog.exportSymbol('proto.tensorflow.RecvBufRequest', null, global);
goog.exportSymbol('proto.tensorflow.RecvBufResponse', null, global);
goog.exportSymbol('proto.tensorflow.RecvTensorRequest', null, global);
goog.exportSymbol('proto.tensorflow.RecvTensorResponse', null, global);
goog.exportSymbol('proto.tensorflow.RegisterGraphRequest', null, global);
goog.exportSymbol('proto.tensorflow.RegisterGraphResponse', null, global);
goog.exportSymbol('proto.tensorflow.RunGraphRequest', null, global);
goog.exportSymbol('proto.tensorflow.RunGraphResponse', null, global);
goog.exportSymbol('proto.tensorflow.StepSequence', null, global);
goog.exportSymbol('proto.tensorflow.TraceOpts', null, global);
goog.exportSymbol('proto.tensorflow.TracingRequest', null, global);
goog.exportSymbol('proto.tensorflow.TracingResponse', null, global);
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
proto.tensorflow.GetStatusRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tensorflow.GetStatusRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tensorflow.GetStatusRequest.displayName = 'proto.tensorflow.GetStatusRequest';
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
proto.tensorflow.GetStatusResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tensorflow.GetStatusResponse.repeatedFields_, null);
};
goog.inherits(proto.tensorflow.GetStatusResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tensorflow.GetStatusResponse.displayName = 'proto.tensorflow.GetStatusResponse';
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
proto.tensorflow.CreateWorkerSessionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tensorflow.CreateWorkerSessionRequest.repeatedFields_, null);
};
goog.inherits(proto.tensorflow.CreateWorkerSessionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tensorflow.CreateWorkerSessionRequest.displayName = 'proto.tensorflow.CreateWorkerSessionRequest';
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
proto.tensorflow.CreateWorkerSessionResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tensorflow.CreateWorkerSessionResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tensorflow.CreateWorkerSessionResponse.displayName = 'proto.tensorflow.CreateWorkerSessionResponse';
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
proto.tensorflow.DeleteWorkerSessionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tensorflow.DeleteWorkerSessionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tensorflow.DeleteWorkerSessionRequest.displayName = 'proto.tensorflow.DeleteWorkerSessionRequest';
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
proto.tensorflow.DeleteWorkerSessionResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tensorflow.DeleteWorkerSessionResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tensorflow.DeleteWorkerSessionResponse.displayName = 'proto.tensorflow.DeleteWorkerSessionResponse';
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
proto.tensorflow.RegisterGraphRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tensorflow.RegisterGraphRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tensorflow.RegisterGraphRequest.displayName = 'proto.tensorflow.RegisterGraphRequest';
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
proto.tensorflow.RegisterGraphResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tensorflow.RegisterGraphResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tensorflow.RegisterGraphResponse.displayName = 'proto.tensorflow.RegisterGraphResponse';
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
proto.tensorflow.DeregisterGraphRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tensorflow.DeregisterGraphRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tensorflow.DeregisterGraphRequest.displayName = 'proto.tensorflow.DeregisterGraphRequest';
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
proto.tensorflow.DeregisterGraphResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tensorflow.DeregisterGraphResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tensorflow.DeregisterGraphResponse.displayName = 'proto.tensorflow.DeregisterGraphResponse';
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
proto.tensorflow.CleanupAllRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tensorflow.CleanupAllRequest.repeatedFields_, null);
};
goog.inherits(proto.tensorflow.CleanupAllRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tensorflow.CleanupAllRequest.displayName = 'proto.tensorflow.CleanupAllRequest';
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
proto.tensorflow.CleanupAllResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tensorflow.CleanupAllResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tensorflow.CleanupAllResponse.displayName = 'proto.tensorflow.CleanupAllResponse';
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
proto.tensorflow.ExecutorOpts = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tensorflow.ExecutorOpts, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tensorflow.ExecutorOpts.displayName = 'proto.tensorflow.ExecutorOpts';
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
proto.tensorflow.RunGraphRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tensorflow.RunGraphRequest.repeatedFields_, null);
};
goog.inherits(proto.tensorflow.RunGraphRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tensorflow.RunGraphRequest.displayName = 'proto.tensorflow.RunGraphRequest';
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
proto.tensorflow.RunGraphResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tensorflow.RunGraphResponse.repeatedFields_, null);
};
goog.inherits(proto.tensorflow.RunGraphResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tensorflow.RunGraphResponse.displayName = 'proto.tensorflow.RunGraphResponse';
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
proto.tensorflow.CleanupGraphRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tensorflow.CleanupGraphRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tensorflow.CleanupGraphRequest.displayName = 'proto.tensorflow.CleanupGraphRequest';
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
proto.tensorflow.CleanupGraphResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tensorflow.CleanupGraphResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tensorflow.CleanupGraphResponse.displayName = 'proto.tensorflow.CleanupGraphResponse';
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
proto.tensorflow.RecvTensorRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tensorflow.RecvTensorRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tensorflow.RecvTensorRequest.displayName = 'proto.tensorflow.RecvTensorRequest';
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
proto.tensorflow.RecvTensorResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tensorflow.RecvTensorResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tensorflow.RecvTensorResponse.displayName = 'proto.tensorflow.RecvTensorResponse';
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
proto.tensorflow.MarkRecvFinishedRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tensorflow.MarkRecvFinishedRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tensorflow.MarkRecvFinishedRequest.displayName = 'proto.tensorflow.MarkRecvFinishedRequest';
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
proto.tensorflow.MarkRecvFinishedResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tensorflow.MarkRecvFinishedResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tensorflow.MarkRecvFinishedResponse.displayName = 'proto.tensorflow.MarkRecvFinishedResponse';
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
proto.tensorflow.LoggingRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tensorflow.LoggingRequest.repeatedFields_, null);
};
goog.inherits(proto.tensorflow.LoggingRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tensorflow.LoggingRequest.displayName = 'proto.tensorflow.LoggingRequest';
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
proto.tensorflow.LabeledStepStats = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tensorflow.LabeledStepStats, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tensorflow.LabeledStepStats.displayName = 'proto.tensorflow.LabeledStepStats';
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
proto.tensorflow.LoggingResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tensorflow.LoggingResponse.repeatedFields_, null);
};
goog.inherits(proto.tensorflow.LoggingResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tensorflow.LoggingResponse.displayName = 'proto.tensorflow.LoggingResponse';
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
proto.tensorflow.TraceOpts = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tensorflow.TraceOpts, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tensorflow.TraceOpts.displayName = 'proto.tensorflow.TraceOpts';
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
proto.tensorflow.TracingRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tensorflow.TracingRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tensorflow.TracingRequest.displayName = 'proto.tensorflow.TracingRequest';
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
proto.tensorflow.TracingResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tensorflow.TracingResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tensorflow.TracingResponse.displayName = 'proto.tensorflow.TracingResponse';
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
proto.tensorflow.RecvBufRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tensorflow.RecvBufRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tensorflow.RecvBufRequest.displayName = 'proto.tensorflow.RecvBufRequest';
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
proto.tensorflow.RecvBufResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tensorflow.RecvBufResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tensorflow.RecvBufResponse.displayName = 'proto.tensorflow.RecvBufResponse';
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
proto.tensorflow.CompleteGroupRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tensorflow.CompleteGroupRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tensorflow.CompleteGroupRequest.displayName = 'proto.tensorflow.CompleteGroupRequest';
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
proto.tensorflow.CompleteGroupResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tensorflow.CompleteGroupResponse.repeatedFields_, null);
};
goog.inherits(proto.tensorflow.CompleteGroupResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tensorflow.CompleteGroupResponse.displayName = 'proto.tensorflow.CompleteGroupResponse';
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
proto.tensorflow.CompleteInstanceRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tensorflow.CompleteInstanceRequest.repeatedFields_, null);
};
goog.inherits(proto.tensorflow.CompleteInstanceRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tensorflow.CompleteInstanceRequest.displayName = 'proto.tensorflow.CompleteInstanceRequest';
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
proto.tensorflow.CompleteInstanceResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tensorflow.CompleteInstanceResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tensorflow.CompleteInstanceResponse.displayName = 'proto.tensorflow.CompleteInstanceResponse';
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
proto.tensorflow.GetStepSequenceRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tensorflow.GetStepSequenceRequest.repeatedFields_, null);
};
goog.inherits(proto.tensorflow.GetStepSequenceRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tensorflow.GetStepSequenceRequest.displayName = 'proto.tensorflow.GetStepSequenceRequest';
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
proto.tensorflow.StepSequence = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.tensorflow.StepSequence, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tensorflow.StepSequence.displayName = 'proto.tensorflow.StepSequence';
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
proto.tensorflow.GetStepSequenceResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.tensorflow.GetStepSequenceResponse.repeatedFields_, null);
};
goog.inherits(proto.tensorflow.GetStepSequenceResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.tensorflow.GetStepSequenceResponse.displayName = 'proto.tensorflow.GetStepSequenceResponse';
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
proto.tensorflow.GetStatusRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tensorflow.GetStatusRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tensorflow.GetStatusRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tensorflow.GetStatusRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

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
 * @return {!proto.tensorflow.GetStatusRequest}
 */
proto.tensorflow.GetStatusRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tensorflow.GetStatusRequest;
  return proto.tensorflow.GetStatusRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tensorflow.GetStatusRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tensorflow.GetStatusRequest}
 */
proto.tensorflow.GetStatusRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
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
proto.tensorflow.GetStatusRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tensorflow.GetStatusRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tensorflow.GetStatusRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tensorflow.GetStatusRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tensorflow.GetStatusResponse.repeatedFields_ = [1];



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
proto.tensorflow.GetStatusResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.tensorflow.GetStatusResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tensorflow.GetStatusResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tensorflow.GetStatusResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    deviceAttributesList: jspb.Message.toObjectList(msg.getDeviceAttributesList(),
    tensorflow_core_framework_device_attributes_pb.DeviceAttributes.toObject, includeInstance)
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
 * @return {!proto.tensorflow.GetStatusResponse}
 */
proto.tensorflow.GetStatusResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tensorflow.GetStatusResponse;
  return proto.tensorflow.GetStatusResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tensorflow.GetStatusResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tensorflow.GetStatusResponse}
 */
proto.tensorflow.GetStatusResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new tensorflow_core_framework_device_attributes_pb.DeviceAttributes;
      reader.readMessage(value,tensorflow_core_framework_device_attributes_pb.DeviceAttributes.deserializeBinaryFromReader);
      msg.addDeviceAttributes(value);
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
proto.tensorflow.GetStatusResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tensorflow.GetStatusResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tensorflow.GetStatusResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tensorflow.GetStatusResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDeviceAttributesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      tensorflow_core_framework_device_attributes_pb.DeviceAttributes.serializeBinaryToWriter
    );
  }
};


/**
 * repeated DeviceAttributes device_attributes = 1;
 * @return {!Array<!proto.tensorflow.DeviceAttributes>}
 */
proto.tensorflow.GetStatusResponse.prototype.getDeviceAttributesList = function() {
  return /** @type{!Array<!proto.tensorflow.DeviceAttributes>} */ (
    jspb.Message.getRepeatedWrapperField(this, tensorflow_core_framework_device_attributes_pb.DeviceAttributes, 1));
};


/**
 * @param {!Array<!proto.tensorflow.DeviceAttributes>} value
 * @return {!proto.tensorflow.GetStatusResponse} returns this
*/
proto.tensorflow.GetStatusResponse.prototype.setDeviceAttributesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.tensorflow.DeviceAttributes=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tensorflow.DeviceAttributes}
 */
proto.tensorflow.GetStatusResponse.prototype.addDeviceAttributes = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.tensorflow.DeviceAttributes, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tensorflow.GetStatusResponse} returns this
 */
proto.tensorflow.GetStatusResponse.prototype.clearDeviceAttributesList = function() {
  return this.setDeviceAttributesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tensorflow.CreateWorkerSessionRequest.repeatedFields_ = [4];



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
proto.tensorflow.CreateWorkerSessionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tensorflow.CreateWorkerSessionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tensorflow.CreateWorkerSessionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tensorflow.CreateWorkerSessionRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    sessionHandle: jspb.Message.getFieldWithDefault(msg, 1, ""),
    serverDef: (f = msg.getServerDef()) && tensorflow_core_protobuf_tensorflow_server_pb.ServerDef.toObject(includeInstance, f),
    isolateSessionState: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    clusterDeviceAttributesList: jspb.Message.toObjectList(msg.getClusterDeviceAttributesList(),
    tensorflow_core_framework_device_attributes_pb.DeviceAttributes.toObject, includeInstance),
    masterTask: jspb.Message.getFieldWithDefault(msg, 5, ""),
    masterIncarnation: jspb.Message.getFieldWithDefault(msg, 6, 0)
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
 * @return {!proto.tensorflow.CreateWorkerSessionRequest}
 */
proto.tensorflow.CreateWorkerSessionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tensorflow.CreateWorkerSessionRequest;
  return proto.tensorflow.CreateWorkerSessionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tensorflow.CreateWorkerSessionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tensorflow.CreateWorkerSessionRequest}
 */
proto.tensorflow.CreateWorkerSessionRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSessionHandle(value);
      break;
    case 2:
      var value = new tensorflow_core_protobuf_tensorflow_server_pb.ServerDef;
      reader.readMessage(value,tensorflow_core_protobuf_tensorflow_server_pb.ServerDef.deserializeBinaryFromReader);
      msg.setServerDef(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsolateSessionState(value);
      break;
    case 4:
      var value = new tensorflow_core_framework_device_attributes_pb.DeviceAttributes;
      reader.readMessage(value,tensorflow_core_framework_device_attributes_pb.DeviceAttributes.deserializeBinaryFromReader);
      msg.addClusterDeviceAttributes(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setMasterTask(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setMasterIncarnation(value);
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
proto.tensorflow.CreateWorkerSessionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tensorflow.CreateWorkerSessionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tensorflow.CreateWorkerSessionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tensorflow.CreateWorkerSessionRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSessionHandle();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getServerDef();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      tensorflow_core_protobuf_tensorflow_server_pb.ServerDef.serializeBinaryToWriter
    );
  }
  f = message.getIsolateSessionState();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getClusterDeviceAttributesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      tensorflow_core_framework_device_attributes_pb.DeviceAttributes.serializeBinaryToWriter
    );
  }
  f = message.getMasterTask();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getMasterIncarnation();
  if (f !== 0) {
    writer.writeInt64(
      6,
      f
    );
  }
};


/**
 * optional string session_handle = 1;
 * @return {string}
 */
proto.tensorflow.CreateWorkerSessionRequest.prototype.getSessionHandle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.tensorflow.CreateWorkerSessionRequest} returns this
 */
proto.tensorflow.CreateWorkerSessionRequest.prototype.setSessionHandle = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional ServerDef server_def = 2;
 * @return {?proto.tensorflow.ServerDef}
 */
proto.tensorflow.CreateWorkerSessionRequest.prototype.getServerDef = function() {
  return /** @type{?proto.tensorflow.ServerDef} */ (
    jspb.Message.getWrapperField(this, tensorflow_core_protobuf_tensorflow_server_pb.ServerDef, 2));
};


/**
 * @param {?proto.tensorflow.ServerDef|undefined} value
 * @return {!proto.tensorflow.CreateWorkerSessionRequest} returns this
*/
proto.tensorflow.CreateWorkerSessionRequest.prototype.setServerDef = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tensorflow.CreateWorkerSessionRequest} returns this
 */
proto.tensorflow.CreateWorkerSessionRequest.prototype.clearServerDef = function() {
  return this.setServerDef(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tensorflow.CreateWorkerSessionRequest.prototype.hasServerDef = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bool isolate_session_state = 3;
 * @return {boolean}
 */
proto.tensorflow.CreateWorkerSessionRequest.prototype.getIsolateSessionState = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.tensorflow.CreateWorkerSessionRequest} returns this
 */
proto.tensorflow.CreateWorkerSessionRequest.prototype.setIsolateSessionState = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * repeated DeviceAttributes cluster_device_attributes = 4;
 * @return {!Array<!proto.tensorflow.DeviceAttributes>}
 */
proto.tensorflow.CreateWorkerSessionRequest.prototype.getClusterDeviceAttributesList = function() {
  return /** @type{!Array<!proto.tensorflow.DeviceAttributes>} */ (
    jspb.Message.getRepeatedWrapperField(this, tensorflow_core_framework_device_attributes_pb.DeviceAttributes, 4));
};


/**
 * @param {!Array<!proto.tensorflow.DeviceAttributes>} value
 * @return {!proto.tensorflow.CreateWorkerSessionRequest} returns this
*/
proto.tensorflow.CreateWorkerSessionRequest.prototype.setClusterDeviceAttributesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.tensorflow.DeviceAttributes=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tensorflow.DeviceAttributes}
 */
proto.tensorflow.CreateWorkerSessionRequest.prototype.addClusterDeviceAttributes = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.tensorflow.DeviceAttributes, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tensorflow.CreateWorkerSessionRequest} returns this
 */
proto.tensorflow.CreateWorkerSessionRequest.prototype.clearClusterDeviceAttributesList = function() {
  return this.setClusterDeviceAttributesList([]);
};


/**
 * optional string master_task = 5;
 * @return {string}
 */
proto.tensorflow.CreateWorkerSessionRequest.prototype.getMasterTask = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.tensorflow.CreateWorkerSessionRequest} returns this
 */
proto.tensorflow.CreateWorkerSessionRequest.prototype.setMasterTask = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional int64 master_incarnation = 6;
 * @return {number}
 */
proto.tensorflow.CreateWorkerSessionRequest.prototype.getMasterIncarnation = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.tensorflow.CreateWorkerSessionRequest} returns this
 */
proto.tensorflow.CreateWorkerSessionRequest.prototype.setMasterIncarnation = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
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
proto.tensorflow.CreateWorkerSessionResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.tensorflow.CreateWorkerSessionResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tensorflow.CreateWorkerSessionResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tensorflow.CreateWorkerSessionResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

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
 * @return {!proto.tensorflow.CreateWorkerSessionResponse}
 */
proto.tensorflow.CreateWorkerSessionResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tensorflow.CreateWorkerSessionResponse;
  return proto.tensorflow.CreateWorkerSessionResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tensorflow.CreateWorkerSessionResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tensorflow.CreateWorkerSessionResponse}
 */
proto.tensorflow.CreateWorkerSessionResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
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
proto.tensorflow.CreateWorkerSessionResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tensorflow.CreateWorkerSessionResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tensorflow.CreateWorkerSessionResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tensorflow.CreateWorkerSessionResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
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
proto.tensorflow.DeleteWorkerSessionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tensorflow.DeleteWorkerSessionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tensorflow.DeleteWorkerSessionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tensorflow.DeleteWorkerSessionRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    sessionHandle: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.tensorflow.DeleteWorkerSessionRequest}
 */
proto.tensorflow.DeleteWorkerSessionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tensorflow.DeleteWorkerSessionRequest;
  return proto.tensorflow.DeleteWorkerSessionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tensorflow.DeleteWorkerSessionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tensorflow.DeleteWorkerSessionRequest}
 */
proto.tensorflow.DeleteWorkerSessionRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSessionHandle(value);
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
proto.tensorflow.DeleteWorkerSessionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tensorflow.DeleteWorkerSessionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tensorflow.DeleteWorkerSessionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tensorflow.DeleteWorkerSessionRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSessionHandle();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string session_handle = 1;
 * @return {string}
 */
proto.tensorflow.DeleteWorkerSessionRequest.prototype.getSessionHandle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.tensorflow.DeleteWorkerSessionRequest} returns this
 */
proto.tensorflow.DeleteWorkerSessionRequest.prototype.setSessionHandle = function(value) {
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
proto.tensorflow.DeleteWorkerSessionResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.tensorflow.DeleteWorkerSessionResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tensorflow.DeleteWorkerSessionResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tensorflow.DeleteWorkerSessionResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

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
 * @return {!proto.tensorflow.DeleteWorkerSessionResponse}
 */
proto.tensorflow.DeleteWorkerSessionResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tensorflow.DeleteWorkerSessionResponse;
  return proto.tensorflow.DeleteWorkerSessionResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tensorflow.DeleteWorkerSessionResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tensorflow.DeleteWorkerSessionResponse}
 */
proto.tensorflow.DeleteWorkerSessionResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
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
proto.tensorflow.DeleteWorkerSessionResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tensorflow.DeleteWorkerSessionResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tensorflow.DeleteWorkerSessionResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tensorflow.DeleteWorkerSessionResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
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
proto.tensorflow.RegisterGraphRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tensorflow.RegisterGraphRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tensorflow.RegisterGraphRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tensorflow.RegisterGraphRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    sessionHandle: jspb.Message.getFieldWithDefault(msg, 1, ""),
    createWorkerSessionCalled: jspb.Message.getBooleanFieldWithDefault(msg, 6, false),
    graphDef: (f = msg.getGraphDef()) && tensorflow_core_framework_graph_pb.GraphDef.toObject(includeInstance, f),
    hasControlFlow: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    graphOptions: (f = msg.getGraphOptions()) && tensorflow_core_protobuf_config_pb.GraphOptions.toObject(includeInstance, f),
    debugOptions: (f = msg.getDebugOptions()) && tensorflow_core_protobuf_debug_pb.DebugOptions.toObject(includeInstance, f),
    collectiveGraphKey: jspb.Message.getFieldWithDefault(msg, 7, 0),
    configProto: (f = msg.getConfigProto()) && tensorflow_core_protobuf_config_pb.ConfigProto.toObject(includeInstance, f)
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
 * @return {!proto.tensorflow.RegisterGraphRequest}
 */
proto.tensorflow.RegisterGraphRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tensorflow.RegisterGraphRequest;
  return proto.tensorflow.RegisterGraphRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tensorflow.RegisterGraphRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tensorflow.RegisterGraphRequest}
 */
proto.tensorflow.RegisterGraphRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSessionHandle(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCreateWorkerSessionCalled(value);
      break;
    case 2:
      var value = new tensorflow_core_framework_graph_pb.GraphDef;
      reader.readMessage(value,tensorflow_core_framework_graph_pb.GraphDef.deserializeBinaryFromReader);
      msg.setGraphDef(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setHasControlFlow(value);
      break;
    case 4:
      var value = new tensorflow_core_protobuf_config_pb.GraphOptions;
      reader.readMessage(value,tensorflow_core_protobuf_config_pb.GraphOptions.deserializeBinaryFromReader);
      msg.setGraphOptions(value);
      break;
    case 5:
      var value = new tensorflow_core_protobuf_debug_pb.DebugOptions;
      reader.readMessage(value,tensorflow_core_protobuf_debug_pb.DebugOptions.deserializeBinaryFromReader);
      msg.setDebugOptions(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCollectiveGraphKey(value);
      break;
    case 8:
      var value = new tensorflow_core_protobuf_config_pb.ConfigProto;
      reader.readMessage(value,tensorflow_core_protobuf_config_pb.ConfigProto.deserializeBinaryFromReader);
      msg.setConfigProto(value);
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
proto.tensorflow.RegisterGraphRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tensorflow.RegisterGraphRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tensorflow.RegisterGraphRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tensorflow.RegisterGraphRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSessionHandle();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCreateWorkerSessionCalled();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
  f = message.getGraphDef();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      tensorflow_core_framework_graph_pb.GraphDef.serializeBinaryToWriter
    );
  }
  f = message.getHasControlFlow();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getGraphOptions();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      tensorflow_core_protobuf_config_pb.GraphOptions.serializeBinaryToWriter
    );
  }
  f = message.getDebugOptions();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      tensorflow_core_protobuf_debug_pb.DebugOptions.serializeBinaryToWriter
    );
  }
  f = message.getCollectiveGraphKey();
  if (f !== 0) {
    writer.writeInt64(
      7,
      f
    );
  }
  f = message.getConfigProto();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      tensorflow_core_protobuf_config_pb.ConfigProto.serializeBinaryToWriter
    );
  }
};


/**
 * optional string session_handle = 1;
 * @return {string}
 */
proto.tensorflow.RegisterGraphRequest.prototype.getSessionHandle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.tensorflow.RegisterGraphRequest} returns this
 */
proto.tensorflow.RegisterGraphRequest.prototype.setSessionHandle = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool create_worker_session_called = 6;
 * @return {boolean}
 */
proto.tensorflow.RegisterGraphRequest.prototype.getCreateWorkerSessionCalled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.tensorflow.RegisterGraphRequest} returns this
 */
proto.tensorflow.RegisterGraphRequest.prototype.setCreateWorkerSessionCalled = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
};


/**
 * optional GraphDef graph_def = 2;
 * @return {?proto.tensorflow.GraphDef}
 */
proto.tensorflow.RegisterGraphRequest.prototype.getGraphDef = function() {
  return /** @type{?proto.tensorflow.GraphDef} */ (
    jspb.Message.getWrapperField(this, tensorflow_core_framework_graph_pb.GraphDef, 2));
};


/**
 * @param {?proto.tensorflow.GraphDef|undefined} value
 * @return {!proto.tensorflow.RegisterGraphRequest} returns this
*/
proto.tensorflow.RegisterGraphRequest.prototype.setGraphDef = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tensorflow.RegisterGraphRequest} returns this
 */
proto.tensorflow.RegisterGraphRequest.prototype.clearGraphDef = function() {
  return this.setGraphDef(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tensorflow.RegisterGraphRequest.prototype.hasGraphDef = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bool has_control_flow = 3;
 * @return {boolean}
 */
proto.tensorflow.RegisterGraphRequest.prototype.getHasControlFlow = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.tensorflow.RegisterGraphRequest} returns this
 */
proto.tensorflow.RegisterGraphRequest.prototype.setHasControlFlow = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional GraphOptions graph_options = 4;
 * @return {?proto.tensorflow.GraphOptions}
 */
proto.tensorflow.RegisterGraphRequest.prototype.getGraphOptions = function() {
  return /** @type{?proto.tensorflow.GraphOptions} */ (
    jspb.Message.getWrapperField(this, tensorflow_core_protobuf_config_pb.GraphOptions, 4));
};


/**
 * @param {?proto.tensorflow.GraphOptions|undefined} value
 * @return {!proto.tensorflow.RegisterGraphRequest} returns this
*/
proto.tensorflow.RegisterGraphRequest.prototype.setGraphOptions = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tensorflow.RegisterGraphRequest} returns this
 */
proto.tensorflow.RegisterGraphRequest.prototype.clearGraphOptions = function() {
  return this.setGraphOptions(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tensorflow.RegisterGraphRequest.prototype.hasGraphOptions = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional DebugOptions debug_options = 5;
 * @return {?proto.tensorflow.DebugOptions}
 */
proto.tensorflow.RegisterGraphRequest.prototype.getDebugOptions = function() {
  return /** @type{?proto.tensorflow.DebugOptions} */ (
    jspb.Message.getWrapperField(this, tensorflow_core_protobuf_debug_pb.DebugOptions, 5));
};


/**
 * @param {?proto.tensorflow.DebugOptions|undefined} value
 * @return {!proto.tensorflow.RegisterGraphRequest} returns this
*/
proto.tensorflow.RegisterGraphRequest.prototype.setDebugOptions = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tensorflow.RegisterGraphRequest} returns this
 */
proto.tensorflow.RegisterGraphRequest.prototype.clearDebugOptions = function() {
  return this.setDebugOptions(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tensorflow.RegisterGraphRequest.prototype.hasDebugOptions = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional int64 collective_graph_key = 7;
 * @return {number}
 */
proto.tensorflow.RegisterGraphRequest.prototype.getCollectiveGraphKey = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.tensorflow.RegisterGraphRequest} returns this
 */
proto.tensorflow.RegisterGraphRequest.prototype.setCollectiveGraphKey = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional ConfigProto config_proto = 8;
 * @return {?proto.tensorflow.ConfigProto}
 */
proto.tensorflow.RegisterGraphRequest.prototype.getConfigProto = function() {
  return /** @type{?proto.tensorflow.ConfigProto} */ (
    jspb.Message.getWrapperField(this, tensorflow_core_protobuf_config_pb.ConfigProto, 8));
};


/**
 * @param {?proto.tensorflow.ConfigProto|undefined} value
 * @return {!proto.tensorflow.RegisterGraphRequest} returns this
*/
proto.tensorflow.RegisterGraphRequest.prototype.setConfigProto = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tensorflow.RegisterGraphRequest} returns this
 */
proto.tensorflow.RegisterGraphRequest.prototype.clearConfigProto = function() {
  return this.setConfigProto(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tensorflow.RegisterGraphRequest.prototype.hasConfigProto = function() {
  return jspb.Message.getField(this, 8) != null;
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
proto.tensorflow.RegisterGraphResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.tensorflow.RegisterGraphResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tensorflow.RegisterGraphResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tensorflow.RegisterGraphResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    graphHandle: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.tensorflow.RegisterGraphResponse}
 */
proto.tensorflow.RegisterGraphResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tensorflow.RegisterGraphResponse;
  return proto.tensorflow.RegisterGraphResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tensorflow.RegisterGraphResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tensorflow.RegisterGraphResponse}
 */
proto.tensorflow.RegisterGraphResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setGraphHandle(value);
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
proto.tensorflow.RegisterGraphResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tensorflow.RegisterGraphResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tensorflow.RegisterGraphResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tensorflow.RegisterGraphResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGraphHandle();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string graph_handle = 1;
 * @return {string}
 */
proto.tensorflow.RegisterGraphResponse.prototype.getGraphHandle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.tensorflow.RegisterGraphResponse} returns this
 */
proto.tensorflow.RegisterGraphResponse.prototype.setGraphHandle = function(value) {
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
proto.tensorflow.DeregisterGraphRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tensorflow.DeregisterGraphRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tensorflow.DeregisterGraphRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tensorflow.DeregisterGraphRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    sessionHandle: jspb.Message.getFieldWithDefault(msg, 2, ""),
    createWorkerSessionCalled: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    graphHandle: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.tensorflow.DeregisterGraphRequest}
 */
proto.tensorflow.DeregisterGraphRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tensorflow.DeregisterGraphRequest;
  return proto.tensorflow.DeregisterGraphRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tensorflow.DeregisterGraphRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tensorflow.DeregisterGraphRequest}
 */
proto.tensorflow.DeregisterGraphRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSessionHandle(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCreateWorkerSessionCalled(value);
      break;
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setGraphHandle(value);
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
proto.tensorflow.DeregisterGraphRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tensorflow.DeregisterGraphRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tensorflow.DeregisterGraphRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tensorflow.DeregisterGraphRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSessionHandle();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getCreateWorkerSessionCalled();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getGraphHandle();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string session_handle = 2;
 * @return {string}
 */
proto.tensorflow.DeregisterGraphRequest.prototype.getSessionHandle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.tensorflow.DeregisterGraphRequest} returns this
 */
proto.tensorflow.DeregisterGraphRequest.prototype.setSessionHandle = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bool create_worker_session_called = 3;
 * @return {boolean}
 */
proto.tensorflow.DeregisterGraphRequest.prototype.getCreateWorkerSessionCalled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.tensorflow.DeregisterGraphRequest} returns this
 */
proto.tensorflow.DeregisterGraphRequest.prototype.setCreateWorkerSessionCalled = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional string graph_handle = 1;
 * @return {string}
 */
proto.tensorflow.DeregisterGraphRequest.prototype.getGraphHandle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.tensorflow.DeregisterGraphRequest} returns this
 */
proto.tensorflow.DeregisterGraphRequest.prototype.setGraphHandle = function(value) {
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
proto.tensorflow.DeregisterGraphResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.tensorflow.DeregisterGraphResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tensorflow.DeregisterGraphResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tensorflow.DeregisterGraphResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

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
 * @return {!proto.tensorflow.DeregisterGraphResponse}
 */
proto.tensorflow.DeregisterGraphResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tensorflow.DeregisterGraphResponse;
  return proto.tensorflow.DeregisterGraphResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tensorflow.DeregisterGraphResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tensorflow.DeregisterGraphResponse}
 */
proto.tensorflow.DeregisterGraphResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
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
proto.tensorflow.DeregisterGraphResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tensorflow.DeregisterGraphResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tensorflow.DeregisterGraphResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tensorflow.DeregisterGraphResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tensorflow.CleanupAllRequest.repeatedFields_ = [1];



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
proto.tensorflow.CleanupAllRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tensorflow.CleanupAllRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tensorflow.CleanupAllRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tensorflow.CleanupAllRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    containerList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
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
 * @return {!proto.tensorflow.CleanupAllRequest}
 */
proto.tensorflow.CleanupAllRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tensorflow.CleanupAllRequest;
  return proto.tensorflow.CleanupAllRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tensorflow.CleanupAllRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tensorflow.CleanupAllRequest}
 */
proto.tensorflow.CleanupAllRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addContainer(value);
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
proto.tensorflow.CleanupAllRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tensorflow.CleanupAllRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tensorflow.CleanupAllRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tensorflow.CleanupAllRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getContainerList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string container = 1;
 * @return {!Array<string>}
 */
proto.tensorflow.CleanupAllRequest.prototype.getContainerList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.tensorflow.CleanupAllRequest} returns this
 */
proto.tensorflow.CleanupAllRequest.prototype.setContainerList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.tensorflow.CleanupAllRequest} returns this
 */
proto.tensorflow.CleanupAllRequest.prototype.addContainer = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tensorflow.CleanupAllRequest} returns this
 */
proto.tensorflow.CleanupAllRequest.prototype.clearContainerList = function() {
  return this.setContainerList([]);
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
proto.tensorflow.CleanupAllResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.tensorflow.CleanupAllResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tensorflow.CleanupAllResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tensorflow.CleanupAllResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

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
 * @return {!proto.tensorflow.CleanupAllResponse}
 */
proto.tensorflow.CleanupAllResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tensorflow.CleanupAllResponse;
  return proto.tensorflow.CleanupAllResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tensorflow.CleanupAllResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tensorflow.CleanupAllResponse}
 */
proto.tensorflow.CleanupAllResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
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
proto.tensorflow.CleanupAllResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tensorflow.CleanupAllResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tensorflow.CleanupAllResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tensorflow.CleanupAllResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
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
proto.tensorflow.ExecutorOpts.prototype.toObject = function(opt_includeInstance) {
  return proto.tensorflow.ExecutorOpts.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tensorflow.ExecutorOpts} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tensorflow.ExecutorOpts.toObject = function(includeInstance, msg) {
  var f, obj = {
    recordCosts: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    recordTimeline: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    recordPartitionGraphs: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    reportTensorAllocationsUponOom: jspb.Message.getBooleanFieldWithDefault(msg, 5, false)
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
 * @return {!proto.tensorflow.ExecutorOpts}
 */
proto.tensorflow.ExecutorOpts.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tensorflow.ExecutorOpts;
  return proto.tensorflow.ExecutorOpts.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tensorflow.ExecutorOpts} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tensorflow.ExecutorOpts}
 */
proto.tensorflow.ExecutorOpts.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setRecordCosts(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setRecordTimeline(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setRecordPartitionGraphs(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setReportTensorAllocationsUponOom(value);
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
proto.tensorflow.ExecutorOpts.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tensorflow.ExecutorOpts.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tensorflow.ExecutorOpts} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tensorflow.ExecutorOpts.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRecordCosts();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getRecordTimeline();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getRecordPartitionGraphs();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getReportTensorAllocationsUponOom();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
};


/**
 * optional bool record_costs = 1;
 * @return {boolean}
 */
proto.tensorflow.ExecutorOpts.prototype.getRecordCosts = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.tensorflow.ExecutorOpts} returns this
 */
proto.tensorflow.ExecutorOpts.prototype.setRecordCosts = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional bool record_timeline = 3;
 * @return {boolean}
 */
proto.tensorflow.ExecutorOpts.prototype.getRecordTimeline = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.tensorflow.ExecutorOpts} returns this
 */
proto.tensorflow.ExecutorOpts.prototype.setRecordTimeline = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional bool record_partition_graphs = 4;
 * @return {boolean}
 */
proto.tensorflow.ExecutorOpts.prototype.getRecordPartitionGraphs = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.tensorflow.ExecutorOpts} returns this
 */
proto.tensorflow.ExecutorOpts.prototype.setRecordPartitionGraphs = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional bool report_tensor_allocations_upon_oom = 5;
 * @return {boolean}
 */
proto.tensorflow.ExecutorOpts.prototype.getReportTensorAllocationsUponOom = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.tensorflow.ExecutorOpts} returns this
 */
proto.tensorflow.ExecutorOpts.prototype.setReportTensorAllocationsUponOom = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tensorflow.RunGraphRequest.repeatedFields_ = [3,4];



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
proto.tensorflow.RunGraphRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tensorflow.RunGraphRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tensorflow.RunGraphRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tensorflow.RunGraphRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    sessionHandle: jspb.Message.getFieldWithDefault(msg, 8, ""),
    createWorkerSessionCalled: jspb.Message.getBooleanFieldWithDefault(msg, 10, false),
    graphHandle: jspb.Message.getFieldWithDefault(msg, 1, ""),
    stepId: jspb.Message.getFieldWithDefault(msg, 2, 0),
    execOpts: (f = msg.getExecOpts()) && proto.tensorflow.ExecutorOpts.toObject(includeInstance, f),
    sendList: jspb.Message.toObjectList(msg.getSendList(),
    tensorflow_core_protobuf_named_tensor_pb.NamedTensorProto.toObject, includeInstance),
    recvKeyList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f,
    isPartial: jspb.Message.getBooleanFieldWithDefault(msg, 6, false),
    isLastPartialRun: jspb.Message.getBooleanFieldWithDefault(msg, 7, false),
    storeErrorsInResponseBody: jspb.Message.getBooleanFieldWithDefault(msg, 9, false),
    requestId: jspb.Message.getFieldWithDefault(msg, 11, 0)
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
 * @return {!proto.tensorflow.RunGraphRequest}
 */
proto.tensorflow.RunGraphRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tensorflow.RunGraphRequest;
  return proto.tensorflow.RunGraphRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tensorflow.RunGraphRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tensorflow.RunGraphRequest}
 */
proto.tensorflow.RunGraphRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setSessionHandle(value);
      break;
    case 10:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCreateWorkerSessionCalled(value);
      break;
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setGraphHandle(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setStepId(value);
      break;
    case 5:
      var value = new proto.tensorflow.ExecutorOpts;
      reader.readMessage(value,proto.tensorflow.ExecutorOpts.deserializeBinaryFromReader);
      msg.setExecOpts(value);
      break;
    case 3:
      var value = new tensorflow_core_protobuf_named_tensor_pb.NamedTensorProto;
      reader.readMessage(value,tensorflow_core_protobuf_named_tensor_pb.NamedTensorProto.deserializeBinaryFromReader);
      msg.addSend(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.addRecvKey(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsPartial(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsLastPartialRun(value);
      break;
    case 9:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setStoreErrorsInResponseBody(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setRequestId(value);
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
proto.tensorflow.RunGraphRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tensorflow.RunGraphRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tensorflow.RunGraphRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tensorflow.RunGraphRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSessionHandle();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getCreateWorkerSessionCalled();
  if (f) {
    writer.writeBool(
      10,
      f
    );
  }
  f = message.getGraphHandle();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getStepId();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getExecOpts();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.tensorflow.ExecutorOpts.serializeBinaryToWriter
    );
  }
  f = message.getSendList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      tensorflow_core_protobuf_named_tensor_pb.NamedTensorProto.serializeBinaryToWriter
    );
  }
  f = message.getRecvKeyList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      4,
      f
    );
  }
  f = message.getIsPartial();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
  f = message.getIsLastPartialRun();
  if (f) {
    writer.writeBool(
      7,
      f
    );
  }
  f = message.getStoreErrorsInResponseBody();
  if (f) {
    writer.writeBool(
      9,
      f
    );
  }
  f = message.getRequestId();
  if (f !== 0) {
    writer.writeInt64(
      11,
      f
    );
  }
};


/**
 * optional string session_handle = 8;
 * @return {string}
 */
proto.tensorflow.RunGraphRequest.prototype.getSessionHandle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.tensorflow.RunGraphRequest} returns this
 */
proto.tensorflow.RunGraphRequest.prototype.setSessionHandle = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional bool create_worker_session_called = 10;
 * @return {boolean}
 */
proto.tensorflow.RunGraphRequest.prototype.getCreateWorkerSessionCalled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 10, false));
};


/**
 * @param {boolean} value
 * @return {!proto.tensorflow.RunGraphRequest} returns this
 */
proto.tensorflow.RunGraphRequest.prototype.setCreateWorkerSessionCalled = function(value) {
  return jspb.Message.setProto3BooleanField(this, 10, value);
};


/**
 * optional string graph_handle = 1;
 * @return {string}
 */
proto.tensorflow.RunGraphRequest.prototype.getGraphHandle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.tensorflow.RunGraphRequest} returns this
 */
proto.tensorflow.RunGraphRequest.prototype.setGraphHandle = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 step_id = 2;
 * @return {number}
 */
proto.tensorflow.RunGraphRequest.prototype.getStepId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.tensorflow.RunGraphRequest} returns this
 */
proto.tensorflow.RunGraphRequest.prototype.setStepId = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional ExecutorOpts exec_opts = 5;
 * @return {?proto.tensorflow.ExecutorOpts}
 */
proto.tensorflow.RunGraphRequest.prototype.getExecOpts = function() {
  return /** @type{?proto.tensorflow.ExecutorOpts} */ (
    jspb.Message.getWrapperField(this, proto.tensorflow.ExecutorOpts, 5));
};


/**
 * @param {?proto.tensorflow.ExecutorOpts|undefined} value
 * @return {!proto.tensorflow.RunGraphRequest} returns this
*/
proto.tensorflow.RunGraphRequest.prototype.setExecOpts = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tensorflow.RunGraphRequest} returns this
 */
proto.tensorflow.RunGraphRequest.prototype.clearExecOpts = function() {
  return this.setExecOpts(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tensorflow.RunGraphRequest.prototype.hasExecOpts = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * repeated NamedTensorProto send = 3;
 * @return {!Array<!proto.tensorflow.NamedTensorProto>}
 */
proto.tensorflow.RunGraphRequest.prototype.getSendList = function() {
  return /** @type{!Array<!proto.tensorflow.NamedTensorProto>} */ (
    jspb.Message.getRepeatedWrapperField(this, tensorflow_core_protobuf_named_tensor_pb.NamedTensorProto, 3));
};


/**
 * @param {!Array<!proto.tensorflow.NamedTensorProto>} value
 * @return {!proto.tensorflow.RunGraphRequest} returns this
*/
proto.tensorflow.RunGraphRequest.prototype.setSendList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.tensorflow.NamedTensorProto=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tensorflow.NamedTensorProto}
 */
proto.tensorflow.RunGraphRequest.prototype.addSend = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.tensorflow.NamedTensorProto, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tensorflow.RunGraphRequest} returns this
 */
proto.tensorflow.RunGraphRequest.prototype.clearSendList = function() {
  return this.setSendList([]);
};


/**
 * repeated string recv_key = 4;
 * @return {!Array<string>}
 */
proto.tensorflow.RunGraphRequest.prototype.getRecvKeyList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.tensorflow.RunGraphRequest} returns this
 */
proto.tensorflow.RunGraphRequest.prototype.setRecvKeyList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.tensorflow.RunGraphRequest} returns this
 */
proto.tensorflow.RunGraphRequest.prototype.addRecvKey = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tensorflow.RunGraphRequest} returns this
 */
proto.tensorflow.RunGraphRequest.prototype.clearRecvKeyList = function() {
  return this.setRecvKeyList([]);
};


/**
 * optional bool is_partial = 6;
 * @return {boolean}
 */
proto.tensorflow.RunGraphRequest.prototype.getIsPartial = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.tensorflow.RunGraphRequest} returns this
 */
proto.tensorflow.RunGraphRequest.prototype.setIsPartial = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
};


/**
 * optional bool is_last_partial_run = 7;
 * @return {boolean}
 */
proto.tensorflow.RunGraphRequest.prototype.getIsLastPartialRun = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.tensorflow.RunGraphRequest} returns this
 */
proto.tensorflow.RunGraphRequest.prototype.setIsLastPartialRun = function(value) {
  return jspb.Message.setProto3BooleanField(this, 7, value);
};


/**
 * optional bool store_errors_in_response_body = 9;
 * @return {boolean}
 */
proto.tensorflow.RunGraphRequest.prototype.getStoreErrorsInResponseBody = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 9, false));
};


/**
 * @param {boolean} value
 * @return {!proto.tensorflow.RunGraphRequest} returns this
 */
proto.tensorflow.RunGraphRequest.prototype.setStoreErrorsInResponseBody = function(value) {
  return jspb.Message.setProto3BooleanField(this, 9, value);
};


/**
 * optional int64 request_id = 11;
 * @return {number}
 */
proto.tensorflow.RunGraphRequest.prototype.getRequestId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.tensorflow.RunGraphRequest} returns this
 */
proto.tensorflow.RunGraphRequest.prototype.setRequestId = function(value) {
  return jspb.Message.setProto3IntField(this, 11, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tensorflow.RunGraphResponse.repeatedFields_ = [1,4];



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
proto.tensorflow.RunGraphResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.tensorflow.RunGraphResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tensorflow.RunGraphResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tensorflow.RunGraphResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    recvList: jspb.Message.toObjectList(msg.getRecvList(),
    tensorflow_core_protobuf_named_tensor_pb.NamedTensorProto.toObject, includeInstance),
    stepStats: (f = msg.getStepStats()) && tensorflow_core_framework_step_stats_pb.StepStats.toObject(includeInstance, f),
    costGraph: (f = msg.getCostGraph()) && tensorflow_core_framework_cost_graph_pb.CostGraphDef.toObject(includeInstance, f),
    partitionGraphList: jspb.Message.toObjectList(msg.getPartitionGraphList(),
    tensorflow_core_framework_graph_pb.GraphDef.toObject, includeInstance),
    statusCode: jspb.Message.getFieldWithDefault(msg, 5, 0),
    statusErrorMessage: jspb.Message.getFieldWithDefault(msg, 6, "")
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
 * @return {!proto.tensorflow.RunGraphResponse}
 */
proto.tensorflow.RunGraphResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tensorflow.RunGraphResponse;
  return proto.tensorflow.RunGraphResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tensorflow.RunGraphResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tensorflow.RunGraphResponse}
 */
proto.tensorflow.RunGraphResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new tensorflow_core_protobuf_named_tensor_pb.NamedTensorProto;
      reader.readMessage(value,tensorflow_core_protobuf_named_tensor_pb.NamedTensorProto.deserializeBinaryFromReader);
      msg.addRecv(value);
      break;
    case 2:
      var value = new tensorflow_core_framework_step_stats_pb.StepStats;
      reader.readMessage(value,tensorflow_core_framework_step_stats_pb.StepStats.deserializeBinaryFromReader);
      msg.setStepStats(value);
      break;
    case 3:
      var value = new tensorflow_core_framework_cost_graph_pb.CostGraphDef;
      reader.readMessage(value,tensorflow_core_framework_cost_graph_pb.CostGraphDef.deserializeBinaryFromReader);
      msg.setCostGraph(value);
      break;
    case 4:
      var value = new tensorflow_core_framework_graph_pb.GraphDef;
      reader.readMessage(value,tensorflow_core_framework_graph_pb.GraphDef.deserializeBinaryFromReader);
      msg.addPartitionGraph(value);
      break;
    case 5:
      var value = /** @type {!proto.tensorflow.error.Code} */ (reader.readEnum());
      msg.setStatusCode(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setStatusErrorMessage(value);
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
proto.tensorflow.RunGraphResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tensorflow.RunGraphResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tensorflow.RunGraphResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tensorflow.RunGraphResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRecvList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      tensorflow_core_protobuf_named_tensor_pb.NamedTensorProto.serializeBinaryToWriter
    );
  }
  f = message.getStepStats();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      tensorflow_core_framework_step_stats_pb.StepStats.serializeBinaryToWriter
    );
  }
  f = message.getCostGraph();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      tensorflow_core_framework_cost_graph_pb.CostGraphDef.serializeBinaryToWriter
    );
  }
  f = message.getPartitionGraphList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      tensorflow_core_framework_graph_pb.GraphDef.serializeBinaryToWriter
    );
  }
  f = message.getStatusCode();
  if (f !== 0.0) {
    writer.writeEnum(
      5,
      f
    );
  }
  f = message.getStatusErrorMessage();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * repeated NamedTensorProto recv = 1;
 * @return {!Array<!proto.tensorflow.NamedTensorProto>}
 */
proto.tensorflow.RunGraphResponse.prototype.getRecvList = function() {
  return /** @type{!Array<!proto.tensorflow.NamedTensorProto>} */ (
    jspb.Message.getRepeatedWrapperField(this, tensorflow_core_protobuf_named_tensor_pb.NamedTensorProto, 1));
};


/**
 * @param {!Array<!proto.tensorflow.NamedTensorProto>} value
 * @return {!proto.tensorflow.RunGraphResponse} returns this
*/
proto.tensorflow.RunGraphResponse.prototype.setRecvList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.tensorflow.NamedTensorProto=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tensorflow.NamedTensorProto}
 */
proto.tensorflow.RunGraphResponse.prototype.addRecv = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.tensorflow.NamedTensorProto, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tensorflow.RunGraphResponse} returns this
 */
proto.tensorflow.RunGraphResponse.prototype.clearRecvList = function() {
  return this.setRecvList([]);
};


/**
 * optional StepStats step_stats = 2;
 * @return {?proto.tensorflow.StepStats}
 */
proto.tensorflow.RunGraphResponse.prototype.getStepStats = function() {
  return /** @type{?proto.tensorflow.StepStats} */ (
    jspb.Message.getWrapperField(this, tensorflow_core_framework_step_stats_pb.StepStats, 2));
};


/**
 * @param {?proto.tensorflow.StepStats|undefined} value
 * @return {!proto.tensorflow.RunGraphResponse} returns this
*/
proto.tensorflow.RunGraphResponse.prototype.setStepStats = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tensorflow.RunGraphResponse} returns this
 */
proto.tensorflow.RunGraphResponse.prototype.clearStepStats = function() {
  return this.setStepStats(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tensorflow.RunGraphResponse.prototype.hasStepStats = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional CostGraphDef cost_graph = 3;
 * @return {?proto.tensorflow.CostGraphDef}
 */
proto.tensorflow.RunGraphResponse.prototype.getCostGraph = function() {
  return /** @type{?proto.tensorflow.CostGraphDef} */ (
    jspb.Message.getWrapperField(this, tensorflow_core_framework_cost_graph_pb.CostGraphDef, 3));
};


/**
 * @param {?proto.tensorflow.CostGraphDef|undefined} value
 * @return {!proto.tensorflow.RunGraphResponse} returns this
*/
proto.tensorflow.RunGraphResponse.prototype.setCostGraph = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tensorflow.RunGraphResponse} returns this
 */
proto.tensorflow.RunGraphResponse.prototype.clearCostGraph = function() {
  return this.setCostGraph(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tensorflow.RunGraphResponse.prototype.hasCostGraph = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * repeated GraphDef partition_graph = 4;
 * @return {!Array<!proto.tensorflow.GraphDef>}
 */
proto.tensorflow.RunGraphResponse.prototype.getPartitionGraphList = function() {
  return /** @type{!Array<!proto.tensorflow.GraphDef>} */ (
    jspb.Message.getRepeatedWrapperField(this, tensorflow_core_framework_graph_pb.GraphDef, 4));
};


/**
 * @param {!Array<!proto.tensorflow.GraphDef>} value
 * @return {!proto.tensorflow.RunGraphResponse} returns this
*/
proto.tensorflow.RunGraphResponse.prototype.setPartitionGraphList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.tensorflow.GraphDef=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tensorflow.GraphDef}
 */
proto.tensorflow.RunGraphResponse.prototype.addPartitionGraph = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.tensorflow.GraphDef, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tensorflow.RunGraphResponse} returns this
 */
proto.tensorflow.RunGraphResponse.prototype.clearPartitionGraphList = function() {
  return this.setPartitionGraphList([]);
};


/**
 * optional error.Code status_code = 5;
 * @return {!proto.tensorflow.error.Code}
 */
proto.tensorflow.RunGraphResponse.prototype.getStatusCode = function() {
  return /** @type {!proto.tensorflow.error.Code} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.tensorflow.error.Code} value
 * @return {!proto.tensorflow.RunGraphResponse} returns this
 */
proto.tensorflow.RunGraphResponse.prototype.setStatusCode = function(value) {
  return jspb.Message.setProto3EnumField(this, 5, value);
};


/**
 * optional string status_error_message = 6;
 * @return {string}
 */
proto.tensorflow.RunGraphResponse.prototype.getStatusErrorMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.tensorflow.RunGraphResponse} returns this
 */
proto.tensorflow.RunGraphResponse.prototype.setStatusErrorMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
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
proto.tensorflow.CleanupGraphRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tensorflow.CleanupGraphRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tensorflow.CleanupGraphRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tensorflow.CleanupGraphRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    stepId: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.tensorflow.CleanupGraphRequest}
 */
proto.tensorflow.CleanupGraphRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tensorflow.CleanupGraphRequest;
  return proto.tensorflow.CleanupGraphRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tensorflow.CleanupGraphRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tensorflow.CleanupGraphRequest}
 */
proto.tensorflow.CleanupGraphRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setStepId(value);
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
proto.tensorflow.CleanupGraphRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tensorflow.CleanupGraphRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tensorflow.CleanupGraphRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tensorflow.CleanupGraphRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStepId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * optional int64 step_id = 1;
 * @return {number}
 */
proto.tensorflow.CleanupGraphRequest.prototype.getStepId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.tensorflow.CleanupGraphRequest} returns this
 */
proto.tensorflow.CleanupGraphRequest.prototype.setStepId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
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
proto.tensorflow.CleanupGraphResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.tensorflow.CleanupGraphResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tensorflow.CleanupGraphResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tensorflow.CleanupGraphResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

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
 * @return {!proto.tensorflow.CleanupGraphResponse}
 */
proto.tensorflow.CleanupGraphResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tensorflow.CleanupGraphResponse;
  return proto.tensorflow.CleanupGraphResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tensorflow.CleanupGraphResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tensorflow.CleanupGraphResponse}
 */
proto.tensorflow.CleanupGraphResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
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
proto.tensorflow.CleanupGraphResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tensorflow.CleanupGraphResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tensorflow.CleanupGraphResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tensorflow.CleanupGraphResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
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
proto.tensorflow.RecvTensorRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tensorflow.RecvTensorRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tensorflow.RecvTensorRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tensorflow.RecvTensorRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    stepId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    rendezvousKey: jspb.Message.getFieldWithDefault(msg, 2, ""),
    dmaOk: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    clientLocality: (f = msg.getClientLocality()) && tensorflow_core_framework_device_attributes_pb.DeviceLocality.toObject(includeInstance, f),
    serverLocality: (f = msg.getServerLocality()) && tensorflow_core_framework_device_attributes_pb.DeviceLocality.toObject(includeInstance, f),
    transportOptions: (f = msg.getTransportOptions()) && google_protobuf_any_pb.Any.toObject(includeInstance, f),
    requestId: jspb.Message.getFieldWithDefault(msg, 7, 0)
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
 * @return {!proto.tensorflow.RecvTensorRequest}
 */
proto.tensorflow.RecvTensorRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tensorflow.RecvTensorRequest;
  return proto.tensorflow.RecvTensorRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tensorflow.RecvTensorRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tensorflow.RecvTensorRequest}
 */
proto.tensorflow.RecvTensorRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setStepId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setRendezvousKey(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDmaOk(value);
      break;
    case 4:
      var value = new tensorflow_core_framework_device_attributes_pb.DeviceLocality;
      reader.readMessage(value,tensorflow_core_framework_device_attributes_pb.DeviceLocality.deserializeBinaryFromReader);
      msg.setClientLocality(value);
      break;
    case 5:
      var value = new tensorflow_core_framework_device_attributes_pb.DeviceLocality;
      reader.readMessage(value,tensorflow_core_framework_device_attributes_pb.DeviceLocality.deserializeBinaryFromReader);
      msg.setServerLocality(value);
      break;
    case 6:
      var value = new google_protobuf_any_pb.Any;
      reader.readMessage(value,google_protobuf_any_pb.Any.deserializeBinaryFromReader);
      msg.setTransportOptions(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setRequestId(value);
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
proto.tensorflow.RecvTensorRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tensorflow.RecvTensorRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tensorflow.RecvTensorRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tensorflow.RecvTensorRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStepId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getRendezvousKey();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDmaOk();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getClientLocality();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      tensorflow_core_framework_device_attributes_pb.DeviceLocality.serializeBinaryToWriter
    );
  }
  f = message.getServerLocality();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      tensorflow_core_framework_device_attributes_pb.DeviceLocality.serializeBinaryToWriter
    );
  }
  f = message.getTransportOptions();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_any_pb.Any.serializeBinaryToWriter
    );
  }
  f = message.getRequestId();
  if (f !== 0) {
    writer.writeInt64(
      7,
      f
    );
  }
};


/**
 * optional int64 step_id = 1;
 * @return {number}
 */
proto.tensorflow.RecvTensorRequest.prototype.getStepId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.tensorflow.RecvTensorRequest} returns this
 */
proto.tensorflow.RecvTensorRequest.prototype.setStepId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string rendezvous_key = 2;
 * @return {string}
 */
proto.tensorflow.RecvTensorRequest.prototype.getRendezvousKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.tensorflow.RecvTensorRequest} returns this
 */
proto.tensorflow.RecvTensorRequest.prototype.setRendezvousKey = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bool dma_ok = 3;
 * @return {boolean}
 */
proto.tensorflow.RecvTensorRequest.prototype.getDmaOk = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.tensorflow.RecvTensorRequest} returns this
 */
proto.tensorflow.RecvTensorRequest.prototype.setDmaOk = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional DeviceLocality client_locality = 4;
 * @return {?proto.tensorflow.DeviceLocality}
 */
proto.tensorflow.RecvTensorRequest.prototype.getClientLocality = function() {
  return /** @type{?proto.tensorflow.DeviceLocality} */ (
    jspb.Message.getWrapperField(this, tensorflow_core_framework_device_attributes_pb.DeviceLocality, 4));
};


/**
 * @param {?proto.tensorflow.DeviceLocality|undefined} value
 * @return {!proto.tensorflow.RecvTensorRequest} returns this
*/
proto.tensorflow.RecvTensorRequest.prototype.setClientLocality = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tensorflow.RecvTensorRequest} returns this
 */
proto.tensorflow.RecvTensorRequest.prototype.clearClientLocality = function() {
  return this.setClientLocality(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tensorflow.RecvTensorRequest.prototype.hasClientLocality = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional DeviceLocality server_locality = 5;
 * @return {?proto.tensorflow.DeviceLocality}
 */
proto.tensorflow.RecvTensorRequest.prototype.getServerLocality = function() {
  return /** @type{?proto.tensorflow.DeviceLocality} */ (
    jspb.Message.getWrapperField(this, tensorflow_core_framework_device_attributes_pb.DeviceLocality, 5));
};


/**
 * @param {?proto.tensorflow.DeviceLocality|undefined} value
 * @return {!proto.tensorflow.RecvTensorRequest} returns this
*/
proto.tensorflow.RecvTensorRequest.prototype.setServerLocality = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tensorflow.RecvTensorRequest} returns this
 */
proto.tensorflow.RecvTensorRequest.prototype.clearServerLocality = function() {
  return this.setServerLocality(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tensorflow.RecvTensorRequest.prototype.hasServerLocality = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional google.protobuf.Any transport_options = 6;
 * @return {?proto.google.protobuf.Any}
 */
proto.tensorflow.RecvTensorRequest.prototype.getTransportOptions = function() {
  return /** @type{?proto.google.protobuf.Any} */ (
    jspb.Message.getWrapperField(this, google_protobuf_any_pb.Any, 6));
};


/**
 * @param {?proto.google.protobuf.Any|undefined} value
 * @return {!proto.tensorflow.RecvTensorRequest} returns this
*/
proto.tensorflow.RecvTensorRequest.prototype.setTransportOptions = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tensorflow.RecvTensorRequest} returns this
 */
proto.tensorflow.RecvTensorRequest.prototype.clearTransportOptions = function() {
  return this.setTransportOptions(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tensorflow.RecvTensorRequest.prototype.hasTransportOptions = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional int64 request_id = 7;
 * @return {number}
 */
proto.tensorflow.RecvTensorRequest.prototype.getRequestId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.tensorflow.RecvTensorRequest} returns this
 */
proto.tensorflow.RecvTensorRequest.prototype.setRequestId = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
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
proto.tensorflow.RecvTensorResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.tensorflow.RecvTensorResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tensorflow.RecvTensorResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tensorflow.RecvTensorResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    tensor: (f = msg.getTensor()) && tensorflow_core_framework_tensor_pb.TensorProto.toObject(includeInstance, f),
    isDead: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    sendStartMicros: jspb.Message.getFieldWithDefault(msg, 3, 0),
    transportOptions: (f = msg.getTransportOptions()) && google_protobuf_any_pb.Any.toObject(includeInstance, f),
    requireAck: jspb.Message.getBooleanFieldWithDefault(msg, 5, false)
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
 * @return {!proto.tensorflow.RecvTensorResponse}
 */
proto.tensorflow.RecvTensorResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tensorflow.RecvTensorResponse;
  return proto.tensorflow.RecvTensorResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tensorflow.RecvTensorResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tensorflow.RecvTensorResponse}
 */
proto.tensorflow.RecvTensorResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new tensorflow_core_framework_tensor_pb.TensorProto;
      reader.readMessage(value,tensorflow_core_framework_tensor_pb.TensorProto.deserializeBinaryFromReader);
      msg.setTensor(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsDead(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSendStartMicros(value);
      break;
    case 4:
      var value = new google_protobuf_any_pb.Any;
      reader.readMessage(value,google_protobuf_any_pb.Any.deserializeBinaryFromReader);
      msg.setTransportOptions(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setRequireAck(value);
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
proto.tensorflow.RecvTensorResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tensorflow.RecvTensorResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tensorflow.RecvTensorResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tensorflow.RecvTensorResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTensor();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      tensorflow_core_framework_tensor_pb.TensorProto.serializeBinaryToWriter
    );
  }
  f = message.getIsDead();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getSendStartMicros();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getTransportOptions();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_any_pb.Any.serializeBinaryToWriter
    );
  }
  f = message.getRequireAck();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
};


/**
 * optional TensorProto tensor = 1;
 * @return {?proto.tensorflow.TensorProto}
 */
proto.tensorflow.RecvTensorResponse.prototype.getTensor = function() {
  return /** @type{?proto.tensorflow.TensorProto} */ (
    jspb.Message.getWrapperField(this, tensorflow_core_framework_tensor_pb.TensorProto, 1));
};


/**
 * @param {?proto.tensorflow.TensorProto|undefined} value
 * @return {!proto.tensorflow.RecvTensorResponse} returns this
*/
proto.tensorflow.RecvTensorResponse.prototype.setTensor = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tensorflow.RecvTensorResponse} returns this
 */
proto.tensorflow.RecvTensorResponse.prototype.clearTensor = function() {
  return this.setTensor(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tensorflow.RecvTensorResponse.prototype.hasTensor = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool is_dead = 2;
 * @return {boolean}
 */
proto.tensorflow.RecvTensorResponse.prototype.getIsDead = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.tensorflow.RecvTensorResponse} returns this
 */
proto.tensorflow.RecvTensorResponse.prototype.setIsDead = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional int64 send_start_micros = 3;
 * @return {number}
 */
proto.tensorflow.RecvTensorResponse.prototype.getSendStartMicros = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.tensorflow.RecvTensorResponse} returns this
 */
proto.tensorflow.RecvTensorResponse.prototype.setSendStartMicros = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional google.protobuf.Any transport_options = 4;
 * @return {?proto.google.protobuf.Any}
 */
proto.tensorflow.RecvTensorResponse.prototype.getTransportOptions = function() {
  return /** @type{?proto.google.protobuf.Any} */ (
    jspb.Message.getWrapperField(this, google_protobuf_any_pb.Any, 4));
};


/**
 * @param {?proto.google.protobuf.Any|undefined} value
 * @return {!proto.tensorflow.RecvTensorResponse} returns this
*/
proto.tensorflow.RecvTensorResponse.prototype.setTransportOptions = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tensorflow.RecvTensorResponse} returns this
 */
proto.tensorflow.RecvTensorResponse.prototype.clearTransportOptions = function() {
  return this.setTransportOptions(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tensorflow.RecvTensorResponse.prototype.hasTransportOptions = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional bool require_ack = 5;
 * @return {boolean}
 */
proto.tensorflow.RecvTensorResponse.prototype.getRequireAck = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.tensorflow.RecvTensorResponse} returns this
 */
proto.tensorflow.RecvTensorResponse.prototype.setRequireAck = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
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
proto.tensorflow.MarkRecvFinishedRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tensorflow.MarkRecvFinishedRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tensorflow.MarkRecvFinishedRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tensorflow.MarkRecvFinishedRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    requestId: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.tensorflow.MarkRecvFinishedRequest}
 */
proto.tensorflow.MarkRecvFinishedRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tensorflow.MarkRecvFinishedRequest;
  return proto.tensorflow.MarkRecvFinishedRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tensorflow.MarkRecvFinishedRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tensorflow.MarkRecvFinishedRequest}
 */
proto.tensorflow.MarkRecvFinishedRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setRequestId(value);
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
proto.tensorflow.MarkRecvFinishedRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tensorflow.MarkRecvFinishedRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tensorflow.MarkRecvFinishedRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tensorflow.MarkRecvFinishedRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRequestId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * optional int64 request_id = 1;
 * @return {number}
 */
proto.tensorflow.MarkRecvFinishedRequest.prototype.getRequestId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.tensorflow.MarkRecvFinishedRequest} returns this
 */
proto.tensorflow.MarkRecvFinishedRequest.prototype.setRequestId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
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
proto.tensorflow.MarkRecvFinishedResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.tensorflow.MarkRecvFinishedResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tensorflow.MarkRecvFinishedResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tensorflow.MarkRecvFinishedResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

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
 * @return {!proto.tensorflow.MarkRecvFinishedResponse}
 */
proto.tensorflow.MarkRecvFinishedResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tensorflow.MarkRecvFinishedResponse;
  return proto.tensorflow.MarkRecvFinishedResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tensorflow.MarkRecvFinishedResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tensorflow.MarkRecvFinishedResponse}
 */
proto.tensorflow.MarkRecvFinishedResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
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
proto.tensorflow.MarkRecvFinishedResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tensorflow.MarkRecvFinishedResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tensorflow.MarkRecvFinishedResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tensorflow.MarkRecvFinishedResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tensorflow.LoggingRequest.repeatedFields_ = [3];



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
proto.tensorflow.LoggingRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tensorflow.LoggingRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tensorflow.LoggingRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tensorflow.LoggingRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    enableRpcLogging: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    disableRpcLogging: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    clear: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    fetchStepIdList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f
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
 * @return {!proto.tensorflow.LoggingRequest}
 */
proto.tensorflow.LoggingRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tensorflow.LoggingRequest;
  return proto.tensorflow.LoggingRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tensorflow.LoggingRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tensorflow.LoggingRequest}
 */
proto.tensorflow.LoggingRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnableRpcLogging(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDisableRpcLogging(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setClear(value);
      break;
    case 3:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedInt64() : [reader.readInt64()]);
      for (var i = 0; i < values.length; i++) {
        msg.addFetchStepId(values[i]);
      }
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
proto.tensorflow.LoggingRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tensorflow.LoggingRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tensorflow.LoggingRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tensorflow.LoggingRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEnableRpcLogging();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getDisableRpcLogging();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getClear();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getFetchStepIdList();
  if (f.length > 0) {
    writer.writePackedInt64(
      3,
      f
    );
  }
};


/**
 * optional bool enable_rpc_logging = 1;
 * @return {boolean}
 */
proto.tensorflow.LoggingRequest.prototype.getEnableRpcLogging = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.tensorflow.LoggingRequest} returns this
 */
proto.tensorflow.LoggingRequest.prototype.setEnableRpcLogging = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional bool disable_rpc_logging = 4;
 * @return {boolean}
 */
proto.tensorflow.LoggingRequest.prototype.getDisableRpcLogging = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.tensorflow.LoggingRequest} returns this
 */
proto.tensorflow.LoggingRequest.prototype.setDisableRpcLogging = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional bool clear = 2;
 * @return {boolean}
 */
proto.tensorflow.LoggingRequest.prototype.getClear = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.tensorflow.LoggingRequest} returns this
 */
proto.tensorflow.LoggingRequest.prototype.setClear = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * repeated int64 fetch_step_id = 3;
 * @return {!Array<number>}
 */
proto.tensorflow.LoggingRequest.prototype.getFetchStepIdList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.tensorflow.LoggingRequest} returns this
 */
proto.tensorflow.LoggingRequest.prototype.setFetchStepIdList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.tensorflow.LoggingRequest} returns this
 */
proto.tensorflow.LoggingRequest.prototype.addFetchStepId = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tensorflow.LoggingRequest} returns this
 */
proto.tensorflow.LoggingRequest.prototype.clearFetchStepIdList = function() {
  return this.setFetchStepIdList([]);
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
proto.tensorflow.LabeledStepStats.prototype.toObject = function(opt_includeInstance) {
  return proto.tensorflow.LabeledStepStats.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tensorflow.LabeledStepStats} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tensorflow.LabeledStepStats.toObject = function(includeInstance, msg) {
  var f, obj = {
    stepId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    stepStats: (f = msg.getStepStats()) && tensorflow_core_framework_step_stats_pb.StepStats.toObject(includeInstance, f)
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
 * @return {!proto.tensorflow.LabeledStepStats}
 */
proto.tensorflow.LabeledStepStats.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tensorflow.LabeledStepStats;
  return proto.tensorflow.LabeledStepStats.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tensorflow.LabeledStepStats} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tensorflow.LabeledStepStats}
 */
proto.tensorflow.LabeledStepStats.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setStepId(value);
      break;
    case 2:
      var value = new tensorflow_core_framework_step_stats_pb.StepStats;
      reader.readMessage(value,tensorflow_core_framework_step_stats_pb.StepStats.deserializeBinaryFromReader);
      msg.setStepStats(value);
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
proto.tensorflow.LabeledStepStats.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tensorflow.LabeledStepStats.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tensorflow.LabeledStepStats} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tensorflow.LabeledStepStats.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStepId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getStepStats();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      tensorflow_core_framework_step_stats_pb.StepStats.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 step_id = 1;
 * @return {number}
 */
proto.tensorflow.LabeledStepStats.prototype.getStepId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.tensorflow.LabeledStepStats} returns this
 */
proto.tensorflow.LabeledStepStats.prototype.setStepId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional StepStats step_stats = 2;
 * @return {?proto.tensorflow.StepStats}
 */
proto.tensorflow.LabeledStepStats.prototype.getStepStats = function() {
  return /** @type{?proto.tensorflow.StepStats} */ (
    jspb.Message.getWrapperField(this, tensorflow_core_framework_step_stats_pb.StepStats, 2));
};


/**
 * @param {?proto.tensorflow.StepStats|undefined} value
 * @return {!proto.tensorflow.LabeledStepStats} returns this
*/
proto.tensorflow.LabeledStepStats.prototype.setStepStats = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tensorflow.LabeledStepStats} returns this
 */
proto.tensorflow.LabeledStepStats.prototype.clearStepStats = function() {
  return this.setStepStats(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tensorflow.LabeledStepStats.prototype.hasStepStats = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tensorflow.LoggingResponse.repeatedFields_ = [1];



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
proto.tensorflow.LoggingResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.tensorflow.LoggingResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tensorflow.LoggingResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tensorflow.LoggingResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    stepList: jspb.Message.toObjectList(msg.getStepList(),
    proto.tensorflow.LabeledStepStats.toObject, includeInstance)
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
 * @return {!proto.tensorflow.LoggingResponse}
 */
proto.tensorflow.LoggingResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tensorflow.LoggingResponse;
  return proto.tensorflow.LoggingResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tensorflow.LoggingResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tensorflow.LoggingResponse}
 */
proto.tensorflow.LoggingResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.tensorflow.LabeledStepStats;
      reader.readMessage(value,proto.tensorflow.LabeledStepStats.deserializeBinaryFromReader);
      msg.addStep(value);
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
proto.tensorflow.LoggingResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tensorflow.LoggingResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tensorflow.LoggingResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tensorflow.LoggingResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStepList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.tensorflow.LabeledStepStats.serializeBinaryToWriter
    );
  }
};


/**
 * repeated LabeledStepStats step = 1;
 * @return {!Array<!proto.tensorflow.LabeledStepStats>}
 */
proto.tensorflow.LoggingResponse.prototype.getStepList = function() {
  return /** @type{!Array<!proto.tensorflow.LabeledStepStats>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.tensorflow.LabeledStepStats, 1));
};


/**
 * @param {!Array<!proto.tensorflow.LabeledStepStats>} value
 * @return {!proto.tensorflow.LoggingResponse} returns this
*/
proto.tensorflow.LoggingResponse.prototype.setStepList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.tensorflow.LabeledStepStats=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tensorflow.LabeledStepStats}
 */
proto.tensorflow.LoggingResponse.prototype.addStep = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.tensorflow.LabeledStepStats, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tensorflow.LoggingResponse} returns this
 */
proto.tensorflow.LoggingResponse.prototype.clearStepList = function() {
  return this.setStepList([]);
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
proto.tensorflow.TraceOpts.prototype.toObject = function(opt_includeInstance) {
  return proto.tensorflow.TraceOpts.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tensorflow.TraceOpts} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tensorflow.TraceOpts.toObject = function(includeInstance, msg) {
  var f, obj = {
    duration: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    useStepProfiler: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    useKernelProfiler: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    useExtendedProfiler: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    useGpuProfiler: jspb.Message.getBooleanFieldWithDefault(msg, 5, false),
    useSampleProfiler: jspb.Message.getBooleanFieldWithDefault(msg, 6, false)
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
 * @return {!proto.tensorflow.TraceOpts}
 */
proto.tensorflow.TraceOpts.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tensorflow.TraceOpts;
  return proto.tensorflow.TraceOpts.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tensorflow.TraceOpts} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tensorflow.TraceOpts}
 */
proto.tensorflow.TraceOpts.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setDuration(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setUseStepProfiler(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setUseKernelProfiler(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setUseExtendedProfiler(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setUseGpuProfiler(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setUseSampleProfiler(value);
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
proto.tensorflow.TraceOpts.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tensorflow.TraceOpts.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tensorflow.TraceOpts} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tensorflow.TraceOpts.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDuration();
  if (f !== 0.0) {
    writer.writeDouble(
      1,
      f
    );
  }
  f = message.getUseStepProfiler();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getUseKernelProfiler();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getUseExtendedProfiler();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getUseGpuProfiler();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
  f = message.getUseSampleProfiler();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
};


/**
 * optional double duration = 1;
 * @return {number}
 */
proto.tensorflow.TraceOpts.prototype.getDuration = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.tensorflow.TraceOpts} returns this
 */
proto.tensorflow.TraceOpts.prototype.setDuration = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional bool use_step_profiler = 2;
 * @return {boolean}
 */
proto.tensorflow.TraceOpts.prototype.getUseStepProfiler = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.tensorflow.TraceOpts} returns this
 */
proto.tensorflow.TraceOpts.prototype.setUseStepProfiler = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional bool use_kernel_profiler = 3;
 * @return {boolean}
 */
proto.tensorflow.TraceOpts.prototype.getUseKernelProfiler = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.tensorflow.TraceOpts} returns this
 */
proto.tensorflow.TraceOpts.prototype.setUseKernelProfiler = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional bool use_extended_profiler = 4;
 * @return {boolean}
 */
proto.tensorflow.TraceOpts.prototype.getUseExtendedProfiler = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.tensorflow.TraceOpts} returns this
 */
proto.tensorflow.TraceOpts.prototype.setUseExtendedProfiler = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional bool use_gpu_profiler = 5;
 * @return {boolean}
 */
proto.tensorflow.TraceOpts.prototype.getUseGpuProfiler = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.tensorflow.TraceOpts} returns this
 */
proto.tensorflow.TraceOpts.prototype.setUseGpuProfiler = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * optional bool use_sample_profiler = 6;
 * @return {boolean}
 */
proto.tensorflow.TraceOpts.prototype.getUseSampleProfiler = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.tensorflow.TraceOpts} returns this
 */
proto.tensorflow.TraceOpts.prototype.setUseSampleProfiler = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
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
proto.tensorflow.TracingRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tensorflow.TracingRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tensorflow.TracingRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tensorflow.TracingRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    options: (f = msg.getOptions()) && proto.tensorflow.TraceOpts.toObject(includeInstance, f)
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
 * @return {!proto.tensorflow.TracingRequest}
 */
proto.tensorflow.TracingRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tensorflow.TracingRequest;
  return proto.tensorflow.TracingRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tensorflow.TracingRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tensorflow.TracingRequest}
 */
proto.tensorflow.TracingRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.tensorflow.TraceOpts;
      reader.readMessage(value,proto.tensorflow.TraceOpts.deserializeBinaryFromReader);
      msg.setOptions(value);
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
proto.tensorflow.TracingRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tensorflow.TracingRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tensorflow.TracingRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tensorflow.TracingRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOptions();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.tensorflow.TraceOpts.serializeBinaryToWriter
    );
  }
};


/**
 * optional TraceOpts options = 1;
 * @return {?proto.tensorflow.TraceOpts}
 */
proto.tensorflow.TracingRequest.prototype.getOptions = function() {
  return /** @type{?proto.tensorflow.TraceOpts} */ (
    jspb.Message.getWrapperField(this, proto.tensorflow.TraceOpts, 1));
};


/**
 * @param {?proto.tensorflow.TraceOpts|undefined} value
 * @return {!proto.tensorflow.TracingRequest} returns this
*/
proto.tensorflow.TracingRequest.prototype.setOptions = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tensorflow.TracingRequest} returns this
 */
proto.tensorflow.TracingRequest.prototype.clearOptions = function() {
  return this.setOptions(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tensorflow.TracingRequest.prototype.hasOptions = function() {
  return jspb.Message.getField(this, 1) != null;
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
proto.tensorflow.TracingResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.tensorflow.TracingResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tensorflow.TracingResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tensorflow.TracingResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

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
 * @return {!proto.tensorflow.TracingResponse}
 */
proto.tensorflow.TracingResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tensorflow.TracingResponse;
  return proto.tensorflow.TracingResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tensorflow.TracingResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tensorflow.TracingResponse}
 */
proto.tensorflow.TracingResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
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
proto.tensorflow.TracingResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tensorflow.TracingResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tensorflow.TracingResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tensorflow.TracingResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
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
proto.tensorflow.RecvBufRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tensorflow.RecvBufRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tensorflow.RecvBufRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tensorflow.RecvBufRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    stepId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    bufRendezvousKey: jspb.Message.getFieldWithDefault(msg, 2, ""),
    numBytes: jspb.Message.getFieldWithDefault(msg, 3, 0),
    bufPtr: jspb.Message.getFieldWithDefault(msg, 4, 0),
    clientLocality: (f = msg.getClientLocality()) && tensorflow_core_framework_device_attributes_pb.DeviceLocality.toObject(includeInstance, f),
    serverLocality: (f = msg.getServerLocality()) && tensorflow_core_framework_device_attributes_pb.DeviceLocality.toObject(includeInstance, f),
    transportOptions: (f = msg.getTransportOptions()) && google_protobuf_any_pb.Any.toObject(includeInstance, f),
    srcDevice: jspb.Message.getFieldWithDefault(msg, 8, ""),
    dstDevice: jspb.Message.getFieldWithDefault(msg, 9, ""),
    requestId: jspb.Message.getFieldWithDefault(msg, 10, 0),
    srcIncarnation: jspb.Message.getFieldWithDefault(msg, 11, 0)
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
 * @return {!proto.tensorflow.RecvBufRequest}
 */
proto.tensorflow.RecvBufRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tensorflow.RecvBufRequest;
  return proto.tensorflow.RecvBufRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tensorflow.RecvBufRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tensorflow.RecvBufRequest}
 */
proto.tensorflow.RecvBufRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setStepId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setBufRendezvousKey(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setNumBytes(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readFixed64());
      msg.setBufPtr(value);
      break;
    case 5:
      var value = new tensorflow_core_framework_device_attributes_pb.DeviceLocality;
      reader.readMessage(value,tensorflow_core_framework_device_attributes_pb.DeviceLocality.deserializeBinaryFromReader);
      msg.setClientLocality(value);
      break;
    case 6:
      var value = new tensorflow_core_framework_device_attributes_pb.DeviceLocality;
      reader.readMessage(value,tensorflow_core_framework_device_attributes_pb.DeviceLocality.deserializeBinaryFromReader);
      msg.setServerLocality(value);
      break;
    case 7:
      var value = new google_protobuf_any_pb.Any;
      reader.readMessage(value,google_protobuf_any_pb.Any.deserializeBinaryFromReader);
      msg.setTransportOptions(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setSrcDevice(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setDstDevice(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setRequestId(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setSrcIncarnation(value);
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
proto.tensorflow.RecvBufRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tensorflow.RecvBufRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tensorflow.RecvBufRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tensorflow.RecvBufRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStepId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getBufRendezvousKey();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getNumBytes();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getBufPtr();
  if (f !== 0) {
    writer.writeFixed64(
      4,
      f
    );
  }
  f = message.getClientLocality();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      tensorflow_core_framework_device_attributes_pb.DeviceLocality.serializeBinaryToWriter
    );
  }
  f = message.getServerLocality();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      tensorflow_core_framework_device_attributes_pb.DeviceLocality.serializeBinaryToWriter
    );
  }
  f = message.getTransportOptions();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      google_protobuf_any_pb.Any.serializeBinaryToWriter
    );
  }
  f = message.getSrcDevice();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getDstDevice();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getRequestId();
  if (f !== 0) {
    writer.writeInt64(
      10,
      f
    );
  }
  f = message.getSrcIncarnation();
  if (f !== 0) {
    writer.writeUint64(
      11,
      f
    );
  }
};


/**
 * optional int64 step_id = 1;
 * @return {number}
 */
proto.tensorflow.RecvBufRequest.prototype.getStepId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.tensorflow.RecvBufRequest} returns this
 */
proto.tensorflow.RecvBufRequest.prototype.setStepId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string buf_rendezvous_key = 2;
 * @return {string}
 */
proto.tensorflow.RecvBufRequest.prototype.getBufRendezvousKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.tensorflow.RecvBufRequest} returns this
 */
proto.tensorflow.RecvBufRequest.prototype.setBufRendezvousKey = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int64 num_bytes = 3;
 * @return {number}
 */
proto.tensorflow.RecvBufRequest.prototype.getNumBytes = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.tensorflow.RecvBufRequest} returns this
 */
proto.tensorflow.RecvBufRequest.prototype.setNumBytes = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional fixed64 buf_ptr = 4;
 * @return {number}
 */
proto.tensorflow.RecvBufRequest.prototype.getBufPtr = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.tensorflow.RecvBufRequest} returns this
 */
proto.tensorflow.RecvBufRequest.prototype.setBufPtr = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional DeviceLocality client_locality = 5;
 * @return {?proto.tensorflow.DeviceLocality}
 */
proto.tensorflow.RecvBufRequest.prototype.getClientLocality = function() {
  return /** @type{?proto.tensorflow.DeviceLocality} */ (
    jspb.Message.getWrapperField(this, tensorflow_core_framework_device_attributes_pb.DeviceLocality, 5));
};


/**
 * @param {?proto.tensorflow.DeviceLocality|undefined} value
 * @return {!proto.tensorflow.RecvBufRequest} returns this
*/
proto.tensorflow.RecvBufRequest.prototype.setClientLocality = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tensorflow.RecvBufRequest} returns this
 */
proto.tensorflow.RecvBufRequest.prototype.clearClientLocality = function() {
  return this.setClientLocality(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tensorflow.RecvBufRequest.prototype.hasClientLocality = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional DeviceLocality server_locality = 6;
 * @return {?proto.tensorflow.DeviceLocality}
 */
proto.tensorflow.RecvBufRequest.prototype.getServerLocality = function() {
  return /** @type{?proto.tensorflow.DeviceLocality} */ (
    jspb.Message.getWrapperField(this, tensorflow_core_framework_device_attributes_pb.DeviceLocality, 6));
};


/**
 * @param {?proto.tensorflow.DeviceLocality|undefined} value
 * @return {!proto.tensorflow.RecvBufRequest} returns this
*/
proto.tensorflow.RecvBufRequest.prototype.setServerLocality = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tensorflow.RecvBufRequest} returns this
 */
proto.tensorflow.RecvBufRequest.prototype.clearServerLocality = function() {
  return this.setServerLocality(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tensorflow.RecvBufRequest.prototype.hasServerLocality = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional google.protobuf.Any transport_options = 7;
 * @return {?proto.google.protobuf.Any}
 */
proto.tensorflow.RecvBufRequest.prototype.getTransportOptions = function() {
  return /** @type{?proto.google.protobuf.Any} */ (
    jspb.Message.getWrapperField(this, google_protobuf_any_pb.Any, 7));
};


/**
 * @param {?proto.google.protobuf.Any|undefined} value
 * @return {!proto.tensorflow.RecvBufRequest} returns this
*/
proto.tensorflow.RecvBufRequest.prototype.setTransportOptions = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tensorflow.RecvBufRequest} returns this
 */
proto.tensorflow.RecvBufRequest.prototype.clearTransportOptions = function() {
  return this.setTransportOptions(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tensorflow.RecvBufRequest.prototype.hasTransportOptions = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional string src_device = 8;
 * @return {string}
 */
proto.tensorflow.RecvBufRequest.prototype.getSrcDevice = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.tensorflow.RecvBufRequest} returns this
 */
proto.tensorflow.RecvBufRequest.prototype.setSrcDevice = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string dst_device = 9;
 * @return {string}
 */
proto.tensorflow.RecvBufRequest.prototype.getDstDevice = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.tensorflow.RecvBufRequest} returns this
 */
proto.tensorflow.RecvBufRequest.prototype.setDstDevice = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional int64 request_id = 10;
 * @return {number}
 */
proto.tensorflow.RecvBufRequest.prototype.getRequestId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.tensorflow.RecvBufRequest} returns this
 */
proto.tensorflow.RecvBufRequest.prototype.setRequestId = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional uint64 src_incarnation = 11;
 * @return {number}
 */
proto.tensorflow.RecvBufRequest.prototype.getSrcIncarnation = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.tensorflow.RecvBufRequest} returns this
 */
proto.tensorflow.RecvBufRequest.prototype.setSrcIncarnation = function(value) {
  return jspb.Message.setProto3IntField(this, 11, value);
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
proto.tensorflow.RecvBufResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.tensorflow.RecvBufResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tensorflow.RecvBufResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tensorflow.RecvBufResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    bufPtr: jspb.Message.getFieldWithDefault(msg, 1, 0),
    numBytes: jspb.Message.getFieldWithDefault(msg, 2, 0),
    isDead: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    transportOptions: (f = msg.getTransportOptions()) && google_protobuf_any_pb.Any.toObject(includeInstance, f),
    sendStartMicros: jspb.Message.getFieldWithDefault(msg, 5, 0),
    requireAck: jspb.Message.getBooleanFieldWithDefault(msg, 6, false)
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
 * @return {!proto.tensorflow.RecvBufResponse}
 */
proto.tensorflow.RecvBufResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tensorflow.RecvBufResponse;
  return proto.tensorflow.RecvBufResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tensorflow.RecvBufResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tensorflow.RecvBufResponse}
 */
proto.tensorflow.RecvBufResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFixed64());
      msg.setBufPtr(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setNumBytes(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsDead(value);
      break;
    case 4:
      var value = new google_protobuf_any_pb.Any;
      reader.readMessage(value,google_protobuf_any_pb.Any.deserializeBinaryFromReader);
      msg.setTransportOptions(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSendStartMicros(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setRequireAck(value);
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
proto.tensorflow.RecvBufResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tensorflow.RecvBufResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tensorflow.RecvBufResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tensorflow.RecvBufResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBufPtr();
  if (f !== 0) {
    writer.writeFixed64(
      1,
      f
    );
  }
  f = message.getNumBytes();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getIsDead();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getTransportOptions();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_any_pb.Any.serializeBinaryToWriter
    );
  }
  f = message.getSendStartMicros();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getRequireAck();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
};


/**
 * optional fixed64 buf_ptr = 1;
 * @return {number}
 */
proto.tensorflow.RecvBufResponse.prototype.getBufPtr = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.tensorflow.RecvBufResponse} returns this
 */
proto.tensorflow.RecvBufResponse.prototype.setBufPtr = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 num_bytes = 2;
 * @return {number}
 */
proto.tensorflow.RecvBufResponse.prototype.getNumBytes = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.tensorflow.RecvBufResponse} returns this
 */
proto.tensorflow.RecvBufResponse.prototype.setNumBytes = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional bool is_dead = 3;
 * @return {boolean}
 */
proto.tensorflow.RecvBufResponse.prototype.getIsDead = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.tensorflow.RecvBufResponse} returns this
 */
proto.tensorflow.RecvBufResponse.prototype.setIsDead = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional google.protobuf.Any transport_options = 4;
 * @return {?proto.google.protobuf.Any}
 */
proto.tensorflow.RecvBufResponse.prototype.getTransportOptions = function() {
  return /** @type{?proto.google.protobuf.Any} */ (
    jspb.Message.getWrapperField(this, google_protobuf_any_pb.Any, 4));
};


/**
 * @param {?proto.google.protobuf.Any|undefined} value
 * @return {!proto.tensorflow.RecvBufResponse} returns this
*/
proto.tensorflow.RecvBufResponse.prototype.setTransportOptions = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tensorflow.RecvBufResponse} returns this
 */
proto.tensorflow.RecvBufResponse.prototype.clearTransportOptions = function() {
  return this.setTransportOptions(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tensorflow.RecvBufResponse.prototype.hasTransportOptions = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional int64 send_start_micros = 5;
 * @return {number}
 */
proto.tensorflow.RecvBufResponse.prototype.getSendStartMicros = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.tensorflow.RecvBufResponse} returns this
 */
proto.tensorflow.RecvBufResponse.prototype.setSendStartMicros = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional bool require_ack = 6;
 * @return {boolean}
 */
proto.tensorflow.RecvBufResponse.prototype.getRequireAck = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.tensorflow.RecvBufResponse} returns this
 */
proto.tensorflow.RecvBufResponse.prototype.setRequireAck = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
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
proto.tensorflow.CompleteGroupRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tensorflow.CompleteGroupRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tensorflow.CompleteGroupRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tensorflow.CompleteGroupRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    groupKey: jspb.Message.getFieldWithDefault(msg, 1, 0),
    groupSize: jspb.Message.getFieldWithDefault(msg, 2, 0),
    deviceType: jspb.Message.getFieldWithDefault(msg, 3, ""),
    collectiveType: jspb.Message.getFieldWithDefault(msg, 5, 0),
    deviceAttributes: (f = msg.getDeviceAttributes()) && tensorflow_core_framework_device_attributes_pb.DeviceAttributes.toObject(includeInstance, f)
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
 * @return {!proto.tensorflow.CompleteGroupRequest}
 */
proto.tensorflow.CompleteGroupRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tensorflow.CompleteGroupRequest;
  return proto.tensorflow.CompleteGroupRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tensorflow.CompleteGroupRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tensorflow.CompleteGroupRequest}
 */
proto.tensorflow.CompleteGroupRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setGroupKey(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setGroupSize(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDeviceType(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCollectiveType(value);
      break;
    case 6:
      var value = new tensorflow_core_framework_device_attributes_pb.DeviceAttributes;
      reader.readMessage(value,tensorflow_core_framework_device_attributes_pb.DeviceAttributes.deserializeBinaryFromReader);
      msg.setDeviceAttributes(value);
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
proto.tensorflow.CompleteGroupRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tensorflow.CompleteGroupRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tensorflow.CompleteGroupRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tensorflow.CompleteGroupRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGroupKey();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getGroupSize();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getDeviceType();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getCollectiveType();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getDeviceAttributes();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      tensorflow_core_framework_device_attributes_pb.DeviceAttributes.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 group_key = 1;
 * @return {number}
 */
proto.tensorflow.CompleteGroupRequest.prototype.getGroupKey = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.tensorflow.CompleteGroupRequest} returns this
 */
proto.tensorflow.CompleteGroupRequest.prototype.setGroupKey = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 group_size = 2;
 * @return {number}
 */
proto.tensorflow.CompleteGroupRequest.prototype.getGroupSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.tensorflow.CompleteGroupRequest} returns this
 */
proto.tensorflow.CompleteGroupRequest.prototype.setGroupSize = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string device_type = 3;
 * @return {string}
 */
proto.tensorflow.CompleteGroupRequest.prototype.getDeviceType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.tensorflow.CompleteGroupRequest} returns this
 */
proto.tensorflow.CompleteGroupRequest.prototype.setDeviceType = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int32 collective_type = 5;
 * @return {number}
 */
proto.tensorflow.CompleteGroupRequest.prototype.getCollectiveType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.tensorflow.CompleteGroupRequest} returns this
 */
proto.tensorflow.CompleteGroupRequest.prototype.setCollectiveType = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional DeviceAttributes device_attributes = 6;
 * @return {?proto.tensorflow.DeviceAttributes}
 */
proto.tensorflow.CompleteGroupRequest.prototype.getDeviceAttributes = function() {
  return /** @type{?proto.tensorflow.DeviceAttributes} */ (
    jspb.Message.getWrapperField(this, tensorflow_core_framework_device_attributes_pb.DeviceAttributes, 6));
};


/**
 * @param {?proto.tensorflow.DeviceAttributes|undefined} value
 * @return {!proto.tensorflow.CompleteGroupRequest} returns this
*/
proto.tensorflow.CompleteGroupRequest.prototype.setDeviceAttributes = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tensorflow.CompleteGroupRequest} returns this
 */
proto.tensorflow.CompleteGroupRequest.prototype.clearDeviceAttributes = function() {
  return this.setDeviceAttributes(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tensorflow.CompleteGroupRequest.prototype.hasDeviceAttributes = function() {
  return jspb.Message.getField(this, 6) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tensorflow.CompleteGroupResponse.repeatedFields_ = [8];



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
proto.tensorflow.CompleteGroupResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.tensorflow.CompleteGroupResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tensorflow.CompleteGroupResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tensorflow.CompleteGroupResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    groupKey: jspb.Message.getFieldWithDefault(msg, 1, 0),
    groupSize: jspb.Message.getFieldWithDefault(msg, 2, 0),
    deviceType: jspb.Message.getFieldWithDefault(msg, 3, ""),
    numTasks: jspb.Message.getFieldWithDefault(msg, 4, 0),
    communicatorKey: msg.getCommunicatorKey_asB64(),
    deviceAttributesList: jspb.Message.toObjectList(msg.getDeviceAttributesList(),
    tensorflow_core_framework_device_attributes_pb.DeviceAttributes.toObject, includeInstance)
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
 * @return {!proto.tensorflow.CompleteGroupResponse}
 */
proto.tensorflow.CompleteGroupResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tensorflow.CompleteGroupResponse;
  return proto.tensorflow.CompleteGroupResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tensorflow.CompleteGroupResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tensorflow.CompleteGroupResponse}
 */
proto.tensorflow.CompleteGroupResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setGroupKey(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setGroupSize(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDeviceType(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setNumTasks(value);
      break;
    case 7:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setCommunicatorKey(value);
      break;
    case 8:
      var value = new tensorflow_core_framework_device_attributes_pb.DeviceAttributes;
      reader.readMessage(value,tensorflow_core_framework_device_attributes_pb.DeviceAttributes.deserializeBinaryFromReader);
      msg.addDeviceAttributes(value);
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
proto.tensorflow.CompleteGroupResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tensorflow.CompleteGroupResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tensorflow.CompleteGroupResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tensorflow.CompleteGroupResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGroupKey();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getGroupSize();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getDeviceType();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getNumTasks();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getCommunicatorKey_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      7,
      f
    );
  }
  f = message.getDeviceAttributesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      8,
      f,
      tensorflow_core_framework_device_attributes_pb.DeviceAttributes.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 group_key = 1;
 * @return {number}
 */
proto.tensorflow.CompleteGroupResponse.prototype.getGroupKey = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.tensorflow.CompleteGroupResponse} returns this
 */
proto.tensorflow.CompleteGroupResponse.prototype.setGroupKey = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 group_size = 2;
 * @return {number}
 */
proto.tensorflow.CompleteGroupResponse.prototype.getGroupSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.tensorflow.CompleteGroupResponse} returns this
 */
proto.tensorflow.CompleteGroupResponse.prototype.setGroupSize = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string device_type = 3;
 * @return {string}
 */
proto.tensorflow.CompleteGroupResponse.prototype.getDeviceType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.tensorflow.CompleteGroupResponse} returns this
 */
proto.tensorflow.CompleteGroupResponse.prototype.setDeviceType = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int32 num_tasks = 4;
 * @return {number}
 */
proto.tensorflow.CompleteGroupResponse.prototype.getNumTasks = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.tensorflow.CompleteGroupResponse} returns this
 */
proto.tensorflow.CompleteGroupResponse.prototype.setNumTasks = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional bytes communicator_key = 7;
 * @return {!(string|Uint8Array)}
 */
proto.tensorflow.CompleteGroupResponse.prototype.getCommunicatorKey = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * optional bytes communicator_key = 7;
 * This is a type-conversion wrapper around `getCommunicatorKey()`
 * @return {string}
 */
proto.tensorflow.CompleteGroupResponse.prototype.getCommunicatorKey_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getCommunicatorKey()));
};


/**
 * optional bytes communicator_key = 7;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getCommunicatorKey()`
 * @return {!Uint8Array}
 */
proto.tensorflow.CompleteGroupResponse.prototype.getCommunicatorKey_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getCommunicatorKey()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.tensorflow.CompleteGroupResponse} returns this
 */
proto.tensorflow.CompleteGroupResponse.prototype.setCommunicatorKey = function(value) {
  return jspb.Message.setProto3BytesField(this, 7, value);
};


/**
 * repeated DeviceAttributes device_attributes = 8;
 * @return {!Array<!proto.tensorflow.DeviceAttributes>}
 */
proto.tensorflow.CompleteGroupResponse.prototype.getDeviceAttributesList = function() {
  return /** @type{!Array<!proto.tensorflow.DeviceAttributes>} */ (
    jspb.Message.getRepeatedWrapperField(this, tensorflow_core_framework_device_attributes_pb.DeviceAttributes, 8));
};


/**
 * @param {!Array<!proto.tensorflow.DeviceAttributes>} value
 * @return {!proto.tensorflow.CompleteGroupResponse} returns this
*/
proto.tensorflow.CompleteGroupResponse.prototype.setDeviceAttributesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 8, value);
};


/**
 * @param {!proto.tensorflow.DeviceAttributes=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tensorflow.DeviceAttributes}
 */
proto.tensorflow.CompleteGroupResponse.prototype.addDeviceAttributes = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 8, opt_value, proto.tensorflow.DeviceAttributes, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tensorflow.CompleteGroupResponse} returns this
 */
proto.tensorflow.CompleteGroupResponse.prototype.clearDeviceAttributesList = function() {
  return this.setDeviceAttributesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tensorflow.CompleteInstanceRequest.repeatedFields_ = [9];



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
proto.tensorflow.CompleteInstanceRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tensorflow.CompleteInstanceRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tensorflow.CompleteInstanceRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tensorflow.CompleteInstanceRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    type: jspb.Message.getFieldWithDefault(msg, 2, 0),
    dataType: jspb.Message.getFieldWithDefault(msg, 3, 0),
    shape: (f = msg.getShape()) && tensorflow_core_framework_tensor_shape_pb.TensorShapeProto.toObject(includeInstance, f),
    groupKey: jspb.Message.getFieldWithDefault(msg, 5, 0),
    groupSize: jspb.Message.getFieldWithDefault(msg, 6, 0),
    instanceKey: jspb.Message.getFieldWithDefault(msg, 7, 0),
    deviceType: jspb.Message.getFieldWithDefault(msg, 8, ""),
    subdivOffsetList: (f = jspb.Message.getRepeatedField(msg, 9)) == null ? undefined : f,
    device: jspb.Message.getFieldWithDefault(msg, 10, ""),
    isSource: jspb.Message.getBooleanFieldWithDefault(msg, 11, false)
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
 * @return {!proto.tensorflow.CompleteInstanceRequest}
 */
proto.tensorflow.CompleteInstanceRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tensorflow.CompleteInstanceRequest;
  return proto.tensorflow.CompleteInstanceRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tensorflow.CompleteInstanceRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tensorflow.CompleteInstanceRequest}
 */
proto.tensorflow.CompleteInstanceRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {number} */ (reader.readInt32());
      msg.setType(value);
      break;
    case 3:
      var value = /** @type {!proto.tensorflow.DataType} */ (reader.readEnum());
      msg.setDataType(value);
      break;
    case 4:
      var value = new tensorflow_core_framework_tensor_shape_pb.TensorShapeProto;
      reader.readMessage(value,tensorflow_core_framework_tensor_shape_pb.TensorShapeProto.deserializeBinaryFromReader);
      msg.setShape(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setGroupKey(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setGroupSize(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setInstanceKey(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setDeviceType(value);
      break;
    case 9:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedInt32() : [reader.readInt32()]);
      for (var i = 0; i < values.length; i++) {
        msg.addSubdivOffset(values[i]);
      }
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setDevice(value);
      break;
    case 11:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsSource(value);
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
proto.tensorflow.CompleteInstanceRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tensorflow.CompleteInstanceRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tensorflow.CompleteInstanceRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tensorflow.CompleteInstanceRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getType();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getDataType();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getShape();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      tensorflow_core_framework_tensor_shape_pb.TensorShapeProto.serializeBinaryToWriter
    );
  }
  f = message.getGroupKey();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getGroupSize();
  if (f !== 0) {
    writer.writeInt32(
      6,
      f
    );
  }
  f = message.getInstanceKey();
  if (f !== 0) {
    writer.writeInt32(
      7,
      f
    );
  }
  f = message.getDeviceType();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getSubdivOffsetList();
  if (f.length > 0) {
    writer.writePackedInt32(
      9,
      f
    );
  }
  f = message.getDevice();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getIsSource();
  if (f) {
    writer.writeBool(
      11,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.tensorflow.CompleteInstanceRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.tensorflow.CompleteInstanceRequest} returns this
 */
proto.tensorflow.CompleteInstanceRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 type = 2;
 * @return {number}
 */
proto.tensorflow.CompleteInstanceRequest.prototype.getType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.tensorflow.CompleteInstanceRequest} returns this
 */
proto.tensorflow.CompleteInstanceRequest.prototype.setType = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional DataType data_type = 3;
 * @return {!proto.tensorflow.DataType}
 */
proto.tensorflow.CompleteInstanceRequest.prototype.getDataType = function() {
  return /** @type {!proto.tensorflow.DataType} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.tensorflow.DataType} value
 * @return {!proto.tensorflow.CompleteInstanceRequest} returns this
 */
proto.tensorflow.CompleteInstanceRequest.prototype.setDataType = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional TensorShapeProto shape = 4;
 * @return {?proto.tensorflow.TensorShapeProto}
 */
proto.tensorflow.CompleteInstanceRequest.prototype.getShape = function() {
  return /** @type{?proto.tensorflow.TensorShapeProto} */ (
    jspb.Message.getWrapperField(this, tensorflow_core_framework_tensor_shape_pb.TensorShapeProto, 4));
};


/**
 * @param {?proto.tensorflow.TensorShapeProto|undefined} value
 * @return {!proto.tensorflow.CompleteInstanceRequest} returns this
*/
proto.tensorflow.CompleteInstanceRequest.prototype.setShape = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.tensorflow.CompleteInstanceRequest} returns this
 */
proto.tensorflow.CompleteInstanceRequest.prototype.clearShape = function() {
  return this.setShape(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.tensorflow.CompleteInstanceRequest.prototype.hasShape = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional int32 group_key = 5;
 * @return {number}
 */
proto.tensorflow.CompleteInstanceRequest.prototype.getGroupKey = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.tensorflow.CompleteInstanceRequest} returns this
 */
proto.tensorflow.CompleteInstanceRequest.prototype.setGroupKey = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int32 group_size = 6;
 * @return {number}
 */
proto.tensorflow.CompleteInstanceRequest.prototype.getGroupSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.tensorflow.CompleteInstanceRequest} returns this
 */
proto.tensorflow.CompleteInstanceRequest.prototype.setGroupSize = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional int32 instance_key = 7;
 * @return {number}
 */
proto.tensorflow.CompleteInstanceRequest.prototype.getInstanceKey = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.tensorflow.CompleteInstanceRequest} returns this
 */
proto.tensorflow.CompleteInstanceRequest.prototype.setInstanceKey = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional string device_type = 8;
 * @return {string}
 */
proto.tensorflow.CompleteInstanceRequest.prototype.getDeviceType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.tensorflow.CompleteInstanceRequest} returns this
 */
proto.tensorflow.CompleteInstanceRequest.prototype.setDeviceType = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * repeated int32 subdiv_offset = 9;
 * @return {!Array<number>}
 */
proto.tensorflow.CompleteInstanceRequest.prototype.getSubdivOffsetList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 9));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.tensorflow.CompleteInstanceRequest} returns this
 */
proto.tensorflow.CompleteInstanceRequest.prototype.setSubdivOffsetList = function(value) {
  return jspb.Message.setField(this, 9, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.tensorflow.CompleteInstanceRequest} returns this
 */
proto.tensorflow.CompleteInstanceRequest.prototype.addSubdivOffset = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 9, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tensorflow.CompleteInstanceRequest} returns this
 */
proto.tensorflow.CompleteInstanceRequest.prototype.clearSubdivOffsetList = function() {
  return this.setSubdivOffsetList([]);
};


/**
 * optional string device = 10;
 * @return {string}
 */
proto.tensorflow.CompleteInstanceRequest.prototype.getDevice = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.tensorflow.CompleteInstanceRequest} returns this
 */
proto.tensorflow.CompleteInstanceRequest.prototype.setDevice = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional bool is_source = 11;
 * @return {boolean}
 */
proto.tensorflow.CompleteInstanceRequest.prototype.getIsSource = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 11, false));
};


/**
 * @param {boolean} value
 * @return {!proto.tensorflow.CompleteInstanceRequest} returns this
 */
proto.tensorflow.CompleteInstanceRequest.prototype.setIsSource = function(value) {
  return jspb.Message.setProto3BooleanField(this, 11, value);
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
proto.tensorflow.CompleteInstanceResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.tensorflow.CompleteInstanceResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tensorflow.CompleteInstanceResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tensorflow.CompleteInstanceResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    instanceKey: jspb.Message.getFieldWithDefault(msg, 1, 0),
    sourceRank: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.tensorflow.CompleteInstanceResponse}
 */
proto.tensorflow.CompleteInstanceResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tensorflow.CompleteInstanceResponse;
  return proto.tensorflow.CompleteInstanceResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tensorflow.CompleteInstanceResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tensorflow.CompleteInstanceResponse}
 */
proto.tensorflow.CompleteInstanceResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setInstanceKey(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSourceRank(value);
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
proto.tensorflow.CompleteInstanceResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tensorflow.CompleteInstanceResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tensorflow.CompleteInstanceResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tensorflow.CompleteInstanceResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInstanceKey();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getSourceRank();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * optional int32 instance_key = 1;
 * @return {number}
 */
proto.tensorflow.CompleteInstanceResponse.prototype.getInstanceKey = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.tensorflow.CompleteInstanceResponse} returns this
 */
proto.tensorflow.CompleteInstanceResponse.prototype.setInstanceKey = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 source_rank = 2;
 * @return {number}
 */
proto.tensorflow.CompleteInstanceResponse.prototype.getSourceRank = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.tensorflow.CompleteInstanceResponse} returns this
 */
proto.tensorflow.CompleteInstanceResponse.prototype.setSourceRank = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tensorflow.GetStepSequenceRequest.repeatedFields_ = [1];



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
proto.tensorflow.GetStepSequenceRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.tensorflow.GetStepSequenceRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tensorflow.GetStepSequenceRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tensorflow.GetStepSequenceRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    graphKeyList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
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
 * @return {!proto.tensorflow.GetStepSequenceRequest}
 */
proto.tensorflow.GetStepSequenceRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tensorflow.GetStepSequenceRequest;
  return proto.tensorflow.GetStepSequenceRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tensorflow.GetStepSequenceRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tensorflow.GetStepSequenceRequest}
 */
proto.tensorflow.GetStepSequenceRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedInt64() : [reader.readInt64()]);
      for (var i = 0; i < values.length; i++) {
        msg.addGraphKey(values[i]);
      }
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
proto.tensorflow.GetStepSequenceRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tensorflow.GetStepSequenceRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tensorflow.GetStepSequenceRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tensorflow.GetStepSequenceRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGraphKeyList();
  if (f.length > 0) {
    writer.writePackedInt64(
      1,
      f
    );
  }
};


/**
 * repeated int64 graph_key = 1;
 * @return {!Array<number>}
 */
proto.tensorflow.GetStepSequenceRequest.prototype.getGraphKeyList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.tensorflow.GetStepSequenceRequest} returns this
 */
proto.tensorflow.GetStepSequenceRequest.prototype.setGraphKeyList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.tensorflow.GetStepSequenceRequest} returns this
 */
proto.tensorflow.GetStepSequenceRequest.prototype.addGraphKey = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tensorflow.GetStepSequenceRequest} returns this
 */
proto.tensorflow.GetStepSequenceRequest.prototype.clearGraphKeyList = function() {
  return this.setGraphKeyList([]);
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
proto.tensorflow.StepSequence.prototype.toObject = function(opt_includeInstance) {
  return proto.tensorflow.StepSequence.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tensorflow.StepSequence} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tensorflow.StepSequence.toObject = function(includeInstance, msg) {
  var f, obj = {
    graphKey: jspb.Message.getFieldWithDefault(msg, 1, 0),
    nextStepId: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.tensorflow.StepSequence}
 */
proto.tensorflow.StepSequence.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tensorflow.StepSequence;
  return proto.tensorflow.StepSequence.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tensorflow.StepSequence} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tensorflow.StepSequence}
 */
proto.tensorflow.StepSequence.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setGraphKey(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setNextStepId(value);
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
proto.tensorflow.StepSequence.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tensorflow.StepSequence.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tensorflow.StepSequence} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tensorflow.StepSequence.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGraphKey();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getNextStepId();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional int64 graph_key = 1;
 * @return {number}
 */
proto.tensorflow.StepSequence.prototype.getGraphKey = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.tensorflow.StepSequence} returns this
 */
proto.tensorflow.StepSequence.prototype.setGraphKey = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 next_step_id = 2;
 * @return {number}
 */
proto.tensorflow.StepSequence.prototype.getNextStepId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.tensorflow.StepSequence} returns this
 */
proto.tensorflow.StepSequence.prototype.setNextStepId = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.tensorflow.GetStepSequenceResponse.repeatedFields_ = [1];



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
proto.tensorflow.GetStepSequenceResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.tensorflow.GetStepSequenceResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.tensorflow.GetStepSequenceResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tensorflow.GetStepSequenceResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    stepSequenceList: jspb.Message.toObjectList(msg.getStepSequenceList(),
    proto.tensorflow.StepSequence.toObject, includeInstance)
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
 * @return {!proto.tensorflow.GetStepSequenceResponse}
 */
proto.tensorflow.GetStepSequenceResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.tensorflow.GetStepSequenceResponse;
  return proto.tensorflow.GetStepSequenceResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.tensorflow.GetStepSequenceResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.tensorflow.GetStepSequenceResponse}
 */
proto.tensorflow.GetStepSequenceResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.tensorflow.StepSequence;
      reader.readMessage(value,proto.tensorflow.StepSequence.deserializeBinaryFromReader);
      msg.addStepSequence(value);
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
proto.tensorflow.GetStepSequenceResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.tensorflow.GetStepSequenceResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.tensorflow.GetStepSequenceResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.tensorflow.GetStepSequenceResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStepSequenceList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.tensorflow.StepSequence.serializeBinaryToWriter
    );
  }
};


/**
 * repeated StepSequence step_sequence = 1;
 * @return {!Array<!proto.tensorflow.StepSequence>}
 */
proto.tensorflow.GetStepSequenceResponse.prototype.getStepSequenceList = function() {
  return /** @type{!Array<!proto.tensorflow.StepSequence>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.tensorflow.StepSequence, 1));
};


/**
 * @param {!Array<!proto.tensorflow.StepSequence>} value
 * @return {!proto.tensorflow.GetStepSequenceResponse} returns this
*/
proto.tensorflow.GetStepSequenceResponse.prototype.setStepSequenceList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.tensorflow.StepSequence=} opt_value
 * @param {number=} opt_index
 * @return {!proto.tensorflow.StepSequence}
 */
proto.tensorflow.GetStepSequenceResponse.prototype.addStepSequence = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.tensorflow.StepSequence, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.tensorflow.GetStepSequenceResponse} returns this
 */
proto.tensorflow.GetStepSequenceResponse.prototype.clearStepSequenceList = function() {
  return this.setStepSequenceList([]);
};


goog.object.extend(exports, proto.tensorflow);
