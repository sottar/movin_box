const webpack = require("webpack");

module.exports = [{
  entry: {
    app: './src/index.jsx',
  },
  output: {
    path: __dirname,
    filename: './index.js',
  },
  devServer: {
    port: 8010
  },
  module: {
    loaders: [
      { test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ["es2015", "react"],
          plugins: ["transform-flow-strip-types"]
        }
      },
      {
        test: /\.(js|jsx)$/,
        enforce: 'pre',
        use: [{loader: 'eslint-loader'}],
        exclude: /node_modules/,
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx'],
  },
}]
