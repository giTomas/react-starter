const webpack = require("webpack");
const path = require("path");

const config = {
  // context: path
  entry: "./index.js",

  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath:"/",
    filename: "[name].bundle.js"
  },

  devServer: {
    // inline: true,
    // historyApiFallback: true,
    contentBase: "/",
    port: 8080
  },
  module: {
    rules: [
        {
          test: /\.jsx?$/,
          enforce: "pre",
          exclude: [/node_modules/],
          use: [{
            loader: "eslint-loader?parser=babel-eslint",
            options: {
              emitWarning: true,
              configfile: "./.eslintrc"
          }
          }]
        },
        {
          test:/\.jsx?$/,
          exclude: [/node_modules/],
          use: [{

            loader: "babel-loader",
            options: {
              cacheDirectory: true,
              presets: [["es2015", {"modules": false}], "react", "stage-0", "stage-1", "stage-3"],
              plugins: ["transform-decorators-legacy"]
              }
            }],
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"],
        },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".json"]
  },
  plugins: [
    new webpack.ProvidePlugin({
    Promise: "imports?this=>global!exports?global.Promise!es6-promise",
    fetch: "imports?this=>global!exports?global.fetch!whatwg-fetch",
  }),
  //   new webpack.DefinePlugin({
  //     "process.env.NODE_ENV": JSON.stringify("production")
  //   }),
  //   new webpack.optimize.UglifyJsPlugin({
  //     sourceMap: true
  //     compress: {
  //       warnings: false
  //     }
  //   })
  ]

};

module.exports = config;
