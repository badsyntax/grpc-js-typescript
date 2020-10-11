// GENERATED CODE -- DO NOT EDIT!

// package: example_package
// file: example.proto

import * as example_pb from "./example_pb";
import * as grpc from "@grpc/grpc-js";

interface IExampleServerService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  unaryCall: grpc.MethodDefinition<example_pb.ClientMessage, example_pb.ServerMessage>;
  serverStreamingCall: grpc.MethodDefinition<example_pb.ClientMessage, example_pb.ServerMessage>;
  clientStreamingCall: grpc.MethodDefinition<example_pb.ClientMessage, example_pb.ServerMessage>;
  bidirectionalStreamingCall: grpc.MethodDefinition<example_pb.ClientMessage, example_pb.ServerMessage>;
}

export const ExampleServerService: IExampleServerService;

export class ExampleServerClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  unaryCall(argument: example_pb.ClientMessage, callback: grpc.requestCallback<example_pb.ServerMessage>): grpc.ClientUnaryCall;
  unaryCall(argument: example_pb.ClientMessage, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<example_pb.ServerMessage>): grpc.ClientUnaryCall;
  unaryCall(argument: example_pb.ClientMessage, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<example_pb.ServerMessage>): grpc.ClientUnaryCall;
  serverStreamingCall(argument: example_pb.ClientMessage, metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientReadableStream<example_pb.ServerMessage>;
  serverStreamingCall(argument: example_pb.ClientMessage, metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientReadableStream<example_pb.ServerMessage>;
  clientStreamingCall(callback: grpc.requestCallback<example_pb.ServerMessage>): grpc.ClientWritableStream<example_pb.ClientMessage>;
  clientStreamingCall(metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<example_pb.ServerMessage>): grpc.ClientWritableStream<example_pb.ClientMessage>;
  clientStreamingCall(metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<example_pb.ServerMessage>): grpc.ClientWritableStream<example_pb.ClientMessage>;
  bidirectionalStreamingCall(metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientDuplexStream<example_pb.ClientMessage, example_pb.ServerMessage>;
  bidirectionalStreamingCall(metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientDuplexStream<example_pb.ClientMessage, example_pb.ServerMessage>;
}
