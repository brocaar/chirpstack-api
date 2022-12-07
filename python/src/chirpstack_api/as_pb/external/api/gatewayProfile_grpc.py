# Generated by the Protocol Buffers compiler. DO NOT EDIT!
# source: chirpstack-api/as_pb/external/api/gatewayProfile.proto
# plugin: grpclib.plugin.main
import abc
import typing

import grpclib.const
import grpclib.client
if typing.TYPE_CHECKING:
    import grpclib.server

import google.api.annotations_pb2
import google.protobuf.timestamp_pb2
import google.protobuf.duration_pb2
import google.protobuf.empty_pb2
import chirpstack_api.common.common_pb2
import chirpstack_api.as_pb.external.api.gatewayProfile_pb2


class GatewayProfileServiceBase(abc.ABC):

    @abc.abstractmethod
    async def Create(self, stream: 'grpclib.server.Stream[chirpstack_api.as_pb.external.api.gatewayProfile_pb2.CreateGatewayProfileRequest, chirpstack_api.as_pb.external.api.gatewayProfile_pb2.CreateGatewayProfileResponse]') -> None:
        pass

    @abc.abstractmethod
    async def Get(self, stream: 'grpclib.server.Stream[chirpstack_api.as_pb.external.api.gatewayProfile_pb2.GetGatewayProfileRequest, chirpstack_api.as_pb.external.api.gatewayProfile_pb2.GetGatewayProfileResponse]') -> None:
        pass

    @abc.abstractmethod
    async def Update(self, stream: 'grpclib.server.Stream[chirpstack_api.as_pb.external.api.gatewayProfile_pb2.UpdateGatewayProfileRequest, google.protobuf.empty_pb2.Empty]') -> None:
        pass

    @abc.abstractmethod
    async def Delete(self, stream: 'grpclib.server.Stream[chirpstack_api.as_pb.external.api.gatewayProfile_pb2.DeleteGatewayProfileRequest, google.protobuf.empty_pb2.Empty]') -> None:
        pass

    @abc.abstractmethod
    async def List(self, stream: 'grpclib.server.Stream[chirpstack_api.as_pb.external.api.gatewayProfile_pb2.ListGatewayProfilesRequest, chirpstack_api.as_pb.external.api.gatewayProfile_pb2.ListGatewayProfilesResponse]') -> None:
        pass

    def __mapping__(self) -> typing.Dict[str, grpclib.const.Handler]:
        return {
            '/api.GatewayProfileService/Create': grpclib.const.Handler(
                self.Create,
                grpclib.const.Cardinality.UNARY_UNARY,
                chirpstack_api.as_pb.external.api.gatewayProfile_pb2.CreateGatewayProfileRequest,
                chirpstack_api.as_pb.external.api.gatewayProfile_pb2.CreateGatewayProfileResponse,
            ),
            '/api.GatewayProfileService/Get': grpclib.const.Handler(
                self.Get,
                grpclib.const.Cardinality.UNARY_UNARY,
                chirpstack_api.as_pb.external.api.gatewayProfile_pb2.GetGatewayProfileRequest,
                chirpstack_api.as_pb.external.api.gatewayProfile_pb2.GetGatewayProfileResponse,
            ),
            '/api.GatewayProfileService/Update': grpclib.const.Handler(
                self.Update,
                grpclib.const.Cardinality.UNARY_UNARY,
                chirpstack_api.as_pb.external.api.gatewayProfile_pb2.UpdateGatewayProfileRequest,
                google.protobuf.empty_pb2.Empty,
            ),
            '/api.GatewayProfileService/Delete': grpclib.const.Handler(
                self.Delete,
                grpclib.const.Cardinality.UNARY_UNARY,
                chirpstack_api.as_pb.external.api.gatewayProfile_pb2.DeleteGatewayProfileRequest,
                google.protobuf.empty_pb2.Empty,
            ),
            '/api.GatewayProfileService/List': grpclib.const.Handler(
                self.List,
                grpclib.const.Cardinality.UNARY_UNARY,
                chirpstack_api.as_pb.external.api.gatewayProfile_pb2.ListGatewayProfilesRequest,
                chirpstack_api.as_pb.external.api.gatewayProfile_pb2.ListGatewayProfilesResponse,
            ),
        }


class GatewayProfileServiceStub:

    def __init__(self, channel: grpclib.client.Channel) -> None:
        self.Create = grpclib.client.UnaryUnaryMethod(
            channel,
            '/api.GatewayProfileService/Create',
            chirpstack_api.as_pb.external.api.gatewayProfile_pb2.CreateGatewayProfileRequest,
            chirpstack_api.as_pb.external.api.gatewayProfile_pb2.CreateGatewayProfileResponse,
        )
        self.Get = grpclib.client.UnaryUnaryMethod(
            channel,
            '/api.GatewayProfileService/Get',
            chirpstack_api.as_pb.external.api.gatewayProfile_pb2.GetGatewayProfileRequest,
            chirpstack_api.as_pb.external.api.gatewayProfile_pb2.GetGatewayProfileResponse,
        )
        self.Update = grpclib.client.UnaryUnaryMethod(
            channel,
            '/api.GatewayProfileService/Update',
            chirpstack_api.as_pb.external.api.gatewayProfile_pb2.UpdateGatewayProfileRequest,
            google.protobuf.empty_pb2.Empty,
        )
        self.Delete = grpclib.client.UnaryUnaryMethod(
            channel,
            '/api.GatewayProfileService/Delete',
            chirpstack_api.as_pb.external.api.gatewayProfile_pb2.DeleteGatewayProfileRequest,
            google.protobuf.empty_pb2.Empty,
        )
        self.List = grpclib.client.UnaryUnaryMethod(
            channel,
            '/api.GatewayProfileService/List',
            chirpstack_api.as_pb.external.api.gatewayProfile_pb2.ListGatewayProfilesRequest,
            chirpstack_api.as_pb.external.api.gatewayProfile_pb2.ListGatewayProfilesResponse,
        )
