// package: api
// file: as/external/api/application.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../google/api/annotations_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

export class Application extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getOrganizationId(): number;
  setOrganizationId(value: number): void;

  getServiceProfileId(): string;
  setServiceProfileId(value: string): void;

  getPayloadCodec(): string;
  setPayloadCodec(value: string): void;

  getPayloadEncoderScript(): string;
  setPayloadEncoderScript(value: string): void;

  getPayloadDecoderScript(): string;
  setPayloadDecoderScript(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Application.AsObject;
  static toObject(includeInstance: boolean, msg: Application): Application.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Application, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Application;
  static deserializeBinaryFromReader(message: Application, reader: jspb.BinaryReader): Application;
}

export namespace Application {
  export type AsObject = {
    id: number,
    name: string,
    description: string,
    organizationId: number,
    serviceProfileId: string,
    payloadCodec: string,
    payloadEncoderScript: string,
    payloadDecoderScript: string,
  }
}

export class ApplicationListItem extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getOrganizationId(): number;
  setOrganizationId(value: number): void;

  getServiceProfileId(): string;
  setServiceProfileId(value: string): void;

  getServiceProfileName(): string;
  setServiceProfileName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ApplicationListItem.AsObject;
  static toObject(includeInstance: boolean, msg: ApplicationListItem): ApplicationListItem.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ApplicationListItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ApplicationListItem;
  static deserializeBinaryFromReader(message: ApplicationListItem, reader: jspb.BinaryReader): ApplicationListItem;
}

export namespace ApplicationListItem {
  export type AsObject = {
    id: number,
    name: string,
    description: string,
    organizationId: number,
    serviceProfileId: string,
    serviceProfileName: string,
  }
}

export class CreateApplicationRequest extends jspb.Message {
  hasApplication(): boolean;
  clearApplication(): void;
  getApplication(): Application | undefined;
  setApplication(value?: Application): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateApplicationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateApplicationRequest): CreateApplicationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateApplicationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateApplicationRequest;
  static deserializeBinaryFromReader(message: CreateApplicationRequest, reader: jspb.BinaryReader): CreateApplicationRequest;
}

export namespace CreateApplicationRequest {
  export type AsObject = {
    application?: Application.AsObject,
  }
}

export class CreateApplicationResponse extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateApplicationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateApplicationResponse): CreateApplicationResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateApplicationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateApplicationResponse;
  static deserializeBinaryFromReader(message: CreateApplicationResponse, reader: jspb.BinaryReader): CreateApplicationResponse;
}

export namespace CreateApplicationResponse {
  export type AsObject = {
    id: number,
  }
}

export class GetApplicationRequest extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetApplicationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetApplicationRequest): GetApplicationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetApplicationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetApplicationRequest;
  static deserializeBinaryFromReader(message: GetApplicationRequest, reader: jspb.BinaryReader): GetApplicationRequest;
}

export namespace GetApplicationRequest {
  export type AsObject = {
    id: number,
  }
}

export class GetApplicationResponse extends jspb.Message {
  hasApplication(): boolean;
  clearApplication(): void;
  getApplication(): Application | undefined;
  setApplication(value?: Application): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetApplicationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetApplicationResponse): GetApplicationResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetApplicationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetApplicationResponse;
  static deserializeBinaryFromReader(message: GetApplicationResponse, reader: jspb.BinaryReader): GetApplicationResponse;
}

export namespace GetApplicationResponse {
  export type AsObject = {
    application?: Application.AsObject,
  }
}

export class UpdateApplicationRequest extends jspb.Message {
  hasApplication(): boolean;
  clearApplication(): void;
  getApplication(): Application | undefined;
  setApplication(value?: Application): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateApplicationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateApplicationRequest): UpdateApplicationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateApplicationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateApplicationRequest;
  static deserializeBinaryFromReader(message: UpdateApplicationRequest, reader: jspb.BinaryReader): UpdateApplicationRequest;
}

export namespace UpdateApplicationRequest {
  export type AsObject = {
    application?: Application.AsObject,
  }
}

export class DeleteApplicationRequest extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteApplicationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteApplicationRequest): DeleteApplicationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteApplicationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteApplicationRequest;
  static deserializeBinaryFromReader(message: DeleteApplicationRequest, reader: jspb.BinaryReader): DeleteApplicationRequest;
}

export namespace DeleteApplicationRequest {
  export type AsObject = {
    id: number,
  }
}

export class ListApplicationRequest extends jspb.Message {
  getLimit(): number;
  setLimit(value: number): void;

  getOffset(): number;
  setOffset(value: number): void;

  getOrganizationId(): number;
  setOrganizationId(value: number): void;

  getSearch(): string;
  setSearch(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListApplicationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListApplicationRequest): ListApplicationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListApplicationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListApplicationRequest;
  static deserializeBinaryFromReader(message: ListApplicationRequest, reader: jspb.BinaryReader): ListApplicationRequest;
}

export namespace ListApplicationRequest {
  export type AsObject = {
    limit: number,
    offset: number,
    organizationId: number,
    search: string,
  }
}

export class ListApplicationResponse extends jspb.Message {
  getTotalCount(): number;
  setTotalCount(value: number): void;

  clearResultList(): void;
  getResultList(): Array<ApplicationListItem>;
  setResultList(value: Array<ApplicationListItem>): void;
  addResult(value?: ApplicationListItem, index?: number): ApplicationListItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListApplicationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListApplicationResponse): ListApplicationResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListApplicationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListApplicationResponse;
  static deserializeBinaryFromReader(message: ListApplicationResponse, reader: jspb.BinaryReader): ListApplicationResponse;
}

export namespace ListApplicationResponse {
  export type AsObject = {
    totalCount: number,
    resultList: Array<ApplicationListItem.AsObject>,
  }
}

export class HTTPIntegrationHeader extends jspb.Message {
  getKey(): string;
  setKey(value: string): void;

  getValue(): string;
  setValue(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HTTPIntegrationHeader.AsObject;
  static toObject(includeInstance: boolean, msg: HTTPIntegrationHeader): HTTPIntegrationHeader.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HTTPIntegrationHeader, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HTTPIntegrationHeader;
  static deserializeBinaryFromReader(message: HTTPIntegrationHeader, reader: jspb.BinaryReader): HTTPIntegrationHeader;
}

export namespace HTTPIntegrationHeader {
  export type AsObject = {
    key: string,
    value: string,
  }
}

export class HTTPIntegration extends jspb.Message {
  getApplicationId(): number;
  setApplicationId(value: number): void;

  clearHeadersList(): void;
  getHeadersList(): Array<HTTPIntegrationHeader>;
  setHeadersList(value: Array<HTTPIntegrationHeader>): void;
  addHeaders(value?: HTTPIntegrationHeader, index?: number): HTTPIntegrationHeader;

  getUplinkDataUrl(): string;
  setUplinkDataUrl(value: string): void;

  getJoinNotificationUrl(): string;
  setJoinNotificationUrl(value: string): void;

  getAckNotificationUrl(): string;
  setAckNotificationUrl(value: string): void;

  getErrorNotificationUrl(): string;
  setErrorNotificationUrl(value: string): void;

  getStatusNotificationUrl(): string;
  setStatusNotificationUrl(value: string): void;

  getLocationNotificationUrl(): string;
  setLocationNotificationUrl(value: string): void;

  getTxAckNotificationUrl(): string;
  setTxAckNotificationUrl(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HTTPIntegration.AsObject;
  static toObject(includeInstance: boolean, msg: HTTPIntegration): HTTPIntegration.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: HTTPIntegration, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HTTPIntegration;
  static deserializeBinaryFromReader(message: HTTPIntegration, reader: jspb.BinaryReader): HTTPIntegration;
}

export namespace HTTPIntegration {
  export type AsObject = {
    applicationId: number,
    headersList: Array<HTTPIntegrationHeader.AsObject>,
    uplinkDataUrl: string,
    joinNotificationUrl: string,
    ackNotificationUrl: string,
    errorNotificationUrl: string,
    statusNotificationUrl: string,
    locationNotificationUrl: string,
    txAckNotificationUrl: string,
  }
}

export class CreateHTTPIntegrationRequest extends jspb.Message {
  hasIntegration(): boolean;
  clearIntegration(): void;
  getIntegration(): HTTPIntegration | undefined;
  setIntegration(value?: HTTPIntegration): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateHTTPIntegrationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateHTTPIntegrationRequest): CreateHTTPIntegrationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateHTTPIntegrationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateHTTPIntegrationRequest;
  static deserializeBinaryFromReader(message: CreateHTTPIntegrationRequest, reader: jspb.BinaryReader): CreateHTTPIntegrationRequest;
}

export namespace CreateHTTPIntegrationRequest {
  export type AsObject = {
    integration?: HTTPIntegration.AsObject,
  }
}

export class GetHTTPIntegrationRequest extends jspb.Message {
  getApplicationId(): number;
  setApplicationId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetHTTPIntegrationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetHTTPIntegrationRequest): GetHTTPIntegrationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetHTTPIntegrationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetHTTPIntegrationRequest;
  static deserializeBinaryFromReader(message: GetHTTPIntegrationRequest, reader: jspb.BinaryReader): GetHTTPIntegrationRequest;
}

export namespace GetHTTPIntegrationRequest {
  export type AsObject = {
    applicationId: number,
  }
}

export class GetHTTPIntegrationResponse extends jspb.Message {
  hasIntegration(): boolean;
  clearIntegration(): void;
  getIntegration(): HTTPIntegration | undefined;
  setIntegration(value?: HTTPIntegration): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetHTTPIntegrationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetHTTPIntegrationResponse): GetHTTPIntegrationResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetHTTPIntegrationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetHTTPIntegrationResponse;
  static deserializeBinaryFromReader(message: GetHTTPIntegrationResponse, reader: jspb.BinaryReader): GetHTTPIntegrationResponse;
}

export namespace GetHTTPIntegrationResponse {
  export type AsObject = {
    integration?: HTTPIntegration.AsObject,
  }
}

export class UpdateHTTPIntegrationRequest extends jspb.Message {
  hasIntegration(): boolean;
  clearIntegration(): void;
  getIntegration(): HTTPIntegration | undefined;
  setIntegration(value?: HTTPIntegration): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateHTTPIntegrationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateHTTPIntegrationRequest): UpdateHTTPIntegrationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateHTTPIntegrationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateHTTPIntegrationRequest;
  static deserializeBinaryFromReader(message: UpdateHTTPIntegrationRequest, reader: jspb.BinaryReader): UpdateHTTPIntegrationRequest;
}

export namespace UpdateHTTPIntegrationRequest {
  export type AsObject = {
    integration?: HTTPIntegration.AsObject,
  }
}

export class DeleteHTTPIntegrationRequest extends jspb.Message {
  getApplicationId(): number;
  setApplicationId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteHTTPIntegrationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteHTTPIntegrationRequest): DeleteHTTPIntegrationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteHTTPIntegrationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteHTTPIntegrationRequest;
  static deserializeBinaryFromReader(message: DeleteHTTPIntegrationRequest, reader: jspb.BinaryReader): DeleteHTTPIntegrationRequest;
}

export namespace DeleteHTTPIntegrationRequest {
  export type AsObject = {
    applicationId: number,
  }
}

export class ListIntegrationRequest extends jspb.Message {
  getApplicationId(): number;
  setApplicationId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListIntegrationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListIntegrationRequest): ListIntegrationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListIntegrationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListIntegrationRequest;
  static deserializeBinaryFromReader(message: ListIntegrationRequest, reader: jspb.BinaryReader): ListIntegrationRequest;
}

export namespace ListIntegrationRequest {
  export type AsObject = {
    applicationId: number,
  }
}

export class IntegrationListItem extends jspb.Message {
  getKind(): IntegrationKindMap[keyof IntegrationKindMap];
  setKind(value: IntegrationKindMap[keyof IntegrationKindMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IntegrationListItem.AsObject;
  static toObject(includeInstance: boolean, msg: IntegrationListItem): IntegrationListItem.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IntegrationListItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IntegrationListItem;
  static deserializeBinaryFromReader(message: IntegrationListItem, reader: jspb.BinaryReader): IntegrationListItem;
}

export namespace IntegrationListItem {
  export type AsObject = {
    kind: IntegrationKindMap[keyof IntegrationKindMap],
  }
}

export class ListIntegrationResponse extends jspb.Message {
  getTotalCount(): number;
  setTotalCount(value: number): void;

  clearResultList(): void;
  getResultList(): Array<IntegrationListItem>;
  setResultList(value: Array<IntegrationListItem>): void;
  addResult(value?: IntegrationListItem, index?: number): IntegrationListItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListIntegrationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListIntegrationResponse): ListIntegrationResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListIntegrationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListIntegrationResponse;
  static deserializeBinaryFromReader(message: ListIntegrationResponse, reader: jspb.BinaryReader): ListIntegrationResponse;
}

export namespace ListIntegrationResponse {
  export type AsObject = {
    totalCount: number,
    resultList: Array<IntegrationListItem.AsObject>,
  }
}

export class InfluxDBIntegration extends jspb.Message {
  getApplicationId(): number;
  setApplicationId(value: number): void;

  getEndpoint(): string;
  setEndpoint(value: string): void;

  getDb(): string;
  setDb(value: string): void;

  getUsername(): string;
  setUsername(value: string): void;

  getPassword(): string;
  setPassword(value: string): void;

  getRetentionPolicyName(): string;
  setRetentionPolicyName(value: string): void;

  getPrecision(): InfluxDBPrecisionMap[keyof InfluxDBPrecisionMap];
  setPrecision(value: InfluxDBPrecisionMap[keyof InfluxDBPrecisionMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InfluxDBIntegration.AsObject;
  static toObject(includeInstance: boolean, msg: InfluxDBIntegration): InfluxDBIntegration.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InfluxDBIntegration, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InfluxDBIntegration;
  static deserializeBinaryFromReader(message: InfluxDBIntegration, reader: jspb.BinaryReader): InfluxDBIntegration;
}

export namespace InfluxDBIntegration {
  export type AsObject = {
    applicationId: number,
    endpoint: string,
    db: string,
    username: string,
    password: string,
    retentionPolicyName: string,
    precision: InfluxDBPrecisionMap[keyof InfluxDBPrecisionMap],
  }
}

export class CreateInfluxDBIntegrationRequest extends jspb.Message {
  hasIntegration(): boolean;
  clearIntegration(): void;
  getIntegration(): InfluxDBIntegration | undefined;
  setIntegration(value?: InfluxDBIntegration): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateInfluxDBIntegrationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateInfluxDBIntegrationRequest): CreateInfluxDBIntegrationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateInfluxDBIntegrationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateInfluxDBIntegrationRequest;
  static deserializeBinaryFromReader(message: CreateInfluxDBIntegrationRequest, reader: jspb.BinaryReader): CreateInfluxDBIntegrationRequest;
}

export namespace CreateInfluxDBIntegrationRequest {
  export type AsObject = {
    integration?: InfluxDBIntegration.AsObject,
  }
}

export class GetInfluxDBIntegrationRequest extends jspb.Message {
  getApplicationId(): number;
  setApplicationId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetInfluxDBIntegrationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetInfluxDBIntegrationRequest): GetInfluxDBIntegrationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetInfluxDBIntegrationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetInfluxDBIntegrationRequest;
  static deserializeBinaryFromReader(message: GetInfluxDBIntegrationRequest, reader: jspb.BinaryReader): GetInfluxDBIntegrationRequest;
}

export namespace GetInfluxDBIntegrationRequest {
  export type AsObject = {
    applicationId: number,
  }
}

export class GetInfluxDBIntegrationResponse extends jspb.Message {
  hasIntegration(): boolean;
  clearIntegration(): void;
  getIntegration(): InfluxDBIntegration | undefined;
  setIntegration(value?: InfluxDBIntegration): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetInfluxDBIntegrationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetInfluxDBIntegrationResponse): GetInfluxDBIntegrationResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetInfluxDBIntegrationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetInfluxDBIntegrationResponse;
  static deserializeBinaryFromReader(message: GetInfluxDBIntegrationResponse, reader: jspb.BinaryReader): GetInfluxDBIntegrationResponse;
}

export namespace GetInfluxDBIntegrationResponse {
  export type AsObject = {
    integration?: InfluxDBIntegration.AsObject,
  }
}

export class UpdateInfluxDBIntegrationRequest extends jspb.Message {
  hasIntegration(): boolean;
  clearIntegration(): void;
  getIntegration(): InfluxDBIntegration | undefined;
  setIntegration(value?: InfluxDBIntegration): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateInfluxDBIntegrationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateInfluxDBIntegrationRequest): UpdateInfluxDBIntegrationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateInfluxDBIntegrationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateInfluxDBIntegrationRequest;
  static deserializeBinaryFromReader(message: UpdateInfluxDBIntegrationRequest, reader: jspb.BinaryReader): UpdateInfluxDBIntegrationRequest;
}

export namespace UpdateInfluxDBIntegrationRequest {
  export type AsObject = {
    integration?: InfluxDBIntegration.AsObject,
  }
}

export class DeleteInfluxDBIntegrationRequest extends jspb.Message {
  getApplicationId(): number;
  setApplicationId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteInfluxDBIntegrationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteInfluxDBIntegrationRequest): DeleteInfluxDBIntegrationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteInfluxDBIntegrationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteInfluxDBIntegrationRequest;
  static deserializeBinaryFromReader(message: DeleteInfluxDBIntegrationRequest, reader: jspb.BinaryReader): DeleteInfluxDBIntegrationRequest;
}

export namespace DeleteInfluxDBIntegrationRequest {
  export type AsObject = {
    applicationId: number,
  }
}

export class ThingsBoardIntegration extends jspb.Message {
  getApplicationId(): number;
  setApplicationId(value: number): void;

  getServer(): string;
  setServer(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ThingsBoardIntegration.AsObject;
  static toObject(includeInstance: boolean, msg: ThingsBoardIntegration): ThingsBoardIntegration.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ThingsBoardIntegration, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ThingsBoardIntegration;
  static deserializeBinaryFromReader(message: ThingsBoardIntegration, reader: jspb.BinaryReader): ThingsBoardIntegration;
}

export namespace ThingsBoardIntegration {
  export type AsObject = {
    applicationId: number,
    server: string,
  }
}

export class CreateThingsBoardIntegrationRequest extends jspb.Message {
  hasIntegration(): boolean;
  clearIntegration(): void;
  getIntegration(): ThingsBoardIntegration | undefined;
  setIntegration(value?: ThingsBoardIntegration): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateThingsBoardIntegrationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateThingsBoardIntegrationRequest): CreateThingsBoardIntegrationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateThingsBoardIntegrationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateThingsBoardIntegrationRequest;
  static deserializeBinaryFromReader(message: CreateThingsBoardIntegrationRequest, reader: jspb.BinaryReader): CreateThingsBoardIntegrationRequest;
}

export namespace CreateThingsBoardIntegrationRequest {
  export type AsObject = {
    integration?: ThingsBoardIntegration.AsObject,
  }
}

export class GetThingsBoardIntegrationRequest extends jspb.Message {
  getApplicationId(): number;
  setApplicationId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetThingsBoardIntegrationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetThingsBoardIntegrationRequest): GetThingsBoardIntegrationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetThingsBoardIntegrationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetThingsBoardIntegrationRequest;
  static deserializeBinaryFromReader(message: GetThingsBoardIntegrationRequest, reader: jspb.BinaryReader): GetThingsBoardIntegrationRequest;
}

export namespace GetThingsBoardIntegrationRequest {
  export type AsObject = {
    applicationId: number,
  }
}

export class GetThingsBoardIntegrationResponse extends jspb.Message {
  hasIntegration(): boolean;
  clearIntegration(): void;
  getIntegration(): ThingsBoardIntegration | undefined;
  setIntegration(value?: ThingsBoardIntegration): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetThingsBoardIntegrationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetThingsBoardIntegrationResponse): GetThingsBoardIntegrationResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetThingsBoardIntegrationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetThingsBoardIntegrationResponse;
  static deserializeBinaryFromReader(message: GetThingsBoardIntegrationResponse, reader: jspb.BinaryReader): GetThingsBoardIntegrationResponse;
}

export namespace GetThingsBoardIntegrationResponse {
  export type AsObject = {
    integration?: ThingsBoardIntegration.AsObject,
  }
}

export class UpdateThingsBoardIntegrationRequest extends jspb.Message {
  hasIntegration(): boolean;
  clearIntegration(): void;
  getIntegration(): ThingsBoardIntegration | undefined;
  setIntegration(value?: ThingsBoardIntegration): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateThingsBoardIntegrationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateThingsBoardIntegrationRequest): UpdateThingsBoardIntegrationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateThingsBoardIntegrationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateThingsBoardIntegrationRequest;
  static deserializeBinaryFromReader(message: UpdateThingsBoardIntegrationRequest, reader: jspb.BinaryReader): UpdateThingsBoardIntegrationRequest;
}

export namespace UpdateThingsBoardIntegrationRequest {
  export type AsObject = {
    integration?: ThingsBoardIntegration.AsObject,
  }
}

export class DeleteThingsBoardIntegrationRequest extends jspb.Message {
  getApplicationId(): number;
  setApplicationId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteThingsBoardIntegrationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteThingsBoardIntegrationRequest): DeleteThingsBoardIntegrationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteThingsBoardIntegrationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteThingsBoardIntegrationRequest;
  static deserializeBinaryFromReader(message: DeleteThingsBoardIntegrationRequest, reader: jspb.BinaryReader): DeleteThingsBoardIntegrationRequest;
}

export namespace DeleteThingsBoardIntegrationRequest {
  export type AsObject = {
    applicationId: number,
  }
}

export class MyDevicesIntegration extends jspb.Message {
  getApplicationId(): number;
  setApplicationId(value: number): void;

  getEndpoint(): string;
  setEndpoint(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MyDevicesIntegration.AsObject;
  static toObject(includeInstance: boolean, msg: MyDevicesIntegration): MyDevicesIntegration.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MyDevicesIntegration, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MyDevicesIntegration;
  static deserializeBinaryFromReader(message: MyDevicesIntegration, reader: jspb.BinaryReader): MyDevicesIntegration;
}

export namespace MyDevicesIntegration {
  export type AsObject = {
    applicationId: number,
    endpoint: string,
  }
}

export class CreateMyDevicesIntegrationRequest extends jspb.Message {
  hasIntegration(): boolean;
  clearIntegration(): void;
  getIntegration(): MyDevicesIntegration | undefined;
  setIntegration(value?: MyDevicesIntegration): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateMyDevicesIntegrationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateMyDevicesIntegrationRequest): CreateMyDevicesIntegrationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateMyDevicesIntegrationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateMyDevicesIntegrationRequest;
  static deserializeBinaryFromReader(message: CreateMyDevicesIntegrationRequest, reader: jspb.BinaryReader): CreateMyDevicesIntegrationRequest;
}

export namespace CreateMyDevicesIntegrationRequest {
  export type AsObject = {
    integration?: MyDevicesIntegration.AsObject,
  }
}

export class GetMyDevicesIntegrationRequest extends jspb.Message {
  getApplicationId(): number;
  setApplicationId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMyDevicesIntegrationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetMyDevicesIntegrationRequest): GetMyDevicesIntegrationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetMyDevicesIntegrationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMyDevicesIntegrationRequest;
  static deserializeBinaryFromReader(message: GetMyDevicesIntegrationRequest, reader: jspb.BinaryReader): GetMyDevicesIntegrationRequest;
}

export namespace GetMyDevicesIntegrationRequest {
  export type AsObject = {
    applicationId: number,
  }
}

export class GetMyDevicesIntegrationResponse extends jspb.Message {
  hasIntegration(): boolean;
  clearIntegration(): void;
  getIntegration(): MyDevicesIntegration | undefined;
  setIntegration(value?: MyDevicesIntegration): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMyDevicesIntegrationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetMyDevicesIntegrationResponse): GetMyDevicesIntegrationResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetMyDevicesIntegrationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMyDevicesIntegrationResponse;
  static deserializeBinaryFromReader(message: GetMyDevicesIntegrationResponse, reader: jspb.BinaryReader): GetMyDevicesIntegrationResponse;
}

export namespace GetMyDevicesIntegrationResponse {
  export type AsObject = {
    integration?: MyDevicesIntegration.AsObject,
  }
}

export class UpdateMyDevicesIntegrationRequest extends jspb.Message {
  hasIntegration(): boolean;
  clearIntegration(): void;
  getIntegration(): MyDevicesIntegration | undefined;
  setIntegration(value?: MyDevicesIntegration): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateMyDevicesIntegrationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateMyDevicesIntegrationRequest): UpdateMyDevicesIntegrationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateMyDevicesIntegrationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateMyDevicesIntegrationRequest;
  static deserializeBinaryFromReader(message: UpdateMyDevicesIntegrationRequest, reader: jspb.BinaryReader): UpdateMyDevicesIntegrationRequest;
}

export namespace UpdateMyDevicesIntegrationRequest {
  export type AsObject = {
    integration?: MyDevicesIntegration.AsObject,
  }
}

export class DeleteMyDevicesIntegrationRequest extends jspb.Message {
  getApplicationId(): number;
  setApplicationId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteMyDevicesIntegrationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteMyDevicesIntegrationRequest): DeleteMyDevicesIntegrationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteMyDevicesIntegrationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteMyDevicesIntegrationRequest;
  static deserializeBinaryFromReader(message: DeleteMyDevicesIntegrationRequest, reader: jspb.BinaryReader): DeleteMyDevicesIntegrationRequest;
}

export namespace DeleteMyDevicesIntegrationRequest {
  export type AsObject = {
    applicationId: number,
  }
}

export class LoRaCloudIntegration extends jspb.Message {
  getApplicationId(): number;
  setApplicationId(value: number): void;

  getGeolocation(): boolean;
  setGeolocation(value: boolean): void;

  getGeolocationToken(): string;
  setGeolocationToken(value: string): void;

  getGeolocationBufferTtl(): number;
  setGeolocationBufferTtl(value: number): void;

  getGeolocationMinBufferSize(): number;
  setGeolocationMinBufferSize(value: number): void;

  getGeolocationTdoa(): boolean;
  setGeolocationTdoa(value: boolean): void;

  getGeolocationRssi(): boolean;
  setGeolocationRssi(value: boolean): void;

  getGeolocationGnss(): boolean;
  setGeolocationGnss(value: boolean): void;

  getGeolocationGnssPayloadField(): string;
  setGeolocationGnssPayloadField(value: string): void;

  getGeolocationGnssUseRxTime(): boolean;
  setGeolocationGnssUseRxTime(value: boolean): void;

  getGeolocationWifi(): boolean;
  setGeolocationWifi(value: boolean): void;

  getGeolocationWifiPayloadField(): string;
  setGeolocationWifiPayloadField(value: string): void;

  getDas(): boolean;
  setDas(value: boolean): void;

  getDasToken(): string;
  setDasToken(value: string): void;

  getDasModemPort(): number;
  setDasModemPort(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoRaCloudIntegration.AsObject;
  static toObject(includeInstance: boolean, msg: LoRaCloudIntegration): LoRaCloudIntegration.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LoRaCloudIntegration, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoRaCloudIntegration;
  static deserializeBinaryFromReader(message: LoRaCloudIntegration, reader: jspb.BinaryReader): LoRaCloudIntegration;
}

export namespace LoRaCloudIntegration {
  export type AsObject = {
    applicationId: number,
    geolocation: boolean,
    geolocationToken: string,
    geolocationBufferTtl: number,
    geolocationMinBufferSize: number,
    geolocationTdoa: boolean,
    geolocationRssi: boolean,
    geolocationGnss: boolean,
    geolocationGnssPayloadField: string,
    geolocationGnssUseRxTime: boolean,
    geolocationWifi: boolean,
    geolocationWifiPayloadField: string,
    das: boolean,
    dasToken: string,
    dasModemPort: number,
  }
}

export class CreateLoRaCloudIntegrationRequest extends jspb.Message {
  hasIntegration(): boolean;
  clearIntegration(): void;
  getIntegration(): LoRaCloudIntegration | undefined;
  setIntegration(value?: LoRaCloudIntegration): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateLoRaCloudIntegrationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateLoRaCloudIntegrationRequest): CreateLoRaCloudIntegrationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateLoRaCloudIntegrationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateLoRaCloudIntegrationRequest;
  static deserializeBinaryFromReader(message: CreateLoRaCloudIntegrationRequest, reader: jspb.BinaryReader): CreateLoRaCloudIntegrationRequest;
}

export namespace CreateLoRaCloudIntegrationRequest {
  export type AsObject = {
    integration?: LoRaCloudIntegration.AsObject,
  }
}

export class GetLoRaCloudIntegrationRequest extends jspb.Message {
  getApplicationId(): number;
  setApplicationId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetLoRaCloudIntegrationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetLoRaCloudIntegrationRequest): GetLoRaCloudIntegrationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetLoRaCloudIntegrationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetLoRaCloudIntegrationRequest;
  static deserializeBinaryFromReader(message: GetLoRaCloudIntegrationRequest, reader: jspb.BinaryReader): GetLoRaCloudIntegrationRequest;
}

export namespace GetLoRaCloudIntegrationRequest {
  export type AsObject = {
    applicationId: number,
  }
}

export class GetLoRaCloudIntegrationResponse extends jspb.Message {
  hasIntegration(): boolean;
  clearIntegration(): void;
  getIntegration(): LoRaCloudIntegration | undefined;
  setIntegration(value?: LoRaCloudIntegration): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetLoRaCloudIntegrationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetLoRaCloudIntegrationResponse): GetLoRaCloudIntegrationResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetLoRaCloudIntegrationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetLoRaCloudIntegrationResponse;
  static deserializeBinaryFromReader(message: GetLoRaCloudIntegrationResponse, reader: jspb.BinaryReader): GetLoRaCloudIntegrationResponse;
}

export namespace GetLoRaCloudIntegrationResponse {
  export type AsObject = {
    integration?: LoRaCloudIntegration.AsObject,
  }
}

export class UpdateLoRaCloudIntegrationRequest extends jspb.Message {
  hasIntegration(): boolean;
  clearIntegration(): void;
  getIntegration(): LoRaCloudIntegration | undefined;
  setIntegration(value?: LoRaCloudIntegration): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateLoRaCloudIntegrationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateLoRaCloudIntegrationRequest): UpdateLoRaCloudIntegrationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateLoRaCloudIntegrationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateLoRaCloudIntegrationRequest;
  static deserializeBinaryFromReader(message: UpdateLoRaCloudIntegrationRequest, reader: jspb.BinaryReader): UpdateLoRaCloudIntegrationRequest;
}

export namespace UpdateLoRaCloudIntegrationRequest {
  export type AsObject = {
    integration?: LoRaCloudIntegration.AsObject,
  }
}

export class DeleteLoRaCloudIntegrationRequest extends jspb.Message {
  getApplicationId(): number;
  setApplicationId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteLoRaCloudIntegrationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteLoRaCloudIntegrationRequest): DeleteLoRaCloudIntegrationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteLoRaCloudIntegrationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteLoRaCloudIntegrationRequest;
  static deserializeBinaryFromReader(message: DeleteLoRaCloudIntegrationRequest, reader: jspb.BinaryReader): DeleteLoRaCloudIntegrationRequest;
}

export namespace DeleteLoRaCloudIntegrationRequest {
  export type AsObject = {
    applicationId: number,
  }
}

export interface IntegrationKindMap {
  HTTP: 0;
  INFLUXDB: 1;
  THINGSBOARD: 2;
  MYDEVICES: 3;
  LORACLOUD: 4;
}

export const IntegrationKind: IntegrationKindMap;

export interface InfluxDBPrecisionMap {
  NS: 0;
  U: 1;
  MS: 2;
  S: 3;
  M: 4;
  H: 5;
}

export const InfluxDBPrecision: InfluxDBPrecisionMap;

