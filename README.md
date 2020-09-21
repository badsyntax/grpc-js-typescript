# grpc-js types

This repo shows various different methods of working with TypeScript & gRPC (using `@grpc/grpc-js`).

## Examples

Each example is a separate application. Refer to the README in each project for more information.

- [grpc-proto-loader](./examples/grpc-proto-loader) - Uses the proto loader to generate the types (no proto compiler used)
- [ts-protoc-gen](./examples/ts-protoc-gen) - Uses the proto compiler & `ts-protoc-gen` to generate the types
- [grpc-web](./examples/grpc-web) - Uses the proto compiler & `ts-protoc-gen` to generate the types
- [gradle-ts-protoc-gen](./examples/gradle-ts-protoc-gen) - Uses Gradle, the proto compiler & `ts-protoc-gen` to generate the types
