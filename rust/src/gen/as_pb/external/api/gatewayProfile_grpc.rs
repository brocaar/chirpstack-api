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

pub trait GatewayProfileService {
    fn create(&self, o: ::grpc::RequestOptions, p: super::gatewayProfile::CreateGatewayProfileRequest) -> ::grpc::SingleResponse<super::gatewayProfile::CreateGatewayProfileResponse>;

    fn get(&self, o: ::grpc::RequestOptions, p: super::gatewayProfile::GetGatewayProfileRequest) -> ::grpc::SingleResponse<super::gatewayProfile::GetGatewayProfileResponse>;

    fn update(&self, o: ::grpc::RequestOptions, p: super::gatewayProfile::UpdateGatewayProfileRequest) -> ::grpc::SingleResponse<super::empty::Empty>;

    fn delete(&self, o: ::grpc::RequestOptions, p: super::gatewayProfile::DeleteGatewayProfileRequest) -> ::grpc::SingleResponse<super::empty::Empty>;

    fn list(&self, o: ::grpc::RequestOptions, p: super::gatewayProfile::ListGatewayProfilesRequest) -> ::grpc::SingleResponse<super::gatewayProfile::ListGatewayProfilesResponse>;
}

// client

pub struct GatewayProfileServiceClient {
    grpc_client: ::std::sync::Arc<::grpc::Client>,
    method_Create: ::std::sync::Arc<::grpc::rt::MethodDescriptor<super::gatewayProfile::CreateGatewayProfileRequest, super::gatewayProfile::CreateGatewayProfileResponse>>,
    method_Get: ::std::sync::Arc<::grpc::rt::MethodDescriptor<super::gatewayProfile::GetGatewayProfileRequest, super::gatewayProfile::GetGatewayProfileResponse>>,
    method_Update: ::std::sync::Arc<::grpc::rt::MethodDescriptor<super::gatewayProfile::UpdateGatewayProfileRequest, super::empty::Empty>>,
    method_Delete: ::std::sync::Arc<::grpc::rt::MethodDescriptor<super::gatewayProfile::DeleteGatewayProfileRequest, super::empty::Empty>>,
    method_List: ::std::sync::Arc<::grpc::rt::MethodDescriptor<super::gatewayProfile::ListGatewayProfilesRequest, super::gatewayProfile::ListGatewayProfilesResponse>>,
}

impl ::grpc::ClientStub for GatewayProfileServiceClient {
    fn with_client(grpc_client: ::std::sync::Arc<::grpc::Client>) -> Self {
        GatewayProfileServiceClient {
            grpc_client: grpc_client,
            method_Create: ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                name: "/api.GatewayProfileService/Create".to_string(),
                streaming: ::grpc::rt::GrpcStreaming::Unary,
                req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
            }),
            method_Get: ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                name: "/api.GatewayProfileService/Get".to_string(),
                streaming: ::grpc::rt::GrpcStreaming::Unary,
                req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
            }),
            method_Update: ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                name: "/api.GatewayProfileService/Update".to_string(),
                streaming: ::grpc::rt::GrpcStreaming::Unary,
                req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
            }),
            method_Delete: ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                name: "/api.GatewayProfileService/Delete".to_string(),
                streaming: ::grpc::rt::GrpcStreaming::Unary,
                req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
            }),
            method_List: ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                name: "/api.GatewayProfileService/List".to_string(),
                streaming: ::grpc::rt::GrpcStreaming::Unary,
                req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
            }),
        }
    }
}

impl GatewayProfileService for GatewayProfileServiceClient {
    fn create(&self, o: ::grpc::RequestOptions, p: super::gatewayProfile::CreateGatewayProfileRequest) -> ::grpc::SingleResponse<super::gatewayProfile::CreateGatewayProfileResponse> {
        self.grpc_client.call_unary(o, p, self.method_Create.clone())
    }

    fn get(&self, o: ::grpc::RequestOptions, p: super::gatewayProfile::GetGatewayProfileRequest) -> ::grpc::SingleResponse<super::gatewayProfile::GetGatewayProfileResponse> {
        self.grpc_client.call_unary(o, p, self.method_Get.clone())
    }

    fn update(&self, o: ::grpc::RequestOptions, p: super::gatewayProfile::UpdateGatewayProfileRequest) -> ::grpc::SingleResponse<super::empty::Empty> {
        self.grpc_client.call_unary(o, p, self.method_Update.clone())
    }

    fn delete(&self, o: ::grpc::RequestOptions, p: super::gatewayProfile::DeleteGatewayProfileRequest) -> ::grpc::SingleResponse<super::empty::Empty> {
        self.grpc_client.call_unary(o, p, self.method_Delete.clone())
    }

    fn list(&self, o: ::grpc::RequestOptions, p: super::gatewayProfile::ListGatewayProfilesRequest) -> ::grpc::SingleResponse<super::gatewayProfile::ListGatewayProfilesResponse> {
        self.grpc_client.call_unary(o, p, self.method_List.clone())
    }
}

// server

pub struct GatewayProfileServiceServer;


impl GatewayProfileServiceServer {
    pub fn new_service_def<H : GatewayProfileService + 'static + Sync + Send + 'static>(handler: H) -> ::grpc::rt::ServerServiceDefinition {
        let handler_arc = ::std::sync::Arc::new(handler);
        ::grpc::rt::ServerServiceDefinition::new("/api.GatewayProfileService",
            vec![
                ::grpc::rt::ServerMethod::new(
                    ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                        name: "/api.GatewayProfileService/Create".to_string(),
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
                        name: "/api.GatewayProfileService/Get".to_string(),
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
                        name: "/api.GatewayProfileService/Update".to_string(),
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
                        name: "/api.GatewayProfileService/Delete".to_string(),
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
                        name: "/api.GatewayProfileService/List".to_string(),
                        streaming: ::grpc::rt::GrpcStreaming::Unary,
                        req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                        resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                    }),
                    {
                        let handler_copy = handler_arc.clone();
                        ::grpc::rt::MethodHandlerUnary::new(move |o, p| handler_copy.list(o, p))
                    },
                ),
            ],
        )
    }
}
