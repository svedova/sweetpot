const webpack = require("webpack");
const path = require("path");
const dotenv = require("dotenv").config();

module.exports = {
  entry: "./api/index.ts",
  mode: "production",
  target: "node",
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: "ts-loader",
        options: {
          compilerOptions: {
            noEmit: false,
          },
        },
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "api"),
    library: {
      name: "api",
      type: "commonjs",
    },
  },
  plugins: [
    new webpack.DefinePlugin(
      Object.keys(dotenv.parsed || {}).reduce((obj, key) => {
        obj[`process.env.${key}`] = JSON.stringify(dotenv.parsed[key]);
        return obj;
      }, {})
    ),
  ],
};
