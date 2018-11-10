const path = require("path")
const webpack = require("webpack")
const merge = require("webpack-merge")
const base = require("./base")

module.exports = merge.smart(base, {
  mode: "development",

  devtool: "eval",

  devServer: {
    contentBase: path.join(__dirname, "..", "..", "..", "dist"),
    historyApiFallback: true,
    hot: true
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),

    new webpack.EnvironmentPlugin({
      NODE_ENV: "development"
    })
  ]
})
