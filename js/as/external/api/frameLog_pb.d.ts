// package: api
// file: as/external/api/frameLog.proto

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

  getGatewayId(): string;
  setGatewayId(value: string): void;

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
    gatewayId: string,
  }
}

export interface RXWindowMap {
  RX1: 0;
  RX2: 1;
}

export const RXWindow: RXWindowMap;

