// package: api
// file: as/external/api/gatewayProfile.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../google/api/annotations_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as common_common_pb from "../../../common/common_pb";

export class GatewayProfile extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getNetworkServerId(): number;
  setNetworkServerId(value: number): void;

  clearChannelsList(): void;
  getChannelsList(): Array<number>;
  setChannelsList(value: Array<number>): void;
  addChannels(value: number, index?: number): number;

  clearExtraChannelsList(): void;
  getExtraChannelsList(): Array<GatewayProfileExtraChannel>;
  setExtraChannelsList(value: Array<GatewayProfileExtraChannel>): void;
  addExtraChannels(value?: GatewayProfileExtraChannel, index?: number): GatewayProfileExtraChannel;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GatewayProfile.AsObject;
  static toObject(includeInstance: boolean, msg: GatewayProfile): GatewayProfile.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GatewayProfile, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GatewayProfile;
  static deserializeBinaryFromReader(message: GatewayProfile, reader: jspb.BinaryReader): GatewayProfile;
}

export namespace GatewayProfile {
  export type AsObject = {
    id: string,
    name: string,
    networkServerId: number,
    channelsList: Array<number>,
    extraChannelsList: Array<GatewayProfileExtraChannel.AsObject>,
  }
}

export class GatewayProfileListItem extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getNetworkServerId(): number;
  setNetworkServerId(value: number): void;

  getNetworkServerName(): string;
  setNetworkServerName(value: string): void;

  hasCreatedAt(): boolean;
  clearCreatedAt(): void;
  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasUpdatedAt(): boolean;
  clearUpdatedAt(): void;
  getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GatewayProfileListItem.AsObject;
  static toObject(includeInstance: boolean, msg: GatewayProfileListItem): GatewayProfileListItem.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GatewayProfileListItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GatewayProfileListItem;
  static deserializeBinaryFromReader(message: GatewayProfileListItem, reader: jspb.BinaryReader): GatewayProfileListItem;
}

export namespace GatewayProfileListItem {
  export type AsObject = {
    id: string,
    name: string,
    networkServerId: number,
    networkServerName: string,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class GatewayProfileExtraChannel extends jspb.Message {
  getModulation(): common_common_pb.ModulationMap[keyof common_common_pb.ModulationMap];
  setModulation(value: common_common_pb.ModulationMap[keyof common_common_pb.ModulationMap]): void;

  getFrequency(): number;
  setFrequency(value: number): void;

  getBandwidth(): number;
  setBandwidth(value: number): void;

  getBitrate(): number;
  setBitrate(value: number): void;

  clearSpreadingFactorsList(): void;
  getSpreadingFactorsList(): Array<number>;
  setSpreadingFactorsList(value: Array<number>): void;
  addSpreadingFactors(value: number, index?: number): number;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GatewayProfileExtraChannel.AsObject;
  static toObject(includeInstance: boolean, msg: GatewayProfileExtraChannel): GatewayProfileExtraChannel.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GatewayProfileExtraChannel, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GatewayProfileExtraChannel;
  static deserializeBinaryFromReader(message: GatewayProfileExtraChannel, reader: jspb.BinaryReader): GatewayProfileExtraChannel;
}

export namespace GatewayProfileExtraChannel {
  export type AsObject = {
    modulation: common_common_pb.ModulationMap[keyof common_common_pb.ModulationMap],
    frequency: number,
    bandwidth: number,
    bitrate: number,
    spreadingFactorsList: Array<number>,
  }
}

export class CreateGatewayProfileRequest extends jspb.Message {
  hasGatewayProfile(): boolean;
  clearGatewayProfile(): void;
  getGatewayProfile(): GatewayProfile | undefined;
  setGatewayProfile(value?: GatewayProfile): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateGatewayProfileRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateGatewayProfileRequest): CreateGatewayProfileRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateGatewayProfileRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateGatewayProfileRequest;
  static deserializeBinaryFromReader(message: CreateGatewayProfileRequest, reader: jspb.BinaryReader): CreateGatewayProfileRequest;
}

export namespace CreateGatewayProfileRequest {
  export type AsObject = {
    gatewayProfile?: GatewayProfile.AsObject,
  }
}

export class CreateGatewayProfileResponse extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateGatewayProfileResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateGatewayProfileResponse): CreateGatewayProfileResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateGatewayProfileResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateGatewayProfileResponse;
  static deserializeBinaryFromReader(message: CreateGatewayProfileResponse, reader: jspb.BinaryReader): CreateGatewayProfileResponse;
}

export namespace CreateGatewayProfileResponse {
  export type AsObject = {
    id: string,
  }
}

export class GetGatewayProfileRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetGatewayProfileRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetGatewayProfileRequest): GetGatewayProfileRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetGatewayProfileRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetGatewayProfileRequest;
  static deserializeBinaryFromReader(message: GetGatewayProfileRequest, reader: jspb.BinaryReader): GetGatewayProfileRequest;
}

export namespace GetGatewayProfileRequest {
  export type AsObject = {
    id: string,
  }
}

export class GetGatewayProfileResponse extends jspb.Message {
  hasGatewayProfile(): boolean;
  clearGatewayProfile(): void;
  getGatewayProfile(): GatewayProfile | undefined;
  setGatewayProfile(value?: GatewayProfile): void;

  hasCreatedAt(): boolean;
  clearCreatedAt(): void;
  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasUpdatedAt(): boolean;
  clearUpdatedAt(): void;
  getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetGatewayProfileResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetGatewayProfileResponse): GetGatewayProfileResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetGatewayProfileResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetGatewayProfileResponse;
  static deserializeBinaryFromReader(message: GetGatewayProfileResponse, reader: jspb.BinaryReader): GetGatewayProfileResponse;
}

export namespace GetGatewayProfileResponse {
  export type AsObject = {
    gatewayProfile?: GatewayProfile.AsObject,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class UpdateGatewayProfileRequest extends jspb.Message {
  hasGatewayProfile(): boolean;
  clearGatewayProfile(): void;
  getGatewayProfile(): GatewayProfile | undefined;
  setGatewayProfile(value?: GatewayProfile): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateGatewayProfileRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateGatewayProfileRequest): UpdateGatewayProfileRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateGatewayProfileRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateGatewayProfileRequest;
  static deserializeBinaryFromReader(message: UpdateGatewayProfileRequest, reader: jspb.BinaryReader): UpdateGatewayProfileRequest;
}

export namespace UpdateGatewayProfileRequest {
  export type AsObject = {
    gatewayProfile?: GatewayProfile.AsObject,
  }
}

export class DeleteGatewayProfileRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteGatewayProfileRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteGatewayProfileRequest): DeleteGatewayProfileRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteGatewayProfileRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteGatewayProfileRequest;
  static deserializeBinaryFromReader(message: DeleteGatewayProfileRequest, reader: jspb.BinaryReader): DeleteGatewayProfileRequest;
}

export namespace DeleteGatewayProfileRequest {
  export type AsObject = {
    id: string,
  }
}

export class ListGatewayProfilesRequest extends jspb.Message {
  getLimit(): number;
  setLimit(value: number): void;

  getOffset(): number;
  setOffset(value: number): void;

  getNetworkServerId(): number;
  setNetworkServerId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListGatewayProfilesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListGatewayProfilesRequest): ListGatewayProfilesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListGatewayProfilesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListGatewayProfilesRequest;
  static deserializeBinaryFromReader(message: ListGatewayProfilesRequest, reader: jspb.BinaryReader): ListGatewayProfilesRequest;
}

export namespace ListGatewayProfilesRequest {
  export type AsObject = {
    limit: number,
    offset: number,
    networkServerId: number,
  }
}

export class ListGatewayProfilesResponse extends jspb.Message {
  getTotalCount(): number;
  setTotalCount(value: number): void;

  clearResultList(): void;
  getResultList(): Array<GatewayProfileListItem>;
  setResultList(value: Array<GatewayProfileListItem>): void;
  addResult(value?: GatewayProfileListItem, index?: number): GatewayProfileListItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListGatewayProfilesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListGatewayProfilesResponse): ListGatewayProfilesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListGatewayProfilesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListGatewayProfilesResponse;
  static deserializeBinaryFromReader(message: ListGatewayProfilesResponse, reader: jspb.BinaryReader): ListGatewayProfilesResponse;
}

export namespace ListGatewayProfilesResponse {
  export type AsObject = {
    totalCount: number,
    resultList: Array<GatewayProfileListItem.AsObject>,
  }
}

