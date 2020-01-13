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

pub trait NetworkControllerService {
    fn handle_uplink_meta_data(&self, o: ::grpc::RequestOptions, p: super::nc::HandleUplinkMetaDataRequest) -> ::grpc::SingleResponse<super::empty::Empty>;

    fn handle_downlink_meta_data(&self, o: ::grpc::RequestOptions, p: super::nc::HandleDownlinkMetaDataRequest) -> ::grpc::SingleResponse<super::empty::Empty>;

    fn handle_uplink_mac_command(&self, o: ::grpc::RequestOptions, p: super::nc::HandleUplinkMACCommandRequest) -> ::grpc::SingleResponse<super::empty::Empty>;
}

// client

pub struct NetworkControllerServiceClient {
    grpc_client: ::std::sync::Arc<::grpc::Client>,
    method_HandleUplinkMetaData: ::std::sync::Arc<::grpc::rt::MethodDescriptor<super::nc::HandleUplinkMetaDataRequest, super::empty::Empty>>,
    method_HandleDownlinkMetaData: ::std::sync::Arc<::grpc::rt::MethodDescriptor<super::nc::HandleDownlinkMetaDataRequest, super::empty::Empty>>,
    method_HandleUplinkMACCommand: ::std::sync::Arc<::grpc::rt::MethodDescriptor<super::nc::HandleUplinkMACCommandRequest, super::empty::Empty>>,
}

impl ::grpc::ClientStub for NetworkControllerServiceClient {
    fn with_client(grpc_client: ::std::sync::Arc<::grpc::Client>) -> Self {
        NetworkControllerServiceClient {
            grpc_client: grpc_client,
            method_HandleUplinkMetaData: ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                name: "/nc.NetworkControllerService/HandleUplinkMetaData".to_string(),
                streaming: ::grpc::rt::GrpcStreaming::Unary,
                req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
            }),
            method_HandleDownlinkMetaData: ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                name: "/nc.NetworkControllerService/HandleDownlinkMetaData".to_string(),
                streaming: ::grpc::rt::GrpcStreaming::Unary,
                req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
            }),
            method_HandleUplinkMACCommand: ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                name: "/nc.NetworkControllerService/HandleUplinkMACCommand".to_string(),
                streaming: ::grpc::rt::GrpcStreaming::Unary,
                req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
            }),
        }
    }
}

impl NetworkControllerService for NetworkControllerServiceClient {
    fn handle_uplink_meta_data(&self, o: ::grpc::RequestOptions, p: super::nc::HandleUplinkMetaDataRequest) -> ::grpc::SingleResponse<super::empty::Empty> {
        self.grpc_client.call_unary(o, p, self.method_HandleUplinkMetaData.clone())
    }

    fn handle_downlink_meta_data(&self, o: ::grpc::RequestOptions, p: super::nc::HandleDownlinkMetaDataRequest) -> ::grpc::SingleResponse<super::empty::Empty> {
        self.grpc_client.call_unary(o, p, self.method_HandleDownlinkMetaData.clone())
    }

    fn handle_uplink_mac_command(&self, o: ::grpc::RequestOptions, p: super::nc::HandleUplinkMACCommandRequest) -> ::grpc::SingleResponse<super::empty::Empty> {
        self.grpc_client.call_unary(o, p, self.method_HandleUplinkMACCommand.clone())
    }
}

// server

pub struct NetworkControllerServiceServer;


impl NetworkControllerServiceServer {
    pub fn new_service_def<H : NetworkControllerService + 'static + Sync + Send + 'static>(handler: H) -> ::grpc::rt::ServerServiceDefinition {
        let handler_arc = ::std::sync::Arc::new(handler);
        ::grpc::rt::ServerServiceDefinition::new("/nc.NetworkControllerService",
            vec![
                ::grpc::rt::ServerMethod::new(
                    ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                        name: "/nc.NetworkControllerService/HandleUplinkMetaData".to_string(),
                        streaming: ::grpc::rt::GrpcStreaming::Unary,
                        req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                        resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                    }),
                    {
                        let handler_copy = handler_arc.clone();
                        ::grpc::rt::MethodHandlerUnary::new(move |o, p| handler_copy.handle_uplink_meta_data(o, p))
                    },
                ),
                ::grpc::rt::ServerMethod::new(
                    ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                        name: "/nc.NetworkControllerService/HandleDownlinkMetaData".to_string(),
                        streaming: ::grpc::rt::GrpcStreaming::Unary,
                        req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                        resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                    }),
                    {
                        let handler_copy = handler_arc.clone();
                        ::grpc::rt::MethodHandlerUnary::new(move |o, p| handler_copy.handle_downlink_meta_data(o, p))
                    },
                ),
                ::grpc::rt::ServerMethod::new(
                    ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                        name: "/nc.NetworkControllerService/HandleUplinkMACCommand".to_string(),
                        streaming: ::grpc::rt::GrpcStreaming::Unary,
                        req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                        resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                    }),
                    {
                        let handler_copy = handler_arc.clone();
                        ::grpc::rt::MethodHandlerUnary::new(move |o, p| handler_copy.handle_uplink_mac_command(o, p))
                    },
                ),
            ],
        )
    }
}
