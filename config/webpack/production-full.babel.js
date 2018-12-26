import path from 'path'
import CompressionPlugin from 'compression-webpack-plugin'
import { webpackConfig as commonConfig } from './common'
import { paths } from './common/paths'

const BundleAnalyzerPlugin =
        require( 'webpack-bundle-analyzer' ).BundleAnalyzerPlugin


const webpackConfig = {
  ...commonConfig,
  mode: 'development',
  optimization: {
    minimize: false,
  }
}


webpackConfig.plugins.push( ...[
  // Analyze bundles
  new BundleAnalyzerPlugin({
    analyzerMode: 'static',
    defaultSizes: 'gzip',
    generateStatsFile: true,
    openAnalyzer: false,
    reportFilename: path.resolve( paths.root, 'logs/webpack/report.html' ),
    statsOptions: { source: false },
    statsFilename: path.resolve( paths.root, 'logs/webpack/stats.json' ),
  }),

])

module.exports = webpackConfig
