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

pub trait NetworkServerService {
    fn create_service_profile(&self, o: ::grpc::RequestOptions, p: super::ns::CreateServiceProfileRequest) -> ::grpc::SingleResponse<super::ns::CreateServiceProfileResponse>;

    fn get_service_profile(&self, o: ::grpc::RequestOptions, p: super::ns::GetServiceProfileRequest) -> ::grpc::SingleResponse<super::ns::GetServiceProfileResponse>;

    fn update_service_profile(&self, o: ::grpc::RequestOptions, p: super::ns::UpdateServiceProfileRequest) -> ::grpc::SingleResponse<super::empty::Empty>;

    fn delete_service_profile(&self, o: ::grpc::RequestOptions, p: super::ns::DeleteServiceProfileRequest) -> ::grpc::SingleResponse<super::empty::Empty>;

    fn create_routing_profile(&self, o: ::grpc::RequestOptions, p: super::ns::CreateRoutingProfileRequest) -> ::grpc::SingleResponse<super::ns::CreateRoutingProfileResponse>;

    fn get_routing_profile(&self, o: ::grpc::RequestOptions, p: super::ns::GetRoutingProfileRequest) -> ::grpc::SingleResponse<super::ns::GetRoutingProfileResponse>;

    fn update_routing_profile(&self, o: ::grpc::RequestOptions, p: super::ns::UpdateRoutingProfileRequest) -> ::grpc::SingleResponse<super::empty::Empty>;

    fn delete_routing_profile(&self, o: ::grpc::RequestOptions, p: super::ns::DeleteRoutingProfileRequest) -> ::grpc::SingleResponse<super::empty::Empty>;

    fn create_device_profile(&self, o: ::grpc::RequestOptions, p: super::ns::CreateDeviceProfileRequest) -> ::grpc::SingleResponse<super::ns::CreateDeviceProfileResponse>;

    fn get_device_profile(&self, o: ::grpc::RequestOptions, p: super::ns::GetDeviceProfileRequest) -> ::grpc::SingleResponse<super::ns::GetDeviceProfileResponse>;

    fn update_device_profile(&self, o: ::grpc::RequestOptions, p: super::ns::UpdateDeviceProfileRequest) -> ::grpc::SingleResponse<super::empty::Empty>;

    fn delete_device_profile(&self, o: ::grpc::RequestOptions, p: super::ns::DeleteDeviceProfileRequest) -> ::grpc::SingleResponse<super::empty::Empty>;

    fn create_device(&self, o: ::grpc::RequestOptions, p: super::ns::CreateDeviceRequest) -> ::grpc::SingleResponse<super::empty::Empty>;

    fn get_device(&self, o: ::grpc::RequestOptions, p: super::ns::GetDeviceRequest) -> ::grpc::SingleResponse<super::ns::GetDeviceResponse>;

    fn update_device(&self, o: ::grpc::RequestOptions, p: super::ns::UpdateDeviceRequest) -> ::grpc::SingleResponse<super::empty::Empty>;

    fn delete_device(&self, o: ::grpc::RequestOptions, p: super::ns::DeleteDeviceRequest) -> ::grpc::SingleResponse<super::empty::Empty>;

    fn activate_device(&self, o: ::grpc::RequestOptions, p: super::ns::ActivateDeviceRequest) -> ::grpc::SingleResponse<super::empty::Empty>;

    fn deactivate_device(&self, o: ::grpc::RequestOptions, p: super::ns::DeactivateDeviceRequest) -> ::grpc::SingleResponse<super::empty::Empty>;

    fn get_device_activation(&self, o: ::grpc::RequestOptions, p: super::ns::GetDeviceActivationRequest) -> ::grpc::SingleResponse<super::ns::GetDeviceActivationResponse>;

    fn create_device_queue_item(&self, o: ::grpc::RequestOptions, p: super::ns::CreateDeviceQueueItemRequest) -> ::grpc::SingleResponse<super::empty::Empty>;

    fn flush_device_queue_for_dev_eui(&self, o: ::grpc::RequestOptions, p: super::ns::FlushDeviceQueueForDevEUIRequest) -> ::grpc::SingleResponse<super::empty::Empty>;

    fn get_device_queue_items_for_dev_eui(&self, o: ::grpc::RequestOptions, p: super::ns::GetDeviceQueueItemsForDevEUIRequest) -> ::grpc::SingleResponse<super::ns::GetDeviceQueueItemsForDevEUIResponse>;

    fn get_next_downlink_f_cnt_for_dev_eui(&self, o: ::grpc::RequestOptions, p: super::ns::GetNextDownlinkFCntForDevEUIRequest) -> ::grpc::SingleResponse<super::ns::GetNextDownlinkFCntForDevEUIResponse>;

    fn get_random_dev_addr(&self, o: ::grpc::RequestOptions, p: super::empty::Empty) -> ::grpc::SingleResponse<super::ns::GetRandomDevAddrResponse>;

    fn create_mac_command_queue_item(&self, o: ::grpc::RequestOptions, p: super::ns::CreateMACCommandQueueItemRequest) -> ::grpc::SingleResponse<super::empty::Empty>;

    fn send_proprietary_payload(&self, o: ::grpc::RequestOptions, p: super::ns::SendProprietaryPayloadRequest) -> ::grpc::SingleResponse<super::empty::Empty>;

    fn create_gateway(&self, o: ::grpc::RequestOptions, p: super::ns::CreateGatewayRequest) -> ::grpc::SingleResponse<super::empty::Empty>;

    fn get_gateway(&self, o: ::grpc::RequestOptions, p: super::ns::GetGatewayRequest) -> ::grpc::SingleResponse<super::ns::GetGatewayResponse>;

    fn update_gateway(&self, o: ::grpc::RequestOptions, p: super::ns::UpdateGatewayRequest) -> ::grpc::SingleResponse<super::empty::Empty>;

    fn delete_gateway(&self, o: ::grpc::RequestOptions, p: super::ns::DeleteGatewayRequest) -> ::grpc::SingleResponse<super::empty::Empty>;

    fn create_gateway_profile(&self, o: ::grpc::RequestOptions, p: super::ns::CreateGatewayProfileRequest) -> ::grpc::SingleResponse<super::ns::CreateGatewayProfileResponse>;

    fn get_gateway_profile(&self, o: ::grpc::RequestOptions, p: super::ns::GetGatewayProfileRequest) -> ::grpc::SingleResponse<super::ns::GetGatewayProfileResponse>;

    fn update_gateway_profile(&self, o: ::grpc::RequestOptions, p: super::ns::UpdateGatewayProfileRequest) -> ::grpc::SingleResponse<super::empty::Empty>;

    fn delete_gateway_profile(&self, o: ::grpc::RequestOptions, p: super::ns::DeleteGatewayProfileRequest) -> ::grpc::SingleResponse<super::empty::Empty>;

    fn get_gateway_stats(&self, o: ::grpc::RequestOptions, p: super::ns::GetGatewayStatsRequest) -> ::grpc::SingleResponse<super::ns::GetGatewayStatsResponse>;

    fn stream_frame_logs_for_gateway(&self, o: ::grpc::RequestOptions, p: super::ns::StreamFrameLogsForGatewayRequest) -> ::grpc::StreamingResponse<super::ns::StreamFrameLogsForGatewayResponse>;

    fn stream_frame_logs_for_device(&self, o: ::grpc::RequestOptions, p: super::ns::StreamFrameLogsForDeviceRequest) -> ::grpc::StreamingResponse<super::ns::StreamFrameLogsForDeviceResponse>;

    fn create_multicast_group(&self, o: ::grpc::RequestOptions, p: super::ns::CreateMulticastGroupRequest) -> ::grpc::SingleResponse<super::ns::CreateMulticastGroupResponse>;

    fn get_multicast_group(&self, o: ::grpc::RequestOptions, p: super::ns::GetMulticastGroupRequest) -> ::grpc::SingleResponse<super::ns::GetMulticastGroupResponse>;

    fn update_multicast_group(&self, o: ::grpc::RequestOptions, p: super::ns::UpdateMulticastGroupRequest) -> ::grpc::SingleResponse<super::empty::Empty>;

    fn delete_multicast_group(&self, o: ::grpc::RequestOptions, p: super::ns::DeleteMulticastGroupRequest) -> ::grpc::SingleResponse<super::empty::Empty>;

    fn add_device_to_multicast_group(&self, o: ::grpc::RequestOptions, p: super::ns::AddDeviceToMulticastGroupRequest) -> ::grpc::SingleResponse<super::empty::Empty>;

    fn remove_device_from_multicast_group(&self, o: ::grpc::RequestOptions, p: super::ns::RemoveDeviceFromMulticastGroupRequest) -> ::grpc::SingleResponse<super::empty::Empty>;

    fn enqueue_multicast_queue_item(&self, o: ::grpc::RequestOptions, p: super::ns::EnqueueMulticastQueueItemRequest) -> ::grpc::SingleResponse<super::empty::Empty>;

    fn flush_multicast_queue_for_multicast_group(&self, o: ::grpc::RequestOptions, p: super::ns::FlushMulticastQueueForMulticastGroupRequest) -> ::grpc::SingleResponse<super::empty::Empty>;

    fn get_multicast_queue_items_for_multicast_group(&self, o: ::grpc::RequestOptions, p: super::ns::GetMulticastQueueItemsForMulticastGroupRequest) -> ::grpc::SingleResponse<super::ns::GetMulticastQueueItemsForMulticastGroupResponse>;

    fn get_version(&self, o: ::grpc::RequestOptions, p: super::empty::Empty) -> ::grpc::SingleResponse<super::ns::GetVersionResponse>;
}

// client

pub struct NetworkServerServiceClient {
    grpc_client: ::std::sync::Arc<::grpc::Client>,
    method_CreateServiceProfile: ::std::sync::Arc<::grpc::rt::MethodDescriptor<super::ns::CreateServiceProfileRequest, super::ns::CreateServiceProfileResponse>>,
    method_GetServiceProfile: ::std::sync::Arc<::grpc::rt::MethodDescriptor<super::ns::GetServiceProfileRequest, super::ns::GetServiceProfileResponse>>,
    method_UpdateServiceProfile: ::std::sync::Arc<::grpc::rt::MethodDescriptor<super::ns::UpdateServiceProfileRequest, super::empty::Empty>>,
    method_DeleteServiceProfile: ::std::sync::Arc<::grpc::rt::MethodDescriptor<super::ns::DeleteServiceProfileRequest, super::empty::Empty>>,
    method_CreateRoutingProfile: ::std::sync::Arc<::grpc::rt::MethodDescriptor<super::ns::CreateRoutingProfileRequest, super::ns::CreateRoutingProfileResponse>>,
    method_GetRoutingProfile: ::std::sync::Arc<::grpc::rt::MethodDescriptor<super::ns::GetRoutingProfileRequest, super::ns::GetRoutingProfileResponse>>,
    method_UpdateRoutingProfile: ::std::sync::Arc<::grpc::rt::MethodDescriptor<super::ns::UpdateRoutingProfileRequest, super::empty::Empty>>,
    method_DeleteRoutingProfile: ::std::sync::Arc<::grpc::rt::MethodDescriptor<super::ns::DeleteRoutingProfileRequest, super::empty::Empty>>,
    method_CreateDeviceProfile: ::std::sync::Arc<::grpc::rt::MethodDescriptor<super::ns::CreateDeviceProfileRequest, super::ns::CreateDeviceProfileResponse>>,
    method_GetDeviceProfile: ::std::sync::Arc<::grpc::rt::MethodDescriptor<super::ns::GetDeviceProfileRequest, super::ns::GetDeviceProfileResponse>>,
    method_UpdateDeviceProfile: ::std::sync::Arc<::grpc::rt::MethodDescriptor<super::ns::UpdateDeviceProfileRequest, super::empty::Empty>>,
    method_DeleteDeviceProfile: ::std::sync::Arc<::grpc::rt::MethodDescriptor<super::ns::DeleteDeviceProfileRequest, super::empty::Empty>>,
    method_CreateDevice: ::std::sync::Arc<::grpc::rt::MethodDescriptor<super::ns::CreateDeviceRequest, super::empty::Empty>>,
    method_GetDevice: ::std::sync::Arc<::grpc::rt::MethodDescriptor<super::ns::GetDeviceRequest, super::ns::GetDeviceResponse>>,
    method_UpdateDevice: ::std::sync::Arc<::grpc::rt::MethodDescriptor<super::ns::UpdateDeviceRequest, super::empty::Empty>>,
    method_DeleteDevice: ::std::sync::Arc<::grpc::rt::MethodDescriptor<super::ns::DeleteDeviceRequest, super::empty::Empty>>,
    method_ActivateDevice: ::std::sync::Arc<::grpc::rt::MethodDescriptor<super::ns::ActivateDeviceRequest, super::empty::Empty>>,
    method_DeactivateDevice: ::std::sync::Arc<::grpc::rt::MethodDescriptor<super::ns::DeactivateDeviceRequest, super::empty::Empty>>,
    method_GetDeviceActivation: ::std::sync::Arc<::grpc::rt::MethodDescriptor<super::ns::GetDeviceActivationRequest, super::ns::GetDeviceActivationResponse>>,
    method_CreateDeviceQueueItem: ::std::sync::Arc<::grpc::rt::MethodDescriptor<super::ns::CreateDeviceQueueItemRequest, super::empty::Empty>>,
    method_FlushDeviceQueueForDevEUI: ::std::sync::Arc<::grpc::rt::MethodDescriptor<super::ns::FlushDeviceQueueForDevEUIRequest, super::empty::Empty>>,
    method_GetDeviceQueueItemsForDevEUI: ::std::sync::Arc<::grpc::rt::MethodDescriptor<super::ns::GetDeviceQueueItemsForDevEUIRequest, super::ns::GetDeviceQueueItemsForDevEUIResponse>>,
    method_GetNextDownlinkFCntForDevEUI: ::std::sync::Arc<::grpc::rt::MethodDescriptor<super::ns::GetNextDownlinkFCntForDevEUIRequest, super::ns::GetNextDownlinkFCntForDevEUIResponse>>,
    method_GetRandomDevAddr: ::std::sync::Arc<::grpc::rt::MethodDescriptor<super::empty::Empty, super::ns::GetRandomDevAddrResponse>>,
    method_CreateMACCommandQueueItem: ::std::sync::Arc<::grpc::rt::MethodDescriptor<super::ns::CreateMACCommandQueueItemRequest, super::empty::Empty>>,
    method_SendProprietaryPayload: ::std::sync::Arc<::grpc::rt::MethodDescriptor<super::ns::SendProprietaryPayloadRequest, super::empty::Empty>>,
    method_CreateGateway: ::std::sync::Arc<::grpc::rt::MethodDescriptor<super::ns::CreateGatewayRequest, super::empty::Empty>>,
    method_GetGateway: ::std::sync::Arc<::grpc::rt::MethodDescriptor<super::ns::GetGatewayRequest, super::ns::GetGatewayResponse>>,
    method_UpdateGateway: ::std::sync::Arc<::grpc::rt::MethodDescriptor<super::ns::UpdateGatewayRequest, super::empty::Empty>>,
    method_DeleteGateway: ::std::sync::Arc<::grpc::rt::MethodDescriptor<super::ns::DeleteGatewayRequest, super::empty::Empty>>,
    method_CreateGatewayProfile: ::std::sync::Arc<::grpc::rt::MethodDescriptor<super::ns::CreateGatewayProfileRequest, super::ns::CreateGatewayProfileResponse>>,
    method_GetGatewayProfile: ::std::sync::Arc<::grpc::rt::MethodDescriptor<super::ns::GetGatewayProfileRequest, super::ns::GetGatewayProfileResponse>>,
    method_UpdateGatewayProfile: ::std::sync::Arc<::grpc::rt::MethodDescriptor<super::ns::UpdateGatewayProfileRequest, super::empty::Empty>>,
    method_DeleteGatewayProfile: ::std::sync::Arc<::grpc::rt::MethodDescriptor<super::ns::DeleteGatewayProfileRequest, super::empty::Empty>>,
    method_GetGatewayStats: ::std::sync::Arc<::grpc::rt::MethodDescriptor<super::ns::GetGatewayStatsRequest, super::ns::GetGatewayStatsResponse>>,
    method_StreamFrameLogsForGateway: ::std::sync::Arc<::grpc::rt::MethodDescriptor<super::ns::StreamFrameLogsForGatewayRequest, super::ns::StreamFrameLogsForGatewayResponse>>,
    method_StreamFrameLogsForDevice: ::std::sync::Arc<::grpc::rt::MethodDescriptor<super::ns::StreamFrameLogsForDeviceRequest, super::ns::StreamFrameLogsForDeviceResponse>>,
    method_CreateMulticastGroup: ::std::sync::Arc<::grpc::rt::MethodDescriptor<super::ns::CreateMulticastGroupRequest, super::ns::CreateMulticastGroupResponse>>,
    method_GetMulticastGroup: ::std::sync::Arc<::grpc::rt::MethodDescriptor<super::ns::GetMulticastGroupRequest, super::ns::GetMulticastGroupResponse>>,
    method_UpdateMulticastGroup: ::std::sync::Arc<::grpc::rt::MethodDescriptor<super::ns::UpdateMulticastGroupRequest, super::empty::Empty>>,
    method_DeleteMulticastGroup: ::std::sync::Arc<::grpc::rt::MethodDescriptor<super::ns::DeleteMulticastGroupRequest, super::empty::Empty>>,
    method_AddDeviceToMulticastGroup: ::std::sync::Arc<::grpc::rt::MethodDescriptor<super::ns::AddDeviceToMulticastGroupRequest, super::empty::Empty>>,
    method_RemoveDeviceFromMulticastGroup: ::std::sync::Arc<::grpc::rt::MethodDescriptor<super::ns::RemoveDeviceFromMulticastGroupRequest, super::empty::Empty>>,
    method_EnqueueMulticastQueueItem: ::std::sync::Arc<::grpc::rt::MethodDescriptor<super::ns::EnqueueMulticastQueueItemRequest, super::empty::Empty>>,
    method_FlushMulticastQueueForMulticastGroup: ::std::sync::Arc<::grpc::rt::MethodDescriptor<super::ns::FlushMulticastQueueForMulticastGroupRequest, super::empty::Empty>>,
    method_GetMulticastQueueItemsForMulticastGroup: ::std::sync::Arc<::grpc::rt::MethodDescriptor<super::ns::GetMulticastQueueItemsForMulticastGroupRequest, super::ns::GetMulticastQueueItemsForMulticastGroupResponse>>,
    method_GetVersion: ::std::sync::Arc<::grpc::rt::MethodDescriptor<super::empty::Empty, super::ns::GetVersionResponse>>,
}

impl ::grpc::ClientStub for NetworkServerServiceClient {
    fn with_client(grpc_client: ::std::sync::Arc<::grpc::Client>) -> Self {
        NetworkServerServiceClient {
            grpc_client: grpc_client,
            method_CreateServiceProfile: ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                name: "/ns.NetworkServerService/CreateServiceProfile".to_string(),
                streaming: ::grpc::rt::GrpcStreaming::Unary,
                req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
            }),
            method_GetServiceProfile: ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                name: "/ns.NetworkServerService/GetServiceProfile".to_string(),
                streaming: ::grpc::rt::GrpcStreaming::Unary,
                req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
            }),
            method_UpdateServiceProfile: ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                name: "/ns.NetworkServerService/UpdateServiceProfile".to_string(),
                streaming: ::grpc::rt::GrpcStreaming::Unary,
                req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
            }),
            method_DeleteServiceProfile: ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                name: "/ns.NetworkServerService/DeleteServiceProfile".to_string(),
                streaming: ::grpc::rt::GrpcStreaming::Unary,
                req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
            }),
            method_CreateRoutingProfile: ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                name: "/ns.NetworkServerService/CreateRoutingProfile".to_string(),
                streaming: ::grpc::rt::GrpcStreaming::Unary,
                req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
            }),
            method_GetRoutingProfile: ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                name: "/ns.NetworkServerService/GetRoutingProfile".to_string(),
                streaming: ::grpc::rt::GrpcStreaming::Unary,
                req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
            }),
            method_UpdateRoutingProfile: ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                name: "/ns.NetworkServerService/UpdateRoutingProfile".to_string(),
                streaming: ::grpc::rt::GrpcStreaming::Unary,
                req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
            }),
            method_DeleteRoutingProfile: ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                name: "/ns.NetworkServerService/DeleteRoutingProfile".to_string(),
                streaming: ::grpc::rt::GrpcStreaming::Unary,
                req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
            }),
            method_CreateDeviceProfile: ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                name: "/ns.NetworkServerService/CreateDeviceProfile".to_string(),
                streaming: ::grpc::rt::GrpcStreaming::Unary,
                req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
            }),
            method_GetDeviceProfile: ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                name: "/ns.NetworkServerService/GetDeviceProfile".to_string(),
                streaming: ::grpc::rt::GrpcStreaming::Unary,
                req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
            }),
            method_UpdateDeviceProfile: ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                name: "/ns.NetworkServerService/UpdateDeviceProfile".to_string(),
                streaming: ::grpc::rt::GrpcStreaming::Unary,
                req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
            }),
            method_DeleteDeviceProfile: ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                name: "/ns.NetworkServerService/DeleteDeviceProfile".to_string(),
                streaming: ::grpc::rt::GrpcStreaming::Unary,
                req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
            }),
            method_CreateDevice: ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                name: "/ns.NetworkServerService/CreateDevice".to_string(),
                streaming: ::grpc::rt::GrpcStreaming::Unary,
                req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
            }),
            method_GetDevice: ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                name: "/ns.NetworkServerService/GetDevice".to_string(),
                streaming: ::grpc::rt::GrpcStreaming::Unary,
                req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
            }),
            method_UpdateDevice: ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                name: "/ns.NetworkServerService/UpdateDevice".to_string(),
                streaming: ::grpc::rt::GrpcStreaming::Unary,
                req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
            }),
            method_DeleteDevice: ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                name: "/ns.NetworkServerService/DeleteDevice".to_string(),
                streaming: ::grpc::rt::GrpcStreaming::Unary,
                req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
            }),
            method_ActivateDevice: ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                name: "/ns.NetworkServerService/ActivateDevice".to_string(),
                streaming: ::grpc::rt::GrpcStreaming::Unary,
                req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
            }),
            method_DeactivateDevice: ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                name: "/ns.NetworkServerService/DeactivateDevice".to_string(),
                streaming: ::grpc::rt::GrpcStreaming::Unary,
                req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
            }),
            method_GetDeviceActivation: ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                name: "/ns.NetworkServerService/GetDeviceActivation".to_string(),
                streaming: ::grpc::rt::GrpcStreaming::Unary,
                req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
            }),
            method_CreateDeviceQueueItem: ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                name: "/ns.NetworkServerService/CreateDeviceQueueItem".to_string(),
                streaming: ::grpc::rt::GrpcStreaming::Unary,
                req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
            }),
            method_FlushDeviceQueueForDevEUI: ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                name: "/ns.NetworkServerService/FlushDeviceQueueForDevEUI".to_string(),
                streaming: ::grpc::rt::GrpcStreaming::Unary,
                req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
            }),
            method_GetDeviceQueueItemsForDevEUI: ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                name: "/ns.NetworkServerService/GetDeviceQueueItemsForDevEUI".to_string(),
                streaming: ::grpc::rt::GrpcStreaming::Unary,
                req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
            }),
            method_GetNextDownlinkFCntForDevEUI: ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                name: "/ns.NetworkServerService/GetNextDownlinkFCntForDevEUI".to_string(),
                streaming: ::grpc::rt::GrpcStreaming::Unary,
                req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
            }),
            method_GetRandomDevAddr: ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                name: "/ns.NetworkServerService/GetRandomDevAddr".to_string(),
                streaming: ::grpc::rt::GrpcStreaming::Unary,
                req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
            }),
            method_CreateMACCommandQueueItem: ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                name: "/ns.NetworkServerService/CreateMACCommandQueueItem".to_string(),
                streaming: ::grpc::rt::GrpcStreaming::Unary,
                req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
            }),
            method_SendProprietaryPayload: ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                name: "/ns.NetworkServerService/SendProprietaryPayload".to_string(),
                streaming: ::grpc::rt::GrpcStreaming::Unary,
                req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
            }),
            method_CreateGateway: ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                name: "/ns.NetworkServerService/CreateGateway".to_string(),
                streaming: ::grpc::rt::GrpcStreaming::Unary,
                req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
            }),
            method_GetGateway: ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                name: "/ns.NetworkServerService/GetGateway".to_string(),
                streaming: ::grpc::rt::GrpcStreaming::Unary,
                req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
            }),
            method_UpdateGateway: ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                name: "/ns.NetworkServerService/UpdateGateway".to_string(),
                streaming: ::grpc::rt::GrpcStreaming::Unary,
                req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
            }),
            method_DeleteGateway: ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                name: "/ns.NetworkServerService/DeleteGateway".to_string(),
                streaming: ::grpc::rt::GrpcStreaming::Unary,
                req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
            }),
            method_CreateGatewayProfile: ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                name: "/ns.NetworkServerService/CreateGatewayProfile".to_string(),
                streaming: ::grpc::rt::GrpcStreaming::Unary,
                req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
            }),
            method_GetGatewayProfile: ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                name: "/ns.NetworkServerService/GetGatewayProfile".to_string(),
                streaming: ::grpc::rt::GrpcStreaming::Unary,
                req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
            }),
            method_UpdateGatewayProfile: ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                name: "/ns.NetworkServerService/UpdateGatewayProfile".to_string(),
                streaming: ::grpc::rt::GrpcStreaming::Unary,
                req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
            }),
            method_DeleteGatewayProfile: ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                name: "/ns.NetworkServerService/DeleteGatewayProfile".to_string(),
                streaming: ::grpc::rt::GrpcStreaming::Unary,
                req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
            }),
            method_GetGatewayStats: ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                name: "/ns.NetworkServerService/GetGatewayStats".to_string(),
                streaming: ::grpc::rt::GrpcStreaming::Unary,
                req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
            }),
            method_StreamFrameLogsForGateway: ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                name: "/ns.NetworkServerService/StreamFrameLogsForGateway".to_string(),
                streaming: ::grpc::rt::GrpcStreaming::ServerStreaming,
                req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
            }),
            method_StreamFrameLogsForDevice: ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                name: "/ns.NetworkServerService/StreamFrameLogsForDevice".to_string(),
                streaming: ::grpc::rt::GrpcStreaming::ServerStreaming,
                req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
            }),
            method_CreateMulticastGroup: ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                name: "/ns.NetworkServerService/CreateMulticastGroup".to_string(),
                streaming: ::grpc::rt::GrpcStreaming::Unary,
                req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
            }),
            method_GetMulticastGroup: ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                name: "/ns.NetworkServerService/GetMulticastGroup".to_string(),
                streaming: ::grpc::rt::GrpcStreaming::Unary,
                req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
            }),
            method_UpdateMulticastGroup: ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                name: "/ns.NetworkServerService/UpdateMulticastGroup".to_string(),
                streaming: ::grpc::rt::GrpcStreaming::Unary,
                req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
            }),
            method_DeleteMulticastGroup: ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                name: "/ns.NetworkServerService/DeleteMulticastGroup".to_string(),
                streaming: ::grpc::rt::GrpcStreaming::Unary,
                req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
            }),
            method_AddDeviceToMulticastGroup: ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                name: "/ns.NetworkServerService/AddDeviceToMulticastGroup".to_string(),
                streaming: ::grpc::rt::GrpcStreaming::Unary,
                req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
            }),
            method_RemoveDeviceFromMulticastGroup: ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                name: "/ns.NetworkServerService/RemoveDeviceFromMulticastGroup".to_string(),
                streaming: ::grpc::rt::GrpcStreaming::Unary,
                req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
            }),
            method_EnqueueMulticastQueueItem: ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                name: "/ns.NetworkServerService/EnqueueMulticastQueueItem".to_string(),
                streaming: ::grpc::rt::GrpcStreaming::Unary,
                req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
            }),
            method_FlushMulticastQueueForMulticastGroup: ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                name: "/ns.NetworkServerService/FlushMulticastQueueForMulticastGroup".to_string(),
                streaming: ::grpc::rt::GrpcStreaming::Unary,
                req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
            }),
            method_GetMulticastQueueItemsForMulticastGroup: ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                name: "/ns.NetworkServerService/GetMulticastQueueItemsForMulticastGroup".to_string(),
                streaming: ::grpc::rt::GrpcStreaming::Unary,
                req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
            }),
            method_GetVersion: ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                name: "/ns.NetworkServerService/GetVersion".to_string(),
                streaming: ::grpc::rt::GrpcStreaming::Unary,
                req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
            }),
        }
    }
}

impl NetworkServerService for NetworkServerServiceClient {
    fn create_service_profile(&self, o: ::grpc::RequestOptions, p: super::ns::CreateServiceProfileRequest) -> ::grpc::SingleResponse<super::ns::CreateServiceProfileResponse> {
        self.grpc_client.call_unary(o, p, self.method_CreateServiceProfile.clone())
    }

    fn get_service_profile(&self, o: ::grpc::RequestOptions, p: super::ns::GetServiceProfileRequest) -> ::grpc::SingleResponse<super::ns::GetServiceProfileResponse> {
        self.grpc_client.call_unary(o, p, self.method_GetServiceProfile.clone())
    }

    fn update_service_profile(&self, o: ::grpc::RequestOptions, p: super::ns::UpdateServiceProfileRequest) -> ::grpc::SingleResponse<super::empty::Empty> {
        self.grpc_client.call_unary(o, p, self.method_UpdateServiceProfile.clone())
    }

    fn delete_service_profile(&self, o: ::grpc::RequestOptions, p: super::ns::DeleteServiceProfileRequest) -> ::grpc::SingleResponse<super::empty::Empty> {
        self.grpc_client.call_unary(o, p, self.method_DeleteServiceProfile.clone())
    }

    fn create_routing_profile(&self, o: ::grpc::RequestOptions, p: super::ns::CreateRoutingProfileRequest) -> ::grpc::SingleResponse<super::ns::CreateRoutingProfileResponse> {
        self.grpc_client.call_unary(o, p, self.method_CreateRoutingProfile.clone())
    }

    fn get_routing_profile(&self, o: ::grpc::RequestOptions, p: super::ns::GetRoutingProfileRequest) -> ::grpc::SingleResponse<super::ns::GetRoutingProfileResponse> {
        self.grpc_client.call_unary(o, p, self.method_GetRoutingProfile.clone())
    }

    fn update_routing_profile(&self, o: ::grpc::RequestOptions, p: super::ns::UpdateRoutingProfileRequest) -> ::grpc::SingleResponse<super::empty::Empty> {
        self.grpc_client.call_unary(o, p, self.method_UpdateRoutingProfile.clone())
    }

    fn delete_routing_profile(&self, o: ::grpc::RequestOptions, p: super::ns::DeleteRoutingProfileRequest) -> ::grpc::SingleResponse<super::empty::Empty> {
        self.grpc_client.call_unary(o, p, self.method_DeleteRoutingProfile.clone())
    }

    fn create_device_profile(&self, o: ::grpc::RequestOptions, p: super::ns::CreateDeviceProfileRequest) -> ::grpc::SingleResponse<super::ns::CreateDeviceProfileResponse> {
        self.grpc_client.call_unary(o, p, self.method_CreateDeviceProfile.clone())
    }

    fn get_device_profile(&self, o: ::grpc::RequestOptions, p: super::ns::GetDeviceProfileRequest) -> ::grpc::SingleResponse<super::ns::GetDeviceProfileResponse> {
        self.grpc_client.call_unary(o, p, self.method_GetDeviceProfile.clone())
    }

    fn update_device_profile(&self, o: ::grpc::RequestOptions, p: super::ns::UpdateDeviceProfileRequest) -> ::grpc::SingleResponse<super::empty::Empty> {
        self.grpc_client.call_unary(o, p, self.method_UpdateDeviceProfile.clone())
    }

    fn delete_device_profile(&self, o: ::grpc::RequestOptions, p: super::ns::DeleteDeviceProfileRequest) -> ::grpc::SingleResponse<super::empty::Empty> {
        self.grpc_client.call_unary(o, p, self.method_DeleteDeviceProfile.clone())
    }

    fn create_device(&self, o: ::grpc::RequestOptions, p: super::ns::CreateDeviceRequest) -> ::grpc::SingleResponse<super::empty::Empty> {
        self.grpc_client.call_unary(o, p, self.method_CreateDevice.clone())
    }

    fn get_device(&self, o: ::grpc::RequestOptions, p: super::ns::GetDeviceRequest) -> ::grpc::SingleResponse<super::ns::GetDeviceResponse> {
        self.grpc_client.call_unary(o, p, self.method_GetDevice.clone())
    }

    fn update_device(&self, o: ::grpc::RequestOptions, p: super::ns::UpdateDeviceRequest) -> ::grpc::SingleResponse<super::empty::Empty> {
        self.grpc_client.call_unary(o, p, self.method_UpdateDevice.clone())
    }

    fn delete_device(&self, o: ::grpc::RequestOptions, p: super::ns::DeleteDeviceRequest) -> ::grpc::SingleResponse<super::empty::Empty> {
        self.grpc_client.call_unary(o, p, self.method_DeleteDevice.clone())
    }

    fn activate_device(&self, o: ::grpc::RequestOptions, p: super::ns::ActivateDeviceRequest) -> ::grpc::SingleResponse<super::empty::Empty> {
        self.grpc_client.call_unary(o, p, self.method_ActivateDevice.clone())
    }

    fn deactivate_device(&self, o: ::grpc::RequestOptions, p: super::ns::DeactivateDeviceRequest) -> ::grpc::SingleResponse<super::empty::Empty> {
        self.grpc_client.call_unary(o, p, self.method_DeactivateDevice.clone())
    }

    fn get_device_activation(&self, o: ::grpc::RequestOptions, p: super::ns::GetDeviceActivationRequest) -> ::grpc::SingleResponse<super::ns::GetDeviceActivationResponse> {
        self.grpc_client.call_unary(o, p, self.method_GetDeviceActivation.clone())
    }

    fn create_device_queue_item(&self, o: ::grpc::RequestOptions, p: super::ns::CreateDeviceQueueItemRequest) -> ::grpc::SingleResponse<super::empty::Empty> {
        self.grpc_client.call_unary(o, p, self.method_CreateDeviceQueueItem.clone())
    }

    fn flush_device_queue_for_dev_eui(&self, o: ::grpc::RequestOptions, p: super::ns::FlushDeviceQueueForDevEUIRequest) -> ::grpc::SingleResponse<super::empty::Empty> {
        self.grpc_client.call_unary(o, p, self.method_FlushDeviceQueueForDevEUI.clone())
    }

    fn get_device_queue_items_for_dev_eui(&self, o: ::grpc::RequestOptions, p: super::ns::GetDeviceQueueItemsForDevEUIRequest) -> ::grpc::SingleResponse<super::ns::GetDeviceQueueItemsForDevEUIResponse> {
        self.grpc_client.call_unary(o, p, self.method_GetDeviceQueueItemsForDevEUI.clone())
    }

    fn get_next_downlink_f_cnt_for_dev_eui(&self, o: ::grpc::RequestOptions, p: super::ns::GetNextDownlinkFCntForDevEUIRequest) -> ::grpc::SingleResponse<super::ns::GetNextDownlinkFCntForDevEUIResponse> {
        self.grpc_client.call_unary(o, p, self.method_GetNextDownlinkFCntForDevEUI.clone())
    }

    fn get_random_dev_addr(&self, o: ::grpc::RequestOptions, p: super::empty::Empty) -> ::grpc::SingleResponse<super::ns::GetRandomDevAddrResponse> {
        self.grpc_client.call_unary(o, p, self.method_GetRandomDevAddr.clone())
    }

    fn create_mac_command_queue_item(&self, o: ::grpc::RequestOptions, p: super::ns::CreateMACCommandQueueItemRequest) -> ::grpc::SingleResponse<super::empty::Empty> {
        self.grpc_client.call_unary(o, p, self.method_CreateMACCommandQueueItem.clone())
    }

    fn send_proprietary_payload(&self, o: ::grpc::RequestOptions, p: super::ns::SendProprietaryPayloadRequest) -> ::grpc::SingleResponse<super::empty::Empty> {
        self.grpc_client.call_unary(o, p, self.method_SendProprietaryPayload.clone())
    }

    fn create_gateway(&self, o: ::grpc::RequestOptions, p: super::ns::CreateGatewayRequest) -> ::grpc::SingleResponse<super::empty::Empty> {
        self.grpc_client.call_unary(o, p, self.method_CreateGateway.clone())
    }

    fn get_gateway(&self, o: ::grpc::RequestOptions, p: super::ns::GetGatewayRequest) -> ::grpc::SingleResponse<super::ns::GetGatewayResponse> {
        self.grpc_client.call_unary(o, p, self.method_GetGateway.clone())
    }

    fn update_gateway(&self, o: ::grpc::RequestOptions, p: super::ns::UpdateGatewayRequest) -> ::grpc::SingleResponse<super::empty::Empty> {
        self.grpc_client.call_unary(o, p, self.method_UpdateGateway.clone())
    }

    fn delete_gateway(&self, o: ::grpc::RequestOptions, p: super::ns::DeleteGatewayRequest) -> ::grpc::SingleResponse<super::empty::Empty> {
        self.grpc_client.call_unary(o, p, self.method_DeleteGateway.clone())
    }

    fn create_gateway_profile(&self, o: ::grpc::RequestOptions, p: super::ns::CreateGatewayProfileRequest) -> ::grpc::SingleResponse<super::ns::CreateGatewayProfileResponse> {
        self.grpc_client.call_unary(o, p, self.method_CreateGatewayProfile.clone())
    }

    fn get_gateway_profile(&self, o: ::grpc::RequestOptions, p: super::ns::GetGatewayProfileRequest) -> ::grpc::SingleResponse<super::ns::GetGatewayProfileResponse> {
        self.grpc_client.call_unary(o, p, self.method_GetGatewayProfile.clone())
    }

    fn update_gateway_profile(&self, o: ::grpc::RequestOptions, p: super::ns::UpdateGatewayProfileRequest) -> ::grpc::SingleResponse<super::empty::Empty> {
        self.grpc_client.call_unary(o, p, self.method_UpdateGatewayProfile.clone())
    }

    fn delete_gateway_profile(&self, o: ::grpc::RequestOptions, p: super::ns::DeleteGatewayProfileRequest) -> ::grpc::SingleResponse<super::empty::Empty> {
        self.grpc_client.call_unary(o, p, self.method_DeleteGatewayProfile.clone())
    }

    fn get_gateway_stats(&self, o: ::grpc::RequestOptions, p: super::ns::GetGatewayStatsRequest) -> ::grpc::SingleResponse<super::ns::GetGatewayStatsResponse> {
        self.grpc_client.call_unary(o, p, self.method_GetGatewayStats.clone())
    }

    fn stream_frame_logs_for_gateway(&self, o: ::grpc::RequestOptions, p: super::ns::StreamFrameLogsForGatewayRequest) -> ::grpc::StreamingResponse<super::ns::StreamFrameLogsForGatewayResponse> {
        self.grpc_client.call_server_streaming(o, p, self.method_StreamFrameLogsForGateway.clone())
    }

    fn stream_frame_logs_for_device(&self, o: ::grpc::RequestOptions, p: super::ns::StreamFrameLogsForDeviceRequest) -> ::grpc::StreamingResponse<super::ns::StreamFrameLogsForDeviceResponse> {
        self.grpc_client.call_server_streaming(o, p, self.method_StreamFrameLogsForDevice.clone())
    }

    fn create_multicast_group(&self, o: ::grpc::RequestOptions, p: super::ns::CreateMulticastGroupRequest) -> ::grpc::SingleResponse<super::ns::CreateMulticastGroupResponse> {
        self.grpc_client.call_unary(o, p, self.method_CreateMulticastGroup.clone())
    }

    fn get_multicast_group(&self, o: ::grpc::RequestOptions, p: super::ns::GetMulticastGroupRequest) -> ::grpc::SingleResponse<super::ns::GetMulticastGroupResponse> {
        self.grpc_client.call_unary(o, p, self.method_GetMulticastGroup.clone())
    }

    fn update_multicast_group(&self, o: ::grpc::RequestOptions, p: super::ns::UpdateMulticastGroupRequest) -> ::grpc::SingleResponse<super::empty::Empty> {
        self.grpc_client.call_unary(o, p, self.method_UpdateMulticastGroup.clone())
    }

    fn delete_multicast_group(&self, o: ::grpc::RequestOptions, p: super::ns::DeleteMulticastGroupRequest) -> ::grpc::SingleResponse<super::empty::Empty> {
        self.grpc_client.call_unary(o, p, self.method_DeleteMulticastGroup.clone())
    }

    fn add_device_to_multicast_group(&self, o: ::grpc::RequestOptions, p: super::ns::AddDeviceToMulticastGroupRequest) -> ::grpc::SingleResponse<super::empty::Empty> {
        self.grpc_client.call_unary(o, p, self.method_AddDeviceToMulticastGroup.clone())
    }

    fn remove_device_from_multicast_group(&self, o: ::grpc::RequestOptions, p: super::ns::RemoveDeviceFromMulticastGroupRequest) -> ::grpc::SingleResponse<super::empty::Empty> {
        self.grpc_client.call_unary(o, p, self.method_RemoveDeviceFromMulticastGroup.clone())
    }

    fn enqueue_multicast_queue_item(&self, o: ::grpc::RequestOptions, p: super::ns::EnqueueMulticastQueueItemRequest) -> ::grpc::SingleResponse<super::empty::Empty> {
        self.grpc_client.call_unary(o, p, self.method_EnqueueMulticastQueueItem.clone())
    }

    fn flush_multicast_queue_for_multicast_group(&self, o: ::grpc::RequestOptions, p: super::ns::FlushMulticastQueueForMulticastGroupRequest) -> ::grpc::SingleResponse<super::empty::Empty> {
        self.grpc_client.call_unary(o, p, self.method_FlushMulticastQueueForMulticastGroup.clone())
    }

    fn get_multicast_queue_items_for_multicast_group(&self, o: ::grpc::RequestOptions, p: super::ns::GetMulticastQueueItemsForMulticastGroupRequest) -> ::grpc::SingleResponse<super::ns::GetMulticastQueueItemsForMulticastGroupResponse> {
        self.grpc_client.call_unary(o, p, self.method_GetMulticastQueueItemsForMulticastGroup.clone())
    }

    fn get_version(&self, o: ::grpc::RequestOptions, p: super::empty::Empty) -> ::grpc::SingleResponse<super::ns::GetVersionResponse> {
        self.grpc_client.call_unary(o, p, self.method_GetVersion.clone())
    }
}

// server

pub struct NetworkServerServiceServer;


impl NetworkServerServiceServer {
    pub fn new_service_def<H : NetworkServerService + 'static + Sync + Send + 'static>(handler: H) -> ::grpc::rt::ServerServiceDefinition {
        let handler_arc = ::std::sync::Arc::new(handler);
        ::grpc::rt::ServerServiceDefinition::new("/ns.NetworkServerService",
            vec![
                ::grpc::rt::ServerMethod::new(
                    ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                        name: "/ns.NetworkServerService/CreateServiceProfile".to_string(),
                        streaming: ::grpc::rt::GrpcStreaming::Unary,
                        req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                        resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                    }),
                    {
                        let handler_copy = handler_arc.clone();
                        ::grpc::rt::MethodHandlerUnary::new(move |o, p| handler_copy.create_service_profile(o, p))
                    },
                ),
                ::grpc::rt::ServerMethod::new(
                    ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                        name: "/ns.NetworkServerService/GetServiceProfile".to_string(),
                        streaming: ::grpc::rt::GrpcStreaming::Unary,
                        req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                        resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                    }),
                    {
                        let handler_copy = handler_arc.clone();
                        ::grpc::rt::MethodHandlerUnary::new(move |o, p| handler_copy.get_service_profile(o, p))
                    },
                ),
                ::grpc::rt::ServerMethod::new(
                    ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                        name: "/ns.NetworkServerService/UpdateServiceProfile".to_string(),
                        streaming: ::grpc::rt::GrpcStreaming::Unary,
                        req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                        resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                    }),
                    {
                        let handler_copy = handler_arc.clone();
                        ::grpc::rt::MethodHandlerUnary::new(move |o, p| handler_copy.update_service_profile(o, p))
                    },
                ),
                ::grpc::rt::ServerMethod::new(
                    ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                        name: "/ns.NetworkServerService/DeleteServiceProfile".to_string(),
                        streaming: ::grpc::rt::GrpcStreaming::Unary,
                        req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                        resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                    }),
                    {
                        let handler_copy = handler_arc.clone();
                        ::grpc::rt::MethodHandlerUnary::new(move |o, p| handler_copy.delete_service_profile(o, p))
                    },
                ),
                ::grpc::rt::ServerMethod::new(
                    ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                        name: "/ns.NetworkServerService/CreateRoutingProfile".to_string(),
                        streaming: ::grpc::rt::GrpcStreaming::Unary,
                        req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                        resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                    }),
                    {
                        let handler_copy = handler_arc.clone();
                        ::grpc::rt::MethodHandlerUnary::new(move |o, p| handler_copy.create_routing_profile(o, p))
                    },
                ),
                ::grpc::rt::ServerMethod::new(
                    ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                        name: "/ns.NetworkServerService/GetRoutingProfile".to_string(),
                        streaming: ::grpc::rt::GrpcStreaming::Unary,
                        req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                        resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                    }),
                    {
                        let handler_copy = handler_arc.clone();
                        ::grpc::rt::MethodHandlerUnary::new(move |o, p| handler_copy.get_routing_profile(o, p))
                    },
                ),
                ::grpc::rt::ServerMethod::new(
                    ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                        name: "/ns.NetworkServerService/UpdateRoutingProfile".to_string(),
                        streaming: ::grpc::rt::GrpcStreaming::Unary,
                        req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                        resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                    }),
                    {
                        let handler_copy = handler_arc.clone();
                        ::grpc::rt::MethodHandlerUnary::new(move |o, p| handler_copy.update_routing_profile(o, p))
                    },
                ),
                ::grpc::rt::ServerMethod::new(
                    ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                        name: "/ns.NetworkServerService/DeleteRoutingProfile".to_string(),
                        streaming: ::grpc::rt::GrpcStreaming::Unary,
                        req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                        resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                    }),
                    {
                        let handler_copy = handler_arc.clone();
                        ::grpc::rt::MethodHandlerUnary::new(move |o, p| handler_copy.delete_routing_profile(o, p))
                    },
                ),
                ::grpc::rt::ServerMethod::new(
                    ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                        name: "/ns.NetworkServerService/CreateDeviceProfile".to_string(),
                        streaming: ::grpc::rt::GrpcStreaming::Unary,
                        req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                        resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                    }),
                    {
                        let handler_copy = handler_arc.clone();
                        ::grpc::rt::MethodHandlerUnary::new(move |o, p| handler_copy.create_device_profile(o, p))
                    },
                ),
                ::grpc::rt::ServerMethod::new(
                    ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                        name: "/ns.NetworkServerService/GetDeviceProfile".to_string(),
                        streaming: ::grpc::rt::GrpcStreaming::Unary,
                        req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                        resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                    }),
                    {
                        let handler_copy = handler_arc.clone();
                        ::grpc::rt::MethodHandlerUnary::new(move |o, p| handler_copy.get_device_profile(o, p))
                    },
                ),
                ::grpc::rt::ServerMethod::new(
                    ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                        name: "/ns.NetworkServerService/UpdateDeviceProfile".to_string(),
                        streaming: ::grpc::rt::GrpcStreaming::Unary,
                        req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                        resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                    }),
                    {
                        let handler_copy = handler_arc.clone();
                        ::grpc::rt::MethodHandlerUnary::new(move |o, p| handler_copy.update_device_profile(o, p))
                    },
                ),
                ::grpc::rt::ServerMethod::new(
                    ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                        name: "/ns.NetworkServerService/DeleteDeviceProfile".to_string(),
                        streaming: ::grpc::rt::GrpcStreaming::Unary,
                        req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                        resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                    }),
                    {
                        let handler_copy = handler_arc.clone();
                        ::grpc::rt::MethodHandlerUnary::new(move |o, p| handler_copy.delete_device_profile(o, p))
                    },
                ),
                ::grpc::rt::ServerMethod::new(
                    ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                        name: "/ns.NetworkServerService/CreateDevice".to_string(),
                        streaming: ::grpc::rt::GrpcStreaming::Unary,
                        req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                        resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                    }),
                    {
                        let handler_copy = handler_arc.clone();
                        ::grpc::rt::MethodHandlerUnary::new(move |o, p| handler_copy.create_device(o, p))
                    },
                ),
                ::grpc::rt::ServerMethod::new(
                    ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                        name: "/ns.NetworkServerService/GetDevice".to_string(),
                        streaming: ::grpc::rt::GrpcStreaming::Unary,
                        req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                        resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                    }),
                    {
                        let handler_copy = handler_arc.clone();
                        ::grpc::rt::MethodHandlerUnary::new(move |o, p| handler_copy.get_device(o, p))
                    },
                ),
                ::grpc::rt::ServerMethod::new(
                    ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                        name: "/ns.NetworkServerService/UpdateDevice".to_string(),
                        streaming: ::grpc::rt::GrpcStreaming::Unary,
                        req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                        resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                    }),
                    {
                        let handler_copy = handler_arc.clone();
                        ::grpc::rt::MethodHandlerUnary::new(move |o, p| handler_copy.update_device(o, p))
                    },
                ),
                ::grpc::rt::ServerMethod::new(
                    ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                        name: "/ns.NetworkServerService/DeleteDevice".to_string(),
                        streaming: ::grpc::rt::GrpcStreaming::Unary,
                        req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                        resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                    }),
                    {
                        let handler_copy = handler_arc.clone();
                        ::grpc::rt::MethodHandlerUnary::new(move |o, p| handler_copy.delete_device(o, p))
                    },
                ),
                ::grpc::rt::ServerMethod::new(
                    ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                        name: "/ns.NetworkServerService/ActivateDevice".to_string(),
                        streaming: ::grpc::rt::GrpcStreaming::Unary,
                        req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                        resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                    }),
                    {
                        let handler_copy = handler_arc.clone();
                        ::grpc::rt::MethodHandlerUnary::new(move |o, p| handler_copy.activate_device(o, p))
                    },
                ),
                ::grpc::rt::ServerMethod::new(
                    ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                        name: "/ns.NetworkServerService/DeactivateDevice".to_string(),
                        streaming: ::grpc::rt::GrpcStreaming::Unary,
                        req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                        resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                    }),
                    {
                        let handler_copy = handler_arc.clone();
                        ::grpc::rt::MethodHandlerUnary::new(move |o, p| handler_copy.deactivate_device(o, p))
                    },
                ),
                ::grpc::rt::ServerMethod::new(
                    ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                        name: "/ns.NetworkServerService/GetDeviceActivation".to_string(),
                        streaming: ::grpc::rt::GrpcStreaming::Unary,
                        req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                        resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                    }),
                    {
                        let handler_copy = handler_arc.clone();
                        ::grpc::rt::MethodHandlerUnary::new(move |o, p| handler_copy.get_device_activation(o, p))
                    },
                ),
                ::grpc::rt::ServerMethod::new(
                    ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                        name: "/ns.NetworkServerService/CreateDeviceQueueItem".to_string(),
                        streaming: ::grpc::rt::GrpcStreaming::Unary,
                        req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                        resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                    }),
                    {
                        let handler_copy = handler_arc.clone();
                        ::grpc::rt::MethodHandlerUnary::new(move |o, p| handler_copy.create_device_queue_item(o, p))
                    },
                ),
                ::grpc::rt::ServerMethod::new(
                    ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                        name: "/ns.NetworkServerService/FlushDeviceQueueForDevEUI".to_string(),
                        streaming: ::grpc::rt::GrpcStreaming::Unary,
                        req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                        resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                    }),
                    {
                        let handler_copy = handler_arc.clone();
                        ::grpc::rt::MethodHandlerUnary::new(move |o, p| handler_copy.flush_device_queue_for_dev_eui(o, p))
                    },
                ),
                ::grpc::rt::ServerMethod::new(
                    ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                        name: "/ns.NetworkServerService/GetDeviceQueueItemsForDevEUI".to_string(),
                        streaming: ::grpc::rt::GrpcStreaming::Unary,
                        req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                        resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                    }),
                    {
                        let handler_copy = handler_arc.clone();
                        ::grpc::rt::MethodHandlerUnary::new(move |o, p| handler_copy.get_device_queue_items_for_dev_eui(o, p))
                    },
                ),
                ::grpc::rt::ServerMethod::new(
                    ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                        name: "/ns.NetworkServerService/GetNextDownlinkFCntForDevEUI".to_string(),
                        streaming: ::grpc::rt::GrpcStreaming::Unary,
                        req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                        resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                    }),
                    {
                        let handler_copy = handler_arc.clone();
                        ::grpc::rt::MethodHandlerUnary::new(move |o, p| handler_copy.get_next_downlink_f_cnt_for_dev_eui(o, p))
                    },
                ),
                ::grpc::rt::ServerMethod::new(
                    ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                        name: "/ns.NetworkServerService/GetRandomDevAddr".to_string(),
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
                        name: "/ns.NetworkServerService/CreateMACCommandQueueItem".to_string(),
                        streaming: ::grpc::rt::GrpcStreaming::Unary,
                        req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                        resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                    }),
                    {
                        let handler_copy = handler_arc.clone();
                        ::grpc::rt::MethodHandlerUnary::new(move |o, p| handler_copy.create_mac_command_queue_item(o, p))
                    },
                ),
                ::grpc::rt::ServerMethod::new(
                    ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                        name: "/ns.NetworkServerService/SendProprietaryPayload".to_string(),
                        streaming: ::grpc::rt::GrpcStreaming::Unary,
                        req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                        resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                    }),
                    {
                        let handler_copy = handler_arc.clone();
                        ::grpc::rt::MethodHandlerUnary::new(move |o, p| handler_copy.send_proprietary_payload(o, p))
                    },
                ),
                ::grpc::rt::ServerMethod::new(
                    ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                        name: "/ns.NetworkServerService/CreateGateway".to_string(),
                        streaming: ::grpc::rt::GrpcStreaming::Unary,
                        req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                        resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                    }),
                    {
                        let handler_copy = handler_arc.clone();
                        ::grpc::rt::MethodHandlerUnary::new(move |o, p| handler_copy.create_gateway(o, p))
                    },
                ),
                ::grpc::rt::ServerMethod::new(
                    ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                        name: "/ns.NetworkServerService/GetGateway".to_string(),
                        streaming: ::grpc::rt::GrpcStreaming::Unary,
                        req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                        resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                    }),
                    {
                        let handler_copy = handler_arc.clone();
                        ::grpc::rt::MethodHandlerUnary::new(move |o, p| handler_copy.get_gateway(o, p))
                    },
                ),
                ::grpc::rt::ServerMethod::new(
                    ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                        name: "/ns.NetworkServerService/UpdateGateway".to_string(),
                        streaming: ::grpc::rt::GrpcStreaming::Unary,
                        req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                        resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                    }),
                    {
                        let handler_copy = handler_arc.clone();
                        ::grpc::rt::MethodHandlerUnary::new(move |o, p| handler_copy.update_gateway(o, p))
                    },
                ),
                ::grpc::rt::ServerMethod::new(
                    ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                        name: "/ns.NetworkServerService/DeleteGateway".to_string(),
                        streaming: ::grpc::rt::GrpcStreaming::Unary,
                        req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                        resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                    }),
                    {
                        let handler_copy = handler_arc.clone();
                        ::grpc::rt::MethodHandlerUnary::new(move |o, p| handler_copy.delete_gateway(o, p))
                    },
                ),
                ::grpc::rt::ServerMethod::new(
                    ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                        name: "/ns.NetworkServerService/CreateGatewayProfile".to_string(),
                        streaming: ::grpc::rt::GrpcStreaming::Unary,
                        req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                        resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                    }),
                    {
                        let handler_copy = handler_arc.clone();
                        ::grpc::rt::MethodHandlerUnary::new(move |o, p| handler_copy.create_gateway_profile(o, p))
                    },
                ),
                ::grpc::rt::ServerMethod::new(
                    ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                        name: "/ns.NetworkServerService/GetGatewayProfile".to_string(),
                        streaming: ::grpc::rt::GrpcStreaming::Unary,
                        req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                        resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                    }),
                    {
                        let handler_copy = handler_arc.clone();
                        ::grpc::rt::MethodHandlerUnary::new(move |o, p| handler_copy.get_gateway_profile(o, p))
                    },
                ),
                ::grpc::rt::ServerMethod::new(
                    ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                        name: "/ns.NetworkServerService/UpdateGatewayProfile".to_string(),
                        streaming: ::grpc::rt::GrpcStreaming::Unary,
                        req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                        resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                    }),
                    {
                        let handler_copy = handler_arc.clone();
                        ::grpc::rt::MethodHandlerUnary::new(move |o, p| handler_copy.update_gateway_profile(o, p))
                    },
                ),
                ::grpc::rt::ServerMethod::new(
                    ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                        name: "/ns.NetworkServerService/DeleteGatewayProfile".to_string(),
                        streaming: ::grpc::rt::GrpcStreaming::Unary,
                        req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                        resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                    }),
                    {
                        let handler_copy = handler_arc.clone();
                        ::grpc::rt::MethodHandlerUnary::new(move |o, p| handler_copy.delete_gateway_profile(o, p))
                    },
                ),
                ::grpc::rt::ServerMethod::new(
                    ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                        name: "/ns.NetworkServerService/GetGatewayStats".to_string(),
                        streaming: ::grpc::rt::GrpcStreaming::Unary,
                        req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                        resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                    }),
                    {
                        let handler_copy = handler_arc.clone();
                        ::grpc::rt::MethodHandlerUnary::new(move |o, p| handler_copy.get_gateway_stats(o, p))
                    },
                ),
                ::grpc::rt::ServerMethod::new(
                    ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                        name: "/ns.NetworkServerService/StreamFrameLogsForGateway".to_string(),
                        streaming: ::grpc::rt::GrpcStreaming::ServerStreaming,
                        req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                        resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                    }),
                    {
                        let handler_copy = handler_arc.clone();
                        ::grpc::rt::MethodHandlerServerStreaming::new(move |o, p| handler_copy.stream_frame_logs_for_gateway(o, p))
                    },
                ),
                ::grpc::rt::ServerMethod::new(
                    ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                        name: "/ns.NetworkServerService/StreamFrameLogsForDevice".to_string(),
                        streaming: ::grpc::rt::GrpcStreaming::ServerStreaming,
                        req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                        resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                    }),
                    {
                        let handler_copy = handler_arc.clone();
                        ::grpc::rt::MethodHandlerServerStreaming::new(move |o, p| handler_copy.stream_frame_logs_for_device(o, p))
                    },
                ),
                ::grpc::rt::ServerMethod::new(
                    ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                        name: "/ns.NetworkServerService/CreateMulticastGroup".to_string(),
                        streaming: ::grpc::rt::GrpcStreaming::Unary,
                        req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                        resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                    }),
                    {
                        let handler_copy = handler_arc.clone();
                        ::grpc::rt::MethodHandlerUnary::new(move |o, p| handler_copy.create_multicast_group(o, p))
                    },
                ),
                ::grpc::rt::ServerMethod::new(
                    ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                        name: "/ns.NetworkServerService/GetMulticastGroup".to_string(),
                        streaming: ::grpc::rt::GrpcStreaming::Unary,
                        req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                        resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                    }),
                    {
                        let handler_copy = handler_arc.clone();
                        ::grpc::rt::MethodHandlerUnary::new(move |o, p| handler_copy.get_multicast_group(o, p))
                    },
                ),
                ::grpc::rt::ServerMethod::new(
                    ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                        name: "/ns.NetworkServerService/UpdateMulticastGroup".to_string(),
                        streaming: ::grpc::rt::GrpcStreaming::Unary,
                        req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                        resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                    }),
                    {
                        let handler_copy = handler_arc.clone();
                        ::grpc::rt::MethodHandlerUnary::new(move |o, p| handler_copy.update_multicast_group(o, p))
                    },
                ),
                ::grpc::rt::ServerMethod::new(
                    ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                        name: "/ns.NetworkServerService/DeleteMulticastGroup".to_string(),
                        streaming: ::grpc::rt::GrpcStreaming::Unary,
                        req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                        resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                    }),
                    {
                        let handler_copy = handler_arc.clone();
                        ::grpc::rt::MethodHandlerUnary::new(move |o, p| handler_copy.delete_multicast_group(o, p))
                    },
                ),
                ::grpc::rt::ServerMethod::new(
                    ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                        name: "/ns.NetworkServerService/AddDeviceToMulticastGroup".to_string(),
                        streaming: ::grpc::rt::GrpcStreaming::Unary,
                        req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                        resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                    }),
                    {
                        let handler_copy = handler_arc.clone();
                        ::grpc::rt::MethodHandlerUnary::new(move |o, p| handler_copy.add_device_to_multicast_group(o, p))
                    },
                ),
                ::grpc::rt::ServerMethod::new(
                    ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                        name: "/ns.NetworkServerService/RemoveDeviceFromMulticastGroup".to_string(),
                        streaming: ::grpc::rt::GrpcStreaming::Unary,
                        req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                        resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                    }),
                    {
                        let handler_copy = handler_arc.clone();
                        ::grpc::rt::MethodHandlerUnary::new(move |o, p| handler_copy.remove_device_from_multicast_group(o, p))
                    },
                ),
                ::grpc::rt::ServerMethod::new(
                    ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                        name: "/ns.NetworkServerService/EnqueueMulticastQueueItem".to_string(),
                        streaming: ::grpc::rt::GrpcStreaming::Unary,
                        req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                        resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                    }),
                    {
                        let handler_copy = handler_arc.clone();
                        ::grpc::rt::MethodHandlerUnary::new(move |o, p| handler_copy.enqueue_multicast_queue_item(o, p))
                    },
                ),
                ::grpc::rt::ServerMethod::new(
                    ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                        name: "/ns.NetworkServerService/FlushMulticastQueueForMulticastGroup".to_string(),
                        streaming: ::grpc::rt::GrpcStreaming::Unary,
                        req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                        resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                    }),
                    {
                        let handler_copy = handler_arc.clone();
                        ::grpc::rt::MethodHandlerUnary::new(move |o, p| handler_copy.flush_multicast_queue_for_multicast_group(o, p))
                    },
                ),
                ::grpc::rt::ServerMethod::new(
                    ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                        name: "/ns.NetworkServerService/GetMulticastQueueItemsForMulticastGroup".to_string(),
                        streaming: ::grpc::rt::GrpcStreaming::Unary,
                        req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                        resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                    }),
                    {
                        let handler_copy = handler_arc.clone();
                        ::grpc::rt::MethodHandlerUnary::new(move |o, p| handler_copy.get_multicast_queue_items_for_multicast_group(o, p))
                    },
                ),
                ::grpc::rt::ServerMethod::new(
                    ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                        name: "/ns.NetworkServerService/GetVersion".to_string(),
                        streaming: ::grpc::rt::GrpcStreaming::Unary,
                        req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                        resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                    }),
                    {
                        let handler_copy = handler_arc.clone();
                        ::grpc::rt::MethodHandlerUnary::new(move |o, p| handler_copy.get_version(o, p))
                    },
                ),
            ],
        )
    }
}
