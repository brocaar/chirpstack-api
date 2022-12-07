"""
@generated by mypy-protobuf.  Do not edit manually!
isort:skip_file
"""
import builtins
import google.protobuf.descriptor
import google.protobuf.internal.containers
import google.protobuf.message
import typing
import typing_extensions

DESCRIPTOR: google.protobuf.descriptor.FileDescriptor = ...

class DeviceQueueItem(google.protobuf.message.Message):
    DESCRIPTOR: google.protobuf.descriptor.Descriptor = ...
    DEV_EUI_FIELD_NUMBER: builtins.int
    CONFIRMED_FIELD_NUMBER: builtins.int
    F_CNT_FIELD_NUMBER: builtins.int
    F_PORT_FIELD_NUMBER: builtins.int
    DATA_FIELD_NUMBER: builtins.int
    JSON_OBJECT_FIELD_NUMBER: builtins.int
    # Device EUI (HEX encoded).
    dev_eui: typing.Text = ...
    # Set this to true when an acknowledgement from the device is required.
    # Please note that this must not be used to guarantee a delivery.
    confirmed: builtins.bool = ...
    # Downlink frame-counter.
    # This will be automatically set on enquue.
    f_cnt: builtins.int = ...
    # FPort used (must be > 0)
    f_port: builtins.int = ...
    # Base64 encoded data.
    # Or use the json_object field when an application codec has been configured.
    data: builtins.bytes = ...
    # JSON object (string).
    # Only use this when an application codec has been configured that can convert
    # this object into binary form.
    json_object: typing.Text = ...
    def __init__(self,
        *,
        dev_eui : typing.Text = ...,
        confirmed : builtins.bool = ...,
        f_cnt : builtins.int = ...,
        f_port : builtins.int = ...,
        data : builtins.bytes = ...,
        json_object : typing.Text = ...,
        ) -> None: ...
    def ClearField(self, field_name: typing_extensions.Literal[u"confirmed",b"confirmed",u"data",b"data",u"dev_eui",b"dev_eui",u"f_cnt",b"f_cnt",u"f_port",b"f_port",u"json_object",b"json_object"]) -> None: ...
global___DeviceQueueItem = DeviceQueueItem

class EnqueueDeviceQueueItemRequest(google.protobuf.message.Message):
    DESCRIPTOR: google.protobuf.descriptor.Descriptor = ...
    DEVICE_QUEUE_ITEM_FIELD_NUMBER: builtins.int
    # Queue-item object to enqueue.
    @property
    def device_queue_item(self) -> global___DeviceQueueItem: ...
    def __init__(self,
        *,
        device_queue_item : typing.Optional[global___DeviceQueueItem] = ...,
        ) -> None: ...
    def HasField(self, field_name: typing_extensions.Literal[u"device_queue_item",b"device_queue_item"]) -> builtins.bool: ...
    def ClearField(self, field_name: typing_extensions.Literal[u"device_queue_item",b"device_queue_item"]) -> None: ...
global___EnqueueDeviceQueueItemRequest = EnqueueDeviceQueueItemRequest

class EnqueueDeviceQueueItemResponse(google.protobuf.message.Message):
    DESCRIPTOR: google.protobuf.descriptor.Descriptor = ...
    F_CNT_FIELD_NUMBER: builtins.int
    # Frame-counter for the enqueued payload.
    f_cnt: builtins.int = ...
    def __init__(self,
        *,
        f_cnt : builtins.int = ...,
        ) -> None: ...
    def ClearField(self, field_name: typing_extensions.Literal[u"f_cnt",b"f_cnt"]) -> None: ...
global___EnqueueDeviceQueueItemResponse = EnqueueDeviceQueueItemResponse

class FlushDeviceQueueRequest(google.protobuf.message.Message):
    DESCRIPTOR: google.protobuf.descriptor.Descriptor = ...
    DEV_EUI_FIELD_NUMBER: builtins.int
    # Device EUI (HEX encoded).
    dev_eui: typing.Text = ...
    def __init__(self,
        *,
        dev_eui : typing.Text = ...,
        ) -> None: ...
    def ClearField(self, field_name: typing_extensions.Literal[u"dev_eui",b"dev_eui"]) -> None: ...
global___FlushDeviceQueueRequest = FlushDeviceQueueRequest

class ListDeviceQueueItemsRequest(google.protobuf.message.Message):
    DESCRIPTOR: google.protobuf.descriptor.Descriptor = ...
    DEV_EUI_FIELD_NUMBER: builtins.int
    COUNT_ONLY_FIELD_NUMBER: builtins.int
    # Device EUI (HEX encoded).
    dev_eui: typing.Text = ...
    # Return only the count, not the result-set.
    count_only: builtins.bool = ...
    def __init__(self,
        *,
        dev_eui : typing.Text = ...,
        count_only : builtins.bool = ...,
        ) -> None: ...
    def ClearField(self, field_name: typing_extensions.Literal[u"count_only",b"count_only",u"dev_eui",b"dev_eui"]) -> None: ...
global___ListDeviceQueueItemsRequest = ListDeviceQueueItemsRequest

class ListDeviceQueueItemsResponse(google.protobuf.message.Message):
    DESCRIPTOR: google.protobuf.descriptor.Descriptor = ...
    DEVICE_QUEUE_ITEMS_FIELD_NUMBER: builtins.int
    TOTAL_COUNT_FIELD_NUMBER: builtins.int
    # The device queue items.
    @property
    def device_queue_items(self) -> google.protobuf.internal.containers.RepeatedCompositeFieldContainer[global___DeviceQueueItem]: ...
    # Total number of items in the queue.
    total_count: builtins.int = ...
    def __init__(self,
        *,
        device_queue_items : typing.Optional[typing.Iterable[global___DeviceQueueItem]] = ...,
        total_count : builtins.int = ...,
        ) -> None: ...
    def ClearField(self, field_name: typing_extensions.Literal[u"device_queue_items",b"device_queue_items",u"total_count",b"total_count"]) -> None: ...
global___ListDeviceQueueItemsResponse = ListDeviceQueueItemsResponse
