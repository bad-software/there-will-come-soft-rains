import m from 'mithril'
import { Default } from 'Components/Layouts/Default'

const { find } = Array.prototype

export function applyLayout( v ) { return m( Default, v )}

/**
 * Return active element from a list of elements.
 * If there are none, return undefined.
 */
export const getActiveElement = list => {
  return find.call(
    list,
    ( element ) => element === document.activeElement
  )
}

export function scrollToBottom() {
  const vnode = this

  if ( vnode.dom )
    vnode.dom.scrollTop = vnode.dom.scrollHeight
}


