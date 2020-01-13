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

pub trait DeviceService {
    fn create(&self, o: ::grpc::RequestOptions, p: super::device::CreateDeviceRequest) -> ::grpc::SingleResponse<super::empty::Empty>;

    fn get(&self, o: ::grpc::RequestOptions, p: super::device::GetDeviceRequest) -> ::grpc::SingleResponse<super::device::GetDeviceResponse>;

    fn list(&self, o: ::grpc::RequestOptions, p: super::device::ListDeviceRequest) -> ::grpc::SingleResponse<super::device::ListDeviceResponse>;

    fn delete(&self, o: ::grpc::RequestOptions, p: super::device::DeleteDeviceRequest) -> ::grpc::SingleResponse<super::empty::Empty>;

    fn update(&self, o: ::grpc::RequestOptions, p: super::device::UpdateDeviceRequest) -> ::grpc::SingleResponse<super::empty::Empty>;

    fn create_keys(&self, o: ::grpc::RequestOptions, p: super::device::CreateDeviceKeysRequest) -> ::grpc::SingleResponse<super::empty::Empty>;

    fn get_keys(&self, o: ::grpc::RequestOptions, p: super::device::GetDeviceKeysRequest) -> ::grpc::SingleResponse<super::device::GetDeviceKeysResponse>;

    fn update_keys(&self, o: ::grpc::RequestOptions, p: super::device::UpdateDeviceKeysRequest) -> ::grpc::SingleResponse<super::empty::Empty>;

    fn delete_keys(&self, o: ::grpc::RequestOptions, p: super::device::DeleteDeviceKeysRequest) -> ::grpc::SingleResponse<super::empty::Empty>;

    fn activate(&self, o: ::grpc::RequestOptions, p: super::device::ActivateDeviceRequest) -> ::grpc::SingleResponse<super::empty::Empty>;

    fn deactivate(&self, o: ::grpc::RequestOptions, p: super::device::DeactivateDeviceRequest) -> ::grpc::SingleResponse<super::empty::Empty>;

    fn get_activation(&self, o: ::grpc::RequestOptions, p: super::device::GetDeviceActivationRequest) -> ::grpc::SingleResponse<super::device::GetDeviceActivationResponse>;

    fn get_random_dev_addr(&self, o: ::grpc::RequestOptions, p: super::device::GetRandomDevAddrRequest) -> ::grpc::SingleResponse<super::device::GetRandomDevAddrResponse>;

    fn stream_frame_logs(&self, o: ::grpc::RequestOptions, p: super::device::StreamDeviceFrameLogsRequest) -> ::grpc::StreamingResponse<super::device::StreamDeviceFrameLogsResponse>;

    fn stream_event_logs(&self, o: ::grpc::RequestOptions, p: super::device::StreamDeviceEventLogsRequest) -> ::grpc::StreamingResponse<super::device::StreamDeviceEventLogsResponse>;
}

// client

pub struct DeviceServiceClient {
    grpc_client: ::std::sync::Arc<::grpc::Client>,
    method_Create: ::std::sync::Arc<::grpc::rt::MethodDescriptor<super::device::CreateDeviceRequest, super::empty::Empty>>,
    method_Get: ::std::sync::Arc<::grpc::rt::MethodDescriptor<super::device::GetDeviceRequest, super::device::GetDeviceResponse>>,
    method_List: ::std::sync::Arc<::grpc::rt::MethodDescriptor<super::device::ListDeviceRequest, super::device::ListDeviceResponse>>,
    method_Delete: ::std::sync::Arc<::grpc::rt::MethodDescriptor<super::device::DeleteDeviceRequest, super::empty::Empty>>,
    method_Update: ::std::sync::Arc<::grpc::rt::MethodDescriptor<super::device::UpdateDeviceRequest, super::empty::Empty>>,
    method_CreateKeys: ::std::sync::Arc<::grpc::rt::MethodDescriptor<super::device::CreateDeviceKeysRequest, super::empty::Empty>>,
    method_GetKeys: ::std::sync::Arc<::grpc::rt::MethodDescriptor<super::device::GetDeviceKeysRequest, super::device::GetDeviceKeysResponse>>,
    method_UpdateKeys: ::std::sync::Arc<::grpc::rt::MethodDescriptor<super::device::UpdateDeviceKeysRequest, super::empty::Empty>>,
    method_DeleteKeys: ::std::sync::Arc<::grpc::rt::MethodDescriptor<super::device::DeleteDeviceKeysRequest, super::empty::Empty>>,
    method_Activate: ::std::sync::Arc<::grpc::rt::MethodDescriptor<super::device::ActivateDeviceRequest, super::empty::Empty>>,
    method_Deactivate: ::std::sync::Arc<::grpc::rt::MethodDescriptor<super::device::DeactivateDeviceRequest, super::empty::Empty>>,
    method_GetActivation: ::std::sync::Arc<::grpc::rt::MethodDescriptor<super::device::GetDeviceActivationRequest, super::device::GetDeviceActivationResponse>>,
    method_GetRandomDevAddr: ::std::sync::Arc<::grpc::rt::MethodDescriptor<super::device::GetRandomDevAddrRequest, super::device::GetRandomDevAddrResponse>>,
    method_StreamFrameLogs: ::std::sync::Arc<::grpc::rt::MethodDescriptor<super::device::StreamDeviceFrameLogsRequest, super::device::StreamDeviceFrameLogsResponse>>,
    method_StreamEventLogs: ::std::sync::Arc<::grpc::rt::MethodDescriptor<super::device::StreamDeviceEventLogsRequest, super::device::StreamDeviceEventLogsResponse>>,
}

impl ::grpc::ClientStub for DeviceServiceClient {
    fn with_client(grpc_client: ::std::sync::Arc<::grpc::Client>) -> Self {
        DeviceServiceClient {
            grpc_client: grpc_client,
            method_Create: ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                name: "/api.DeviceService/Create".to_string(),
                streaming: ::grpc::rt::GrpcStreaming::Unary,
                req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
            }),
            method_Get: ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                name: "/api.DeviceService/Get".to_string(),
                streaming: ::grpc::rt::GrpcStreaming::Unary,
                req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
            }),
            method_List: ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                name: "/api.DeviceService/List".to_string(),
                streaming: ::grpc::rt::GrpcStreaming::Unary,
                req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
            }),
            method_Delete: ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                name: "/api.DeviceService/Delete".to_string(),
                streaming: ::grpc::rt::GrpcStreaming::Unary,
                req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
            }),
            method_Update: ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                name: "/api.DeviceService/Update".to_string(),
                streaming: ::grpc::rt::GrpcStreaming::Unary,
                req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
            }),
            method_CreateKeys: ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                name: "/api.DeviceService/CreateKeys".to_string(),
                streaming: ::grpc::rt::GrpcStreaming::Unary,
                req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
            }),
            method_GetKeys: ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                name: "/api.DeviceService/GetKeys".to_string(),
                streaming: ::grpc::rt::GrpcStreaming::Unary,
                req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
            }),
            method_UpdateKeys: ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                name: "/api.DeviceService/UpdateKeys".to_string(),
                streaming: ::grpc::rt::GrpcStreaming::Unary,
                req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
            }),
            method_DeleteKeys: ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                name: "/api.DeviceService/DeleteKeys".to_string(),
                streaming: ::grpc::rt::GrpcStreaming::Unary,
                req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
            }),
            method_Activate: ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                name: "/api.DeviceService/Activate".to_string(),
                streaming: ::grpc::rt::GrpcStreaming::Unary,
                req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
            }),
            method_Deactivate: ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                name: "/api.DeviceService/Deactivate".to_string(),
                streaming: ::grpc::rt::GrpcStreaming::Unary,
                req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
            }),
            method_GetActivation: ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                name: "/api.DeviceService/GetActivation".to_string(),
                streaming: ::grpc::rt::GrpcStreaming::Unary,
                req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
            }),
            method_GetRandomDevAddr: ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                name: "/api.DeviceService/GetRandomDevAddr".to_string(),
                streaming: ::grpc::rt::GrpcStreaming::Unary,
                req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
            }),
            method_StreamFrameLogs: ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                name: "/api.DeviceService/StreamFrameLogs".to_string(),
                streaming: ::grpc::rt::GrpcStreaming::ServerStreaming,
                req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
            }),
            method_StreamEventLogs: ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                name: "/api.DeviceService/StreamEventLogs".to_string(),
                streaming: ::grpc::rt::GrpcStreaming::ServerStreaming,
                req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
            }),
        }
    }
}

impl DeviceService for DeviceServiceClient {
    fn create(&self, o: ::grpc::RequestOptions, p: super::device::CreateDeviceRequest) -> ::grpc::SingleResponse<super::empty::Empty> {
        self.grpc_client.call_unary(o, p, self.method_Create.clone())
    }

    fn get(&self, o: ::grpc::RequestOptions, p: super::device::GetDeviceRequest) -> ::grpc::SingleResponse<super::device::GetDeviceResponse> {
        self.grpc_client.call_unary(o, p, self.method_Get.clone())
    }

    fn list(&self, o: ::grpc::RequestOptions, p: super::device::ListDeviceRequest) -> ::grpc::SingleResponse<super::device::ListDeviceResponse> {
        self.grpc_client.call_unary(o, p, self.method_List.clone())
    }

    fn delete(&self, o: ::grpc::RequestOptions, p: super::device::DeleteDeviceRequest) -> ::grpc::SingleResponse<super::empty::Empty> {
        self.grpc_client.call_unary(o, p, self.method_Delete.clone())
    }

    fn update(&self, o: ::grpc::RequestOptions, p: super::device::UpdateDeviceRequest) -> ::grpc::SingleResponse<super::empty::Empty> {
        self.grpc_client.call_unary(o, p, self.method_Update.clone())
    }

    fn create_keys(&self, o: ::grpc::RequestOptions, p: super::device::CreateDeviceKeysRequest) -> ::grpc::SingleResponse<super::empty::Empty> {
        self.grpc_client.call_unary(o, p, self.method_CreateKeys.clone())
    }

    fn get_keys(&self, o: ::grpc::RequestOptions, p: super::device::GetDeviceKeysRequest) -> ::grpc::SingleResponse<super::device::GetDeviceKeysResponse> {
        self.grpc_client.call_unary(o, p, self.method_GetKeys.clone())
    }

    fn update_keys(&self, o: ::grpc::RequestOptions, p: super::device::UpdateDeviceKeysRequest) -> ::grpc::SingleResponse<super::empty::Empty> {
        self.grpc_client.call_unary(o, p, self.method_UpdateKeys.clone())
    }

    fn delete_keys(&self, o: ::grpc::RequestOptions, p: super::device::DeleteDeviceKeysRequest) -> ::grpc::SingleResponse<super::empty::Empty> {
        self.grpc_client.call_unary(o, p, self.method_DeleteKeys.clone())
    }

    fn activate(&self, o: ::grpc::RequestOptions, p: super::device::ActivateDeviceRequest) -> ::grpc::SingleResponse<super::empty::Empty> {
        self.grpc_client.call_unary(o, p, self.method_Activate.clone())
    }

    fn deactivate(&self, o: ::grpc::RequestOptions, p: super::device::DeactivateDeviceRequest) -> ::grpc::SingleResponse<super::empty::Empty> {
        self.grpc_client.call_unary(o, p, self.method_Deactivate.clone())
    }

    fn get_activation(&self, o: ::grpc::RequestOptions, p: super::device::GetDeviceActivationRequest) -> ::grpc::SingleResponse<super::device::GetDeviceActivationResponse> {
        self.grpc_client.call_unary(o, p, self.method_GetActivation.clone())
    }

    fn get_random_dev_addr(&self, o: ::grpc::RequestOptions, p: super::device::GetRandomDevAddrRequest) -> ::grpc::SingleResponse<super::device::GetRandomDevAddrResponse> {
        self.grpc_client.call_unary(o, p, self.method_GetRandomDevAddr.clone())
    }

    fn stream_frame_logs(&self, o: ::grpc::RequestOptions, p: super::device::StreamDeviceFrameLogsRequest) -> ::grpc::StreamingResponse<super::device::StreamDeviceFrameLogsResponse> {
        self.grpc_client.call_server_streaming(o, p, self.method_StreamFrameLogs.clone())
    }

    fn stream_event_logs(&self, o: ::grpc::RequestOptions, p: super::device::StreamDeviceEventLogsRequest) -> ::grpc::StreamingResponse<super::device::StreamDeviceEventLogsResponse> {
        self.grpc_client.call_server_streaming(o, p, self.method_StreamEventLogs.clone())
    }
}

// server

pub struct DeviceServiceServer;


impl DeviceServiceServer {
    pub fn new_service_def<H : DeviceService + 'static + Sync + Send + 'static>(handler: H) -> ::grpc::rt::ServerServiceDefinition {
        let handler_arc = ::std::sync::Arc::new(handler);
        ::grpc::rt::ServerServiceDefinition::new("/api.DeviceService",
            vec![
                ::grpc::rt::ServerMethod::new(
                    ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                        name: "/api.DeviceService/Create".to_string(),
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
                        name: "/api.DeviceService/Get".to_string(),
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
                        name: "/api.DeviceService/List".to_string(),
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
                        name: "/api.DeviceService/Delete".to_string(),
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
                        name: "/api.DeviceService/Update".to_string(),
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
                        name: "/api.DeviceService/CreateKeys".to_string(),
                        streaming: ::grpc::rt::GrpcStreaming::Unary,
                        req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                        resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                    }),
                    {
                        let handler_copy = handler_arc.clone();
                        ::grpc::rt::MethodHandlerUnary::new(move |o, p| handler_copy.create_keys(o, p))
                    },
                ),
                ::grpc::rt::ServerMethod::new(
                    ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                        name: "/api.DeviceService/GetKeys".to_string(),
                        streaming: ::grpc::rt::GrpcStreaming::Unary,
                        req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                        resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                    }),
                    {
                        let handler_copy = handler_arc.clone();
                        ::grpc::rt::MethodHandlerUnary::new(move |o, p| handler_copy.get_keys(o, p))
                    },
                ),
                ::grpc::rt::ServerMethod::new(
                    ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                        name: "/api.DeviceService/UpdateKeys".to_string(),
                        streaming: ::grpc::rt::GrpcStreaming::Unary,
                        req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                        resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                    }),
                    {
                        let handler_copy = handler_arc.clone();
                        ::grpc::rt::MethodHandlerUnary::new(move |o, p| handler_copy.update_keys(o, p))
                    },
                ),
                ::grpc::rt::ServerMethod::new(
                    ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                        name: "/api.DeviceService/DeleteKeys".to_string(),
                        streaming: ::grpc::rt::GrpcStreaming::Unary,
                        req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                        resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                    }),
                    {
                        let handler_copy = handler_arc.clone();
                        ::grpc::rt::MethodHandlerUnary::new(move |o, p| handler_copy.delete_keys(o, p))
                    },
                ),
                ::grpc::rt::ServerMethod::new(
                    ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                        name: "/api.DeviceService/Activate".to_string(),
                        streaming: ::grpc::rt::GrpcStreaming::Unary,
                        req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                        resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                    }),
                    {
                        let handler_copy = handler_arc.clone();
                        ::grpc::rt::MethodHandlerUnary::new(move |o, p| handler_copy.activate(o, p))
                    },
                ),
                ::grpc::rt::ServerMethod::new(
                    ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                        name: "/api.DeviceService/Deactivate".to_string(),
                        streaming: ::grpc::rt::GrpcStreaming::Unary,
                        req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                        resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                    }),
                    {
                        let handler_copy = handler_arc.clone();
                        ::grpc::rt::MethodHandlerUnary::new(move |o, p| handler_copy.deactivate(o, p))
                    },
                ),
                ::grpc::rt::ServerMethod::new(
                    ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                        name: "/api.DeviceService/GetActivation".to_string(),
                        streaming: ::grpc::rt::GrpcStreaming::Unary,
                        req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                        resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                    }),
                    {
                        let handler_copy = handler_arc.clone();
                        ::grpc::rt::MethodHandlerUnary::new(move |o, p| handler_copy.get_activation(o, p))
                    },
                ),
                ::grpc::rt::ServerMethod::new(
                    ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                        name: "/api.DeviceService/GetRandomDevAddr".to_string(),
                        streaming: ::grpc::rt::GrpcStreaming::Unary,
                        req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                        resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                    }),
                    {
                        let handler_copy = handler_arc.clone();
                        ::grpc::rt::MethodHandlerUnary::new(move |o, p| handler_copy.get_random_dev_addr(o, p))
                    },
                ),
                ::grpc::rt::ServerMethod::new(
                    ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                        name: "/api.DeviceService/StreamFrameLogs".to_string(),
                        streaming: ::grpc::rt::GrpcStreaming::ServerStreaming,
                        req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                        resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                    }),
                    {
                        let handler_copy = handler_arc.clone();
                        ::grpc::rt::MethodHandlerServerStreaming::new(move |o, p| handler_copy.stream_frame_logs(o, p))
                    },
                ),
                ::grpc::rt::ServerMethod::new(
                    ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                        name: "/api.DeviceService/StreamEventLogs".to_string(),
                        streaming: ::grpc::rt::GrpcStreaming::ServerStreaming,
                        req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                        resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                    }),
                    {
                        let handler_copy = handler_arc.clone();
                        ::grpc::rt::MethodHandlerServerStreaming::new(move |o, p| handler_copy.stream_event_logs(o, p))
                    },
                ),
            ],
        )
    }
}
