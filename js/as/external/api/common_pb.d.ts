// package: api
// file: as/external/api/common.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as common_common_pb from "../../../common/common_pb";
import * as gw_gw_pb from "../../../gw/gw_pb";

export class UplinkFrameLog extends jspb.Message {
  hasTxInfo(): boolean;
  clearTxInfo(): void;
  getTxInfo(): gw_gw_pb.UplinkTXInfo | undefined;
  setTxInfo(value?: gw_gw_pb.UplinkTXInfo): void;

  clearRxInfoList(): void;
  getRxInfoList(): Array<gw_gw_pb.UplinkRXInfo>;
  setRxInfoList(value: Array<gw_gw_pb.UplinkRXInfo>): void;
  addRxInfo(value?: gw_gw_pb.UplinkRXInfo, index?: number): gw_gw_pb.UplinkRXInfo;

  getPhyPayloadJson(): string;
  setPhyPayloadJson(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UplinkFrameLog.AsObject;
  static toObject(includeInstance: boolean, msg: UplinkFrameLog): UplinkFrameLog.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UplinkFrameLog, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UplinkFrameLog;
  static deserializeBinaryFromReader(message: UplinkFrameLog, reader: jspb.BinaryReader): UplinkFrameLog;
}

export namespace UplinkFrameLog {
  export type AsObject = {
    txInfo?: gw_gw_pb.UplinkTXInfo.AsObject,
    rxInfoList: Array<gw_gw_pb.UplinkRXInfo.AsObject>,
    phyPayloadJson: string,
  }
}

export class DownlinkFrameLog extends jspb.Message {
  hasTxInfo(): boolean;
  clearTxInfo(): void;
  getTxInfo(): gw_gw_pb.DownlinkTXInfo | undefined;
  setTxInfo(value?: gw_gw_pb.DownlinkTXInfo): void;

  getPhyPayloadJson(): string;
  setPhyPayloadJson(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DownlinkFrameLog.AsObject;
  static toObject(includeInstance: boolean, msg: DownlinkFrameLog): DownlinkFrameLog.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DownlinkFrameLog, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DownlinkFrameLog;
  static deserializeBinaryFromReader(message: DownlinkFrameLog, reader: jspb.BinaryReader): DownlinkFrameLog;
}

export namespace DownlinkFrameLog {
  export type AsObject = {
    txInfo?: gw_gw_pb.DownlinkTXInfo.AsObject,
    phyPayloadJson: string,
  }
}

export class UplinkRXInfo extends jspb.Message {
  getGatewayId(): string;
  setGatewayId(value: string): void;

  getUplinkId(): string;
  setUplinkId(value: string): void;

  hasTime(): boolean;
  clearTime(): void;
  getTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasTimeSinceGpsEpoch(): boolean;
  clearTimeSinceGpsEpoch(): void;
  getTimeSinceGpsEpoch(): google_protobuf_duration_pb.Duration | undefined;
  setTimeSinceGpsEpoch(value?: google_protobuf_duration_pb.Duration): void;

  getRssi(): number;
  setRssi(value: number): void;

  getLoraSnr(): number;
  setLoraSnr(value: number): void;

  getChannel(): number;
  setChannel(value: number): void;

  getRfChain(): number;
  setRfChain(value: number): void;

  getBoard(): number;
  setBoard(value: number): void;

  getAntenna(): number;
  setAntenna(value: number): void;

  hasLocation(): boolean;
  clearLocation(): void;
  getLocation(): common_common_pb.Location | undefined;
  setLocation(value?: common_common_pb.Location): void;

  getFineTimestampType(): gw_gw_pb.FineTimestampTypeMap[keyof gw_gw_pb.FineTimestampTypeMap];
  setFineTimestampType(value: gw_gw_pb.FineTimestampTypeMap[keyof gw_gw_pb.FineTimestampTypeMap]): void;

  hasEncryptedFineTimestamp(): boolean;
  clearEncryptedFineTimestamp(): void;
  getEncryptedFineTimestamp(): EncryptedFineTimestamp | undefined;
  setEncryptedFineTimestamp(value?: EncryptedFineTimestamp): void;

  hasPlainFineTimestamp(): boolean;
  clearPlainFineTimestamp(): void;
  getPlainFineTimestamp(): gw_gw_pb.PlainFineTimestamp | undefined;
  setPlainFineTimestamp(value?: gw_gw_pb.PlainFineTimestamp): void;

  getContext(): Uint8Array | string;
  getContext_asU8(): Uint8Array;
  getContext_asB64(): string;
  setContext(value: Uint8Array | string): void;

  getFineTimestampCase(): UplinkRXInfo.FineTimestampCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UplinkRXInfo.AsObject;
  static toObject(includeInstance: boolean, msg: UplinkRXInfo): UplinkRXInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UplinkRXInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UplinkRXInfo;
  static deserializeBinaryFromReader(message: UplinkRXInfo, reader: jspb.BinaryReader): UplinkRXInfo;
}

export namespace UplinkRXInfo {
  export type AsObject = {
    gatewayId: string,
    uplinkId: string,
    time?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    timeSinceGpsEpoch?: google_protobuf_duration_pb.Duration.AsObject,
    rssi: number,
    loraSnr: number,
    channel: number,
    rfChain: number,
    board: number,
    antenna: number,
    location?: common_common_pb.Location.AsObject,
    fineTimestampType: gw_gw_pb.FineTimestampTypeMap[keyof gw_gw_pb.FineTimestampTypeMap],
    encryptedFineTimestamp?: EncryptedFineTimestamp.AsObject,
    plainFineTimestamp?: gw_gw_pb.PlainFineTimestamp.AsObject,
    context: Uint8Array | string,
  }

  export enum FineTimestampCase {
    FINE_TIMESTAMP_NOT_SET = 0,
    ENCRYPTED_FINE_TIMESTAMP = 13,
    PLAIN_FINE_TIMESTAMP = 14,
  }
}

export class EncryptedFineTimestamp extends jspb.Message {
  getAesKeyIndex(): number;
  setAesKeyIndex(value: number): void;

  getEncryptedNs(): Uint8Array | string;
  getEncryptedNs_asU8(): Uint8Array;
  getEncryptedNs_asB64(): string;
  setEncryptedNs(value: Uint8Array | string): void;

  getFpgaId(): string;
  setFpgaId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EncryptedFineTimestamp.AsObject;
  static toObject(includeInstance: boolean, msg: EncryptedFineTimestamp): EncryptedFineTimestamp.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EncryptedFineTimestamp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EncryptedFineTimestamp;
  static deserializeBinaryFromReader(message: EncryptedFineTimestamp, reader: jspb.BinaryReader): EncryptedFineTimestamp;
}

export namespace EncryptedFineTimestamp {
  export type AsObject = {
    aesKeyIndex: number,
    encryptedNs: Uint8Array | string,
    fpgaId: string,
  }
}

export class DownlinkTXInfo extends jspb.Message {
  getGatewayId(): string;
  setGatewayId(value: string): void;

  getDownlinkId(): string;
  setDownlinkId(value: string): void;

  getFrequency(): number;
  setFrequency(value: number): void;

  getPower(): number;
  setPower(value: number): void;

  getModulation(): common_common_pb.ModulationMap[keyof common_common_pb.ModulationMap];
  setModulation(value: common_common_pb.ModulationMap[keyof common_common_pb.ModulationMap]): void;

  hasLoraModulationInfo(): boolean;
  clearLoraModulationInfo(): void;
  getLoraModulationInfo(): gw_gw_pb.LoRaModulationInfo | undefined;
  setLoraModulationInfo(value?: gw_gw_pb.LoRaModulationInfo): void;

  hasFskModulationInfo(): boolean;
  clearFskModulationInfo(): void;
  getFskModulationInfo(): gw_gw_pb.FSKModulationInfo | undefined;
  setFskModulationInfo(value?: gw_gw_pb.FSKModulationInfo): void;

  getBoard(): number;
  setBoard(value: number): void;

  getAntenna(): number;
  setAntenna(value: number): void;

  getTiming(): gw_gw_pb.DownlinkTimingMap[keyof gw_gw_pb.DownlinkTimingMap];
  setTiming(value: gw_gw_pb.DownlinkTimingMap[keyof gw_gw_pb.DownlinkTimingMap]): void;

  hasImmediatelyTimingInfo(): boolean;
  clearImmediatelyTimingInfo(): void;
  getImmediatelyTimingInfo(): gw_gw_pb.ImmediatelyTimingInfo | undefined;
  setImmediatelyTimingInfo(value?: gw_gw_pb.ImmediatelyTimingInfo): void;

  hasDelayTimingInfo(): boolean;
  clearDelayTimingInfo(): void;
  getDelayTimingInfo(): gw_gw_pb.DelayTimingInfo | undefined;
  setDelayTimingInfo(value?: gw_gw_pb.DelayTimingInfo): void;

  hasGpsEpochTimingInfo(): boolean;
  clearGpsEpochTimingInfo(): void;
  getGpsEpochTimingInfo(): gw_gw_pb.GPSEpochTimingInfo | undefined;
  setGpsEpochTimingInfo(value?: gw_gw_pb.GPSEpochTimingInfo): void;

  getContext(): Uint8Array | string;
  getContext_asU8(): Uint8Array;
  getContext_asB64(): string;
  setContext(value: Uint8Array | string): void;

  getModulationInfoCase(): DownlinkTXInfo.ModulationInfoCase;
  getTimingInfoCase(): DownlinkTXInfo.TimingInfoCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DownlinkTXInfo.AsObject;
  static toObject(includeInstance: boolean, msg: DownlinkTXInfo): DownlinkTXInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DownlinkTXInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DownlinkTXInfo;
  static deserializeBinaryFromReader(message: DownlinkTXInfo, reader: jspb.BinaryReader): DownlinkTXInfo;
}

export namespace DownlinkTXInfo {
  export type AsObject = {
    gatewayId: string,
    downlinkId: string,
    frequency: number,
    power: number,
    modulation: common_common_pb.ModulationMap[keyof common_common_pb.ModulationMap],
    loraModulationInfo?: gw_gw_pb.LoRaModulationInfo.AsObject,
    fskModulationInfo?: gw_gw_pb.FSKModulationInfo.AsObject,
    board: number,
    antenna: number,
    timing: gw_gw_pb.DownlinkTimingMap[keyof gw_gw_pb.DownlinkTimingMap],
    immediatelyTimingInfo?: gw_gw_pb.ImmediatelyTimingInfo.AsObject,
    delayTimingInfo?: gw_gw_pb.DelayTimingInfo.AsObject,
    gpsEpochTimingInfo?: gw_gw_pb.GPSEpochTimingInfo.AsObject,
    context: Uint8Array | string,
  }

  export enum ModulationInfoCase {
    MODULATION_INFO_NOT_SET = 0,
    LORA_MODULATION_INFO = 8,
    FSK_MODULATION_INFO = 9,
  }

  export enum TimingInfoCase {
    TIMING_INFO_NOT_SET = 0,
    IMMEDIATELY_TIMING_INFO = 13,
    DELAY_TIMING_INFO = 14,
    GPS_EPOCH_TIMING_INFO = 15,
  }
}

export interface RXWindowMap {
  RX1: 0;
  RX2: 1;
}

export const RXWindow: RXWindowMap;

