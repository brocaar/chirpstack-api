.PHONY: go swagger js rust

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
