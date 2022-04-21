const { exec } = require('child_process');
const { execFile } = require('child_process');
var path = require('path');

let outDir = path.resolve('.');
let cwd = path.resolve('.');
let tsOutDir = path.resolve('.');
let inDir = path.resolve('./proto');
let protoc = path.resolve('./node_modules/grpc-tools/bin/protoc.exe');
let protocGenTsPath = path.resolve('./node_modules/.bin/protoc-gen-ts.cmd');
let protocGenGrpcPath = path.resolve(
  './node_modules/.bin/grpc_tools_node_protoc_plugin.cmd'
);
let protocGenTsGrpcWebPath = path.resolve(
  './node_modules/.bin/protoc-gen-grpc-web.cmd'
);

execFile(
  protoc,
  [
    `-I=${cwd}`,
    `--plugin=protoc-gen-grpc-web=${protocGenTsGrpcWebPath}`,
    `--js_out=import_style=commonjs:${outDir}`,
    `--grpc-web_out=import_style=commonjs+dts,mode=grpcwebtext:${outDir}`,
    `${inDir}/*.proto`,
  ],
  (error, stdout, stderr) => {
    if (error) {
      console.log(`error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.log(`stderr: ${stderr}`);
      return;
    }
    if (stdout) {
      console.log(`stdout: ${stdout}`);
      return;
    }
  }
);

execFile(
    protoc,
    [
      `-I=${cwd}`,
      `--plugin=protoc-gen-ts=${protocGenTsPath}`,
      `--plugin=protoc-gen-grpc=${protocGenGrpcPath}`,
      `--js_out=import_style=commonjs:${outDir}`,
      `--ts_out=service=grpc-node,mode=grpc-js:${tsOutDir}`,
      `--grpc_out=grpc_js:${outDir}`,
      `${inDir}/*.proto`,
    ],
    (error, stdout, stderr) => {
      if (error) {
        console.log(`error: ${error.message}`);
        return;
      }
      if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
      }
      if (stdout) {
        console.log(`stdout: ${stdout}`);
        return;
      }
    }
  );