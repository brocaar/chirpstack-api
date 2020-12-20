module ChirpStackAPI

  $LOAD_PATH.unshift File.expand_path("#{File.dirname(__FILE__)}/protobuf")

  Dir["#{File.dirname(__FILE__)}/protobuf/**/*_pb.rb"].each { |f| require f }

  $LOAD_PATH.shift

end
