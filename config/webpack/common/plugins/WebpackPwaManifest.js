import path from 'path'
import WebpackPwaManifest from 'webpack-pwa-manifest'
import { paths } from '../paths'
import dotenv from 'dotenv-safe'


dotenv.config()

const manifestIconDir = 'icons-manifest'


export default new WebpackPwaManifest({
  name: process.env.APP_NAME,
  short_name: process.env.APP_SHORTNAME,
  description: 'Entry for Ludum Dare 43',

  background_color: '#f2f2f2',
  crossorigin: 'use-credentials',
  theme_color: '#f2f2f2',

  icons: [
    {
      destination: manifestIconDir,
      src: path.resolve( paths.root, 'resources/pwa/icons/small.png' ),
      sizes: [ 24, 32 ] // multiple sizes
    },
    {
      destination: manifestIconDir,
      src: path.resolve( paths.root, 'resources/pwa/icons/medium.png' ),
      sizes: [ 48, 64, 96, 128, 192, 256, 384 ] // multiple sizes
    },
    {
      destination: manifestIconDir,
      src: path.resolve( paths.root, 'resources/pwa/icons/large.png' ),
      sizes: [ 512, 1024 ] // multiple sizes
    },
  ]
})
