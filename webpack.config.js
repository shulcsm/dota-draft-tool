var path = require('path')
var webpack = require('webpack')
var publicPath = 'http://localhost:4001/'

var env = process.env.MIX_ENV || 'dev'
var prod = env === 'prod'

var entry = './web/static/js/index.js'
var hot = 'webpack-hot-middleware/client?path=' +
  publicPath + '__webpack_hmr'

var plugins = [
  new webpack.optimize.OccurrenceOrderPlugin(),
  new webpack.NoErrorsPlugin(),
  new webpack.DefinePlugin({
    __PROD: prod,
    __DEV: env === 'dev'
  })
]

if (env === 'dev') {
  plugins.push(new webpack.HotModuleReplacementPlugin())
}

module.exports = {
  devtool: prod ? null : 'cheap-module-eval-source-map',
  entry: prod ? entry : [hot, entry],
  output: {
    path: path.resolve(__dirname) + '/priv/static/js',
    filename: 'index.bundle.js',
    publicPath: publicPath
  },
  plugins: plugins,
  module: {
    loaders: [
      {
	test: /\.jsx?$/,
	loaders: ['babel'],
	exclude: path.resolve(__dirname, 'node_modules')
      }, {
	test: /\.scss$/,
	loaders: ["style", "css", "sass"]
      }, {
	test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
	loader: "url?limit=10000&mimetype=application/font-woff"
      }, {
	test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
	loader: "url?limit=10000&mimetype=application/font-woff"
      }, {
	test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
	loader: "url?limit=10000&mimetype=application/octet-stream"
      }, {
	test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
	loader: "file"
      }, {
	test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
	loader: "url?limit=10000&mimetype=image/svg+xml"
      }
    ]
  }
}
