const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: { server: "./apps/fosdem-2019/server.ts" },
  resolve: { extensions: [".js", ".ts", ".json"] },
  target: "node",
  mode: "none",
  // this makes sure we include node_modules and other 3rd party libraries
  output: {
    path: path.join(__dirname, "..", "..", "dist", "apps", "fosdem-2019"),
    filename: "[name].js"
  },
  module: {
    rules: [{ test: /\.ts$/, exclude: /\.spec.ts$/, loader: "ts-loader" }]
  },
  plugins: [
    // Temporary Fix for issue: https://github.com/angular/angular/issues/11580
    // for "WARNING Critical dependency: the request of a dependency is an expression"
    new webpack.ContextReplacementPlugin(
      /(.+)?angular(\\|\/)core(.+)?/,
      path.join(__dirname, "apps", "fosdem-2019"), // location of your src
      {} // a map of your routes
    ),
    new webpack.ContextReplacementPlugin(/(.+)?express(\\|\/)(.+)?/, path.join(__dirname, "apps", "fosdem-2019"), {})
  ]
};
