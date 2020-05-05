// package: api
// file: as/external/api/deviceProfile.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../google/api/annotations_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as as_external_api_profiles_pb from "../../../as/external/api/profiles_pb";

export class CreateDeviceProfileRequest extends jspb.Message {
  hasDeviceProfile(): boolean;
  clearDeviceProfile(): void;
  getDeviceProfile(): as_external_api_profiles_pb.DeviceProfile | undefined;
  setDeviceProfile(value?: as_external_api_profiles_pb.DeviceProfile): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateDeviceProfileRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateDeviceProfileRequest): CreateDeviceProfileRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateDeviceProfileRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateDeviceProfileRequest;
  static deserializeBinaryFromReader(message: CreateDeviceProfileRequest, reader: jspb.BinaryReader): CreateDeviceProfileRequest;
}

export namespace CreateDeviceProfileRequest {
  export type AsObject = {
    deviceProfile?: as_external_api_profiles_pb.DeviceProfile.AsObject,
  }
}

export class CreateDeviceProfileResponse extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateDeviceProfileResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateDeviceProfileResponse): CreateDeviceProfileResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateDeviceProfileResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateDeviceProfileResponse;
  static deserializeBinaryFromReader(message: CreateDeviceProfileResponse, reader: jspb.BinaryReader): CreateDeviceProfileResponse;
}

export namespace CreateDeviceProfileResponse {
  export type AsObject = {
    id: string,
  }
}

export class GetDeviceProfileRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDeviceProfileRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetDeviceProfileRequest): GetDeviceProfileRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetDeviceProfileRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDeviceProfileRequest;
  static deserializeBinaryFromReader(message: GetDeviceProfileRequest, reader: jspb.BinaryReader): GetDeviceProfileRequest;
}

export namespace GetDeviceProfileRequest {
  export type AsObject = {
    id: string,
  }
}

export class GetDeviceProfileResponse extends jspb.Message {
  hasDeviceProfile(): boolean;
  clearDeviceProfile(): void;
  getDeviceProfile(): as_external_api_profiles_pb.DeviceProfile | undefined;
  setDeviceProfile(value?: as_external_api_profiles_pb.DeviceProfile): void;

  hasCreatedAt(): boolean;
  clearCreatedAt(): void;
  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasUpdatedAt(): boolean;
  clearUpdatedAt(): void;
  getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDeviceProfileResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetDeviceProfileResponse): GetDeviceProfileResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetDeviceProfileResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDeviceProfileResponse;
  static deserializeBinaryFromReader(message: GetDeviceProfileResponse, reader: jspb.BinaryReader): GetDeviceProfileResponse;
}

export namespace GetDeviceProfileResponse {
  export type AsObject = {
    deviceProfile?: as_external_api_profiles_pb.DeviceProfile.AsObject,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class UpdateDeviceProfileRequest extends jspb.Message {
  hasDeviceProfile(): boolean;
  clearDeviceProfile(): void;
  getDeviceProfile(): as_external_api_profiles_pb.DeviceProfile | undefined;
  setDeviceProfile(value?: as_external_api_profiles_pb.DeviceProfile): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateDeviceProfileRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateDeviceProfileRequest): UpdateDeviceProfileRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateDeviceProfileRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateDeviceProfileRequest;
  static deserializeBinaryFromReader(message: UpdateDeviceProfileRequest, reader: jspb.BinaryReader): UpdateDeviceProfileRequest;
}

export namespace UpdateDeviceProfileRequest {
  export type AsObject = {
    deviceProfile?: as_external_api_profiles_pb.DeviceProfile.AsObject,
  }
}

export class DeleteDeviceProfileRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteDeviceProfileRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteDeviceProfileRequest): DeleteDeviceProfileRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteDeviceProfileRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteDeviceProfileRequest;
  static deserializeBinaryFromReader(message: DeleteDeviceProfileRequest, reader: jspb.BinaryReader): DeleteDeviceProfileRequest;
}

export namespace DeleteDeviceProfileRequest {
  export type AsObject = {
    id: string,
  }
}

export class DeviceProfileListItem extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getOrganizationId(): number;
  setOrganizationId(value: number): void;

  getNetworkServerId(): number;
  setNetworkServerId(value: number): void;

  hasCreatedAt(): boolean;
  clearCreatedAt(): void;
  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasUpdatedAt(): boolean;
  clearUpdatedAt(): void;
  getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getNetworkServerName(): string;
  setNetworkServerName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeviceProfileListItem.AsObject;
  static toObject(includeInstance: boolean, msg: DeviceProfileListItem): DeviceProfileListItem.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeviceProfileListItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeviceProfileListItem;
  static deserializeBinaryFromReader(message: DeviceProfileListItem, reader: jspb.BinaryReader): DeviceProfileListItem;
}

export namespace DeviceProfileListItem {
  export type AsObject = {
    id: string,
    name: string,
    organizationId: number,
    networkServerId: number,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    networkServerName: string,
  }
}

export class ListDeviceProfileRequest extends jspb.Message {
  getLimit(): number;
  setLimit(value: number): void;

  getOffset(): number;
  setOffset(value: number): void;

  getOrganizationId(): number;
  setOrganizationId(value: number): void;

  getApplicationId(): number;
  setApplicationId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListDeviceProfileRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListDeviceProfileRequest): ListDeviceProfileRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListDeviceProfileRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListDeviceProfileRequest;
  static deserializeBinaryFromReader(message: ListDeviceProfileRequest, reader: jspb.BinaryReader): ListDeviceProfileRequest;
}

export namespace ListDeviceProfileRequest {
  export type AsObject = {
    limit: number,
    offset: number,
    organizationId: number,
    applicationId: number,
  }
}

export class ListDeviceProfileResponse extends jspb.Message {
  getTotalCount(): number;
  setTotalCount(value: number): void;

  clearResultList(): void;
  getResultList(): Array<DeviceProfileListItem>;
  setResultList(value: Array<DeviceProfileListItem>): void;
  addResult(value?: DeviceProfileListItem, index?: number): DeviceProfileListItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListDeviceProfileResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListDeviceProfileResponse): ListDeviceProfileResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListDeviceProfileResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListDeviceProfileResponse;
  static deserializeBinaryFromReader(message: ListDeviceProfileResponse, reader: jspb.BinaryReader): ListDeviceProfileResponse;
}

export namespace ListDeviceProfileResponse {
  export type AsObject = {
    totalCount: number,
    resultList: Array<DeviceProfileListItem.AsObject>,
  }
}

