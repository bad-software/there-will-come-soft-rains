import { paths } from '../paths'


export const babel = {
  test: /\.(js)$/,
  include: paths.client,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader',
    options: {
      cacheDirectory: true,
    },
  }
}
