# grpc-js-example

This example shows how to use `@grpc/grpc-js` to build a (not quite yet) fully typed CLI chat application that runs on Node.js.

It shows how to compile proto files using the [protobuf-gradle-plugin](https://github.com/google/protobuf-gradle-plugin) gradle plugin.

The proto compiler and `ts-protoc-gen` compiler plugin are used to generate javascript & typescript files from the proto definitions. The generated code uses `google-protobuf`.

## App layout

- [build.gradle](./build.gradle) - The gradle build file
- [server.ts](./server.ts) - The grpc server
- [client.ts](./client.ts) - The grpc client

### Running the app

```bash
npm i
npm run build # this runs `./gradlew generateProto`
npm run start:server
```

Now run the client in different terminal sessions:

```bash
npm run start:client
```

## Credits

The chat application idea is inspired from https://techblog.fexcofts.com/2018/07/20/grpc-nodejs-chat-example/
