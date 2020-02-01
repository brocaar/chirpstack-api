use std::path::Path;

fn main() -> Result<(), Box<dyn std::error::Error>> {
    let out_dir = std::env::var("OUT_DIR").unwrap();
    let out_dir = Path::new(&out_dir);

    std::fs::create_dir_all(out_dir.join("common")).unwrap();
    std::fs::create_dir_all(out_dir.join("gw")).unwrap();
    std::fs::create_dir_all(out_dir.join("geo")).unwrap();
    std::fs::create_dir_all(out_dir.join("as")).unwrap();
    std::fs::create_dir_all(out_dir.join("ns")).unwrap();
    std::fs::create_dir_all(out_dir.join("nc")).unwrap();

    tonic_build::configure()
        .out_dir(out_dir.join("common"))
        .compile(
            &["common/common.proto"],
            &["proto/chirpstack-api", "proto/google"],
        )?;

    tonic_build::configure()
        .out_dir(out_dir.join("gw"))
        .extern_path(".common", "crate::common")
        .compile(&["gw/gw.proto"], &["proto/chirpstack-api", "proto/google"])?;

    tonic_build::configure()
        .out_dir(out_dir.join("geo"))
        .extern_path(".common", "crate::common")
        .extern_path(".gw", "crate::gw")
        .compile(
            &["geo/geo.proto"],
            &["proto/chirpstack-api", "proto/google"],
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
                "as/external/api/fuotaDeployment.proto",
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
            &["proto/chirpstack-api", "proto/google"],
        )?;

    tonic_build::configure()
        .out_dir(out_dir.join("ns"))
        .extern_path(".common", "crate::common")
        .extern_path(".gw", "crate::gw")
        .compile(
            &["ns/ns.proto", "ns/profiles.proto"],
            &["proto/chirpstack-api", "proto/google"],
        )?;

    tonic_build::configure()
        .out_dir(out_dir.join("nc"))
        .extern_path(".common", "crate::common")
        .extern_path(".gw", "crate::gw")
        .compile(&["nc/nc.proto"], &["proto/chirpstack-api", "proto/google"])?;

    Ok(())
}
