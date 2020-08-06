// package: api
// file: as/external/api/profiles.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";

export class ServiceProfile extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getOrganizationId(): number;
  setOrganizationId(value: number): void;

  getNetworkServerId(): number;
  setNetworkServerId(value: number): void;

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
    id: string,
    name: string,
    organizationId: number,
    networkServerId: number,
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
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getOrganizationId(): number;
  setOrganizationId(value: number): void;

  getNetworkServerId(): number;
  setNetworkServerId(value: number): void;

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

  getPayloadCodec(): string;
  setPayloadCodec(value: string): void;

  getPayloadEncoderScript(): string;
  setPayloadEncoderScript(value: string): void;

  getPayloadDecoderScript(): string;
  setPayloadDecoderScript(value: string): void;

  getGeolocBufferTtl(): number;
  setGeolocBufferTtl(value: number): void;

  getGeolocMinBufferSize(): number;
  setGeolocMinBufferSize(value: number): void;

  getTagsMap(): jspb.Map<string, string>;
  clearTagsMap(): void;
  hasUplinkInterval(): boolean;
  clearUplinkInterval(): void;
  getUplinkInterval(): google_protobuf_duration_pb.Duration | undefined;
  setUplinkInterval(value?: google_protobuf_duration_pb.Duration): void;

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
    id: string,
    name: string,
    organizationId: number,
    networkServerId: number,
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
    payloadCodec: string,
    payloadEncoderScript: string,
    payloadDecoderScript: string,
    geolocBufferTtl: number,
    geolocMinBufferSize: number,
    tagsMap: Array<[string, string]>,
    uplinkInterval?: google_protobuf_duration_pb.Duration.AsObject,
  }
}

export interface RatePolicyMap {
  DROP: 0;
  MARK: 1;
}

export const RatePolicy: RatePolicyMap;

