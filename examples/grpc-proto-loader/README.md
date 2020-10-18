# grpc-proto-loader example

This example shows how to use [`@grpc/proto-loader`](https://www.npmjs.com/package/@grpc/proto-loader) & [`@grpc/grpc-js`](https://www.npmjs.com/package/@grpc/grpc-js) to build a fully typed CLI chat application that runs on Node.js.

[`@grpc/proto-loader`](https://www.npmjs.com/package/@grpc/proto-loader) to used to [generate the types](https://github.com/grpc/grpc-node/pull/1474) as well as load the protobuf files at runtime, using [`protobuf.js`](https://www.npmjs.com/package/protobufjs) instead of [`google-protobuf`](https://www.npmjs.com/package/google-protobuf).

_No proto compiler is used. It's all JavaScript._

## Issues with this approach

Client streaming message type is incorrect. See https://github.com/murgatroid99/grpc-node/pull/3. This fix is awaiting release.

## App layout

- [package.json](./package.json) - Dependencies and build scripts
- [proto/](./proto/) - Protobuf definitions and generated types
- [server.ts](./server.ts) - The grpc server
- [client.ts](./client.ts) - The grpc client

## Generating the Types

Install dependencies:

```sh
npm install
```

Use [`@grpc/proto-loader`](https://www.npmjs.com/package/@grpc/proto-loader) to generate the TypeScript files:

```sh
proto-loader-gen-types --longs=String --enums=String --defaults --oneofs --grpcLib=@grpc/grpc-js --outDir=proto/ proto/*.proto
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
