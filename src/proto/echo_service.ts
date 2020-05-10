import * as pb_1 from "google-protobuf";
import * as grpc_1 from "@grpc/grpc-js";
export class EchoMessage extends pb_1.Message {
    constructor(data?: any[] | {
        value?: string;
        value2?: number;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) && data, 0, -1, [], null);
        if (!Array.isArray(data) && typeof data == "object") {
            this.value = data.value;
            this.value2 = data.value2;
        }
    }
    get value(): string | undefined {
        return pb_1.Message.getFieldWithDefault(this, 1, undefined) as string | undefined;
    }
    set value(value: string) {
        pb_1.Message.setField(this, 1, value);
    }
    get value2(): number | undefined {
        return pb_1.Message.getFieldWithDefault(this, 2, undefined) as number | undefined;
    }
    set value2(value: number) {
        pb_1.Message.setField(this, 2, value);
    }
    toObject() {
        return {
            value: this.value,
            value2: this.value2
        };
    }
    serialize(w?: pb_1.BinaryWriter): Uint8Array | undefined {
        const writer = w || new pb_1.BinaryWriter();
        if (this.value !== undefined)
            writer.writeString(1, this.value);
        if (this.value2 !== undefined)
            writer.writeInt32(2, this.value2);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): EchoMessage {
        const reader = bytes instanceof Uint8Array ? new pb_1.BinaryReader(bytes) : bytes, message = new EchoMessage();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.value = reader.readString();
                    break;
                case 2:
                    message.value2 = reader.readInt32();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
}
export var EchoService = {
    Echo: {
        path: "/EchoService/Echo",
        requestStream: false,
        responseStream: false,
        requestType: EchoMessage,
        responseType: EchoMessage,
        requestSerialize: (message: EchoMessage) => Buffer.from(message.serialize()),
        requestDeserialize: (bytes: Buffer) => EchoMessage.deserialize(new Uint8Array(bytes)),
        responseSerialize: (message: EchoMessage) => Buffer.from(message.serialize()),
        responseDeserialize: (bytes: Buffer) => EchoMessage.deserialize(new Uint8Array(bytes))
    },
    EchoClientStream: {
        path: "/EchoService/EchoClientStream",
        requestStream: true,
        responseStream: false,
        requestType: EchoMessage,
        responseType: EchoMessage,
        requestSerialize: (message: EchoMessage) => Buffer.from(message.serialize()),
        requestDeserialize: (bytes: Buffer) => EchoMessage.deserialize(new Uint8Array(bytes)),
        responseSerialize: (message: EchoMessage) => Buffer.from(message.serialize()),
        responseDeserialize: (bytes: Buffer) => EchoMessage.deserialize(new Uint8Array(bytes))
    },
    EchoServerStream: {
        path: "/EchoService/EchoServerStream",
        requestStream: false,
        responseStream: true,
        requestType: EchoMessage,
        responseType: EchoMessage,
        requestSerialize: (message: EchoMessage) => Buffer.from(message.serialize()),
        requestDeserialize: (bytes: Buffer) => EchoMessage.deserialize(new Uint8Array(bytes)),
        responseSerialize: (message: EchoMessage) => Buffer.from(message.serialize()),
        responseDeserialize: (bytes: Buffer) => EchoMessage.deserialize(new Uint8Array(bytes))
    },
    EchoBidiStream: {
        path: "/EchoService/EchoBidiStream",
        requestStream: true,
        responseStream: true,
        requestType: EchoMessage,
        responseType: EchoMessage,
        requestSerialize: (message: EchoMessage) => Buffer.from(message.serialize()),
        requestDeserialize: (bytes: Buffer) => EchoMessage.deserialize(new Uint8Array(bytes)),
        responseSerialize: (message: EchoMessage) => Buffer.from(message.serialize()),
        responseDeserialize: (bytes: Buffer) => EchoMessage.deserialize(new Uint8Array(bytes))
    }
};
export class EchoServiceClient extends grpc_1.makeGenericClientConstructor(EchoService, "EchoService", {}) {
    constructor(address: string, credentials: grpc_1.ChannelCredentials) {
        super(address, credentials)
    }
}
