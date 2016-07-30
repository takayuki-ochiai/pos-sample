/**
 * Require Browsersync along with webpack and middleware for it
 */

 // baseDir: サーバーのベースとなるディレクトリ。
 // middleware: 使用するミドルウェア。devMiddlewareではpublicPathの指定が必須となります。
 // files: Browsersync が変更を監視するファイル群。変更がなされると、ページ全体をリロードします。js ファイル群の監視は webpack に任せるので、ここに記述する必要はありません。

const browserSync = require('browser-sync');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackConfig = require('./webpack.config');
const bundler = webpack(webpackConfig);

browserSync({
  server: {
    baseDir: './redux-cordova-sqlite-flow-integrate/www',
    middleware: [
      webpackDevMiddleware(bundler, {
        publicPath: webpackConfig.output.publicPath,
        stats: { colors: true },
        // http://webpack.github.io/docs/webpack-dev-middleware.html
      }),
      webpackHotMiddleware(bundler),
    ],
  },

  files: [
    './redux-cordova-sqlite-flow-integrate/www/stylesheet/*.css',
    './redux-cordova-sqlite-flow-integrate/www/index.html',
  ],
});
