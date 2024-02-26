import { merge } from 'webpack-merge'
import common from './webpack.common.js'
import path from 'path'
import webpack from 'webpack'
import { VueLoaderPlugin } from 'vue-loader'
import HtmlWebpackPlugin from 'html-webpack-plugin'

export default merge(common, {
  mode: 'production'
})
