import path from 'path'
import CompressionPlugin from 'compression-webpack-plugin'
import { webpackConfig as commonConfig } from './common'
import { paths } from './common/paths'

const BundleAnalyzerPlugin =
        require( 'webpack-bundle-analyzer' ).BundleAnalyzerPlugin


const webpackConfig = { ...commonConfig }


webpackConfig.plugins.push( ...[
  // Emit gzip-compressed bundles
  new CompressionPlugin({
    algorithm: 'gzip',
    cache: true,
    filename: '[path].gz[query]',
    test: /\.js$|\.css$|\.html$/,
    threshold: 4096,
    minRatio: 0.8
  }),

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
