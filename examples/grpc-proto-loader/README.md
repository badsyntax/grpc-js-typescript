# grpc-proto-loader

This example shows how to use `@grpc/grpc-js` to build a fully typed CLI chat application that runs on Node.js.

It uses `@grpc/proto-loader` to load the protobuf files at runtime, which uses `protobufjs` instead of `google-protobuf`. No proto compiler is used. `@grpc/proto-loader` to also used to generate the  types.

## App layout

- [server.ts](./server.ts) - The grpc server
- [client.ts](./client.ts) - The grpc client

### Running the app

Start the server:

```bash
npm i
npm run build
npm run start:server
```

Now run the client within different terminal sessions:

```bash
npm run start:client
```

## Credits

The chat application idea is inspired from https://techblog.fexcofts.com/2018/07/20/grpc-nodejs-chat-example/