// Code generated by protoc-gen-go. DO NOT EDIT.
// source: common/common.proto

package common

import (
	fmt "fmt"
	proto "github.com/golang/protobuf/proto"
	math "math"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.ProtoPackageIsVersion3 // please upgrade the proto package

type Modulation int32

const (
	// LoRa
	Modulation_LORA Modulation = 0
	// FSK
	Modulation_FSK Modulation = 1
)

var Modulation_name = map[int32]string{
	0: "LORA",
	1: "FSK",
}

var Modulation_value = map[string]int32{
	"LORA": 0,
	"FSK":  1,
}

func (x Modulation) String() string {
	return proto.EnumName(Modulation_name, int32(x))
}

func (Modulation) EnumDescriptor() ([]byte, []int) {
	return fileDescriptor_8f954d82c0b891f6, []int{0}
}

type Region int32

const (
	// EU868
	Region_EU868 Region = 0
	// US915
	Region_US915 Region = 2
	// CN779
	Region_CN779 Region = 3
	// EU433
	Region_EU433 Region = 4
	// AU915
	Region_AU915 Region = 5
	// CN470
	Region_CN470 Region = 6
	// AS923
	Region_AS923 Region = 7
	// KR920
	Region_KR920 Region = 8
	// IN865
	Region_IN865 Region = 9
	// RU864
	Region_RU864 Region = 10
)

var Region_name = map[int32]string{
	0:  "EU868",
	2:  "US915",
	3:  "CN779",
	4:  "EU433",
	5:  "AU915",
	6:  "CN470",
	7:  "AS923",
	8:  "KR920",
	9:  "IN865",
	10: "RU864",
}

var Region_value = map[string]int32{
	"EU868": 0,
	"US915": 2,
	"CN779": 3,
	"EU433": 4,
	"AU915": 5,
	"CN470": 6,
	"AS923": 7,
	"KR920": 8,
	"IN865": 9,
	"RU864": 10,
}

func (x Region) String() string {
	return proto.EnumName(Region_name, int32(x))
}

func (Region) EnumDescriptor() ([]byte, []int) {
	return fileDescriptor_8f954d82c0b891f6, []int{1}
}

type LocationSource int32

const (
	// Unknown.
	LocationSource_UNKNOWN LocationSource = 0
	// GPS.
	LocationSource_GPS LocationSource = 1
	// Manually configured.
	LocationSource_CONFIG LocationSource = 2
	// Geo resolver (TDOA).
	LocationSource_GEO_RESOLVER_TDOA LocationSource = 3
	// Geo resolver (RSSI).
	LocationSource_GEO_RESOLVER_RSSI LocationSource = 4
	// Geo resolver (GNSS).
	LocationSource_GEO_RESOLVER_GNSS LocationSource = 5
	// Geo resolver (WIFI).
	LocationSource_GEO_RESOLVER_WIFI LocationSource = 6
)

var LocationSource_name = map[int32]string{
	0: "UNKNOWN",
	1: "GPS",
	2: "CONFIG",
	3: "GEO_RESOLVER_TDOA",
	4: "GEO_RESOLVER_RSSI",
	5: "GEO_RESOLVER_GNSS",
	6: "GEO_RESOLVER_WIFI",
}

var LocationSource_value = map[string]int32{
	"UNKNOWN":           0,
	"GPS":               1,
	"CONFIG":            2,
	"GEO_RESOLVER_TDOA": 3,
	"GEO_RESOLVER_RSSI": 4,
	"GEO_RESOLVER_GNSS": 5,
	"GEO_RESOLVER_WIFI": 6,
}

func (x LocationSource) String() string {
	return proto.EnumName(LocationSource_name, int32(x))
}

func (LocationSource) EnumDescriptor() ([]byte, []int) {
	return fileDescriptor_8f954d82c0b891f6, []int{2}
}

type KeyEnvelope struct {
	// KEK label.
	KekLabel string `protobuf:"bytes,1,opt,name=kek_label,json=kekLabel,proto3" json:"kek_label,omitempty"`
	// AES key (when the kek_label is set, this key is encrypted using a key
	// known to the join-server and application-server.
	// For more information please refer to the LoRaWAN Backend Interface
	// 'Key Transport Security' section.
	AesKey               []byte   `protobuf:"bytes,2,opt,name=aes_key,json=aesKey,proto3" json:"aes_key,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *KeyEnvelope) Reset()         { *m = KeyEnvelope{} }
func (m *KeyEnvelope) String() string { return proto.CompactTextString(m) }
func (*KeyEnvelope) ProtoMessage()    {}
func (*KeyEnvelope) Descriptor() ([]byte, []int) {
	return fileDescriptor_8f954d82c0b891f6, []int{0}
}

func (m *KeyEnvelope) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_KeyEnvelope.Unmarshal(m, b)
}
func (m *KeyEnvelope) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_KeyEnvelope.Marshal(b, m, deterministic)
}
func (m *KeyEnvelope) XXX_Merge(src proto.Message) {
	xxx_messageInfo_KeyEnvelope.Merge(m, src)
}
func (m *KeyEnvelope) XXX_Size() int {
	return xxx_messageInfo_KeyEnvelope.Size(m)
}
func (m *KeyEnvelope) XXX_DiscardUnknown() {
	xxx_messageInfo_KeyEnvelope.DiscardUnknown(m)
}

var xxx_messageInfo_KeyEnvelope proto.InternalMessageInfo

func (m *KeyEnvelope) GetKekLabel() string {
	if m != nil {
		return m.KekLabel
	}
	return ""
}

func (m *KeyEnvelope) GetAesKey() []byte {
	if m != nil {
		return m.AesKey
	}
	return nil
}

type Location struct {
	// Latitude.
	Latitude float64 `protobuf:"fixed64,1,opt,name=latitude,proto3" json:"latitude,omitempty"`
	// Longitude.
	Longitude float64 `protobuf:"fixed64,2,opt,name=longitude,proto3" json:"longitude,omitempty"`
	// Altitude.
	Altitude float64 `protobuf:"fixed64,3,opt,name=altitude,proto3" json:"altitude,omitempty"`
	// Location source.
	Source LocationSource `protobuf:"varint,4,opt,name=source,proto3,enum=common.LocationSource" json:"source,omitempty"`
	// Accuracy (in meters).
	Accuracy             uint32   `protobuf:"varint,5,opt,name=accuracy,proto3" json:"accuracy,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *Location) Reset()         { *m = Location{} }
func (m *Location) String() string { return proto.CompactTextString(m) }
func (*Location) ProtoMessage()    {}
func (*Location) Descriptor() ([]byte, []int) {
	return fileDescriptor_8f954d82c0b891f6, []int{1}
}

func (m *Location) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_Location.Unmarshal(m, b)
}
func (m *Location) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_Location.Marshal(b, m, deterministic)
}
func (m *Location) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Location.Merge(m, src)
}
func (m *Location) XXX_Size() int {
	return xxx_messageInfo_Location.Size(m)
}
func (m *Location) XXX_DiscardUnknown() {
	xxx_messageInfo_Location.DiscardUnknown(m)
}

var xxx_messageInfo_Location proto.InternalMessageInfo

func (m *Location) GetLatitude() float64 {
	if m != nil {
		return m.Latitude
	}
	return 0
}

func (m *Location) GetLongitude() float64 {
	if m != nil {
		return m.Longitude
	}
	return 0
}

func (m *Location) GetAltitude() float64 {
	if m != nil {
		return m.Altitude
	}
	return 0
}

func (m *Location) GetSource() LocationSource {
	if m != nil {
		return m.Source
	}
	return LocationSource_UNKNOWN
}

func (m *Location) GetAccuracy() uint32 {
	if m != nil {
		return m.Accuracy
	}
	return 0
}

func init() {
	proto.RegisterEnum("common.Modulation", Modulation_name, Modulation_value)
	proto.RegisterEnum("common.Region", Region_name, Region_value)
	proto.RegisterEnum("common.LocationSource", LocationSource_name, LocationSource_value)
	proto.RegisterType((*KeyEnvelope)(nil), "common.KeyEnvelope")
	proto.RegisterType((*Location)(nil), "common.Location")
}

func init() {
	proto.RegisterFile("common/common.proto", fileDescriptor_8f954d82c0b891f6)
}

var fileDescriptor_8f954d82c0b891f6 = []byte{
	// 459 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x64, 0x52, 0xdb, 0x6e, 0xda, 0x3e,
	0x18, 0xaf, 0x39, 0x04, 0xf8, 0xf8, 0xff, 0x2b, 0xcf, 0xd3, 0x36, 0xb4, 0x4d, 0x1a, 0xea, 0x15,
	0x42, 0x5a, 0xe8, 0x80, 0x72, 0xb8, 0xa4, 0x2c, 0xa0, 0x28, 0x2c, 0x41, 0xf6, 0xb2, 0x6a, 0xbb,
	0x41, 0x26, 0xb5, 0x68, 0x94, 0x14, 0x47, 0x21, 0x41, 0xe2, 0x25, 0xf6, 0x24, 0x7b, 0xc8, 0xc9,
	0x49, 0xda, 0x6a, 0xe2, 0xca, 0xbf, 0xa3, 0xe3, 0x2f, 0xfa, 0xe0, 0xb5, 0x27, 0x1f, 0x1f, 0xe5,
	0xbe, 0x97, 0x1f, 0x7a, 0x14, 0xcb, 0x44, 0x12, 0x2d, 0x67, 0x57, 0x73, 0x68, 0x5a, 0xe2, 0x64,
	0xec, 0x8f, 0x22, 0x94, 0x91, 0x20, 0x1f, 0xa0, 0x11, 0x88, 0x60, 0x13, 0xf2, 0xad, 0x08, 0x5b,
	0xa8, 0x8d, 0x3a, 0x0d, 0x5a, 0x0f, 0x44, 0xb0, 0x52, 0x9c, 0xbc, 0x83, 0x1a, 0x17, 0x87, 0x4d,
	0x20, 0x4e, 0xad, 0x52, 0x1b, 0x75, 0xfe, 0xa3, 0x1a, 0x17, 0x07, 0x4b, 0x9c, 0xae, 0xfe, 0x20,
	0xa8, 0xaf, 0xa4, 0xc7, 0x13, 0x5f, 0xee, 0xc9, 0x7b, 0xa8, 0x87, 0x3c, 0xf1, 0x93, 0xf4, 0x5e,
	0x64, 0x37, 0x20, 0xfa, 0xcc, 0xc9, 0x47, 0x68, 0x84, 0x72, 0xbf, 0xcb, 0xcd, 0x52, 0x66, 0xbe,
	0x08, 0xaa, 0xc9, 0xc3, 0xa2, 0x59, 0xce, 0x9b, 0x4f, 0x9c, 0xe8, 0xa0, 0x1d, 0x64, 0x1a, 0x7b,
	0xa2, 0x55, 0x69, 0xa3, 0xce, 0x65, 0xff, 0xad, 0x5e, 0x8c, 0xf3, 0xf4, 0x5d, 0x96, 0xb9, 0xb4,
	0x48, 0x65, 0x77, 0x79, 0x5e, 0x1a, 0x73, 0xef, 0xd4, 0xaa, 0xb6, 0x51, 0xe7, 0x7f, 0xfa, 0xcc,
	0xbb, 0x9f, 0x00, 0xbe, 0xc9, 0xfb, 0x34, 0xcc, 0xdf, 0x5b, 0x87, 0xca, 0xca, 0xa1, 0x33, 0x7c,
	0x41, 0x6a, 0x50, 0x5e, 0x30, 0x0b, 0xa3, 0xee, 0x11, 0x34, 0x2a, 0x76, 0xca, 0x6c, 0x40, 0xd5,
	0x70, 0x27, 0xa3, 0x09, 0xbe, 0x50, 0xd0, 0x65, 0xd3, 0x2f, 0x37, 0xb8, 0xa4, 0xe0, 0xdc, 0x1e,
	0x8f, 0xa7, 0xb8, 0x9c, 0x07, 0x86, 0x83, 0x01, 0xae, 0x28, 0x38, 0x73, 0x55, 0xa0, 0x9a, 0x07,
	0x86, 0xe3, 0x6b, 0xac, 0x65, 0x2a, 0x9b, 0xf6, 0x07, 0xb8, 0xa6, 0xa0, 0x45, 0xa7, 0xfd, 0x6b,
	0x5c, 0x57, 0xd0, 0xb4, 0x27, 0xa3, 0x1b, 0xdc, 0x50, 0x90, 0xba, 0x93, 0xd1, 0x10, 0x43, 0xf7,
	0x37, 0x82, 0xcb, 0x7f, 0xe7, 0x21, 0x4d, 0xa8, 0xb9, 0xb6, 0x65, 0x3b, 0x77, 0x76, 0xfe, 0xc0,
	0xe5, 0x9a, 0x61, 0x44, 0x00, 0xb4, 0xb9, 0x63, 0x2f, 0xcc, 0x25, 0x2e, 0x91, 0x37, 0xf0, 0x6a,
	0x69, 0x38, 0x1b, 0x6a, 0x30, 0x67, 0xf5, 0xc3, 0xa0, 0x9b, 0xef, 0x5f, 0x9d, 0x19, 0x2e, 0x9f,
	0xc9, 0x94, 0x31, 0x13, 0x57, 0xce, 0xe4, 0xa5, 0xcd, 0x18, 0xae, 0x9e, 0xc9, 0x77, 0xe6, 0xc2,
	0xc4, 0xda, 0xed, 0x4f, 0x68, 0xf9, 0x52, 0xf7, 0x1e, 0xfc, 0x38, 0x3a, 0x24, 0xdc, 0x0b, 0x74,
	0x1e, 0xf9, 0xc5, 0x8f, 0xbf, 0x6d, 0xce, 0xb3, 0x73, 0xad, 0xd6, 0x69, 0x8d, 0x7e, 0xe9, 0x3b,
	0x3f, 0x79, 0x48, 0xb7, 0xca, 0xed, 0x6d, 0x63, 0xe9, 0x71, 0x1e, 0xf7, 0x5e, 0x8a, 0x9f, 0x79,
	0xe4, 0xf7, 0x76, 0xb2, 0x77, 0x1c, 0x14, 0x6b, 0xb8, 0xd5, 0xb2, 0x3d, 0x1c, 0xfc, 0x0d, 0x00,
	0x00, 0xff, 0xff, 0x7b, 0x0f, 0x53, 0x67, 0x9e, 0x02, 0x00, 0x00,
}
