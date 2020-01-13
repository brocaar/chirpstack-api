// package: as
// file: as/as.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as common_common_pb from "../common/common_pb";
import * as gw_gw_pb from "../gw/gw_pb";

export class DeviceActivationContext extends jspb.Message {
  getDevAddr(): Uint8Array | string;
  getDevAddr_asU8(): Uint8Array;
  getDevAddr_asB64(): string;
  setDevAddr(value: Uint8Array | string): void;

  hasAppSKey(): boolean;
  clearAppSKey(): void;
  getAppSKey(): common_common_pb.KeyEnvelope | undefined;
  setAppSKey(value?: common_common_pb.KeyEnvelope): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeviceActivationContext.AsObject;
  static toObject(includeInstance: boolean, msg: DeviceActivationContext): DeviceActivationContext.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeviceActivationContext, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeviceActivationContext;
  static deserializeBinaryFromReader(message: DeviceActivationContext, reader: jspb.BinaryReader): DeviceActivationContext;
}

export namespace DeviceActivationContext {
  export type AsObject = {
    devAddr: Uint8Array | string,
    appSKey?: common_common_pb.KeyEnvelope.AsObject,
  }
}

export class HandleUplinkDataRequest extends jspb.Message {
  getDevEui(): Uint8Array | string;
  getDevEui_asU8(): Uint8Array;
  getDevEui_asB64(): string;
  setDevEui(value: Uint8Array | string): void;

  getJoinEui(): Uint8Array | string;
  getJoinEui_asU8(): Uint8Array;
  getJoinEui_asB64(): string;
  setJoinEui(value: Uint8Array | string): void;

  getFCnt(): number;
  setFCnt(value: number): void;

  getFPort(): number;
  setFPort(value: number): void;

  getAdr(): boolean;
  setAdr(value: boolean): void;

  getDr(): number;
  setDr(value: number): void;

  hasTxInfo(): boolean;
  clearTxInfo(): void;
  getTxInfo(): gw_gw_pb.UplinkTXInfo | undefined;
  setTxInfo(value?: gw_gw_pb.UplinkTXInfo): void;

  clearRxInfoList(): void;
  getRxInfoList(): Array<gw_gw_pb.UplinkRXInfo>;
  setRxInfoList(value: Array<gw_gw_pb.UplinkRXInfo>): void;
  addRxInfo(value?: gw_gw_pb.UplinkRXInfo, index?: number): gw_gw_pb.UplinkRXInfo;

  getData(): Uint8Array | string;
  getData_asU8(): Uint8Array;
  getData_asB64(): string;
  setData(value: Uint8Array | string): void;

  hasDeviceActivationContext(): boolean;
  clearDeviceActivationContext(): void;
  getDeviceActivationContext(): DeviceActivationContext | undefined;
  setDeviceActivationContext(value?: DeviceActivationContext): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HandleUplinkDataRequest.AsObject;
  static toObject(includeInstance: boolean, msg: HandleUplinkDataRequest): HandleUplinkDataRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HandleUplinkDataRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HandleUplinkDataRequest;
  static deserializeBinaryFromReader(message: HandleUplinkDataRequest, reader: jspb.BinaryReader): HandleUplinkDataRequest;
}

export namespace HandleUplinkDataRequest {
  export type AsObject = {
    devEui: Uint8Array | string,
    joinEui: Uint8Array | string,
    fCnt: number,
    fPort: number,
    adr: boolean,
    dr: number,
    txInfo?: gw_gw_pb.UplinkTXInfo.AsObject,
    rxInfoList: Array<gw_gw_pb.UplinkRXInfo.AsObject>,
    data: Uint8Array | string,
    deviceActivationContext?: DeviceActivationContext.AsObject,
  }
}

export class HandleProprietaryUplinkRequest extends jspb.Message {
  getMacPayload(): Uint8Array | string;
  getMacPayload_asU8(): Uint8Array;
  getMacPayload_asB64(): string;
  setMacPayload(value: Uint8Array | string): void;

  getMic(): Uint8Array | string;
  getMic_asU8(): Uint8Array;
  getMic_asB64(): string;
  setMic(value: Uint8Array | string): void;

  hasTxInfo(): boolean;
  clearTxInfo(): void;
  getTxInfo(): gw_gw_pb.UplinkTXInfo | undefined;
  setTxInfo(value?: gw_gw_pb.UplinkTXInfo): void;

  clearRxInfoList(): void;
  getRxInfoList(): Array<gw_gw_pb.UplinkRXInfo>;
  setRxInfoList(value: Array<gw_gw_pb.UplinkRXInfo>): void;
  addRxInfo(value?: gw_gw_pb.UplinkRXInfo, index?: number): gw_gw_pb.UplinkRXInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HandleProprietaryUplinkRequest.AsObject;
  static toObject(includeInstance: boolean, msg: HandleProprietaryUplinkRequest): HandleProprietaryUplinkRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HandleProprietaryUplinkRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HandleProprietaryUplinkRequest;
  static deserializeBinaryFromReader(message: HandleProprietaryUplinkRequest, reader: jspb.BinaryReader): HandleProprietaryUplinkRequest;
}

export namespace HandleProprietaryUplinkRequest {
  export type AsObject = {
    macPayload: Uint8Array | string,
    mic: Uint8Array | string,
    txInfo?: gw_gw_pb.UplinkTXInfo.AsObject,
    rxInfoList: Array<gw_gw_pb.UplinkRXInfo.AsObject>,
  }
}

export class HandleErrorRequest extends jspb.Message {
  getDevEui(): Uint8Array | string;
  getDevEui_asU8(): Uint8Array;
  getDevEui_asB64(): string;
  setDevEui(value: Uint8Array | string): void;

  getType(): ErrorTypeMap[keyof ErrorTypeMap];
  setType(value: ErrorTypeMap[keyof ErrorTypeMap]): void;

  getError(): string;
  setError(value: string): void;

  getFCnt(): number;
  setFCnt(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HandleErrorRequest.AsObject;
  static toObject(includeInstance: boolean, msg: HandleErrorRequest): HandleErrorRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HandleErrorRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HandleErrorRequest;
  static deserializeBinaryFromReader(message: HandleErrorRequest, reader: jspb.BinaryReader): HandleErrorRequest;
}

export namespace HandleErrorRequest {
  export type AsObject = {
    devEui: Uint8Array | string,
    type: ErrorTypeMap[keyof ErrorTypeMap],
    error: string,
    fCnt: number,
  }
}

export class HandleDownlinkACKRequest extends jspb.Message {
  getDevEui(): Uint8Array | string;
  getDevEui_asU8(): Uint8Array;
  getDevEui_asB64(): string;
  setDevEui(value: Uint8Array | string): void;

  getFCnt(): number;
  setFCnt(value: number): void;

  getAcknowledged(): boolean;
  setAcknowledged(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HandleDownlinkACKRequest.AsObject;
  static toObject(includeInstance: boolean, msg: HandleDownlinkACKRequest): HandleDownlinkACKRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HandleDownlinkACKRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HandleDownlinkACKRequest;
  static deserializeBinaryFromReader(message: HandleDownlinkACKRequest, reader: jspb.BinaryReader): HandleDownlinkACKRequest;
}

export namespace HandleDownlinkACKRequest {
  export type AsObject = {
    devEui: Uint8Array | string,
    fCnt: number,
    acknowledged: boolean,
  }
}

export class SetDeviceStatusRequest extends jspb.Message {
  getDevEui(): Uint8Array | string;
  getDevEui_asU8(): Uint8Array;
  getDevEui_asB64(): string;
  setDevEui(value: Uint8Array | string): void;

  getBattery(): number;
  setBattery(value: number): void;

  getMargin(): number;
  setMargin(value: number): void;

  getExternalPowerSource(): boolean;
  setExternalPowerSource(value: boolean): void;

  getBatteryLevelUnavailable(): boolean;
  setBatteryLevelUnavailable(value: boolean): void;

  getBatteryLevel(): number;
  setBatteryLevel(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetDeviceStatusRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SetDeviceStatusRequest): SetDeviceStatusRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetDeviceStatusRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetDeviceStatusRequest;
  static deserializeBinaryFromReader(message: SetDeviceStatusRequest, reader: jspb.BinaryReader): SetDeviceStatusRequest;
}

export namespace SetDeviceStatusRequest {
  export type AsObject = {
    devEui: Uint8Array | string,
    battery: number,
    margin: number,
    externalPowerSource: boolean,
    batteryLevelUnavailable: boolean,
    batteryLevel: number,
  }
}

export class SetDeviceLocationRequest extends jspb.Message {
  getDevEui(): Uint8Array | string;
  getDevEui_asU8(): Uint8Array;
  getDevEui_asB64(): string;
  setDevEui(value: Uint8Array | string): void;

  hasLocation(): boolean;
  clearLocation(): void;
  getLocation(): common_common_pb.Location | undefined;
  setLocation(value?: common_common_pb.Location): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetDeviceLocationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SetDeviceLocationRequest): SetDeviceLocationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SetDeviceLocationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetDeviceLocationRequest;
  static deserializeBinaryFromReader(message: SetDeviceLocationRequest, reader: jspb.BinaryReader): SetDeviceLocationRequest;
}

export namespace SetDeviceLocationRequest {
  export type AsObject = {
    devEui: Uint8Array | string,
    location?: common_common_pb.Location.AsObject,
  }
}

export class HandleGatewayStatsRequest extends jspb.Message {
  getGatewayId(): Uint8Array | string;
  getGatewayId_asU8(): Uint8Array;
  getGatewayId_asB64(): string;
  setGatewayId(value: Uint8Array | string): void;

  getStatsId(): Uint8Array | string;
  getStatsId_asU8(): Uint8Array;
  getStatsId_asB64(): string;
  setStatsId(value: Uint8Array | string): void;

  hasTime(): boolean;
  clearTime(): void;
  getTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasLocation(): boolean;
  clearLocation(): void;
  getLocation(): common_common_pb.Location | undefined;
  setLocation(value?: common_common_pb.Location): void;

  getRxPacketsReceived(): number;
  setRxPacketsReceived(value: number): void;

  getRxPacketsReceivedOk(): number;
  setRxPacketsReceivedOk(value: number): void;

  getTxPacketsReceived(): number;
  setTxPacketsReceived(value: number): void;

  getTxPacketsEmitted(): number;
  setTxPacketsEmitted(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HandleGatewayStatsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: HandleGatewayStatsRequest): HandleGatewayStatsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HandleGatewayStatsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HandleGatewayStatsRequest;
  static deserializeBinaryFromReader(message: HandleGatewayStatsRequest, reader: jspb.BinaryReader): HandleGatewayStatsRequest;
}

export namespace HandleGatewayStatsRequest {
  export type AsObject = {
    gatewayId: Uint8Array | string,
    statsId: Uint8Array | string,
    time?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    location?: common_common_pb.Location.AsObject,
    rxPacketsReceived: number,
    rxPacketsReceivedOk: number,
    txPacketsReceived: number,
    txPacketsEmitted: number,
  }
}

export interface RXWindowMap {
  RX1: 0;
  RX2: 1;
}

export const RXWindow: RXWindowMap;

export interface ErrorTypeMap {
  GENERIC: 0;
  OTAA: 1;
  DATA_UP_FCNT_RESET: 2;
  DATA_UP_MIC: 3;
  DEVICE_QUEUE_ITEM_SIZE: 4;
  DEVICE_QUEUE_ITEM_FCNT: 5;
  DATA_UP_FCNT_RETRANSMISSION: 6;
}

export const ErrorType: ErrorTypeMap;

