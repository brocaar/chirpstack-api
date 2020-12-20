ChirpStack gRPC Interface for Ruby
==================================

gRPC code generated from [chirpstack-api](https://github.com/brocaar/chirpstack-api)
protobuf definitions.

## Installation

Add the following to your Gemfile:

```ruby
gem "chirpstack_api", git: "https://github.com/brocaar/chirpstack-api", glob: 'ruby/*.gemspec'
```

Then `bundle install`.

## Example

Create a network server device profile object:

```ruby
require 'chirpstack_api'

ChirpStackAPI::NS::DeviceProfile.new(
  id: "default",
  mac_version: "1.0.2",
  reg_params_revision: "B",
  supports_32bit_f_cnt: true,
  max_eirp: 14,
  max_duty_cycle: 100,
  supports_join: true,
  rf_region: "EU868"
)
```

