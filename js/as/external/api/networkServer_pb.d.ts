// package: api
// file: as/external/api/networkServer.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../google/api/annotations_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

export class NetworkServer extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getName(): string;
  setName(value: string): void;

  getServer(): string;
  setServer(value: string): void;

  getCaCert(): string;
  setCaCert(value: string): void;

  getTlsCert(): string;
  setTlsCert(value: string): void;

  getTlsKey(): string;
  setTlsKey(value: string): void;

  getRoutingProfileCaCert(): string;
  setRoutingProfileCaCert(value: string): void;

  getRoutingProfileTlsCert(): string;
  setRoutingProfileTlsCert(value: string): void;

  getRoutingProfileTlsKey(): string;
  setRoutingProfileTlsKey(value: string): void;

  getGatewayDiscoveryEnabled(): boolean;
  setGatewayDiscoveryEnabled(value: boolean): void;

  getGatewayDiscoveryInterval(): number;
  setGatewayDiscoveryInterval(value: number): void;

  getGatewayDiscoveryTxFrequency(): number;
  setGatewayDiscoveryTxFrequency(value: number): void;

  getGatewayDiscoveryDr(): number;
  setGatewayDiscoveryDr(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NetworkServer.AsObject;
  static toObject(includeInstance: boolean, msg: NetworkServer): NetworkServer.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NetworkServer, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NetworkServer;
  static deserializeBinaryFromReader(message: NetworkServer, reader: jspb.BinaryReader): NetworkServer;
}

export namespace NetworkServer {
  export type AsObject = {
    id: number,
    name: string,
    server: string,
    caCert: string,
    tlsCert: string,
    tlsKey: string,
    routingProfileCaCert: string,
    routingProfileTlsCert: string,
    routingProfileTlsKey: string,
    gatewayDiscoveryEnabled: boolean,
    gatewayDiscoveryInterval: number,
    gatewayDiscoveryTxFrequency: number,
    gatewayDiscoveryDr: number,
  }
}

export class NetworkServerListItem extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getName(): string;
  setName(value: string): void;

  getServer(): string;
  setServer(value: string): void;

  hasCreatedAt(): boolean;
  clearCreatedAt(): void;
  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasUpdatedAt(): boolean;
  clearUpdatedAt(): void;
  getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NetworkServerListItem.AsObject;
  static toObject(includeInstance: boolean, msg: NetworkServerListItem): NetworkServerListItem.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NetworkServerListItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NetworkServerListItem;
  static deserializeBinaryFromReader(message: NetworkServerListItem, reader: jspb.BinaryReader): NetworkServerListItem;
}

export namespace NetworkServerListItem {
  export type AsObject = {
    id: number,
    name: string,
    server: string,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class CreateNetworkServerRequest extends jspb.Message {
  hasNetworkServer(): boolean;
  clearNetworkServer(): void;
  getNetworkServer(): NetworkServer | undefined;
  setNetworkServer(value?: NetworkServer): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateNetworkServerRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateNetworkServerRequest): CreateNetworkServerRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateNetworkServerRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateNetworkServerRequest;
  static deserializeBinaryFromReader(message: CreateNetworkServerRequest, reader: jspb.BinaryReader): CreateNetworkServerRequest;
}

export namespace CreateNetworkServerRequest {
  export type AsObject = {
    networkServer?: NetworkServer.AsObject,
  }
}

export class CreateNetworkServerResponse extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateNetworkServerResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateNetworkServerResponse): CreateNetworkServerResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateNetworkServerResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateNetworkServerResponse;
  static deserializeBinaryFromReader(message: CreateNetworkServerResponse, reader: jspb.BinaryReader): CreateNetworkServerResponse;
}

export namespace CreateNetworkServerResponse {
  export type AsObject = {
    id: number,
  }
}

export class GetNetworkServerRequest extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetNetworkServerRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetNetworkServerRequest): GetNetworkServerRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetNetworkServerRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetNetworkServerRequest;
  static deserializeBinaryFromReader(message: GetNetworkServerRequest, reader: jspb.BinaryReader): GetNetworkServerRequest;
}

export namespace GetNetworkServerRequest {
  export type AsObject = {
    id: number,
  }
}

export class GetNetworkServerResponse extends jspb.Message {
  hasNetworkServer(): boolean;
  clearNetworkServer(): void;
  getNetworkServer(): NetworkServer | undefined;
  setNetworkServer(value?: NetworkServer): void;

  hasCreatedAt(): boolean;
  clearCreatedAt(): void;
  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasUpdatedAt(): boolean;
  clearUpdatedAt(): void;
  getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getVersion(): string;
  setVersion(value: string): void;

  getRegion(): string;
  setRegion(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetNetworkServerResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetNetworkServerResponse): GetNetworkServerResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetNetworkServerResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetNetworkServerResponse;
  static deserializeBinaryFromReader(message: GetNetworkServerResponse, reader: jspb.BinaryReader): GetNetworkServerResponse;
}

export namespace GetNetworkServerResponse {
  export type AsObject = {
    networkServer?: NetworkServer.AsObject,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    version: string,
    region: string,
  }
}

export class UpdateNetworkServerRequest extends jspb.Message {
  hasNetworkServer(): boolean;
  clearNetworkServer(): void;
  getNetworkServer(): NetworkServer | undefined;
  setNetworkServer(value?: NetworkServer): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateNetworkServerRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateNetworkServerRequest): UpdateNetworkServerRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateNetworkServerRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateNetworkServerRequest;
  static deserializeBinaryFromReader(message: UpdateNetworkServerRequest, reader: jspb.BinaryReader): UpdateNetworkServerRequest;
}

export namespace UpdateNetworkServerRequest {
  export type AsObject = {
    networkServer?: NetworkServer.AsObject,
  }
}

export class DeleteNetworkServerRequest extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteNetworkServerRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteNetworkServerRequest): DeleteNetworkServerRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteNetworkServerRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteNetworkServerRequest;
  static deserializeBinaryFromReader(message: DeleteNetworkServerRequest, reader: jspb.BinaryReader): DeleteNetworkServerRequest;
}

export namespace DeleteNetworkServerRequest {
  export type AsObject = {
    id: number,
  }
}

export class ListNetworkServerRequest extends jspb.Message {
  getLimit(): number;
  setLimit(value: number): void;

  getOffset(): number;
  setOffset(value: number): void;

  getOrganizationId(): number;
  setOrganizationId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListNetworkServerRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListNetworkServerRequest): ListNetworkServerRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListNetworkServerRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListNetworkServerRequest;
  static deserializeBinaryFromReader(message: ListNetworkServerRequest, reader: jspb.BinaryReader): ListNetworkServerRequest;
}

export namespace ListNetworkServerRequest {
  export type AsObject = {
    limit: number,
    offset: number,
    organizationId: number,
  }
}

export class ListNetworkServerResponse extends jspb.Message {
  getTotalCount(): number;
  setTotalCount(value: number): void;

  clearResultList(): void;
  getResultList(): Array<NetworkServerListItem>;
  setResultList(value: Array<NetworkServerListItem>): void;
  addResult(value?: NetworkServerListItem, index?: number): NetworkServerListItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListNetworkServerResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListNetworkServerResponse): ListNetworkServerResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListNetworkServerResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListNetworkServerResponse;
  static deserializeBinaryFromReader(message: ListNetworkServerResponse, reader: jspb.BinaryReader): ListNetworkServerResponse;
}

export namespace ListNetworkServerResponse {
  export type AsObject = {
    totalCount: number,
    resultList: Array<NetworkServerListItem.AsObject>,
  }
}

