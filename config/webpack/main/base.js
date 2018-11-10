const path = require("path")
const webpack = require("webpack")
const CleanWebpackPlugin = require("clean-webpack-plugin")

module.exports = {
  target: "electron-main",

  entry: path.join(__dirname, "..", "..", "..", "src", "main.js"),

  output: {
    path: path.join(__dirname, "..", "..", "..", "dist"),
    filename: "main.js"
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader"
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: "url-loader"
      }
    ]
  },

  resolve: {
    alias: {
      "@": path.join(__dirname, "..", "..", "..", "src")
    }
  },

  plugins: [
    new CleanWebpackPlugin(["dist"], {
      root: path.join(__dirname, "..", "..", "..")
    }),

    new webpack.NamedModulesPlugin()
  ],

  node: {
    __dirname: false,
    __filename: false
  }
}
