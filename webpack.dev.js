import { merge } from 'webpack-merge'
import common from './webpack.common.js'
import path from 'path'
import webpack from 'webpack'
import { VueLoaderPlugin } from 'vue-loader'
import HtmlWebpackPlugin from 'html-webpack-plugin'

export default merge(common, {
  mode: 'development',

  output: {
    publicPath: '/'
  },

  devtool: 'inline-source-map',

  devServer: {
    allowedHosts: 'all',
    client: {
      logging: 'info',
    },
    static: {
      directory: path.resolve('static'),
    },
    compress: true,
    port: 9000,
    // devMiddleware: {
    //   index: true,
    //   mimeTypes: { phtml: 'text/html' },
    //   publicPath: '/publicPathForDevServe',
    //   serverSideRender: true,
    //   writeToDisk: true,
    // }
  }
})
