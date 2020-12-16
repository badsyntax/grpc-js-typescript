// GENERATED CODE -- DO NOT EDIT!

// package: example_package
// file: proto/example.proto

import * as proto_example_pb from "../proto/example_pb";
import * as grpc from "@grpc/grpc-js";

interface IExampleService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  unaryCall: grpc.MethodDefinition<proto_example_pb.ClientMessage, proto_example_pb.ServerMessage>;
  serverStreamingCall: grpc.MethodDefinition<proto_example_pb.ClientMessage, proto_example_pb.ServerMessage>;
  clientStreamingCall: grpc.MethodDefinition<proto_example_pb.ClientMessage, proto_example_pb.ServerMessage>;
  bidirectionalStreamingCall: grpc.MethodDefinition<proto_example_pb.ClientMessage, proto_example_pb.ServerMessage>;
}

export const ExampleService: IExampleService;

export interface IExampleServer extends grpc.UntypedServiceImplementation {
  unaryCall: grpc.handleUnaryCall<proto_example_pb.ClientMessage, proto_example_pb.ServerMessage>;
  serverStreamingCall: grpc.handleServerStreamingCall<proto_example_pb.ClientMessage, proto_example_pb.ServerMessage>;
  clientStreamingCall: grpc.handleClientStreamingCall<proto_example_pb.ClientMessage, proto_example_pb.ServerMessage>;
  bidirectionalStreamingCall: grpc.handleBidiStreamingCall<proto_example_pb.ClientMessage, proto_example_pb.ServerMessage>;
}

export class ExampleClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  unaryCall(argument: proto_example_pb.ClientMessage, callback: grpc.requestCallback<proto_example_pb.ServerMessage>): grpc.ClientUnaryCall;
  unaryCall(argument: proto_example_pb.ClientMessage, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<proto_example_pb.ServerMessage>): grpc.ClientUnaryCall;
  unaryCall(argument: proto_example_pb.ClientMessage, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<proto_example_pb.ServerMessage>): grpc.ClientUnaryCall;
  serverStreamingCall(argument: proto_example_pb.ClientMessage, metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientReadableStream<proto_example_pb.ServerMessage>;
  serverStreamingCall(argument: proto_example_pb.ClientMessage, metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientReadableStream<proto_example_pb.ServerMessage>;
  clientStreamingCall(callback: grpc.requestCallback<proto_example_pb.ServerMessage>): grpc.ClientWritableStream<proto_example_pb.ClientMessage>;
  clientStreamingCall(metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<proto_example_pb.ServerMessage>): grpc.ClientWritableStream<proto_example_pb.ClientMessage>;
  clientStreamingCall(metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<proto_example_pb.ServerMessage>): grpc.ClientWritableStream<proto_example_pb.ClientMessage>;
  bidirectionalStreamingCall(metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientDuplexStream<proto_example_pb.ClientMessage, proto_example_pb.ServerMessage>;
  bidirectionalStreamingCall(metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientDuplexStream<proto_example_pb.ClientMessage, proto_example_pb.ServerMessage>;
}
