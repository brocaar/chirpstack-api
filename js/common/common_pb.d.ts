// package: common
// file: common/common.proto

import * as jspb from "google-protobuf";

export class KeyEnvelope extends jspb.Message {
  getKekLabel(): string;
  setKekLabel(value: string): void;

  getAesKey(): Uint8Array | string;
  getAesKey_asU8(): Uint8Array;
  getAesKey_asB64(): string;
  setAesKey(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): KeyEnvelope.AsObject;
  static toObject(includeInstance: boolean, msg: KeyEnvelope): KeyEnvelope.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: KeyEnvelope, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): KeyEnvelope;
  static deserializeBinaryFromReader(message: KeyEnvelope, reader: jspb.BinaryReader): KeyEnvelope;
}

export namespace KeyEnvelope {
  export type AsObject = {
    kekLabel: string,
    aesKey: Uint8Array | string,
  }
}

export class Location extends jspb.Message {
  getLatitude(): number;
  setLatitude(value: number): void;

  getLongitude(): number;
  setLongitude(value: number): void;

  getAltitude(): number;
  setAltitude(value: number): void;

  getSource(): LocationSourceMap[keyof LocationSourceMap];
  setSource(value: LocationSourceMap[keyof LocationSourceMap]): void;

  getAccuracy(): number;
  setAccuracy(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Location.AsObject;
  static toObject(includeInstance: boolean, msg: Location): Location.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Location, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Location;
  static deserializeBinaryFromReader(message: Location, reader: jspb.BinaryReader): Location;
}

export namespace Location {
  export type AsObject = {
    latitude: number,
    longitude: number,
    altitude: number,
    source: LocationSourceMap[keyof LocationSourceMap],
    accuracy: number,
  }
}

export interface ModulationMap {
  LORA: 0;
  FSK: 1;
  LR_FHSS: 2;
}

export const Modulation: ModulationMap;

export interface RegionMap {
  EU868: 0;
  US915: 2;
  CN779: 3;
  EU433: 4;
  AU915: 5;
  CN470: 6;
  AS923: 7;
  AS923_2: 12;
  AS923_3: 13;
  AS923_4: 14;
  KR920: 8;
  IN865: 9;
  RU864: 10;
  ISM2400: 11;
}

export const Region: RegionMap;

export interface MTypeMap {
  JOINREQUEST: 0;
  JOINACCEPT: 1;
  UNCONFIRMEDDATAUP: 2;
  UNCONFIRMEDDATADOWN: 3;
  CONFIRMEDDATAUP: 4;
  CONFIRMEDDATADOWN: 5;
  REJOINREQUEST: 6;
  PROPRIETARY: 7;
}

export const MType: MTypeMap;

export interface LocationSourceMap {
  UNKNOWN: 0;
  GPS: 1;
  CONFIG: 2;
  GEO_RESOLVER_TDOA: 3;
  GEO_RESOLVER_RSSI: 4;
  GEO_RESOLVER_GNSS: 5;
  GEO_RESOLVER_WIFI: 6;
}

export const LocationSource: LocationSourceMap;

