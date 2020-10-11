import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import { ProtoGrpcType } from './proto/example';
import { ServerMessage } from './proto/example_package/ServerMessage';

const host = '0.0.0.0:9090';
const packageDefinition = protoLoader.loadSync('./proto/example.proto');
const proto = (grpc.loadPackageDefinition(
  packageDefinition
) as unknown) as ProtoGrpcType;

const client = new proto.example_package.Example(
  host,
  grpc.credentials.createInsecure()
);

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
  client.unaryCall(
    {
      clientMessage: 'Message from client',
    },
    (error?: grpc.ServiceError, serverMessage?: ServerMessage) => {
      if (error) {
        console.error(error.message);
      } else if (serverMessage) {
        console.log(
          `(client) Got server message: ${serverMessage.serverMessage}`
        );
      }
    }
  );
}

function doServerStreamingCall() {
  const stream = client.serverStreamingCall({
    clientMessage: 'Message from client',
  });
  stream.on('data', (serverMessage: ServerMessage) => {
    console.log(`(client) Got server message: ${serverMessage.serverMessage}`);
  });
}

function doClientStreamingCall() {
  const stream = client.clientStreamingCall(
    (error?: grpc.ServiceError) => {
      if (error) {
        console.error(error.message);
      }
    }
  );
  // FIXME: this should be clientMessage
  stream.write({
    serverMessage: 'Message from client',
  });
}

function doBidirectionalStreamingCallStreamingCall() {
  const stream = client.bidirectionalStreamingCall();

  // Server stream
  stream.on('data', (serverMessage: ServerMessage) => {
    console.log(`(client) Got server message: ${serverMessage.serverMessage}`);
  });

  // Client stream
  stream.write({
    clientMessage: 'Message from client',
  });
}
