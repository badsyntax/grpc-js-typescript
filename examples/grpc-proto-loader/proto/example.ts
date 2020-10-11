import * as grpc from '@grpc/grpc-js';
import { ServiceDefinition, EnumTypeDefinition, MessageTypeDefinition } from '@grpc/proto-loader';

import { ExampleClient as _example_package_ExampleClient } from './example_package/Example';

type ConstructorArguments<Constructor> = Constructor extends new (...args: infer Args) => any ? Args: never;
type SubtypeConstructor<Constructor, Subtype> = {
  new(...args: ConstructorArguments<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  example_package: {
    ClientMessage: MessageTypeDefinition
    Example: SubtypeConstructor<typeof grpc.Client, _example_package_ExampleClient> & { service: ServiceDefinition }
    ServerMessage: MessageTypeDefinition
  }
}

