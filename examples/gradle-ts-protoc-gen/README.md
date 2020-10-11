# gradle-ts-protoc-gen example

This examples shows how to uses [Gradle](https://gradle.org/), the [proto compiler](https://www.npmjs.com/package/grpc-tools),  [`ts-protoc-gen`](https://www.npmjs.com/package/ts-protoc-gen) & [`@grpc/grpc-js`](https://www.npmjs.com/package/@grpc/grpc-js) to build a (not quite yet) fully typed gRPC application that runs on Node.js.

The [proto compiler](https://www.npmjs.com/package/grpc-tools) and [`ts-protoc-gen`](https://www.npmjs.com/package/ts-protoc-gen) compiler plugin are used to generate JavaScript & TypeScript files from the proto definitions. The [`protobuf-gradle-plugin`](https://github.com/google/protobuf-gradle-plugin) Gradle plugin is used to run the compiler from Gradle.

[`google-protobuf`](https://www.npmjs.com/package/google-protobuf) & [`@grpc/grpc-js`](https://www.npmjs.com/package/@grpc/grpc-js) is used at runtime.

## App layout

- [package.json](./package.json) - Dependencies and node build scripts
- [build.gradle](./build.gradle) - The Gradle build file
- [proto/](./proto/) - Protobuf definitions and generated types
- [server.ts](./server.ts) - The grpc server
- [client.ts](./client.ts) - The grpc client

## Generating the Types

Install dependencies:

```sh
npm install
```

Use Gradle & [`ts-protoc-gen`](https://www.npmjs.com/package/ts-protoc-gen) to generate the TypeScript files:

```sh
./gradlew generateProto
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
