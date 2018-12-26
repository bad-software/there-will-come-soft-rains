//const config = require( 'config' )
import { alias } from './alias'
import { rules } from './rules'
import { optimization } from './optimization'
import { paths } from './paths'
import { plugins } from './plugins'
import dotenv from 'dotenv-safe'


// Configure environment variables
dotenv.config()


export const
  devMode = process.env.NODE_ENV !== 'production'


export const webpackConfig = {
  context: paths.client,
  entry: {
    app: './index.js',
  },
  mode: devMode ? 'development' : 'production',
  optimization,
  output: {
    //chunkFilename: '[name].[chunkHash].js',
    filename: '[name].js',
    globalObject: 'this',
    path: paths.output,
    publicPath: '/',
  },
  module: {
    rules: rules(),
  },
  node: {
    fs: 'empty'
  },
  plugins: plugins(),
  resolve: {
    alias: alias(),
    extensions: [ '.js', '.scss' ],
    modules: [
      paths.client,
      'node_modules'
    ],
  },
}
