// package: api
// file: as/external/api/multicastGroup.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../google/api/annotations_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

export class MulticastGroup extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getMcAddr(): string;
  setMcAddr(value: string): void;

  getMcNwkSKey(): string;
  setMcNwkSKey(value: string): void;

  getMcAppSKey(): string;
  setMcAppSKey(value: string): void;

  getFCnt(): number;
  setFCnt(value: number): void;

  getGroupType(): MulticastGroupTypeMap[keyof MulticastGroupTypeMap];
  setGroupType(value: MulticastGroupTypeMap[keyof MulticastGroupTypeMap]): void;

  getDr(): number;
  setDr(value: number): void;

  getFrequency(): number;
  setFrequency(value: number): void;

  getPingSlotPeriod(): number;
  setPingSlotPeriod(value: number): void;

  getApplicationId(): number;
  setApplicationId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MulticastGroup.AsObject;
  static toObject(includeInstance: boolean, msg: MulticastGroup): MulticastGroup.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MulticastGroup, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MulticastGroup;
  static deserializeBinaryFromReader(message: MulticastGroup, reader: jspb.BinaryReader): MulticastGroup;
}

export namespace MulticastGroup {
  export type AsObject = {
    id: string,
    name: string,
    mcAddr: string,
    mcNwkSKey: string,
    mcAppSKey: string,
    fCnt: number,
    groupType: MulticastGroupTypeMap[keyof MulticastGroupTypeMap],
    dr: number,
    frequency: number,
    pingSlotPeriod: number,
    applicationId: number,
  }
}

export class MulticastGroupListItem extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getApplicationId(): number;
  setApplicationId(value: number): void;

  getApplicationName(): string;
  setApplicationName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MulticastGroupListItem.AsObject;
  static toObject(includeInstance: boolean, msg: MulticastGroupListItem): MulticastGroupListItem.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MulticastGroupListItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MulticastGroupListItem;
  static deserializeBinaryFromReader(message: MulticastGroupListItem, reader: jspb.BinaryReader): MulticastGroupListItem;
}

export namespace MulticastGroupListItem {
  export type AsObject = {
    id: string,
    name: string,
    applicationId: number,
    applicationName: string,
  }
}

export class CreateMulticastGroupRequest extends jspb.Message {
  hasMulticastGroup(): boolean;
  clearMulticastGroup(): void;
  getMulticastGroup(): MulticastGroup | undefined;
  setMulticastGroup(value?: MulticastGroup): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateMulticastGroupRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateMulticastGroupRequest): CreateMulticastGroupRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateMulticastGroupRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateMulticastGroupRequest;
  static deserializeBinaryFromReader(message: CreateMulticastGroupRequest, reader: jspb.BinaryReader): CreateMulticastGroupRequest;
}

export namespace CreateMulticastGroupRequest {
  export type AsObject = {
    multicastGroup?: MulticastGroup.AsObject,
  }
}

export class CreateMulticastGroupResponse extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateMulticastGroupResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateMulticastGroupResponse): CreateMulticastGroupResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateMulticastGroupResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateMulticastGroupResponse;
  static deserializeBinaryFromReader(message: CreateMulticastGroupResponse, reader: jspb.BinaryReader): CreateMulticastGroupResponse;
}

export namespace CreateMulticastGroupResponse {
  export type AsObject = {
    id: string,
  }
}

export class GetMulticastGroupRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMulticastGroupRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetMulticastGroupRequest): GetMulticastGroupRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetMulticastGroupRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMulticastGroupRequest;
  static deserializeBinaryFromReader(message: GetMulticastGroupRequest, reader: jspb.BinaryReader): GetMulticastGroupRequest;
}

export namespace GetMulticastGroupRequest {
  export type AsObject = {
    id: string,
  }
}

export class GetMulticastGroupResponse extends jspb.Message {
  hasMulticastGroup(): boolean;
  clearMulticastGroup(): void;
  getMulticastGroup(): MulticastGroup | undefined;
  setMulticastGroup(value?: MulticastGroup): void;

  hasCreatedAt(): boolean;
  clearCreatedAt(): void;
  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasUpdatedAt(): boolean;
  clearUpdatedAt(): void;
  getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMulticastGroupResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetMulticastGroupResponse): GetMulticastGroupResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetMulticastGroupResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMulticastGroupResponse;
  static deserializeBinaryFromReader(message: GetMulticastGroupResponse, reader: jspb.BinaryReader): GetMulticastGroupResponse;
}

export namespace GetMulticastGroupResponse {
  export type AsObject = {
    multicastGroup?: MulticastGroup.AsObject,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class UpdateMulticastGroupRequest extends jspb.Message {
  hasMulticastGroup(): boolean;
  clearMulticastGroup(): void;
  getMulticastGroup(): MulticastGroup | undefined;
  setMulticastGroup(value?: MulticastGroup): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateMulticastGroupRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateMulticastGroupRequest): UpdateMulticastGroupRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateMulticastGroupRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateMulticastGroupRequest;
  static deserializeBinaryFromReader(message: UpdateMulticastGroupRequest, reader: jspb.BinaryReader): UpdateMulticastGroupRequest;
}

export namespace UpdateMulticastGroupRequest {
  export type AsObject = {
    multicastGroup?: MulticastGroup.AsObject,
  }
}

export class DeleteMulticastGroupRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteMulticastGroupRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteMulticastGroupRequest): DeleteMulticastGroupRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteMulticastGroupRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteMulticastGroupRequest;
  static deserializeBinaryFromReader(message: DeleteMulticastGroupRequest, reader: jspb.BinaryReader): DeleteMulticastGroupRequest;
}

export namespace DeleteMulticastGroupRequest {
  export type AsObject = {
    id: string,
  }
}

export class AddDeviceToMulticastGroupRequest extends jspb.Message {
  getMulticastGroupId(): string;
  setMulticastGroupId(value: string): void;

  getDevEui(): string;
  setDevEui(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddDeviceToMulticastGroupRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddDeviceToMulticastGroupRequest): AddDeviceToMulticastGroupRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddDeviceToMulticastGroupRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddDeviceToMulticastGroupRequest;
  static deserializeBinaryFromReader(message: AddDeviceToMulticastGroupRequest, reader: jspb.BinaryReader): AddDeviceToMulticastGroupRequest;
}

export namespace AddDeviceToMulticastGroupRequest {
  export type AsObject = {
    multicastGroupId: string,
    devEui: string,
  }
}

export class RemoveDeviceFromMulticastGroupRequest extends jspb.Message {
  getMulticastGroupId(): string;
  setMulticastGroupId(value: string): void;

  getDevEui(): string;
  setDevEui(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveDeviceFromMulticastGroupRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveDeviceFromMulticastGroupRequest): RemoveDeviceFromMulticastGroupRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RemoveDeviceFromMulticastGroupRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveDeviceFromMulticastGroupRequest;
  static deserializeBinaryFromReader(message: RemoveDeviceFromMulticastGroupRequest, reader: jspb.BinaryReader): RemoveDeviceFromMulticastGroupRequest;
}

export namespace RemoveDeviceFromMulticastGroupRequest {
  export type AsObject = {
    multicastGroupId: string,
    devEui: string,
  }
}

export class ListMulticastGroupRequest extends jspb.Message {
  getLimit(): number;
  setLimit(value: number): void;

  getOffset(): number;
  setOffset(value: number): void;

  getOrganizationId(): number;
  setOrganizationId(value: number): void;

  getDevEui(): string;
  setDevEui(value: string): void;

  getSearch(): string;
  setSearch(value: string): void;

  getApplicationId(): number;
  setApplicationId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListMulticastGroupRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListMulticastGroupRequest): ListMulticastGroupRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListMulticastGroupRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListMulticastGroupRequest;
  static deserializeBinaryFromReader(message: ListMulticastGroupRequest, reader: jspb.BinaryReader): ListMulticastGroupRequest;
}

export namespace ListMulticastGroupRequest {
  export type AsObject = {
    limit: number,
    offset: number,
    organizationId: number,
    devEui: string,
    search: string,
    applicationId: number,
  }
}

export class ListMulticastGroupResponse extends jspb.Message {
  getTotalCount(): number;
  setTotalCount(value: number): void;

  clearResultList(): void;
  getResultList(): Array<MulticastGroupListItem>;
  setResultList(value: Array<MulticastGroupListItem>): void;
  addResult(value?: MulticastGroupListItem, index?: number): MulticastGroupListItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListMulticastGroupResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListMulticastGroupResponse): ListMulticastGroupResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListMulticastGroupResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListMulticastGroupResponse;
  static deserializeBinaryFromReader(message: ListMulticastGroupResponse, reader: jspb.BinaryReader): ListMulticastGroupResponse;
}

export namespace ListMulticastGroupResponse {
  export type AsObject = {
    totalCount: number,
    resultList: Array<MulticastGroupListItem.AsObject>,
  }
}

export class MulticastQueueItem extends jspb.Message {
  getMulticastGroupId(): string;
  setMulticastGroupId(value: string): void;

  getFCnt(): number;
  setFCnt(value: number): void;

  getFPort(): number;
  setFPort(value: number): void;

  getData(): Uint8Array | string;
  getData_asU8(): Uint8Array;
  getData_asB64(): string;
  setData(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MulticastQueueItem.AsObject;
  static toObject(includeInstance: boolean, msg: MulticastQueueItem): MulticastQueueItem.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MulticastQueueItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MulticastQueueItem;
  static deserializeBinaryFromReader(message: MulticastQueueItem, reader: jspb.BinaryReader): MulticastQueueItem;
}

export namespace MulticastQueueItem {
  export type AsObject = {
    multicastGroupId: string,
    fCnt: number,
    fPort: number,
    data: Uint8Array | string,
  }
}

export class EnqueueMulticastQueueItemRequest extends jspb.Message {
  hasMulticastQueueItem(): boolean;
  clearMulticastQueueItem(): void;
  getMulticastQueueItem(): MulticastQueueItem | undefined;
  setMulticastQueueItem(value?: MulticastQueueItem): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EnqueueMulticastQueueItemRequest.AsObject;
  static toObject(includeInstance: boolean, msg: EnqueueMulticastQueueItemRequest): EnqueueMulticastQueueItemRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EnqueueMulticastQueueItemRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EnqueueMulticastQueueItemRequest;
  static deserializeBinaryFromReader(message: EnqueueMulticastQueueItemRequest, reader: jspb.BinaryReader): EnqueueMulticastQueueItemRequest;
}

export namespace EnqueueMulticastQueueItemRequest {
  export type AsObject = {
    multicastQueueItem?: MulticastQueueItem.AsObject,
  }
}

export class EnqueueMulticastQueueItemResponse extends jspb.Message {
  getFCnt(): number;
  setFCnt(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EnqueueMulticastQueueItemResponse.AsObject;
  static toObject(includeInstance: boolean, msg: EnqueueMulticastQueueItemResponse): EnqueueMulticastQueueItemResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EnqueueMulticastQueueItemResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EnqueueMulticastQueueItemResponse;
  static deserializeBinaryFromReader(message: EnqueueMulticastQueueItemResponse, reader: jspb.BinaryReader): EnqueueMulticastQueueItemResponse;
}

export namespace EnqueueMulticastQueueItemResponse {
  export type AsObject = {
    fCnt: number,
  }
}

export class FlushMulticastGroupQueueItemsRequest extends jspb.Message {
  getMulticastGroupId(): string;
  setMulticastGroupId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FlushMulticastGroupQueueItemsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: FlushMulticastGroupQueueItemsRequest): FlushMulticastGroupQueueItemsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FlushMulticastGroupQueueItemsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FlushMulticastGroupQueueItemsRequest;
  static deserializeBinaryFromReader(message: FlushMulticastGroupQueueItemsRequest, reader: jspb.BinaryReader): FlushMulticastGroupQueueItemsRequest;
}

export namespace FlushMulticastGroupQueueItemsRequest {
  export type AsObject = {
    multicastGroupId: string,
  }
}

export class ListMulticastGroupQueueItemsRequest extends jspb.Message {
  getMulticastGroupId(): string;
  setMulticastGroupId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListMulticastGroupQueueItemsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListMulticastGroupQueueItemsRequest): ListMulticastGroupQueueItemsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListMulticastGroupQueueItemsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListMulticastGroupQueueItemsRequest;
  static deserializeBinaryFromReader(message: ListMulticastGroupQueueItemsRequest, reader: jspb.BinaryReader): ListMulticastGroupQueueItemsRequest;
}

export namespace ListMulticastGroupQueueItemsRequest {
  export type AsObject = {
    multicastGroupId: string,
  }
}

export class ListMulticastGroupQueueItemsResponse extends jspb.Message {
  clearMulticastQueueItemsList(): void;
  getMulticastQueueItemsList(): Array<MulticastQueueItem>;
  setMulticastQueueItemsList(value: Array<MulticastQueueItem>): void;
  addMulticastQueueItems(value?: MulticastQueueItem, index?: number): MulticastQueueItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListMulticastGroupQueueItemsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListMulticastGroupQueueItemsResponse): ListMulticastGroupQueueItemsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListMulticastGroupQueueItemsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListMulticastGroupQueueItemsResponse;
  static deserializeBinaryFromReader(message: ListMulticastGroupQueueItemsResponse, reader: jspb.BinaryReader): ListMulticastGroupQueueItemsResponse;
}

export namespace ListMulticastGroupQueueItemsResponse {
  export type AsObject = {
    multicastQueueItemsList: Array<MulticastQueueItem.AsObject>,
  }
}

export interface MulticastGroupTypeMap {
  CLASS_C: 0;
  CLASS_B: 1;
}

export const MulticastGroupType: MulticastGroupTypeMap;

