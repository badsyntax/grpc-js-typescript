// GENERATED CODE -- DO NOT EDIT!

// package: 
// file: proto/echo_service.proto

import * as proto_echo_service_pb from "../proto/echo_service_pb";
import * as grpc from "@grpc/grpc-js";

interface IEchoServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  echo: grpc.MethodDefinition<proto_echo_service_pb.EchoMessage, proto_echo_service_pb.EchoMessage>;
  echoClientStream: grpc.MethodDefinition<proto_echo_service_pb.EchoMessage, proto_echo_service_pb.EchoMessage>;
  echoServerStream: grpc.MethodDefinition<proto_echo_service_pb.EchoMessage, proto_echo_service_pb.EchoMessage>;
  echoBidiStream: grpc.MethodDefinition<proto_echo_service_pb.EchoMessage, proto_echo_service_pb.EchoMessage>;
}

export const EchoServiceService: IEchoServiceService;

export class EchoServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  echo(argument: proto_echo_service_pb.EchoMessage, callback: grpc.requestCallback<proto_echo_service_pb.EchoMessage>): grpc.ClientUnaryCall;
  echo(argument: proto_echo_service_pb.EchoMessage, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<proto_echo_service_pb.EchoMessage>): grpc.ClientUnaryCall;
  echo(argument: proto_echo_service_pb.EchoMessage, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<proto_echo_service_pb.EchoMessage>): grpc.ClientUnaryCall;
  echoClientStream(callback: grpc.requestCallback<proto_echo_service_pb.EchoMessage>): grpc.ClientWritableStream<proto_echo_service_pb.EchoMessage>;
  echoClientStream(metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<proto_echo_service_pb.EchoMessage>): grpc.ClientWritableStream<proto_echo_service_pb.EchoMessage>;
  echoClientStream(metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<proto_echo_service_pb.EchoMessage>): grpc.ClientWritableStream<proto_echo_service_pb.EchoMessage>;
  echoServerStream(argument: proto_echo_service_pb.EchoMessage, metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientReadableStream<proto_echo_service_pb.EchoMessage>;
  echoServerStream(argument: proto_echo_service_pb.EchoMessage, metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientReadableStream<proto_echo_service_pb.EchoMessage>;
  echoBidiStream(metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientDuplexStream<proto_echo_service_pb.EchoMessage, proto_echo_service_pb.EchoMessage>;
  echoBidiStream(metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientDuplexStream<proto_echo_service_pb.EchoMessage, proto_echo_service_pb.EchoMessage>;
}
