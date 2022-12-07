"""
@generated by mypy-protobuf.  Do not edit manually!
isort:skip_file
"""
import abc
import google.protobuf.empty_pb2
import grpc
import typing

from .device_pb2 import *
# DeviceService is the service managing the devices.
class DeviceServiceStub:
    def __init__(self, channel: grpc.Channel) -> None: ...
    # Create creates the given device.
    Create:grpc.UnaryUnaryMultiCallable[
        global___CreateDeviceRequest,
        google.protobuf.empty_pb2.Empty] = ...

    # Get returns the device matching the given DevEUI.
    Get:grpc.UnaryUnaryMultiCallable[
        global___GetDeviceRequest,
        global___GetDeviceResponse] = ...

    # List returns the available devices.
    List:grpc.UnaryUnaryMultiCallable[
        global___ListDeviceRequest,
        global___ListDeviceResponse] = ...

    # Delete deletes the device matching the given DevEUI.
    Delete:grpc.UnaryUnaryMultiCallable[
        global___DeleteDeviceRequest,
        google.protobuf.empty_pb2.Empty] = ...

    # Update updates the device matching the given DevEUI.
    Update:grpc.UnaryUnaryMultiCallable[
        global___UpdateDeviceRequest,
        google.protobuf.empty_pb2.Empty] = ...

    # CreateKeys creates the given device-keys.
    CreateKeys:grpc.UnaryUnaryMultiCallable[
        global___CreateDeviceKeysRequest,
        google.protobuf.empty_pb2.Empty] = ...

    # GetKeys returns the device-keys for the given DevEUI.
    GetKeys:grpc.UnaryUnaryMultiCallable[
        global___GetDeviceKeysRequest,
        global___GetDeviceKeysResponse] = ...

    # UpdateKeys updates the device-keys.
    UpdateKeys:grpc.UnaryUnaryMultiCallable[
        global___UpdateDeviceKeysRequest,
        google.protobuf.empty_pb2.Empty] = ...

    # DeleteKeys deletes the device-keys for the given DevEUI.
    DeleteKeys:grpc.UnaryUnaryMultiCallable[
        global___DeleteDeviceKeysRequest,
        google.protobuf.empty_pb2.Empty] = ...

    # Activate (re)activates the device with the given parameters (for ABP or for importing OTAA activations).
    Activate:grpc.UnaryUnaryMultiCallable[
        global___ActivateDeviceRequest,
        google.protobuf.empty_pb2.Empty] = ...

    # Deactivate de-activates the device.
    Deactivate:grpc.UnaryUnaryMultiCallable[
        global___DeactivateDeviceRequest,
        google.protobuf.empty_pb2.Empty] = ...

    # GetActivation returns the current activation details of the device (OTAA and ABP).
    GetActivation:grpc.UnaryUnaryMultiCallable[
        global___GetDeviceActivationRequest,
        global___GetDeviceActivationResponse] = ...

    # GetRandomDevAddr returns a random DevAddr taking the NwkID prefix into account.
    GetRandomDevAddr:grpc.UnaryUnaryMultiCallable[
        global___GetRandomDevAddrRequest,
        global___GetRandomDevAddrResponse] = ...

    # GetStats returns the device stats.
    GetStats:grpc.UnaryUnaryMultiCallable[
        global___GetDeviceStatsRequest,
        global___GetDeviceStatsResponse] = ...

    # StreamFrameLogs streams the uplink and downlink frame-logs for the given DevEUI.
    #   * These are the raw LoRaWAN frames and this endpoint is intended for debugging only.
    #   * This endpoint does not work from a web-browser.
    StreamFrameLogs:grpc.UnaryStreamMultiCallable[
        global___StreamDeviceFrameLogsRequest,
        global___StreamDeviceFrameLogsResponse] = ...

    # StreamEventLogs stream the device events (uplink payloads, ACKs, joins, errors).
    #   * This endpoint is intended for debugging only.
    #   * This endpoint does not work from a web-browser.
    StreamEventLogs:grpc.UnaryStreamMultiCallable[
        global___StreamDeviceEventLogsRequest,
        global___StreamDeviceEventLogsResponse] = ...

    # ClearDeviceNonces deletes the device older activation records for the given DevEUI.
    #   * These are clear older DevNonce records from device activation records in Network Server
    #   * These clears all DevNonce records but keeps latest 20 records for maintain device activation status
    ClearDeviceNonces:grpc.UnaryUnaryMultiCallable[
        global___ClearDeviceNoncesRequest,
        google.protobuf.empty_pb2.Empty] = ...


# DeviceService is the service managing the devices.
class DeviceServiceServicer(metaclass=abc.ABCMeta):
    # Create creates the given device.
    @abc.abstractmethod
    def Create(self,
        request: global___CreateDeviceRequest,
        context: grpc.ServicerContext,
    ) -> google.protobuf.empty_pb2.Empty: ...

    # Get returns the device matching the given DevEUI.
    @abc.abstractmethod
    def Get(self,
        request: global___GetDeviceRequest,
        context: grpc.ServicerContext,
    ) -> global___GetDeviceResponse: ...

    # List returns the available devices.
    @abc.abstractmethod
    def List(self,
        request: global___ListDeviceRequest,
        context: grpc.ServicerContext,
    ) -> global___ListDeviceResponse: ...

    # Delete deletes the device matching the given DevEUI.
    @abc.abstractmethod
    def Delete(self,
        request: global___DeleteDeviceRequest,
        context: grpc.ServicerContext,
    ) -> google.protobuf.empty_pb2.Empty: ...

    # Update updates the device matching the given DevEUI.
    @abc.abstractmethod
    def Update(self,
        request: global___UpdateDeviceRequest,
        context: grpc.ServicerContext,
    ) -> google.protobuf.empty_pb2.Empty: ...

    # CreateKeys creates the given device-keys.
    @abc.abstractmethod
    def CreateKeys(self,
        request: global___CreateDeviceKeysRequest,
        context: grpc.ServicerContext,
    ) -> google.protobuf.empty_pb2.Empty: ...

    # GetKeys returns the device-keys for the given DevEUI.
    @abc.abstractmethod
    def GetKeys(self,
        request: global___GetDeviceKeysRequest,
        context: grpc.ServicerContext,
    ) -> global___GetDeviceKeysResponse: ...

    # UpdateKeys updates the device-keys.
    @abc.abstractmethod
    def UpdateKeys(self,
        request: global___UpdateDeviceKeysRequest,
        context: grpc.ServicerContext,
    ) -> google.protobuf.empty_pb2.Empty: ...

    # DeleteKeys deletes the device-keys for the given DevEUI.
    @abc.abstractmethod
    def DeleteKeys(self,
        request: global___DeleteDeviceKeysRequest,
        context: grpc.ServicerContext,
    ) -> google.protobuf.empty_pb2.Empty: ...

    # Activate (re)activates the device with the given parameters (for ABP or for importing OTAA activations).
    @abc.abstractmethod
    def Activate(self,
        request: global___ActivateDeviceRequest,
        context: grpc.ServicerContext,
    ) -> google.protobuf.empty_pb2.Empty: ...

    # Deactivate de-activates the device.
    @abc.abstractmethod
    def Deactivate(self,
        request: global___DeactivateDeviceRequest,
        context: grpc.ServicerContext,
    ) -> google.protobuf.empty_pb2.Empty: ...

    # GetActivation returns the current activation details of the device (OTAA and ABP).
    @abc.abstractmethod
    def GetActivation(self,
        request: global___GetDeviceActivationRequest,
        context: grpc.ServicerContext,
    ) -> global___GetDeviceActivationResponse: ...

    # GetRandomDevAddr returns a random DevAddr taking the NwkID prefix into account.
    @abc.abstractmethod
    def GetRandomDevAddr(self,
        request: global___GetRandomDevAddrRequest,
        context: grpc.ServicerContext,
    ) -> global___GetRandomDevAddrResponse: ...

    # GetStats returns the device stats.
    @abc.abstractmethod
    def GetStats(self,
        request: global___GetDeviceStatsRequest,
        context: grpc.ServicerContext,
    ) -> global___GetDeviceStatsResponse: ...

    # StreamFrameLogs streams the uplink and downlink frame-logs for the given DevEUI.
    #   * These are the raw LoRaWAN frames and this endpoint is intended for debugging only.
    #   * This endpoint does not work from a web-browser.
    @abc.abstractmethod
    def StreamFrameLogs(self,
        request: global___StreamDeviceFrameLogsRequest,
        context: grpc.ServicerContext,
    ) -> typing.Iterator[global___StreamDeviceFrameLogsResponse]: ...

    # StreamEventLogs stream the device events (uplink payloads, ACKs, joins, errors).
    #   * This endpoint is intended for debugging only.
    #   * This endpoint does not work from a web-browser.
    @abc.abstractmethod
    def StreamEventLogs(self,
        request: global___StreamDeviceEventLogsRequest,
        context: grpc.ServicerContext,
    ) -> typing.Iterator[global___StreamDeviceEventLogsResponse]: ...

    # ClearDeviceNonces deletes the device older activation records for the given DevEUI.
    #   * These are clear older DevNonce records from device activation records in Network Server
    #   * These clears all DevNonce records but keeps latest 20 records for maintain device activation status
    @abc.abstractmethod
    def ClearDeviceNonces(self,
        request: global___ClearDeviceNoncesRequest,
        context: grpc.ServicerContext,
    ) -> google.protobuf.empty_pb2.Empty: ...


def add_DeviceServiceServicer_to_server(servicer: DeviceServiceServicer, server: grpc.Server) -> None: ...
