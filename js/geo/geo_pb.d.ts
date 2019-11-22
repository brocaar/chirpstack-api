// package: geo
// file: geo/geo.proto

import * as jspb from "google-protobuf";
import * as gw_gw_pb from "../gw/gw_pb";
import * as common_common_pb from "../common/common_pb";

export class ResolveResult extends jspb.Message {
  hasLocation(): boolean;
  clearLocation(): void;
  getLocation(): common_common_pb.Location | undefined;
  setLocation(value?: common_common_pb.Location): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResolveResult.AsObject;
  static toObject(includeInstance: boolean, msg: ResolveResult): ResolveResult.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResolveResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResolveResult;
  static deserializeBinaryFromReader(message: ResolveResult, reader: jspb.BinaryReader): ResolveResult;
}

export namespace ResolveResult {
  export type AsObject = {
    location?: common_common_pb.Location.AsObject,
  }
}

export class FrameRXInfo extends jspb.Message {
  clearRxInfoList(): void;
  getRxInfoList(): Array<gw_gw_pb.UplinkRXInfo>;
  setRxInfoList(value: Array<gw_gw_pb.UplinkRXInfo>): void;
  addRxInfo(value?: gw_gw_pb.UplinkRXInfo, index?: number): gw_gw_pb.UplinkRXInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FrameRXInfo.AsObject;
  static toObject(includeInstance: boolean, msg: FrameRXInfo): FrameRXInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FrameRXInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FrameRXInfo;
  static deserializeBinaryFromReader(message: FrameRXInfo, reader: jspb.BinaryReader): FrameRXInfo;
}

export namespace FrameRXInfo {
  export type AsObject = {
    rxInfoList: Array<gw_gw_pb.UplinkRXInfo.AsObject>,
  }
}

export class ResolveTDOARequest extends jspb.Message {
  getDevEui(): Uint8Array | string;
  getDevEui_asU8(): Uint8Array;
  getDevEui_asB64(): string;
  setDevEui(value: Uint8Array | string): void;

  hasFrameRxInfo(): boolean;
  clearFrameRxInfo(): void;
  getFrameRxInfo(): FrameRXInfo | undefined;
  setFrameRxInfo(value?: FrameRXInfo): void;

  getDeviceReferenceAltitude(): number;
  setDeviceReferenceAltitude(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResolveTDOARequest.AsObject;
  static toObject(includeInstance: boolean, msg: ResolveTDOARequest): ResolveTDOARequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResolveTDOARequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResolveTDOARequest;
  static deserializeBinaryFromReader(message: ResolveTDOARequest, reader: jspb.BinaryReader): ResolveTDOARequest;
}

export namespace ResolveTDOARequest {
  export type AsObject = {
    devEui: Uint8Array | string,
    frameRxInfo?: FrameRXInfo.AsObject,
    deviceReferenceAltitude: number,
  }
}

export class ResolveMultiFrameTDOARequest extends jspb.Message {
  getDevEui(): Uint8Array | string;
  getDevEui_asU8(): Uint8Array;
  getDevEui_asB64(): string;
  setDevEui(value: Uint8Array | string): void;

  clearFrameRxInfoSetList(): void;
  getFrameRxInfoSetList(): Array<FrameRXInfo>;
  setFrameRxInfoSetList(value: Array<FrameRXInfo>): void;
  addFrameRxInfoSet(value?: FrameRXInfo, index?: number): FrameRXInfo;

  getDeviceReferenceAltitude(): number;
  setDeviceReferenceAltitude(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResolveMultiFrameTDOARequest.AsObject;
  static toObject(includeInstance: boolean, msg: ResolveMultiFrameTDOARequest): ResolveMultiFrameTDOARequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResolveMultiFrameTDOARequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResolveMultiFrameTDOARequest;
  static deserializeBinaryFromReader(message: ResolveMultiFrameTDOARequest, reader: jspb.BinaryReader): ResolveMultiFrameTDOARequest;
}

export namespace ResolveMultiFrameTDOARequest {
  export type AsObject = {
    devEui: Uint8Array | string,
    frameRxInfoSetList: Array<FrameRXInfo.AsObject>,
    deviceReferenceAltitude: number,
  }
}

export class ResolveTDOAResponse extends jspb.Message {
  hasResult(): boolean;
  clearResult(): void;
  getResult(): ResolveResult | undefined;
  setResult(value?: ResolveResult): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResolveTDOAResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ResolveTDOAResponse): ResolveTDOAResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResolveTDOAResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResolveTDOAResponse;
  static deserializeBinaryFromReader(message: ResolveTDOAResponse, reader: jspb.BinaryReader): ResolveTDOAResponse;
}

export namespace ResolveTDOAResponse {
  export type AsObject = {
    result?: ResolveResult.AsObject,
  }
}

export class ResolveMultiFrameTDOAResponse extends jspb.Message {
  hasResult(): boolean;
  clearResult(): void;
  getResult(): ResolveResult | undefined;
  setResult(value?: ResolveResult): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResolveMultiFrameTDOAResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ResolveMultiFrameTDOAResponse): ResolveMultiFrameTDOAResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResolveMultiFrameTDOAResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResolveMultiFrameTDOAResponse;
  static deserializeBinaryFromReader(message: ResolveMultiFrameTDOAResponse, reader: jspb.BinaryReader): ResolveMultiFrameTDOAResponse;
}

export namespace ResolveMultiFrameTDOAResponse {
  export type AsObject = {
    result?: ResolveResult.AsObject,
  }
}

