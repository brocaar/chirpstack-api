// package: api
// file: as/external/api/serviceProfile.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../google/api/annotations_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as as_external_api_profiles_pb from "../../../as/external/api/profiles_pb";

export class CreateServiceProfileRequest extends jspb.Message {
  hasServiceProfile(): boolean;
  clearServiceProfile(): void;
  getServiceProfile(): as_external_api_profiles_pb.ServiceProfile | undefined;
  setServiceProfile(value?: as_external_api_profiles_pb.ServiceProfile): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateServiceProfileRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateServiceProfileRequest): CreateServiceProfileRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateServiceProfileRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateServiceProfileRequest;
  static deserializeBinaryFromReader(message: CreateServiceProfileRequest, reader: jspb.BinaryReader): CreateServiceProfileRequest;
}

export namespace CreateServiceProfileRequest {
  export type AsObject = {
    serviceProfile?: as_external_api_profiles_pb.ServiceProfile.AsObject,
  }
}

export class CreateServiceProfileResponse extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateServiceProfileResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateServiceProfileResponse): CreateServiceProfileResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateServiceProfileResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateServiceProfileResponse;
  static deserializeBinaryFromReader(message: CreateServiceProfileResponse, reader: jspb.BinaryReader): CreateServiceProfileResponse;
}

export namespace CreateServiceProfileResponse {
  export type AsObject = {
    id: string,
  }
}

export class GetServiceProfileRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetServiceProfileRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetServiceProfileRequest): GetServiceProfileRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetServiceProfileRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetServiceProfileRequest;
  static deserializeBinaryFromReader(message: GetServiceProfileRequest, reader: jspb.BinaryReader): GetServiceProfileRequest;
}

export namespace GetServiceProfileRequest {
  export type AsObject = {
    id: string,
  }
}

export class GetServiceProfileResponse extends jspb.Message {
  hasServiceProfile(): boolean;
  clearServiceProfile(): void;
  getServiceProfile(): as_external_api_profiles_pb.ServiceProfile | undefined;
  setServiceProfile(value?: as_external_api_profiles_pb.ServiceProfile): void;

  hasCreatedAt(): boolean;
  clearCreatedAt(): void;
  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasUpdatedAt(): boolean;
  clearUpdatedAt(): void;
  getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetServiceProfileResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetServiceProfileResponse): GetServiceProfileResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetServiceProfileResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetServiceProfileResponse;
  static deserializeBinaryFromReader(message: GetServiceProfileResponse, reader: jspb.BinaryReader): GetServiceProfileResponse;
}

export namespace GetServiceProfileResponse {
  export type AsObject = {
    serviceProfile?: as_external_api_profiles_pb.ServiceProfile.AsObject,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class UpdateServiceProfileRequest extends jspb.Message {
  hasServiceProfile(): boolean;
  clearServiceProfile(): void;
  getServiceProfile(): as_external_api_profiles_pb.ServiceProfile | undefined;
  setServiceProfile(value?: as_external_api_profiles_pb.ServiceProfile): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateServiceProfileRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateServiceProfileRequest): UpdateServiceProfileRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateServiceProfileRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateServiceProfileRequest;
  static deserializeBinaryFromReader(message: UpdateServiceProfileRequest, reader: jspb.BinaryReader): UpdateServiceProfileRequest;
}

export namespace UpdateServiceProfileRequest {
  export type AsObject = {
    serviceProfile?: as_external_api_profiles_pb.ServiceProfile.AsObject,
  }
}

export class DeleteServiceProfileRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteServiceProfileRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteServiceProfileRequest): DeleteServiceProfileRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteServiceProfileRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteServiceProfileRequest;
  static deserializeBinaryFromReader(message: DeleteServiceProfileRequest, reader: jspb.BinaryReader): DeleteServiceProfileRequest;
}

export namespace DeleteServiceProfileRequest {
  export type AsObject = {
    id: string,
  }
}

export class ListServiceProfileRequest extends jspb.Message {
  getLimit(): number;
  setLimit(value: number): void;

  getOffset(): number;
  setOffset(value: number): void;

  getOrganizationId(): number;
  setOrganizationId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListServiceProfileRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListServiceProfileRequest): ListServiceProfileRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListServiceProfileRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListServiceProfileRequest;
  static deserializeBinaryFromReader(message: ListServiceProfileRequest, reader: jspb.BinaryReader): ListServiceProfileRequest;
}

export namespace ListServiceProfileRequest {
  export type AsObject = {
    limit: number,
    offset: number,
    organizationId: number,
  }
}

export class ServiceProfileListItem extends jspb.Message {
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

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServiceProfileListItem.AsObject;
  static toObject(includeInstance: boolean, msg: ServiceProfileListItem): ServiceProfileListItem.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ServiceProfileListItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServiceProfileListItem;
  static deserializeBinaryFromReader(message: ServiceProfileListItem, reader: jspb.BinaryReader): ServiceProfileListItem;
}

export namespace ServiceProfileListItem {
  export type AsObject = {
    id: string,
    name: string,
    organizationId: number,
    networkServerId: number,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class ListServiceProfileResponse extends jspb.Message {
  getTotalCount(): number;
  setTotalCount(value: number): void;

  clearResultList(): void;
  getResultList(): Array<ServiceProfileListItem>;
  setResultList(value: Array<ServiceProfileListItem>): void;
  addResult(value?: ServiceProfileListItem, index?: number): ServiceProfileListItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListServiceProfileResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListServiceProfileResponse): ListServiceProfileResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListServiceProfileResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListServiceProfileResponse;
  static deserializeBinaryFromReader(message: ListServiceProfileResponse, reader: jspb.BinaryReader): ListServiceProfileResponse;
}

export namespace ListServiceProfileResponse {
  export type AsObject = {
    totalCount: number,
    resultList: Array<ServiceProfileListItem.AsObject>,
  }
}

