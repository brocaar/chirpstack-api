.PHONY: go swagger

all: go swagger

go:
	cd go && make

swagger:
	cd swagger && make
