.PHONY: go swagger js rust python

# foo := $(id -u):$(id -g)
# export CURRENT_UID = foo

all:
	docker-compose up

go:
	docker-compose run --rm chirpstack-api-go

swagger:
	docker-compose run --rm chirpstack-api-swagger

js:
	docker-compose run --rm chirpstack-api-js

rust:
	docker-compose run --rm chirpstack-api-rust

python:
	docker-compose run --rm chirpstack-api-python

java:
	docker-compose run --rm chirpstack-api-java
