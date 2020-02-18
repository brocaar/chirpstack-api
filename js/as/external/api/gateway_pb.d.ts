// package: api
// file: as/external/api/gateway.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "../../../google/api/annotations_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as common_common_pb from "../../../common/common_pb";
import * as as_external_api_frameLog_pb from "../../../as/external/api/frameLog_pb";

export class Gateway extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  hasLocation(): boolean;
  clearLocation(): void;
  getLocation(): common_common_pb.Location | undefined;
  setLocation(value?: common_common_pb.Location): void;

  getOrganizationId(): number;
  setOrganizationId(value: number): void;

  getDiscoveryEnabled(): boolean;
  setDiscoveryEnabled(value: boolean): void;

  getNetworkServerId(): number;
  setNetworkServerId(value: number): void;

  getGatewayProfileId(): string;
  setGatewayProfileId(value: string): void;

  clearBoardsList(): void;
  getBoardsList(): Array<GatewayBoard>;
  setBoardsList(value: Array<GatewayBoard>): void;
  addBoards(value?: GatewayBoard, index?: number): GatewayBoard;

  getTagsMap(): jspb.Map<string, string>;
  clearTagsMap(): void;
  getMetadataMap(): jspb.Map<string, string>;
  clearMetadataMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Gateway.AsObject;
  static toObject(includeInstance: boolean, msg: Gateway): Gateway.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Gateway, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Gateway;
  static deserializeBinaryFromReader(message: Gateway, reader: jspb.BinaryReader): Gateway;
}

export namespace Gateway {
  export type AsObject = {
    id: string,
    name: string,
    description: string,
    location?: common_common_pb.Location.AsObject,
    organizationId: number,
    discoveryEnabled: boolean,
    networkServerId: number,
    gatewayProfileId: string,
    boardsList: Array<GatewayBoard.AsObject>,
    tagsMap: Array<[string, string]>,
    metadataMap: Array<[string, string]>,
  }
}

export class GatewayBoard extends jspb.Message {
  getFpgaId(): string;
  setFpgaId(value: string): void;

  getFineTimestampKey(): string;
  setFineTimestampKey(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GatewayBoard.AsObject;
  static toObject(includeInstance: boolean, msg: GatewayBoard): GatewayBoard.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GatewayBoard, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GatewayBoard;
  static deserializeBinaryFromReader(message: GatewayBoard, reader: jspb.BinaryReader): GatewayBoard;
}

export namespace GatewayBoard {
  export type AsObject = {
    fpgaId: string,
    fineTimestampKey: string,
  }
}

export class CreateGatewayRequest extends jspb.Message {
  hasGateway(): boolean;
  clearGateway(): void;
  getGateway(): Gateway | undefined;
  setGateway(value?: Gateway): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateGatewayRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateGatewayRequest): CreateGatewayRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateGatewayRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateGatewayRequest;
  static deserializeBinaryFromReader(message: CreateGatewayRequest, reader: jspb.BinaryReader): CreateGatewayRequest;
}

export namespace CreateGatewayRequest {
  export type AsObject = {
    gateway?: Gateway.AsObject,
  }
}

export class GetGatewayRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetGatewayRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetGatewayRequest): GetGatewayRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetGatewayRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetGatewayRequest;
  static deserializeBinaryFromReader(message: GetGatewayRequest, reader: jspb.BinaryReader): GetGatewayRequest;
}

export namespace GetGatewayRequest {
  export type AsObject = {
    id: string,
  }
}

export class GetGatewayResponse extends jspb.Message {
  hasGateway(): boolean;
  clearGateway(): void;
  getGateway(): Gateway | undefined;
  setGateway(value?: Gateway): void;

  hasCreatedAt(): boolean;
  clearCreatedAt(): void;
  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasUpdatedAt(): boolean;
  clearUpdatedAt(): void;
  getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasFirstSeenAt(): boolean;
  clearFirstSeenAt(): void;
  getFirstSeenAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setFirstSeenAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasLastSeenAt(): boolean;
  clearLastSeenAt(): void;
  getLastSeenAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLastSeenAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetGatewayResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetGatewayResponse): GetGatewayResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetGatewayResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetGatewayResponse;
  static deserializeBinaryFromReader(message: GetGatewayResponse, reader: jspb.BinaryReader): GetGatewayResponse;
}

export namespace GetGatewayResponse {
  export type AsObject = {
    gateway?: Gateway.AsObject,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    firstSeenAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    lastSeenAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class DeleteGatewayRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteGatewayRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteGatewayRequest): DeleteGatewayRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteGatewayRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteGatewayRequest;
  static deserializeBinaryFromReader(message: DeleteGatewayRequest, reader: jspb.BinaryReader): DeleteGatewayRequest;
}

export namespace DeleteGatewayRequest {
  export type AsObject = {
    id: string,
  }
}

export class ListGatewayRequest extends jspb.Message {
  getLimit(): number;
  setLimit(value: number): void;

  getOffset(): number;
  setOffset(value: number): void;

  getOrganizationId(): number;
  setOrganizationId(value: number): void;

  getSearch(): string;
  setSearch(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListGatewayRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListGatewayRequest): ListGatewayRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListGatewayRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListGatewayRequest;
  static deserializeBinaryFromReader(message: ListGatewayRequest, reader: jspb.BinaryReader): ListGatewayRequest;
}

export namespace ListGatewayRequest {
  export type AsObject = {
    limit: number,
    offset: number,
    organizationId: number,
    search: string,
  }
}

export class GatewayListItem extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  hasCreatedAt(): boolean;
  clearCreatedAt(): void;
  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasUpdatedAt(): boolean;
  clearUpdatedAt(): void;
  getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasFirstSeenAt(): boolean;
  clearFirstSeenAt(): void;
  getFirstSeenAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setFirstSeenAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasLastSeenAt(): boolean;
  clearLastSeenAt(): void;
  getLastSeenAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLastSeenAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getOrganizationId(): number;
  setOrganizationId(value: number): void;

  getNetworkServerId(): number;
  setNetworkServerId(value: number): void;

  hasLocation(): boolean;
  clearLocation(): void;
  getLocation(): common_common_pb.Location | undefined;
  setLocation(value?: common_common_pb.Location): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GatewayListItem.AsObject;
  static toObject(includeInstance: boolean, msg: GatewayListItem): GatewayListItem.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GatewayListItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GatewayListItem;
  static deserializeBinaryFromReader(message: GatewayListItem, reader: jspb.BinaryReader): GatewayListItem;
}

export namespace GatewayListItem {
  export type AsObject = {
    id: string,
    name: string,
    description: string,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    firstSeenAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    lastSeenAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    organizationId: number,
    networkServerId: number,
    location?: common_common_pb.Location.AsObject,
  }
}

export class ListGatewayResponse extends jspb.Message {
  getTotalCount(): number;
  setTotalCount(value: number): void;

  clearResultList(): void;
  getResultList(): Array<GatewayListItem>;
  setResultList(value: Array<GatewayListItem>): void;
  addResult(value?: GatewayListItem, index?: number): GatewayListItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListGatewayResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListGatewayResponse): ListGatewayResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListGatewayResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListGatewayResponse;
  static deserializeBinaryFromReader(message: ListGatewayResponse, reader: jspb.BinaryReader): ListGatewayResponse;
}

export namespace ListGatewayResponse {
  export type AsObject = {
    totalCount: number,
    resultList: Array<GatewayListItem.AsObject>,
  }
}

export class UpdateGatewayRequest extends jspb.Message {
  hasGateway(): boolean;
  clearGateway(): void;
  getGateway(): Gateway | undefined;
  setGateway(value?: Gateway): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateGatewayRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateGatewayRequest): UpdateGatewayRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateGatewayRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateGatewayRequest;
  static deserializeBinaryFromReader(message: UpdateGatewayRequest, reader: jspb.BinaryReader): UpdateGatewayRequest;
}

export namespace UpdateGatewayRequest {
  export type AsObject = {
    gateway?: Gateway.AsObject,
  }
}

export class GatewayStats extends jspb.Message {
  hasTimestamp(): boolean;
  clearTimestamp(): void;
  getTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getRxPacketsReceived(): number;
  setRxPacketsReceived(value: number): void;

  getRxPacketsReceivedOk(): number;
  setRxPacketsReceivedOk(value: number): void;

  getTxPacketsReceived(): number;
  setTxPacketsReceived(value: number): void;

  getTxPacketsEmitted(): number;
  setTxPacketsEmitted(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GatewayStats.AsObject;
  static toObject(includeInstance: boolean, msg: GatewayStats): GatewayStats.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GatewayStats, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GatewayStats;
  static deserializeBinaryFromReader(message: GatewayStats, reader: jspb.BinaryReader): GatewayStats;
}

export namespace GatewayStats {
  export type AsObject = {
    timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    rxPacketsReceived: number,
    rxPacketsReceivedOk: number,
    txPacketsReceived: number,
    txPacketsEmitted: number,
  }
}

export class GetGatewayStatsRequest extends jspb.Message {
  getGatewayId(): string;
  setGatewayId(value: string): void;

  getInterval(): string;
  setInterval(value: string): void;

  hasStartTimestamp(): boolean;
  clearStartTimestamp(): void;
  getStartTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasEndTimestamp(): boolean;
  clearEndTimestamp(): void;
  getEndTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEndTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetGatewayStatsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetGatewayStatsRequest): GetGatewayStatsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetGatewayStatsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetGatewayStatsRequest;
  static deserializeBinaryFromReader(message: GetGatewayStatsRequest, reader: jspb.BinaryReader): GetGatewayStatsRequest;
}

export namespace GetGatewayStatsRequest {
  export type AsObject = {
    gatewayId: string,
    interval: string,
    startTimestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    endTimestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class GetGatewayStatsResponse extends jspb.Message {
  clearResultList(): void;
  getResultList(): Array<GatewayStats>;
  setResultList(value: Array<GatewayStats>): void;
  addResult(value?: GatewayStats, index?: number): GatewayStats;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetGatewayStatsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetGatewayStatsResponse): GetGatewayStatsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetGatewayStatsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetGatewayStatsResponse;
  static deserializeBinaryFromReader(message: GetGatewayStatsResponse, reader: jspb.BinaryReader): GetGatewayStatsResponse;
}

export namespace GetGatewayStatsResponse {
  export type AsObject = {
    resultList: Array<GatewayStats.AsObject>,
  }
}

export class PingRX extends jspb.Message {
  getGatewayId(): string;
  setGatewayId(value: string): void;

  getRssi(): number;
  setRssi(value: number): void;

  getLoraSnr(): number;
  setLoraSnr(value: number): void;

  getLatitude(): number;
  setLatitude(value: number): void;

  getLongitude(): number;
  setLongitude(value: number): void;

  getAltitude(): number;
  setAltitude(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PingRX.AsObject;
  static toObject(includeInstance: boolean, msg: PingRX): PingRX.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PingRX, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PingRX;
  static deserializeBinaryFromReader(message: PingRX, reader: jspb.BinaryReader): PingRX;
}

export namespace PingRX {
  export type AsObject = {
    gatewayId: string,
    rssi: number,
    loraSnr: number,
    latitude: number,
    longitude: number,
    altitude: number,
  }
}

export class GetLastPingRequest extends jspb.Message {
  getGatewayId(): string;
  setGatewayId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetLastPingRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetLastPingRequest): GetLastPingRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetLastPingRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetLastPingRequest;
  static deserializeBinaryFromReader(message: GetLastPingRequest, reader: jspb.BinaryReader): GetLastPingRequest;
}

export namespace GetLastPingRequest {
  export type AsObject = {
    gatewayId: string,
  }
}

export class GetLastPingResponse extends jspb.Message {
  hasCreatedAt(): boolean;
  clearCreatedAt(): void;
  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getFrequency(): number;
  setFrequency(value: number): void;

  getDr(): number;
  setDr(value: number): void;

  clearPingRxList(): void;
  getPingRxList(): Array<PingRX>;
  setPingRxList(value: Array<PingRX>): void;
  addPingRx(value?: PingRX, index?: number): PingRX;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetLastPingResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetLastPingResponse): GetLastPingResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetLastPingResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetLastPingResponse;
  static deserializeBinaryFromReader(message: GetLastPingResponse, reader: jspb.BinaryReader): GetLastPingResponse;
}

export namespace GetLastPingResponse {
  export type AsObject = {
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    frequency: number,
    dr: number,
    pingRxList: Array<PingRX.AsObject>,
  }
}

export class StreamGatewayFrameLogsRequest extends jspb.Message {
  getGatewayId(): string;
  setGatewayId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamGatewayFrameLogsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StreamGatewayFrameLogsRequest): StreamGatewayFrameLogsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StreamGatewayFrameLogsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamGatewayFrameLogsRequest;
  static deserializeBinaryFromReader(message: StreamGatewayFrameLogsRequest, reader: jspb.BinaryReader): StreamGatewayFrameLogsRequest;
}

export namespace StreamGatewayFrameLogsRequest {
  export type AsObject = {
    gatewayId: string,
  }
}

export class StreamGatewayFrameLogsResponse extends jspb.Message {
  hasUplinkFrame(): boolean;
  clearUplinkFrame(): void;
  getUplinkFrame(): as_external_api_frameLog_pb.UplinkFrameLog | undefined;
  setUplinkFrame(value?: as_external_api_frameLog_pb.UplinkFrameLog): void;

  hasDownlinkFrame(): boolean;
  clearDownlinkFrame(): void;
  getDownlinkFrame(): as_external_api_frameLog_pb.DownlinkFrameLog | undefined;
  setDownlinkFrame(value?: as_external_api_frameLog_pb.DownlinkFrameLog): void;

  getFrameCase(): StreamGatewayFrameLogsResponse.FrameCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamGatewayFrameLogsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: StreamGatewayFrameLogsResponse): StreamGatewayFrameLogsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StreamGatewayFrameLogsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamGatewayFrameLogsResponse;
  static deserializeBinaryFromReader(message: StreamGatewayFrameLogsResponse, reader: jspb.BinaryReader): StreamGatewayFrameLogsResponse;
}

export namespace StreamGatewayFrameLogsResponse {
  export type AsObject = {
    uplinkFrame?: as_external_api_frameLog_pb.UplinkFrameLog.AsObject,
    downlinkFrame?: as_external_api_frameLog_pb.DownlinkFrameLog.AsObject,
  }

  export enum FrameCase {
    FRAME_NOT_SET = 0,
    UPLINK_FRAME = 1,
    DOWNLINK_FRAME = 2,
  }
}

