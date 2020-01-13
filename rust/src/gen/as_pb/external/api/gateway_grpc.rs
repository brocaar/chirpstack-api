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

pub trait GatewayService {
    fn create(&self, o: ::grpc::RequestOptions, p: super::gateway::CreateGatewayRequest) -> ::grpc::SingleResponse<super::empty::Empty>;

    fn get(&self, o: ::grpc::RequestOptions, p: super::gateway::GetGatewayRequest) -> ::grpc::SingleResponse<super::gateway::GetGatewayResponse>;

    fn update(&self, o: ::grpc::RequestOptions, p: super::gateway::UpdateGatewayRequest) -> ::grpc::SingleResponse<super::empty::Empty>;

    fn delete(&self, o: ::grpc::RequestOptions, p: super::gateway::DeleteGatewayRequest) -> ::grpc::SingleResponse<super::empty::Empty>;

    fn list(&self, o: ::grpc::RequestOptions, p: super::gateway::ListGatewayRequest) -> ::grpc::SingleResponse<super::gateway::ListGatewayResponse>;

    fn get_stats(&self, o: ::grpc::RequestOptions, p: super::gateway::GetGatewayStatsRequest) -> ::grpc::SingleResponse<super::gateway::GetGatewayStatsResponse>;

    fn get_last_ping(&self, o: ::grpc::RequestOptions, p: super::gateway::GetLastPingRequest) -> ::grpc::SingleResponse<super::gateway::GetLastPingResponse>;

    fn stream_frame_logs(&self, o: ::grpc::RequestOptions, p: super::gateway::StreamGatewayFrameLogsRequest) -> ::grpc::StreamingResponse<super::gateway::StreamGatewayFrameLogsResponse>;
}

// client

pub struct GatewayServiceClient {
    grpc_client: ::std::sync::Arc<::grpc::Client>,
    method_Create: ::std::sync::Arc<::grpc::rt::MethodDescriptor<super::gateway::CreateGatewayRequest, super::empty::Empty>>,
    method_Get: ::std::sync::Arc<::grpc::rt::MethodDescriptor<super::gateway::GetGatewayRequest, super::gateway::GetGatewayResponse>>,
    method_Update: ::std::sync::Arc<::grpc::rt::MethodDescriptor<super::gateway::UpdateGatewayRequest, super::empty::Empty>>,
    method_Delete: ::std::sync::Arc<::grpc::rt::MethodDescriptor<super::gateway::DeleteGatewayRequest, super::empty::Empty>>,
    method_List: ::std::sync::Arc<::grpc::rt::MethodDescriptor<super::gateway::ListGatewayRequest, super::gateway::ListGatewayResponse>>,
    method_GetStats: ::std::sync::Arc<::grpc::rt::MethodDescriptor<super::gateway::GetGatewayStatsRequest, super::gateway::GetGatewayStatsResponse>>,
    method_GetLastPing: ::std::sync::Arc<::grpc::rt::MethodDescriptor<super::gateway::GetLastPingRequest, super::gateway::GetLastPingResponse>>,
    method_StreamFrameLogs: ::std::sync::Arc<::grpc::rt::MethodDescriptor<super::gateway::StreamGatewayFrameLogsRequest, super::gateway::StreamGatewayFrameLogsResponse>>,
}

impl ::grpc::ClientStub for GatewayServiceClient {
    fn with_client(grpc_client: ::std::sync::Arc<::grpc::Client>) -> Self {
        GatewayServiceClient {
            grpc_client: grpc_client,
            method_Create: ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                name: "/api.GatewayService/Create".to_string(),
                streaming: ::grpc::rt::GrpcStreaming::Unary,
                req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
            }),
            method_Get: ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                name: "/api.GatewayService/Get".to_string(),
                streaming: ::grpc::rt::GrpcStreaming::Unary,
                req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
            }),
            method_Update: ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                name: "/api.GatewayService/Update".to_string(),
                streaming: ::grpc::rt::GrpcStreaming::Unary,
                req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
            }),
            method_Delete: ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                name: "/api.GatewayService/Delete".to_string(),
                streaming: ::grpc::rt::GrpcStreaming::Unary,
                req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
            }),
            method_List: ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                name: "/api.GatewayService/List".to_string(),
                streaming: ::grpc::rt::GrpcStreaming::Unary,
                req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
            }),
            method_GetStats: ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                name: "/api.GatewayService/GetStats".to_string(),
                streaming: ::grpc::rt::GrpcStreaming::Unary,
                req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
            }),
            method_GetLastPing: ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                name: "/api.GatewayService/GetLastPing".to_string(),
                streaming: ::grpc::rt::GrpcStreaming::Unary,
                req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
            }),
            method_StreamFrameLogs: ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                name: "/api.GatewayService/StreamFrameLogs".to_string(),
                streaming: ::grpc::rt::GrpcStreaming::ServerStreaming,
                req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
            }),
        }
    }
}

impl GatewayService for GatewayServiceClient {
    fn create(&self, o: ::grpc::RequestOptions, p: super::gateway::CreateGatewayRequest) -> ::grpc::SingleResponse<super::empty::Empty> {
        self.grpc_client.call_unary(o, p, self.method_Create.clone())
    }

    fn get(&self, o: ::grpc::RequestOptions, p: super::gateway::GetGatewayRequest) -> ::grpc::SingleResponse<super::gateway::GetGatewayResponse> {
        self.grpc_client.call_unary(o, p, self.method_Get.clone())
    }

    fn update(&self, o: ::grpc::RequestOptions, p: super::gateway::UpdateGatewayRequest) -> ::grpc::SingleResponse<super::empty::Empty> {
        self.grpc_client.call_unary(o, p, self.method_Update.clone())
    }

    fn delete(&self, o: ::grpc::RequestOptions, p: super::gateway::DeleteGatewayRequest) -> ::grpc::SingleResponse<super::empty::Empty> {
        self.grpc_client.call_unary(o, p, self.method_Delete.clone())
    }

    fn list(&self, o: ::grpc::RequestOptions, p: super::gateway::ListGatewayRequest) -> ::grpc::SingleResponse<super::gateway::ListGatewayResponse> {
        self.grpc_client.call_unary(o, p, self.method_List.clone())
    }

    fn get_stats(&self, o: ::grpc::RequestOptions, p: super::gateway::GetGatewayStatsRequest) -> ::grpc::SingleResponse<super::gateway::GetGatewayStatsResponse> {
        self.grpc_client.call_unary(o, p, self.method_GetStats.clone())
    }

    fn get_last_ping(&self, o: ::grpc::RequestOptions, p: super::gateway::GetLastPingRequest) -> ::grpc::SingleResponse<super::gateway::GetLastPingResponse> {
        self.grpc_client.call_unary(o, p, self.method_GetLastPing.clone())
    }

    fn stream_frame_logs(&self, o: ::grpc::RequestOptions, p: super::gateway::StreamGatewayFrameLogsRequest) -> ::grpc::StreamingResponse<super::gateway::StreamGatewayFrameLogsResponse> {
        self.grpc_client.call_server_streaming(o, p, self.method_StreamFrameLogs.clone())
    }
}

// server

pub struct GatewayServiceServer;


impl GatewayServiceServer {
    pub fn new_service_def<H : GatewayService + 'static + Sync + Send + 'static>(handler: H) -> ::grpc::rt::ServerServiceDefinition {
        let handler_arc = ::std::sync::Arc::new(handler);
        ::grpc::rt::ServerServiceDefinition::new("/api.GatewayService",
            vec![
                ::grpc::rt::ServerMethod::new(
                    ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                        name: "/api.GatewayService/Create".to_string(),
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
                        name: "/api.GatewayService/Get".to_string(),
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
                        name: "/api.GatewayService/Update".to_string(),
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
                        name: "/api.GatewayService/Delete".to_string(),
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
                        name: "/api.GatewayService/List".to_string(),
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
                        name: "/api.GatewayService/GetStats".to_string(),
                        streaming: ::grpc::rt::GrpcStreaming::Unary,
                        req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                        resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                    }),
                    {
                        let handler_copy = handler_arc.clone();
                        ::grpc::rt::MethodHandlerUnary::new(move |o, p| handler_copy.get_stats(o, p))
                    },
                ),
                ::grpc::rt::ServerMethod::new(
                    ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                        name: "/api.GatewayService/GetLastPing".to_string(),
                        streaming: ::grpc::rt::GrpcStreaming::Unary,
                        req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                        resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                    }),
                    {
                        let handler_copy = handler_arc.clone();
                        ::grpc::rt::MethodHandlerUnary::new(move |o, p| handler_copy.get_last_ping(o, p))
                    },
                ),
                ::grpc::rt::ServerMethod::new(
                    ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                        name: "/api.GatewayService/StreamFrameLogs".to_string(),
                        streaming: ::grpc::rt::GrpcStreaming::ServerStreaming,
                        req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                        resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                    }),
                    {
                        let handler_copy = handler_arc.clone();
                        ::grpc::rt::MethodHandlerServerStreaming::new(move |o, p| handler_copy.stream_frame_logs(o, p))
                    },
                ),
            ],
        )
    }
}
