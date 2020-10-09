# gradle-ts-protoc-gen

This examples shows how to uses [Gradle](https://gradle.org/), the [proto compiler](https://www.npmjs.com/package/grpc-tools),  [`ts-protoc-gen`](https://www.npmjs.com/package/ts-protoc-gen) & [`@grpc/grpc-js`](https://www.npmjs.com/package/@grpc/grpc-js) to build a (not quite yet) fully typed gRPC CLI chat application that runs on Node.js.

The [proto compiler](https://www.npmjs.com/package/grpc-tools) and [`ts-protoc-gen`](https://www.npmjs.com/package/ts-protoc-gen) compiler plugin are used to generate JavaScript & TypeScript files from the proto definitions. The [`protobuf-gradle-plugin`](https://github.com/google/protobuf-gradle-plugin) Gradle plugin is used to run the compiler from Gradle.

The generated code uses [`google-protobuf`](https://www.npmjs.com/package/google-protobuf) & [`@grpc/grpc-js`](https://www.npmjs.com/package/@grpc/grpc-js) at runtime.

## App layout

- [package.json](./package.json) - Dependencies and node build scripts
- [build.gradle](./build.gradle) - The Gradle build file
- [proto/](./proto/) - Protobuf definitions and generated types
- [server.ts](./server.ts) - The grpc server
- [client.ts](./client.ts) - The grpc client

## Generating the Types

```sh
./gradlew generateProto
```

### Running the app

First build the types and application files:

```sh
npm install
npm run build # this runs `./gradlew generateProto`
```

Start the server:

```sh
npm run start:server
```

Now run the client in different terminal sessions:

```sh
npm run start:client
```

## Credits

The chat application idea is inspired from https://techblog.fexcofts.com/2018/07/20/grpc-nodejs-chat-example/
