const { exec } = require('child_process');
var path = require('path');

exec(
  `docker run -d -p 8080:8080 -v "${__dirname}"/envoy.yaml:/etc/envoy/envoy.yaml:ro envoyproxy/envoy:v1.15.0`,
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
