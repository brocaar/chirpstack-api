// package: api
// file: as/external/api/internal.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../google/api/annotations_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as as_external_api_user_pb from "../../../as/external/api/user_pb";

export class APIKey extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getIsAdmin(): boolean;
  setIsAdmin(value: boolean): void;

  getOrganizationId(): number;
  setOrganizationId(value: number): void;

  getApplicationId(): number;
  setApplicationId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): APIKey.AsObject;
  static toObject(includeInstance: boolean, msg: APIKey): APIKey.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: APIKey, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): APIKey;
  static deserializeBinaryFromReader(message: APIKey, reader: jspb.BinaryReader): APIKey;
}

export namespace APIKey {
  export type AsObject = {
    id: string,
    name: string,
    isAdmin: boolean,
    organizationId: number,
    applicationId: number,
  }
}

export class CreateAPIKeyRequest extends jspb.Message {
  hasApiKey(): boolean;
  clearApiKey(): void;
  getApiKey(): APIKey | undefined;
  setApiKey(value?: APIKey): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateAPIKeyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateAPIKeyRequest): CreateAPIKeyRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateAPIKeyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateAPIKeyRequest;
  static deserializeBinaryFromReader(message: CreateAPIKeyRequest, reader: jspb.BinaryReader): CreateAPIKeyRequest;
}

export namespace CreateAPIKeyRequest {
  export type AsObject = {
    apiKey?: APIKey.AsObject,
  }
}

export class CreateAPIKeyResponse extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getJwtToken(): string;
  setJwtToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateAPIKeyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateAPIKeyResponse): CreateAPIKeyResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateAPIKeyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateAPIKeyResponse;
  static deserializeBinaryFromReader(message: CreateAPIKeyResponse, reader: jspb.BinaryReader): CreateAPIKeyResponse;
}

export namespace CreateAPIKeyResponse {
  export type AsObject = {
    id: string,
    jwtToken: string,
  }
}

export class DeleteAPIKeyRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteAPIKeyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteAPIKeyRequest): DeleteAPIKeyRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteAPIKeyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteAPIKeyRequest;
  static deserializeBinaryFromReader(message: DeleteAPIKeyRequest, reader: jspb.BinaryReader): DeleteAPIKeyRequest;
}

export namespace DeleteAPIKeyRequest {
  export type AsObject = {
    id: string,
  }
}

export class ListAPIKeysRequest extends jspb.Message {
  getLimit(): number;
  setLimit(value: number): void;

  getOffset(): number;
  setOffset(value: number): void;

  getIsAdmin(): boolean;
  setIsAdmin(value: boolean): void;

  getOrganizationId(): number;
  setOrganizationId(value: number): void;

  getApplicationId(): number;
  setApplicationId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAPIKeysRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListAPIKeysRequest): ListAPIKeysRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListAPIKeysRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAPIKeysRequest;
  static deserializeBinaryFromReader(message: ListAPIKeysRequest, reader: jspb.BinaryReader): ListAPIKeysRequest;
}

export namespace ListAPIKeysRequest {
  export type AsObject = {
    limit: number,
    offset: number,
    isAdmin: boolean,
    organizationId: number,
    applicationId: number,
  }
}

export class ListAPIKeysResponse extends jspb.Message {
  getTotalCount(): number;
  setTotalCount(value: number): void;

  clearResultList(): void;
  getResultList(): Array<APIKey>;
  setResultList(value: Array<APIKey>): void;
  addResult(value?: APIKey, index?: number): APIKey;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAPIKeysResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListAPIKeysResponse): ListAPIKeysResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListAPIKeysResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAPIKeysResponse;
  static deserializeBinaryFromReader(message: ListAPIKeysResponse, reader: jspb.BinaryReader): ListAPIKeysResponse;
}

export namespace ListAPIKeysResponse {
  export type AsObject = {
    totalCount: number,
    resultList: Array<APIKey.AsObject>,
  }
}

export class ProfileSettings extends jspb.Message {
  getDisableAssignExistingUsers(): boolean;
  setDisableAssignExistingUsers(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProfileSettings.AsObject;
  static toObject(includeInstance: boolean, msg: ProfileSettings): ProfileSettings.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProfileSettings, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProfileSettings;
  static deserializeBinaryFromReader(message: ProfileSettings, reader: jspb.BinaryReader): ProfileSettings;
}

export namespace ProfileSettings {
  export type AsObject = {
    disableAssignExistingUsers: boolean,
  }
}

export class OrganizationLink extends jspb.Message {
  getOrganizationId(): number;
  setOrganizationId(value: number): void;

  getOrganizationName(): string;
  setOrganizationName(value: string): void;

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
  toObject(includeInstance?: boolean): OrganizationLink.AsObject;
  static toObject(includeInstance: boolean, msg: OrganizationLink): OrganizationLink.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OrganizationLink, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OrganizationLink;
  static deserializeBinaryFromReader(message: OrganizationLink, reader: jspb.BinaryReader): OrganizationLink;
}

export namespace OrganizationLink {
  export type AsObject = {
    organizationId: number,
    organizationName: string,
    isAdmin: boolean,
    isDeviceAdmin: boolean,
    isGatewayAdmin: boolean,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class LoginRequest extends jspb.Message {
  getUsername(): string;
  setUsername(value: string): void;

  getPassword(): string;
  setPassword(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoginRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LoginRequest): LoginRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LoginRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoginRequest;
  static deserializeBinaryFromReader(message: LoginRequest, reader: jspb.BinaryReader): LoginRequest;
}

export namespace LoginRequest {
  export type AsObject = {
    username: string,
    password: string,
  }
}

export class LoginResponse extends jspb.Message {
  getJwt(): string;
  setJwt(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoginResponse.AsObject;
  static toObject(includeInstance: boolean, msg: LoginResponse): LoginResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LoginResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoginResponse;
  static deserializeBinaryFromReader(message: LoginResponse, reader: jspb.BinaryReader): LoginResponse;
}

export namespace LoginResponse {
  export type AsObject = {
    jwt: string,
  }
}

export class ProfileResponse extends jspb.Message {
  hasUser(): boolean;
  clearUser(): void;
  getUser(): as_external_api_user_pb.User | undefined;
  setUser(value?: as_external_api_user_pb.User): void;

  clearOrganizationsList(): void;
  getOrganizationsList(): Array<OrganizationLink>;
  setOrganizationsList(value: Array<OrganizationLink>): void;
  addOrganizations(value?: OrganizationLink, index?: number): OrganizationLink;

  hasSettings(): boolean;
  clearSettings(): void;
  getSettings(): ProfileSettings | undefined;
  setSettings(value?: ProfileSettings): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProfileResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ProfileResponse): ProfileResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ProfileResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProfileResponse;
  static deserializeBinaryFromReader(message: ProfileResponse, reader: jspb.BinaryReader): ProfileResponse;
}

export namespace ProfileResponse {
  export type AsObject = {
    user?: as_external_api_user_pb.User.AsObject,
    organizationsList: Array<OrganizationLink.AsObject>,
    settings?: ProfileSettings.AsObject,
  }
}

export class GlobalSearchRequest extends jspb.Message {
  getSearch(): string;
  setSearch(value: string): void;

  getLimit(): number;
  setLimit(value: number): void;

  getOffset(): number;
  setOffset(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GlobalSearchRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GlobalSearchRequest): GlobalSearchRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GlobalSearchRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GlobalSearchRequest;
  static deserializeBinaryFromReader(message: GlobalSearchRequest, reader: jspb.BinaryReader): GlobalSearchRequest;
}

export namespace GlobalSearchRequest {
  export type AsObject = {
    search: string,
    limit: number,
    offset: number,
  }
}

export class GlobalSearchResponse extends jspb.Message {
  clearResultList(): void;
  getResultList(): Array<GlobalSearchResult>;
  setResultList(value: Array<GlobalSearchResult>): void;
  addResult(value?: GlobalSearchResult, index?: number): GlobalSearchResult;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GlobalSearchResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GlobalSearchResponse): GlobalSearchResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GlobalSearchResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GlobalSearchResponse;
  static deserializeBinaryFromReader(message: GlobalSearchResponse, reader: jspb.BinaryReader): GlobalSearchResponse;
}

export namespace GlobalSearchResponse {
  export type AsObject = {
    resultList: Array<GlobalSearchResult.AsObject>,
  }
}

export class GlobalSearchResult extends jspb.Message {
  getKind(): string;
  setKind(value: string): void;

  getScore(): number;
  setScore(value: number): void;

  getOrganizationId(): number;
  setOrganizationId(value: number): void;

  getOrganizationName(): string;
  setOrganizationName(value: string): void;

  getApplicationId(): number;
  setApplicationId(value: number): void;

  getApplicationName(): string;
  setApplicationName(value: string): void;

  getDeviceDevEui(): string;
  setDeviceDevEui(value: string): void;

  getDeviceName(): string;
  setDeviceName(value: string): void;

  getGatewayMac(): string;
  setGatewayMac(value: string): void;

  getGatewayName(): string;
  setGatewayName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GlobalSearchResult.AsObject;
  static toObject(includeInstance: boolean, msg: GlobalSearchResult): GlobalSearchResult.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GlobalSearchResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GlobalSearchResult;
  static deserializeBinaryFromReader(message: GlobalSearchResult, reader: jspb.BinaryReader): GlobalSearchResult;
}

export namespace GlobalSearchResult {
  export type AsObject = {
    kind: string,
    score: number,
    organizationId: number,
    organizationName: string,
    applicationId: number,
    applicationName: string,
    deviceDevEui: string,
    deviceName: string,
    gatewayMac: string,
    gatewayName: string,
  }
}

export class BrandingResponse extends jspb.Message {
  getLogo(): string;
  setLogo(value: string): void;

  getRegistration(): string;
  setRegistration(value: string): void;

  getFooter(): string;
  setFooter(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BrandingResponse.AsObject;
  static toObject(includeInstance: boolean, msg: BrandingResponse): BrandingResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BrandingResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BrandingResponse;
  static deserializeBinaryFromReader(message: BrandingResponse, reader: jspb.BinaryReader): BrandingResponse;
}

export namespace BrandingResponse {
  export type AsObject = {
    logo: string,
    registration: string,
    footer: string,
  }
}

