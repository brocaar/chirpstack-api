// package: api
// file: as/external/api/fuotaDeployment.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../google/api/annotations_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as as_external_api_multicastGroup_pb from "../../../as/external/api/multicastGroup_pb";

export class FUOTADeployment extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getGroupType(): as_external_api_multicastGroup_pb.MulticastGroupTypeMap[keyof as_external_api_multicastGroup_pb.MulticastGroupTypeMap];
  setGroupType(value: as_external_api_multicastGroup_pb.MulticastGroupTypeMap[keyof as_external_api_multicastGroup_pb.MulticastGroupTypeMap]): void;

  getDr(): number;
  setDr(value: number): void;

  getFrequency(): number;
  setFrequency(value: number): void;

  getPayload(): Uint8Array | string;
  getPayload_asU8(): Uint8Array;
  getPayload_asB64(): string;
  setPayload(value: Uint8Array | string): void;

  getRedundancy(): number;
  setRedundancy(value: number): void;

  getMulticastTimeout(): number;
  setMulticastTimeout(value: number): void;

  hasUnicastTimeout(): boolean;
  clearUnicastTimeout(): void;
  getUnicastTimeout(): google_protobuf_duration_pb.Duration | undefined;
  setUnicastTimeout(value?: google_protobuf_duration_pb.Duration): void;

  getState(): string;
  setState(value: string): void;

  hasNextStepAfter(): boolean;
  clearNextStepAfter(): void;
  getNextStepAfter(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setNextStepAfter(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FUOTADeployment.AsObject;
  static toObject(includeInstance: boolean, msg: FUOTADeployment): FUOTADeployment.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FUOTADeployment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FUOTADeployment;
  static deserializeBinaryFromReader(message: FUOTADeployment, reader: jspb.BinaryReader): FUOTADeployment;
}

export namespace FUOTADeployment {
  export type AsObject = {
    id: string,
    name: string,
    groupType: as_external_api_multicastGroup_pb.MulticastGroupTypeMap[keyof as_external_api_multicastGroup_pb.MulticastGroupTypeMap],
    dr: number,
    frequency: number,
    payload: Uint8Array | string,
    redundancy: number,
    multicastTimeout: number,
    unicastTimeout?: google_protobuf_duration_pb.Duration.AsObject,
    state: string,
    nextStepAfter?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class FUOTADeploymentListItem extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  hasCreatedAt(): boolean;
  clearCreatedAt(): void;
  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasUpdatedAt(): boolean;
  clearUpdatedAt(): void;
  getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getName(): string;
  setName(value: string): void;

  getState(): string;
  setState(value: string): void;

  hasNextStepAfter(): boolean;
  clearNextStepAfter(): void;
  getNextStepAfter(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setNextStepAfter(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FUOTADeploymentListItem.AsObject;
  static toObject(includeInstance: boolean, msg: FUOTADeploymentListItem): FUOTADeploymentListItem.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FUOTADeploymentListItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FUOTADeploymentListItem;
  static deserializeBinaryFromReader(message: FUOTADeploymentListItem, reader: jspb.BinaryReader): FUOTADeploymentListItem;
}

export namespace FUOTADeploymentListItem {
  export type AsObject = {
    id: string,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    name: string,
    state: string,
    nextStepAfter?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class CreateFUOTADeploymentForDeviceRequest extends jspb.Message {
  getDevEui(): string;
  setDevEui(value: string): void;

  hasFuotaDeployment(): boolean;
  clearFuotaDeployment(): void;
  getFuotaDeployment(): FUOTADeployment | undefined;
  setFuotaDeployment(value?: FUOTADeployment): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateFUOTADeploymentForDeviceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateFUOTADeploymentForDeviceRequest): CreateFUOTADeploymentForDeviceRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateFUOTADeploymentForDeviceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateFUOTADeploymentForDeviceRequest;
  static deserializeBinaryFromReader(message: CreateFUOTADeploymentForDeviceRequest, reader: jspb.BinaryReader): CreateFUOTADeploymentForDeviceRequest;
}

export namespace CreateFUOTADeploymentForDeviceRequest {
  export type AsObject = {
    devEui: string,
    fuotaDeployment?: FUOTADeployment.AsObject,
  }
}

export class CreateFUOTADeploymentForDeviceResponse extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateFUOTADeploymentForDeviceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateFUOTADeploymentForDeviceResponse): CreateFUOTADeploymentForDeviceResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateFUOTADeploymentForDeviceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateFUOTADeploymentForDeviceResponse;
  static deserializeBinaryFromReader(message: CreateFUOTADeploymentForDeviceResponse, reader: jspb.BinaryReader): CreateFUOTADeploymentForDeviceResponse;
}

export namespace CreateFUOTADeploymentForDeviceResponse {
  export type AsObject = {
    id: string,
  }
}

export class GetFUOTADeploymentRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFUOTADeploymentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetFUOTADeploymentRequest): GetFUOTADeploymentRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetFUOTADeploymentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFUOTADeploymentRequest;
  static deserializeBinaryFromReader(message: GetFUOTADeploymentRequest, reader: jspb.BinaryReader): GetFUOTADeploymentRequest;
}

export namespace GetFUOTADeploymentRequest {
  export type AsObject = {
    id: string,
  }
}

export class GetFUOTADeploymentResponse extends jspb.Message {
  hasFuotaDeployment(): boolean;
  clearFuotaDeployment(): void;
  getFuotaDeployment(): FUOTADeployment | undefined;
  setFuotaDeployment(value?: FUOTADeployment): void;

  hasCreatedAt(): boolean;
  clearCreatedAt(): void;
  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasUpdatedAt(): boolean;
  clearUpdatedAt(): void;
  getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFUOTADeploymentResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetFUOTADeploymentResponse): GetFUOTADeploymentResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetFUOTADeploymentResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFUOTADeploymentResponse;
  static deserializeBinaryFromReader(message: GetFUOTADeploymentResponse, reader: jspb.BinaryReader): GetFUOTADeploymentResponse;
}

export namespace GetFUOTADeploymentResponse {
  export type AsObject = {
    fuotaDeployment?: FUOTADeployment.AsObject,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class ListFUOTADeploymentRequest extends jspb.Message {
  getLimit(): number;
  setLimit(value: number): void;

  getOffset(): number;
  setOffset(value: number): void;

  getApplicationId(): number;
  setApplicationId(value: number): void;

  getDevEui(): string;
  setDevEui(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListFUOTADeploymentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListFUOTADeploymentRequest): ListFUOTADeploymentRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListFUOTADeploymentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListFUOTADeploymentRequest;
  static deserializeBinaryFromReader(message: ListFUOTADeploymentRequest, reader: jspb.BinaryReader): ListFUOTADeploymentRequest;
}

export namespace ListFUOTADeploymentRequest {
  export type AsObject = {
    limit: number,
    offset: number,
    applicationId: number,
    devEui: string,
  }
}

export class ListFUOTADeploymentResponse extends jspb.Message {
  getTotalCount(): number;
  setTotalCount(value: number): void;

  clearResultList(): void;
  getResultList(): Array<FUOTADeploymentListItem>;
  setResultList(value: Array<FUOTADeploymentListItem>): void;
  addResult(value?: FUOTADeploymentListItem, index?: number): FUOTADeploymentListItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListFUOTADeploymentResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListFUOTADeploymentResponse): ListFUOTADeploymentResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListFUOTADeploymentResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListFUOTADeploymentResponse;
  static deserializeBinaryFromReader(message: ListFUOTADeploymentResponse, reader: jspb.BinaryReader): ListFUOTADeploymentResponse;
}

export namespace ListFUOTADeploymentResponse {
  export type AsObject = {
    totalCount: number,
    resultList: Array<FUOTADeploymentListItem.AsObject>,
  }
}

export class ListFUOTADeploymentDevicesRequest extends jspb.Message {
  getFuotaDeploymentId(): string;
  setFuotaDeploymentId(value: string): void;

  getLimit(): number;
  setLimit(value: number): void;

  getOffset(): number;
  setOffset(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListFUOTADeploymentDevicesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListFUOTADeploymentDevicesRequest): ListFUOTADeploymentDevicesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListFUOTADeploymentDevicesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListFUOTADeploymentDevicesRequest;
  static deserializeBinaryFromReader(message: ListFUOTADeploymentDevicesRequest, reader: jspb.BinaryReader): ListFUOTADeploymentDevicesRequest;
}

export namespace ListFUOTADeploymentDevicesRequest {
  export type AsObject = {
    fuotaDeploymentId: string,
    limit: number,
    offset: number,
  }
}

export class GetFUOTADeploymentDeviceRequest extends jspb.Message {
  getFuotaDeploymentId(): string;
  setFuotaDeploymentId(value: string): void;

  getDevEui(): string;
  setDevEui(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFUOTADeploymentDeviceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetFUOTADeploymentDeviceRequest): GetFUOTADeploymentDeviceRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetFUOTADeploymentDeviceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFUOTADeploymentDeviceRequest;
  static deserializeBinaryFromReader(message: GetFUOTADeploymentDeviceRequest, reader: jspb.BinaryReader): GetFUOTADeploymentDeviceRequest;
}

export namespace GetFUOTADeploymentDeviceRequest {
  export type AsObject = {
    fuotaDeploymentId: string,
    devEui: string,
  }
}

export class GetFUOTADeploymentDeviceResponse extends jspb.Message {
  hasDeploymentDevice(): boolean;
  clearDeploymentDevice(): void;
  getDeploymentDevice(): FUOTADeploymentDeviceListItem | undefined;
  setDeploymentDevice(value?: FUOTADeploymentDeviceListItem): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFUOTADeploymentDeviceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetFUOTADeploymentDeviceResponse): GetFUOTADeploymentDeviceResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetFUOTADeploymentDeviceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFUOTADeploymentDeviceResponse;
  static deserializeBinaryFromReader(message: GetFUOTADeploymentDeviceResponse, reader: jspb.BinaryReader): GetFUOTADeploymentDeviceResponse;
}

export namespace GetFUOTADeploymentDeviceResponse {
  export type AsObject = {
    deploymentDevice?: FUOTADeploymentDeviceListItem.AsObject,
  }
}

export class ListFUOTADeploymentDevicesResponse extends jspb.Message {
  getTotalCount(): number;
  setTotalCount(value: number): void;

  clearResultList(): void;
  getResultList(): Array<FUOTADeploymentDeviceListItem>;
  setResultList(value: Array<FUOTADeploymentDeviceListItem>): void;
  addResult(value?: FUOTADeploymentDeviceListItem, index?: number): FUOTADeploymentDeviceListItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListFUOTADeploymentDevicesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListFUOTADeploymentDevicesResponse): ListFUOTADeploymentDevicesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListFUOTADeploymentDevicesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListFUOTADeploymentDevicesResponse;
  static deserializeBinaryFromReader(message: ListFUOTADeploymentDevicesResponse, reader: jspb.BinaryReader): ListFUOTADeploymentDevicesResponse;
}

export namespace ListFUOTADeploymentDevicesResponse {
  export type AsObject = {
    totalCount: number,
    resultList: Array<FUOTADeploymentDeviceListItem.AsObject>,
  }
}

export class FUOTADeploymentDeviceListItem extends jspb.Message {
  getDevEui(): string;
  setDevEui(value: string): void;

  getDeviceName(): string;
  setDeviceName(value: string): void;

  getState(): FUOTADeploymentDeviceStateMap[keyof FUOTADeploymentDeviceStateMap];
  setState(value: FUOTADeploymentDeviceStateMap[keyof FUOTADeploymentDeviceStateMap]): void;

  getErrorMessage(): string;
  setErrorMessage(value: string): void;

  hasCreatedAt(): boolean;
  clearCreatedAt(): void;
  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasUpdatedAt(): boolean;
  clearUpdatedAt(): void;
  getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FUOTADeploymentDeviceListItem.AsObject;
  static toObject(includeInstance: boolean, msg: FUOTADeploymentDeviceListItem): FUOTADeploymentDeviceListItem.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FUOTADeploymentDeviceListItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FUOTADeploymentDeviceListItem;
  static deserializeBinaryFromReader(message: FUOTADeploymentDeviceListItem, reader: jspb.BinaryReader): FUOTADeploymentDeviceListItem;
}

export namespace FUOTADeploymentDeviceListItem {
  export type AsObject = {
    devEui: string,
    deviceName: string,
    state: FUOTADeploymentDeviceStateMap[keyof FUOTADeploymentDeviceStateMap],
    errorMessage: string,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export interface FUOTADeploymentDeviceStateMap {
  PENDING: 0;
  SUCCESS: 1;
  ERROR: 2;
}

export const FUOTADeploymentDeviceState: FUOTADeploymentDeviceStateMap;

