#!/usr/bin/env bash

OUT_DIR="."
TS_OUT_DIR="."
IN_DIR="./proto"
PROTOC="$(npm bin)/grpc_tools_node_protoc"
PROTOC_GEN_TS_PATH="$(npm bin)/protoc-gen-ts"
PROTOC_GEN_GRPC_PATH="$(npm bin)/grpc_tools_node_protoc_plugin"
PROTOC_GEN_GRPC_WEB_PATH="$(npm bin)/protoc-gen-grpc-web"

# generate grpc-web files & types
$PROTOC \
    -I="./" \
    --plugin=protoc-gen-grpc-web=${PROTOC_GEN_GRPC_WEB_PATH} \
    --js_out=import_style=commonjs:$OUT_DIR \
    --grpc-web_out=import_style=commonjs+dts,mode=grpcwebtext:$OUT_DIR \
    "$IN_DIR"/*.proto

# generate grpc-js files & types
$PROTOC \
    -I="./" \
    --plugin=protoc-gen-ts=$PROTOC_GEN_TS_PATH \
    --plugin=protoc-gen-grpc=${PROTOC_GEN_GRPC_PATH} \
    --js_out=import_style=commonjs:$OUT_DIR \
    --ts_out=service=grpc-node,mode=grpc-js:$TS_OUT_DIR \
    --grpc_out=grpc_js:$OUT_DIR \
    "$IN_DIR"/*.proto
