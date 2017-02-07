const webpack = require("webpack");
const path = require("path");

const DIST = path.resolve(__dirname, 'dist');

const config = {
  // context: path
  entry: path.resolve(__dirname, 'index.js'),

  output: {
    path: DIST,
    publicPath:"/",
    filename: "[name].bundle.js"
  },

  devServer: {
    // historyApiFallback: true,
    contentBase: DIST,
    port: 8080
  },
  devtool: "source-map",
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
              configfile: path.resolve(__dirname, ".eslintrc")
          }
          }]
        },
        {
          test:/\.jsx?$/,
          exclude: [/node_modules/],
          use: [{
            loader: "babel-loader",
            options: {
              // cacheDirectory: true,
              presets: [
                        ["es2015", {"modules": false}],
                        "react",
                        "stage-0",
                        "stage-1",
                        "stage-3"
                        ],
              plugins: ["transform-decorators-legacy"]
              }
            }],
        },
        {
          test: /\.css$/,
          use: [
                "style-loader",
                "css-loader"
               ],
        },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".json"],
    alias: {
      Helpers: path.resolve(__dirname, 'app/helpers/'),
      Styles: path.resolve(__dirname, 'app/styles/'),
    },
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
