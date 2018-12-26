import path from 'path'
import { paths } from './paths'

// Keep in sync with .babelrc & .flowconfig
export function alias() { return {
  Audio:  path.resolve( paths.root, 'resources/files/audio' ),
  Client: path.resolve( paths.client, 'client' ),
  Components: path.resolve( paths.client, 'components' ),
  Data: path.resolve( paths.client, 'data' ),
  Flow: path.resolve( paths.root, 'flow' ),
  Lib: path.resolve( paths.client, 'lib' ),
  Models: path.resolve( paths.client, 'models' ),
  Styles: path.resolve( paths.client, 'stylesheets' ),
  Theme: path.resolve( paths.client, 'stylesheets/themeExport.scss' ),
  Router: path.resolve( paths.client, 'router' ),
}}
