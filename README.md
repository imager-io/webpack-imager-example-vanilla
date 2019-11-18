# About

This makes use of [Webpack](https://webpack.js.org) and [Imager](https://github.com/imager-io/imager) without any ‘non-standard’ Webpack plugins.

# Setup
```shell
$ npm install
```

# Run Webpack
```shell
$ npx webpack
```
Will save the optimized images to `./dist/public`.

Note that Webpack may emit warnings for “large” files. Annoyingly it’s only considering the ‘input’ file size, and not the ‘output’ or optimized file size.