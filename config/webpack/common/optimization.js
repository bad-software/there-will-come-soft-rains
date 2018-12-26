
const devMode = process.env.NODE_ENV !== 'production'


export const optimization = {
  minimize: !devMode,
  // Split Chunks Plugin
  // https://webpack.js.org/plugins/split-chunks-plugin/
  splitChunks: devMode ? {} : {
    cacheGroups: {
      styles: {
        name: 'styles',
        test: /\.css$/,
        chunks: 'all',
        enforce: true
      },
    },
    //chunks: 'all',
    name: devMode,
  },
}
