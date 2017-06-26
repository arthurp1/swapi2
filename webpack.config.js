var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'inline-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './client/client.js'
  ],
  output: {
    path: require("path").resolve("./dist"), //gives it an absolute path
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(), //makes more efficient use when reusing modules
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),//Deprecated???
    new ExtractTextPlugin("styles.css")
   ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['react', 'es2015', 'react-hmre']
        }
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract("'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]')",
                include: __dirname + '/client')
      }
    ]
  }
}

// var path = require('path');
// var HtmlWebpackPlugin = require('html-webpack-plugin');
//
// module.exports = {
//   entry: './client/client.js',
//   output: {
//     path: path.resolve(__dirname, 'dist'),
//     filename: 'bundle.js'
//   },
//   module: {
//     rules: [
//       { test: /\.(js)$/, use: 'babel-loader' },
//       { test: /\.css$/, use: [ 'style-loader', 'css-loader'] }
//     ]
//   },
//   plugins: [new HtmlWebpackPlugin({
//     template: 'client/index.html'
//   })]
// }
