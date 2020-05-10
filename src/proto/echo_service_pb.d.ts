// package: 
// file: proto/echo_service.proto

import * as jspb from "google-protobuf";

export class EchoMessage extends jspb.Message {
  getValue(): string;
  setValue(value: string): void;

  getValue2(): number;
  setValue2(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EchoMessage.AsObject;
  static toObject(includeInstance: boolean, msg: EchoMessage): EchoMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EchoMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EchoMessage;
  static deserializeBinaryFromReader(message: EchoMessage, reader: jspb.BinaryReader): EchoMessage;
}

export namespace EchoMessage {
  export type AsObject = {
    value: string,
    value2: number,
  }
}

