import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { ExampleClient as _example_package_ExampleClient, ExampleDefinition as _example_package_ExampleDefinition } from './example_package/Example';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  example_package: {
    ClientMessage: MessageTypeDefinition
    Example: SubtypeConstructor<typeof grpc.Client, _example_package_ExampleClient> & { service: _example_package_ExampleDefinition }
    ServerMessage: MessageTypeDefinition
  }
}

