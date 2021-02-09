# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: chirpstack-api/ns/profiles.proto
"""Generated protocol buffer code."""
from google.protobuf.internal import enum_type_wrapper
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()




DESCRIPTOR = _descriptor.FileDescriptor(
  name='chirpstack-api/ns/profiles.proto',
  package='ns',
  syntax='proto3',
  serialized_options=b'\n\024io.chirpstack.api.nsZ$github.com/brocaar/chirpstack-api/ns',
  create_key=_descriptor._internal_create_key,
  serialized_pb=b'\n chirpstack-api/ns/profiles.proto\x12\x02ns\"\x83\x04\n\x0eServiceProfile\x12\n\n\x02id\x18\x01 \x01(\x0c\x12\x0f\n\x07ul_rate\x18\x02 \x01(\r\x12\x16\n\x0eul_bucket_size\x18\x03 \x01(\r\x12&\n\x0eul_rate_policy\x18\x04 \x01(\x0e\x32\x0e.ns.RatePolicy\x12\x0f\n\x07\x64l_rate\x18\x05 \x01(\r\x12\x16\n\x0e\x64l_bucket_size\x18\x06 \x01(\r\x12&\n\x0e\x64l_rate_policy\x18\x07 \x01(\x0e\x32\x0e.ns.RatePolicy\x12\x17\n\x0f\x61\x64\x64_gw_metadata\x18\x08 \x01(\x08\x12\x1b\n\x13\x64\x65v_status_req_freq\x18\t \x01(\r\x12!\n\x19report_dev_status_battery\x18\n \x01(\x08\x12 \n\x18report_dev_status_margin\x18\x0b \x01(\x08\x12\x0e\n\x06\x64r_min\x18\x0c \x01(\r\x12\x0e\n\x06\x64r_max\x18\r \x01(\r\x12\x14\n\x0c\x63hannel_mask\x18\x0e \x01(\x0c\x12\x12\n\npr_allowed\x18\x0f \x01(\x08\x12\x12\n\nhr_allowed\x18\x10 \x01(\x08\x12\x12\n\nra_allowed\x18\x11 \x01(\x08\x12\x13\n\x0bnwk_geo_loc\x18\x12 \x01(\x08\x12\x12\n\ntarget_per\x18\x13 \x01(\r\x12\x18\n\x10min_gw_diversity\x18\x14 \x01(\r\x12\x13\n\x0bgws_private\x18\x15 \x01(\x08\"\xfb\x03\n\rDeviceProfile\x12\n\n\x02id\x18\x01 \x01(\x0c\x12\x18\n\x10supports_class_b\x18\x02 \x01(\x08\x12\x17\n\x0f\x63lass_b_timeout\x18\x03 \x01(\r\x12\x18\n\x10ping_slot_period\x18\x04 \x01(\r\x12\x14\n\x0cping_slot_dr\x18\x05 \x01(\r\x12\x16\n\x0eping_slot_freq\x18\x06 \x01(\r\x12\x18\n\x10supports_class_c\x18\x07 \x01(\x08\x12\x17\n\x0f\x63lass_c_timeout\x18\x08 \x01(\r\x12\x13\n\x0bmac_version\x18\t \x01(\t\x12\x1b\n\x13reg_params_revision\x18\n \x01(\t\x12\x12\n\nrx_delay_1\x18\x0b \x01(\r\x12\x16\n\x0erx_dr_offset_1\x18\x0c \x01(\r\x12\x15\n\rrx_datarate_2\x18\r \x01(\r\x12\x11\n\trx_freq_2\x18\x0e \x01(\r\x12\x1c\n\x14\x66\x61\x63tory_preset_freqs\x18\x0f \x03(\r\x12\x10\n\x08max_eirp\x18\x10 \x01(\r\x12\x16\n\x0emax_duty_cycle\x18\x11 \x01(\r\x12\x15\n\rsupports_join\x18\x12 \x01(\x08\x12\x11\n\trf_region\x18\x13 \x01(\t\x12\x1c\n\x14supports_32bit_f_cnt\x18\x14 \x01(\x08\x12\x18\n\x10\x61\x64r_algorithm_id\x18\x15 \x01(\t\"_\n\x0eRoutingProfile\x12\n\n\x02id\x18\x01 \x01(\x0c\x12\r\n\x05\x61s_id\x18\x02 \x01(\t\x12\x0f\n\x07\x63\x61_cert\x18\x03 \x01(\t\x12\x10\n\x08tls_cert\x18\x04 \x01(\t\x12\x0f\n\x07tls_key\x18\x05 \x01(\t* \n\nRatePolicy\x12\x08\n\x04\x44ROP\x10\x00\x12\x08\n\x04MARK\x10\x01\x42<\n\x14io.chirpstack.api.nsZ$github.com/brocaar/chirpstack-api/nsb\x06proto3'
)

_RATEPOLICY = _descriptor.EnumDescriptor(
  name='RatePolicy',
  full_name='ns.RatePolicy',
  filename=None,
  file=DESCRIPTOR,
  create_key=_descriptor._internal_create_key,
  values=[
    _descriptor.EnumValueDescriptor(
      name='DROP', index=0, number=0,
      serialized_options=None,
      type=None,
      create_key=_descriptor._internal_create_key),
    _descriptor.EnumValueDescriptor(
      name='MARK', index=1, number=1,
      serialized_options=None,
      type=None,
      create_key=_descriptor._internal_create_key),
  ],
  containing_type=None,
  serialized_options=None,
  serialized_start=1165,
  serialized_end=1197,
)
_sym_db.RegisterEnumDescriptor(_RATEPOLICY)

RatePolicy = enum_type_wrapper.EnumTypeWrapper(_RATEPOLICY)
DROP = 0
MARK = 1



_SERVICEPROFILE = _descriptor.Descriptor(
  name='ServiceProfile',
  full_name='ns.ServiceProfile',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='id', full_name='ns.ServiceProfile.id', index=0,
      number=1, type=12, cpp_type=9, label=1,
      has_default_value=False, default_value=b"",
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='ul_rate', full_name='ns.ServiceProfile.ul_rate', index=1,
      number=2, type=13, cpp_type=3, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='ul_bucket_size', full_name='ns.ServiceProfile.ul_bucket_size', index=2,
      number=3, type=13, cpp_type=3, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='ul_rate_policy', full_name='ns.ServiceProfile.ul_rate_policy', index=3,
      number=4, type=14, cpp_type=8, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='dl_rate', full_name='ns.ServiceProfile.dl_rate', index=4,
      number=5, type=13, cpp_type=3, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='dl_bucket_size', full_name='ns.ServiceProfile.dl_bucket_size', index=5,
      number=6, type=13, cpp_type=3, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='dl_rate_policy', full_name='ns.ServiceProfile.dl_rate_policy', index=6,
      number=7, type=14, cpp_type=8, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='add_gw_metadata', full_name='ns.ServiceProfile.add_gw_metadata', index=7,
      number=8, type=8, cpp_type=7, label=1,
      has_default_value=False, default_value=False,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='dev_status_req_freq', full_name='ns.ServiceProfile.dev_status_req_freq', index=8,
      number=9, type=13, cpp_type=3, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='report_dev_status_battery', full_name='ns.ServiceProfile.report_dev_status_battery', index=9,
      number=10, type=8, cpp_type=7, label=1,
      has_default_value=False, default_value=False,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='report_dev_status_margin', full_name='ns.ServiceProfile.report_dev_status_margin', index=10,
      number=11, type=8, cpp_type=7, label=1,
      has_default_value=False, default_value=False,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='dr_min', full_name='ns.ServiceProfile.dr_min', index=11,
      number=12, type=13, cpp_type=3, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='dr_max', full_name='ns.ServiceProfile.dr_max', index=12,
      number=13, type=13, cpp_type=3, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='channel_mask', full_name='ns.ServiceProfile.channel_mask', index=13,
      number=14, type=12, cpp_type=9, label=1,
      has_default_value=False, default_value=b"",
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='pr_allowed', full_name='ns.ServiceProfile.pr_allowed', index=14,
      number=15, type=8, cpp_type=7, label=1,
      has_default_value=False, default_value=False,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='hr_allowed', full_name='ns.ServiceProfile.hr_allowed', index=15,
      number=16, type=8, cpp_type=7, label=1,
      has_default_value=False, default_value=False,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='ra_allowed', full_name='ns.ServiceProfile.ra_allowed', index=16,
      number=17, type=8, cpp_type=7, label=1,
      has_default_value=False, default_value=False,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='nwk_geo_loc', full_name='ns.ServiceProfile.nwk_geo_loc', index=17,
      number=18, type=8, cpp_type=7, label=1,
      has_default_value=False, default_value=False,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='target_per', full_name='ns.ServiceProfile.target_per', index=18,
      number=19, type=13, cpp_type=3, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='min_gw_diversity', full_name='ns.ServiceProfile.min_gw_diversity', index=19,
      number=20, type=13, cpp_type=3, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='gws_private', full_name='ns.ServiceProfile.gws_private', index=20,
      number=21, type=8, cpp_type=7, label=1,
      has_default_value=False, default_value=False,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=41,
  serialized_end=556,
)


_DEVICEPROFILE = _descriptor.Descriptor(
  name='DeviceProfile',
  full_name='ns.DeviceProfile',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='id', full_name='ns.DeviceProfile.id', index=0,
      number=1, type=12, cpp_type=9, label=1,
      has_default_value=False, default_value=b"",
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='supports_class_b', full_name='ns.DeviceProfile.supports_class_b', index=1,
      number=2, type=8, cpp_type=7, label=1,
      has_default_value=False, default_value=False,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='class_b_timeout', full_name='ns.DeviceProfile.class_b_timeout', index=2,
      number=3, type=13, cpp_type=3, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='ping_slot_period', full_name='ns.DeviceProfile.ping_slot_period', index=3,
      number=4, type=13, cpp_type=3, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='ping_slot_dr', full_name='ns.DeviceProfile.ping_slot_dr', index=4,
      number=5, type=13, cpp_type=3, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='ping_slot_freq', full_name='ns.DeviceProfile.ping_slot_freq', index=5,
      number=6, type=13, cpp_type=3, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='supports_class_c', full_name='ns.DeviceProfile.supports_class_c', index=6,
      number=7, type=8, cpp_type=7, label=1,
      has_default_value=False, default_value=False,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='class_c_timeout', full_name='ns.DeviceProfile.class_c_timeout', index=7,
      number=8, type=13, cpp_type=3, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='mac_version', full_name='ns.DeviceProfile.mac_version', index=8,
      number=9, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='reg_params_revision', full_name='ns.DeviceProfile.reg_params_revision', index=9,
      number=10, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='rx_delay_1', full_name='ns.DeviceProfile.rx_delay_1', index=10,
      number=11, type=13, cpp_type=3, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='rx_dr_offset_1', full_name='ns.DeviceProfile.rx_dr_offset_1', index=11,
      number=12, type=13, cpp_type=3, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='rx_datarate_2', full_name='ns.DeviceProfile.rx_datarate_2', index=12,
      number=13, type=13, cpp_type=3, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='rx_freq_2', full_name='ns.DeviceProfile.rx_freq_2', index=13,
      number=14, type=13, cpp_type=3, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='factory_preset_freqs', full_name='ns.DeviceProfile.factory_preset_freqs', index=14,
      number=15, type=13, cpp_type=3, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='max_eirp', full_name='ns.DeviceProfile.max_eirp', index=15,
      number=16, type=13, cpp_type=3, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='max_duty_cycle', full_name='ns.DeviceProfile.max_duty_cycle', index=16,
      number=17, type=13, cpp_type=3, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='supports_join', full_name='ns.DeviceProfile.supports_join', index=17,
      number=18, type=8, cpp_type=7, label=1,
      has_default_value=False, default_value=False,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='rf_region', full_name='ns.DeviceProfile.rf_region', index=18,
      number=19, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='supports_32bit_f_cnt', full_name='ns.DeviceProfile.supports_32bit_f_cnt', index=19,
      number=20, type=8, cpp_type=7, label=1,
      has_default_value=False, default_value=False,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='adr_algorithm_id', full_name='ns.DeviceProfile.adr_algorithm_id', index=20,
      number=21, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=559,
  serialized_end=1066,
)


_ROUTINGPROFILE = _descriptor.Descriptor(
  name='RoutingProfile',
  full_name='ns.RoutingProfile',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='id', full_name='ns.RoutingProfile.id', index=0,
      number=1, type=12, cpp_type=9, label=1,
      has_default_value=False, default_value=b"",
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='as_id', full_name='ns.RoutingProfile.as_id', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='ca_cert', full_name='ns.RoutingProfile.ca_cert', index=2,
      number=3, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='tls_cert', full_name='ns.RoutingProfile.tls_cert', index=3,
      number=4, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='tls_key', full_name='ns.RoutingProfile.tls_key', index=4,
      number=5, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=1068,
  serialized_end=1163,
)

_SERVICEPROFILE.fields_by_name['ul_rate_policy'].enum_type = _RATEPOLICY
_SERVICEPROFILE.fields_by_name['dl_rate_policy'].enum_type = _RATEPOLICY
DESCRIPTOR.message_types_by_name['ServiceProfile'] = _SERVICEPROFILE
DESCRIPTOR.message_types_by_name['DeviceProfile'] = _DEVICEPROFILE
DESCRIPTOR.message_types_by_name['RoutingProfile'] = _ROUTINGPROFILE
DESCRIPTOR.enum_types_by_name['RatePolicy'] = _RATEPOLICY
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

ServiceProfile = _reflection.GeneratedProtocolMessageType('ServiceProfile', (_message.Message,), {
  'DESCRIPTOR' : _SERVICEPROFILE,
  '__module__' : 'chirpstack_api.ns.profiles_pb2'
  # @@protoc_insertion_point(class_scope:ns.ServiceProfile)
  })
_sym_db.RegisterMessage(ServiceProfile)

DeviceProfile = _reflection.GeneratedProtocolMessageType('DeviceProfile', (_message.Message,), {
  'DESCRIPTOR' : _DEVICEPROFILE,
  '__module__' : 'chirpstack_api.ns.profiles_pb2'
  # @@protoc_insertion_point(class_scope:ns.DeviceProfile)
  })
_sym_db.RegisterMessage(DeviceProfile)

RoutingProfile = _reflection.GeneratedProtocolMessageType('RoutingProfile', (_message.Message,), {
  'DESCRIPTOR' : _ROUTINGPROFILE,
  '__module__' : 'chirpstack_api.ns.profiles_pb2'
  # @@protoc_insertion_point(class_scope:ns.RoutingProfile)
  })
_sym_db.RegisterMessage(RoutingProfile)


DESCRIPTOR._options = None
# @@protoc_insertion_point(module_scope)
