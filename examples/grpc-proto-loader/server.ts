import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import { ProtoGrpcType } from './proto/chat';
import { ChatHandlers } from './proto/chat_package/Chat';
import { ClientMessage } from './proto/chat_package/ClientMessage';
import { ServerMessage } from './proto/chat_package/ServerMessage';

const users: grpc.ServerWritableStream<ClientMessage, ServerMessage>[] = [];
const messages: ClientMessage[] = [];

function notifyChat(message: ServerMessage) {
  messages.push(message);
  users.forEach((user) => {
    user.write(message);
  });
}

const chatService: ChatHandlers = {
  join(call: grpc.ServerWritableStream<ClientMessage, ServerMessage>): void {
    users.push(call);
    notifyChat({
      user: 'Server',
      text: `${call.request?.user} joined`,
    });
  },
  send(
    call: grpc.ServerUnaryCall<ClientMessage, ServerMessage>,
    callback: grpc.sendUnaryData<ServerMessage>
  ): void {
    if (call.request) {
      notifyChat(call.request);
      callback(null, call.request);
    }
  },
};

export function getServer(): grpc.Server {
  const packageDefinition = protoLoader.loadSync('./proto/chat.proto');
  const proto = (grpc.loadPackageDefinition(
    packageDefinition
  ) as unknown) as ProtoGrpcType;
  const server = new grpc.Server();
  server.addService(proto.chat_package.Chat.service, chatService);
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
