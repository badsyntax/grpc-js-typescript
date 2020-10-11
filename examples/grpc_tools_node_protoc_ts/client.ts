import * as grpc from '@grpc/grpc-js';
import { ExampleClient } from './proto/example_grpc_pb';
import { ClientMessage, ServerMessage } from './proto/example_pb';

const host = '0.0.0.0:9090';

const client = new ExampleClient(host, grpc.credentials.createInsecure());

const deadline = new Date();
deadline.setSeconds(deadline.getSeconds() + 5);
client.waitForReady(deadline, (error?: Error) => {
  if (error) {
    console.log(`Client connect error: ${error.message}`);
  } else {
    onClientReady();
  }
});

function onClientReady() {
  switch (process.argv[process.argv.length - 1]) {
    case '--unary':
      doUnaryCall();
      break;
    case '--server-streaming':
      doServerStreamingCall();
      break;
    case '--client-streaming':
      doClientStreamingCall();
      break;
    case '--bidi-streaming':
      doBidirectionalStreamingCallStreamingCall();
      break;
    default:
      throw new Error('Example not specified');
  }
}

function doUnaryCall() {
  const clientMessage = new ClientMessage();
  clientMessage.setClientMessage('Message from client');
  client.unaryCall(
    clientMessage,
    (error: grpc.ServiceError | null, serverMessage?: ServerMessage) => {
      if (error) {
        console.error(error.message);
      } else if (serverMessage) {
        console.log(
          `(client) Got server message: ${serverMessage.getServerMessage()}`
        );
      }
    }
  );
}

function doServerStreamingCall() {
  const clientMessage = new ClientMessage();
  clientMessage.setClientMessage('Message from client');
  const stream = client.serverStreamingCall(clientMessage);
  stream.on('data', (serverMessage: ServerMessage) => {
    console.log(
      `(client) Got server message: ${serverMessage.getServerMessage()}`
    );
  });
}

function doClientStreamingCall() {
  const stream = client.clientStreamingCall(
    (error: grpc.ServiceError | null) => {
      if (error) {
        console.error(error.message);
      }
    }
  );
  const clientMessage = new ClientMessage();
  clientMessage.setClientMessage('Message from client');
  stream.write(clientMessage);

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setTimeout(() => {}, 1000);
}

function doBidirectionalStreamingCallStreamingCall() {
  const stream = client.bidirectionalStreamingCall();

  // Server stream
  stream.on('data', (serverMessage: ServerMessage) => {
    console.log(
      `(client) Got server message: ${serverMessage.getServerMessage()}`
    );
  });

  // Client stream
  const clientMessage = new ClientMessage();
  clientMessage.setClientMessage('Message from client');
  stream.write(clientMessage);
}
