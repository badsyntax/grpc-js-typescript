// Original file: proto/chat.proto

import * as grpc from '@grpc/grpc-js'
import { ClientMessage as _chat_package_ClientMessage, ClientMessage__Output as _chat_package_ClientMessage__Output } from '../chat_package/ClientMessage';
import { ServerMessage as _chat_package_ServerMessage, ServerMessage__Output as _chat_package_ServerMessage__Output } from '../chat_package/ServerMessage';

export interface ChatClient extends grpc.Client {
  join(argument: _chat_package_ClientMessage, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_chat_package_ServerMessage__Output>;
  join(argument: _chat_package_ClientMessage, options?: grpc.CallOptions): grpc.ClientReadableStream<_chat_package_ServerMessage__Output>;
  join(argument: _chat_package_ClientMessage, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_chat_package_ServerMessage__Output>;
  join(argument: _chat_package_ClientMessage, options?: grpc.CallOptions): grpc.ClientReadableStream<_chat_package_ServerMessage__Output>;
  
  send(argument: _chat_package_ClientMessage, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _chat_package_ServerMessage__Output) => void): grpc.ClientUnaryCall;
  send(argument: _chat_package_ClientMessage, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _chat_package_ServerMessage__Output) => void): grpc.ClientUnaryCall;
  send(argument: _chat_package_ClientMessage, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _chat_package_ServerMessage__Output) => void): grpc.ClientUnaryCall;
  send(argument: _chat_package_ClientMessage, callback: (error?: grpc.ServiceError, result?: _chat_package_ServerMessage__Output) => void): grpc.ClientUnaryCall;
  send(argument: _chat_package_ClientMessage, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _chat_package_ServerMessage__Output) => void): grpc.ClientUnaryCall;
  send(argument: _chat_package_ClientMessage, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _chat_package_ServerMessage__Output) => void): grpc.ClientUnaryCall;
  send(argument: _chat_package_ClientMessage, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _chat_package_ServerMessage__Output) => void): grpc.ClientUnaryCall;
  send(argument: _chat_package_ClientMessage, callback: (error?: grpc.ServiceError, result?: _chat_package_ServerMessage__Output) => void): grpc.ClientUnaryCall;
  
}

export interface ChatHandlers extends grpc.UntypedServiceImplementation {
  join(call: grpc.ServerWritableStream<_chat_package_ClientMessage__Output, _chat_package_ServerMessage>): void;
  
  send(call: grpc.ServerUnaryCall<_chat_package_ClientMessage__Output, _chat_package_ServerMessage>, callback: grpc.sendUnaryData<_chat_package_ServerMessage>): void;
  
}
