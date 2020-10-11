import * as grpc from '@grpc/grpc-js';
import { ServiceDefinition, EnumTypeDefinition, MessageTypeDefinition } from '@grpc/proto-loader';

import { ChatClient as _chat_package_ChatClient } from './chat_package/Chat';

type ConstructorArguments<Constructor> = Constructor extends new (...args: infer Args) => any ? Args: never;
type SubtypeConstructor<Constructor, Subtype> = {
  new(...args: ConstructorArguments<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  chat_package: {
    Chat: SubtypeConstructor<typeof grpc.Client, _chat_package_ChatClient> & { service: ServiceDefinition }
    ClientMessage: MessageTypeDefinition
    ServerMessage: MessageTypeDefinition
  }
}

