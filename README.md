# grpc-js types

This repo shows how to use gRPC with TypeScript.

In all cases, [`@grpc/grpc-js`](https://www.npmjs.com/package/@grpc/grpc-js) is used as [`grpc`](https://www.npmjs.com/package/grpc) is now [effectively deprecated](https://grpc.io/blog/grpc-js-1.0/).

TypeScript types are generated at build time from the proto files using different tools as demonstrated in this repo.

## Examples

Each example is a separate application. Refer to the README in each project for more information.

- [grpc-proto-loader](./examples/grpc-proto-loader)
- [ts-protoc-gen](./examples/ts-protoc-gen)
- [gradle-ts-protoc-gen](./examples/gradle-ts-protoc-gen)
- [grpc_tools_node_protoc_ts](./examples/grpc_tools_node_protoc_ts)
- [grpc-web](./examples/grpc-web)

## Type Parity

Thanks to [this issue](https://github.com/agreatfool/grpc_tools_node_protoc_ts/issues/79) being fixed, we now have type parity across the different type generator packages. 🎉

## Contributions

These are the various contributions I made to help with gRPC & TypeScript support:

- https://github.com/grpc/grpc-node/pull/1368
- https://github.com/grpc/grpc-node/pull/1380
- https://github.com/grpc/grpc-node/pull/1387
- https://github.com/grpc/grpc-node/pull/1419
- https://github.com/grpc/grpc-node/pull/1454
- https://github.com/grpc/grpc-node/pull/1587
- https://github.com/grpc/grpc-node/pull/1590
- https://github.com/murgatroid99/grpc-node/pull/1
- https://github.com/murgatroid99/grpc-node/pull/2
- https://github.com/murgatroid99/grpc-node/pull/3
- https://github.com/improbable-eng/ts-protoc-gen/pull/236
- https://github.com/improbable-eng/ts-protoc-gen/pull/247
