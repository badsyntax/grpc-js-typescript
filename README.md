# grpc-js types

An example repo showing how to generate grpc typescript definitions for use with @grpc/grpc-js.

It's a bit hacky due to the replacement of the imports.

## Generating the types

First, install the npm deps:

```sh
npm install
```

Now chose how you want to generate the types:

- Shell script: `./generate_types.sh`
- Gradle: `./gradlew generateProto`

Both approaches will generate the same types.
