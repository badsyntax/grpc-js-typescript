import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import { ProtoGrpcType } from './proto/example';
import { ClientMessage } from './proto/example_package/ClientMessage';
import { ExampleHandlers } from './proto/example_package/Example';
import { ServerMessage } from './proto/example_package/ServerMessage';

const host = '0.0.0.0:9090';

const exampleServer: ExampleHandlers = {
  unaryCall(
    call: grpc.ServerUnaryCall<ClientMessage, ServerMessage>,
    callback: grpc.sendUnaryData<ServerMessage>
  ) {
    if (call.request) {
      console.log(`(server) Got client message: ${call.request.clientMessage}`);
    }
    callback(null, {
      serverMessage: 'Message from server',
    });
  },

  serverStreamingCall(
    call: grpc.ServerWritableStream<ClientMessage, ServerMessage>
  ) {
    call.write({
      serverMessage: 'Message from server',
    });
  },

  clientStreamingCall(
    call: grpc.ServerReadableStream<ClientMessage, ServerMessage>
  ) {
    call.on('data', (clientMessage: ClientMessage) => {
      console.log(
        `(server) Got client message: ${clientMessage.clientMessage}`
      );
    });
  },

  bidirectionalStreamingCall(
    call: grpc.ServerDuplexStream<ClientMessage, ServerMessage>
  ) {
    call.write({
      serverMessage: 'Message from server',
    });
    call.on('data', (clientMessage: ClientMessage) => {
      console.log(
        `(server) Got client message: ${clientMessage.clientMessage}`
      );
    });
  },
};

function getServer(): grpc.Server {
  const packageDefinition = protoLoader.loadSync('./proto/example.proto');
  const proto = grpc.loadPackageDefinition(
    packageDefinition
  ) as unknown as ProtoGrpcType;
  const server = new grpc.Server();
  server.addService(proto.example_package.Example.service, exampleServer);
  return server;
}

if (require.main === module) {
  const server = getServer();
  server.bindAsync(
    host,
    grpc.ServerCredentials.createInsecure(),
    (err: Error | null, port: number) => {
      if (err) {
        console.error(`Server error: ${err.message}`);
      } else {
        console.log(`Server bound on port: ${port}`);
        server.start();
      }
    }
  );
}
