const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const src = path.join(__dirname, 'src/client')
const build = path.join(__dirname, 'dist/client')

// Shared configs
const tsLoader = {
  test: /\.tsx?$/,
  loader: ['babel-loader']
}

// Client config
module.exports = {
  name: 'client',
  target: 'web',
  mode: 'development',
  devtool: 'cheap-module-inline-source-map',
  entry: path.join(src, 'index.tsx'),
  output: {
    path: build,
    filename: 'script.js'
  },
  module: {
    rules: [tsLoader]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(src, 'index.html'),
      inject: true
    })
  ],
  devServer: {
    hot: true,
    open: true,
    stats: 'errors-only'
  }
}
