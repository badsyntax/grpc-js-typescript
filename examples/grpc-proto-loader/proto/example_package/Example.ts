// Original file: proto/example.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { ClientMessage as _example_package_ClientMessage, ClientMessage__Output as _example_package_ClientMessage__Output } from '../example_package/ClientMessage';
import type { ServerMessage as _example_package_ServerMessage, ServerMessage__Output as _example_package_ServerMessage__Output } from '../example_package/ServerMessage';

export interface ExampleClient extends grpc.Client {
  bidirectionalStreamingCall(metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientDuplexStream<_example_package_ClientMessage, _example_package_ServerMessage__Output>;
  bidirectionalStreamingCall(options?: grpc.CallOptions): grpc.ClientDuplexStream<_example_package_ClientMessage, _example_package_ServerMessage__Output>;
  bidirectionalStreamingCall(metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientDuplexStream<_example_package_ClientMessage, _example_package_ServerMessage__Output>;
  bidirectionalStreamingCall(options?: grpc.CallOptions): grpc.ClientDuplexStream<_example_package_ClientMessage, _example_package_ServerMessage__Output>;
  
  clientStreamingCall(metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _example_package_ServerMessage__Output) => void): grpc.ClientWritableStream<_example_package_ClientMessage>;
  clientStreamingCall(metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _example_package_ServerMessage__Output) => void): grpc.ClientWritableStream<_example_package_ClientMessage>;
  clientStreamingCall(options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _example_package_ServerMessage__Output) => void): grpc.ClientWritableStream<_example_package_ClientMessage>;
  clientStreamingCall(callback: (error?: grpc.ServiceError, result?: _example_package_ServerMessage__Output) => void): grpc.ClientWritableStream<_example_package_ClientMessage>;
  clientStreamingCall(metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _example_package_ServerMessage__Output) => void): grpc.ClientWritableStream<_example_package_ClientMessage>;
  clientStreamingCall(metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _example_package_ServerMessage__Output) => void): grpc.ClientWritableStream<_example_package_ClientMessage>;
  clientStreamingCall(options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _example_package_ServerMessage__Output) => void): grpc.ClientWritableStream<_example_package_ClientMessage>;
  clientStreamingCall(callback: (error?: grpc.ServiceError, result?: _example_package_ServerMessage__Output) => void): grpc.ClientWritableStream<_example_package_ClientMessage>;
  
  serverStreamingCall(argument: _example_package_ClientMessage, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_example_package_ServerMessage__Output>;
  serverStreamingCall(argument: _example_package_ClientMessage, options?: grpc.CallOptions): grpc.ClientReadableStream<_example_package_ServerMessage__Output>;
  serverStreamingCall(argument: _example_package_ClientMessage, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_example_package_ServerMessage__Output>;
  serverStreamingCall(argument: _example_package_ClientMessage, options?: grpc.CallOptions): grpc.ClientReadableStream<_example_package_ServerMessage__Output>;
  
  unaryCall(argument: _example_package_ClientMessage, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _example_package_ServerMessage__Output) => void): grpc.ClientUnaryCall;
  unaryCall(argument: _example_package_ClientMessage, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _example_package_ServerMessage__Output) => void): grpc.ClientUnaryCall;
  unaryCall(argument: _example_package_ClientMessage, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _example_package_ServerMessage__Output) => void): grpc.ClientUnaryCall;
  unaryCall(argument: _example_package_ClientMessage, callback: (error?: grpc.ServiceError, result?: _example_package_ServerMessage__Output) => void): grpc.ClientUnaryCall;
  unaryCall(argument: _example_package_ClientMessage, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _example_package_ServerMessage__Output) => void): grpc.ClientUnaryCall;
  unaryCall(argument: _example_package_ClientMessage, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _example_package_ServerMessage__Output) => void): grpc.ClientUnaryCall;
  unaryCall(argument: _example_package_ClientMessage, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _example_package_ServerMessage__Output) => void): grpc.ClientUnaryCall;
  unaryCall(argument: _example_package_ClientMessage, callback: (error?: grpc.ServiceError, result?: _example_package_ServerMessage__Output) => void): grpc.ClientUnaryCall;
  
}

export interface ExampleHandlers extends grpc.UntypedServiceImplementation {
  bidirectionalStreamingCall: grpc.handleBidiStreamingCall<_example_package_ClientMessage__Output, _example_package_ServerMessage>;
  
  clientStreamingCall: grpc.handleClientStreamingCall<_example_package_ClientMessage__Output, _example_package_ServerMessage>;
  
  serverStreamingCall: grpc.handleServerStreamingCall<_example_package_ClientMessage__Output, _example_package_ServerMessage>;
  
  unaryCall: grpc.handleUnaryCall<_example_package_ClientMessage__Output, _example_package_ServerMessage>;
  
}

export interface ExampleDefinition extends grpc.ServiceDefinition {
  bidirectionalStreamingCall: MethodDefinition<_example_package_ClientMessage, _example_package_ServerMessage, _example_package_ClientMessage__Output, _example_package_ServerMessage__Output>
  clientStreamingCall: MethodDefinition<_example_package_ClientMessage, _example_package_ServerMessage, _example_package_ClientMessage__Output, _example_package_ServerMessage__Output>
  serverStreamingCall: MethodDefinition<_example_package_ClientMessage, _example_package_ServerMessage, _example_package_ClientMessage__Output, _example_package_ServerMessage__Output>
  unaryCall: MethodDefinition<_example_package_ClientMessage, _example_package_ServerMessage, _example_package_ClientMessage__Output, _example_package_ServerMessage__Output>
}
