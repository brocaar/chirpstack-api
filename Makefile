.PHONY: go swagger js rust python java

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
	CURRENT_UID="$(shell id -u):$(shell id -g)" CURRENT_HOME=$(HOME) docker-compose run --rm chirpstack-api-java
