// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var proto_echo_service_pb = require('../proto/echo_service_pb.js');

function serialize_EchoMessage(arg) {
  if (!(arg instanceof proto_echo_service_pb.EchoMessage)) {
    throw new Error('Expected argument of type EchoMessage');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_EchoMessage(buffer_arg) {
  return proto_echo_service_pb.EchoMessage.deserializeBinary(new Uint8Array(buffer_arg));
}


var EchoServiceService = exports.EchoServiceService = {
  echo: {
    path: '/EchoService/Echo',
    requestStream: false,
    responseStream: false,
    requestType: proto_echo_service_pb.EchoMessage,
    responseType: proto_echo_service_pb.EchoMessage,
    requestSerialize: serialize_EchoMessage,
    requestDeserialize: deserialize_EchoMessage,
    responseSerialize: serialize_EchoMessage,
    responseDeserialize: deserialize_EchoMessage,
  },
  echoClientStream: {
    path: '/EchoService/EchoClientStream',
    requestStream: true,
    responseStream: false,
    requestType: proto_echo_service_pb.EchoMessage,
    responseType: proto_echo_service_pb.EchoMessage,
    requestSerialize: serialize_EchoMessage,
    requestDeserialize: deserialize_EchoMessage,
    responseSerialize: serialize_EchoMessage,
    responseDeserialize: deserialize_EchoMessage,
  },
  echoServerStream: {
    path: '/EchoService/EchoServerStream',
    requestStream: false,
    responseStream: true,
    requestType: proto_echo_service_pb.EchoMessage,
    responseType: proto_echo_service_pb.EchoMessage,
    requestSerialize: serialize_EchoMessage,
    requestDeserialize: deserialize_EchoMessage,
    responseSerialize: serialize_EchoMessage,
    responseDeserialize: deserialize_EchoMessage,
  },
  echoBidiStream: {
    path: '/EchoService/EchoBidiStream',
    requestStream: true,
    responseStream: true,
    requestType: proto_echo_service_pb.EchoMessage,
    responseType: proto_echo_service_pb.EchoMessage,
    requestSerialize: serialize_EchoMessage,
    requestDeserialize: deserialize_EchoMessage,
    responseSerialize: serialize_EchoMessage,
    responseDeserialize: deserialize_EchoMessage,
  },
};

exports.EchoServiceClient = grpc.makeGenericClientConstructor(EchoServiceService);
