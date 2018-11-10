const webpack = require("webpack")
const merge = require("webpack-merge")
const base = require("./base")

module.exports = merge.smart(base, {
  mode: "development",

  devtool: "eval",

  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: "development"
    })
  ]
})
