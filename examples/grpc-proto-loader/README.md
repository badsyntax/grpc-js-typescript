# grpc-proto-loader

This example shows how to use `@grpc/grpc-js` to build a fully typed CLI chat application that runs on Node.js.

It uses `@grpc/proto-loader` to load the protobuf files at runtime, which uses `protobufjs` instead of `google-protobuf`. 

`@grpc/proto-loader` to used to [generate the  types](https://github.com/grpc/grpc-node/pull/1474).

_The proto compiler is not used._


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
