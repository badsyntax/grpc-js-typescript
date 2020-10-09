# grpc-js types

This repo shows various different methods of working with TypeScript & gRPC (using `@grpc/grpc-js`).

## Examples

Each example is a separate application. Refer to the README in each project for more information.

- [grpc-proto-loader](./examples/grpc-proto-loader) - Uses [@grpc/proto-loader](https://www.npmjs.com/package/@grpc/proto-loader) to generate the types (no proto compiler used)
- [ts-protoc-gen](./examples/ts-protoc-gen) - Uses the [proto compiler](https://www.npmjs.com/package/grpc-tools) & [`ts-protoc-gen`](https://www.npmjs.com/package/ts-protoc-gen) to generate the types
- [gradle-ts-protoc-gen](./examples/gradle-ts-protoc-gen) - Uses [Gradle](https://gradle.org/), the [proto compiler](https://www.npmjs.com/package/grpc-tools) & [`ts-protoc-gen`](https://www.npmjs.com/package/ts-protoc-gen) to generate the types
- [grpc_tools_node_protoc_ts](./examples/gradle-ts-protoc-gen) - Uses the [proto compiler](https://www.npmjs.com/package/grpc-tools) & [`grpc_tools_node_protoc_ts`](https://www.npmjs.com/package/grpc_tools_node_protoc_ts) to generate the types
- [grpc-web](./examples/grpc-web) - Uses the [proto compiler](https://www.npmjs.com/package/grpc-tools) & [`ts-protoc-gen`](https://www.npmjs.com/package/ts-protoc-gen) to generate the types

## Gotchas

It's worth noting that both the [`ts-protoc-gen`](https://www.npmjs.com/package/ts-protoc-gen) and [`grpc_tools_node_protoc_ts`](https://www.npmjs.com/package/grpc_tools_node_protoc_ts) npm packages provide a grpc plugin binary file called `protoc-gen-ts` and this can lead to some confusion when trying out the two different packages.
