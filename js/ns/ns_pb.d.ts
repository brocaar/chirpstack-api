// package: ns
// file: ns/ns.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as common_common_pb from "../common/common_pb";
import * as gw_gw_pb from "../gw/gw_pb";
import * as ns_profiles_pb from "../ns/profiles_pb";

export class CreateServiceProfileRequest extends jspb.Message {
  hasServiceProfile(): boolean;
  clearServiceProfile(): void;
  getServiceProfile(): ns_profiles_pb.ServiceProfile | undefined;
  setServiceProfile(value?: ns_profiles_pb.ServiceProfile): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateServiceProfileRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateServiceProfileRequest): CreateServiceProfileRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateServiceProfileRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateServiceProfileRequest;
  static deserializeBinaryFromReader(message: CreateServiceProfileRequest, reader: jspb.BinaryReader): CreateServiceProfileRequest;
}

export namespace CreateServiceProfileRequest {
  export type AsObject = {
    serviceProfile?: ns_profiles_pb.ServiceProfile.AsObject,
  }
}

export class CreateServiceProfileResponse extends jspb.Message {
  getId(): Uint8Array | string;
  getId_asU8(): Uint8Array;
  getId_asB64(): string;
  setId(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateServiceProfileResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateServiceProfileResponse): CreateServiceProfileResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateServiceProfileResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateServiceProfileResponse;
  static deserializeBinaryFromReader(message: CreateServiceProfileResponse, reader: jspb.BinaryReader): CreateServiceProfileResponse;
}

export namespace CreateServiceProfileResponse {
  export type AsObject = {
    id: Uint8Array | string,
  }
}

export class GetServiceProfileRequest extends jspb.Message {
  getId(): Uint8Array | string;
  getId_asU8(): Uint8Array;
  getId_asB64(): string;
  setId(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetServiceProfileRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetServiceProfileRequest): GetServiceProfileRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetServiceProfileRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetServiceProfileRequest;
  static deserializeBinaryFromReader(message: GetServiceProfileRequest, reader: jspb.BinaryReader): GetServiceProfileRequest;
}

export namespace GetServiceProfileRequest {
  export type AsObject = {
    id: Uint8Array | string,
  }
}

export class GetServiceProfileResponse extends jspb.Message {
  hasServiceProfile(): boolean;
  clearServiceProfile(): void;
  getServiceProfile(): ns_profiles_pb.ServiceProfile | undefined;
  setServiceProfile(value?: ns_profiles_pb.ServiceProfile): void;

  hasCreatedAt(): boolean;
  clearCreatedAt(): void;
  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasUpdatedAt(): boolean;
  clearUpdatedAt(): void;
  getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetServiceProfileResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetServiceProfileResponse): GetServiceProfileResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetServiceProfileResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetServiceProfileResponse;
  static deserializeBinaryFromReader(message: GetServiceProfileResponse, reader: jspb.BinaryReader): GetServiceProfileResponse;
}

export namespace GetServiceProfileResponse {
  export type AsObject = {
    serviceProfile?: ns_profiles_pb.ServiceProfile.AsObject,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class UpdateServiceProfileRequest extends jspb.Message {
  hasServiceProfile(): boolean;
  clearServiceProfile(): void;
  getServiceProfile(): ns_profiles_pb.ServiceProfile | undefined;
  setServiceProfile(value?: ns_profiles_pb.ServiceProfile): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateServiceProfileRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateServiceProfileRequest): UpdateServiceProfileRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateServiceProfileRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateServiceProfileRequest;
  static deserializeBinaryFromReader(message: UpdateServiceProfileRequest, reader: jspb.BinaryReader): UpdateServiceProfileRequest;
}

export namespace UpdateServiceProfileRequest {
  export type AsObject = {
    serviceProfile?: ns_profiles_pb.ServiceProfile.AsObject,
  }
}

export class DeleteServiceProfileRequest extends jspb.Message {
  getId(): Uint8Array | string;
  getId_asU8(): Uint8Array;
  getId_asB64(): string;
  setId(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteServiceProfileRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteServiceProfileRequest): DeleteServiceProfileRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteServiceProfileRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteServiceProfileRequest;
  static deserializeBinaryFromReader(message: DeleteServiceProfileRequest, reader: jspb.BinaryReader): DeleteServiceProfileRequest;
}

export namespace DeleteServiceProfileRequest {
  export type AsObject = {
    id: Uint8Array | string,
  }
}

export class CreateRoutingProfileRequest extends jspb.Message {
  hasRoutingProfile(): boolean;
  clearRoutingProfile(): void;
  getRoutingProfile(): ns_profiles_pb.RoutingProfile | undefined;
  setRoutingProfile(value?: ns_profiles_pb.RoutingProfile): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateRoutingProfileRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateRoutingProfileRequest): CreateRoutingProfileRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateRoutingProfileRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateRoutingProfileRequest;
  static deserializeBinaryFromReader(message: CreateRoutingProfileRequest, reader: jspb.BinaryReader): CreateRoutingProfileRequest;
}

export namespace CreateRoutingProfileRequest {
  export type AsObject = {
    routingProfile?: ns_profiles_pb.RoutingProfile.AsObject,
  }
}

export class CreateRoutingProfileResponse extends jspb.Message {
  getId(): Uint8Array | string;
  getId_asU8(): Uint8Array;
  getId_asB64(): string;
  setId(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateRoutingProfileResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateRoutingProfileResponse): CreateRoutingProfileResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateRoutingProfileResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateRoutingProfileResponse;
  static deserializeBinaryFromReader(message: CreateRoutingProfileResponse, reader: jspb.BinaryReader): CreateRoutingProfileResponse;
}

export namespace CreateRoutingProfileResponse {
  export type AsObject = {
    id: Uint8Array | string,
  }
}

export class GetRoutingProfileRequest extends jspb.Message {
  getId(): Uint8Array | string;
  getId_asU8(): Uint8Array;
  getId_asB64(): string;
  setId(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRoutingProfileRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetRoutingProfileRequest): GetRoutingProfileRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetRoutingProfileRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRoutingProfileRequest;
  static deserializeBinaryFromReader(message: GetRoutingProfileRequest, reader: jspb.BinaryReader): GetRoutingProfileRequest;
}

export namespace GetRoutingProfileRequest {
  export type AsObject = {
    id: Uint8Array | string,
  }
}

export class GetRoutingProfileResponse extends jspb.Message {
  hasRoutingProfile(): boolean;
  clearRoutingProfile(): void;
  getRoutingProfile(): ns_profiles_pb.RoutingProfile | undefined;
  setRoutingProfile(value?: ns_profiles_pb.RoutingProfile): void;

  hasCreatedAt(): boolean;
  clearCreatedAt(): void;
  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasUpdatedAt(): boolean;
  clearUpdatedAt(): void;
  getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRoutingProfileResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetRoutingProfileResponse): GetRoutingProfileResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetRoutingProfileResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRoutingProfileResponse;
  static deserializeBinaryFromReader(message: GetRoutingProfileResponse, reader: jspb.BinaryReader): GetRoutingProfileResponse;
}

export namespace GetRoutingProfileResponse {
  export type AsObject = {
    routingProfile?: ns_profiles_pb.RoutingProfile.AsObject,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class UpdateRoutingProfileRequest extends jspb.Message {
  hasRoutingProfile(): boolean;
  clearRoutingProfile(): void;
  getRoutingProfile(): ns_profiles_pb.RoutingProfile | undefined;
  setRoutingProfile(value?: ns_profiles_pb.RoutingProfile): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateRoutingProfileRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateRoutingProfileRequest): UpdateRoutingProfileRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateRoutingProfileRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateRoutingProfileRequest;
  static deserializeBinaryFromReader(message: UpdateRoutingProfileRequest, reader: jspb.BinaryReader): UpdateRoutingProfileRequest;
}

export namespace UpdateRoutingProfileRequest {
  export type AsObject = {
    routingProfile?: ns_profiles_pb.RoutingProfile.AsObject,
  }
}

export class DeleteRoutingProfileRequest extends jspb.Message {
  getId(): Uint8Array | string;
  getId_asU8(): Uint8Array;
  getId_asB64(): string;
  setId(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteRoutingProfileRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteRoutingProfileRequest): DeleteRoutingProfileRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteRoutingProfileRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteRoutingProfileRequest;
  static deserializeBinaryFromReader(message: DeleteRoutingProfileRequest, reader: jspb.BinaryReader): DeleteRoutingProfileRequest;
}

export namespace DeleteRoutingProfileRequest {
  export type AsObject = {
    id: Uint8Array | string,
  }
}

export class CreateDeviceProfileRequest extends jspb.Message {
  hasDeviceProfile(): boolean;
  clearDeviceProfile(): void;
  getDeviceProfile(): ns_profiles_pb.DeviceProfile | undefined;
  setDeviceProfile(value?: ns_profiles_pb.DeviceProfile): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateDeviceProfileRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateDeviceProfileRequest): CreateDeviceProfileRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateDeviceProfileRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateDeviceProfileRequest;
  static deserializeBinaryFromReader(message: CreateDeviceProfileRequest, reader: jspb.BinaryReader): CreateDeviceProfileRequest;
}

export namespace CreateDeviceProfileRequest {
  export type AsObject = {
    deviceProfile?: ns_profiles_pb.DeviceProfile.AsObject,
  }
}

export class CreateDeviceProfileResponse extends jspb.Message {
  getId(): Uint8Array | string;
  getId_asU8(): Uint8Array;
  getId_asB64(): string;
  setId(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateDeviceProfileResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateDeviceProfileResponse): CreateDeviceProfileResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateDeviceProfileResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateDeviceProfileResponse;
  static deserializeBinaryFromReader(message: CreateDeviceProfileResponse, reader: jspb.BinaryReader): CreateDeviceProfileResponse;
}

export namespace CreateDeviceProfileResponse {
  export type AsObject = {
    id: Uint8Array | string,
  }
}

export class GetDeviceProfileRequest extends jspb.Message {
  getId(): Uint8Array | string;
  getId_asU8(): Uint8Array;
  getId_asB64(): string;
  setId(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDeviceProfileRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetDeviceProfileRequest): GetDeviceProfileRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetDeviceProfileRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDeviceProfileRequest;
  static deserializeBinaryFromReader(message: GetDeviceProfileRequest, reader: jspb.BinaryReader): GetDeviceProfileRequest;
}

export namespace GetDeviceProfileRequest {
  export type AsObject = {
    id: Uint8Array | string,
  }
}

export class GetDeviceProfileResponse extends jspb.Message {
  hasDeviceProfile(): boolean;
  clearDeviceProfile(): void;
  getDeviceProfile(): ns_profiles_pb.DeviceProfile | undefined;
  setDeviceProfile(value?: ns_profiles_pb.DeviceProfile): void;

  hasCreatedAt(): boolean;
  clearCreatedAt(): void;
  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasUpdatedAt(): boolean;
  clearUpdatedAt(): void;
  getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDeviceProfileResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetDeviceProfileResponse): GetDeviceProfileResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetDeviceProfileResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDeviceProfileResponse;
  static deserializeBinaryFromReader(message: GetDeviceProfileResponse, reader: jspb.BinaryReader): GetDeviceProfileResponse;
}

export namespace GetDeviceProfileResponse {
  export type AsObject = {
    deviceProfile?: ns_profiles_pb.DeviceProfile.AsObject,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class UpdateDeviceProfileRequest extends jspb.Message {
  hasDeviceProfile(): boolean;
  clearDeviceProfile(): void;
  getDeviceProfile(): ns_profiles_pb.DeviceProfile | undefined;
  setDeviceProfile(value?: ns_profiles_pb.DeviceProfile): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateDeviceProfileRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateDeviceProfileRequest): UpdateDeviceProfileRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateDeviceProfileRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateDeviceProfileRequest;
  static deserializeBinaryFromReader(message: UpdateDeviceProfileRequest, reader: jspb.BinaryReader): UpdateDeviceProfileRequest;
}

export namespace UpdateDeviceProfileRequest {
  export type AsObject = {
    deviceProfile?: ns_profiles_pb.DeviceProfile.AsObject,
  }
}

export class DeleteDeviceProfileRequest extends jspb.Message {
  getId(): Uint8Array | string;
  getId_asU8(): Uint8Array;
  getId_asB64(): string;
  setId(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteDeviceProfileRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteDeviceProfileRequest): DeleteDeviceProfileRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteDeviceProfileRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteDeviceProfileRequest;
  static deserializeBinaryFromReader(message: DeleteDeviceProfileRequest, reader: jspb.BinaryReader): DeleteDeviceProfileRequest;
}

export namespace DeleteDeviceProfileRequest {
  export type AsObject = {
    id: Uint8Array | string,
  }
}

export class Device extends jspb.Message {
  getDevEui(): Uint8Array | string;
  getDevEui_asU8(): Uint8Array;
  getDevEui_asB64(): string;
  setDevEui(value: Uint8Array | string): void;

  getDeviceProfileId(): Uint8Array | string;
  getDeviceProfileId_asU8(): Uint8Array;
  getDeviceProfileId_asB64(): string;
  setDeviceProfileId(value: Uint8Array | string): void;

  getServiceProfileId(): Uint8Array | string;
  getServiceProfileId_asU8(): Uint8Array;
  getServiceProfileId_asB64(): string;
  setServiceProfileId(value: Uint8Array | string): void;

  getRoutingProfileId(): Uint8Array | string;
  getRoutingProfileId_asU8(): Uint8Array;
  getRoutingProfileId_asB64(): string;
  setRoutingProfileId(value: Uint8Array | string): void;

  getSkipFCntCheck(): boolean;
  setSkipFCntCheck(value: boolean): void;

  getReferenceAltitude(): number;
  setReferenceAltitude(value: number): void;

  getIsDisabled(): boolean;
  setIsDisabled(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Device.AsObject;
  static toObject(includeInstance: boolean, msg: Device): Device.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Device, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Device;
  static deserializeBinaryFromReader(message: Device, reader: jspb.BinaryReader): Device;
}

export namespace Device {
  export type AsObject = {
    devEui: Uint8Array | string,
    deviceProfileId: Uint8Array | string,
    serviceProfileId: Uint8Array | string,
    routingProfileId: Uint8Array | string,
    skipFCntCheck: boolean,
    referenceAltitude: number,
    isDisabled: boolean,
  }
}

export class CreateDeviceRequest extends jspb.Message {
  hasDevice(): boolean;
  clearDevice(): void;
  getDevice(): Device | undefined;
  setDevice(value?: Device): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateDeviceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateDeviceRequest): CreateDeviceRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateDeviceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateDeviceRequest;
  static deserializeBinaryFromReader(message: CreateDeviceRequest, reader: jspb.BinaryReader): CreateDeviceRequest;
}

export namespace CreateDeviceRequest {
  export type AsObject = {
    device?: Device.AsObject,
  }
}

export class GetDeviceRequest extends jspb.Message {
  getDevEui(): Uint8Array | string;
  getDevEui_asU8(): Uint8Array;
  getDevEui_asB64(): string;
  setDevEui(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDeviceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetDeviceRequest): GetDeviceRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetDeviceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDeviceRequest;
  static deserializeBinaryFromReader(message: GetDeviceRequest, reader: jspb.BinaryReader): GetDeviceRequest;
}

export namespace GetDeviceRequest {
  export type AsObject = {
    devEui: Uint8Array | string,
  }
}

export class GetDeviceResponse extends jspb.Message {
  hasDevice(): boolean;
  clearDevice(): void;
  getDevice(): Device | undefined;
  setDevice(value?: Device): void;

  hasCreatedAt(): boolean;
  clearCreatedAt(): void;
  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasUpdatedAt(): boolean;
  clearUpdatedAt(): void;
  getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDeviceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetDeviceResponse): GetDeviceResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetDeviceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDeviceResponse;
  static deserializeBinaryFromReader(message: GetDeviceResponse, reader: jspb.BinaryReader): GetDeviceResponse;
}

export namespace GetDeviceResponse {
  export type AsObject = {
    device?: Device.AsObject,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class UpdateDeviceRequest extends jspb.Message {
  hasDevice(): boolean;
  clearDevice(): void;
  getDevice(): Device | undefined;
  setDevice(value?: Device): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateDeviceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateDeviceRequest): UpdateDeviceRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateDeviceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateDeviceRequest;
  static deserializeBinaryFromReader(message: UpdateDeviceRequest, reader: jspb.BinaryReader): UpdateDeviceRequest;
}

export namespace UpdateDeviceRequest {
  export type AsObject = {
    device?: Device.AsObject,
  }
}

export class DeleteDeviceRequest extends jspb.Message {
  getDevEui(): Uint8Array | string;
  getDevEui_asU8(): Uint8Array;
  getDevEui_asB64(): string;
  setDevEui(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteDeviceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteDeviceRequest): DeleteDeviceRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteDeviceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteDeviceRequest;
  static deserializeBinaryFromReader(message: DeleteDeviceRequest, reader: jspb.BinaryReader): DeleteDeviceRequest;
}

export namespace DeleteDeviceRequest {
  export type AsObject = {
    devEui: Uint8Array | string,
  }
}

export class DeviceActivation extends jspb.Message {
  getDevEui(): Uint8Array | string;
  getDevEui_asU8(): Uint8Array;
  getDevEui_asB64(): string;
  setDevEui(value: Uint8Array | string): void;

  getDevAddr(): Uint8Array | string;
  getDevAddr_asU8(): Uint8Array;
  getDevAddr_asB64(): string;
  setDevAddr(value: Uint8Array | string): void;

  getSNwkSIntKey(): Uint8Array | string;
  getSNwkSIntKey_asU8(): Uint8Array;
  getSNwkSIntKey_asB64(): string;
  setSNwkSIntKey(value: Uint8Array | string): void;

  getFNwkSIntKey(): Uint8Array | string;
  getFNwkSIntKey_asU8(): Uint8Array;
  getFNwkSIntKey_asB64(): string;
  setFNwkSIntKey(value: Uint8Array | string): void;

  getNwkSEncKey(): Uint8Array | string;
  getNwkSEncKey_asU8(): Uint8Array;
  getNwkSEncKey_asB64(): string;
  setNwkSEncKey(value: Uint8Array | string): void;

  getFCntUp(): number;
  setFCntUp(value: number): void;

  getNFCntDown(): number;
  setNFCntDown(value: number): void;

  getAFCntDown(): number;
  setAFCntDown(value: number): void;

  getSkipFCntCheck(): boolean;
  setSkipFCntCheck(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeviceActivation.AsObject;
  static toObject(includeInstance: boolean, msg: DeviceActivation): DeviceActivation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeviceActivation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeviceActivation;
  static deserializeBinaryFromReader(message: DeviceActivation, reader: jspb.BinaryReader): DeviceActivation;
}

export namespace DeviceActivation {
  export type AsObject = {
    devEui: Uint8Array | string,
    devAddr: Uint8Array | string,
    sNwkSIntKey: Uint8Array | string,
    fNwkSIntKey: Uint8Array | string,
    nwkSEncKey: Uint8Array | string,
    fCntUp: number,
    nFCntDown: number,
    aFCntDown: number,
    skipFCntCheck: boolean,
  }
}

export class ActivateDeviceRequest extends jspb.Message {
  hasDeviceActivation(): boolean;
  clearDeviceActivation(): void;
  getDeviceActivation(): DeviceActivation | undefined;
  setDeviceActivation(value?: DeviceActivation): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ActivateDeviceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ActivateDeviceRequest): ActivateDeviceRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ActivateDeviceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ActivateDeviceRequest;
  static deserializeBinaryFromReader(message: ActivateDeviceRequest, reader: jspb.BinaryReader): ActivateDeviceRequest;
}

export namespace ActivateDeviceRequest {
  export type AsObject = {
    deviceActivation?: DeviceActivation.AsObject,
  }
}

export class DeactivateDeviceRequest extends jspb.Message {
  getDevEui(): Uint8Array | string;
  getDevEui_asU8(): Uint8Array;
  getDevEui_asB64(): string;
  setDevEui(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeactivateDeviceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeactivateDeviceRequest): DeactivateDeviceRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeactivateDeviceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeactivateDeviceRequest;
  static deserializeBinaryFromReader(message: DeactivateDeviceRequest, reader: jspb.BinaryReader): DeactivateDeviceRequest;
}

export namespace DeactivateDeviceRequest {
  export type AsObject = {
    devEui: Uint8Array | string,
  }
}

export class GetDeviceActivationRequest extends jspb.Message {
  getDevEui(): Uint8Array | string;
  getDevEui_asU8(): Uint8Array;
  getDevEui_asB64(): string;
  setDevEui(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDeviceActivationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetDeviceActivationRequest): GetDeviceActivationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetDeviceActivationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDeviceActivationRequest;
  static deserializeBinaryFromReader(message: GetDeviceActivationRequest, reader: jspb.BinaryReader): GetDeviceActivationRequest;
}

export namespace GetDeviceActivationRequest {
  export type AsObject = {
    devEui: Uint8Array | string,
  }
}

export class GetDeviceActivationResponse extends jspb.Message {
  hasDeviceActivation(): boolean;
  clearDeviceActivation(): void;
  getDeviceActivation(): DeviceActivation | undefined;
  setDeviceActivation(value?: DeviceActivation): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDeviceActivationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetDeviceActivationResponse): GetDeviceActivationResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetDeviceActivationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDeviceActivationResponse;
  static deserializeBinaryFromReader(message: GetDeviceActivationResponse, reader: jspb.BinaryReader): GetDeviceActivationResponse;
}

export namespace GetDeviceActivationResponse {
  export type AsObject = {
    deviceActivation?: DeviceActivation.AsObject,
  }
}

export class GetRandomDevAddrResponse extends jspb.Message {
  getDevAddr(): Uint8Array | string;
  getDevAddr_asU8(): Uint8Array;
  getDevAddr_asB64(): string;
  setDevAddr(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRandomDevAddrResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetRandomDevAddrResponse): GetRandomDevAddrResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetRandomDevAddrResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRandomDevAddrResponse;
  static deserializeBinaryFromReader(message: GetRandomDevAddrResponse, reader: jspb.BinaryReader): GetRandomDevAddrResponse;
}

export namespace GetRandomDevAddrResponse {
  export type AsObject = {
    devAddr: Uint8Array | string,
  }
}

export class CreateMACCommandQueueItemRequest extends jspb.Message {
  getDevEui(): Uint8Array | string;
  getDevEui_asU8(): Uint8Array;
  getDevEui_asB64(): string;
  setDevEui(value: Uint8Array | string): void;

  getCid(): number;
  setCid(value: number): void;

  clearCommandsList(): void;
  getCommandsList(): Array<Uint8Array | string>;
  getCommandsList_asU8(): Array<Uint8Array>;
  getCommandsList_asB64(): Array<string>;
  setCommandsList(value: Array<Uint8Array | string>): void;
  addCommands(value: Uint8Array | string, index?: number): Uint8Array | string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateMACCommandQueueItemRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateMACCommandQueueItemRequest): CreateMACCommandQueueItemRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateMACCommandQueueItemRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateMACCommandQueueItemRequest;
  static deserializeBinaryFromReader(message: CreateMACCommandQueueItemRequest, reader: jspb.BinaryReader): CreateMACCommandQueueItemRequest;
}

export namespace CreateMACCommandQueueItemRequest {
  export type AsObject = {
    devEui: Uint8Array | string,
    cid: number,
    commandsList: Array<Uint8Array | string>,
  }
}

export class SendProprietaryPayloadRequest extends jspb.Message {
  getMacPayload(): Uint8Array | string;
  getMacPayload_asU8(): Uint8Array;
  getMacPayload_asB64(): string;
  setMacPayload(value: Uint8Array | string): void;

  getMic(): Uint8Array | string;
  getMic_asU8(): Uint8Array;
  getMic_asB64(): string;
  setMic(value: Uint8Array | string): void;

  clearGatewayMacsList(): void;
  getGatewayMacsList(): Array<Uint8Array | string>;
  getGatewayMacsList_asU8(): Array<Uint8Array>;
  getGatewayMacsList_asB64(): Array<string>;
  setGatewayMacsList(value: Array<Uint8Array | string>): void;
  addGatewayMacs(value: Uint8Array | string, index?: number): Uint8Array | string;

  getPolarizationInversion(): boolean;
  setPolarizationInversion(value: boolean): void;

  getFrequency(): number;
  setFrequency(value: number): void;

  getDr(): number;
  setDr(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendProprietaryPayloadRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SendProprietaryPayloadRequest): SendProprietaryPayloadRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SendProprietaryPayloadRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendProprietaryPayloadRequest;
  static deserializeBinaryFromReader(message: SendProprietaryPayloadRequest, reader: jspb.BinaryReader): SendProprietaryPayloadRequest;
}

export namespace SendProprietaryPayloadRequest {
  export type AsObject = {
    macPayload: Uint8Array | string,
    mic: Uint8Array | string,
    gatewayMacsList: Array<Uint8Array | string>,
    polarizationInversion: boolean,
    frequency: number,
    dr: number,
  }
}

export class Gateway extends jspb.Message {
  getId(): Uint8Array | string;
  getId_asU8(): Uint8Array;
  getId_asB64(): string;
  setId(value: Uint8Array | string): void;

  hasLocation(): boolean;
  clearLocation(): void;
  getLocation(): common_common_pb.Location | undefined;
  setLocation(value?: common_common_pb.Location): void;

  getGatewayProfileId(): Uint8Array | string;
  getGatewayProfileId_asU8(): Uint8Array;
  getGatewayProfileId_asB64(): string;
  setGatewayProfileId(value: Uint8Array | string): void;

  clearBoardsList(): void;
  getBoardsList(): Array<GatewayBoard>;
  setBoardsList(value: Array<GatewayBoard>): void;
  addBoards(value?: GatewayBoard, index?: number): GatewayBoard;

  getRoutingProfileId(): Uint8Array | string;
  getRoutingProfileId_asU8(): Uint8Array;
  getRoutingProfileId_asB64(): string;
  setRoutingProfileId(value: Uint8Array | string): void;

  getServiceProfileId(): Uint8Array | string;
  getServiceProfileId_asU8(): Uint8Array;
  getServiceProfileId_asB64(): string;
  setServiceProfileId(value: Uint8Array | string): void;

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
    id: Uint8Array | string,
    location?: common_common_pb.Location.AsObject,
    gatewayProfileId: Uint8Array | string,
    boardsList: Array<GatewayBoard.AsObject>,
    routingProfileId: Uint8Array | string,
    serviceProfileId: Uint8Array | string,
  }
}

export class GatewayBoard extends jspb.Message {
  getFpgaId(): Uint8Array | string;
  getFpgaId_asU8(): Uint8Array;
  getFpgaId_asB64(): string;
  setFpgaId(value: Uint8Array | string): void;

  getFineTimestampKey(): Uint8Array | string;
  getFineTimestampKey_asU8(): Uint8Array;
  getFineTimestampKey_asB64(): string;
  setFineTimestampKey(value: Uint8Array | string): void;

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
    fpgaId: Uint8Array | string,
    fineTimestampKey: Uint8Array | string,
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
  getId(): Uint8Array | string;
  getId_asU8(): Uint8Array;
  getId_asB64(): string;
  setId(value: Uint8Array | string): void;

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
    id: Uint8Array | string,
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

export class DeleteGatewayRequest extends jspb.Message {
  getId(): Uint8Array | string;
  getId_asU8(): Uint8Array;
  getId_asB64(): string;
  setId(value: Uint8Array | string): void;

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
    id: Uint8Array | string,
  }
}

export class GenerateGatewayClientCertificateRequest extends jspb.Message {
  getId(): Uint8Array | string;
  getId_asU8(): Uint8Array;
  getId_asB64(): string;
  setId(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenerateGatewayClientCertificateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GenerateGatewayClientCertificateRequest): GenerateGatewayClientCertificateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GenerateGatewayClientCertificateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenerateGatewayClientCertificateRequest;
  static deserializeBinaryFromReader(message: GenerateGatewayClientCertificateRequest, reader: jspb.BinaryReader): GenerateGatewayClientCertificateRequest;
}

export namespace GenerateGatewayClientCertificateRequest {
  export type AsObject = {
    id: Uint8Array | string,
  }
}

export class GenerateGatewayClientCertificateResponse extends jspb.Message {
  getTlsCert(): Uint8Array | string;
  getTlsCert_asU8(): Uint8Array;
  getTlsCert_asB64(): string;
  setTlsCert(value: Uint8Array | string): void;

  getTlsKey(): Uint8Array | string;
  getTlsKey_asU8(): Uint8Array;
  getTlsKey_asB64(): string;
  setTlsKey(value: Uint8Array | string): void;

  getCaCert(): Uint8Array | string;
  getCaCert_asU8(): Uint8Array;
  getCaCert_asB64(): string;
  setCaCert(value: Uint8Array | string): void;

  hasExpiresAt(): boolean;
  clearExpiresAt(): void;
  getExpiresAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setExpiresAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenerateGatewayClientCertificateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GenerateGatewayClientCertificateResponse): GenerateGatewayClientCertificateResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GenerateGatewayClientCertificateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenerateGatewayClientCertificateResponse;
  static deserializeBinaryFromReader(message: GenerateGatewayClientCertificateResponse, reader: jspb.BinaryReader): GenerateGatewayClientCertificateResponse;
}

export namespace GenerateGatewayClientCertificateResponse {
  export type AsObject = {
    tlsCert: Uint8Array | string,
    tlsKey: Uint8Array | string,
    caCert: Uint8Array | string,
    expiresAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
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
  getGatewayId(): Uint8Array | string;
  getGatewayId_asU8(): Uint8Array;
  getGatewayId_asB64(): string;
  setGatewayId(value: Uint8Array | string): void;

  getInterval(): AggregationIntervalMap[keyof AggregationIntervalMap];
  setInterval(value: AggregationIntervalMap[keyof AggregationIntervalMap]): void;

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
    gatewayId: Uint8Array | string,
    interval: AggregationIntervalMap[keyof AggregationIntervalMap],
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

export class DeviceQueueItem extends jspb.Message {
  getDevEui(): Uint8Array | string;
  getDevEui_asU8(): Uint8Array;
  getDevEui_asB64(): string;
  setDevEui(value: Uint8Array | string): void;

  getFrmPayload(): Uint8Array | string;
  getFrmPayload_asU8(): Uint8Array;
  getFrmPayload_asB64(): string;
  setFrmPayload(value: Uint8Array | string): void;

  getFCnt(): number;
  setFCnt(value: number): void;

  getFPort(): number;
  setFPort(value: number): void;

  getConfirmed(): boolean;
  setConfirmed(value: boolean): void;

  getDevAddr(): Uint8Array | string;
  getDevAddr_asU8(): Uint8Array;
  getDevAddr_asB64(): string;
  setDevAddr(value: Uint8Array | string): void;

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
    devEui: Uint8Array | string,
    frmPayload: Uint8Array | string,
    fCnt: number,
    fPort: number,
    confirmed: boolean,
    devAddr: Uint8Array | string,
  }
}

export class CreateDeviceQueueItemRequest extends jspb.Message {
  hasItem(): boolean;
  clearItem(): void;
  getItem(): DeviceQueueItem | undefined;
  setItem(value?: DeviceQueueItem): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateDeviceQueueItemRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateDeviceQueueItemRequest): CreateDeviceQueueItemRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateDeviceQueueItemRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateDeviceQueueItemRequest;
  static deserializeBinaryFromReader(message: CreateDeviceQueueItemRequest, reader: jspb.BinaryReader): CreateDeviceQueueItemRequest;
}

export namespace CreateDeviceQueueItemRequest {
  export type AsObject = {
    item?: DeviceQueueItem.AsObject,
  }
}

export class FlushDeviceQueueForDevEUIRequest extends jspb.Message {
  getDevEui(): Uint8Array | string;
  getDevEui_asU8(): Uint8Array;
  getDevEui_asB64(): string;
  setDevEui(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FlushDeviceQueueForDevEUIRequest.AsObject;
  static toObject(includeInstance: boolean, msg: FlushDeviceQueueForDevEUIRequest): FlushDeviceQueueForDevEUIRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FlushDeviceQueueForDevEUIRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FlushDeviceQueueForDevEUIRequest;
  static deserializeBinaryFromReader(message: FlushDeviceQueueForDevEUIRequest, reader: jspb.BinaryReader): FlushDeviceQueueForDevEUIRequest;
}

export namespace FlushDeviceQueueForDevEUIRequest {
  export type AsObject = {
    devEui: Uint8Array | string,
  }
}

export class GetDeviceQueueItemsForDevEUIRequest extends jspb.Message {
  getDevEui(): Uint8Array | string;
  getDevEui_asU8(): Uint8Array;
  getDevEui_asB64(): string;
  setDevEui(value: Uint8Array | string): void;

  getCountOnly(): boolean;
  setCountOnly(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDeviceQueueItemsForDevEUIRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetDeviceQueueItemsForDevEUIRequest): GetDeviceQueueItemsForDevEUIRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetDeviceQueueItemsForDevEUIRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDeviceQueueItemsForDevEUIRequest;
  static deserializeBinaryFromReader(message: GetDeviceQueueItemsForDevEUIRequest, reader: jspb.BinaryReader): GetDeviceQueueItemsForDevEUIRequest;
}

export namespace GetDeviceQueueItemsForDevEUIRequest {
  export type AsObject = {
    devEui: Uint8Array | string,
    countOnly: boolean,
  }
}

export class GetDeviceQueueItemsForDevEUIResponse extends jspb.Message {
  clearItemsList(): void;
  getItemsList(): Array<DeviceQueueItem>;
  setItemsList(value: Array<DeviceQueueItem>): void;
  addItems(value?: DeviceQueueItem, index?: number): DeviceQueueItem;

  getTotalCount(): number;
  setTotalCount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDeviceQueueItemsForDevEUIResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetDeviceQueueItemsForDevEUIResponse): GetDeviceQueueItemsForDevEUIResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetDeviceQueueItemsForDevEUIResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDeviceQueueItemsForDevEUIResponse;
  static deserializeBinaryFromReader(message: GetDeviceQueueItemsForDevEUIResponse, reader: jspb.BinaryReader): GetDeviceQueueItemsForDevEUIResponse;
}

export namespace GetDeviceQueueItemsForDevEUIResponse {
  export type AsObject = {
    itemsList: Array<DeviceQueueItem.AsObject>,
    totalCount: number,
  }
}

export class GetNextDownlinkFCntForDevEUIRequest extends jspb.Message {
  getDevEui(): Uint8Array | string;
  getDevEui_asU8(): Uint8Array;
  getDevEui_asB64(): string;
  setDevEui(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetNextDownlinkFCntForDevEUIRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetNextDownlinkFCntForDevEUIRequest): GetNextDownlinkFCntForDevEUIRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetNextDownlinkFCntForDevEUIRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetNextDownlinkFCntForDevEUIRequest;
  static deserializeBinaryFromReader(message: GetNextDownlinkFCntForDevEUIRequest, reader: jspb.BinaryReader): GetNextDownlinkFCntForDevEUIRequest;
}

export namespace GetNextDownlinkFCntForDevEUIRequest {
  export type AsObject = {
    devEui: Uint8Array | string,
  }
}

export class GetNextDownlinkFCntForDevEUIResponse extends jspb.Message {
  getFCnt(): number;
  setFCnt(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetNextDownlinkFCntForDevEUIResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetNextDownlinkFCntForDevEUIResponse): GetNextDownlinkFCntForDevEUIResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetNextDownlinkFCntForDevEUIResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetNextDownlinkFCntForDevEUIResponse;
  static deserializeBinaryFromReader(message: GetNextDownlinkFCntForDevEUIResponse, reader: jspb.BinaryReader): GetNextDownlinkFCntForDevEUIResponse;
}

export namespace GetNextDownlinkFCntForDevEUIResponse {
  export type AsObject = {
    fCnt: number,
  }
}

export class UplinkFrameLog extends jspb.Message {
  getPhyPayload(): Uint8Array | string;
  getPhyPayload_asU8(): Uint8Array;
  getPhyPayload_asB64(): string;
  setPhyPayload(value: Uint8Array | string): void;

  hasTxInfo(): boolean;
  clearTxInfo(): void;
  getTxInfo(): gw_gw_pb.UplinkTXInfo | undefined;
  setTxInfo(value?: gw_gw_pb.UplinkTXInfo): void;

  clearRxInfoList(): void;
  getRxInfoList(): Array<gw_gw_pb.UplinkRXInfo>;
  setRxInfoList(value: Array<gw_gw_pb.UplinkRXInfo>): void;
  addRxInfo(value?: gw_gw_pb.UplinkRXInfo, index?: number): gw_gw_pb.UplinkRXInfo;

  getMType(): common_common_pb.MTypeMap[keyof common_common_pb.MTypeMap];
  setMType(value: common_common_pb.MTypeMap[keyof common_common_pb.MTypeMap]): void;

  getDevAddr(): Uint8Array | string;
  getDevAddr_asU8(): Uint8Array;
  getDevAddr_asB64(): string;
  setDevAddr(value: Uint8Array | string): void;

  getDevEui(): Uint8Array | string;
  getDevEui_asU8(): Uint8Array;
  getDevEui_asB64(): string;
  setDevEui(value: Uint8Array | string): void;

  hasPublishedAt(): boolean;
  clearPublishedAt(): void;
  getPublishedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setPublishedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UplinkFrameLog.AsObject;
  static toObject(includeInstance: boolean, msg: UplinkFrameLog): UplinkFrameLog.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UplinkFrameLog, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UplinkFrameLog;
  static deserializeBinaryFromReader(message: UplinkFrameLog, reader: jspb.BinaryReader): UplinkFrameLog;
}

export namespace UplinkFrameLog {
  export type AsObject = {
    phyPayload: Uint8Array | string,
    txInfo?: gw_gw_pb.UplinkTXInfo.AsObject,
    rxInfoList: Array<gw_gw_pb.UplinkRXInfo.AsObject>,
    mType: common_common_pb.MTypeMap[keyof common_common_pb.MTypeMap],
    devAddr: Uint8Array | string,
    devEui: Uint8Array | string,
    publishedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class DownlinkFrameLog extends jspb.Message {
  getPhyPayload(): Uint8Array | string;
  getPhyPayload_asU8(): Uint8Array;
  getPhyPayload_asB64(): string;
  setPhyPayload(value: Uint8Array | string): void;

  hasTxInfo(): boolean;
  clearTxInfo(): void;
  getTxInfo(): gw_gw_pb.DownlinkTXInfo | undefined;
  setTxInfo(value?: gw_gw_pb.DownlinkTXInfo): void;

  getToken(): number;
  setToken(value: number): void;

  getDownlinkId(): Uint8Array | string;
  getDownlinkId_asU8(): Uint8Array;
  getDownlinkId_asB64(): string;
  setDownlinkId(value: Uint8Array | string): void;

  getGatewayId(): Uint8Array | string;
  getGatewayId_asU8(): Uint8Array;
  getGatewayId_asB64(): string;
  setGatewayId(value: Uint8Array | string): void;

  getMType(): common_common_pb.MTypeMap[keyof common_common_pb.MTypeMap];
  setMType(value: common_common_pb.MTypeMap[keyof common_common_pb.MTypeMap]): void;

  getDevAddr(): Uint8Array | string;
  getDevAddr_asU8(): Uint8Array;
  getDevAddr_asB64(): string;
  setDevAddr(value: Uint8Array | string): void;

  getDevEui(): Uint8Array | string;
  getDevEui_asU8(): Uint8Array;
  getDevEui_asB64(): string;
  setDevEui(value: Uint8Array | string): void;

  hasPublishedAt(): boolean;
  clearPublishedAt(): void;
  getPublishedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setPublishedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DownlinkFrameLog.AsObject;
  static toObject(includeInstance: boolean, msg: DownlinkFrameLog): DownlinkFrameLog.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DownlinkFrameLog, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DownlinkFrameLog;
  static deserializeBinaryFromReader(message: DownlinkFrameLog, reader: jspb.BinaryReader): DownlinkFrameLog;
}

export namespace DownlinkFrameLog {
  export type AsObject = {
    phyPayload: Uint8Array | string,
    txInfo?: gw_gw_pb.DownlinkTXInfo.AsObject,
    token: number,
    downlinkId: Uint8Array | string,
    gatewayId: Uint8Array | string,
    mType: common_common_pb.MTypeMap[keyof common_common_pb.MTypeMap],
    devAddr: Uint8Array | string,
    devEui: Uint8Array | string,
    publishedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class StreamFrameLogsForGatewayRequest extends jspb.Message {
  getGatewayId(): Uint8Array | string;
  getGatewayId_asU8(): Uint8Array;
  getGatewayId_asB64(): string;
  setGatewayId(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamFrameLogsForGatewayRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StreamFrameLogsForGatewayRequest): StreamFrameLogsForGatewayRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StreamFrameLogsForGatewayRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamFrameLogsForGatewayRequest;
  static deserializeBinaryFromReader(message: StreamFrameLogsForGatewayRequest, reader: jspb.BinaryReader): StreamFrameLogsForGatewayRequest;
}

export namespace StreamFrameLogsForGatewayRequest {
  export type AsObject = {
    gatewayId: Uint8Array | string,
  }
}

export class StreamFrameLogsForGatewayResponse extends jspb.Message {
  hasUplinkFrameSet(): boolean;
  clearUplinkFrameSet(): void;
  getUplinkFrameSet(): UplinkFrameLog | undefined;
  setUplinkFrameSet(value?: UplinkFrameLog): void;

  hasDownlinkFrame(): boolean;
  clearDownlinkFrame(): void;
  getDownlinkFrame(): DownlinkFrameLog | undefined;
  setDownlinkFrame(value?: DownlinkFrameLog): void;

  getFrameCase(): StreamFrameLogsForGatewayResponse.FrameCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamFrameLogsForGatewayResponse.AsObject;
  static toObject(includeInstance: boolean, msg: StreamFrameLogsForGatewayResponse): StreamFrameLogsForGatewayResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StreamFrameLogsForGatewayResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamFrameLogsForGatewayResponse;
  static deserializeBinaryFromReader(message: StreamFrameLogsForGatewayResponse, reader: jspb.BinaryReader): StreamFrameLogsForGatewayResponse;
}

export namespace StreamFrameLogsForGatewayResponse {
  export type AsObject = {
    uplinkFrameSet?: UplinkFrameLog.AsObject,
    downlinkFrame?: DownlinkFrameLog.AsObject,
  }

  export enum FrameCase {
    FRAME_NOT_SET = 0,
    UPLINK_FRAME_SET = 1,
    DOWNLINK_FRAME = 2,
  }
}

export class StreamFrameLogsForDeviceRequest extends jspb.Message {
  getDevEui(): Uint8Array | string;
  getDevEui_asU8(): Uint8Array;
  getDevEui_asB64(): string;
  setDevEui(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamFrameLogsForDeviceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StreamFrameLogsForDeviceRequest): StreamFrameLogsForDeviceRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StreamFrameLogsForDeviceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamFrameLogsForDeviceRequest;
  static deserializeBinaryFromReader(message: StreamFrameLogsForDeviceRequest, reader: jspb.BinaryReader): StreamFrameLogsForDeviceRequest;
}

export namespace StreamFrameLogsForDeviceRequest {
  export type AsObject = {
    devEui: Uint8Array | string,
  }
}

export class StreamFrameLogsForDeviceResponse extends jspb.Message {
  hasUplinkFrameSet(): boolean;
  clearUplinkFrameSet(): void;
  getUplinkFrameSet(): UplinkFrameLog | undefined;
  setUplinkFrameSet(value?: UplinkFrameLog): void;

  hasDownlinkFrame(): boolean;
  clearDownlinkFrame(): void;
  getDownlinkFrame(): DownlinkFrameLog | undefined;
  setDownlinkFrame(value?: DownlinkFrameLog): void;

  getFrameCase(): StreamFrameLogsForDeviceResponse.FrameCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamFrameLogsForDeviceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: StreamFrameLogsForDeviceResponse): StreamFrameLogsForDeviceResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StreamFrameLogsForDeviceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamFrameLogsForDeviceResponse;
  static deserializeBinaryFromReader(message: StreamFrameLogsForDeviceResponse, reader: jspb.BinaryReader): StreamFrameLogsForDeviceResponse;
}

export namespace StreamFrameLogsForDeviceResponse {
  export type AsObject = {
    uplinkFrameSet?: UplinkFrameLog.AsObject,
    downlinkFrame?: DownlinkFrameLog.AsObject,
  }

  export enum FrameCase {
    FRAME_NOT_SET = 0,
    UPLINK_FRAME_SET = 1,
    DOWNLINK_FRAME = 2,
  }
}

export class GetVersionResponse extends jspb.Message {
  getVersion(): string;
  setVersion(value: string): void;

  getRegion(): common_common_pb.RegionMap[keyof common_common_pb.RegionMap];
  setRegion(value: common_common_pb.RegionMap[keyof common_common_pb.RegionMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetVersionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetVersionResponse): GetVersionResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetVersionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetVersionResponse;
  static deserializeBinaryFromReader(message: GetVersionResponse, reader: jspb.BinaryReader): GetVersionResponse;
}

export namespace GetVersionResponse {
  export type AsObject = {
    version: string,
    region: common_common_pb.RegionMap[keyof common_common_pb.RegionMap],
  }
}

export class GatewayProfile extends jspb.Message {
  getId(): Uint8Array | string;
  getId_asU8(): Uint8Array;
  getId_asB64(): string;
  setId(value: Uint8Array | string): void;

  clearChannelsList(): void;
  getChannelsList(): Array<number>;
  setChannelsList(value: Array<number>): void;
  addChannels(value: number, index?: number): number;

  clearExtraChannelsList(): void;
  getExtraChannelsList(): Array<GatewayProfileExtraChannel>;
  setExtraChannelsList(value: Array<GatewayProfileExtraChannel>): void;
  addExtraChannels(value?: GatewayProfileExtraChannel, index?: number): GatewayProfileExtraChannel;

  hasStatsInterval(): boolean;
  clearStatsInterval(): void;
  getStatsInterval(): google_protobuf_duration_pb.Duration | undefined;
  setStatsInterval(value?: google_protobuf_duration_pb.Duration): void;

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
    id: Uint8Array | string,
    channelsList: Array<number>,
    extraChannelsList: Array<GatewayProfileExtraChannel.AsObject>,
    statsInterval?: google_protobuf_duration_pb.Duration.AsObject,
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
  getId(): Uint8Array | string;
  getId_asU8(): Uint8Array;
  getId_asB64(): string;
  setId(value: Uint8Array | string): void;

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
    id: Uint8Array | string,
  }
}

export class GetGatewayProfileRequest extends jspb.Message {
  getId(): Uint8Array | string;
  getId_asU8(): Uint8Array;
  getId_asB64(): string;
  setId(value: Uint8Array | string): void;

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
    id: Uint8Array | string,
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
  getId(): Uint8Array | string;
  getId_asU8(): Uint8Array;
  getId_asB64(): string;
  setId(value: Uint8Array | string): void;

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
    id: Uint8Array | string,
  }
}

export class MulticastGroup extends jspb.Message {
  getId(): Uint8Array | string;
  getId_asU8(): Uint8Array;
  getId_asB64(): string;
  setId(value: Uint8Array | string): void;

  getMcAddr(): Uint8Array | string;
  getMcAddr_asU8(): Uint8Array;
  getMcAddr_asB64(): string;
  setMcAddr(value: Uint8Array | string): void;

  getMcNwkSKey(): Uint8Array | string;
  getMcNwkSKey_asU8(): Uint8Array;
  getMcNwkSKey_asB64(): string;
  setMcNwkSKey(value: Uint8Array | string): void;

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

  getServiceProfileId(): Uint8Array | string;
  getServiceProfileId_asU8(): Uint8Array;
  getServiceProfileId_asB64(): string;
  setServiceProfileId(value: Uint8Array | string): void;

  getRoutingProfileId(): Uint8Array | string;
  getRoutingProfileId_asU8(): Uint8Array;
  getRoutingProfileId_asB64(): string;
  setRoutingProfileId(value: Uint8Array | string): void;

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
    id: Uint8Array | string,
    mcAddr: Uint8Array | string,
    mcNwkSKey: Uint8Array | string,
    fCnt: number,
    groupType: MulticastGroupTypeMap[keyof MulticastGroupTypeMap],
    dr: number,
    frequency: number,
    pingSlotPeriod: number,
    serviceProfileId: Uint8Array | string,
    routingProfileId: Uint8Array | string,
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
  getId(): Uint8Array | string;
  getId_asU8(): Uint8Array;
  getId_asB64(): string;
  setId(value: Uint8Array | string): void;

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
    id: Uint8Array | string,
  }
}

export class GetMulticastGroupRequest extends jspb.Message {
  getId(): Uint8Array | string;
  getId_asU8(): Uint8Array;
  getId_asB64(): string;
  setId(value: Uint8Array | string): void;

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
    id: Uint8Array | string,
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
  getId(): Uint8Array | string;
  getId_asU8(): Uint8Array;
  getId_asB64(): string;
  setId(value: Uint8Array | string): void;

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
    id: Uint8Array | string,
  }
}

export class AddDeviceToMulticastGroupRequest extends jspb.Message {
  getDevEui(): Uint8Array | string;
  getDevEui_asU8(): Uint8Array;
  getDevEui_asB64(): string;
  setDevEui(value: Uint8Array | string): void;

  getMulticastGroupId(): Uint8Array | string;
  getMulticastGroupId_asU8(): Uint8Array;
  getMulticastGroupId_asB64(): string;
  setMulticastGroupId(value: Uint8Array | string): void;

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
    devEui: Uint8Array | string,
    multicastGroupId: Uint8Array | string,
  }
}

export class RemoveDeviceFromMulticastGroupRequest extends jspb.Message {
  getDevEui(): Uint8Array | string;
  getDevEui_asU8(): Uint8Array;
  getDevEui_asB64(): string;
  setDevEui(value: Uint8Array | string): void;

  getMulticastGroupId(): Uint8Array | string;
  getMulticastGroupId_asU8(): Uint8Array;
  getMulticastGroupId_asB64(): string;
  setMulticastGroupId(value: Uint8Array | string): void;

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
    devEui: Uint8Array | string,
    multicastGroupId: Uint8Array | string,
  }
}

export class MulticastQueueItem extends jspb.Message {
  getMulticastGroupId(): Uint8Array | string;
  getMulticastGroupId_asU8(): Uint8Array;
  getMulticastGroupId_asB64(): string;
  setMulticastGroupId(value: Uint8Array | string): void;

  getFCnt(): number;
  setFCnt(value: number): void;

  getFPort(): number;
  setFPort(value: number): void;

  getFrmPayload(): Uint8Array | string;
  getFrmPayload_asU8(): Uint8Array;
  getFrmPayload_asB64(): string;
  setFrmPayload(value: Uint8Array | string): void;

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
    multicastGroupId: Uint8Array | string,
    fCnt: number,
    fPort: number,
    frmPayload: Uint8Array | string,
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

export class FlushMulticastQueueForMulticastGroupRequest extends jspb.Message {
  getMulticastGroupId(): Uint8Array | string;
  getMulticastGroupId_asU8(): Uint8Array;
  getMulticastGroupId_asB64(): string;
  setMulticastGroupId(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FlushMulticastQueueForMulticastGroupRequest.AsObject;
  static toObject(includeInstance: boolean, msg: FlushMulticastQueueForMulticastGroupRequest): FlushMulticastQueueForMulticastGroupRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FlushMulticastQueueForMulticastGroupRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FlushMulticastQueueForMulticastGroupRequest;
  static deserializeBinaryFromReader(message: FlushMulticastQueueForMulticastGroupRequest, reader: jspb.BinaryReader): FlushMulticastQueueForMulticastGroupRequest;
}

export namespace FlushMulticastQueueForMulticastGroupRequest {
  export type AsObject = {
    multicastGroupId: Uint8Array | string,
  }
}

export class GetMulticastQueueItemsForMulticastGroupRequest extends jspb.Message {
  getMulticastGroupId(): Uint8Array | string;
  getMulticastGroupId_asU8(): Uint8Array;
  getMulticastGroupId_asB64(): string;
  setMulticastGroupId(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMulticastQueueItemsForMulticastGroupRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetMulticastQueueItemsForMulticastGroupRequest): GetMulticastQueueItemsForMulticastGroupRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetMulticastQueueItemsForMulticastGroupRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMulticastQueueItemsForMulticastGroupRequest;
  static deserializeBinaryFromReader(message: GetMulticastQueueItemsForMulticastGroupRequest, reader: jspb.BinaryReader): GetMulticastQueueItemsForMulticastGroupRequest;
}

export namespace GetMulticastQueueItemsForMulticastGroupRequest {
  export type AsObject = {
    multicastGroupId: Uint8Array | string,
  }
}

export class GetMulticastQueueItemsForMulticastGroupResponse extends jspb.Message {
  clearMulticastQueueItemsList(): void;
  getMulticastQueueItemsList(): Array<MulticastQueueItem>;
  setMulticastQueueItemsList(value: Array<MulticastQueueItem>): void;
  addMulticastQueueItems(value?: MulticastQueueItem, index?: number): MulticastQueueItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMulticastQueueItemsForMulticastGroupResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetMulticastQueueItemsForMulticastGroupResponse): GetMulticastQueueItemsForMulticastGroupResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetMulticastQueueItemsForMulticastGroupResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMulticastQueueItemsForMulticastGroupResponse;
  static deserializeBinaryFromReader(message: GetMulticastQueueItemsForMulticastGroupResponse, reader: jspb.BinaryReader): GetMulticastQueueItemsForMulticastGroupResponse;
}

export namespace GetMulticastQueueItemsForMulticastGroupResponse {
  export type AsObject = {
    multicastQueueItemsList: Array<MulticastQueueItem.AsObject>,
  }
}

export class GetADRAlgorithmsResponse extends jspb.Message {
  clearAdrAlgorithmsList(): void;
  getAdrAlgorithmsList(): Array<ADRAlgorithm>;
  setAdrAlgorithmsList(value: Array<ADRAlgorithm>): void;
  addAdrAlgorithms(value?: ADRAlgorithm, index?: number): ADRAlgorithm;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetADRAlgorithmsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetADRAlgorithmsResponse): GetADRAlgorithmsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetADRAlgorithmsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetADRAlgorithmsResponse;
  static deserializeBinaryFromReader(message: GetADRAlgorithmsResponse, reader: jspb.BinaryReader): GetADRAlgorithmsResponse;
}

export namespace GetADRAlgorithmsResponse {
  export type AsObject = {
    adrAlgorithmsList: Array<ADRAlgorithm.AsObject>,
  }
}

export class ADRAlgorithm extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ADRAlgorithm.AsObject;
  static toObject(includeInstance: boolean, msg: ADRAlgorithm): ADRAlgorithm.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ADRAlgorithm, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ADRAlgorithm;
  static deserializeBinaryFromReader(message: ADRAlgorithm, reader: jspb.BinaryReader): ADRAlgorithm;
}

export namespace ADRAlgorithm {
  export type AsObject = {
    id: string,
    name: string,
  }
}

export class ClearDeviceNoncesRequest extends jspb.Message {
  getDevEui(): Uint8Array | string;
  getDevEui_asU8(): Uint8Array;
  getDevEui_asB64(): string;
  setDevEui(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClearDeviceNoncesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ClearDeviceNoncesRequest): ClearDeviceNoncesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClearDeviceNoncesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClearDeviceNoncesRequest;
  static deserializeBinaryFromReader(message: ClearDeviceNoncesRequest, reader: jspb.BinaryReader): ClearDeviceNoncesRequest;
}

export namespace ClearDeviceNoncesRequest {
  export type AsObject = {
    devEui: Uint8Array | string,
  }
}

export interface RXWindowMap {
  RX1: 0;
  RX2: 1;
}

export const RXWindow: RXWindowMap;

export interface AggregationIntervalMap {
  SECOND: 0;
  MINUTE: 1;
  HOUR: 2;
  DAY: 3;
  WEEK: 4;
  MONTH: 5;
  QUARTER: 6;
  YEAR: 7;
}

export const AggregationInterval: AggregationIntervalMap;

export interface MulticastGroupTypeMap {
  CLASS_C: 0;
  CLASS_B: 1;
}

export const MulticastGroupType: MulticastGroupTypeMap;

