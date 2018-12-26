// @flow strict
/**
 * Returns an svg by matching 'type' {String}
 * to a namespaced icon in iconList
 */
import { oneLine } from 'common-tags'
import { hooks } from './hooks'
import style from './icon.scss'


export function Icon() { return {
  ...hooks,
  icon: null,

  view({ attrs }) { return (
    // Await icon and process attributes
    this.icon && this.icon.default({
      ...attrs,
      class: oneLine`
        ${ attrs.noDefault ? '' : style.icon }
        ${ attrs.class || attrs.className || '' }
        `,
      // We don't want to keep both
      className: '',
      style: attrs.size
        ? `height: ${ attrs.size }; width: ${ attrs.size }`
        : ''
    })
  )}
}}


export { style as icon }
