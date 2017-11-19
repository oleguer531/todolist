module.exports = {
    entry: "./src/index.js",
    output: {
      filename: "bundle.js"
    },
    watch: false,
    module: {
        rules: [
          { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}
        ]
      }
  }