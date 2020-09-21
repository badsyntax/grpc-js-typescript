import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import readline from 'readline';
import { ProtoGrpcType } from './proto/chat';
import { ServerMessage } from './proto/chat_package/ServerMessage';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const packageDefinition = protoLoader.loadSync('./proto/chat.proto');
const proto = (grpc.loadPackageDefinition(
  packageDefinition
) as unknown) as ProtoGrpcType;

const client = new proto.chat_package.Chat(
  '0.0.0.0:9090',
  grpc.credentials.createInsecure()
);

const deadline = new Date();
deadline.setSeconds(deadline.getSeconds() + 5);
client.waitForReady(deadline, (error?: Error) => {
  if (error) {
    console.log(`Client error: ${error}`);
  } else {
    rl.question("What's your name? ", startChat);
  }
});

function startChat(user: string) {
  const channel = client.join({
    user,
  });
  channel.on('data', (message: ServerMessage) => {
    if (message.user == user) {
      return;
    }
    console.log(`${message.user}: ${message.text}`);
  });
  rl.on('line', function (text) {
    client.send({ user, text }, () => {
      //
    });
  });
}
