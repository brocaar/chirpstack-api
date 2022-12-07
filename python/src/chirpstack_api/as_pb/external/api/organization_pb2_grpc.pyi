"""
@generated by mypy-protobuf.  Do not edit manually!
isort:skip_file
"""
import abc
import google.protobuf.empty_pb2
import grpc

from .organization_pb2 import *
# OrganizationService is the service managing the organization access.
class OrganizationServiceStub:
    def __init__(self, channel: grpc.Channel) -> None: ...
    # Get organization list.
    List:grpc.UnaryUnaryMultiCallable[
        global___ListOrganizationRequest,
        global___ListOrganizationResponse] = ...

    # Get data for a particular organization.
    Get:grpc.UnaryUnaryMultiCallable[
        global___GetOrganizationRequest,
        global___GetOrganizationResponse] = ...

    # Create a new organization.
    Create:grpc.UnaryUnaryMultiCallable[
        global___CreateOrganizationRequest,
        global___CreateOrganizationResponse] = ...

    # Update an existing organization.
    Update:grpc.UnaryUnaryMultiCallable[
        global___UpdateOrganizationRequest,
        google.protobuf.empty_pb2.Empty] = ...

    # Delete an organization.
    Delete:grpc.UnaryUnaryMultiCallable[
        global___DeleteOrganizationRequest,
        google.protobuf.empty_pb2.Empty] = ...

    # Get organization's user list.
    ListUsers:grpc.UnaryUnaryMultiCallable[
        global___ListOrganizationUsersRequest,
        global___ListOrganizationUsersResponse] = ...

    # Get data for a particular organization user.
    GetUser:grpc.UnaryUnaryMultiCallable[
        global___GetOrganizationUserRequest,
        global___GetOrganizationUserResponse] = ...

    # Add a new user to an organization. The user is matched based on email, not user id.
    AddUser:grpc.UnaryUnaryMultiCallable[
        global___AddOrganizationUserRequest,
        google.protobuf.empty_pb2.Empty] = ...

    # Update a user in an organization.
    UpdateUser:grpc.UnaryUnaryMultiCallable[
        global___UpdateOrganizationUserRequest,
        google.protobuf.empty_pb2.Empty] = ...

    # Delete a user from an organization.
    DeleteUser:grpc.UnaryUnaryMultiCallable[
        global___DeleteOrganizationUserRequest,
        google.protobuf.empty_pb2.Empty] = ...


# OrganizationService is the service managing the organization access.
class OrganizationServiceServicer(metaclass=abc.ABCMeta):
    # Get organization list.
    @abc.abstractmethod
    def List(self,
        request: global___ListOrganizationRequest,
        context: grpc.ServicerContext,
    ) -> global___ListOrganizationResponse: ...

    # Get data for a particular organization.
    @abc.abstractmethod
    def Get(self,
        request: global___GetOrganizationRequest,
        context: grpc.ServicerContext,
    ) -> global___GetOrganizationResponse: ...

    # Create a new organization.
    @abc.abstractmethod
    def Create(self,
        request: global___CreateOrganizationRequest,
        context: grpc.ServicerContext,
    ) -> global___CreateOrganizationResponse: ...

    # Update an existing organization.
    @abc.abstractmethod
    def Update(self,
        request: global___UpdateOrganizationRequest,
        context: grpc.ServicerContext,
    ) -> google.protobuf.empty_pb2.Empty: ...

    # Delete an organization.
    @abc.abstractmethod
    def Delete(self,
        request: global___DeleteOrganizationRequest,
        context: grpc.ServicerContext,
    ) -> google.protobuf.empty_pb2.Empty: ...

    # Get organization's user list.
    @abc.abstractmethod
    def ListUsers(self,
        request: global___ListOrganizationUsersRequest,
        context: grpc.ServicerContext,
    ) -> global___ListOrganizationUsersResponse: ...

    # Get data for a particular organization user.
    @abc.abstractmethod
    def GetUser(self,
        request: global___GetOrganizationUserRequest,
        context: grpc.ServicerContext,
    ) -> global___GetOrganizationUserResponse: ...

    # Add a new user to an organization. The user is matched based on email, not user id.
    @abc.abstractmethod
    def AddUser(self,
        request: global___AddOrganizationUserRequest,
        context: grpc.ServicerContext,
    ) -> google.protobuf.empty_pb2.Empty: ...

    # Update a user in an organization.
    @abc.abstractmethod
    def UpdateUser(self,
        request: global___UpdateOrganizationUserRequest,
        context: grpc.ServicerContext,
    ) -> google.protobuf.empty_pb2.Empty: ...

    # Delete a user from an organization.
    @abc.abstractmethod
    def DeleteUser(self,
        request: global___DeleteOrganizationUserRequest,
        context: grpc.ServicerContext,
    ) -> google.protobuf.empty_pb2.Empty: ...


def add_OrganizationServiceServicer_to_server(servicer: OrganizationServiceServicer, server: grpc.Server) -> None: ...