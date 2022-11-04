# How to use gRPC with C#

There are two ways to use the proto files

## Create gRPC Client with proto files
The standard practice in C# is to build the proto files each time you build your application. All you need is the proto files.

Assuming you are in the root of this repository:

```commandline
dotnet new console -o GrpcChirpstackClient
cp -r protobuf GrpcChirpstackClient/protobuf/
cd GrpcChirpstackClient
dotnet add package Grpc.Net.Client
dotnet add package Google.Protobuf
dotnet add package Grpc.Tools
```
To make this work we also need some google api proto references:
<details>
<summary>Unix/Linux</summary>

```commandline
git clone --depth=1 --branch=master https://github.com/googleapis/googleapis.git googleapis
mkdir -p protobuf/google/api
cp -r googleapis/google/api/*.proto protobuf/google/api/
rm -rf googleapis
```
</details>

<details>
<summary>Windows (PowerShell)</summary>

```commandline
git clone --depth=1 --branch=master https://github.com/googleapis/googleapis.git googleapis
mkdir protobuf\google\api
copy -r googleapis\google\api\*.proto protobuf\google\api\
rm -r -force googleapis
```
</details>

Then edit your `GrpcChirpstackClient.csproj` and add an `<Protbuf>` item group within the `<Project>` element
<details>
<summary>GrpcChirpstackClient.csproj</summary>

```xml
<Project Sdk="Microsoft.NET.Sdk">
    <!-- [...] -->
    <ItemGroup>
        <Protobuf Include="protobuf/**/*.proto" ProtoRoot="protobuf/"/>
    </ItemGroup>
</Project>
```
</details>

[Now continue on "For both ways"](#for-both-ways)

## Use pre generate files
Use the pre generated .cs files you'll find in `csharp/protobuf`.
An example (assuming you are in the root of this repository)
```
cd csharp
dotnet new console -o GrpcChirpstackClient
cp -r protobuf GrpcChirpstackClient/ChirpstackApi/
cd GrpcChirpstackClient
dotnet add package Grpc.Net.Client
dotnet add package Google.Protobuf
```
[Now continue on "For both ways"](#for-both-ways)


## For both ways

Edit the `Program.cs` file (don't forget to change the `chirpstackApiUrl` and the `chirpstackJwt`!)
<details>
<summary> Program.cs </summary>

```csharp
using System.Net.Http.Headers;
using Grpc.Net.Client;
using Chirpstack.ApplicationServer.External.Api;


// The port number must match the port of the Chirpstack gRPC server.
const string chirpstackApiUrl = "http://localhost:8080";
//In order to use the gRPC API methods, you must provide per-RPC credentials.
//Add the API TOKEN obtained using the web-interface here:
const string chirpstackJwt = "ey......";


//Creates http client for authentication
var httpClient = new HttpClient();
httpClient.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("bearer", chirpstackJwt);
var channelOptions = new GrpcChannelOptions { HttpClient = httpClient };
//Creates GrpcChannel and Client
using var channel = GrpcChannel.ForAddress(chirpstackApiUrl, channelOptions);
var client = new OrganizationService.OrganizationServiceClient(channel);

//List all organizations...

var reply = await client.ListAsync(new ListOrganizationRequest { Limit = 10 });
//... and print them
Console.WriteLine($"Found {reply.TotalCount} organizations:");
foreach (var org in reply.Result)
{
	Console.WriteLine($"\t'{org.Name}' with Id {org.Id}");
}

Console.WriteLine("Press any key to exit...");
Console.ReadKey();
```
</details>

When done just run the executable:
```commandline
dotnet run
```
You should see something like this if everything worked:
```commandline
Found 1 organizations:
        'chirpstack' with Id 1
Press any key to exit...
```

