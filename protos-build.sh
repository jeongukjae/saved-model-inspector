#!/bin/bash

set -ex

rm -r src/protos
for pbfile in `find ./protos -name "*.proto"`; do
    protoc -I protos --js_out=import_style=commonjs,binary:./src/proto $pbfile
done
