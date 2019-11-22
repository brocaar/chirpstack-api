// package: api
// file: as/external/api/internal.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../google/api/annotations_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as as_external_api_user_pb from "../../../as/external/api/user_pb";

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

