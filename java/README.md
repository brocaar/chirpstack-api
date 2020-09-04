# chirpstack-api

ChirpStack gRPC API message and service wrappers for Java.

## ToDo

* publish java package to maven central: https://docs.github.com/en/actions/language-and-framework-guides/publishing-java-packages-with-maven

## Install

An artifact is not yet public on Maven Central, you have build your own jar with

```sh
make java -B
```  

and than with Maven install artifact on your Local Maven Repo

```sh
sudo chown $(id -u).$(id -g) java/build/ -R && mvn -f java/build/pom.xml install
```

## Usage

All messages, services, constants, etc. are auto-generated from the ChirpStack protobuf definitions. The result is that
this package structure matches that of the protobuf definitions.

The protobuf definitions can be found here: https://github.com/brocaar/chirpstack-api/tree/master/protobuf

### Example

Maven dependencies.

NOTE: for `chirpstack-api` you have to follow [Install](#Install) instructions

```xml
<dependency>
  <groupId>io.grpc</groupId>
  <artifactId>grpc-okhttp</artifactId>
  <version>${grpc.version}</version>
</dependency>

<dependency>
  <groupId>com.brocaar</groupId>
  <artifactId>chirpstack-api</artifactId>
  <version>3.7.7</version>
</dependency>
```

#### #1 blocking stub login

```java
private static void login() {
    ManagedChannel channel = ManagedChannelBuilder.forAddress("localhost", 8080)
            .build();

    InternalServiceGrpc.InternalServiceBlockingStub stub = InternalServiceGrpc.newBlockingStub(channel);

    Internal.LoginRequest loginRequest = Internal.LoginRequest.newBuilder()
            .setEmail("user")
            .setPassword("password")
            .build();

    Internal.LoginResponse loginResponse = stub.login(loginRequest);

    String token = loginResponse.getJwt();
    logger.info("token={}", token);

    channel.shutdown();
}
```
