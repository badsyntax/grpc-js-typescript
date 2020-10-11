import * as grpc from '@grpc/grpc-js';
import { ExampleService } from './proto/example_grpc_pb';
import { ClientMessage, ServerMessage } from './proto/example_pb';

const host = '0.0.0.0:9090';

const exampleServer = {
  unaryCall(
    call: grpc.ServerUnaryCall<ClientMessage, ServerMessage>,
    callback: grpc.sendUnaryData<ServerMessage>
  ) {
    if (call.request) {
      console.log(
        `(server) Got client message: ${call.request.getClientMessage()}`
      );
    }
    const serverMessage = new ServerMessage();
    serverMessage.setServerMessage('Message from server');
    callback(null, serverMessage);
  },

  serverStreamingCall(
    call: grpc.ServerWritableStream<ClientMessage, ServerMessage>
  ) {
    const serverMessage = new ServerMessage();
    serverMessage.setServerMessage('Message from server');
    call.write(serverMessage);
  },

  clientStreamingCall(
    call: grpc.ServerReadableStream<ClientMessage, ServerMessage>,
  ) {
    call.on('data', (clientMessage: ClientMessage) => {
      console.log(
        `(server) Got client message: ${clientMessage.getClientMessage()}`
      );
    });
  },

  bidirectionalStreamingCall(
    call: grpc.ServerDuplexStream<ClientMessage, ServerMessage>
  ) {
    call.on('data', (clientMessage: ClientMessage) => {
      console.log(
        `(server) Got client message: ${clientMessage.getClientMessage()}`
      );
    });

    const serverMessage = new ServerMessage();
    serverMessage.setServerMessage('Message from server');
    call.write(serverMessage);
  },
};

function getServer(): grpc.Server {
  const server = new grpc.Server();
  server.addService(ExampleService, exampleServer);
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
