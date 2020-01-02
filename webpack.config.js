const path = require("path");
const webpack = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: ["./src/index.jsx"],
  context: __dirname,
  target: "web",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "presentation-react-components.js",
    publicPath: "/dist/",
    library: "presentation-react-components",
    globalObject: "this",
    libraryTarget: "umd",
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  stats: "errors-only",
  devtool: "cheap-source-map",
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.DefinePlugin({
      VERSION: JSON.stringify(require("./package.json").version)
    }),
  ],
  externals: {
    "react": {
      commonjs: "react",
      commonjs2: "react",
      amd: "react",
      root: "react"
    }
  }
};
