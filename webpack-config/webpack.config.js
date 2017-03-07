var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'inline-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './app/main.js'
  ],
  output: {
    path: __dirname + 'dist',
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin('style.css',{allChunks: true})
  ],
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
      },
    ],
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['react', 'es2015', 'react-hmre']
        }
      },
      {test: /\.css$/,loader:"style-loader!css-loader"},
      {test: /\.(eot|woff|woff2|svg|ttf|png|jpg|jpeg|json)([\?]?.*)$/, loader: "file-loader" },
      {test: /\.(scss)$/,loaders: ["style", "css", "sass"]}
    ]
  },
  sassLoader: {
    outputStyle : "compressed"
  },
  externals: {
    'config': JSON.stringify(require('../env/env.json'))
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.css'],
    modulesDirectories: ['node_modules', 'app', 'dist/assets']
  },
  eslint: {
    configFile: './.eslintrc'
  },
}
