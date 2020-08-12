# chirpstack-api

ChirpStack gRPC API message and service wrappers for Java.

## ToDo

* publish java package: https://docs.github.com/en/actions/language-and-framework-guides/publishing-java-packages-with-maven

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

Doing it...

```java

```
