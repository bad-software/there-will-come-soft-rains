// @flow strict
import type { Vnode } from 'Flow'

export type Component = {
  onbeforeupdate?: ( vnode: Vnode, old: Vnode ) => void,
  oncreate?: ( vnode: Vnode ) => void,
  oninit?: ( vnode: Vnode ) => void,
  onremove?: ( vnode: Vnode ) => void,
  onupdate?: ( vnode: Vnode ) => void,
  view: ( vnode: Vnode, attrs: {}) => void
}
