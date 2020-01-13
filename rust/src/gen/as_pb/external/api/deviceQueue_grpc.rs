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

pub trait DeviceQueueService {
    fn enqueue(&self, o: ::grpc::RequestOptions, p: super::deviceQueue::EnqueueDeviceQueueItemRequest) -> ::grpc::SingleResponse<super::deviceQueue::EnqueueDeviceQueueItemResponse>;

    fn flush(&self, o: ::grpc::RequestOptions, p: super::deviceQueue::FlushDeviceQueueRequest) -> ::grpc::SingleResponse<super::empty::Empty>;

    fn list(&self, o: ::grpc::RequestOptions, p: super::deviceQueue::ListDeviceQueueItemsRequest) -> ::grpc::SingleResponse<super::deviceQueue::ListDeviceQueueItemsResponse>;
}

// client

pub struct DeviceQueueServiceClient {
    grpc_client: ::std::sync::Arc<::grpc::Client>,
    method_Enqueue: ::std::sync::Arc<::grpc::rt::MethodDescriptor<super::deviceQueue::EnqueueDeviceQueueItemRequest, super::deviceQueue::EnqueueDeviceQueueItemResponse>>,
    method_Flush: ::std::sync::Arc<::grpc::rt::MethodDescriptor<super::deviceQueue::FlushDeviceQueueRequest, super::empty::Empty>>,
    method_List: ::std::sync::Arc<::grpc::rt::MethodDescriptor<super::deviceQueue::ListDeviceQueueItemsRequest, super::deviceQueue::ListDeviceQueueItemsResponse>>,
}

impl ::grpc::ClientStub for DeviceQueueServiceClient {
    fn with_client(grpc_client: ::std::sync::Arc<::grpc::Client>) -> Self {
        DeviceQueueServiceClient {
            grpc_client: grpc_client,
            method_Enqueue: ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                name: "/api.DeviceQueueService/Enqueue".to_string(),
                streaming: ::grpc::rt::GrpcStreaming::Unary,
                req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
            }),
            method_Flush: ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                name: "/api.DeviceQueueService/Flush".to_string(),
                streaming: ::grpc::rt::GrpcStreaming::Unary,
                req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
            }),
            method_List: ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                name: "/api.DeviceQueueService/List".to_string(),
                streaming: ::grpc::rt::GrpcStreaming::Unary,
                req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
            }),
        }
    }
}

impl DeviceQueueService for DeviceQueueServiceClient {
    fn enqueue(&self, o: ::grpc::RequestOptions, p: super::deviceQueue::EnqueueDeviceQueueItemRequest) -> ::grpc::SingleResponse<super::deviceQueue::EnqueueDeviceQueueItemResponse> {
        self.grpc_client.call_unary(o, p, self.method_Enqueue.clone())
    }

    fn flush(&self, o: ::grpc::RequestOptions, p: super::deviceQueue::FlushDeviceQueueRequest) -> ::grpc::SingleResponse<super::empty::Empty> {
        self.grpc_client.call_unary(o, p, self.method_Flush.clone())
    }

    fn list(&self, o: ::grpc::RequestOptions, p: super::deviceQueue::ListDeviceQueueItemsRequest) -> ::grpc::SingleResponse<super::deviceQueue::ListDeviceQueueItemsResponse> {
        self.grpc_client.call_unary(o, p, self.method_List.clone())
    }
}

// server

pub struct DeviceQueueServiceServer;


impl DeviceQueueServiceServer {
    pub fn new_service_def<H : DeviceQueueService + 'static + Sync + Send + 'static>(handler: H) -> ::grpc::rt::ServerServiceDefinition {
        let handler_arc = ::std::sync::Arc::new(handler);
        ::grpc::rt::ServerServiceDefinition::new("/api.DeviceQueueService",
            vec![
                ::grpc::rt::ServerMethod::new(
                    ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                        name: "/api.DeviceQueueService/Enqueue".to_string(),
                        streaming: ::grpc::rt::GrpcStreaming::Unary,
                        req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                        resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                    }),
                    {
                        let handler_copy = handler_arc.clone();
                        ::grpc::rt::MethodHandlerUnary::new(move |o, p| handler_copy.enqueue(o, p))
                    },
                ),
                ::grpc::rt::ServerMethod::new(
                    ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                        name: "/api.DeviceQueueService/Flush".to_string(),
                        streaming: ::grpc::rt::GrpcStreaming::Unary,
                        req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                        resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                    }),
                    {
                        let handler_copy = handler_arc.clone();
                        ::grpc::rt::MethodHandlerUnary::new(move |o, p| handler_copy.flush(o, p))
                    },
                ),
                ::grpc::rt::ServerMethod::new(
                    ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                        name: "/api.DeviceQueueService/List".to_string(),
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
