const path = require("path");
const HtmlPlugin = require("html-webpack-plugin");
const ModuleFederation = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.bundle.js",
  },
  devServer: {
    port: 8082,
  },
  plugins: [
    new ModuleFederation({
      name: "cart",
      filename: "remoteEntry.js",
      exposes: {
        "./CartIndex": "./src/index",
      },
      shared: ["faker"],
    }),
    new HtmlPlugin({
      template: "./public/index.html",
    }),
  ],
};
