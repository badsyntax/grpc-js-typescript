import * as grpc from '@grpc/grpc-js';
import { ChatService, IChatServer } from './proto/chat_grpc_pb';
import { ClientMessage, ServerMessage } from './proto/chat_pb';

const users: grpc.ServerWritableStream<ClientMessage, ServerMessage>[] = [];
const messages: ClientMessage[] = [];

function notifyChat(message: ServerMessage) {
  messages.push(message);
  users.forEach((user) => {
    user.write(message);
  });
}

const chatServer: IChatServer = {
  join(call: grpc.ServerWritableStream<ClientMessage, ServerMessage>): void {
    users.push(call);
    const serverMessage = new ServerMessage();
    serverMessage.setUser('Server');
    serverMessage.setText(`${call.request?.getUser()} joined`);
    notifyChat(serverMessage);
  },
  send(
    call: grpc.ServerUnaryCall<ClientMessage, ServerMessage>,
    callback: grpc.sendUnaryData<ServerMessage>
  ): void {
    if (call.request) {
      const serverMessage = new ServerMessage();
      serverMessage.setUser(call.request.getUser());
      serverMessage.setText(call.request.getText());
      notifyChat(serverMessage);
      callback(null, serverMessage);
    }
  },
};

export function getServer(): grpc.Server {
  const server = new grpc.Server();
  server.addService(ChatService, chatServer);
  return server;
}

if (require.main === module) {
  const server = getServer();
  server.bindAsync(
    '0.0.0.0:9090',
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
