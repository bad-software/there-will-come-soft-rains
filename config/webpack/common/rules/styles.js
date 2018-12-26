import path from 'path'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import importOnce from 'node-sass-import-once'
import { devMode } from '../index'
import { paths } from '../paths'


/**
 * Regular stylesheet toolchain.
 * Imported into client to ensure base styles are loaded.
 * @type {{test: RegExp, include: *, exclude: RegExp, use: *[]}}
 */
export const styles = {
  // Standard processing for Sass stylesheets
  test: /\.scss$/,
  include: path.resolve( paths.client, 'stylesheets' ),
  exclude: /\.flow$/,
  use: [
    // HMR support
    'css-hot-loader',

    // Extract CSS to separate files
    devMode ? 'style-loader' : MiniCssExtractPlugin.loader,

    // Load CSS
    'css-loader',

    // Post-Process CSS
    {
      loader: 'postcss-loader',
      options: {
        config: {
          path: path.resolve( paths.root, 'config' ),
        }
      }
    },

    // Load SCSS
    {
      loader: 'sass-loader',
      options: {
        // Flatten dependencies, preventing multiple copies of styles
        // imported by files in a dependency chain.
        importer: importOnce,
        importOnce: {
          index: true,
          css: false,
          bower: false
        },
      },
    },
  ]
}
