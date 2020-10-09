import * as grpc from '@grpc/grpc-js';
import readline from 'readline';
import { ChatClient } from './proto/chat_grpc_pb';
import { ClientMessage, ServerMessage } from './proto/chat_pb';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const client = new ChatClient(
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
  const clientMessage = new ClientMessage();
  clientMessage.setUser(user);
  const channel = client.join(clientMessage);
  channel.on('data', (message: ServerMessage) => {
    if (message.getUser() == user) {
      return;
    }
    console.log(`${message.getUser()}: ${message.getText()}`);
  });
  rl.on('line', function (text) {
    const clientMessage = new ClientMessage();
    clientMessage.setUser(user);
    clientMessage.setText(text);
    client.send(clientMessage, () => {
      //
    });
  });
}
