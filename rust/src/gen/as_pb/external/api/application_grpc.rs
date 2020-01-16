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

pub trait ApplicationService {
    fn create(&self, o: ::grpc::RequestOptions, p: super::application::CreateApplicationRequest) -> ::grpc::SingleResponse<super::application::CreateApplicationResponse>;

    fn get(&self, o: ::grpc::RequestOptions, p: super::application::GetApplicationRequest) -> ::grpc::SingleResponse<super::application::GetApplicationResponse>;

    fn update(&self, o: ::grpc::RequestOptions, p: super::application::UpdateApplicationRequest) -> ::grpc::SingleResponse<super::empty::Empty>;

    fn delete(&self, o: ::grpc::RequestOptions, p: super::application::DeleteApplicationRequest) -> ::grpc::SingleResponse<super::empty::Empty>;

    fn list(&self, o: ::grpc::RequestOptions, p: super::application::ListApplicationRequest) -> ::grpc::SingleResponse<super::application::ListApplicationResponse>;

    fn create_http_integration(&self, o: ::grpc::RequestOptions, p: super::application::CreateHTTPIntegrationRequest) -> ::grpc::SingleResponse<super::empty::Empty>;

    fn get_http_integration(&self, o: ::grpc::RequestOptions, p: super::application::GetHTTPIntegrationRequest) -> ::grpc::SingleResponse<super::application::GetHTTPIntegrationResponse>;

    fn update_http_integration(&self, o: ::grpc::RequestOptions, p: super::application::UpdateHTTPIntegrationRequest) -> ::grpc::SingleResponse<super::empty::Empty>;

    fn delete_http_integration(&self, o: ::grpc::RequestOptions, p: super::application::DeleteHTTPIntegrationRequest) -> ::grpc::SingleResponse<super::empty::Empty>;

    fn create_influx_db_integration(&self, o: ::grpc::RequestOptions, p: super::application::CreateInfluxDBIntegrationRequest) -> ::grpc::SingleResponse<super::empty::Empty>;

    fn get_influx_db_integration(&self, o: ::grpc::RequestOptions, p: super::application::GetInfluxDBIntegrationRequest) -> ::grpc::SingleResponse<super::application::GetInfluxDBIntegrationResponse>;

    fn update_influx_db_integration(&self, o: ::grpc::RequestOptions, p: super::application::UpdateInfluxDBIntegrationRequest) -> ::grpc::SingleResponse<super::empty::Empty>;

    fn delete_influx_db_integration(&self, o: ::grpc::RequestOptions, p: super::application::DeleteInfluxDBIntegrationRequest) -> ::grpc::SingleResponse<super::empty::Empty>;

    fn create_things_board_integration(&self, o: ::grpc::RequestOptions, p: super::application::CreateThingsBoardIntegrationRequest) -> ::grpc::SingleResponse<super::empty::Empty>;

    fn get_things_board_integration(&self, o: ::grpc::RequestOptions, p: super::application::GetThingsBoardIntegrationRequest) -> ::grpc::SingleResponse<super::application::GetThingsBoardIntegrationResponse>;

    fn update_things_board_integration(&self, o: ::grpc::RequestOptions, p: super::application::UpdateThingsBoardIntegrationRequest) -> ::grpc::SingleResponse<super::empty::Empty>;

    fn delete_things_board_integration(&self, o: ::grpc::RequestOptions, p: super::application::DeleteThingsBoardIntegrationRequest) -> ::grpc::SingleResponse<super::empty::Empty>;

    fn create_my_devices_integration(&self, o: ::grpc::RequestOptions, p: super::application::CreateMyDevicesIntegrationRequest) -> ::grpc::SingleResponse<super::empty::Empty>;

    fn get_my_devices_integration(&self, o: ::grpc::RequestOptions, p: super::application::GetMyDevicesIntegrationRequest) -> ::grpc::SingleResponse<super::application::GetMyDevicesIntegrationResponse>;

    fn update_my_devices_integration(&self, o: ::grpc::RequestOptions, p: super::application::UpdateMyDevicesIntegrationRequest) -> ::grpc::SingleResponse<super::empty::Empty>;

    fn delete_my_devices_integration(&self, o: ::grpc::RequestOptions, p: super::application::DeleteMyDevicesIntegrationRequest) -> ::grpc::SingleResponse<super::empty::Empty>;

    fn list_integrations(&self, o: ::grpc::RequestOptions, p: super::application::ListIntegrationRequest) -> ::grpc::SingleResponse<super::application::ListIntegrationResponse>;
}

// client

pub struct ApplicationServiceClient {
    grpc_client: ::std::sync::Arc<::grpc::Client>,
    method_Create: ::std::sync::Arc<::grpc::rt::MethodDescriptor<super::application::CreateApplicationRequest, super::application::CreateApplicationResponse>>,
    method_Get: ::std::sync::Arc<::grpc::rt::MethodDescriptor<super::application::GetApplicationRequest, super::application::GetApplicationResponse>>,
    method_Update: ::std::sync::Arc<::grpc::rt::MethodDescriptor<super::application::UpdateApplicationRequest, super::empty::Empty>>,
    method_Delete: ::std::sync::Arc<::grpc::rt::MethodDescriptor<super::application::DeleteApplicationRequest, super::empty::Empty>>,
    method_List: ::std::sync::Arc<::grpc::rt::MethodDescriptor<super::application::ListApplicationRequest, super::application::ListApplicationResponse>>,
    method_CreateHTTPIntegration: ::std::sync::Arc<::grpc::rt::MethodDescriptor<super::application::CreateHTTPIntegrationRequest, super::empty::Empty>>,
    method_GetHTTPIntegration: ::std::sync::Arc<::grpc::rt::MethodDescriptor<super::application::GetHTTPIntegrationRequest, super::application::GetHTTPIntegrationResponse>>,
    method_UpdateHTTPIntegration: ::std::sync::Arc<::grpc::rt::MethodDescriptor<super::application::UpdateHTTPIntegrationRequest, super::empty::Empty>>,
    method_DeleteHTTPIntegration: ::std::sync::Arc<::grpc::rt::MethodDescriptor<super::application::DeleteHTTPIntegrationRequest, super::empty::Empty>>,
    method_CreateInfluxDBIntegration: ::std::sync::Arc<::grpc::rt::MethodDescriptor<super::application::CreateInfluxDBIntegrationRequest, super::empty::Empty>>,
    method_GetInfluxDBIntegration: ::std::sync::Arc<::grpc::rt::MethodDescriptor<super::application::GetInfluxDBIntegrationRequest, super::application::GetInfluxDBIntegrationResponse>>,
    method_UpdateInfluxDBIntegration: ::std::sync::Arc<::grpc::rt::MethodDescriptor<super::application::UpdateInfluxDBIntegrationRequest, super::empty::Empty>>,
    method_DeleteInfluxDBIntegration: ::std::sync::Arc<::grpc::rt::MethodDescriptor<super::application::DeleteInfluxDBIntegrationRequest, super::empty::Empty>>,
    method_CreateThingsBoardIntegration: ::std::sync::Arc<::grpc::rt::MethodDescriptor<super::application::CreateThingsBoardIntegrationRequest, super::empty::Empty>>,
    method_GetThingsBoardIntegration: ::std::sync::Arc<::grpc::rt::MethodDescriptor<super::application::GetThingsBoardIntegrationRequest, super::application::GetThingsBoardIntegrationResponse>>,
    method_UpdateThingsBoardIntegration: ::std::sync::Arc<::grpc::rt::MethodDescriptor<super::application::UpdateThingsBoardIntegrationRequest, super::empty::Empty>>,
    method_DeleteThingsBoardIntegration: ::std::sync::Arc<::grpc::rt::MethodDescriptor<super::application::DeleteThingsBoardIntegrationRequest, super::empty::Empty>>,
    method_CreateMyDevicesIntegration: ::std::sync::Arc<::grpc::rt::MethodDescriptor<super::application::CreateMyDevicesIntegrationRequest, super::empty::Empty>>,
    method_GetMyDevicesIntegration: ::std::sync::Arc<::grpc::rt::MethodDescriptor<super::application::GetMyDevicesIntegrationRequest, super::application::GetMyDevicesIntegrationResponse>>,
    method_UpdateMyDevicesIntegration: ::std::sync::Arc<::grpc::rt::MethodDescriptor<super::application::UpdateMyDevicesIntegrationRequest, super::empty::Empty>>,
    method_DeleteMyDevicesIntegration: ::std::sync::Arc<::grpc::rt::MethodDescriptor<super::application::DeleteMyDevicesIntegrationRequest, super::empty::Empty>>,
    method_ListIntegrations: ::std::sync::Arc<::grpc::rt::MethodDescriptor<super::application::ListIntegrationRequest, super::application::ListIntegrationResponse>>,
}

impl ::grpc::ClientStub for ApplicationServiceClient {
    fn with_client(grpc_client: ::std::sync::Arc<::grpc::Client>) -> Self {
        ApplicationServiceClient {
            grpc_client: grpc_client,
            method_Create: ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                name: "/api.ApplicationService/Create".to_string(),
                streaming: ::grpc::rt::GrpcStreaming::Unary,
                req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
            }),
            method_Get: ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                name: "/api.ApplicationService/Get".to_string(),
                streaming: ::grpc::rt::GrpcStreaming::Unary,
                req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
            }),
            method_Update: ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                name: "/api.ApplicationService/Update".to_string(),
                streaming: ::grpc::rt::GrpcStreaming::Unary,
                req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
            }),
            method_Delete: ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                name: "/api.ApplicationService/Delete".to_string(),
                streaming: ::grpc::rt::GrpcStreaming::Unary,
                req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
            }),
            method_List: ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                name: "/api.ApplicationService/List".to_string(),
                streaming: ::grpc::rt::GrpcStreaming::Unary,
                req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
            }),
            method_CreateHTTPIntegration: ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                name: "/api.ApplicationService/CreateHTTPIntegration".to_string(),
                streaming: ::grpc::rt::GrpcStreaming::Unary,
                req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
            }),
            method_GetHTTPIntegration: ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                name: "/api.ApplicationService/GetHTTPIntegration".to_string(),
                streaming: ::grpc::rt::GrpcStreaming::Unary,
                req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
            }),
            method_UpdateHTTPIntegration: ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                name: "/api.ApplicationService/UpdateHTTPIntegration".to_string(),
                streaming: ::grpc::rt::GrpcStreaming::Unary,
                req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
            }),
            method_DeleteHTTPIntegration: ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                name: "/api.ApplicationService/DeleteHTTPIntegration".to_string(),
                streaming: ::grpc::rt::GrpcStreaming::Unary,
                req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
            }),
            method_CreateInfluxDBIntegration: ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                name: "/api.ApplicationService/CreateInfluxDBIntegration".to_string(),
                streaming: ::grpc::rt::GrpcStreaming::Unary,
                req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
            }),
            method_GetInfluxDBIntegration: ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                name: "/api.ApplicationService/GetInfluxDBIntegration".to_string(),
                streaming: ::grpc::rt::GrpcStreaming::Unary,
                req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
            }),
            method_UpdateInfluxDBIntegration: ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                name: "/api.ApplicationService/UpdateInfluxDBIntegration".to_string(),
                streaming: ::grpc::rt::GrpcStreaming::Unary,
                req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
            }),
            method_DeleteInfluxDBIntegration: ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                name: "/api.ApplicationService/DeleteInfluxDBIntegration".to_string(),
                streaming: ::grpc::rt::GrpcStreaming::Unary,
                req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
            }),
            method_CreateThingsBoardIntegration: ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                name: "/api.ApplicationService/CreateThingsBoardIntegration".to_string(),
                streaming: ::grpc::rt::GrpcStreaming::Unary,
                req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
            }),
            method_GetThingsBoardIntegration: ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                name: "/api.ApplicationService/GetThingsBoardIntegration".to_string(),
                streaming: ::grpc::rt::GrpcStreaming::Unary,
                req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
            }),
            method_UpdateThingsBoardIntegration: ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                name: "/api.ApplicationService/UpdateThingsBoardIntegration".to_string(),
                streaming: ::grpc::rt::GrpcStreaming::Unary,
                req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
            }),
            method_DeleteThingsBoardIntegration: ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                name: "/api.ApplicationService/DeleteThingsBoardIntegration".to_string(),
                streaming: ::grpc::rt::GrpcStreaming::Unary,
                req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
            }),
            method_CreateMyDevicesIntegration: ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                name: "/api.ApplicationService/CreateMyDevicesIntegration".to_string(),
                streaming: ::grpc::rt::GrpcStreaming::Unary,
                req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
            }),
            method_GetMyDevicesIntegration: ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                name: "/api.ApplicationService/GetMyDevicesIntegration".to_string(),
                streaming: ::grpc::rt::GrpcStreaming::Unary,
                req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
            }),
            method_UpdateMyDevicesIntegration: ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                name: "/api.ApplicationService/UpdateMyDevicesIntegration".to_string(),
                streaming: ::grpc::rt::GrpcStreaming::Unary,
                req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
            }),
            method_DeleteMyDevicesIntegration: ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                name: "/api.ApplicationService/DeleteMyDevicesIntegration".to_string(),
                streaming: ::grpc::rt::GrpcStreaming::Unary,
                req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
            }),
            method_ListIntegrations: ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                name: "/api.ApplicationService/ListIntegrations".to_string(),
                streaming: ::grpc::rt::GrpcStreaming::Unary,
                req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
            }),
        }
    }
}

impl ApplicationService for ApplicationServiceClient {
    fn create(&self, o: ::grpc::RequestOptions, p: super::application::CreateApplicationRequest) -> ::grpc::SingleResponse<super::application::CreateApplicationResponse> {
        self.grpc_client.call_unary(o, p, self.method_Create.clone())
    }

    fn get(&self, o: ::grpc::RequestOptions, p: super::application::GetApplicationRequest) -> ::grpc::SingleResponse<super::application::GetApplicationResponse> {
        self.grpc_client.call_unary(o, p, self.method_Get.clone())
    }

    fn update(&self, o: ::grpc::RequestOptions, p: super::application::UpdateApplicationRequest) -> ::grpc::SingleResponse<super::empty::Empty> {
        self.grpc_client.call_unary(o, p, self.method_Update.clone())
    }

    fn delete(&self, o: ::grpc::RequestOptions, p: super::application::DeleteApplicationRequest) -> ::grpc::SingleResponse<super::empty::Empty> {
        self.grpc_client.call_unary(o, p, self.method_Delete.clone())
    }

    fn list(&self, o: ::grpc::RequestOptions, p: super::application::ListApplicationRequest) -> ::grpc::SingleResponse<super::application::ListApplicationResponse> {
        self.grpc_client.call_unary(o, p, self.method_List.clone())
    }

    fn create_http_integration(&self, o: ::grpc::RequestOptions, p: super::application::CreateHTTPIntegrationRequest) -> ::grpc::SingleResponse<super::empty::Empty> {
        self.grpc_client.call_unary(o, p, self.method_CreateHTTPIntegration.clone())
    }

    fn get_http_integration(&self, o: ::grpc::RequestOptions, p: super::application::GetHTTPIntegrationRequest) -> ::grpc::SingleResponse<super::application::GetHTTPIntegrationResponse> {
        self.grpc_client.call_unary(o, p, self.method_GetHTTPIntegration.clone())
    }

    fn update_http_integration(&self, o: ::grpc::RequestOptions, p: super::application::UpdateHTTPIntegrationRequest) -> ::grpc::SingleResponse<super::empty::Empty> {
        self.grpc_client.call_unary(o, p, self.method_UpdateHTTPIntegration.clone())
    }

    fn delete_http_integration(&self, o: ::grpc::RequestOptions, p: super::application::DeleteHTTPIntegrationRequest) -> ::grpc::SingleResponse<super::empty::Empty> {
        self.grpc_client.call_unary(o, p, self.method_DeleteHTTPIntegration.clone())
    }

    fn create_influx_db_integration(&self, o: ::grpc::RequestOptions, p: super::application::CreateInfluxDBIntegrationRequest) -> ::grpc::SingleResponse<super::empty::Empty> {
        self.grpc_client.call_unary(o, p, self.method_CreateInfluxDBIntegration.clone())
    }

    fn get_influx_db_integration(&self, o: ::grpc::RequestOptions, p: super::application::GetInfluxDBIntegrationRequest) -> ::grpc::SingleResponse<super::application::GetInfluxDBIntegrationResponse> {
        self.grpc_client.call_unary(o, p, self.method_GetInfluxDBIntegration.clone())
    }

    fn update_influx_db_integration(&self, o: ::grpc::RequestOptions, p: super::application::UpdateInfluxDBIntegrationRequest) -> ::grpc::SingleResponse<super::empty::Empty> {
        self.grpc_client.call_unary(o, p, self.method_UpdateInfluxDBIntegration.clone())
    }

    fn delete_influx_db_integration(&self, o: ::grpc::RequestOptions, p: super::application::DeleteInfluxDBIntegrationRequest) -> ::grpc::SingleResponse<super::empty::Empty> {
        self.grpc_client.call_unary(o, p, self.method_DeleteInfluxDBIntegration.clone())
    }

    fn create_things_board_integration(&self, o: ::grpc::RequestOptions, p: super::application::CreateThingsBoardIntegrationRequest) -> ::grpc::SingleResponse<super::empty::Empty> {
        self.grpc_client.call_unary(o, p, self.method_CreateThingsBoardIntegration.clone())
    }

    fn get_things_board_integration(&self, o: ::grpc::RequestOptions, p: super::application::GetThingsBoardIntegrationRequest) -> ::grpc::SingleResponse<super::application::GetThingsBoardIntegrationResponse> {
        self.grpc_client.call_unary(o, p, self.method_GetThingsBoardIntegration.clone())
    }

    fn update_things_board_integration(&self, o: ::grpc::RequestOptions, p: super::application::UpdateThingsBoardIntegrationRequest) -> ::grpc::SingleResponse<super::empty::Empty> {
        self.grpc_client.call_unary(o, p, self.method_UpdateThingsBoardIntegration.clone())
    }

    fn delete_things_board_integration(&self, o: ::grpc::RequestOptions, p: super::application::DeleteThingsBoardIntegrationRequest) -> ::grpc::SingleResponse<super::empty::Empty> {
        self.grpc_client.call_unary(o, p, self.method_DeleteThingsBoardIntegration.clone())
    }

    fn create_my_devices_integration(&self, o: ::grpc::RequestOptions, p: super::application::CreateMyDevicesIntegrationRequest) -> ::grpc::SingleResponse<super::empty::Empty> {
        self.grpc_client.call_unary(o, p, self.method_CreateMyDevicesIntegration.clone())
    }

    fn get_my_devices_integration(&self, o: ::grpc::RequestOptions, p: super::application::GetMyDevicesIntegrationRequest) -> ::grpc::SingleResponse<super::application::GetMyDevicesIntegrationResponse> {
        self.grpc_client.call_unary(o, p, self.method_GetMyDevicesIntegration.clone())
    }

    fn update_my_devices_integration(&self, o: ::grpc::RequestOptions, p: super::application::UpdateMyDevicesIntegrationRequest) -> ::grpc::SingleResponse<super::empty::Empty> {
        self.grpc_client.call_unary(o, p, self.method_UpdateMyDevicesIntegration.clone())
    }

    fn delete_my_devices_integration(&self, o: ::grpc::RequestOptions, p: super::application::DeleteMyDevicesIntegrationRequest) -> ::grpc::SingleResponse<super::empty::Empty> {
        self.grpc_client.call_unary(o, p, self.method_DeleteMyDevicesIntegration.clone())
    }

    fn list_integrations(&self, o: ::grpc::RequestOptions, p: super::application::ListIntegrationRequest) -> ::grpc::SingleResponse<super::application::ListIntegrationResponse> {
        self.grpc_client.call_unary(o, p, self.method_ListIntegrations.clone())
    }
}

// server

pub struct ApplicationServiceServer;


impl ApplicationServiceServer {
    pub fn new_service_def<H : ApplicationService + 'static + Sync + Send + 'static>(handler: H) -> ::grpc::rt::ServerServiceDefinition {
        let handler_arc = ::std::sync::Arc::new(handler);
        ::grpc::rt::ServerServiceDefinition::new("/api.ApplicationService",
            vec![
                ::grpc::rt::ServerMethod::new(
                    ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                        name: "/api.ApplicationService/Create".to_string(),
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
                        name: "/api.ApplicationService/Get".to_string(),
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
                        name: "/api.ApplicationService/Update".to_string(),
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
                        name: "/api.ApplicationService/Delete".to_string(),
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
                        name: "/api.ApplicationService/List".to_string(),
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
                        name: "/api.ApplicationService/CreateHTTPIntegration".to_string(),
                        streaming: ::grpc::rt::GrpcStreaming::Unary,
                        req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                        resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                    }),
                    {
                        let handler_copy = handler_arc.clone();
                        ::grpc::rt::MethodHandlerUnary::new(move |o, p| handler_copy.create_http_integration(o, p))
                    },
                ),
                ::grpc::rt::ServerMethod::new(
                    ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                        name: "/api.ApplicationService/GetHTTPIntegration".to_string(),
                        streaming: ::grpc::rt::GrpcStreaming::Unary,
                        req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                        resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                    }),
                    {
                        let handler_copy = handler_arc.clone();
                        ::grpc::rt::MethodHandlerUnary::new(move |o, p| handler_copy.get_http_integration(o, p))
                    },
                ),
                ::grpc::rt::ServerMethod::new(
                    ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                        name: "/api.ApplicationService/UpdateHTTPIntegration".to_string(),
                        streaming: ::grpc::rt::GrpcStreaming::Unary,
                        req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                        resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                    }),
                    {
                        let handler_copy = handler_arc.clone();
                        ::grpc::rt::MethodHandlerUnary::new(move |o, p| handler_copy.update_http_integration(o, p))
                    },
                ),
                ::grpc::rt::ServerMethod::new(
                    ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                        name: "/api.ApplicationService/DeleteHTTPIntegration".to_string(),
                        streaming: ::grpc::rt::GrpcStreaming::Unary,
                        req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                        resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                    }),
                    {
                        let handler_copy = handler_arc.clone();
                        ::grpc::rt::MethodHandlerUnary::new(move |o, p| handler_copy.delete_http_integration(o, p))
                    },
                ),
                ::grpc::rt::ServerMethod::new(
                    ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                        name: "/api.ApplicationService/CreateInfluxDBIntegration".to_string(),
                        streaming: ::grpc::rt::GrpcStreaming::Unary,
                        req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                        resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                    }),
                    {
                        let handler_copy = handler_arc.clone();
                        ::grpc::rt::MethodHandlerUnary::new(move |o, p| handler_copy.create_influx_db_integration(o, p))
                    },
                ),
                ::grpc::rt::ServerMethod::new(
                    ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                        name: "/api.ApplicationService/GetInfluxDBIntegration".to_string(),
                        streaming: ::grpc::rt::GrpcStreaming::Unary,
                        req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                        resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                    }),
                    {
                        let handler_copy = handler_arc.clone();
                        ::grpc::rt::MethodHandlerUnary::new(move |o, p| handler_copy.get_influx_db_integration(o, p))
                    },
                ),
                ::grpc::rt::ServerMethod::new(
                    ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                        name: "/api.ApplicationService/UpdateInfluxDBIntegration".to_string(),
                        streaming: ::grpc::rt::GrpcStreaming::Unary,
                        req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                        resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                    }),
                    {
                        let handler_copy = handler_arc.clone();
                        ::grpc::rt::MethodHandlerUnary::new(move |o, p| handler_copy.update_influx_db_integration(o, p))
                    },
                ),
                ::grpc::rt::ServerMethod::new(
                    ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                        name: "/api.ApplicationService/DeleteInfluxDBIntegration".to_string(),
                        streaming: ::grpc::rt::GrpcStreaming::Unary,
                        req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                        resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                    }),
                    {
                        let handler_copy = handler_arc.clone();
                        ::grpc::rt::MethodHandlerUnary::new(move |o, p| handler_copy.delete_influx_db_integration(o, p))
                    },
                ),
                ::grpc::rt::ServerMethod::new(
                    ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                        name: "/api.ApplicationService/CreateThingsBoardIntegration".to_string(),
                        streaming: ::grpc::rt::GrpcStreaming::Unary,
                        req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                        resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                    }),
                    {
                        let handler_copy = handler_arc.clone();
                        ::grpc::rt::MethodHandlerUnary::new(move |o, p| handler_copy.create_things_board_integration(o, p))
                    },
                ),
                ::grpc::rt::ServerMethod::new(
                    ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                        name: "/api.ApplicationService/GetThingsBoardIntegration".to_string(),
                        streaming: ::grpc::rt::GrpcStreaming::Unary,
                        req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                        resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                    }),
                    {
                        let handler_copy = handler_arc.clone();
                        ::grpc::rt::MethodHandlerUnary::new(move |o, p| handler_copy.get_things_board_integration(o, p))
                    },
                ),
                ::grpc::rt::ServerMethod::new(
                    ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                        name: "/api.ApplicationService/UpdateThingsBoardIntegration".to_string(),
                        streaming: ::grpc::rt::GrpcStreaming::Unary,
                        req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                        resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                    }),
                    {
                        let handler_copy = handler_arc.clone();
                        ::grpc::rt::MethodHandlerUnary::new(move |o, p| handler_copy.update_things_board_integration(o, p))
                    },
                ),
                ::grpc::rt::ServerMethod::new(
                    ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                        name: "/api.ApplicationService/DeleteThingsBoardIntegration".to_string(),
                        streaming: ::grpc::rt::GrpcStreaming::Unary,
                        req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                        resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                    }),
                    {
                        let handler_copy = handler_arc.clone();
                        ::grpc::rt::MethodHandlerUnary::new(move |o, p| handler_copy.delete_things_board_integration(o, p))
                    },
                ),
                ::grpc::rt::ServerMethod::new(
                    ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                        name: "/api.ApplicationService/CreateMyDevicesIntegration".to_string(),
                        streaming: ::grpc::rt::GrpcStreaming::Unary,
                        req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                        resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                    }),
                    {
                        let handler_copy = handler_arc.clone();
                        ::grpc::rt::MethodHandlerUnary::new(move |o, p| handler_copy.create_my_devices_integration(o, p))
                    },
                ),
                ::grpc::rt::ServerMethod::new(
                    ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                        name: "/api.ApplicationService/GetMyDevicesIntegration".to_string(),
                        streaming: ::grpc::rt::GrpcStreaming::Unary,
                        req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                        resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                    }),
                    {
                        let handler_copy = handler_arc.clone();
                        ::grpc::rt::MethodHandlerUnary::new(move |o, p| handler_copy.get_my_devices_integration(o, p))
                    },
                ),
                ::grpc::rt::ServerMethod::new(
                    ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                        name: "/api.ApplicationService/UpdateMyDevicesIntegration".to_string(),
                        streaming: ::grpc::rt::GrpcStreaming::Unary,
                        req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                        resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                    }),
                    {
                        let handler_copy = handler_arc.clone();
                        ::grpc::rt::MethodHandlerUnary::new(move |o, p| handler_copy.update_my_devices_integration(o, p))
                    },
                ),
                ::grpc::rt::ServerMethod::new(
                    ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                        name: "/api.ApplicationService/DeleteMyDevicesIntegration".to_string(),
                        streaming: ::grpc::rt::GrpcStreaming::Unary,
                        req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                        resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                    }),
                    {
                        let handler_copy = handler_arc.clone();
                        ::grpc::rt::MethodHandlerUnary::new(move |o, p| handler_copy.delete_my_devices_integration(o, p))
                    },
                ),
                ::grpc::rt::ServerMethod::new(
                    ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                        name: "/api.ApplicationService/ListIntegrations".to_string(),
                        streaming: ::grpc::rt::GrpcStreaming::Unary,
                        req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                        resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                    }),
                    {
                        let handler_copy = handler_arc.clone();
                        ::grpc::rt::MethodHandlerUnary::new(move |o, p| handler_copy.list_integrations(o, p))
                    },
                ),
            ],
        )
    }
}
