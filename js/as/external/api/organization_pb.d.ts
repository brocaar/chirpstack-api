// package: api
// file: as/external/api/organization.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../google/api/annotations_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

export class Organization extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getName(): string;
  setName(value: string): void;

  getDisplayName(): string;
  setDisplayName(value: string): void;

  getCanHaveGateways(): boolean;
  setCanHaveGateways(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Organization.AsObject;
  static toObject(includeInstance: boolean, msg: Organization): Organization.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Organization, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Organization;
  static deserializeBinaryFromReader(message: Organization, reader: jspb.BinaryReader): Organization;
}

export namespace Organization {
  export type AsObject = {
    id: number,
    name: string,
    displayName: string,
    canHaveGateways: boolean,
  }
}

export class OrganizationListItem extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getName(): string;
  setName(value: string): void;

  getDisplayName(): string;
  setDisplayName(value: string): void;

  getCanHaveGateways(): boolean;
  setCanHaveGateways(value: boolean): void;

  hasCreatedAt(): boolean;
  clearCreatedAt(): void;
  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasUpdatedAt(): boolean;
  clearUpdatedAt(): void;
  getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrganizationListItem.AsObject;
  static toObject(includeInstance: boolean, msg: OrganizationListItem): OrganizationListItem.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OrganizationListItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OrganizationListItem;
  static deserializeBinaryFromReader(message: OrganizationListItem, reader: jspb.BinaryReader): OrganizationListItem;
}

export namespace OrganizationListItem {
  export type AsObject = {
    id: number,
    name: string,
    displayName: string,
    canHaveGateways: boolean,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class GetOrganizationRequest extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetOrganizationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetOrganizationRequest): GetOrganizationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetOrganizationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetOrganizationRequest;
  static deserializeBinaryFromReader(message: GetOrganizationRequest, reader: jspb.BinaryReader): GetOrganizationRequest;
}

export namespace GetOrganizationRequest {
  export type AsObject = {
    id: number,
  }
}

export class GetOrganizationResponse extends jspb.Message {
  hasOrganization(): boolean;
  clearOrganization(): void;
  getOrganization(): Organization | undefined;
  setOrganization(value?: Organization): void;

  hasCreatedAt(): boolean;
  clearCreatedAt(): void;
  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasUpdatedAt(): boolean;
  clearUpdatedAt(): void;
  getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetOrganizationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetOrganizationResponse): GetOrganizationResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetOrganizationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetOrganizationResponse;
  static deserializeBinaryFromReader(message: GetOrganizationResponse, reader: jspb.BinaryReader): GetOrganizationResponse;
}

export namespace GetOrganizationResponse {
  export type AsObject = {
    organization?: Organization.AsObject,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class CreateOrganizationRequest extends jspb.Message {
  hasOrganization(): boolean;
  clearOrganization(): void;
  getOrganization(): Organization | undefined;
  setOrganization(value?: Organization): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateOrganizationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateOrganizationRequest): CreateOrganizationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateOrganizationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateOrganizationRequest;
  static deserializeBinaryFromReader(message: CreateOrganizationRequest, reader: jspb.BinaryReader): CreateOrganizationRequest;
}

export namespace CreateOrganizationRequest {
  export type AsObject = {
    organization?: Organization.AsObject,
  }
}

export class CreateOrganizationResponse extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateOrganizationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateOrganizationResponse): CreateOrganizationResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateOrganizationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateOrganizationResponse;
  static deserializeBinaryFromReader(message: CreateOrganizationResponse, reader: jspb.BinaryReader): CreateOrganizationResponse;
}

export namespace CreateOrganizationResponse {
  export type AsObject = {
    id: number,
  }
}

export class UpdateOrganizationRequest extends jspb.Message {
  hasOrganization(): boolean;
  clearOrganization(): void;
  getOrganization(): Organization | undefined;
  setOrganization(value?: Organization): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateOrganizationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateOrganizationRequest): UpdateOrganizationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateOrganizationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateOrganizationRequest;
  static deserializeBinaryFromReader(message: UpdateOrganizationRequest, reader: jspb.BinaryReader): UpdateOrganizationRequest;
}

export namespace UpdateOrganizationRequest {
  export type AsObject = {
    organization?: Organization.AsObject,
  }
}

export class DeleteOrganizationRequest extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteOrganizationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteOrganizationRequest): DeleteOrganizationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteOrganizationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteOrganizationRequest;
  static deserializeBinaryFromReader(message: DeleteOrganizationRequest, reader: jspb.BinaryReader): DeleteOrganizationRequest;
}

export namespace DeleteOrganizationRequest {
  export type AsObject = {
    id: number,
  }
}

export class ListOrganizationRequest extends jspb.Message {
  getLimit(): number;
  setLimit(value: number): void;

  getOffset(): number;
  setOffset(value: number): void;

  getSearch(): string;
  setSearch(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListOrganizationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListOrganizationRequest): ListOrganizationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListOrganizationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListOrganizationRequest;
  static deserializeBinaryFromReader(message: ListOrganizationRequest, reader: jspb.BinaryReader): ListOrganizationRequest;
}

export namespace ListOrganizationRequest {
  export type AsObject = {
    limit: number,
    offset: number,
    search: string,
  }
}

export class ListOrganizationResponse extends jspb.Message {
  getTotalCount(): number;
  setTotalCount(value: number): void;

  clearResultList(): void;
  getResultList(): Array<OrganizationListItem>;
  setResultList(value: Array<OrganizationListItem>): void;
  addResult(value?: OrganizationListItem, index?: number): OrganizationListItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListOrganizationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListOrganizationResponse): ListOrganizationResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListOrganizationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListOrganizationResponse;
  static deserializeBinaryFromReader(message: ListOrganizationResponse, reader: jspb.BinaryReader): ListOrganizationResponse;
}

export namespace ListOrganizationResponse {
  export type AsObject = {
    totalCount: number,
    resultList: Array<OrganizationListItem.AsObject>,
  }
}

export class OrganizationUser extends jspb.Message {
  getOrganizationId(): number;
  setOrganizationId(value: number): void;

  getUserId(): number;
  setUserId(value: number): void;

  getIsAdmin(): boolean;
  setIsAdmin(value: boolean): void;

  getIsDeviceAdmin(): boolean;
  setIsDeviceAdmin(value: boolean): void;

  getIsGatewayAdmin(): boolean;
  setIsGatewayAdmin(value: boolean): void;

  getUsername(): string;
  setUsername(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrganizationUser.AsObject;
  static toObject(includeInstance: boolean, msg: OrganizationUser): OrganizationUser.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OrganizationUser, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OrganizationUser;
  static deserializeBinaryFromReader(message: OrganizationUser, reader: jspb.BinaryReader): OrganizationUser;
}

export namespace OrganizationUser {
  export type AsObject = {
    organizationId: number,
    userId: number,
    isAdmin: boolean,
    isDeviceAdmin: boolean,
    isGatewayAdmin: boolean,
    username: string,
  }
}

export class OrganizationUserListItem extends jspb.Message {
  getUserId(): number;
  setUserId(value: number): void;

  getUsername(): string;
  setUsername(value: string): void;

  getIsAdmin(): boolean;
  setIsAdmin(value: boolean): void;

  getIsDeviceAdmin(): boolean;
  setIsDeviceAdmin(value: boolean): void;

  getIsGatewayAdmin(): boolean;
  setIsGatewayAdmin(value: boolean): void;

  hasCreatedAt(): boolean;
  clearCreatedAt(): void;
  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasUpdatedAt(): boolean;
  clearUpdatedAt(): void;
  getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrganizationUserListItem.AsObject;
  static toObject(includeInstance: boolean, msg: OrganizationUserListItem): OrganizationUserListItem.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OrganizationUserListItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OrganizationUserListItem;
  static deserializeBinaryFromReader(message: OrganizationUserListItem, reader: jspb.BinaryReader): OrganizationUserListItem;
}

export namespace OrganizationUserListItem {
  export type AsObject = {
    userId: number,
    username: string,
    isAdmin: boolean,
    isDeviceAdmin: boolean,
    isGatewayAdmin: boolean,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class AddOrganizationUserRequest extends jspb.Message {
  hasOrganizationUser(): boolean;
  clearOrganizationUser(): void;
  getOrganizationUser(): OrganizationUser | undefined;
  setOrganizationUser(value?: OrganizationUser): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddOrganizationUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddOrganizationUserRequest): AddOrganizationUserRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddOrganizationUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddOrganizationUserRequest;
  static deserializeBinaryFromReader(message: AddOrganizationUserRequest, reader: jspb.BinaryReader): AddOrganizationUserRequest;
}

export namespace AddOrganizationUserRequest {
  export type AsObject = {
    organizationUser?: OrganizationUser.AsObject,
  }
}

export class UpdateOrganizationUserRequest extends jspb.Message {
  hasOrganizationUser(): boolean;
  clearOrganizationUser(): void;
  getOrganizationUser(): OrganizationUser | undefined;
  setOrganizationUser(value?: OrganizationUser): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateOrganizationUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateOrganizationUserRequest): UpdateOrganizationUserRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateOrganizationUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateOrganizationUserRequest;
  static deserializeBinaryFromReader(message: UpdateOrganizationUserRequest, reader: jspb.BinaryReader): UpdateOrganizationUserRequest;
}

export namespace UpdateOrganizationUserRequest {
  export type AsObject = {
    organizationUser?: OrganizationUser.AsObject,
  }
}

export class DeleteOrganizationUserRequest extends jspb.Message {
  getOrganizationId(): number;
  setOrganizationId(value: number): void;

  getUserId(): number;
  setUserId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteOrganizationUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteOrganizationUserRequest): DeleteOrganizationUserRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteOrganizationUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteOrganizationUserRequest;
  static deserializeBinaryFromReader(message: DeleteOrganizationUserRequest, reader: jspb.BinaryReader): DeleteOrganizationUserRequest;
}

export namespace DeleteOrganizationUserRequest {
  export type AsObject = {
    organizationId: number,
    userId: number,
  }
}

export class ListOrganizationUsersRequest extends jspb.Message {
  getOrganizationId(): number;
  setOrganizationId(value: number): void;

  getLimit(): number;
  setLimit(value: number): void;

  getOffset(): number;
  setOffset(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListOrganizationUsersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListOrganizationUsersRequest): ListOrganizationUsersRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListOrganizationUsersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListOrganizationUsersRequest;
  static deserializeBinaryFromReader(message: ListOrganizationUsersRequest, reader: jspb.BinaryReader): ListOrganizationUsersRequest;
}

export namespace ListOrganizationUsersRequest {
  export type AsObject = {
    organizationId: number,
    limit: number,
    offset: number,
  }
}

export class ListOrganizationUsersResponse extends jspb.Message {
  getTotalCount(): number;
  setTotalCount(value: number): void;

  clearResultList(): void;
  getResultList(): Array<OrganizationUserListItem>;
  setResultList(value: Array<OrganizationUserListItem>): void;
  addResult(value?: OrganizationUserListItem, index?: number): OrganizationUserListItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListOrganizationUsersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListOrganizationUsersResponse): ListOrganizationUsersResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListOrganizationUsersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListOrganizationUsersResponse;
  static deserializeBinaryFromReader(message: ListOrganizationUsersResponse, reader: jspb.BinaryReader): ListOrganizationUsersResponse;
}

export namespace ListOrganizationUsersResponse {
  export type AsObject = {
    totalCount: number,
    resultList: Array<OrganizationUserListItem.AsObject>,
  }
}

export class GetOrganizationUserRequest extends jspb.Message {
  getOrganizationId(): number;
  setOrganizationId(value: number): void;

  getUserId(): number;
  setUserId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetOrganizationUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetOrganizationUserRequest): GetOrganizationUserRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetOrganizationUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetOrganizationUserRequest;
  static deserializeBinaryFromReader(message: GetOrganizationUserRequest, reader: jspb.BinaryReader): GetOrganizationUserRequest;
}

export namespace GetOrganizationUserRequest {
  export type AsObject = {
    organizationId: number,
    userId: number,
  }
}

export class GetOrganizationUserResponse extends jspb.Message {
  hasOrganizationUser(): boolean;
  clearOrganizationUser(): void;
  getOrganizationUser(): OrganizationUser | undefined;
  setOrganizationUser(value?: OrganizationUser): void;

  hasCreatedAt(): boolean;
  clearCreatedAt(): void;
  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasUpdatedAt(): boolean;
  clearUpdatedAt(): void;
  getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetOrganizationUserResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetOrganizationUserResponse): GetOrganizationUserResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetOrganizationUserResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetOrganizationUserResponse;
  static deserializeBinaryFromReader(message: GetOrganizationUserResponse, reader: jspb.BinaryReader): GetOrganizationUserResponse;
}

export namespace GetOrganizationUserResponse {
  export type AsObject = {
    organizationUser?: OrganizationUser.AsObject,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

