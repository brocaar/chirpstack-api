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

pub trait UserService {
    fn list(&self, o: ::grpc::RequestOptions, p: super::user::ListUserRequest) -> ::grpc::SingleResponse<super::user::ListUserResponse>;

    fn get(&self, o: ::grpc::RequestOptions, p: super::user::GetUserRequest) -> ::grpc::SingleResponse<super::user::GetUserResponse>;

    fn create(&self, o: ::grpc::RequestOptions, p: super::user::CreateUserRequest) -> ::grpc::SingleResponse<super::user::CreateUserResponse>;

    fn update(&self, o: ::grpc::RequestOptions, p: super::user::UpdateUserRequest) -> ::grpc::SingleResponse<super::empty::Empty>;

    fn delete(&self, o: ::grpc::RequestOptions, p: super::user::DeleteUserRequest) -> ::grpc::SingleResponse<super::empty::Empty>;

    fn update_password(&self, o: ::grpc::RequestOptions, p: super::user::UpdateUserPasswordRequest) -> ::grpc::SingleResponse<super::empty::Empty>;
}

// client

pub struct UserServiceClient {
    grpc_client: ::std::sync::Arc<::grpc::Client>,
    method_List: ::std::sync::Arc<::grpc::rt::MethodDescriptor<super::user::ListUserRequest, super::user::ListUserResponse>>,
    method_Get: ::std::sync::Arc<::grpc::rt::MethodDescriptor<super::user::GetUserRequest, super::user::GetUserResponse>>,
    method_Create: ::std::sync::Arc<::grpc::rt::MethodDescriptor<super::user::CreateUserRequest, super::user::CreateUserResponse>>,
    method_Update: ::std::sync::Arc<::grpc::rt::MethodDescriptor<super::user::UpdateUserRequest, super::empty::Empty>>,
    method_Delete: ::std::sync::Arc<::grpc::rt::MethodDescriptor<super::user::DeleteUserRequest, super::empty::Empty>>,
    method_UpdatePassword: ::std::sync::Arc<::grpc::rt::MethodDescriptor<super::user::UpdateUserPasswordRequest, super::empty::Empty>>,
}

impl ::grpc::ClientStub for UserServiceClient {
    fn with_client(grpc_client: ::std::sync::Arc<::grpc::Client>) -> Self {
        UserServiceClient {
            grpc_client: grpc_client,
            method_List: ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                name: "/api.UserService/List".to_string(),
                streaming: ::grpc::rt::GrpcStreaming::Unary,
                req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
            }),
            method_Get: ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                name: "/api.UserService/Get".to_string(),
                streaming: ::grpc::rt::GrpcStreaming::Unary,
                req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
            }),
            method_Create: ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                name: "/api.UserService/Create".to_string(),
                streaming: ::grpc::rt::GrpcStreaming::Unary,
                req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
            }),
            method_Update: ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                name: "/api.UserService/Update".to_string(),
                streaming: ::grpc::rt::GrpcStreaming::Unary,
                req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
            }),
            method_Delete: ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                name: "/api.UserService/Delete".to_string(),
                streaming: ::grpc::rt::GrpcStreaming::Unary,
                req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
            }),
            method_UpdatePassword: ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                name: "/api.UserService/UpdatePassword".to_string(),
                streaming: ::grpc::rt::GrpcStreaming::Unary,
                req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
            }),
        }
    }
}

impl UserService for UserServiceClient {
    fn list(&self, o: ::grpc::RequestOptions, p: super::user::ListUserRequest) -> ::grpc::SingleResponse<super::user::ListUserResponse> {
        self.grpc_client.call_unary(o, p, self.method_List.clone())
    }

    fn get(&self, o: ::grpc::RequestOptions, p: super::user::GetUserRequest) -> ::grpc::SingleResponse<super::user::GetUserResponse> {
        self.grpc_client.call_unary(o, p, self.method_Get.clone())
    }

    fn create(&self, o: ::grpc::RequestOptions, p: super::user::CreateUserRequest) -> ::grpc::SingleResponse<super::user::CreateUserResponse> {
        self.grpc_client.call_unary(o, p, self.method_Create.clone())
    }

    fn update(&self, o: ::grpc::RequestOptions, p: super::user::UpdateUserRequest) -> ::grpc::SingleResponse<super::empty::Empty> {
        self.grpc_client.call_unary(o, p, self.method_Update.clone())
    }

    fn delete(&self, o: ::grpc::RequestOptions, p: super::user::DeleteUserRequest) -> ::grpc::SingleResponse<super::empty::Empty> {
        self.grpc_client.call_unary(o, p, self.method_Delete.clone())
    }

    fn update_password(&self, o: ::grpc::RequestOptions, p: super::user::UpdateUserPasswordRequest) -> ::grpc::SingleResponse<super::empty::Empty> {
        self.grpc_client.call_unary(o, p, self.method_UpdatePassword.clone())
    }
}

// server

pub struct UserServiceServer;


impl UserServiceServer {
    pub fn new_service_def<H : UserService + 'static + Sync + Send + 'static>(handler: H) -> ::grpc::rt::ServerServiceDefinition {
        let handler_arc = ::std::sync::Arc::new(handler);
        ::grpc::rt::ServerServiceDefinition::new("/api.UserService",
            vec![
                ::grpc::rt::ServerMethod::new(
                    ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                        name: "/api.UserService/List".to_string(),
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
                        name: "/api.UserService/Get".to_string(),
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
                        name: "/api.UserService/Create".to_string(),
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
                        name: "/api.UserService/Update".to_string(),
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
                        name: "/api.UserService/Delete".to_string(),
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
                        name: "/api.UserService/UpdatePassword".to_string(),
                        streaming: ::grpc::rt::GrpcStreaming::Unary,
                        req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                        resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                    }),
                    {
                        let handler_copy = handler_arc.clone();
                        ::grpc::rt::MethodHandlerUnary::new(move |o, p| handler_copy.update_password(o, p))
                    },
                ),
            ],
        )
    }
}
