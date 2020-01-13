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

pub trait GeolocationServerService {
    fn resolve_tdoa(&self, o: ::grpc::RequestOptions, p: super::geo::ResolveTDOARequest) -> ::grpc::SingleResponse<super::geo::ResolveTDOAResponse>;

    fn resolve_multi_frame_tdoa(&self, o: ::grpc::RequestOptions, p: super::geo::ResolveMultiFrameTDOARequest) -> ::grpc::SingleResponse<super::geo::ResolveMultiFrameTDOAResponse>;
}

// client

pub struct GeolocationServerServiceClient {
    grpc_client: ::std::sync::Arc<::grpc::Client>,
    method_ResolveTDOA: ::std::sync::Arc<::grpc::rt::MethodDescriptor<super::geo::ResolveTDOARequest, super::geo::ResolveTDOAResponse>>,
    method_ResolveMultiFrameTDOA: ::std::sync::Arc<::grpc::rt::MethodDescriptor<super::geo::ResolveMultiFrameTDOARequest, super::geo::ResolveMultiFrameTDOAResponse>>,
}

impl ::grpc::ClientStub for GeolocationServerServiceClient {
    fn with_client(grpc_client: ::std::sync::Arc<::grpc::Client>) -> Self {
        GeolocationServerServiceClient {
            grpc_client: grpc_client,
            method_ResolveTDOA: ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                name: "/geo.GeolocationServerService/ResolveTDOA".to_string(),
                streaming: ::grpc::rt::GrpcStreaming::Unary,
                req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
            }),
            method_ResolveMultiFrameTDOA: ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                name: "/geo.GeolocationServerService/ResolveMultiFrameTDOA".to_string(),
                streaming: ::grpc::rt::GrpcStreaming::Unary,
                req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
            }),
        }
    }
}

impl GeolocationServerService for GeolocationServerServiceClient {
    fn resolve_tdoa(&self, o: ::grpc::RequestOptions, p: super::geo::ResolveTDOARequest) -> ::grpc::SingleResponse<super::geo::ResolveTDOAResponse> {
        self.grpc_client.call_unary(o, p, self.method_ResolveTDOA.clone())
    }

    fn resolve_multi_frame_tdoa(&self, o: ::grpc::RequestOptions, p: super::geo::ResolveMultiFrameTDOARequest) -> ::grpc::SingleResponse<super::geo::ResolveMultiFrameTDOAResponse> {
        self.grpc_client.call_unary(o, p, self.method_ResolveMultiFrameTDOA.clone())
    }
}

// server

pub struct GeolocationServerServiceServer;


impl GeolocationServerServiceServer {
    pub fn new_service_def<H : GeolocationServerService + 'static + Sync + Send + 'static>(handler: H) -> ::grpc::rt::ServerServiceDefinition {
        let handler_arc = ::std::sync::Arc::new(handler);
        ::grpc::rt::ServerServiceDefinition::new("/geo.GeolocationServerService",
            vec![
                ::grpc::rt::ServerMethod::new(
                    ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                        name: "/geo.GeolocationServerService/ResolveTDOA".to_string(),
                        streaming: ::grpc::rt::GrpcStreaming::Unary,
                        req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                        resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                    }),
                    {
                        let handler_copy = handler_arc.clone();
                        ::grpc::rt::MethodHandlerUnary::new(move |o, p| handler_copy.resolve_tdoa(o, p))
                    },
                ),
                ::grpc::rt::ServerMethod::new(
                    ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                        name: "/geo.GeolocationServerService/ResolveMultiFrameTDOA".to_string(),
                        streaming: ::grpc::rt::GrpcStreaming::Unary,
                        req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                        resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                    }),
                    {
                        let handler_copy = handler_arc.clone();
                        ::grpc::rt::MethodHandlerUnary::new(move |o, p| handler_copy.resolve_multi_frame_tdoa(o, p))
                    },
                ),
            ],
        )
    }
}
