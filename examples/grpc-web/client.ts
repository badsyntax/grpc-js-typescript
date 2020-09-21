/* eslint-disable @typescript-eslint/no-non-null-assertion */

import { Error as GrpcWebError } from 'grpc-web';
import { ClientMessage, ServerMessage } from './proto/chat_pb';

let user: string;

window.addEventListener('DOMContentLoaded', () => {
  document.getElementById('submit-name')?.addEventListener(
    'submit',
    async (e) => {
      e.preventDefault();
      user = (document.getElementById('name') as HTMLFormElement)?.value;
      if (user) {
        document.getElementById('submit-message')!.style.display = 'block';
        document.getElementById('submit-name')!.style.display = 'none';
        initChat(user);
      }
    },
    false
  );
});

async function initChat(user: string) {
  const { ChatClient } = await import('./proto/chat_grpc_web_pb');

  const client = new ChatClient('http://' + window.location.hostname + ':8080');

  const clientMessage = new ClientMessage();
  clientMessage.setUser(user);

  const stream = client.join(clientMessage);
  stream.on('data', (message: ServerMessage) => {
    const messageElement = document.createElement('div');
    messageElement.innerText = `${message.getUser()}: ${message.getText()}`;
    document.getElementById('messages')!.appendChild(messageElement);
  });

  function sendMessage(message: string) {
    const clientMessage = new ClientMessage();
    clientMessage.setUser(user);
    clientMessage.setText(message);
    client.send(
      clientMessage,
      undefined,
      (err: GrpcWebError, response: ServerMessage) => {
        if (err) {
          console.error(err);
        } else {
          console.log('response', response.toObject());
          (document.getElementById('message') as HTMLFormElement)!.value = '';
        }
      }
    );
  }

  document.getElementById('submit-message')?.addEventListener(
    'submit',
    (e) => {
      e.preventDefault();
      const message = (document.getElementById('message') as HTMLFormElement)
        ?.value;
      sendMessage(message);
    },
    false
  );
}
