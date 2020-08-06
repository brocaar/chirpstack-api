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
  getEmail(): string;
  setEmail(value: string): void;

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
    email: string,
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

export class SettingsResponse extends jspb.Message {
  hasBranding(): boolean;
  clearBranding(): void;
  getBranding(): Branding | undefined;
  setBranding(value?: Branding): void;

  hasOpenidConnect(): boolean;
  clearOpenidConnect(): void;
  getOpenidConnect(): OpenIDConnect | undefined;
  setOpenidConnect(value?: OpenIDConnect): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SettingsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SettingsResponse): SettingsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SettingsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SettingsResponse;
  static deserializeBinaryFromReader(message: SettingsResponse, reader: jspb.BinaryReader): SettingsResponse;
}

export namespace SettingsResponse {
  export type AsObject = {
    branding?: Branding.AsObject,
    openidConnect?: OpenIDConnect.AsObject,
  }
}

export class Branding extends jspb.Message {
  getRegistration(): string;
  setRegistration(value: string): void;

  getFooter(): string;
  setFooter(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Branding.AsObject;
  static toObject(includeInstance: boolean, msg: Branding): Branding.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Branding, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Branding;
  static deserializeBinaryFromReader(message: Branding, reader: jspb.BinaryReader): Branding;
}

export namespace Branding {
  export type AsObject = {
    registration: string,
    footer: string,
  }
}

export class OpenIDConnect extends jspb.Message {
  getEnabled(): boolean;
  setEnabled(value: boolean): void;

  getLoginUrl(): string;
  setLoginUrl(value: string): void;

  getLoginLabel(): string;
  setLoginLabel(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OpenIDConnect.AsObject;
  static toObject(includeInstance: boolean, msg: OpenIDConnect): OpenIDConnect.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OpenIDConnect, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OpenIDConnect;
  static deserializeBinaryFromReader(message: OpenIDConnect, reader: jspb.BinaryReader): OpenIDConnect;
}

export namespace OpenIDConnect {
  export type AsObject = {
    enabled: boolean,
    loginUrl: string,
    loginLabel: string,
  }
}

export class OpenIDConnectLoginRequest extends jspb.Message {
  getCode(): string;
  setCode(value: string): void;

  getState(): string;
  setState(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OpenIDConnectLoginRequest.AsObject;
  static toObject(includeInstance: boolean, msg: OpenIDConnectLoginRequest): OpenIDConnectLoginRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OpenIDConnectLoginRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OpenIDConnectLoginRequest;
  static deserializeBinaryFromReader(message: OpenIDConnectLoginRequest, reader: jspb.BinaryReader): OpenIDConnectLoginRequest;
}

export namespace OpenIDConnectLoginRequest {
  export type AsObject = {
    code: string,
    state: string,
  }
}

export class OpenIDConnectLoginResponse extends jspb.Message {
  getJwtToken(): string;
  setJwtToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OpenIDConnectLoginResponse.AsObject;
  static toObject(includeInstance: boolean, msg: OpenIDConnectLoginResponse): OpenIDConnectLoginResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OpenIDConnectLoginResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OpenIDConnectLoginResponse;
  static deserializeBinaryFromReader(message: OpenIDConnectLoginResponse, reader: jspb.BinaryReader): OpenIDConnectLoginResponse;
}

export namespace OpenIDConnectLoginResponse {
  export type AsObject = {
    jwtToken: string,
  }
}

export class GetDevicesSummaryRequest extends jspb.Message {
  getOrganizationId(): number;
  setOrganizationId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDevicesSummaryRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetDevicesSummaryRequest): GetDevicesSummaryRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetDevicesSummaryRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDevicesSummaryRequest;
  static deserializeBinaryFromReader(message: GetDevicesSummaryRequest, reader: jspb.BinaryReader): GetDevicesSummaryRequest;
}

export namespace GetDevicesSummaryRequest {
  export type AsObject = {
    organizationId: number,
  }
}

export class GetDevicesSummaryResponse extends jspb.Message {
  getActiveCount(): number;
  setActiveCount(value: number): void;

  getInactiveCount(): number;
  setInactiveCount(value: number): void;

  getDrCountMap(): jspb.Map<number, number>;
  clearDrCountMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDevicesSummaryResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetDevicesSummaryResponse): GetDevicesSummaryResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetDevicesSummaryResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDevicesSummaryResponse;
  static deserializeBinaryFromReader(message: GetDevicesSummaryResponse, reader: jspb.BinaryReader): GetDevicesSummaryResponse;
}

export namespace GetDevicesSummaryResponse {
  export type AsObject = {
    activeCount: number,
    inactiveCount: number,
    drCountMap: Array<[number, number]>,
  }
}

export class GetGatewaysSummaryRequest extends jspb.Message {
  getOrganizationId(): number;
  setOrganizationId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetGatewaysSummaryRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetGatewaysSummaryRequest): GetGatewaysSummaryRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetGatewaysSummaryRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetGatewaysSummaryRequest;
  static deserializeBinaryFromReader(message: GetGatewaysSummaryRequest, reader: jspb.BinaryReader): GetGatewaysSummaryRequest;
}

export namespace GetGatewaysSummaryRequest {
  export type AsObject = {
    organizationId: number,
  }
}

export class GetGatewaysSummaryResponse extends jspb.Message {
  getActiveCount(): number;
  setActiveCount(value: number): void;

  getInactiveCount(): number;
  setInactiveCount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetGatewaysSummaryResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetGatewaysSummaryResponse): GetGatewaysSummaryResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetGatewaysSummaryResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetGatewaysSummaryResponse;
  static deserializeBinaryFromReader(message: GetGatewaysSummaryResponse, reader: jspb.BinaryReader): GetGatewaysSummaryResponse;
}

export namespace GetGatewaysSummaryResponse {
  export type AsObject = {
    activeCount: number,
    inactiveCount: number,
  }
}

