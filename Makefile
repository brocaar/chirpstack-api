.PHONY: go swagger js

all:
	docker-compose up

go:
	docker-compose run --rm chirpstack-api-go

swagger:
	docker-compose run --rm chirpstack-api-swagger

js:
	docker-compose run --rm chirpstack-api-js