# ChirpStack API

## Generate client libraries, API docs, etc.

In order to generate client libraries for all of the available languages, you should have `docker` and `docker-compose`
installed.

All client libraries can be (re)generated with

```sh
make all
```

Client libraries/docs can also be generated individually if desired

**Go**

```sh
make go
```

**Javascript/Typescript**

```sh
make js
```

**Swagger Docs**

```sh
make swagger
```
