# Generated by the Protocol Buffers compiler. DO NOT EDIT!
# source: chirpstack-api/as_pb/external/api/serviceProfile.proto
# plugin: grpclib.plugin.main
import abc
import typing

import grpclib.const
import grpclib.client
if typing.TYPE_CHECKING:
    import grpclib.server

import google.api.annotations_pb2
import google.protobuf.timestamp_pb2
import google.protobuf.empty_pb2
import chirpstack_api.as_pb.external.api.profiles_pb2
import chirpstack_api.as_pb.external.api.serviceProfile_pb2


class ServiceProfileServiceBase(abc.ABC):

    @abc.abstractmethod
    async def Create(self, stream: 'grpclib.server.Stream[chirpstack_api.as_pb.external.api.serviceProfile_pb2.CreateServiceProfileRequest, chirpstack_api.as_pb.external.api.serviceProfile_pb2.CreateServiceProfileResponse]') -> None:
        pass

    @abc.abstractmethod
    async def Get(self, stream: 'grpclib.server.Stream[chirpstack_api.as_pb.external.api.serviceProfile_pb2.GetServiceProfileRequest, chirpstack_api.as_pb.external.api.serviceProfile_pb2.GetServiceProfileResponse]') -> None:
        pass

    @abc.abstractmethod
    async def Update(self, stream: 'grpclib.server.Stream[chirpstack_api.as_pb.external.api.serviceProfile_pb2.UpdateServiceProfileRequest, google.protobuf.empty_pb2.Empty]') -> None:
        pass

    @abc.abstractmethod
    async def Delete(self, stream: 'grpclib.server.Stream[chirpstack_api.as_pb.external.api.serviceProfile_pb2.DeleteServiceProfileRequest, google.protobuf.empty_pb2.Empty]') -> None:
        pass

    @abc.abstractmethod
    async def List(self, stream: 'grpclib.server.Stream[chirpstack_api.as_pb.external.api.serviceProfile_pb2.ListServiceProfileRequest, chirpstack_api.as_pb.external.api.serviceProfile_pb2.ListServiceProfileResponse]') -> None:
        pass

    def __mapping__(self) -> typing.Dict[str, grpclib.const.Handler]:
        return {
            '/api.ServiceProfileService/Create': grpclib.const.Handler(
                self.Create,
                grpclib.const.Cardinality.UNARY_UNARY,
                chirpstack_api.as_pb.external.api.serviceProfile_pb2.CreateServiceProfileRequest,
                chirpstack_api.as_pb.external.api.serviceProfile_pb2.CreateServiceProfileResponse,
            ),
            '/api.ServiceProfileService/Get': grpclib.const.Handler(
                self.Get,
                grpclib.const.Cardinality.UNARY_UNARY,
                chirpstack_api.as_pb.external.api.serviceProfile_pb2.GetServiceProfileRequest,
                chirpstack_api.as_pb.external.api.serviceProfile_pb2.GetServiceProfileResponse,
            ),
            '/api.ServiceProfileService/Update': grpclib.const.Handler(
                self.Update,
                grpclib.const.Cardinality.UNARY_UNARY,
                chirpstack_api.as_pb.external.api.serviceProfile_pb2.UpdateServiceProfileRequest,
                google.protobuf.empty_pb2.Empty,
            ),
            '/api.ServiceProfileService/Delete': grpclib.const.Handler(
                self.Delete,
                grpclib.const.Cardinality.UNARY_UNARY,
                chirpstack_api.as_pb.external.api.serviceProfile_pb2.DeleteServiceProfileRequest,
                google.protobuf.empty_pb2.Empty,
            ),
            '/api.ServiceProfileService/List': grpclib.const.Handler(
                self.List,
                grpclib.const.Cardinality.UNARY_UNARY,
                chirpstack_api.as_pb.external.api.serviceProfile_pb2.ListServiceProfileRequest,
                chirpstack_api.as_pb.external.api.serviceProfile_pb2.ListServiceProfileResponse,
            ),
        }


class ServiceProfileServiceStub:

    def __init__(self, channel: grpclib.client.Channel) -> None:
        self.Create = grpclib.client.UnaryUnaryMethod(
            channel,
            '/api.ServiceProfileService/Create',
            chirpstack_api.as_pb.external.api.serviceProfile_pb2.CreateServiceProfileRequest,
            chirpstack_api.as_pb.external.api.serviceProfile_pb2.CreateServiceProfileResponse,
        )
        self.Get = grpclib.client.UnaryUnaryMethod(
            channel,
            '/api.ServiceProfileService/Get',
            chirpstack_api.as_pb.external.api.serviceProfile_pb2.GetServiceProfileRequest,
            chirpstack_api.as_pb.external.api.serviceProfile_pb2.GetServiceProfileResponse,
        )
        self.Update = grpclib.client.UnaryUnaryMethod(
            channel,
            '/api.ServiceProfileService/Update',
            chirpstack_api.as_pb.external.api.serviceProfile_pb2.UpdateServiceProfileRequest,
            google.protobuf.empty_pb2.Empty,
        )
        self.Delete = grpclib.client.UnaryUnaryMethod(
            channel,
            '/api.ServiceProfileService/Delete',
            chirpstack_api.as_pb.external.api.serviceProfile_pb2.DeleteServiceProfileRequest,
            google.protobuf.empty_pb2.Empty,
        )
        self.List = grpclib.client.UnaryUnaryMethod(
            channel,
            '/api.ServiceProfileService/List',
            chirpstack_api.as_pb.external.api.serviceProfile_pb2.ListServiceProfileRequest,
            chirpstack_api.as_pb.external.api.serviceProfile_pb2.ListServiceProfileResponse,
        )
