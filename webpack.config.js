// React Hot Loader
const webpack = require('webpack');
const path = require('path');
// const CompressionPlugin = require("compression-webpack-plugin");
const cssLoader = 'style!css-loader?modules&importLoaders=1&'
  + 'localIdentName=[name]__[local]___[hash:base64:5]';

module.exports = {
  debug: true,
  devtool: '#eval-source-map',
  resolve: {
    // import/requireをするときに拡張子を省略できるようにする
    extensions: ['', '.js', '.jsx'],
  },
  entry: [
    'webpack/hot/dev-server',
    'webpack-hot-middleware/client',
    './redux-cordova-sqlite-flow-integrate/www/react/main.jsx',
    './redux-cordova-sqlite-flow-integrate/www/stylesheet/reset.css',
    './redux-cordova-sqlite-flow-integrate/www/stylesheet/colors.css',
  ],
  output: {
    path: path.join(__dirname, './redux-cordova-sqlite-flow-integrate/www/dist'),
    publicPath: '/',
    filename: 'bundle.js',
  },

  plugins: [
    // Webpack 1.0
    new webpack.optimize.OccurenceOrderPlugin(),
    // Webpack 2.0 fixed this mispelling
    // new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    // Minify用
    // new webpack.optimize.UglifyJsPlugin(),
    // new CompressionPlugin({
    //   asset: '[path].gz[query]',
    //   algorithm: 'gzip',
    //   test: /\.js$/,
    //   threshold: 10240,
    //   minRatio: 0.8,
    // }),
  ],

  module: {
    loaders: [
      {
        test: /\.(jsx|js)?$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel?presets[]=react,presets[]=es2015'],
      },
      {
        test: /\.css$/,
        loader: cssLoader,
      },
    ],
  },
};
