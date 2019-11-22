// package: api
// file: as/external/api/deviceQueue.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../google/api/annotations_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

export class DeviceQueueItem extends jspb.Message {
  getDevEui(): string;
  setDevEui(value: string): void;

  getConfirmed(): boolean;
  setConfirmed(value: boolean): void;

  getFCnt(): number;
  setFCnt(value: number): void;

  getFPort(): number;
  setFPort(value: number): void;

  getData(): Uint8Array | string;
  getData_asU8(): Uint8Array;
  getData_asB64(): string;
  setData(value: Uint8Array | string): void;

  getJsonObject(): string;
  setJsonObject(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeviceQueueItem.AsObject;
  static toObject(includeInstance: boolean, msg: DeviceQueueItem): DeviceQueueItem.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeviceQueueItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeviceQueueItem;
  static deserializeBinaryFromReader(message: DeviceQueueItem, reader: jspb.BinaryReader): DeviceQueueItem;
}

export namespace DeviceQueueItem {
  export type AsObject = {
    devEui: string,
    confirmed: boolean,
    fCnt: number,
    fPort: number,
    data: Uint8Array | string,
    jsonObject: string,
  }
}

export class EnqueueDeviceQueueItemRequest extends jspb.Message {
  hasDeviceQueueItem(): boolean;
  clearDeviceQueueItem(): void;
  getDeviceQueueItem(): DeviceQueueItem | undefined;
  setDeviceQueueItem(value?: DeviceQueueItem): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EnqueueDeviceQueueItemRequest.AsObject;
  static toObject(includeInstance: boolean, msg: EnqueueDeviceQueueItemRequest): EnqueueDeviceQueueItemRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EnqueueDeviceQueueItemRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EnqueueDeviceQueueItemRequest;
  static deserializeBinaryFromReader(message: EnqueueDeviceQueueItemRequest, reader: jspb.BinaryReader): EnqueueDeviceQueueItemRequest;
}

export namespace EnqueueDeviceQueueItemRequest {
  export type AsObject = {
    deviceQueueItem?: DeviceQueueItem.AsObject,
  }
}

export class EnqueueDeviceQueueItemResponse extends jspb.Message {
  getFCnt(): number;
  setFCnt(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EnqueueDeviceQueueItemResponse.AsObject;
  static toObject(includeInstance: boolean, msg: EnqueueDeviceQueueItemResponse): EnqueueDeviceQueueItemResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EnqueueDeviceQueueItemResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EnqueueDeviceQueueItemResponse;
  static deserializeBinaryFromReader(message: EnqueueDeviceQueueItemResponse, reader: jspb.BinaryReader): EnqueueDeviceQueueItemResponse;
}

export namespace EnqueueDeviceQueueItemResponse {
  export type AsObject = {
    fCnt: number,
  }
}

export class FlushDeviceQueueRequest extends jspb.Message {
  getDevEui(): string;
  setDevEui(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FlushDeviceQueueRequest.AsObject;
  static toObject(includeInstance: boolean, msg: FlushDeviceQueueRequest): FlushDeviceQueueRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FlushDeviceQueueRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FlushDeviceQueueRequest;
  static deserializeBinaryFromReader(message: FlushDeviceQueueRequest, reader: jspb.BinaryReader): FlushDeviceQueueRequest;
}

export namespace FlushDeviceQueueRequest {
  export type AsObject = {
    devEui: string,
  }
}

export class ListDeviceQueueItemsRequest extends jspb.Message {
  getDevEui(): string;
  setDevEui(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListDeviceQueueItemsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListDeviceQueueItemsRequest): ListDeviceQueueItemsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListDeviceQueueItemsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListDeviceQueueItemsRequest;
  static deserializeBinaryFromReader(message: ListDeviceQueueItemsRequest, reader: jspb.BinaryReader): ListDeviceQueueItemsRequest;
}

export namespace ListDeviceQueueItemsRequest {
  export type AsObject = {
    devEui: string,
  }
}

export class ListDeviceQueueItemsResponse extends jspb.Message {
  clearDeviceQueueItemsList(): void;
  getDeviceQueueItemsList(): Array<DeviceQueueItem>;
  setDeviceQueueItemsList(value: Array<DeviceQueueItem>): void;
  addDeviceQueueItems(value?: DeviceQueueItem, index?: number): DeviceQueueItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListDeviceQueueItemsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListDeviceQueueItemsResponse): ListDeviceQueueItemsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListDeviceQueueItemsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListDeviceQueueItemsResponse;
  static deserializeBinaryFromReader(message: ListDeviceQueueItemsResponse, reader: jspb.BinaryReader): ListDeviceQueueItemsResponse;
}

export namespace ListDeviceQueueItemsResponse {
  export type AsObject = {
    deviceQueueItemsList: Array<DeviceQueueItem.AsObject>,
  }
}

