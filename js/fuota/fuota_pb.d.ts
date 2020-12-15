// package: fuota
// file: fuota/fuota.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";

export class DeploymentDevice extends jspb.Message {
  getDevEui(): Uint8Array | string;
  getDevEui_asU8(): Uint8Array;
  getDevEui_asB64(): string;
  setDevEui(value: Uint8Array | string): void;

  getMcRootKey(): Uint8Array | string;
  getMcRootKey_asU8(): Uint8Array;
  getMcRootKey_asB64(): string;
  setMcRootKey(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeploymentDevice.AsObject;
  static toObject(includeInstance: boolean, msg: DeploymentDevice): DeploymentDevice.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeploymentDevice, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeploymentDevice;
  static deserializeBinaryFromReader(message: DeploymentDevice, reader: jspb.BinaryReader): DeploymentDevice;
}

export namespace DeploymentDevice {
  export type AsObject = {
    devEui: Uint8Array | string,
    mcRootKey: Uint8Array | string,
  }
}

export class Deployment extends jspb.Message {
  getApplicationId(): number;
  setApplicationId(value: number): void;

  clearDevicesList(): void;
  getDevicesList(): Array<DeploymentDevice>;
  setDevicesList(value: Array<DeploymentDevice>): void;
  addDevices(value?: DeploymentDevice, index?: number): DeploymentDevice;

  getMulticastGroupType(): MulticastGroupTypeMap[keyof MulticastGroupTypeMap];
  setMulticastGroupType(value: MulticastGroupTypeMap[keyof MulticastGroupTypeMap]): void;

  getMulticastDr(): number;
  setMulticastDr(value: number): void;

  getMulticastPingSlotPeriod(): number;
  setMulticastPingSlotPeriod(value: number): void;

  getMulticastFrequency(): number;
  setMulticastFrequency(value: number): void;

  getMulticastGroupId(): number;
  setMulticastGroupId(value: number): void;

  getMulticastTimeout(): number;
  setMulticastTimeout(value: number): void;

  hasUnicastTimeout(): boolean;
  clearUnicastTimeout(): void;
  getUnicastTimeout(): google_protobuf_duration_pb.Duration | undefined;
  setUnicastTimeout(value?: google_protobuf_duration_pb.Duration): void;

  getUnicastAttemptCount(): number;
  setUnicastAttemptCount(value: number): void;

  getFragmentationFragmentSize(): number;
  setFragmentationFragmentSize(value: number): void;

  getPayload(): Uint8Array | string;
  getPayload_asU8(): Uint8Array;
  getPayload_asB64(): string;
  setPayload(value: Uint8Array | string): void;

  getFragmentationRedundancy(): number;
  setFragmentationRedundancy(value: number): void;

  getFragmentationSessionIndex(): number;
  setFragmentationSessionIndex(value: number): void;

  getFragmentationMatrix(): number;
  setFragmentationMatrix(value: number): void;

  getFragmentationBlockAckDelay(): number;
  setFragmentationBlockAckDelay(value: number): void;

  getFragmentationDescriptor(): Uint8Array | string;
  getFragmentationDescriptor_asU8(): Uint8Array;
  getFragmentationDescriptor_asB64(): string;
  setFragmentationDescriptor(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Deployment.AsObject;
  static toObject(includeInstance: boolean, msg: Deployment): Deployment.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Deployment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Deployment;
  static deserializeBinaryFromReader(message: Deployment, reader: jspb.BinaryReader): Deployment;
}

export namespace Deployment {
  export type AsObject = {
    applicationId: number,
    devicesList: Array<DeploymentDevice.AsObject>,
    multicastGroupType: MulticastGroupTypeMap[keyof MulticastGroupTypeMap],
    multicastDr: number,
    multicastPingSlotPeriod: number,
    multicastFrequency: number,
    multicastGroupId: number,
    multicastTimeout: number,
    unicastTimeout?: google_protobuf_duration_pb.Duration.AsObject,
    unicastAttemptCount: number,
    fragmentationFragmentSize: number,
    payload: Uint8Array | string,
    fragmentationRedundancy: number,
    fragmentationSessionIndex: number,
    fragmentationMatrix: number,
    fragmentationBlockAckDelay: number,
    fragmentationDescriptor: Uint8Array | string,
  }
}

export class CreateDeploymentRequest extends jspb.Message {
  hasDeployment(): boolean;
  clearDeployment(): void;
  getDeployment(): Deployment | undefined;
  setDeployment(value?: Deployment): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateDeploymentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateDeploymentRequest): CreateDeploymentRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateDeploymentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateDeploymentRequest;
  static deserializeBinaryFromReader(message: CreateDeploymentRequest, reader: jspb.BinaryReader): CreateDeploymentRequest;
}

export namespace CreateDeploymentRequest {
  export type AsObject = {
    deployment?: Deployment.AsObject,
  }
}

export class CreateDeploymentResponse extends jspb.Message {
  getId(): Uint8Array | string;
  getId_asU8(): Uint8Array;
  getId_asB64(): string;
  setId(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateDeploymentResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateDeploymentResponse): CreateDeploymentResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateDeploymentResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateDeploymentResponse;
  static deserializeBinaryFromReader(message: CreateDeploymentResponse, reader: jspb.BinaryReader): CreateDeploymentResponse;
}

export namespace CreateDeploymentResponse {
  export type AsObject = {
    id: Uint8Array | string,
  }
}

export class GetDeploymentStatusRequest extends jspb.Message {
  getId(): Uint8Array | string;
  getId_asU8(): Uint8Array;
  getId_asB64(): string;
  setId(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDeploymentStatusRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetDeploymentStatusRequest): GetDeploymentStatusRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetDeploymentStatusRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDeploymentStatusRequest;
  static deserializeBinaryFromReader(message: GetDeploymentStatusRequest, reader: jspb.BinaryReader): GetDeploymentStatusRequest;
}

export namespace GetDeploymentStatusRequest {
  export type AsObject = {
    id: Uint8Array | string,
  }
}

export class DeploymentDeviceStatus extends jspb.Message {
  getDevEui(): Uint8Array | string;
  getDevEui_asU8(): Uint8Array;
  getDevEui_asB64(): string;
  setDevEui(value: Uint8Array | string): void;

  hasCreatedAt(): boolean;
  clearCreatedAt(): void;
  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasUpdatedAt(): boolean;
  clearUpdatedAt(): void;
  getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasMcGroupSetupCompletedAt(): boolean;
  clearMcGroupSetupCompletedAt(): void;
  getMcGroupSetupCompletedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setMcGroupSetupCompletedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasMcSessionCompletedAt(): boolean;
  clearMcSessionCompletedAt(): void;
  getMcSessionCompletedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setMcSessionCompletedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasFragSessionSetupCompletedAt(): boolean;
  clearFragSessionSetupCompletedAt(): void;
  getFragSessionSetupCompletedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setFragSessionSetupCompletedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasFragStatusCompletedAt(): boolean;
  clearFragStatusCompletedAt(): void;
  getFragStatusCompletedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setFragStatusCompletedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeploymentDeviceStatus.AsObject;
  static toObject(includeInstance: boolean, msg: DeploymentDeviceStatus): DeploymentDeviceStatus.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeploymentDeviceStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeploymentDeviceStatus;
  static deserializeBinaryFromReader(message: DeploymentDeviceStatus, reader: jspb.BinaryReader): DeploymentDeviceStatus;
}

export namespace DeploymentDeviceStatus {
  export type AsObject = {
    devEui: Uint8Array | string,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    mcGroupSetupCompletedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    mcSessionCompletedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    fragSessionSetupCompletedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    fragStatusCompletedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class GetDeploymentStatusResponse extends jspb.Message {
  hasCreatedAt(): boolean;
  clearCreatedAt(): void;
  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasUpdatedAt(): boolean;
  clearUpdatedAt(): void;
  getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasMcGroupSetupCompletedAt(): boolean;
  clearMcGroupSetupCompletedAt(): void;
  getMcGroupSetupCompletedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setMcGroupSetupCompletedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasMcSessionCompletedAt(): boolean;
  clearMcSessionCompletedAt(): void;
  getMcSessionCompletedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setMcSessionCompletedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasFragSessionSetupCompletedAt(): boolean;
  clearFragSessionSetupCompletedAt(): void;
  getFragSessionSetupCompletedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setFragSessionSetupCompletedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasEnqueueCompletedAt(): boolean;
  clearEnqueueCompletedAt(): void;
  getEnqueueCompletedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEnqueueCompletedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasFragStatusCompletedAt(): boolean;
  clearFragStatusCompletedAt(): void;
  getFragStatusCompletedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setFragStatusCompletedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  clearDeviceStatusList(): void;
  getDeviceStatusList(): Array<DeploymentDeviceStatus>;
  setDeviceStatusList(value: Array<DeploymentDeviceStatus>): void;
  addDeviceStatus(value?: DeploymentDeviceStatus, index?: number): DeploymentDeviceStatus;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDeploymentStatusResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetDeploymentStatusResponse): GetDeploymentStatusResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetDeploymentStatusResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDeploymentStatusResponse;
  static deserializeBinaryFromReader(message: GetDeploymentStatusResponse, reader: jspb.BinaryReader): GetDeploymentStatusResponse;
}

export namespace GetDeploymentStatusResponse {
  export type AsObject = {
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    mcGroupSetupCompletedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    mcSessionCompletedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    fragSessionSetupCompletedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    enqueueCompletedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    fragStatusCompletedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    deviceStatusList: Array<DeploymentDeviceStatus.AsObject>,
  }
}

export class GetDeploymentDeviceLogsRequest extends jspb.Message {
  getDeploymentId(): Uint8Array | string;
  getDeploymentId_asU8(): Uint8Array;
  getDeploymentId_asB64(): string;
  setDeploymentId(value: Uint8Array | string): void;

  getDevEui(): Uint8Array | string;
  getDevEui_asU8(): Uint8Array;
  getDevEui_asB64(): string;
  setDevEui(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDeploymentDeviceLogsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetDeploymentDeviceLogsRequest): GetDeploymentDeviceLogsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetDeploymentDeviceLogsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDeploymentDeviceLogsRequest;
  static deserializeBinaryFromReader(message: GetDeploymentDeviceLogsRequest, reader: jspb.BinaryReader): GetDeploymentDeviceLogsRequest;
}

export namespace GetDeploymentDeviceLogsRequest {
  export type AsObject = {
    deploymentId: Uint8Array | string,
    devEui: Uint8Array | string,
  }
}

export class DeploymentDeviceLog extends jspb.Message {
  hasCreatedAt(): boolean;
  clearCreatedAt(): void;
  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getFPort(): number;
  setFPort(value: number): void;

  getCommand(): string;
  setCommand(value: string): void;

  getFieldsMap(): jspb.Map<string, string>;
  clearFieldsMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeploymentDeviceLog.AsObject;
  static toObject(includeInstance: boolean, msg: DeploymentDeviceLog): DeploymentDeviceLog.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeploymentDeviceLog, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeploymentDeviceLog;
  static deserializeBinaryFromReader(message: DeploymentDeviceLog, reader: jspb.BinaryReader): DeploymentDeviceLog;
}

export namespace DeploymentDeviceLog {
  export type AsObject = {
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    fPort: number,
    command: string,
    fieldsMap: Array<[string, string]>,
  }
}

export class GetDeploymentDeviceLogsResponse extends jspb.Message {
  clearLogsList(): void;
  getLogsList(): Array<DeploymentDeviceLog>;
  setLogsList(value: Array<DeploymentDeviceLog>): void;
  addLogs(value?: DeploymentDeviceLog, index?: number): DeploymentDeviceLog;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDeploymentDeviceLogsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetDeploymentDeviceLogsResponse): GetDeploymentDeviceLogsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetDeploymentDeviceLogsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDeploymentDeviceLogsResponse;
  static deserializeBinaryFromReader(message: GetDeploymentDeviceLogsResponse, reader: jspb.BinaryReader): GetDeploymentDeviceLogsResponse;
}

export namespace GetDeploymentDeviceLogsResponse {
  export type AsObject = {
    logsList: Array<DeploymentDeviceLog.AsObject>,
  }
}

export interface MulticastGroupTypeMap {
  CLASS_B: 0;
  CLASS_C: 1;
}

export const MulticastGroupType: MulticastGroupTypeMap;

