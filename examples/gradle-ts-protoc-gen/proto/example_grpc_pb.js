// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var example_pb = require('./example_pb.js');

function serialize_example_package_ClientMessage(arg) {
  if (!(arg instanceof example_pb.ClientMessage)) {
    throw new Error('Expected argument of type example_package.ClientMessage');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_example_package_ClientMessage(buffer_arg) {
  return example_pb.ClientMessage.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_example_package_ServerMessage(arg) {
  if (!(arg instanceof example_pb.ServerMessage)) {
    throw new Error('Expected argument of type example_package.ServerMessage');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_example_package_ServerMessage(buffer_arg) {
  return example_pb.ServerMessage.deserializeBinary(new Uint8Array(buffer_arg));
}


var ExampleServerService = exports.ExampleServerService = {
  unaryCall: {
    path: '/example_package.ExampleServer/unaryCall',
    requestStream: false,
    responseStream: false,
    requestType: example_pb.ClientMessage,
    responseType: example_pb.ServerMessage,
    requestSerialize: serialize_example_package_ClientMessage,
    requestDeserialize: deserialize_example_package_ClientMessage,
    responseSerialize: serialize_example_package_ServerMessage,
    responseDeserialize: deserialize_example_package_ServerMessage,
  },
  serverStreamingCall: {
    path: '/example_package.ExampleServer/serverStreamingCall',
    requestStream: false,
    responseStream: true,
    requestType: example_pb.ClientMessage,
    responseType: example_pb.ServerMessage,
    requestSerialize: serialize_example_package_ClientMessage,
    requestDeserialize: deserialize_example_package_ClientMessage,
    responseSerialize: serialize_example_package_ServerMessage,
    responseDeserialize: deserialize_example_package_ServerMessage,
  },
  clientStreamingCall: {
    path: '/example_package.ExampleServer/clientStreamingCall',
    requestStream: true,
    responseStream: false,
    requestType: example_pb.ClientMessage,
    responseType: example_pb.ServerMessage,
    requestSerialize: serialize_example_package_ClientMessage,
    requestDeserialize: deserialize_example_package_ClientMessage,
    responseSerialize: serialize_example_package_ServerMessage,
    responseDeserialize: deserialize_example_package_ServerMessage,
  },
  bidirectionalStreamingCall: {
    path: '/example_package.ExampleServer/bidirectionalStreamingCall',
    requestStream: true,
    responseStream: true,
    requestType: example_pb.ClientMessage,
    responseType: example_pb.ServerMessage,
    requestSerialize: serialize_example_package_ClientMessage,
    requestDeserialize: deserialize_example_package_ClientMessage,
    responseSerialize: serialize_example_package_ServerMessage,
    responseDeserialize: deserialize_example_package_ServerMessage,
  },
};

exports.ExampleServerClient = grpc.makeGenericClientConstructor(ExampleServerService);
