import webpack from 'webpack'
import { webpackConfig as commonConfig } from './common'


const BundleAnalyzerPlugin =
    require( 'webpack-bundle-analyzer' ).BundleAnalyzerPlugin

const webpackConfig = {
  ...commonConfig,
  devServer: {
    // Silence WebpackDevServer's own logs since they're generally not useful.
    // It will still show compile warnings and errors with this setting.
    clientLogLevel: 'none',
    compress: true,
    contentBase: 'public',
    historyApiFallback: {
      // Paths with dots should still use the history fallback.
      disableDotRule: true,
    },
    // Enable HMR
    hot: true,
    //https: true,
    inline: true,
    // Display overlay on page containing error
    overlay: true,
    port: 4001,

    // Trigger a page reload if `contentBase` is modified.
    watchContentBase: true,
  },
  devtool: 'cheap-module-eval-source-map',
}


webpackConfig.plugins.push( ...[
  new BundleAnalyzerPlugin({
    defaultSizes: 'gzip',
    openAnalyzer: false,
  }),

  new webpack.HotModuleReplacementPlugin(),
])

module.exports = webpackConfig
