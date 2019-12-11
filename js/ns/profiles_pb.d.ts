// package: ns
// file: ns/profiles.proto

import * as jspb from "google-protobuf";

export class ServiceProfile extends jspb.Message {
  getId(): Uint8Array | string;
  getId_asU8(): Uint8Array;
  getId_asB64(): string;
  setId(value: Uint8Array | string): void;

  getUlRate(): number;
  setUlRate(value: number): void;

  getUlBucketSize(): number;
  setUlBucketSize(value: number): void;

  getUlRatePolicy(): RatePolicyMap[keyof RatePolicyMap];
  setUlRatePolicy(value: RatePolicyMap[keyof RatePolicyMap]): void;

  getDlRate(): number;
  setDlRate(value: number): void;

  getDlBucketSize(): number;
  setDlBucketSize(value: number): void;

  getDlRatePolicy(): RatePolicyMap[keyof RatePolicyMap];
  setDlRatePolicy(value: RatePolicyMap[keyof RatePolicyMap]): void;

  getAddGwMetadata(): boolean;
  setAddGwMetadata(value: boolean): void;

  getDevStatusReqFreq(): number;
  setDevStatusReqFreq(value: number): void;

  getReportDevStatusBattery(): boolean;
  setReportDevStatusBattery(value: boolean): void;

  getReportDevStatusMargin(): boolean;
  setReportDevStatusMargin(value: boolean): void;

  getDrMin(): number;
  setDrMin(value: number): void;

  getDrMax(): number;
  setDrMax(value: number): void;

  getChannelMask(): Uint8Array | string;
  getChannelMask_asU8(): Uint8Array;
  getChannelMask_asB64(): string;
  setChannelMask(value: Uint8Array | string): void;

  getPrAllowed(): boolean;
  setPrAllowed(value: boolean): void;

  getHrAllowed(): boolean;
  setHrAllowed(value: boolean): void;

  getRaAllowed(): boolean;
  setRaAllowed(value: boolean): void;

  getNwkGeoLoc(): boolean;
  setNwkGeoLoc(value: boolean): void;

  getTargetPer(): number;
  setTargetPer(value: number): void;

  getMinGwDiversity(): number;
  setMinGwDiversity(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServiceProfile.AsObject;
  static toObject(includeInstance: boolean, msg: ServiceProfile): ServiceProfile.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServiceProfile, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServiceProfile;
  static deserializeBinaryFromReader(message: ServiceProfile, reader: jspb.BinaryReader): ServiceProfile;
}

export namespace ServiceProfile {
  export type AsObject = {
    id: Uint8Array | string,
    ulRate: number,
    ulBucketSize: number,
    ulRatePolicy: RatePolicyMap[keyof RatePolicyMap],
    dlRate: number,
    dlBucketSize: number,
    dlRatePolicy: RatePolicyMap[keyof RatePolicyMap],
    addGwMetadata: boolean,
    devStatusReqFreq: number,
    reportDevStatusBattery: boolean,
    reportDevStatusMargin: boolean,
    drMin: number,
    drMax: number,
    channelMask: Uint8Array | string,
    prAllowed: boolean,
    hrAllowed: boolean,
    raAllowed: boolean,
    nwkGeoLoc: boolean,
    targetPer: number,
    minGwDiversity: number,
  }
}

export class DeviceProfile extends jspb.Message {
  getId(): Uint8Array | string;
  getId_asU8(): Uint8Array;
  getId_asB64(): string;
  setId(value: Uint8Array | string): void;

  getSupportsClassB(): boolean;
  setSupportsClassB(value: boolean): void;

  getClassBTimeout(): number;
  setClassBTimeout(value: number): void;

  getPingSlotPeriod(): number;
  setPingSlotPeriod(value: number): void;

  getPingSlotDr(): number;
  setPingSlotDr(value: number): void;

  getPingSlotFreq(): number;
  setPingSlotFreq(value: number): void;

  getSupportsClassC(): boolean;
  setSupportsClassC(value: boolean): void;

  getClassCTimeout(): number;
  setClassCTimeout(value: number): void;

  getMacVersion(): string;
  setMacVersion(value: string): void;

  getRegParamsRevision(): string;
  setRegParamsRevision(value: string): void;

  getRxDelay1(): number;
  setRxDelay1(value: number): void;

  getRxDrOffset1(): number;
  setRxDrOffset1(value: number): void;

  getRxDatarate2(): number;
  setRxDatarate2(value: number): void;

  getRxFreq2(): number;
  setRxFreq2(value: number): void;

  clearFactoryPresetFreqsList(): void;
  getFactoryPresetFreqsList(): Array<number>;
  setFactoryPresetFreqsList(value: Array<number>): void;
  addFactoryPresetFreqs(value: number, index?: number): number;

  getMaxEirp(): number;
  setMaxEirp(value: number): void;

  getMaxDutyCycle(): number;
  setMaxDutyCycle(value: number): void;

  getSupportsJoin(): boolean;
  setSupportsJoin(value: boolean): void;

  getRfRegion(): string;
  setRfRegion(value: string): void;

  getSupports32bitFCnt(): boolean;
  setSupports32bitFCnt(value: boolean): void;

  getGeolocBufferTtl(): number;
  setGeolocBufferTtl(value: number): void;

  getGeolocMinBufferSize(): number;
  setGeolocMinBufferSize(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeviceProfile.AsObject;
  static toObject(includeInstance: boolean, msg: DeviceProfile): DeviceProfile.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeviceProfile, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeviceProfile;
  static deserializeBinaryFromReader(message: DeviceProfile, reader: jspb.BinaryReader): DeviceProfile;
}

export namespace DeviceProfile {
  export type AsObject = {
    id: Uint8Array | string,
    supportsClassB: boolean,
    classBTimeout: number,
    pingSlotPeriod: number,
    pingSlotDr: number,
    pingSlotFreq: number,
    supportsClassC: boolean,
    classCTimeout: number,
    macVersion: string,
    regParamsRevision: string,
    rxDelay1: number,
    rxDrOffset1: number,
    rxDatarate2: number,
    rxFreq2: number,
    factoryPresetFreqsList: Array<number>,
    maxEirp: number,
    maxDutyCycle: number,
    supportsJoin: boolean,
    rfRegion: string,
    supports32bitFCnt: boolean,
    geolocBufferTtl: number,
    geolocMinBufferSize: number,
  }
}

export class RoutingProfile extends jspb.Message {
  getId(): Uint8Array | string;
  getId_asU8(): Uint8Array;
  getId_asB64(): string;
  setId(value: Uint8Array | string): void;

  getAsId(): string;
  setAsId(value: string): void;

  getCaCert(): string;
  setCaCert(value: string): void;

  getTlsCert(): string;
  setTlsCert(value: string): void;

  getTlsKey(): string;
  setTlsKey(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RoutingProfile.AsObject;
  static toObject(includeInstance: boolean, msg: RoutingProfile): RoutingProfile.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RoutingProfile, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RoutingProfile;
  static deserializeBinaryFromReader(message: RoutingProfile, reader: jspb.BinaryReader): RoutingProfile;
}

export namespace RoutingProfile {
  export type AsObject = {
    id: Uint8Array | string,
    asId: string,
    caCert: string,
    tlsCert: string,
    tlsKey: string,
  }
}

export interface RatePolicyMap {
  DROP: 0;
  MARK: 1;
}

export const RatePolicy: RatePolicyMap;

