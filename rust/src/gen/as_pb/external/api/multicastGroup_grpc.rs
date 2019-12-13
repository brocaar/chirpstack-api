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

pub trait MulticastGroupService {
    fn create(&self, o: ::grpc::RequestOptions, p: super::multicastGroup::CreateMulticastGroupRequest) -> ::grpc::SingleResponse<super::multicastGroup::CreateMulticastGroupResponse>;

    fn get(&self, o: ::grpc::RequestOptions, p: super::multicastGroup::GetMulticastGroupRequest) -> ::grpc::SingleResponse<super::multicastGroup::GetMulticastGroupResponse>;

    fn update(&self, o: ::grpc::RequestOptions, p: super::multicastGroup::UpdateMulticastGroupRequest) -> ::grpc::SingleResponse<super::empty::Empty>;

    fn delete(&self, o: ::grpc::RequestOptions, p: super::multicastGroup::DeleteMulticastGroupRequest) -> ::grpc::SingleResponse<super::empty::Empty>;

    fn list(&self, o: ::grpc::RequestOptions, p: super::multicastGroup::ListMulticastGroupRequest) -> ::grpc::SingleResponse<super::multicastGroup::ListMulticastGroupResponse>;

    fn add_device(&self, o: ::grpc::RequestOptions, p: super::multicastGroup::AddDeviceToMulticastGroupRequest) -> ::grpc::SingleResponse<super::empty::Empty>;

    fn remove_device(&self, o: ::grpc::RequestOptions, p: super::multicastGroup::RemoveDeviceFromMulticastGroupRequest) -> ::grpc::SingleResponse<super::empty::Empty>;

    fn enqueue(&self, o: ::grpc::RequestOptions, p: super::multicastGroup::EnqueueMulticastQueueItemRequest) -> ::grpc::SingleResponse<super::multicastGroup::EnqueueMulticastQueueItemResponse>;

    fn flush_queue(&self, o: ::grpc::RequestOptions, p: super::multicastGroup::FlushMulticastGroupQueueItemsRequest) -> ::grpc::SingleResponse<super::empty::Empty>;

    fn list_queue(&self, o: ::grpc::RequestOptions, p: super::multicastGroup::ListMulticastGroupQueueItemsRequest) -> ::grpc::SingleResponse<super::multicastGroup::ListMulticastGroupQueueItemsResponse>;
}

// client

pub struct MulticastGroupServiceClient {
    grpc_client: ::std::sync::Arc<::grpc::Client>,
    method_Create: ::std::sync::Arc<::grpc::rt::MethodDescriptor<super::multicastGroup::CreateMulticastGroupRequest, super::multicastGroup::CreateMulticastGroupResponse>>,
    method_Get: ::std::sync::Arc<::grpc::rt::MethodDescriptor<super::multicastGroup::GetMulticastGroupRequest, super::multicastGroup::GetMulticastGroupResponse>>,
    method_Update: ::std::sync::Arc<::grpc::rt::MethodDescriptor<super::multicastGroup::UpdateMulticastGroupRequest, super::empty::Empty>>,
    method_Delete: ::std::sync::Arc<::grpc::rt::MethodDescriptor<super::multicastGroup::DeleteMulticastGroupRequest, super::empty::Empty>>,
    method_List: ::std::sync::Arc<::grpc::rt::MethodDescriptor<super::multicastGroup::ListMulticastGroupRequest, super::multicastGroup::ListMulticastGroupResponse>>,
    method_AddDevice: ::std::sync::Arc<::grpc::rt::MethodDescriptor<super::multicastGroup::AddDeviceToMulticastGroupRequest, super::empty::Empty>>,
    method_RemoveDevice: ::std::sync::Arc<::grpc::rt::MethodDescriptor<super::multicastGroup::RemoveDeviceFromMulticastGroupRequest, super::empty::Empty>>,
    method_Enqueue: ::std::sync::Arc<::grpc::rt::MethodDescriptor<super::multicastGroup::EnqueueMulticastQueueItemRequest, super::multicastGroup::EnqueueMulticastQueueItemResponse>>,
    method_FlushQueue: ::std::sync::Arc<::grpc::rt::MethodDescriptor<super::multicastGroup::FlushMulticastGroupQueueItemsRequest, super::empty::Empty>>,
    method_ListQueue: ::std::sync::Arc<::grpc::rt::MethodDescriptor<super::multicastGroup::ListMulticastGroupQueueItemsRequest, super::multicastGroup::ListMulticastGroupQueueItemsResponse>>,
}

impl ::grpc::ClientStub for MulticastGroupServiceClient {
    fn with_client(grpc_client: ::std::sync::Arc<::grpc::Client>) -> Self {
        MulticastGroupServiceClient {
            grpc_client: grpc_client,
            method_Create: ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                name: "/api.MulticastGroupService/Create".to_string(),
                streaming: ::grpc::rt::GrpcStreaming::Unary,
                req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
            }),
            method_Get: ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                name: "/api.MulticastGroupService/Get".to_string(),
                streaming: ::grpc::rt::GrpcStreaming::Unary,
                req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
            }),
            method_Update: ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                name: "/api.MulticastGroupService/Update".to_string(),
                streaming: ::grpc::rt::GrpcStreaming::Unary,
                req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
            }),
            method_Delete: ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                name: "/api.MulticastGroupService/Delete".to_string(),
                streaming: ::grpc::rt::GrpcStreaming::Unary,
                req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
            }),
            method_List: ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                name: "/api.MulticastGroupService/List".to_string(),
                streaming: ::grpc::rt::GrpcStreaming::Unary,
                req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
            }),
            method_AddDevice: ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                name: "/api.MulticastGroupService/AddDevice".to_string(),
                streaming: ::grpc::rt::GrpcStreaming::Unary,
                req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
            }),
            method_RemoveDevice: ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                name: "/api.MulticastGroupService/RemoveDevice".to_string(),
                streaming: ::grpc::rt::GrpcStreaming::Unary,
                req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
            }),
            method_Enqueue: ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                name: "/api.MulticastGroupService/Enqueue".to_string(),
                streaming: ::grpc::rt::GrpcStreaming::Unary,
                req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
            }),
            method_FlushQueue: ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                name: "/api.MulticastGroupService/FlushQueue".to_string(),
                streaming: ::grpc::rt::GrpcStreaming::Unary,
                req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
            }),
            method_ListQueue: ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                name: "/api.MulticastGroupService/ListQueue".to_string(),
                streaming: ::grpc::rt::GrpcStreaming::Unary,
                req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
            }),
        }
    }
}

impl MulticastGroupService for MulticastGroupServiceClient {
    fn create(&self, o: ::grpc::RequestOptions, p: super::multicastGroup::CreateMulticastGroupRequest) -> ::grpc::SingleResponse<super::multicastGroup::CreateMulticastGroupResponse> {
        self.grpc_client.call_unary(o, p, self.method_Create.clone())
    }

    fn get(&self, o: ::grpc::RequestOptions, p: super::multicastGroup::GetMulticastGroupRequest) -> ::grpc::SingleResponse<super::multicastGroup::GetMulticastGroupResponse> {
        self.grpc_client.call_unary(o, p, self.method_Get.clone())
    }

    fn update(&self, o: ::grpc::RequestOptions, p: super::multicastGroup::UpdateMulticastGroupRequest) -> ::grpc::SingleResponse<super::empty::Empty> {
        self.grpc_client.call_unary(o, p, self.method_Update.clone())
    }

    fn delete(&self, o: ::grpc::RequestOptions, p: super::multicastGroup::DeleteMulticastGroupRequest) -> ::grpc::SingleResponse<super::empty::Empty> {
        self.grpc_client.call_unary(o, p, self.method_Delete.clone())
    }

    fn list(&self, o: ::grpc::RequestOptions, p: super::multicastGroup::ListMulticastGroupRequest) -> ::grpc::SingleResponse<super::multicastGroup::ListMulticastGroupResponse> {
        self.grpc_client.call_unary(o, p, self.method_List.clone())
    }

    fn add_device(&self, o: ::grpc::RequestOptions, p: super::multicastGroup::AddDeviceToMulticastGroupRequest) -> ::grpc::SingleResponse<super::empty::Empty> {
        self.grpc_client.call_unary(o, p, self.method_AddDevice.clone())
    }

    fn remove_device(&self, o: ::grpc::RequestOptions, p: super::multicastGroup::RemoveDeviceFromMulticastGroupRequest) -> ::grpc::SingleResponse<super::empty::Empty> {
        self.grpc_client.call_unary(o, p, self.method_RemoveDevice.clone())
    }

    fn enqueue(&self, o: ::grpc::RequestOptions, p: super::multicastGroup::EnqueueMulticastQueueItemRequest) -> ::grpc::SingleResponse<super::multicastGroup::EnqueueMulticastQueueItemResponse> {
        self.grpc_client.call_unary(o, p, self.method_Enqueue.clone())
    }

    fn flush_queue(&self, o: ::grpc::RequestOptions, p: super::multicastGroup::FlushMulticastGroupQueueItemsRequest) -> ::grpc::SingleResponse<super::empty::Empty> {
        self.grpc_client.call_unary(o, p, self.method_FlushQueue.clone())
    }

    fn list_queue(&self, o: ::grpc::RequestOptions, p: super::multicastGroup::ListMulticastGroupQueueItemsRequest) -> ::grpc::SingleResponse<super::multicastGroup::ListMulticastGroupQueueItemsResponse> {
        self.grpc_client.call_unary(o, p, self.method_ListQueue.clone())
    }
}

// server

pub struct MulticastGroupServiceServer;


impl MulticastGroupServiceServer {
    pub fn new_service_def<H : MulticastGroupService + 'static + Sync + Send + 'static>(handler: H) -> ::grpc::rt::ServerServiceDefinition {
        let handler_arc = ::std::sync::Arc::new(handler);
        ::grpc::rt::ServerServiceDefinition::new("/api.MulticastGroupService",
            vec![
                ::grpc::rt::ServerMethod::new(
                    ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                        name: "/api.MulticastGroupService/Create".to_string(),
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
                        name: "/api.MulticastGroupService/Get".to_string(),
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
                        name: "/api.MulticastGroupService/Update".to_string(),
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
                        name: "/api.MulticastGroupService/Delete".to_string(),
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
                        name: "/api.MulticastGroupService/List".to_string(),
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
                        name: "/api.MulticastGroupService/AddDevice".to_string(),
                        streaming: ::grpc::rt::GrpcStreaming::Unary,
                        req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                        resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                    }),
                    {
                        let handler_copy = handler_arc.clone();
                        ::grpc::rt::MethodHandlerUnary::new(move |o, p| handler_copy.add_device(o, p))
                    },
                ),
                ::grpc::rt::ServerMethod::new(
                    ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                        name: "/api.MulticastGroupService/RemoveDevice".to_string(),
                        streaming: ::grpc::rt::GrpcStreaming::Unary,
                        req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                        resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                    }),
                    {
                        let handler_copy = handler_arc.clone();
                        ::grpc::rt::MethodHandlerUnary::new(move |o, p| handler_copy.remove_device(o, p))
                    },
                ),
                ::grpc::rt::ServerMethod::new(
                    ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                        name: "/api.MulticastGroupService/Enqueue".to_string(),
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
                        name: "/api.MulticastGroupService/FlushQueue".to_string(),
                        streaming: ::grpc::rt::GrpcStreaming::Unary,
                        req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                        resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                    }),
                    {
                        let handler_copy = handler_arc.clone();
                        ::grpc::rt::MethodHandlerUnary::new(move |o, p| handler_copy.flush_queue(o, p))
                    },
                ),
                ::grpc::rt::ServerMethod::new(
                    ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                        name: "/api.MulticastGroupService/ListQueue".to_string(),
                        streaming: ::grpc::rt::GrpcStreaming::Unary,
                        req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                        resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                    }),
                    {
                        let handler_copy = handler_arc.clone();
                        ::grpc::rt::MethodHandlerUnary::new(move |o, p| handler_copy.list_queue(o, p))
                    },
                ),
            ],
        )
    }
}
