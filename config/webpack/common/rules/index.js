import { babel } from './babel'
import { cssModules } from './cssModules'
import { files } from './files'
import { styles } from './styles'


export function rules() {
  return [
    // JS
    babel,

    // CSS
    cssModules,
    styles,

    // Resources
    files,
  ]
}
