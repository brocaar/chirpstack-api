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

pub trait ApplicationServerService {
    fn handle_uplink_data(&self, o: ::grpc::RequestOptions, p: super::as_pb::HandleUplinkDataRequest) -> ::grpc::SingleResponse<super::empty::Empty>;

    fn handle_proprietary_uplink(&self, o: ::grpc::RequestOptions, p: super::as_pb::HandleProprietaryUplinkRequest) -> ::grpc::SingleResponse<super::empty::Empty>;

    fn handle_error(&self, o: ::grpc::RequestOptions, p: super::as_pb::HandleErrorRequest) -> ::grpc::SingleResponse<super::empty::Empty>;

    fn handle_downlink_ack(&self, o: ::grpc::RequestOptions, p: super::as_pb::HandleDownlinkACKRequest) -> ::grpc::SingleResponse<super::empty::Empty>;

    fn handle_gateway_stats(&self, o: ::grpc::RequestOptions, p: super::as_pb::HandleGatewayStatsRequest) -> ::grpc::SingleResponse<super::empty::Empty>;

    fn handle_tx_ack(&self, o: ::grpc::RequestOptions, p: super::as_pb::HandleTxAckRequest) -> ::grpc::SingleResponse<super::empty::Empty>;

    fn set_device_status(&self, o: ::grpc::RequestOptions, p: super::as_pb::SetDeviceStatusRequest) -> ::grpc::SingleResponse<super::empty::Empty>;

    fn set_device_location(&self, o: ::grpc::RequestOptions, p: super::as_pb::SetDeviceLocationRequest) -> ::grpc::SingleResponse<super::empty::Empty>;
}

// client

pub struct ApplicationServerServiceClient {
    grpc_client: ::std::sync::Arc<::grpc::Client>,
    method_HandleUplinkData: ::std::sync::Arc<::grpc::rt::MethodDescriptor<super::as_pb::HandleUplinkDataRequest, super::empty::Empty>>,
    method_HandleProprietaryUplink: ::std::sync::Arc<::grpc::rt::MethodDescriptor<super::as_pb::HandleProprietaryUplinkRequest, super::empty::Empty>>,
    method_HandleError: ::std::sync::Arc<::grpc::rt::MethodDescriptor<super::as_pb::HandleErrorRequest, super::empty::Empty>>,
    method_HandleDownlinkACK: ::std::sync::Arc<::grpc::rt::MethodDescriptor<super::as_pb::HandleDownlinkACKRequest, super::empty::Empty>>,
    method_HandleGatewayStats: ::std::sync::Arc<::grpc::rt::MethodDescriptor<super::as_pb::HandleGatewayStatsRequest, super::empty::Empty>>,
    method_HandleTxAck: ::std::sync::Arc<::grpc::rt::MethodDescriptor<super::as_pb::HandleTxAckRequest, super::empty::Empty>>,
    method_SetDeviceStatus: ::std::sync::Arc<::grpc::rt::MethodDescriptor<super::as_pb::SetDeviceStatusRequest, super::empty::Empty>>,
    method_SetDeviceLocation: ::std::sync::Arc<::grpc::rt::MethodDescriptor<super::as_pb::SetDeviceLocationRequest, super::empty::Empty>>,
}

impl ::grpc::ClientStub for ApplicationServerServiceClient {
    fn with_client(grpc_client: ::std::sync::Arc<::grpc::Client>) -> Self {
        ApplicationServerServiceClient {
            grpc_client: grpc_client,
            method_HandleUplinkData: ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                name: "/as.ApplicationServerService/HandleUplinkData".to_string(),
                streaming: ::grpc::rt::GrpcStreaming::Unary,
                req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
            }),
            method_HandleProprietaryUplink: ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                name: "/as.ApplicationServerService/HandleProprietaryUplink".to_string(),
                streaming: ::grpc::rt::GrpcStreaming::Unary,
                req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
            }),
            method_HandleError: ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                name: "/as.ApplicationServerService/HandleError".to_string(),
                streaming: ::grpc::rt::GrpcStreaming::Unary,
                req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
            }),
            method_HandleDownlinkACK: ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                name: "/as.ApplicationServerService/HandleDownlinkACK".to_string(),
                streaming: ::grpc::rt::GrpcStreaming::Unary,
                req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
            }),
            method_HandleGatewayStats: ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                name: "/as.ApplicationServerService/HandleGatewayStats".to_string(),
                streaming: ::grpc::rt::GrpcStreaming::Unary,
                req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
            }),
            method_HandleTxAck: ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                name: "/as.ApplicationServerService/HandleTxAck".to_string(),
                streaming: ::grpc::rt::GrpcStreaming::Unary,
                req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
            }),
            method_SetDeviceStatus: ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                name: "/as.ApplicationServerService/SetDeviceStatus".to_string(),
                streaming: ::grpc::rt::GrpcStreaming::Unary,
                req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
            }),
            method_SetDeviceLocation: ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                name: "/as.ApplicationServerService/SetDeviceLocation".to_string(),
                streaming: ::grpc::rt::GrpcStreaming::Unary,
                req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
            }),
        }
    }
}

impl ApplicationServerService for ApplicationServerServiceClient {
    fn handle_uplink_data(&self, o: ::grpc::RequestOptions, p: super::as_pb::HandleUplinkDataRequest) -> ::grpc::SingleResponse<super::empty::Empty> {
        self.grpc_client.call_unary(o, p, self.method_HandleUplinkData.clone())
    }

    fn handle_proprietary_uplink(&self, o: ::grpc::RequestOptions, p: super::as_pb::HandleProprietaryUplinkRequest) -> ::grpc::SingleResponse<super::empty::Empty> {
        self.grpc_client.call_unary(o, p, self.method_HandleProprietaryUplink.clone())
    }

    fn handle_error(&self, o: ::grpc::RequestOptions, p: super::as_pb::HandleErrorRequest) -> ::grpc::SingleResponse<super::empty::Empty> {
        self.grpc_client.call_unary(o, p, self.method_HandleError.clone())
    }

    fn handle_downlink_ack(&self, o: ::grpc::RequestOptions, p: super::as_pb::HandleDownlinkACKRequest) -> ::grpc::SingleResponse<super::empty::Empty> {
        self.grpc_client.call_unary(o, p, self.method_HandleDownlinkACK.clone())
    }

    fn handle_gateway_stats(&self, o: ::grpc::RequestOptions, p: super::as_pb::HandleGatewayStatsRequest) -> ::grpc::SingleResponse<super::empty::Empty> {
        self.grpc_client.call_unary(o, p, self.method_HandleGatewayStats.clone())
    }

    fn handle_tx_ack(&self, o: ::grpc::RequestOptions, p: super::as_pb::HandleTxAckRequest) -> ::grpc::SingleResponse<super::empty::Empty> {
        self.grpc_client.call_unary(o, p, self.method_HandleTxAck.clone())
    }

    fn set_device_status(&self, o: ::grpc::RequestOptions, p: super::as_pb::SetDeviceStatusRequest) -> ::grpc::SingleResponse<super::empty::Empty> {
        self.grpc_client.call_unary(o, p, self.method_SetDeviceStatus.clone())
    }

    fn set_device_location(&self, o: ::grpc::RequestOptions, p: super::as_pb::SetDeviceLocationRequest) -> ::grpc::SingleResponse<super::empty::Empty> {
        self.grpc_client.call_unary(o, p, self.method_SetDeviceLocation.clone())
    }
}

// server

pub struct ApplicationServerServiceServer;


impl ApplicationServerServiceServer {
    pub fn new_service_def<H : ApplicationServerService + 'static + Sync + Send + 'static>(handler: H) -> ::grpc::rt::ServerServiceDefinition {
        let handler_arc = ::std::sync::Arc::new(handler);
        ::grpc::rt::ServerServiceDefinition::new("/as.ApplicationServerService",
            vec![
                ::grpc::rt::ServerMethod::new(
                    ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                        name: "/as.ApplicationServerService/HandleUplinkData".to_string(),
                        streaming: ::grpc::rt::GrpcStreaming::Unary,
                        req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                        resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                    }),
                    {
                        let handler_copy = handler_arc.clone();
                        ::grpc::rt::MethodHandlerUnary::new(move |o, p| handler_copy.handle_uplink_data(o, p))
                    },
                ),
                ::grpc::rt::ServerMethod::new(
                    ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                        name: "/as.ApplicationServerService/HandleProprietaryUplink".to_string(),
                        streaming: ::grpc::rt::GrpcStreaming::Unary,
                        req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                        resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                    }),
                    {
                        let handler_copy = handler_arc.clone();
                        ::grpc::rt::MethodHandlerUnary::new(move |o, p| handler_copy.handle_proprietary_uplink(o, p))
                    },
                ),
                ::grpc::rt::ServerMethod::new(
                    ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                        name: "/as.ApplicationServerService/HandleError".to_string(),
                        streaming: ::grpc::rt::GrpcStreaming::Unary,
                        req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                        resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                    }),
                    {
                        let handler_copy = handler_arc.clone();
                        ::grpc::rt::MethodHandlerUnary::new(move |o, p| handler_copy.handle_error(o, p))
                    },
                ),
                ::grpc::rt::ServerMethod::new(
                    ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                        name: "/as.ApplicationServerService/HandleDownlinkACK".to_string(),
                        streaming: ::grpc::rt::GrpcStreaming::Unary,
                        req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                        resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                    }),
                    {
                        let handler_copy = handler_arc.clone();
                        ::grpc::rt::MethodHandlerUnary::new(move |o, p| handler_copy.handle_downlink_ack(o, p))
                    },
                ),
                ::grpc::rt::ServerMethod::new(
                    ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                        name: "/as.ApplicationServerService/HandleGatewayStats".to_string(),
                        streaming: ::grpc::rt::GrpcStreaming::Unary,
                        req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                        resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                    }),
                    {
                        let handler_copy = handler_arc.clone();
                        ::grpc::rt::MethodHandlerUnary::new(move |o, p| handler_copy.handle_gateway_stats(o, p))
                    },
                ),
                ::grpc::rt::ServerMethod::new(
                    ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                        name: "/as.ApplicationServerService/HandleTxAck".to_string(),
                        streaming: ::grpc::rt::GrpcStreaming::Unary,
                        req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                        resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                    }),
                    {
                        let handler_copy = handler_arc.clone();
                        ::grpc::rt::MethodHandlerUnary::new(move |o, p| handler_copy.handle_tx_ack(o, p))
                    },
                ),
                ::grpc::rt::ServerMethod::new(
                    ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                        name: "/as.ApplicationServerService/SetDeviceStatus".to_string(),
                        streaming: ::grpc::rt::GrpcStreaming::Unary,
                        req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                        resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                    }),
                    {
                        let handler_copy = handler_arc.clone();
                        ::grpc::rt::MethodHandlerUnary::new(move |o, p| handler_copy.set_device_status(o, p))
                    },
                ),
                ::grpc::rt::ServerMethod::new(
                    ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                        name: "/as.ApplicationServerService/SetDeviceLocation".to_string(),
                        streaming: ::grpc::rt::GrpcStreaming::Unary,
                        req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                        resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                    }),
                    {
                        let handler_copy = handler_arc.clone();
                        ::grpc::rt::MethodHandlerUnary::new(move |o, p| handler_copy.set_device_location(o, p))
                    },
                ),
            ],
        )
    }
}
