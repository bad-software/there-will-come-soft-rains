import CleanWebpackPlugin from 'clean-webpack-plugin'
import { paths } from '../paths'


export default new CleanWebpackPlugin( paths.output, {
  allowExternal: true,
  root:     __dirname,
  verbose:  true,
})
