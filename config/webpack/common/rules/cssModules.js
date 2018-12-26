import path from 'path'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import importOnce from 'node-sass-import-once'
import { devMode } from '../index'
import { paths } from '../paths'


/**
 * Component styles toolchain using SASS + CSS Modules.
 * When imported, the class names in each .scss file are appended with
 * a file-specific unique ID and returned as an object.
 * The css with the modified class names is either injected into the DOM
 * or extracted into css files using webpack's chunking algorithm.
 *
 * @type {{test: RegExp, include: *[], exclude: RegExp, use: *[]}}
 */
export const cssModules = {
  test: /\.scss$/,
  include: path.resolve( paths.client, 'components' ),
  exclude: /\.flow$/,
  use: [
    // HMR support
    'css-hot-loader',

    // Extract CSS to separate files
    devMode? 'styles-loader' : MiniCssExtractPlugin.loader,

    // Create .flow files alongside each source file
    // to enable completion and type-checking.
    {
      loader: 'css-modules-flow-types-loader',
      options: {
        extension: '.scss',
        strict: true,
        watch: devMode,
      }
    },

    // Load CSS
    {
      loader: 'css-loader' +
        '?modules' +
        '&sourceMap' +
        '&localIdentName=[name]__[local]___[hash:base64:5]'
    },

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
        // Allow stylesheets to be imported in component scss.
        importer: importOnce,
        importOnce: {
          //index: path.resolve( paths.src, 'stylesheets/index' ),
          index: true,
          css: false,
          bower: false
        },
        includePaths: [path.resolve( paths.client, 'stylesheets' )],
      },
    },
  ]
}
