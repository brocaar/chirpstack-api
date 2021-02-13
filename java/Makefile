.PHONY: requirements package

all: requirements version package

requirements:
	rm -rf build
	mkdir -p build/googleapis-proto
	cp pom.xml build/
	cp -r /googleapis/google/api/*.proto build/googleapis-proto/
	mvn -f build/pom.xml clean validate

version:
    ifdef VERSION
	    sed -i 's/<version>1.0-SNAPSHOT<\/version>/<version>$(VERSION)<\/version>/g' build/pom.xml
    endif

install: version
	mvn -f build/pom.xml install

package: version
	#TODO: maven publish
	mvn -f build/pom.xml package

publish: version
	#TODO: maven publish to maven central
