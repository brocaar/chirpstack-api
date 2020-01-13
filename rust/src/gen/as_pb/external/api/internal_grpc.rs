// This file is generated. Do not edit
// @generated

// https://github.com/rust-lang/rust-clippy/issues/702
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

pub trait InternalService {
    fn login(&self, o: ::grpc::RequestOptions, p: super::internal::LoginRequest) -> ::grpc::SingleResponse<super::internal::LoginResponse>;

    fn profile(&self, o: ::grpc::RequestOptions, p: super::empty::Empty) -> ::grpc::SingleResponse<super::internal::ProfileResponse>;

    fn branding(&self, o: ::grpc::RequestOptions, p: super::empty::Empty) -> ::grpc::SingleResponse<super::internal::BrandingResponse>;

    fn global_search(&self, o: ::grpc::RequestOptions, p: super::internal::GlobalSearchRequest) -> ::grpc::SingleResponse<super::internal::GlobalSearchResponse>;
}

// client

pub struct InternalServiceClient {
    grpc_client: ::std::sync::Arc<::grpc::Client>,
    method_Login: ::std::sync::Arc<::grpc::rt::MethodDescriptor<super::internal::LoginRequest, super::internal::LoginResponse>>,
    method_Profile: ::std::sync::Arc<::grpc::rt::MethodDescriptor<super::empty::Empty, super::internal::ProfileResponse>>,
    method_Branding: ::std::sync::Arc<::grpc::rt::MethodDescriptor<super::empty::Empty, super::internal::BrandingResponse>>,
    method_GlobalSearch: ::std::sync::Arc<::grpc::rt::MethodDescriptor<super::internal::GlobalSearchRequest, super::internal::GlobalSearchResponse>>,
}

impl ::grpc::ClientStub for InternalServiceClient {
    fn with_client(grpc_client: ::std::sync::Arc<::grpc::Client>) -> Self {
        InternalServiceClient {
            grpc_client: grpc_client,
            method_Login: ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                name: "/api.InternalService/Login".to_string(),
                streaming: ::grpc::rt::GrpcStreaming::Unary,
                req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
            }),
            method_Profile: ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                name: "/api.InternalService/Profile".to_string(),
                streaming: ::grpc::rt::GrpcStreaming::Unary,
                req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
            }),
            method_Branding: ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                name: "/api.InternalService/Branding".to_string(),
                streaming: ::grpc::rt::GrpcStreaming::Unary,
                req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
            }),
            method_GlobalSearch: ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                name: "/api.InternalService/GlobalSearch".to_string(),
                streaming: ::grpc::rt::GrpcStreaming::Unary,
                req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
            }),
        }
    }
}

impl InternalService for InternalServiceClient {
    fn login(&self, o: ::grpc::RequestOptions, p: super::internal::LoginRequest) -> ::grpc::SingleResponse<super::internal::LoginResponse> {
        self.grpc_client.call_unary(o, p, self.method_Login.clone())
    }

    fn profile(&self, o: ::grpc::RequestOptions, p: super::empty::Empty) -> ::grpc::SingleResponse<super::internal::ProfileResponse> {
        self.grpc_client.call_unary(o, p, self.method_Profile.clone())
    }

    fn branding(&self, o: ::grpc::RequestOptions, p: super::empty::Empty) -> ::grpc::SingleResponse<super::internal::BrandingResponse> {
        self.grpc_client.call_unary(o, p, self.method_Branding.clone())
    }

    fn global_search(&self, o: ::grpc::RequestOptions, p: super::internal::GlobalSearchRequest) -> ::grpc::SingleResponse<super::internal::GlobalSearchResponse> {
        self.grpc_client.call_unary(o, p, self.method_GlobalSearch.clone())
    }
}

// server

pub struct InternalServiceServer;


impl InternalServiceServer {
    pub fn new_service_def<H : InternalService + 'static + Sync + Send + 'static>(handler: H) -> ::grpc::rt::ServerServiceDefinition {
        let handler_arc = ::std::sync::Arc::new(handler);
        ::grpc::rt::ServerServiceDefinition::new("/api.InternalService",
            vec![
                ::grpc::rt::ServerMethod::new(
                    ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                        name: "/api.InternalService/Login".to_string(),
                        streaming: ::grpc::rt::GrpcStreaming::Unary,
                        req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                        resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                    }),
                    {
                        let handler_copy = handler_arc.clone();
                        ::grpc::rt::MethodHandlerUnary::new(move |o, p| handler_copy.login(o, p))
                    },
                ),
                ::grpc::rt::ServerMethod::new(
                    ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                        name: "/api.InternalService/Profile".to_string(),
                        streaming: ::grpc::rt::GrpcStreaming::Unary,
                        req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                        resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                    }),
                    {
                        let handler_copy = handler_arc.clone();
                        ::grpc::rt::MethodHandlerUnary::new(move |o, p| handler_copy.profile(o, p))
                    },
                ),
                ::grpc::rt::ServerMethod::new(
                    ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                        name: "/api.InternalService/Branding".to_string(),
                        streaming: ::grpc::rt::GrpcStreaming::Unary,
                        req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                        resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                    }),
                    {
                        let handler_copy = handler_arc.clone();
                        ::grpc::rt::MethodHandlerUnary::new(move |o, p| handler_copy.branding(o, p))
                    },
                ),
                ::grpc::rt::ServerMethod::new(
                    ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                        name: "/api.InternalService/GlobalSearch".to_string(),
                        streaming: ::grpc::rt::GrpcStreaming::Unary,
                        req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                        resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                    }),
                    {
                        let handler_copy = handler_arc.clone();
                        ::grpc::rt::MethodHandlerUnary::new(move |o, p| handler_copy.global_search(o, p))
                    },
                ),
            ],
        )
    }
}
