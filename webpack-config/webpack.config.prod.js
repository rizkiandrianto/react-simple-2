var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './app/main.js',
  output: {
    path: require('path').resolve('./dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin('style.css',{allChunks: true}),
    new webpack.DefinePlugin({
      'process.env':{
        NODE_ENV: JSON.stringify('production') //to prevent warning on dev tools
      }
    })
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['react', 'es2015']
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
    'config': JSON.stringify(require('../env/env.prod.json'))
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.css'],
    modulesDirectories: ['node_modules', 'app', 'dist/assets']
  },
}
