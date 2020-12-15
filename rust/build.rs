use std::path::Path;

fn main() -> Result<(), Box<dyn std::error::Error>> {
    let out_dir = std::env::var("OUT_DIR").unwrap();
    let out_dir = Path::new(&out_dir);

    let proto_dir = std::env::var("CARGO_MANIFEST_DIR").unwrap();
    let proto_dir = Path::new(&proto_dir);
    let proto_dir = proto_dir.join("proto");

    std::fs::create_dir_all(out_dir.join("common")).unwrap();
    std::fs::create_dir_all(out_dir.join("gw")).unwrap();
    std::fs::create_dir_all(out_dir.join("geo")).unwrap();
    std::fs::create_dir_all(out_dir.join("as")).unwrap();
    std::fs::create_dir_all(out_dir.join("ns")).unwrap();
    std::fs::create_dir_all(out_dir.join("nc")).unwrap();
    std::fs::create_dir_all(out_dir.join("fuota")).unwrap();

    tonic_build::configure()
        .out_dir(out_dir.join("common"))
        .compile(
            &["common/common.proto"],
            &[
                proto_dir.join("chirpstack-api").to_str().unwrap(),
                proto_dir.join("google").to_str().unwrap(),
            ],
        )?;

    tonic_build::configure()
        .out_dir(out_dir.join("gw"))
        .extern_path(".common", "crate::common")
        .compile(
            &["gw/gw.proto"],
            &[
                proto_dir.join("chirpstack-api").to_str().unwrap(),
                proto_dir.join("google").to_str().unwrap(),
            ],
        )?;

    tonic_build::configure()
        .out_dir(out_dir.join("geo"))
        .extern_path(".common", "crate::common")
        .extern_path(".gw", "crate::gw")
        .compile(
            &["geo/geo.proto"],
            &[
                proto_dir.join("chirpstack-api").to_str().unwrap(),
                proto_dir.join("google").to_str().unwrap(),
            ],
        )?;

    tonic_build::configure()
        .out_dir(out_dir.join("as"))
        .extern_path(".common", "crate::common")
        .extern_path(".gw", "crate::gw")
        .compile(
            &[
                "as/as.proto",
                "as/external/api/application.proto",
                "as/external/api/device.proto",
                "as/external/api/deviceProfile.proto",
                "as/external/api/deviceQueue.proto",
                "as/external/api/frameLog.proto",
                "as/external/api/gateway.proto",
                "as/external/api/gatewayProfile.proto",
                "as/external/api/internal.proto",
                "as/external/api/multicastGroup.proto",
                "as/external/api/networkServer.proto",
                "as/external/api/organization.proto",
                "as/external/api/profiles.proto",
                "as/external/api/serviceProfile.proto",
                "as/external/api/user.proto",
                "as/integration/integration.proto",
            ],
            &[
                proto_dir.join("chirpstack-api").to_str().unwrap(),
                proto_dir.join("google").to_str().unwrap(),
            ],
        )?;

    tonic_build::configure()
        .out_dir(out_dir.join("ns"))
        .extern_path(".common", "crate::common")
        .extern_path(".gw", "crate::gw")
        .compile(
            &["ns/ns.proto", "ns/profiles.proto"],
            &[
                proto_dir.join("chirpstack-api").to_str().unwrap(),
                proto_dir.join("google").to_str().unwrap(),
            ],
        )?;

    tonic_build::configure()
        .out_dir(out_dir.join("fuota"))
        .compile(
            &["fuota/fuota.proto"],
            &[
                proto_dir.join("chirpstack-api").to_str().unwrap(),
                proto_dir.join("google").to_str().unwrap(),
            ],
        )?;

    tonic_build::configure()
        .out_dir(out_dir.join("nc"))
        .extern_path(".common", "crate::common")
        .extern_path(".gw", "crate::gw")
        .compile(
            &["nc/nc.proto"],
            &[
                proto_dir.join("chirpstack-api").to_str().unwrap(),
                proto_dir.join("google").to_str().unwrap(),
            ],
        )?;

    Ok(())
}
