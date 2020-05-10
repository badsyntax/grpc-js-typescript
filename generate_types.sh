#!/usr/bin/env bash

OUT_DIR="./out"
TS_OUT_DIR="./src"
IN_DIR="./proto"
PROTOC="$(npm bin)/grpc_tools_node_protoc"
PROTOC_GEN_TS="$(npm bin)/protoc-gen-ts"
FOO="$(npm bin)/grpc_tools_node_protoc_plugin"

mkdir -p "$OUT_DIR"
mkdir -p "$TS_OUT_DIR"

$PROTOC \
    -I="./" \
    --plugin=protoc-gen-ts=$PROTOC_GEN_TS \
    --js_out=import_style=commonjs:$OUT_DIR \
    --grpc_out=$FOO:$OUT_DIR \
    --ts_out=service=grpc-node:$TS_OUT_DIR \
    "$IN_DIR"/*.proto

sed -i "" -e \
    "s/require('grpc')/require('@grpc\/grpc-js')/g" \
    "$OUT_DIR/$IN_DIR/"*

sed -i "" -e \
    "s/from \"grpc\"/from \"@grpc\/grpc-js\"/g" \
    "$TS_OUT_DIR/$IN_DIR/"*
