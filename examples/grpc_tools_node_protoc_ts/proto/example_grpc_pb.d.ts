// package: example_package
// file: proto/example.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import {handleClientStreamingCall} from "@grpc/grpc-js/build/src/server-call";
import * as proto_example_pb from "../proto/example_pb";

interface IExampleService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    unaryCall: IExampleService_IunaryCall;
    serverStreamingCall: IExampleService_IserverStreamingCall;
    clientStreamingCall: IExampleService_IclientStreamingCall;
    bidirectionalStreamingCall: IExampleService_IbidirectionalStreamingCall;
}

interface IExampleService_IunaryCall extends grpc.MethodDefinition<proto_example_pb.ClientMessage, proto_example_pb.ServerMessage> {
    path: "/example_package.Example/unaryCall";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_example_pb.ClientMessage>;
    requestDeserialize: grpc.deserialize<proto_example_pb.ClientMessage>;
    responseSerialize: grpc.serialize<proto_example_pb.ServerMessage>;
    responseDeserialize: grpc.deserialize<proto_example_pb.ServerMessage>;
}
interface IExampleService_IserverStreamingCall extends grpc.MethodDefinition<proto_example_pb.ClientMessage, proto_example_pb.ServerMessage> {
    path: "/example_package.Example/serverStreamingCall";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<proto_example_pb.ClientMessage>;
    requestDeserialize: grpc.deserialize<proto_example_pb.ClientMessage>;
    responseSerialize: grpc.serialize<proto_example_pb.ServerMessage>;
    responseDeserialize: grpc.deserialize<proto_example_pb.ServerMessage>;
}
interface IExampleService_IclientStreamingCall extends grpc.MethodDefinition<proto_example_pb.ClientMessage, proto_example_pb.ServerMessage> {
    path: "/example_package.Example/clientStreamingCall";
    requestStream: true;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_example_pb.ClientMessage>;
    requestDeserialize: grpc.deserialize<proto_example_pb.ClientMessage>;
    responseSerialize: grpc.serialize<proto_example_pb.ServerMessage>;
    responseDeserialize: grpc.deserialize<proto_example_pb.ServerMessage>;
}
interface IExampleService_IbidirectionalStreamingCall extends grpc.MethodDefinition<proto_example_pb.ClientMessage, proto_example_pb.ServerMessage> {
    path: "/example_package.Example/bidirectionalStreamingCall";
    requestStream: true;
    responseStream: true;
    requestSerialize: grpc.serialize<proto_example_pb.ClientMessage>;
    requestDeserialize: grpc.deserialize<proto_example_pb.ClientMessage>;
    responseSerialize: grpc.serialize<proto_example_pb.ServerMessage>;
    responseDeserialize: grpc.deserialize<proto_example_pb.ServerMessage>;
}

export const ExampleService: IExampleService;

export interface IExampleServer {
    unaryCall: grpc.handleUnaryCall<proto_example_pb.ClientMessage, proto_example_pb.ServerMessage>;
    serverStreamingCall: grpc.handleServerStreamingCall<proto_example_pb.ClientMessage, proto_example_pb.ServerMessage>;
    clientStreamingCall: handleClientStreamingCall<proto_example_pb.ClientMessage, proto_example_pb.ServerMessage>;
    bidirectionalStreamingCall: grpc.handleBidiStreamingCall<proto_example_pb.ClientMessage, proto_example_pb.ServerMessage>;
}

export interface IExampleClient {
    unaryCall(request: proto_example_pb.ClientMessage, callback: (error: grpc.ServiceError | null, response: proto_example_pb.ServerMessage) => void): grpc.ClientUnaryCall;
    unaryCall(request: proto_example_pb.ClientMessage, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_example_pb.ServerMessage) => void): grpc.ClientUnaryCall;
    unaryCall(request: proto_example_pb.ClientMessage, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_example_pb.ServerMessage) => void): grpc.ClientUnaryCall;
    serverStreamingCall(request: proto_example_pb.ClientMessage, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<proto_example_pb.ServerMessage>;
    serverStreamingCall(request: proto_example_pb.ClientMessage, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<proto_example_pb.ServerMessage>;
    clientStreamingCall(callback: (error: grpc.ServiceError | null, response: proto_example_pb.ServerMessage) => void): grpc.ClientWritableStream<proto_example_pb.ClientMessage>;
    clientStreamingCall(metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_example_pb.ServerMessage) => void): grpc.ClientWritableStream<proto_example_pb.ClientMessage>;
    clientStreamingCall(options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_example_pb.ServerMessage) => void): grpc.ClientWritableStream<proto_example_pb.ClientMessage>;
    clientStreamingCall(metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_example_pb.ServerMessage) => void): grpc.ClientWritableStream<proto_example_pb.ClientMessage>;
    bidirectionalStreamingCall(): grpc.ClientDuplexStream<proto_example_pb.ClientMessage, proto_example_pb.ServerMessage>;
    bidirectionalStreamingCall(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<proto_example_pb.ClientMessage, proto_example_pb.ServerMessage>;
    bidirectionalStreamingCall(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<proto_example_pb.ClientMessage, proto_example_pb.ServerMessage>;
}

export class ExampleClient extends grpc.Client implements IExampleClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public unaryCall(request: proto_example_pb.ClientMessage, callback: (error: grpc.ServiceError | null, response: proto_example_pb.ServerMessage) => void): grpc.ClientUnaryCall;
    public unaryCall(request: proto_example_pb.ClientMessage, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_example_pb.ServerMessage) => void): grpc.ClientUnaryCall;
    public unaryCall(request: proto_example_pb.ClientMessage, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_example_pb.ServerMessage) => void): grpc.ClientUnaryCall;
    public serverStreamingCall(request: proto_example_pb.ClientMessage, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<proto_example_pb.ServerMessage>;
    public serverStreamingCall(request: proto_example_pb.ClientMessage, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<proto_example_pb.ServerMessage>;
    public clientStreamingCall(callback: (error: grpc.ServiceError | null, response: proto_example_pb.ServerMessage) => void): grpc.ClientWritableStream<proto_example_pb.ClientMessage>;
    public clientStreamingCall(metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_example_pb.ServerMessage) => void): grpc.ClientWritableStream<proto_example_pb.ClientMessage>;
    public clientStreamingCall(options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_example_pb.ServerMessage) => void): grpc.ClientWritableStream<proto_example_pb.ClientMessage>;
    public clientStreamingCall(metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_example_pb.ServerMessage) => void): grpc.ClientWritableStream<proto_example_pb.ClientMessage>;
    public bidirectionalStreamingCall(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<proto_example_pb.ClientMessage, proto_example_pb.ServerMessage>;
    public bidirectionalStreamingCall(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<proto_example_pb.ClientMessage, proto_example_pb.ServerMessage>;
}
