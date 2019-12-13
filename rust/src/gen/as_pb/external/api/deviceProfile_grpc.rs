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

pub trait DeviceProfileService {
    fn create(&self, o: ::grpc::RequestOptions, p: super::deviceProfile::CreateDeviceProfileRequest) -> ::grpc::SingleResponse<super::deviceProfile::CreateDeviceProfileResponse>;

    fn get(&self, o: ::grpc::RequestOptions, p: super::deviceProfile::GetDeviceProfileRequest) -> ::grpc::SingleResponse<super::deviceProfile::GetDeviceProfileResponse>;

    fn update(&self, o: ::grpc::RequestOptions, p: super::deviceProfile::UpdateDeviceProfileRequest) -> ::grpc::SingleResponse<super::empty::Empty>;

    fn delete(&self, o: ::grpc::RequestOptions, p: super::deviceProfile::DeleteDeviceProfileRequest) -> ::grpc::SingleResponse<super::empty::Empty>;

    fn list(&self, o: ::grpc::RequestOptions, p: super::deviceProfile::ListDeviceProfileRequest) -> ::grpc::SingleResponse<super::deviceProfile::ListDeviceProfileResponse>;
}

// client

pub struct DeviceProfileServiceClient {
    grpc_client: ::std::sync::Arc<::grpc::Client>,
    method_Create: ::std::sync::Arc<::grpc::rt::MethodDescriptor<super::deviceProfile::CreateDeviceProfileRequest, super::deviceProfile::CreateDeviceProfileResponse>>,
    method_Get: ::std::sync::Arc<::grpc::rt::MethodDescriptor<super::deviceProfile::GetDeviceProfileRequest, super::deviceProfile::GetDeviceProfileResponse>>,
    method_Update: ::std::sync::Arc<::grpc::rt::MethodDescriptor<super::deviceProfile::UpdateDeviceProfileRequest, super::empty::Empty>>,
    method_Delete: ::std::sync::Arc<::grpc::rt::MethodDescriptor<super::deviceProfile::DeleteDeviceProfileRequest, super::empty::Empty>>,
    method_List: ::std::sync::Arc<::grpc::rt::MethodDescriptor<super::deviceProfile::ListDeviceProfileRequest, super::deviceProfile::ListDeviceProfileResponse>>,
}

impl ::grpc::ClientStub for DeviceProfileServiceClient {
    fn with_client(grpc_client: ::std::sync::Arc<::grpc::Client>) -> Self {
        DeviceProfileServiceClient {
            grpc_client: grpc_client,
            method_Create: ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                name: "/api.DeviceProfileService/Create".to_string(),
                streaming: ::grpc::rt::GrpcStreaming::Unary,
                req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
            }),
            method_Get: ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                name: "/api.DeviceProfileService/Get".to_string(),
                streaming: ::grpc::rt::GrpcStreaming::Unary,
                req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
            }),
            method_Update: ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                name: "/api.DeviceProfileService/Update".to_string(),
                streaming: ::grpc::rt::GrpcStreaming::Unary,
                req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
            }),
            method_Delete: ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                name: "/api.DeviceProfileService/Delete".to_string(),
                streaming: ::grpc::rt::GrpcStreaming::Unary,
                req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
            }),
            method_List: ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                name: "/api.DeviceProfileService/List".to_string(),
                streaming: ::grpc::rt::GrpcStreaming::Unary,
                req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
            }),
        }
    }
}

impl DeviceProfileService for DeviceProfileServiceClient {
    fn create(&self, o: ::grpc::RequestOptions, p: super::deviceProfile::CreateDeviceProfileRequest) -> ::grpc::SingleResponse<super::deviceProfile::CreateDeviceProfileResponse> {
        self.grpc_client.call_unary(o, p, self.method_Create.clone())
    }

    fn get(&self, o: ::grpc::RequestOptions, p: super::deviceProfile::GetDeviceProfileRequest) -> ::grpc::SingleResponse<super::deviceProfile::GetDeviceProfileResponse> {
        self.grpc_client.call_unary(o, p, self.method_Get.clone())
    }

    fn update(&self, o: ::grpc::RequestOptions, p: super::deviceProfile::UpdateDeviceProfileRequest) -> ::grpc::SingleResponse<super::empty::Empty> {
        self.grpc_client.call_unary(o, p, self.method_Update.clone())
    }

    fn delete(&self, o: ::grpc::RequestOptions, p: super::deviceProfile::DeleteDeviceProfileRequest) -> ::grpc::SingleResponse<super::empty::Empty> {
        self.grpc_client.call_unary(o, p, self.method_Delete.clone())
    }

    fn list(&self, o: ::grpc::RequestOptions, p: super::deviceProfile::ListDeviceProfileRequest) -> ::grpc::SingleResponse<super::deviceProfile::ListDeviceProfileResponse> {
        self.grpc_client.call_unary(o, p, self.method_List.clone())
    }
}

// server

pub struct DeviceProfileServiceServer;


impl DeviceProfileServiceServer {
    pub fn new_service_def<H : DeviceProfileService + 'static + Sync + Send + 'static>(handler: H) -> ::grpc::rt::ServerServiceDefinition {
        let handler_arc = ::std::sync::Arc::new(handler);
        ::grpc::rt::ServerServiceDefinition::new("/api.DeviceProfileService",
            vec![
                ::grpc::rt::ServerMethod::new(
                    ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                        name: "/api.DeviceProfileService/Create".to_string(),
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
                        name: "/api.DeviceProfileService/Get".to_string(),
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
                        name: "/api.DeviceProfileService/Update".to_string(),
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
                        name: "/api.DeviceProfileService/Delete".to_string(),
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
                        name: "/api.DeviceProfileService/List".to_string(),
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
