# ts-protoc-gen

This examples shows how to use the [proto compiler](https://www.npmjs.com/package/grpc-tools), [`ts-protoc-gen`](https://www.npmjs.com/package/ts-protoc-gen) & [`@grpc/grpc-js`](https://www.npmjs.com/package/@grpc/grpc-js) to build a (not quite yet) fully typed gRPC CLI chat application that runs on Node.js.

The [proto compiler](https://www.npmjs.com/package/grpc-tools) and [`ts-protoc-gen`](https://www.npmjs.com/package/ts-protoc-gen) compiler plugin are used to generate JavaScript & TypeScript files from the proto definitions.

The generated code uses [`google-protobuf`](https://www.npmjs.com/package/google-protobuf) & [`@grpc/grpc-js`](https://www.npmjs.com/package/@grpc/grpc-js) at runtime.

## App layout

- [package.json](./package.json) - Dependencies and node build scripts
- [compile-proto.sh](./compile-proto.sh) - The proto compiler script
- [proto/](./proto/) - Protobuf definitions and generated types
- [server.ts](./server.ts) - The grpc server
- [client.ts](./client.ts) - The grpc client

## Generating the Types

```sh
npm install
./compile-proto.sh
```

### Running the app

First build the types and application files:

```sh
npm run build # this also runs `./compile-proto.sh`
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
