// package: nc
// file: nc/nc.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as gw_gw_pb from "../gw/gw_pb";

export class HandleUplinkMetaDataRequest extends jspb.Message {
  getDevEui(): Uint8Array | string;
  getDevEui_asU8(): Uint8Array;
  getDevEui_asB64(): string;
  setDevEui(value: Uint8Array | string): void;

  hasTxInfo(): boolean;
  clearTxInfo(): void;
  getTxInfo(): gw_gw_pb.UplinkTXInfo | undefined;
  setTxInfo(value?: gw_gw_pb.UplinkTXInfo): void;

  clearRxInfoList(): void;
  getRxInfoList(): Array<gw_gw_pb.UplinkRXInfo>;
  setRxInfoList(value: Array<gw_gw_pb.UplinkRXInfo>): void;
  addRxInfo(value?: gw_gw_pb.UplinkRXInfo, index?: number): gw_gw_pb.UplinkRXInfo;

  getPhyPayloadByteCount(): number;
  setPhyPayloadByteCount(value: number): void;

  getMacCommandByteCount(): number;
  setMacCommandByteCount(value: number): void;

  getApplicationPayloadByteCount(): number;
  setApplicationPayloadByteCount(value: number): void;

  getMessageType(): MTypeMap[keyof MTypeMap];
  setMessageType(value: MTypeMap[keyof MTypeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HandleUplinkMetaDataRequest.AsObject;
  static toObject(includeInstance: boolean, msg: HandleUplinkMetaDataRequest): HandleUplinkMetaDataRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HandleUplinkMetaDataRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HandleUplinkMetaDataRequest;
  static deserializeBinaryFromReader(message: HandleUplinkMetaDataRequest, reader: jspb.BinaryReader): HandleUplinkMetaDataRequest;
}

export namespace HandleUplinkMetaDataRequest {
  export type AsObject = {
    devEui: Uint8Array | string,
    txInfo?: gw_gw_pb.UplinkTXInfo.AsObject,
    rxInfoList: Array<gw_gw_pb.UplinkRXInfo.AsObject>,
    phyPayloadByteCount: number,
    macCommandByteCount: number,
    applicationPayloadByteCount: number,
    messageType: MTypeMap[keyof MTypeMap],
  }
}

export class HandleDownlinkMetaDataRequest extends jspb.Message {
  getDevEui(): Uint8Array | string;
  getDevEui_asU8(): Uint8Array;
  getDevEui_asB64(): string;
  setDevEui(value: Uint8Array | string): void;

  getMulticastGroupId(): Uint8Array | string;
  getMulticastGroupId_asU8(): Uint8Array;
  getMulticastGroupId_asB64(): string;
  setMulticastGroupId(value: Uint8Array | string): void;

  hasTxInfo(): boolean;
  clearTxInfo(): void;
  getTxInfo(): gw_gw_pb.DownlinkTXInfo | undefined;
  setTxInfo(value?: gw_gw_pb.DownlinkTXInfo): void;

  getPhyPayloadByteCount(): number;
  setPhyPayloadByteCount(value: number): void;

  getMacCommandByteCount(): number;
  setMacCommandByteCount(value: number): void;

  getApplicationPayloadByteCount(): number;
  setApplicationPayloadByteCount(value: number): void;

  getMessageType(): MTypeMap[keyof MTypeMap];
  setMessageType(value: MTypeMap[keyof MTypeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HandleDownlinkMetaDataRequest.AsObject;
  static toObject(includeInstance: boolean, msg: HandleDownlinkMetaDataRequest): HandleDownlinkMetaDataRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HandleDownlinkMetaDataRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HandleDownlinkMetaDataRequest;
  static deserializeBinaryFromReader(message: HandleDownlinkMetaDataRequest, reader: jspb.BinaryReader): HandleDownlinkMetaDataRequest;
}

export namespace HandleDownlinkMetaDataRequest {
  export type AsObject = {
    devEui: Uint8Array | string,
    multicastGroupId: Uint8Array | string,
    txInfo?: gw_gw_pb.DownlinkTXInfo.AsObject,
    phyPayloadByteCount: number,
    macCommandByteCount: number,
    applicationPayloadByteCount: number,
    messageType: MTypeMap[keyof MTypeMap],
  }
}

export class HandleUplinkMACCommandRequest extends jspb.Message {
  getDevEui(): Uint8Array | string;
  getDevEui_asU8(): Uint8Array;
  getDevEui_asB64(): string;
  setDevEui(value: Uint8Array | string): void;

  getCid(): number;
  setCid(value: number): void;

  clearCommandsList(): void;
  getCommandsList(): Array<Uint8Array | string>;
  getCommandsList_asU8(): Array<Uint8Array>;
  getCommandsList_asB64(): Array<string>;
  setCommandsList(value: Array<Uint8Array | string>): void;
  addCommands(value: Uint8Array | string, index?: number): Uint8Array | string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HandleUplinkMACCommandRequest.AsObject;
  static toObject(includeInstance: boolean, msg: HandleUplinkMACCommandRequest): HandleUplinkMACCommandRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HandleUplinkMACCommandRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HandleUplinkMACCommandRequest;
  static deserializeBinaryFromReader(message: HandleUplinkMACCommandRequest, reader: jspb.BinaryReader): HandleUplinkMACCommandRequest;
}

export namespace HandleUplinkMACCommandRequest {
  export type AsObject = {
    devEui: Uint8Array | string,
    cid: number,
    commandsList: Array<Uint8Array | string>,
  }
}

export class HandleRejectedUplinkFrameSetRequest extends jspb.Message {
  hasFrameSet(): boolean;
  clearFrameSet(): void;
  getFrameSet(): gw_gw_pb.UplinkFrameSet | undefined;
  setFrameSet(value?: gw_gw_pb.UplinkFrameSet): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HandleRejectedUplinkFrameSetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: HandleRejectedUplinkFrameSetRequest): HandleRejectedUplinkFrameSetRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HandleRejectedUplinkFrameSetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HandleRejectedUplinkFrameSetRequest;
  static deserializeBinaryFromReader(message: HandleRejectedUplinkFrameSetRequest, reader: jspb.BinaryReader): HandleRejectedUplinkFrameSetRequest;
}

export namespace HandleRejectedUplinkFrameSetRequest {
  export type AsObject = {
    frameSet?: gw_gw_pb.UplinkFrameSet.AsObject,
  }
}

export interface MTypeMap {
  UNKNOWN: 0;
  JOIN_REQUEST: 1;
  JOIN_ACCEPT: 2;
  UNCONFIRMED_DATA_UP: 3;
  UNCONFIRMED_DATA_DOWN: 4;
  CONFIRMED_DATA_UP: 5;
  CONFIRMED_DATA_DOWN: 6;
  REJOIN_REQUEST: 7;
}

export const MType: MTypeMap;

