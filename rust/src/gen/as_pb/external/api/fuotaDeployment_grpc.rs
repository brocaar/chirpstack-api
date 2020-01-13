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

pub trait FUOTADeploymentService {
    fn create_for_device(&self, o: ::grpc::RequestOptions, p: super::fuotaDeployment::CreateFUOTADeploymentForDeviceRequest) -> ::grpc::SingleResponse<super::fuotaDeployment::CreateFUOTADeploymentForDeviceResponse>;

    fn get(&self, o: ::grpc::RequestOptions, p: super::fuotaDeployment::GetFUOTADeploymentRequest) -> ::grpc::SingleResponse<super::fuotaDeployment::GetFUOTADeploymentResponse>;

    fn list(&self, o: ::grpc::RequestOptions, p: super::fuotaDeployment::ListFUOTADeploymentRequest) -> ::grpc::SingleResponse<super::fuotaDeployment::ListFUOTADeploymentResponse>;

    fn get_deployment_device(&self, o: ::grpc::RequestOptions, p: super::fuotaDeployment::GetFUOTADeploymentDeviceRequest) -> ::grpc::SingleResponse<super::fuotaDeployment::GetFUOTADeploymentDeviceResponse>;

    fn list_deployment_devices(&self, o: ::grpc::RequestOptions, p: super::fuotaDeployment::ListFUOTADeploymentDevicesRequest) -> ::grpc::SingleResponse<super::fuotaDeployment::ListFUOTADeploymentDevicesResponse>;
}

// client

pub struct FUOTADeploymentServiceClient {
    grpc_client: ::std::sync::Arc<::grpc::Client>,
    method_CreateForDevice: ::std::sync::Arc<::grpc::rt::MethodDescriptor<super::fuotaDeployment::CreateFUOTADeploymentForDeviceRequest, super::fuotaDeployment::CreateFUOTADeploymentForDeviceResponse>>,
    method_Get: ::std::sync::Arc<::grpc::rt::MethodDescriptor<super::fuotaDeployment::GetFUOTADeploymentRequest, super::fuotaDeployment::GetFUOTADeploymentResponse>>,
    method_List: ::std::sync::Arc<::grpc::rt::MethodDescriptor<super::fuotaDeployment::ListFUOTADeploymentRequest, super::fuotaDeployment::ListFUOTADeploymentResponse>>,
    method_GetDeploymentDevice: ::std::sync::Arc<::grpc::rt::MethodDescriptor<super::fuotaDeployment::GetFUOTADeploymentDeviceRequest, super::fuotaDeployment::GetFUOTADeploymentDeviceResponse>>,
    method_ListDeploymentDevices: ::std::sync::Arc<::grpc::rt::MethodDescriptor<super::fuotaDeployment::ListFUOTADeploymentDevicesRequest, super::fuotaDeployment::ListFUOTADeploymentDevicesResponse>>,
}

impl ::grpc::ClientStub for FUOTADeploymentServiceClient {
    fn with_client(grpc_client: ::std::sync::Arc<::grpc::Client>) -> Self {
        FUOTADeploymentServiceClient {
            grpc_client: grpc_client,
            method_CreateForDevice: ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                name: "/api.FUOTADeploymentService/CreateForDevice".to_string(),
                streaming: ::grpc::rt::GrpcStreaming::Unary,
                req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
            }),
            method_Get: ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                name: "/api.FUOTADeploymentService/Get".to_string(),
                streaming: ::grpc::rt::GrpcStreaming::Unary,
                req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
            }),
            method_List: ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                name: "/api.FUOTADeploymentService/List".to_string(),
                streaming: ::grpc::rt::GrpcStreaming::Unary,
                req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
            }),
            method_GetDeploymentDevice: ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                name: "/api.FUOTADeploymentService/GetDeploymentDevice".to_string(),
                streaming: ::grpc::rt::GrpcStreaming::Unary,
                req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
            }),
            method_ListDeploymentDevices: ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                name: "/api.FUOTADeploymentService/ListDeploymentDevices".to_string(),
                streaming: ::grpc::rt::GrpcStreaming::Unary,
                req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
            }),
        }
    }
}

impl FUOTADeploymentService for FUOTADeploymentServiceClient {
    fn create_for_device(&self, o: ::grpc::RequestOptions, p: super::fuotaDeployment::CreateFUOTADeploymentForDeviceRequest) -> ::grpc::SingleResponse<super::fuotaDeployment::CreateFUOTADeploymentForDeviceResponse> {
        self.grpc_client.call_unary(o, p, self.method_CreateForDevice.clone())
    }

    fn get(&self, o: ::grpc::RequestOptions, p: super::fuotaDeployment::GetFUOTADeploymentRequest) -> ::grpc::SingleResponse<super::fuotaDeployment::GetFUOTADeploymentResponse> {
        self.grpc_client.call_unary(o, p, self.method_Get.clone())
    }

    fn list(&self, o: ::grpc::RequestOptions, p: super::fuotaDeployment::ListFUOTADeploymentRequest) -> ::grpc::SingleResponse<super::fuotaDeployment::ListFUOTADeploymentResponse> {
        self.grpc_client.call_unary(o, p, self.method_List.clone())
    }

    fn get_deployment_device(&self, o: ::grpc::RequestOptions, p: super::fuotaDeployment::GetFUOTADeploymentDeviceRequest) -> ::grpc::SingleResponse<super::fuotaDeployment::GetFUOTADeploymentDeviceResponse> {
        self.grpc_client.call_unary(o, p, self.method_GetDeploymentDevice.clone())
    }

    fn list_deployment_devices(&self, o: ::grpc::RequestOptions, p: super::fuotaDeployment::ListFUOTADeploymentDevicesRequest) -> ::grpc::SingleResponse<super::fuotaDeployment::ListFUOTADeploymentDevicesResponse> {
        self.grpc_client.call_unary(o, p, self.method_ListDeploymentDevices.clone())
    }
}

// server

pub struct FUOTADeploymentServiceServer;


impl FUOTADeploymentServiceServer {
    pub fn new_service_def<H : FUOTADeploymentService + 'static + Sync + Send + 'static>(handler: H) -> ::grpc::rt::ServerServiceDefinition {
        let handler_arc = ::std::sync::Arc::new(handler);
        ::grpc::rt::ServerServiceDefinition::new("/api.FUOTADeploymentService",
            vec![
                ::grpc::rt::ServerMethod::new(
                    ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                        name: "/api.FUOTADeploymentService/CreateForDevice".to_string(),
                        streaming: ::grpc::rt::GrpcStreaming::Unary,
                        req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                        resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                    }),
                    {
                        let handler_copy = handler_arc.clone();
                        ::grpc::rt::MethodHandlerUnary::new(move |o, p| handler_copy.create_for_device(o, p))
                    },
                ),
                ::grpc::rt::ServerMethod::new(
                    ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                        name: "/api.FUOTADeploymentService/Get".to_string(),
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
                        name: "/api.FUOTADeploymentService/List".to_string(),
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
                        name: "/api.FUOTADeploymentService/GetDeploymentDevice".to_string(),
                        streaming: ::grpc::rt::GrpcStreaming::Unary,
                        req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                        resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                    }),
                    {
                        let handler_copy = handler_arc.clone();
                        ::grpc::rt::MethodHandlerUnary::new(move |o, p| handler_copy.get_deployment_device(o, p))
                    },
                ),
                ::grpc::rt::ServerMethod::new(
                    ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                        name: "/api.FUOTADeploymentService/ListDeploymentDevices".to_string(),
                        streaming: ::grpc::rt::GrpcStreaming::Unary,
                        req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                        resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                    }),
                    {
                        let handler_copy = handler_arc.clone();
                        ::grpc::rt::MethodHandlerUnary::new(move |o, p| handler_copy.list_deployment_devices(o, p))
                    },
                ),
            ],
        )
    }
}
