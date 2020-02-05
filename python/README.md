# chirpstack-api

ChirpStack gRPC API message and service wrappers for Python.

## Install

```sh
pip install chirpstack-api
```

## Usage

All messages, services, constants, etc. are auto-generated from the ChirpStack protobuf definitions. The result is that
this package structure matches that of the protobuf definitions.

The protobuf definitions can be found here: https://github.com/brocaar/chirpstack-api/tree/master/protobuf

The following example presents how the library can be used.

### Example

This example shows how to log in to ChirpStack via the gRPC API and then create a gRPC metadata list containing the
JWT. This metadata could then be passed to any future requests that require authorization.

```python
import grpc
import os
import sys
from chirpstack_api.as_pb.external import api

if __name__ == '__main__':
  # Create the client for the "internal" service    
  channel = grpc.insecure_channel('localhost:8080')
  stub = api.InternalServiceStub(channel)

  # Create and build the login request message
  loginRequest = api.LoginRequest()
  loginRequest.password = 'admin'
  loginRequest.username = 'admin'

  # Send the login request
  token = stub.Login(loginRequest)

  # Build the metadata list, settting the authorization from the JWT
  # obtained from loggin in.
  metadata= [('authorization', token.jwt)]

  # This metadata can now be passed for requests to APIs that require
  # authorization

```
