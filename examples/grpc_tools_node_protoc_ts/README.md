# grpc-js-example

This example shows how to use `@grpc/grpc-js` to build a (not quite yet) fully typed CLI chat application that runs on Node.js.

It uses the proto compiler and `ts-protoc-gen` compiler plugin to generate javascript & typescript files from the proto definitions. The generated code uses `google-protobuf`.

## App layout

- [compile-proto.sh](./compile-proto.sh) - The proto compiler script
- [server.ts](./server.ts) - The grpc server
- [client.ts](./client.ts) - The grpc client

### Running the app

Start the server:

```bash
npm i
npm run build
npm run start:server
```

Now run the client in different terminal sessions:

```bash
npm run start:client
```

## Credits

The chat application idea is inspired from https://techblog.fexcofts.com/2018/07/20/grpc-nodejs-chat-example/
