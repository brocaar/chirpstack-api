// package: integration
// file: as/integration/integration.proto

import * as jspb from "google-protobuf";
import * as common_common_pb from "../../common/common_pb";
import * as gw_gw_pb from "../../gw/gw_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class UplinkEvent extends jspb.Message {
  getApplicationId(): number;
  setApplicationId(value: number): void;

  getApplicationName(): string;
  setApplicationName(value: string): void;

  getDeviceName(): string;
  setDeviceName(value: string): void;

  getDevEui(): Uint8Array | string;
  getDevEui_asU8(): Uint8Array;
  getDevEui_asB64(): string;
  setDevEui(value: Uint8Array | string): void;

  clearRxInfoList(): void;
  getRxInfoList(): Array<gw_gw_pb.UplinkRXInfo>;
  setRxInfoList(value: Array<gw_gw_pb.UplinkRXInfo>): void;
  addRxInfo(value?: gw_gw_pb.UplinkRXInfo, index?: number): gw_gw_pb.UplinkRXInfo;

  hasTxInfo(): boolean;
  clearTxInfo(): void;
  getTxInfo(): gw_gw_pb.UplinkTXInfo | undefined;
  setTxInfo(value?: gw_gw_pb.UplinkTXInfo): void;

  getAdr(): boolean;
  setAdr(value: boolean): void;

  getDr(): number;
  setDr(value: number): void;

  getFCnt(): number;
  setFCnt(value: number): void;

  getFPort(): number;
  setFPort(value: number): void;

  getData(): Uint8Array | string;
  getData_asU8(): Uint8Array;
  getData_asB64(): string;
  setData(value: Uint8Array | string): void;

  getObjectJson(): string;
  setObjectJson(value: string): void;

  getTagsMap(): jspb.Map<string, string>;
  clearTagsMap(): void;
  getConfirmedUplink(): boolean;
  setConfirmedUplink(value: boolean): void;

  getDevAddr(): Uint8Array | string;
  getDevAddr_asU8(): Uint8Array;
  getDevAddr_asB64(): string;
  setDevAddr(value: Uint8Array | string): void;

  hasPublishedAt(): boolean;
  clearPublishedAt(): void;
  getPublishedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setPublishedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UplinkEvent.AsObject;
  static toObject(includeInstance: boolean, msg: UplinkEvent): UplinkEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UplinkEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UplinkEvent;
  static deserializeBinaryFromReader(message: UplinkEvent, reader: jspb.BinaryReader): UplinkEvent;
}

export namespace UplinkEvent {
  export type AsObject = {
    applicationId: number,
    applicationName: string,
    deviceName: string,
    devEui: Uint8Array | string,
    rxInfoList: Array<gw_gw_pb.UplinkRXInfo.AsObject>,
    txInfo?: gw_gw_pb.UplinkTXInfo.AsObject,
    adr: boolean,
    dr: number,
    fCnt: number,
    fPort: number,
    data: Uint8Array | string,
    objectJson: string,
    tagsMap: Array<[string, string]>,
    confirmedUplink: boolean,
    devAddr: Uint8Array | string,
    publishedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class JoinEvent extends jspb.Message {
  getApplicationId(): number;
  setApplicationId(value: number): void;

  getApplicationName(): string;
  setApplicationName(value: string): void;

  getDeviceName(): string;
  setDeviceName(value: string): void;

  getDevEui(): Uint8Array | string;
  getDevEui_asU8(): Uint8Array;
  getDevEui_asB64(): string;
  setDevEui(value: Uint8Array | string): void;

  getDevAddr(): Uint8Array | string;
  getDevAddr_asU8(): Uint8Array;
  getDevAddr_asB64(): string;
  setDevAddr(value: Uint8Array | string): void;

  clearRxInfoList(): void;
  getRxInfoList(): Array<gw_gw_pb.UplinkRXInfo>;
  setRxInfoList(value: Array<gw_gw_pb.UplinkRXInfo>): void;
  addRxInfo(value?: gw_gw_pb.UplinkRXInfo, index?: number): gw_gw_pb.UplinkRXInfo;

  hasTxInfo(): boolean;
  clearTxInfo(): void;
  getTxInfo(): gw_gw_pb.UplinkTXInfo | undefined;
  setTxInfo(value?: gw_gw_pb.UplinkTXInfo): void;

  getDr(): number;
  setDr(value: number): void;

  getTagsMap(): jspb.Map<string, string>;
  clearTagsMap(): void;
  hasPublishedAt(): boolean;
  clearPublishedAt(): void;
  getPublishedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setPublishedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): JoinEvent.AsObject;
  static toObject(includeInstance: boolean, msg: JoinEvent): JoinEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: JoinEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): JoinEvent;
  static deserializeBinaryFromReader(message: JoinEvent, reader: jspb.BinaryReader): JoinEvent;
}

export namespace JoinEvent {
  export type AsObject = {
    applicationId: number,
    applicationName: string,
    deviceName: string,
    devEui: Uint8Array | string,
    devAddr: Uint8Array | string,
    rxInfoList: Array<gw_gw_pb.UplinkRXInfo.AsObject>,
    txInfo?: gw_gw_pb.UplinkTXInfo.AsObject,
    dr: number,
    tagsMap: Array<[string, string]>,
    publishedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class AckEvent extends jspb.Message {
  getApplicationId(): number;
  setApplicationId(value: number): void;

  getApplicationName(): string;
  setApplicationName(value: string): void;

  getDeviceName(): string;
  setDeviceName(value: string): void;

  getDevEui(): Uint8Array | string;
  getDevEui_asU8(): Uint8Array;
  getDevEui_asB64(): string;
  setDevEui(value: Uint8Array | string): void;

  getAcknowledged(): boolean;
  setAcknowledged(value: boolean): void;

  getFCnt(): number;
  setFCnt(value: number): void;

  getTagsMap(): jspb.Map<string, string>;
  clearTagsMap(): void;
  hasPublishedAt(): boolean;
  clearPublishedAt(): void;
  getPublishedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setPublishedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AckEvent.AsObject;
  static toObject(includeInstance: boolean, msg: AckEvent): AckEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AckEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AckEvent;
  static deserializeBinaryFromReader(message: AckEvent, reader: jspb.BinaryReader): AckEvent;
}

export namespace AckEvent {
  export type AsObject = {
    applicationId: number,
    applicationName: string,
    deviceName: string,
    devEui: Uint8Array | string,
    acknowledged: boolean,
    fCnt: number,
    tagsMap: Array<[string, string]>,
    publishedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class TxAckEvent extends jspb.Message {
  getApplicationId(): number;
  setApplicationId(value: number): void;

  getApplicationName(): string;
  setApplicationName(value: string): void;

  getDeviceName(): string;
  setDeviceName(value: string): void;

  getDevEui(): Uint8Array | string;
  getDevEui_asU8(): Uint8Array;
  getDevEui_asB64(): string;
  setDevEui(value: Uint8Array | string): void;

  getFCnt(): number;
  setFCnt(value: number): void;

  getTagsMap(): jspb.Map<string, string>;
  clearTagsMap(): void;
  getGatewayId(): Uint8Array | string;
  getGatewayId_asU8(): Uint8Array;
  getGatewayId_asB64(): string;
  setGatewayId(value: Uint8Array | string): void;

  hasTxInfo(): boolean;
  clearTxInfo(): void;
  getTxInfo(): gw_gw_pb.DownlinkTXInfo | undefined;
  setTxInfo(value?: gw_gw_pb.DownlinkTXInfo): void;

  hasPublishedAt(): boolean;
  clearPublishedAt(): void;
  getPublishedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setPublishedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TxAckEvent.AsObject;
  static toObject(includeInstance: boolean, msg: TxAckEvent): TxAckEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TxAckEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TxAckEvent;
  static deserializeBinaryFromReader(message: TxAckEvent, reader: jspb.BinaryReader): TxAckEvent;
}

export namespace TxAckEvent {
  export type AsObject = {
    applicationId: number,
    applicationName: string,
    deviceName: string,
    devEui: Uint8Array | string,
    fCnt: number,
    tagsMap: Array<[string, string]>,
    gatewayId: Uint8Array | string,
    txInfo?: gw_gw_pb.DownlinkTXInfo.AsObject,
    publishedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class ErrorEvent extends jspb.Message {
  getApplicationId(): number;
  setApplicationId(value: number): void;

  getApplicationName(): string;
  setApplicationName(value: string): void;

  getDeviceName(): string;
  setDeviceName(value: string): void;

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

  getTagsMap(): jspb.Map<string, string>;
  clearTagsMap(): void;
  hasPublishedAt(): boolean;
  clearPublishedAt(): void;
  getPublishedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setPublishedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ErrorEvent.AsObject;
  static toObject(includeInstance: boolean, msg: ErrorEvent): ErrorEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ErrorEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ErrorEvent;
  static deserializeBinaryFromReader(message: ErrorEvent, reader: jspb.BinaryReader): ErrorEvent;
}

export namespace ErrorEvent {
  export type AsObject = {
    applicationId: number,
    applicationName: string,
    deviceName: string,
    devEui: Uint8Array | string,
    type: ErrorTypeMap[keyof ErrorTypeMap],
    error: string,
    fCnt: number,
    tagsMap: Array<[string, string]>,
    publishedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class StatusEvent extends jspb.Message {
  getApplicationId(): number;
  setApplicationId(value: number): void;

  getApplicationName(): string;
  setApplicationName(value: string): void;

  getDeviceName(): string;
  setDeviceName(value: string): void;

  getDevEui(): Uint8Array | string;
  getDevEui_asU8(): Uint8Array;
  getDevEui_asB64(): string;
  setDevEui(value: Uint8Array | string): void;

  getMargin(): number;
  setMargin(value: number): void;

  getExternalPowerSource(): boolean;
  setExternalPowerSource(value: boolean): void;

  getBatteryLevelUnavailable(): boolean;
  setBatteryLevelUnavailable(value: boolean): void;

  getBatteryLevel(): number;
  setBatteryLevel(value: number): void;

  getTagsMap(): jspb.Map<string, string>;
  clearTagsMap(): void;
  hasPublishedAt(): boolean;
  clearPublishedAt(): void;
  getPublishedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setPublishedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StatusEvent.AsObject;
  static toObject(includeInstance: boolean, msg: StatusEvent): StatusEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StatusEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StatusEvent;
  static deserializeBinaryFromReader(message: StatusEvent, reader: jspb.BinaryReader): StatusEvent;
}

export namespace StatusEvent {
  export type AsObject = {
    applicationId: number,
    applicationName: string,
    deviceName: string,
    devEui: Uint8Array | string,
    margin: number,
    externalPowerSource: boolean,
    batteryLevelUnavailable: boolean,
    batteryLevel: number,
    tagsMap: Array<[string, string]>,
    publishedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class LocationEvent extends jspb.Message {
  getApplicationId(): number;
  setApplicationId(value: number): void;

  getApplicationName(): string;
  setApplicationName(value: string): void;

  getDeviceName(): string;
  setDeviceName(value: string): void;

  getDevEui(): Uint8Array | string;
  getDevEui_asU8(): Uint8Array;
  getDevEui_asB64(): string;
  setDevEui(value: Uint8Array | string): void;

  hasLocation(): boolean;
  clearLocation(): void;
  getLocation(): common_common_pb.Location | undefined;
  setLocation(value?: common_common_pb.Location): void;

  getTagsMap(): jspb.Map<string, string>;
  clearTagsMap(): void;
  clearUplinkIdsList(): void;
  getUplinkIdsList(): Array<Uint8Array | string>;
  getUplinkIdsList_asU8(): Array<Uint8Array>;
  getUplinkIdsList_asB64(): Array<string>;
  setUplinkIdsList(value: Array<Uint8Array | string>): void;
  addUplinkIds(value: Uint8Array | string, index?: number): Uint8Array | string;

  getFCnt(): number;
  setFCnt(value: number): void;

  hasPublishedAt(): boolean;
  clearPublishedAt(): void;
  getPublishedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setPublishedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LocationEvent.AsObject;
  static toObject(includeInstance: boolean, msg: LocationEvent): LocationEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LocationEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LocationEvent;
  static deserializeBinaryFromReader(message: LocationEvent, reader: jspb.BinaryReader): LocationEvent;
}

export namespace LocationEvent {
  export type AsObject = {
    applicationId: number,
    applicationName: string,
    deviceName: string,
    devEui: Uint8Array | string,
    location?: common_common_pb.Location.AsObject,
    tagsMap: Array<[string, string]>,
    uplinkIdsList: Array<Uint8Array | string>,
    fCnt: number,
    publishedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class IntegrationEvent extends jspb.Message {
  getApplicationId(): number;
  setApplicationId(value: number): void;

  getApplicationName(): string;
  setApplicationName(value: string): void;

  getDeviceName(): string;
  setDeviceName(value: string): void;

  getDevEui(): Uint8Array | string;
  getDevEui_asU8(): Uint8Array;
  getDevEui_asB64(): string;
  setDevEui(value: Uint8Array | string): void;

  getTagsMap(): jspb.Map<string, string>;
  clearTagsMap(): void;
  getIntegrationName(): string;
  setIntegrationName(value: string): void;

  getEventType(): string;
  setEventType(value: string): void;

  getObjectJson(): string;
  setObjectJson(value: string): void;

  hasPublishedAt(): boolean;
  clearPublishedAt(): void;
  getPublishedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setPublishedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IntegrationEvent.AsObject;
  static toObject(includeInstance: boolean, msg: IntegrationEvent): IntegrationEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IntegrationEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IntegrationEvent;
  static deserializeBinaryFromReader(message: IntegrationEvent, reader: jspb.BinaryReader): IntegrationEvent;
}

export namespace IntegrationEvent {
  export type AsObject = {
    applicationId: number,
    applicationName: string,
    deviceName: string,
    devEui: Uint8Array | string,
    tagsMap: Array<[string, string]>,
    integrationName: string,
    eventType: string,
    objectJson: string,
    publishedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export interface ErrorTypeMap {
  UNKNOWN: 0;
  DOWNLINK_PAYLOAD_SIZE: 1;
  DOWNLINK_FCNT: 2;
  UPLINK_CODEC: 3;
  DOWNLINK_CODEC: 4;
  OTAA: 5;
  UPLINK_FCNT_RESET: 6;
  UPLINK_MIC: 7;
  UPLINK_FCNT_RETRANSMISSION: 8;
  DOWNLINK_GATEWAY: 9;
}

export const ErrorType: ErrorTypeMap;

