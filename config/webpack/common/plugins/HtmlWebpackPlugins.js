import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import ScriptExtHtmlWebpackPlugin from 'script-ext-html-webpack-plugin'
import { paths } from '../paths'
import minifyOptions from '../../../minify'


export default [
  new HtmlWebpackPlugin({
    alwaysWriteToDisk: true,
    //favicon: path.resolve( paths.root, 'resources/favicon.ico' ),
    minify: minifyOptions,
    template: path.resolve( paths.client, 'templates/index.ejs' ),
    // HTMLWebpackPlugin has a bug where imported variables don't
    // pass through to EJS templates, so we hard-code the tile for now.
    title: 'There Will Come Soft Rains',
  }),

  new ScriptExtHtmlWebpackPlugin({
    defaultAttribute: 'async'
  }),
]
