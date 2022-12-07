"""
@generated by mypy-protobuf.  Do not edit manually!
isort:skip_file
"""
import abc
import google.protobuf.empty_pb2
import grpc
import typing

from .ns_pb2 import *
# NetworkServerService provides the network-server API methods.
class NetworkServerServiceStub:
    def __init__(self, channel: grpc.Channel) -> None: ...
    # CreateServiceProfile creates the given service-profile.
    CreateServiceProfile:grpc.UnaryUnaryMultiCallable[
        global___CreateServiceProfileRequest,
        global___CreateServiceProfileResponse] = ...

    # GetServiceProfile returns the service-profile matching the given id.
    GetServiceProfile:grpc.UnaryUnaryMultiCallable[
        global___GetServiceProfileRequest,
        global___GetServiceProfileResponse] = ...

    # UpdateServiceProfile updates the given service-profile.
    UpdateServiceProfile:grpc.UnaryUnaryMultiCallable[
        global___UpdateServiceProfileRequest,
        google.protobuf.empty_pb2.Empty] = ...

    # DeleteServiceProfile deletes the service-profile matching the given id.
    DeleteServiceProfile:grpc.UnaryUnaryMultiCallable[
        global___DeleteServiceProfileRequest,
        google.protobuf.empty_pb2.Empty] = ...

    # CreateRoutingProfile creates the given routing-profile.
    CreateRoutingProfile:grpc.UnaryUnaryMultiCallable[
        global___CreateRoutingProfileRequest,
        global___CreateRoutingProfileResponse] = ...

    # GetRoutingProfile returns the routing-profile matching the given id.
    GetRoutingProfile:grpc.UnaryUnaryMultiCallable[
        global___GetRoutingProfileRequest,
        global___GetRoutingProfileResponse] = ...

    # UpdateRoutingProfile updates the given routing-profile.
    UpdateRoutingProfile:grpc.UnaryUnaryMultiCallable[
        global___UpdateRoutingProfileRequest,
        google.protobuf.empty_pb2.Empty] = ...

    # DeleteRoutingProfile deletes the routing-profile matching the given id.
    DeleteRoutingProfile:grpc.UnaryUnaryMultiCallable[
        global___DeleteRoutingProfileRequest,
        google.protobuf.empty_pb2.Empty] = ...

    # CreateDeviceProfile creates the given device-profile.
    CreateDeviceProfile:grpc.UnaryUnaryMultiCallable[
        global___CreateDeviceProfileRequest,
        global___CreateDeviceProfileResponse] = ...

    # GetDeviceProfile returns the device-profile matching the given id.
    GetDeviceProfile:grpc.UnaryUnaryMultiCallable[
        global___GetDeviceProfileRequest,
        global___GetDeviceProfileResponse] = ...

    # UpdateDeviceProfile updates the given device-profile.
    UpdateDeviceProfile:grpc.UnaryUnaryMultiCallable[
        global___UpdateDeviceProfileRequest,
        google.protobuf.empty_pb2.Empty] = ...

    # DeleteDeviceProfile deletes the device-profile matching the given id.
    DeleteDeviceProfile:grpc.UnaryUnaryMultiCallable[
        global___DeleteDeviceProfileRequest,
        google.protobuf.empty_pb2.Empty] = ...

    # CreateDevice creates the given device.
    CreateDevice:grpc.UnaryUnaryMultiCallable[
        global___CreateDeviceRequest,
        google.protobuf.empty_pb2.Empty] = ...

    # GetDevice returns the device matching the given DevEUI.
    GetDevice:grpc.UnaryUnaryMultiCallable[
        global___GetDeviceRequest,
        global___GetDeviceResponse] = ...

    # UpdateDevice updates the given device.
    UpdateDevice:grpc.UnaryUnaryMultiCallable[
        global___UpdateDeviceRequest,
        google.protobuf.empty_pb2.Empty] = ...

    # DeleteDevice deletes the device matching the given DevEUI.
    DeleteDevice:grpc.UnaryUnaryMultiCallable[
        global___DeleteDeviceRequest,
        google.protobuf.empty_pb2.Empty] = ...

    # ActivateDevice activates a device (ABP).
    ActivateDevice:grpc.UnaryUnaryMultiCallable[
        global___ActivateDeviceRequest,
        google.protobuf.empty_pb2.Empty] = ...

    # DeactivateDevice de-activates a device.
    DeactivateDevice:grpc.UnaryUnaryMultiCallable[
        global___DeactivateDeviceRequest,
        google.protobuf.empty_pb2.Empty] = ...

    # GetDeviceActivation returns the device activation details.
    GetDeviceActivation:grpc.UnaryUnaryMultiCallable[
        global___GetDeviceActivationRequest,
        global___GetDeviceActivationResponse] = ...

    # CreateDeviceQueueItem creates the given device-queue item.
    CreateDeviceQueueItem:grpc.UnaryUnaryMultiCallable[
        global___CreateDeviceQueueItemRequest,
        google.protobuf.empty_pb2.Empty] = ...

    # FlushDeviceQueueForDevEUI flushes the device-queue for the given DevEUI.
    FlushDeviceQueueForDevEUI:grpc.UnaryUnaryMultiCallable[
        global___FlushDeviceQueueForDevEUIRequest,
        google.protobuf.empty_pb2.Empty] = ...

    # GetDeviceQueueItemsForDevEUI returns all device-queue items for the given DevEUI.
    GetDeviceQueueItemsForDevEUI:grpc.UnaryUnaryMultiCallable[
        global___GetDeviceQueueItemsForDevEUIRequest,
        global___GetDeviceQueueItemsForDevEUIResponse] = ...

    # GetNextDownlinkFCntForDevEUI returns the next FCnt that must be used.
    # This also takes device-queue items for the given DevEUI into consideration.
    GetNextDownlinkFCntForDevEUI:grpc.UnaryUnaryMultiCallable[
        global___GetNextDownlinkFCntForDevEUIRequest,
        global___GetNextDownlinkFCntForDevEUIResponse] = ...

    # GetRandomDevAddr returns a random DevAddr taking the NwkID prefix into account.
    GetRandomDevAddr:grpc.UnaryUnaryMultiCallable[
        google.protobuf.empty_pb2.Empty,
        global___GetRandomDevAddrResponse] = ...

    # CreateMACCommandQueueItem adds the downlink mac-command to the queue.
    CreateMACCommandQueueItem:grpc.UnaryUnaryMultiCallable[
        global___CreateMACCommandQueueItemRequest,
        google.protobuf.empty_pb2.Empty] = ...

    # SendProprietaryPayload send a payload using the 'Proprietary' LoRaWAN message-type.
    SendProprietaryPayload:grpc.UnaryUnaryMultiCallable[
        global___SendProprietaryPayloadRequest,
        google.protobuf.empty_pb2.Empty] = ...

    # CreateGateway creates the given gateway.
    CreateGateway:grpc.UnaryUnaryMultiCallable[
        global___CreateGatewayRequest,
        google.protobuf.empty_pb2.Empty] = ...

    # GetGateway returns data for a particular gateway.
    GetGateway:grpc.UnaryUnaryMultiCallable[
        global___GetGatewayRequest,
        global___GetGatewayResponse] = ...

    # UpdateGateway updates an existing gateway.
    UpdateGateway:grpc.UnaryUnaryMultiCallable[
        global___UpdateGatewayRequest,
        google.protobuf.empty_pb2.Empty] = ...

    # DeleteGateway deletes a gateway.
    DeleteGateway:grpc.UnaryUnaryMultiCallable[
        global___DeleteGatewayRequest,
        google.protobuf.empty_pb2.Empty] = ...

    # GenerateGatewayClientCertificate returns TLS certificate gateway authentication / authorization.
    # This endpoint can ony be used when ChirpStack Network Server is configured with a gateway
    # CA certificate and key, which is used for signing the TLS certificate. The returned TLS
    # certificate will have the Gateway ID as Common Name.
    GenerateGatewayClientCertificate:grpc.UnaryUnaryMultiCallable[
        global___GenerateGatewayClientCertificateRequest,
        global___GenerateGatewayClientCertificateResponse] = ...

    # CreateGatewayProfile creates the given gateway-profile.
    CreateGatewayProfile:grpc.UnaryUnaryMultiCallable[
        global___CreateGatewayProfileRequest,
        global___CreateGatewayProfileResponse] = ...

    # GetGatewayProfile returns the gateway-profile given an id.
    GetGatewayProfile:grpc.UnaryUnaryMultiCallable[
        global___GetGatewayProfileRequest,
        global___GetGatewayProfileResponse] = ...

    # UpdateGatewayProfile updates the given gateway-profile.
    UpdateGatewayProfile:grpc.UnaryUnaryMultiCallable[
        global___UpdateGatewayProfileRequest,
        google.protobuf.empty_pb2.Empty] = ...

    # DeleteGatewayProfile deletes the gateway-profile matching a given id.
    DeleteGatewayProfile:grpc.UnaryUnaryMultiCallable[
        global___DeleteGatewayProfileRequest,
        google.protobuf.empty_pb2.Empty] = ...

    # GetGatewayStats returns stats of an existing gateway.
    # Deprecated (stats are forwarded to Application Server API).
    GetGatewayStats:grpc.UnaryUnaryMultiCallable[
        global___GetGatewayStatsRequest,
        global___GetGatewayStatsResponse] = ...

    # StreamFrameLogsForGateway returns a stream of frames seen by the given gateway.
    StreamFrameLogsForGateway:grpc.UnaryStreamMultiCallable[
        global___StreamFrameLogsForGatewayRequest,
        global___StreamFrameLogsForGatewayResponse] = ...

    # StreamFrameLogsForDevice returns a stream of frames seen by the given device.
    StreamFrameLogsForDevice:grpc.UnaryStreamMultiCallable[
        global___StreamFrameLogsForDeviceRequest,
        global___StreamFrameLogsForDeviceResponse] = ...

    # CreateMulticastGroup creates the given multicast-group.
    CreateMulticastGroup:grpc.UnaryUnaryMultiCallable[
        global___CreateMulticastGroupRequest,
        global___CreateMulticastGroupResponse] = ...

    # GetMulticastGroup returns the multicast-group given an id.
    GetMulticastGroup:grpc.UnaryUnaryMultiCallable[
        global___GetMulticastGroupRequest,
        global___GetMulticastGroupResponse] = ...

    # UpdateMulticastGroup updates the given multicast-group.
    UpdateMulticastGroup:grpc.UnaryUnaryMultiCallable[
        global___UpdateMulticastGroupRequest,
        google.protobuf.empty_pb2.Empty] = ...

    # DeleteMulticastGroup deletes a multicast-group given an id.
    DeleteMulticastGroup:grpc.UnaryUnaryMultiCallable[
        global___DeleteMulticastGroupRequest,
        google.protobuf.empty_pb2.Empty] = ...

    # AddDeviceToMulticastGroup adds the given device to the given multicast-group.
    AddDeviceToMulticastGroup:grpc.UnaryUnaryMultiCallable[
        global___AddDeviceToMulticastGroupRequest,
        google.protobuf.empty_pb2.Empty] = ...

    # RemoveDeviceFromMulticastGroup removes the given device from the given multicast-group.
    RemoveDeviceFromMulticastGroup:grpc.UnaryUnaryMultiCallable[
        global___RemoveDeviceFromMulticastGroupRequest,
        google.protobuf.empty_pb2.Empty] = ...

    # EnqueueMulticastQueueItem enqueues the given multicast queue-item and
    # increments the frame-counter after enqueueing.
    EnqueueMulticastQueueItem:grpc.UnaryUnaryMultiCallable[
        global___EnqueueMulticastQueueItemRequest,
        google.protobuf.empty_pb2.Empty] = ...

    # FlushMulticastQueueForMulticastGroup flushes the multicast device-queue given a multicast-group id.
    FlushMulticastQueueForMulticastGroup:grpc.UnaryUnaryMultiCallable[
        global___FlushMulticastQueueForMulticastGroupRequest,
        google.protobuf.empty_pb2.Empty] = ...

    # GetMulticastQueueItemsForMulticastGroup returns the queue-items given a multicast-group id.
    GetMulticastQueueItemsForMulticastGroup:grpc.UnaryUnaryMultiCallable[
        global___GetMulticastQueueItemsForMulticastGroupRequest,
        global___GetMulticastQueueItemsForMulticastGroupResponse] = ...

    # GetVersion returns the ChirpStack Network Server version.
    GetVersion:grpc.UnaryUnaryMultiCallable[
        google.protobuf.empty_pb2.Empty,
        global___GetVersionResponse] = ...

    # GetADRAlgorithms returns the available ADR algorithms.
    GetADRAlgorithms:grpc.UnaryUnaryMultiCallable[
        google.protobuf.empty_pb2.Empty,
        global___GetADRAlgorithmsResponse] = ...

    # ClearDeviceNonces deletes the device older activation records for the given DevEUI.
    #   * These are clear older DevNonce records from device activation records
    #   * These clears all DevNonce records but keeps latest 20 records for maintain device activation status
    ClearDeviceNonces:grpc.UnaryUnaryMultiCallable[
        global___ClearDeviceNoncesRequest,
        google.protobuf.empty_pb2.Empty] = ...


# NetworkServerService provides the network-server API methods.
class NetworkServerServiceServicer(metaclass=abc.ABCMeta):
    # CreateServiceProfile creates the given service-profile.
    @abc.abstractmethod
    def CreateServiceProfile(self,
        request: global___CreateServiceProfileRequest,
        context: grpc.ServicerContext,
    ) -> global___CreateServiceProfileResponse: ...

    # GetServiceProfile returns the service-profile matching the given id.
    @abc.abstractmethod
    def GetServiceProfile(self,
        request: global___GetServiceProfileRequest,
        context: grpc.ServicerContext,
    ) -> global___GetServiceProfileResponse: ...

    # UpdateServiceProfile updates the given service-profile.
    @abc.abstractmethod
    def UpdateServiceProfile(self,
        request: global___UpdateServiceProfileRequest,
        context: grpc.ServicerContext,
    ) -> google.protobuf.empty_pb2.Empty: ...

    # DeleteServiceProfile deletes the service-profile matching the given id.
    @abc.abstractmethod
    def DeleteServiceProfile(self,
        request: global___DeleteServiceProfileRequest,
        context: grpc.ServicerContext,
    ) -> google.protobuf.empty_pb2.Empty: ...

    # CreateRoutingProfile creates the given routing-profile.
    @abc.abstractmethod
    def CreateRoutingProfile(self,
        request: global___CreateRoutingProfileRequest,
        context: grpc.ServicerContext,
    ) -> global___CreateRoutingProfileResponse: ...

    # GetRoutingProfile returns the routing-profile matching the given id.
    @abc.abstractmethod
    def GetRoutingProfile(self,
        request: global___GetRoutingProfileRequest,
        context: grpc.ServicerContext,
    ) -> global___GetRoutingProfileResponse: ...

    # UpdateRoutingProfile updates the given routing-profile.
    @abc.abstractmethod
    def UpdateRoutingProfile(self,
        request: global___UpdateRoutingProfileRequest,
        context: grpc.ServicerContext,
    ) -> google.protobuf.empty_pb2.Empty: ...

    # DeleteRoutingProfile deletes the routing-profile matching the given id.
    @abc.abstractmethod
    def DeleteRoutingProfile(self,
        request: global___DeleteRoutingProfileRequest,
        context: grpc.ServicerContext,
    ) -> google.protobuf.empty_pb2.Empty: ...

    # CreateDeviceProfile creates the given device-profile.
    @abc.abstractmethod
    def CreateDeviceProfile(self,
        request: global___CreateDeviceProfileRequest,
        context: grpc.ServicerContext,
    ) -> global___CreateDeviceProfileResponse: ...

    # GetDeviceProfile returns the device-profile matching the given id.
    @abc.abstractmethod
    def GetDeviceProfile(self,
        request: global___GetDeviceProfileRequest,
        context: grpc.ServicerContext,
    ) -> global___GetDeviceProfileResponse: ...

    # UpdateDeviceProfile updates the given device-profile.
    @abc.abstractmethod
    def UpdateDeviceProfile(self,
        request: global___UpdateDeviceProfileRequest,
        context: grpc.ServicerContext,
    ) -> google.protobuf.empty_pb2.Empty: ...

    # DeleteDeviceProfile deletes the device-profile matching the given id.
    @abc.abstractmethod
    def DeleteDeviceProfile(self,
        request: global___DeleteDeviceProfileRequest,
        context: grpc.ServicerContext,
    ) -> google.protobuf.empty_pb2.Empty: ...

    # CreateDevice creates the given device.
    @abc.abstractmethod
    def CreateDevice(self,
        request: global___CreateDeviceRequest,
        context: grpc.ServicerContext,
    ) -> google.protobuf.empty_pb2.Empty: ...

    # GetDevice returns the device matching the given DevEUI.
    @abc.abstractmethod
    def GetDevice(self,
        request: global___GetDeviceRequest,
        context: grpc.ServicerContext,
    ) -> global___GetDeviceResponse: ...

    # UpdateDevice updates the given device.
    @abc.abstractmethod
    def UpdateDevice(self,
        request: global___UpdateDeviceRequest,
        context: grpc.ServicerContext,
    ) -> google.protobuf.empty_pb2.Empty: ...

    # DeleteDevice deletes the device matching the given DevEUI.
    @abc.abstractmethod
    def DeleteDevice(self,
        request: global___DeleteDeviceRequest,
        context: grpc.ServicerContext,
    ) -> google.protobuf.empty_pb2.Empty: ...

    # ActivateDevice activates a device (ABP).
    @abc.abstractmethod
    def ActivateDevice(self,
        request: global___ActivateDeviceRequest,
        context: grpc.ServicerContext,
    ) -> google.protobuf.empty_pb2.Empty: ...

    # DeactivateDevice de-activates a device.
    @abc.abstractmethod
    def DeactivateDevice(self,
        request: global___DeactivateDeviceRequest,
        context: grpc.ServicerContext,
    ) -> google.protobuf.empty_pb2.Empty: ...

    # GetDeviceActivation returns the device activation details.
    @abc.abstractmethod
    def GetDeviceActivation(self,
        request: global___GetDeviceActivationRequest,
        context: grpc.ServicerContext,
    ) -> global___GetDeviceActivationResponse: ...

    # CreateDeviceQueueItem creates the given device-queue item.
    @abc.abstractmethod
    def CreateDeviceQueueItem(self,
        request: global___CreateDeviceQueueItemRequest,
        context: grpc.ServicerContext,
    ) -> google.protobuf.empty_pb2.Empty: ...

    # FlushDeviceQueueForDevEUI flushes the device-queue for the given DevEUI.
    @abc.abstractmethod
    def FlushDeviceQueueForDevEUI(self,
        request: global___FlushDeviceQueueForDevEUIRequest,
        context: grpc.ServicerContext,
    ) -> google.protobuf.empty_pb2.Empty: ...

    # GetDeviceQueueItemsForDevEUI returns all device-queue items for the given DevEUI.
    @abc.abstractmethod
    def GetDeviceQueueItemsForDevEUI(self,
        request: global___GetDeviceQueueItemsForDevEUIRequest,
        context: grpc.ServicerContext,
    ) -> global___GetDeviceQueueItemsForDevEUIResponse: ...

    # GetNextDownlinkFCntForDevEUI returns the next FCnt that must be used.
    # This also takes device-queue items for the given DevEUI into consideration.
    @abc.abstractmethod
    def GetNextDownlinkFCntForDevEUI(self,
        request: global___GetNextDownlinkFCntForDevEUIRequest,
        context: grpc.ServicerContext,
    ) -> global___GetNextDownlinkFCntForDevEUIResponse: ...

    # GetRandomDevAddr returns a random DevAddr taking the NwkID prefix into account.
    @abc.abstractmethod
    def GetRandomDevAddr(self,
        request: google.protobuf.empty_pb2.Empty,
        context: grpc.ServicerContext,
    ) -> global___GetRandomDevAddrResponse: ...

    # CreateMACCommandQueueItem adds the downlink mac-command to the queue.
    @abc.abstractmethod
    def CreateMACCommandQueueItem(self,
        request: global___CreateMACCommandQueueItemRequest,
        context: grpc.ServicerContext,
    ) -> google.protobuf.empty_pb2.Empty: ...

    # SendProprietaryPayload send a payload using the 'Proprietary' LoRaWAN message-type.
    @abc.abstractmethod
    def SendProprietaryPayload(self,
        request: global___SendProprietaryPayloadRequest,
        context: grpc.ServicerContext,
    ) -> google.protobuf.empty_pb2.Empty: ...

    # CreateGateway creates the given gateway.
    @abc.abstractmethod
    def CreateGateway(self,
        request: global___CreateGatewayRequest,
        context: grpc.ServicerContext,
    ) -> google.protobuf.empty_pb2.Empty: ...

    # GetGateway returns data for a particular gateway.
    @abc.abstractmethod
    def GetGateway(self,
        request: global___GetGatewayRequest,
        context: grpc.ServicerContext,
    ) -> global___GetGatewayResponse: ...

    # UpdateGateway updates an existing gateway.
    @abc.abstractmethod
    def UpdateGateway(self,
        request: global___UpdateGatewayRequest,
        context: grpc.ServicerContext,
    ) -> google.protobuf.empty_pb2.Empty: ...

    # DeleteGateway deletes a gateway.
    @abc.abstractmethod
    def DeleteGateway(self,
        request: global___DeleteGatewayRequest,
        context: grpc.ServicerContext,
    ) -> google.protobuf.empty_pb2.Empty: ...

    # GenerateGatewayClientCertificate returns TLS certificate gateway authentication / authorization.
    # This endpoint can ony be used when ChirpStack Network Server is configured with a gateway
    # CA certificate and key, which is used for signing the TLS certificate. The returned TLS
    # certificate will have the Gateway ID as Common Name.
    @abc.abstractmethod
    def GenerateGatewayClientCertificate(self,
        request: global___GenerateGatewayClientCertificateRequest,
        context: grpc.ServicerContext,
    ) -> global___GenerateGatewayClientCertificateResponse: ...

    # CreateGatewayProfile creates the given gateway-profile.
    @abc.abstractmethod
    def CreateGatewayProfile(self,
        request: global___CreateGatewayProfileRequest,
        context: grpc.ServicerContext,
    ) -> global___CreateGatewayProfileResponse: ...

    # GetGatewayProfile returns the gateway-profile given an id.
    @abc.abstractmethod
    def GetGatewayProfile(self,
        request: global___GetGatewayProfileRequest,
        context: grpc.ServicerContext,
    ) -> global___GetGatewayProfileResponse: ...

    # UpdateGatewayProfile updates the given gateway-profile.
    @abc.abstractmethod
    def UpdateGatewayProfile(self,
        request: global___UpdateGatewayProfileRequest,
        context: grpc.ServicerContext,
    ) -> google.protobuf.empty_pb2.Empty: ...

    # DeleteGatewayProfile deletes the gateway-profile matching a given id.
    @abc.abstractmethod
    def DeleteGatewayProfile(self,
        request: global___DeleteGatewayProfileRequest,
        context: grpc.ServicerContext,
    ) -> google.protobuf.empty_pb2.Empty: ...

    # GetGatewayStats returns stats of an existing gateway.
    # Deprecated (stats are forwarded to Application Server API).
    @abc.abstractmethod
    def GetGatewayStats(self,
        request: global___GetGatewayStatsRequest,
        context: grpc.ServicerContext,
    ) -> global___GetGatewayStatsResponse: ...

    # StreamFrameLogsForGateway returns a stream of frames seen by the given gateway.
    @abc.abstractmethod
    def StreamFrameLogsForGateway(self,
        request: global___StreamFrameLogsForGatewayRequest,
        context: grpc.ServicerContext,
    ) -> typing.Iterator[global___StreamFrameLogsForGatewayResponse]: ...

    # StreamFrameLogsForDevice returns a stream of frames seen by the given device.
    @abc.abstractmethod
    def StreamFrameLogsForDevice(self,
        request: global___StreamFrameLogsForDeviceRequest,
        context: grpc.ServicerContext,
    ) -> typing.Iterator[global___StreamFrameLogsForDeviceResponse]: ...

    # CreateMulticastGroup creates the given multicast-group.
    @abc.abstractmethod
    def CreateMulticastGroup(self,
        request: global___CreateMulticastGroupRequest,
        context: grpc.ServicerContext,
    ) -> global___CreateMulticastGroupResponse: ...

    # GetMulticastGroup returns the multicast-group given an id.
    @abc.abstractmethod
    def GetMulticastGroup(self,
        request: global___GetMulticastGroupRequest,
        context: grpc.ServicerContext,
    ) -> global___GetMulticastGroupResponse: ...

    # UpdateMulticastGroup updates the given multicast-group.
    @abc.abstractmethod
    def UpdateMulticastGroup(self,
        request: global___UpdateMulticastGroupRequest,
        context: grpc.ServicerContext,
    ) -> google.protobuf.empty_pb2.Empty: ...

    # DeleteMulticastGroup deletes a multicast-group given an id.
    @abc.abstractmethod
    def DeleteMulticastGroup(self,
        request: global___DeleteMulticastGroupRequest,
        context: grpc.ServicerContext,
    ) -> google.protobuf.empty_pb2.Empty: ...

    # AddDeviceToMulticastGroup adds the given device to the given multicast-group.
    @abc.abstractmethod
    def AddDeviceToMulticastGroup(self,
        request: global___AddDeviceToMulticastGroupRequest,
        context: grpc.ServicerContext,
    ) -> google.protobuf.empty_pb2.Empty: ...

    # RemoveDeviceFromMulticastGroup removes the given device from the given multicast-group.
    @abc.abstractmethod
    def RemoveDeviceFromMulticastGroup(self,
        request: global___RemoveDeviceFromMulticastGroupRequest,
        context: grpc.ServicerContext,
    ) -> google.protobuf.empty_pb2.Empty: ...

    # EnqueueMulticastQueueItem enqueues the given multicast queue-item and
    # increments the frame-counter after enqueueing.
    @abc.abstractmethod
    def EnqueueMulticastQueueItem(self,
        request: global___EnqueueMulticastQueueItemRequest,
        context: grpc.ServicerContext,
    ) -> google.protobuf.empty_pb2.Empty: ...

    # FlushMulticastQueueForMulticastGroup flushes the multicast device-queue given a multicast-group id.
    @abc.abstractmethod
    def FlushMulticastQueueForMulticastGroup(self,
        request: global___FlushMulticastQueueForMulticastGroupRequest,
        context: grpc.ServicerContext,
    ) -> google.protobuf.empty_pb2.Empty: ...

    # GetMulticastQueueItemsForMulticastGroup returns the queue-items given a multicast-group id.
    @abc.abstractmethod
    def GetMulticastQueueItemsForMulticastGroup(self,
        request: global___GetMulticastQueueItemsForMulticastGroupRequest,
        context: grpc.ServicerContext,
    ) -> global___GetMulticastQueueItemsForMulticastGroupResponse: ...

    # GetVersion returns the ChirpStack Network Server version.
    @abc.abstractmethod
    def GetVersion(self,
        request: google.protobuf.empty_pb2.Empty,
        context: grpc.ServicerContext,
    ) -> global___GetVersionResponse: ...

    # GetADRAlgorithms returns the available ADR algorithms.
    @abc.abstractmethod
    def GetADRAlgorithms(self,
        request: google.protobuf.empty_pb2.Empty,
        context: grpc.ServicerContext,
    ) -> global___GetADRAlgorithmsResponse: ...

    # ClearDeviceNonces deletes the device older activation records for the given DevEUI.
    #   * These are clear older DevNonce records from device activation records
    #   * These clears all DevNonce records but keeps latest 20 records for maintain device activation status
    @abc.abstractmethod
    def ClearDeviceNonces(self,
        request: global___ClearDeviceNoncesRequest,
        context: grpc.ServicerContext,
    ) -> google.protobuf.empty_pb2.Empty: ...


def add_NetworkServerServiceServicer_to_server(servicer: NetworkServerServiceServicer, server: grpc.Server) -> None: ...
