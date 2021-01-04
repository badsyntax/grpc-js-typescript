# grpc_tools_node_protoc_ts example

This example shows how to use the [proto compiler](https://www.npmjs.com/package/grpc-tools), [`grpc_tools_node_protoc_ts`](https://www.npmjs.com/package/grpc_tools_node_protoc_ts) & [`@grpc/grpc-js`](https://www.npmjs.com/package/@grpc/grpc-js) to build a fully typed gRPC application that runs on Node.js.

The [proto compiler](https://www.npmjs.com/package/grpc-tools) and [`grpc_tools_node_protoc_ts`](https://www.npmjs.com/package/grpc_tools_node_protoc_ts) compiler plugin are used to generate JavaScript & TypeScript files from the proto definitions and [`google-protobuf`](https://www.npmjs.com/package/google-protobuf) & [`@grpc/grpc-js`](https://www.npmjs.com/package/@grpc/grpc-js) is used at runtime.

## App layout

- [package.json](./package.json) - Dependencies and node build scripts
- [compile-proto.sh](./compile-proto.sh) - The proto compiler script
- [server.ts](./server.ts) - The grpc server
- [client.ts](./client.ts) - The grpc client

## Generating the Types

Install dependencies:

```sh
npm install
```

Use [`grpc_tools_node_protoc_ts`](https://www.npmjs.com/package/grpc_tools_node_protoc_ts) to generate the TypeScript files:

```sh
./compile-proto.sh
```

This is aliased as a npm script:

```sh
npm run build:proto
```

### Running the App

This simple app demonstrates the different gRPC calls you can perform.

First generated the types and build the application files:

```sh
npm run build
```

Start the server:

```sh
npm run start:server
```

Now run the client by specifying which example you want to run:

```bash
npm run start:client -- --unary
npm run start:client -- --server-streaming
npm run start:client -- --client-streaming
npm run start:client -- --bidi-streaming
```
