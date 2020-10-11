import * as grpc from '@grpc/grpc-js';
import { ServiceDefinition, EnumTypeDefinition, MessageTypeDefinition } from '@grpc/proto-loader';

import { ExampleServerClient as _example_package_ExampleServerClient } from './example_package/ExampleServer';

type ConstructorArguments<Constructor> = Constructor extends new (...args: infer Args) => any ? Args: never;
type SubtypeConstructor<Constructor, Subtype> = {
  new(...args: ConstructorArguments<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  example_package: {
    ClientMessage: MessageTypeDefinition
    ExampleServer: SubtypeConstructor<typeof grpc.Client, _example_package_ExampleServerClient> & { service: ServiceDefinition }
    ServerMessage: MessageTypeDefinition
  }
}

