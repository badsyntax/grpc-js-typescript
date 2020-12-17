# grpc-web

This examples shows how to use the [proto compiler](https://www.npmjs.com/package/grpc-tools), [`ts-protoc-gen`](https://www.npmjs.com/package/ts-protoc-gen), [`@grpc/grpc-js`](https://www.npmjs.com/package/@grpc/grpc-js), [`protoc-gen-grpc-web`](https://www.npmjs.com/package/protoc-gen-grpc-web) & [`grpc-web`](https://www.npmjs.com/package/grpc-web) to build a fully typed gRPC CLI chat application that runs on Node.js.

The [`ts-protoc-gen`](https://www.npmjs.com/package/ts-protoc-gen) compiler plugin is used to generate TypeScript files and [`protoc-gen-grpc-web`](https://www.npmjs.com/package/protoc-gen-grpc-web) is used to generate the grpc-web files from the proto definitions. The generated code uses [`google-protobuf`](https://www.npmjs.com/package/google-protobuf) & [`@grpc/grpc-js`](https://www.npmjs.com/package/@grpc/grpc-js) at runtime.

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

Run the demo:

```bash
npm install
npm run build
npm run start:proxy
npm run start:server
python3 -m http.server 8081
```

Open http://localhost:8081/ in multiple browser windows and chat to yourself.

Development workflow:

```bash
npm run watch:typescript
npm run watch:webpack
npm run start:proxy
npm run start:server
python3 -m http.server 8081
```

## Credits

The chat application idea is inspired from https://techblog.fexcofts.com/2018/07/20/grpc-nodejs-chat-example/
