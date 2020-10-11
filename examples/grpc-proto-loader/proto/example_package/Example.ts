// Original file: proto/example.proto

import * as grpc from '@grpc/grpc-js'
import { ClientMessage as _example_package_ClientMessage, ClientMessage__Output as _example_package_ClientMessage__Output } from '../example_package/ClientMessage';
import { ServerMessage as _example_package_ServerMessage, ServerMessage__Output as _example_package_ServerMessage__Output } from '../example_package/ServerMessage';

export interface ExampleClient extends grpc.Client {
  bidirectionalStreamingCall(metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientDuplexStream<_example_package_ClientMessage, _example_package_ServerMessage__Output>;
  bidirectionalStreamingCall(options?: grpc.CallOptions): grpc.ClientDuplexStream<_example_package_ClientMessage, _example_package_ServerMessage__Output>;
  bidirectionalStreamingCall(metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientDuplexStream<_example_package_ClientMessage, _example_package_ServerMessage__Output>;
  bidirectionalStreamingCall(options?: grpc.CallOptions): grpc.ClientDuplexStream<_example_package_ClientMessage, _example_package_ServerMessage__Output>;
  
  clientStreamingCall(metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _example_package_ServerMessage__Output) => void): grpc.ClientWritableStream<_example_package_ServerMessage__Output>;
  clientStreamingCall(metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _example_package_ServerMessage__Output) => void): grpc.ClientWritableStream<_example_package_ServerMessage__Output>;
  clientStreamingCall(options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _example_package_ServerMessage__Output) => void): grpc.ClientWritableStream<_example_package_ServerMessage__Output>;
  clientStreamingCall(callback: (error?: grpc.ServiceError, result?: _example_package_ServerMessage__Output) => void): grpc.ClientWritableStream<_example_package_ServerMessage__Output>;
  clientStreamingCall(metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _example_package_ServerMessage__Output) => void): grpc.ClientWritableStream<_example_package_ServerMessage__Output>;
  clientStreamingCall(metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _example_package_ServerMessage__Output) => void): grpc.ClientWritableStream<_example_package_ServerMessage__Output>;
  clientStreamingCall(options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _example_package_ServerMessage__Output) => void): grpc.ClientWritableStream<_example_package_ServerMessage__Output>;
  clientStreamingCall(callback: (error?: grpc.ServiceError, result?: _example_package_ServerMessage__Output) => void): grpc.ClientWritableStream<_example_package_ServerMessage__Output>;
  
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
  bidirectionalStreamingCall(call: grpc.ServerDuplexStream<_example_package_ClientMessage__Output, _example_package_ServerMessage>): void;
  
  clientStreamingCall(call: grpc.ServerReadableStream<_example_package_ClientMessage__Output, _example_package_ServerMessage>, callback: grpc.sendUnaryData<_example_package_ServerMessage>): void;
  
  serverStreamingCall(call: grpc.ServerWritableStream<_example_package_ClientMessage__Output, _example_package_ServerMessage>): void;
  
  unaryCall(call: grpc.ServerUnaryCall<_example_package_ClientMessage__Output, _example_package_ServerMessage>, callback: grpc.sendUnaryData<_example_package_ServerMessage>): void;
  
}
