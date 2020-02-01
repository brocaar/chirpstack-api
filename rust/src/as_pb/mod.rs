#[cfg(feature = "grpc_support")]
tonic::include_proto!("as/r#as");
#[cfg(feature = "grpc_support")]
pub mod external;
pub mod integration;
