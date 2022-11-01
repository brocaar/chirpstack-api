.PHONY: requirements 

all: requirements install 

requirements:
	rm -rf /src/obj
	dotnet clean "/src/Chirpstack.Api.csproj"

install:
	dotnet build "/src/Chirpstack.Api.csproj" -c Release -o /app/build

copy:
	mkdir -p /chirpstack-api/c-sharp/protobuf/
	cp -r .. /chirpstack-api/c-sharp/protobuf/
