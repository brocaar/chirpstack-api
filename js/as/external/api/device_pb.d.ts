// package: api
// file: as/external/api/device.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../google/api/annotations_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as common_common_pb from "../../../common/common_pb";
import * as as_external_api_frameLog_pb from "../../../as/external/api/frameLog_pb";

export class Device extends jspb.Message {
  getDevEui(): string;
  setDevEui(value: string): void;

  getName(): string;
  setName(value: string): void;

  getApplicationId(): number;
  setApplicationId(value: number): void;

  getDescription(): string;
  setDescription(value: string): void;

  getDeviceProfileId(): string;
  setDeviceProfileId(value: string): void;

  getSkipFCntCheck(): boolean;
  setSkipFCntCheck(value: boolean): void;

  getReferenceAltitude(): number;
  setReferenceAltitude(value: number): void;

  getVariablesMap(): jspb.Map<string, string>;
  clearVariablesMap(): void;
  getTagsMap(): jspb.Map<string, string>;
  clearTagsMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Device.AsObject;
  static toObject(includeInstance: boolean, msg: Device): Device.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Device, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Device;
  static deserializeBinaryFromReader(message: Device, reader: jspb.BinaryReader): Device;
}

export namespace Device {
  export type AsObject = {
    devEui: string,
    name: string,
    applicationId: number,
    description: string,
    deviceProfileId: string,
    skipFCntCheck: boolean,
    referenceAltitude: number,
    variablesMap: Array<[string, string]>,
    tagsMap: Array<[string, string]>,
  }
}

export class DeviceListItem extends jspb.Message {
  getDevEui(): string;
  setDevEui(value: string): void;

  getName(): string;
  setName(value: string): void;

  getApplicationId(): number;
  setApplicationId(value: number): void;

  getDescription(): string;
  setDescription(value: string): void;

  getDeviceProfileId(): string;
  setDeviceProfileId(value: string): void;

  getDeviceProfileName(): string;
  setDeviceProfileName(value: string): void;

  getDeviceStatusBattery(): number;
  setDeviceStatusBattery(value: number): void;

  getDeviceStatusMargin(): number;
  setDeviceStatusMargin(value: number): void;

  getDeviceStatusExternalPowerSource(): boolean;
  setDeviceStatusExternalPowerSource(value: boolean): void;

  getDeviceStatusBatteryLevelUnavailable(): boolean;
  setDeviceStatusBatteryLevelUnavailable(value: boolean): void;

  getDeviceStatusBatteryLevel(): number;
  setDeviceStatusBatteryLevel(value: number): void;

  hasLastSeenAt(): boolean;
  clearLastSeenAt(): void;
  getLastSeenAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLastSeenAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeviceListItem.AsObject;
  static toObject(includeInstance: boolean, msg: DeviceListItem): DeviceListItem.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeviceListItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeviceListItem;
  static deserializeBinaryFromReader(message: DeviceListItem, reader: jspb.BinaryReader): DeviceListItem;
}

export namespace DeviceListItem {
  export type AsObject = {
    devEui: string,
    name: string,
    applicationId: number,
    description: string,
    deviceProfileId: string,
    deviceProfileName: string,
    deviceStatusBattery: number,
    deviceStatusMargin: number,
    deviceStatusExternalPowerSource: boolean,
    deviceStatusBatteryLevelUnavailable: boolean,
    deviceStatusBatteryLevel: number,
    lastSeenAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class DeviceKeys extends jspb.Message {
  getDevEui(): string;
  setDevEui(value: string): void;

  getNwkKey(): string;
  setNwkKey(value: string): void;

  getAppKey(): string;
  setAppKey(value: string): void;

  getGenAppKey(): string;
  setGenAppKey(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeviceKeys.AsObject;
  static toObject(includeInstance: boolean, msg: DeviceKeys): DeviceKeys.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeviceKeys, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeviceKeys;
  static deserializeBinaryFromReader(message: DeviceKeys, reader: jspb.BinaryReader): DeviceKeys;
}

export namespace DeviceKeys {
  export type AsObject = {
    devEui: string,
    nwkKey: string,
    appKey: string,
    genAppKey: string,
  }
}

export class CreateDeviceRequest extends jspb.Message {
  hasDevice(): boolean;
  clearDevice(): void;
  getDevice(): Device | undefined;
  setDevice(value?: Device): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateDeviceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateDeviceRequest): CreateDeviceRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateDeviceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateDeviceRequest;
  static deserializeBinaryFromReader(message: CreateDeviceRequest, reader: jspb.BinaryReader): CreateDeviceRequest;
}

export namespace CreateDeviceRequest {
  export type AsObject = {
    device?: Device.AsObject,
  }
}

export class GetDeviceRequest extends jspb.Message {
  getDevEui(): string;
  setDevEui(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDeviceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetDeviceRequest): GetDeviceRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetDeviceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDeviceRequest;
  static deserializeBinaryFromReader(message: GetDeviceRequest, reader: jspb.BinaryReader): GetDeviceRequest;
}

export namespace GetDeviceRequest {
  export type AsObject = {
    devEui: string,
  }
}

export class GetDeviceResponse extends jspb.Message {
  hasDevice(): boolean;
  clearDevice(): void;
  getDevice(): Device | undefined;
  setDevice(value?: Device): void;

  hasLastSeenAt(): boolean;
  clearLastSeenAt(): void;
  getLastSeenAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLastSeenAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getDeviceStatusBattery(): number;
  setDeviceStatusBattery(value: number): void;

  getDeviceStatusMargin(): number;
  setDeviceStatusMargin(value: number): void;

  hasLocation(): boolean;
  clearLocation(): void;
  getLocation(): common_common_pb.Location | undefined;
  setLocation(value?: common_common_pb.Location): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDeviceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetDeviceResponse): GetDeviceResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetDeviceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDeviceResponse;
  static deserializeBinaryFromReader(message: GetDeviceResponse, reader: jspb.BinaryReader): GetDeviceResponse;
}

export namespace GetDeviceResponse {
  export type AsObject = {
    device?: Device.AsObject,
    lastSeenAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    deviceStatusBattery: number,
    deviceStatusMargin: number,
    location?: common_common_pb.Location.AsObject,
  }
}

export class ListDeviceRequest extends jspb.Message {
  getLimit(): number;
  setLimit(value: number): void;

  getOffset(): number;
  setOffset(value: number): void;

  getApplicationId(): number;
  setApplicationId(value: number): void;

  getSearch(): string;
  setSearch(value: string): void;

  getMulticastGroupId(): string;
  setMulticastGroupId(value: string): void;

  getServiceProfileId(): string;
  setServiceProfileId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListDeviceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListDeviceRequest): ListDeviceRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListDeviceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListDeviceRequest;
  static deserializeBinaryFromReader(message: ListDeviceRequest, reader: jspb.BinaryReader): ListDeviceRequest;
}

export namespace ListDeviceRequest {
  export type AsObject = {
    limit: number,
    offset: number,
    applicationId: number,
    search: string,
    multicastGroupId: string,
    serviceProfileId: string,
  }
}

export class ListDeviceResponse extends jspb.Message {
  getTotalCount(): number;
  setTotalCount(value: number): void;

  clearResultList(): void;
  getResultList(): Array<DeviceListItem>;
  setResultList(value: Array<DeviceListItem>): void;
  addResult(value?: DeviceListItem, index?: number): DeviceListItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListDeviceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListDeviceResponse): ListDeviceResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListDeviceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListDeviceResponse;
  static deserializeBinaryFromReader(message: ListDeviceResponse, reader: jspb.BinaryReader): ListDeviceResponse;
}

export namespace ListDeviceResponse {
  export type AsObject = {
    totalCount: number,
    resultList: Array<DeviceListItem.AsObject>,
  }
}

export class DeleteDeviceRequest extends jspb.Message {
  getDevEui(): string;
  setDevEui(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteDeviceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteDeviceRequest): DeleteDeviceRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteDeviceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteDeviceRequest;
  static deserializeBinaryFromReader(message: DeleteDeviceRequest, reader: jspb.BinaryReader): DeleteDeviceRequest;
}

export namespace DeleteDeviceRequest {
  export type AsObject = {
    devEui: string,
  }
}

export class UpdateDeviceRequest extends jspb.Message {
  hasDevice(): boolean;
  clearDevice(): void;
  getDevice(): Device | undefined;
  setDevice(value?: Device): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateDeviceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateDeviceRequest): UpdateDeviceRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateDeviceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateDeviceRequest;
  static deserializeBinaryFromReader(message: UpdateDeviceRequest, reader: jspb.BinaryReader): UpdateDeviceRequest;
}

export namespace UpdateDeviceRequest {
  export type AsObject = {
    device?: Device.AsObject,
  }
}

export class CreateDeviceKeysRequest extends jspb.Message {
  hasDeviceKeys(): boolean;
  clearDeviceKeys(): void;
  getDeviceKeys(): DeviceKeys | undefined;
  setDeviceKeys(value?: DeviceKeys): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateDeviceKeysRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateDeviceKeysRequest): CreateDeviceKeysRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateDeviceKeysRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateDeviceKeysRequest;
  static deserializeBinaryFromReader(message: CreateDeviceKeysRequest, reader: jspb.BinaryReader): CreateDeviceKeysRequest;
}

export namespace CreateDeviceKeysRequest {
  export type AsObject = {
    deviceKeys?: DeviceKeys.AsObject,
  }
}

export class GetDeviceKeysRequest extends jspb.Message {
  getDevEui(): string;
  setDevEui(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDeviceKeysRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetDeviceKeysRequest): GetDeviceKeysRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetDeviceKeysRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDeviceKeysRequest;
  static deserializeBinaryFromReader(message: GetDeviceKeysRequest, reader: jspb.BinaryReader): GetDeviceKeysRequest;
}

export namespace GetDeviceKeysRequest {
  export type AsObject = {
    devEui: string,
  }
}

export class GetDeviceKeysResponse extends jspb.Message {
  hasDeviceKeys(): boolean;
  clearDeviceKeys(): void;
  getDeviceKeys(): DeviceKeys | undefined;
  setDeviceKeys(value?: DeviceKeys): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDeviceKeysResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetDeviceKeysResponse): GetDeviceKeysResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetDeviceKeysResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDeviceKeysResponse;
  static deserializeBinaryFromReader(message: GetDeviceKeysResponse, reader: jspb.BinaryReader): GetDeviceKeysResponse;
}

export namespace GetDeviceKeysResponse {
  export type AsObject = {
    deviceKeys?: DeviceKeys.AsObject,
  }
}

export class UpdateDeviceKeysRequest extends jspb.Message {
  hasDeviceKeys(): boolean;
  clearDeviceKeys(): void;
  getDeviceKeys(): DeviceKeys | undefined;
  setDeviceKeys(value?: DeviceKeys): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateDeviceKeysRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateDeviceKeysRequest): UpdateDeviceKeysRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateDeviceKeysRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateDeviceKeysRequest;
  static deserializeBinaryFromReader(message: UpdateDeviceKeysRequest, reader: jspb.BinaryReader): UpdateDeviceKeysRequest;
}

export namespace UpdateDeviceKeysRequest {
  export type AsObject = {
    deviceKeys?: DeviceKeys.AsObject,
  }
}

export class DeleteDeviceKeysRequest extends jspb.Message {
  getDevEui(): string;
  setDevEui(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteDeviceKeysRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteDeviceKeysRequest): DeleteDeviceKeysRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteDeviceKeysRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteDeviceKeysRequest;
  static deserializeBinaryFromReader(message: DeleteDeviceKeysRequest, reader: jspb.BinaryReader): DeleteDeviceKeysRequest;
}

export namespace DeleteDeviceKeysRequest {
  export type AsObject = {
    devEui: string,
  }
}

export class DeviceActivation extends jspb.Message {
  getDevEui(): string;
  setDevEui(value: string): void;

  getDevAddr(): string;
  setDevAddr(value: string): void;

  getAppSKey(): string;
  setAppSKey(value: string): void;

  getNwkSEncKey(): string;
  setNwkSEncKey(value: string): void;

  getSNwkSIntKey(): string;
  setSNwkSIntKey(value: string): void;

  getFNwkSIntKey(): string;
  setFNwkSIntKey(value: string): void;

  getFCntUp(): number;
  setFCntUp(value: number): void;

  getNFCntDown(): number;
  setNFCntDown(value: number): void;

  getAFCntDown(): number;
  setAFCntDown(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeviceActivation.AsObject;
  static toObject(includeInstance: boolean, msg: DeviceActivation): DeviceActivation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeviceActivation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeviceActivation;
  static deserializeBinaryFromReader(message: DeviceActivation, reader: jspb.BinaryReader): DeviceActivation;
}

export namespace DeviceActivation {
  export type AsObject = {
    devEui: string,
    devAddr: string,
    appSKey: string,
    nwkSEncKey: string,
    sNwkSIntKey: string,
    fNwkSIntKey: string,
    fCntUp: number,
    nFCntDown: number,
    aFCntDown: number,
  }
}

export class ActivateDeviceRequest extends jspb.Message {
  hasDeviceActivation(): boolean;
  clearDeviceActivation(): void;
  getDeviceActivation(): DeviceActivation | undefined;
  setDeviceActivation(value?: DeviceActivation): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ActivateDeviceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ActivateDeviceRequest): ActivateDeviceRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ActivateDeviceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ActivateDeviceRequest;
  static deserializeBinaryFromReader(message: ActivateDeviceRequest, reader: jspb.BinaryReader): ActivateDeviceRequest;
}

export namespace ActivateDeviceRequest {
  export type AsObject = {
    deviceActivation?: DeviceActivation.AsObject,
  }
}

export class DeactivateDeviceRequest extends jspb.Message {
  getDevEui(): string;
  setDevEui(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeactivateDeviceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeactivateDeviceRequest): DeactivateDeviceRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeactivateDeviceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeactivateDeviceRequest;
  static deserializeBinaryFromReader(message: DeactivateDeviceRequest, reader: jspb.BinaryReader): DeactivateDeviceRequest;
}

export namespace DeactivateDeviceRequest {
  export type AsObject = {
    devEui: string,
  }
}

export class GetDeviceActivationRequest extends jspb.Message {
  getDevEui(): string;
  setDevEui(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDeviceActivationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetDeviceActivationRequest): GetDeviceActivationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetDeviceActivationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDeviceActivationRequest;
  static deserializeBinaryFromReader(message: GetDeviceActivationRequest, reader: jspb.BinaryReader): GetDeviceActivationRequest;
}

export namespace GetDeviceActivationRequest {
  export type AsObject = {
    devEui: string,
  }
}

export class GetDeviceActivationResponse extends jspb.Message {
  hasDeviceActivation(): boolean;
  clearDeviceActivation(): void;
  getDeviceActivation(): DeviceActivation | undefined;
  setDeviceActivation(value?: DeviceActivation): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDeviceActivationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetDeviceActivationResponse): GetDeviceActivationResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetDeviceActivationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDeviceActivationResponse;
  static deserializeBinaryFromReader(message: GetDeviceActivationResponse, reader: jspb.BinaryReader): GetDeviceActivationResponse;
}

export namespace GetDeviceActivationResponse {
  export type AsObject = {
    deviceActivation?: DeviceActivation.AsObject,
  }
}

export class GetRandomDevAddrRequest extends jspb.Message {
  getDevEui(): string;
  setDevEui(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRandomDevAddrRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetRandomDevAddrRequest): GetRandomDevAddrRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetRandomDevAddrRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRandomDevAddrRequest;
  static deserializeBinaryFromReader(message: GetRandomDevAddrRequest, reader: jspb.BinaryReader): GetRandomDevAddrRequest;
}

export namespace GetRandomDevAddrRequest {
  export type AsObject = {
    devEui: string,
  }
}

export class GetRandomDevAddrResponse extends jspb.Message {
  getDevAddr(): string;
  setDevAddr(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRandomDevAddrResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetRandomDevAddrResponse): GetRandomDevAddrResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetRandomDevAddrResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRandomDevAddrResponse;
  static deserializeBinaryFromReader(message: GetRandomDevAddrResponse, reader: jspb.BinaryReader): GetRandomDevAddrResponse;
}

export namespace GetRandomDevAddrResponse {
  export type AsObject = {
    devAddr: string,
  }
}

export class StreamDeviceFrameLogsRequest extends jspb.Message {
  getDevEui(): string;
  setDevEui(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamDeviceFrameLogsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StreamDeviceFrameLogsRequest): StreamDeviceFrameLogsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StreamDeviceFrameLogsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamDeviceFrameLogsRequest;
  static deserializeBinaryFromReader(message: StreamDeviceFrameLogsRequest, reader: jspb.BinaryReader): StreamDeviceFrameLogsRequest;
}

export namespace StreamDeviceFrameLogsRequest {
  export type AsObject = {
    devEui: string,
  }
}

export class StreamDeviceFrameLogsResponse extends jspb.Message {
  hasUplinkFrame(): boolean;
  clearUplinkFrame(): void;
  getUplinkFrame(): as_external_api_frameLog_pb.UplinkFrameLog | undefined;
  setUplinkFrame(value?: as_external_api_frameLog_pb.UplinkFrameLog): void;

  hasDownlinkFrame(): boolean;
  clearDownlinkFrame(): void;
  getDownlinkFrame(): as_external_api_frameLog_pb.DownlinkFrameLog | undefined;
  setDownlinkFrame(value?: as_external_api_frameLog_pb.DownlinkFrameLog): void;

  getFrameCase(): StreamDeviceFrameLogsResponse.FrameCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamDeviceFrameLogsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: StreamDeviceFrameLogsResponse): StreamDeviceFrameLogsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StreamDeviceFrameLogsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamDeviceFrameLogsResponse;
  static deserializeBinaryFromReader(message: StreamDeviceFrameLogsResponse, reader: jspb.BinaryReader): StreamDeviceFrameLogsResponse;
}

export namespace StreamDeviceFrameLogsResponse {
  export type AsObject = {
    uplinkFrame?: as_external_api_frameLog_pb.UplinkFrameLog.AsObject,
    downlinkFrame?: as_external_api_frameLog_pb.DownlinkFrameLog.AsObject,
  }

  export enum FrameCase {
    FRAME_NOT_SET = 0,
    UPLINK_FRAME = 1,
    DOWNLINK_FRAME = 2,
  }
}

export class StreamDeviceEventLogsRequest extends jspb.Message {
  getDevEui(): string;
  setDevEui(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamDeviceEventLogsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StreamDeviceEventLogsRequest): StreamDeviceEventLogsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StreamDeviceEventLogsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamDeviceEventLogsRequest;
  static deserializeBinaryFromReader(message: StreamDeviceEventLogsRequest, reader: jspb.BinaryReader): StreamDeviceEventLogsRequest;
}

export namespace StreamDeviceEventLogsRequest {
  export type AsObject = {
    devEui: string,
  }
}

export class StreamDeviceEventLogsResponse extends jspb.Message {
  getType(): string;
  setType(value: string): void;

  getPayloadJson(): string;
  setPayloadJson(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamDeviceEventLogsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: StreamDeviceEventLogsResponse): StreamDeviceEventLogsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StreamDeviceEventLogsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamDeviceEventLogsResponse;
  static deserializeBinaryFromReader(message: StreamDeviceEventLogsResponse, reader: jspb.BinaryReader): StreamDeviceEventLogsResponse;
}

export namespace StreamDeviceEventLogsResponse {
  export type AsObject = {
    type: string,
    payloadJson: string,
  }
}

