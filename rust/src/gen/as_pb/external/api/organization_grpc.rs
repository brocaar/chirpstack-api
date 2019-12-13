// This file is generated. Do not edit
// @generated

// https://github.com/Manishearth/rust-clippy/issues/702
#![allow(unknown_lints)]
#![allow(clippy::all)]

#![cfg_attr(rustfmt, rustfmt_skip)]

#![allow(box_pointers)]
#![allow(dead_code)]
#![allow(missing_docs)]
#![allow(non_camel_case_types)]
#![allow(non_snake_case)]
#![allow(non_upper_case_globals)]
#![allow(trivial_casts)]
#![allow(unsafe_code)]
#![allow(unused_imports)]
#![allow(unused_results)]


// interface

pub trait OrganizationService {
    fn list(&self, o: ::grpc::RequestOptions, p: super::organization::ListOrganizationRequest) -> ::grpc::SingleResponse<super::organization::ListOrganizationResponse>;

    fn get(&self, o: ::grpc::RequestOptions, p: super::organization::GetOrganizationRequest) -> ::grpc::SingleResponse<super::organization::GetOrganizationResponse>;

    fn create(&self, o: ::grpc::RequestOptions, p: super::organization::CreateOrganizationRequest) -> ::grpc::SingleResponse<super::organization::CreateOrganizationResponse>;

    fn update(&self, o: ::grpc::RequestOptions, p: super::organization::UpdateOrganizationRequest) -> ::grpc::SingleResponse<super::empty::Empty>;

    fn delete(&self, o: ::grpc::RequestOptions, p: super::organization::DeleteOrganizationRequest) -> ::grpc::SingleResponse<super::empty::Empty>;

    fn list_users(&self, o: ::grpc::RequestOptions, p: super::organization::ListOrganizationUsersRequest) -> ::grpc::SingleResponse<super::organization::ListOrganizationUsersResponse>;

    fn get_user(&self, o: ::grpc::RequestOptions, p: super::organization::GetOrganizationUserRequest) -> ::grpc::SingleResponse<super::organization::GetOrganizationUserResponse>;

    fn add_user(&self, o: ::grpc::RequestOptions, p: super::organization::AddOrganizationUserRequest) -> ::grpc::SingleResponse<super::empty::Empty>;

    fn update_user(&self, o: ::grpc::RequestOptions, p: super::organization::UpdateOrganizationUserRequest) -> ::grpc::SingleResponse<super::empty::Empty>;

    fn delete_user(&self, o: ::grpc::RequestOptions, p: super::organization::DeleteOrganizationUserRequest) -> ::grpc::SingleResponse<super::empty::Empty>;
}

// client

pub struct OrganizationServiceClient {
    grpc_client: ::std::sync::Arc<::grpc::Client>,
    method_List: ::std::sync::Arc<::grpc::rt::MethodDescriptor<super::organization::ListOrganizationRequest, super::organization::ListOrganizationResponse>>,
    method_Get: ::std::sync::Arc<::grpc::rt::MethodDescriptor<super::organization::GetOrganizationRequest, super::organization::GetOrganizationResponse>>,
    method_Create: ::std::sync::Arc<::grpc::rt::MethodDescriptor<super::organization::CreateOrganizationRequest, super::organization::CreateOrganizationResponse>>,
    method_Update: ::std::sync::Arc<::grpc::rt::MethodDescriptor<super::organization::UpdateOrganizationRequest, super::empty::Empty>>,
    method_Delete: ::std::sync::Arc<::grpc::rt::MethodDescriptor<super::organization::DeleteOrganizationRequest, super::empty::Empty>>,
    method_ListUsers: ::std::sync::Arc<::grpc::rt::MethodDescriptor<super::organization::ListOrganizationUsersRequest, super::organization::ListOrganizationUsersResponse>>,
    method_GetUser: ::std::sync::Arc<::grpc::rt::MethodDescriptor<super::organization::GetOrganizationUserRequest, super::organization::GetOrganizationUserResponse>>,
    method_AddUser: ::std::sync::Arc<::grpc::rt::MethodDescriptor<super::organization::AddOrganizationUserRequest, super::empty::Empty>>,
    method_UpdateUser: ::std::sync::Arc<::grpc::rt::MethodDescriptor<super::organization::UpdateOrganizationUserRequest, super::empty::Empty>>,
    method_DeleteUser: ::std::sync::Arc<::grpc::rt::MethodDescriptor<super::organization::DeleteOrganizationUserRequest, super::empty::Empty>>,
}

impl ::grpc::ClientStub for OrganizationServiceClient {
    fn with_client(grpc_client: ::std::sync::Arc<::grpc::Client>) -> Self {
        OrganizationServiceClient {
            grpc_client: grpc_client,
            method_List: ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                name: "/api.OrganizationService/List".to_string(),
                streaming: ::grpc::rt::GrpcStreaming::Unary,
                req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
            }),
            method_Get: ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                name: "/api.OrganizationService/Get".to_string(),
                streaming: ::grpc::rt::GrpcStreaming::Unary,
                req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
            }),
            method_Create: ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                name: "/api.OrganizationService/Create".to_string(),
                streaming: ::grpc::rt::GrpcStreaming::Unary,
                req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
            }),
            method_Update: ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                name: "/api.OrganizationService/Update".to_string(),
                streaming: ::grpc::rt::GrpcStreaming::Unary,
                req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
            }),
            method_Delete: ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                name: "/api.OrganizationService/Delete".to_string(),
                streaming: ::grpc::rt::GrpcStreaming::Unary,
                req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
            }),
            method_ListUsers: ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                name: "/api.OrganizationService/ListUsers".to_string(),
                streaming: ::grpc::rt::GrpcStreaming::Unary,
                req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
            }),
            method_GetUser: ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                name: "/api.OrganizationService/GetUser".to_string(),
                streaming: ::grpc::rt::GrpcStreaming::Unary,
                req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
            }),
            method_AddUser: ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                name: "/api.OrganizationService/AddUser".to_string(),
                streaming: ::grpc::rt::GrpcStreaming::Unary,
                req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
            }),
            method_UpdateUser: ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                name: "/api.OrganizationService/UpdateUser".to_string(),
                streaming: ::grpc::rt::GrpcStreaming::Unary,
                req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
            }),
            method_DeleteUser: ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                name: "/api.OrganizationService/DeleteUser".to_string(),
                streaming: ::grpc::rt::GrpcStreaming::Unary,
                req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
            }),
        }
    }
}

impl OrganizationService for OrganizationServiceClient {
    fn list(&self, o: ::grpc::RequestOptions, p: super::organization::ListOrganizationRequest) -> ::grpc::SingleResponse<super::organization::ListOrganizationResponse> {
        self.grpc_client.call_unary(o, p, self.method_List.clone())
    }

    fn get(&self, o: ::grpc::RequestOptions, p: super::organization::GetOrganizationRequest) -> ::grpc::SingleResponse<super::organization::GetOrganizationResponse> {
        self.grpc_client.call_unary(o, p, self.method_Get.clone())
    }

    fn create(&self, o: ::grpc::RequestOptions, p: super::organization::CreateOrganizationRequest) -> ::grpc::SingleResponse<super::organization::CreateOrganizationResponse> {
        self.grpc_client.call_unary(o, p, self.method_Create.clone())
    }

    fn update(&self, o: ::grpc::RequestOptions, p: super::organization::UpdateOrganizationRequest) -> ::grpc::SingleResponse<super::empty::Empty> {
        self.grpc_client.call_unary(o, p, self.method_Update.clone())
    }

    fn delete(&self, o: ::grpc::RequestOptions, p: super::organization::DeleteOrganizationRequest) -> ::grpc::SingleResponse<super::empty::Empty> {
        self.grpc_client.call_unary(o, p, self.method_Delete.clone())
    }

    fn list_users(&self, o: ::grpc::RequestOptions, p: super::organization::ListOrganizationUsersRequest) -> ::grpc::SingleResponse<super::organization::ListOrganizationUsersResponse> {
        self.grpc_client.call_unary(o, p, self.method_ListUsers.clone())
    }

    fn get_user(&self, o: ::grpc::RequestOptions, p: super::organization::GetOrganizationUserRequest) -> ::grpc::SingleResponse<super::organization::GetOrganizationUserResponse> {
        self.grpc_client.call_unary(o, p, self.method_GetUser.clone())
    }

    fn add_user(&self, o: ::grpc::RequestOptions, p: super::organization::AddOrganizationUserRequest) -> ::grpc::SingleResponse<super::empty::Empty> {
        self.grpc_client.call_unary(o, p, self.method_AddUser.clone())
    }

    fn update_user(&self, o: ::grpc::RequestOptions, p: super::organization::UpdateOrganizationUserRequest) -> ::grpc::SingleResponse<super::empty::Empty> {
        self.grpc_client.call_unary(o, p, self.method_UpdateUser.clone())
    }

    fn delete_user(&self, o: ::grpc::RequestOptions, p: super::organization::DeleteOrganizationUserRequest) -> ::grpc::SingleResponse<super::empty::Empty> {
        self.grpc_client.call_unary(o, p, self.method_DeleteUser.clone())
    }
}

// server

pub struct OrganizationServiceServer;


impl OrganizationServiceServer {
    pub fn new_service_def<H : OrganizationService + 'static + Sync + Send + 'static>(handler: H) -> ::grpc::rt::ServerServiceDefinition {
        let handler_arc = ::std::sync::Arc::new(handler);
        ::grpc::rt::ServerServiceDefinition::new("/api.OrganizationService",
            vec![
                ::grpc::rt::ServerMethod::new(
                    ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                        name: "/api.OrganizationService/List".to_string(),
                        streaming: ::grpc::rt::GrpcStreaming::Unary,
                        req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                        resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                    }),
                    {
                        let handler_copy = handler_arc.clone();
                        ::grpc::rt::MethodHandlerUnary::new(move |o, p| handler_copy.list(o, p))
                    },
                ),
                ::grpc::rt::ServerMethod::new(
                    ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                        name: "/api.OrganizationService/Get".to_string(),
                        streaming: ::grpc::rt::GrpcStreaming::Unary,
                        req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                        resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                    }),
                    {
                        let handler_copy = handler_arc.clone();
                        ::grpc::rt::MethodHandlerUnary::new(move |o, p| handler_copy.get(o, p))
                    },
                ),
                ::grpc::rt::ServerMethod::new(
                    ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                        name: "/api.OrganizationService/Create".to_string(),
                        streaming: ::grpc::rt::GrpcStreaming::Unary,
                        req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                        resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                    }),
                    {
                        let handler_copy = handler_arc.clone();
                        ::grpc::rt::MethodHandlerUnary::new(move |o, p| handler_copy.create(o, p))
                    },
                ),
                ::grpc::rt::ServerMethod::new(
                    ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                        name: "/api.OrganizationService/Update".to_string(),
                        streaming: ::grpc::rt::GrpcStreaming::Unary,
                        req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                        resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                    }),
                    {
                        let handler_copy = handler_arc.clone();
                        ::grpc::rt::MethodHandlerUnary::new(move |o, p| handler_copy.update(o, p))
                    },
                ),
                ::grpc::rt::ServerMethod::new(
                    ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                        name: "/api.OrganizationService/Delete".to_string(),
                        streaming: ::grpc::rt::GrpcStreaming::Unary,
                        req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                        resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                    }),
                    {
                        let handler_copy = handler_arc.clone();
                        ::grpc::rt::MethodHandlerUnary::new(move |o, p| handler_copy.delete(o, p))
                    },
                ),
                ::grpc::rt::ServerMethod::new(
                    ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                        name: "/api.OrganizationService/ListUsers".to_string(),
                        streaming: ::grpc::rt::GrpcStreaming::Unary,
                        req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                        resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                    }),
                    {
                        let handler_copy = handler_arc.clone();
                        ::grpc::rt::MethodHandlerUnary::new(move |o, p| handler_copy.list_users(o, p))
                    },
                ),
                ::grpc::rt::ServerMethod::new(
                    ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                        name: "/api.OrganizationService/GetUser".to_string(),
                        streaming: ::grpc::rt::GrpcStreaming::Unary,
                        req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                        resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                    }),
                    {
                        let handler_copy = handler_arc.clone();
                        ::grpc::rt::MethodHandlerUnary::new(move |o, p| handler_copy.get_user(o, p))
                    },
                ),
                ::grpc::rt::ServerMethod::new(
                    ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                        name: "/api.OrganizationService/AddUser".to_string(),
                        streaming: ::grpc::rt::GrpcStreaming::Unary,
                        req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                        resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                    }),
                    {
                        let handler_copy = handler_arc.clone();
                        ::grpc::rt::MethodHandlerUnary::new(move |o, p| handler_copy.add_user(o, p))
                    },
                ),
                ::grpc::rt::ServerMethod::new(
                    ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                        name: "/api.OrganizationService/UpdateUser".to_string(),
                        streaming: ::grpc::rt::GrpcStreaming::Unary,
                        req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                        resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                    }),
                    {
                        let handler_copy = handler_arc.clone();
                        ::grpc::rt::MethodHandlerUnary::new(move |o, p| handler_copy.update_user(o, p))
                    },
                ),
                ::grpc::rt::ServerMethod::new(
                    ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                        name: "/api.OrganizationService/DeleteUser".to_string(),
                        streaming: ::grpc::rt::GrpcStreaming::Unary,
                        req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                        resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                    }),
                    {
                        let handler_copy = handler_arc.clone();
                        ::grpc::rt::MethodHandlerUnary::new(move |o, p| handler_copy.delete_user(o, p))
                    },
                ),
            ],
        )
    }
}
