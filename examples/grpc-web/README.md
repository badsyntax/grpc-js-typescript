# grpc-js-example - grpc-web

This example shows how to use `@grpc/grpc-js` & `grpc-web` to build a (not quite yet) fully typed chat application that runs in the browser.

The proto compiler is used to generate javascript files from the proto definitions. The `ts-protoc-gen` & `protoc-gen-grpc-web` compiler plugins are used to generate the types.

## App layout

- [compile-proto.sh](./compile-proto.sh) - The proto compiler script
- [server.ts](./server.ts) - The grpc server
- [client.ts](./client.ts) - The grpc-web browser client

Run the demo:

```bash
npm i
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
