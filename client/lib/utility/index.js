// @flow strict
import m from 'mithril'
import { mergeDeep } from './_mergeDeep'


export function clampValue( value, min, max ) {
  return Math.min( max, Math.max( min, value ))
}

export function clone( literal ) {
  // Deep clones object literals but not prototypes
  return JSON.parse( JSON.stringify( literal ))
}

export function isObject( item ) {
  return ( item && typeof item === 'object' && !Array.isArray( item ))
}

export function timeout( ms ) {
  return new Promise( resolve => setTimeout( resolve, ms ))
}

export function updateHistory( state, replace = false ) {
  // Deep merge history.state with new state
  m.route.set(
    m.route.get(),
    null,
    { // Merge mutates the first object, so pass an empty object
      state: mergeDeep({},
        window.history.state || {},
        state || {}
      ),
      replace: replace,
    }
  )
}

/** Map each property in an object to a new property */
export function mapObject( o, func ) {
  return Object.assign(
    ...Object
      .entries( o )
      .map(([ key, val ]) =>
        ({[ key ]: func( val )})
      )
  )
}


export { mergeDeep }
export { debounce } from './_debounce'
export { merge } from './_merge'
export { throttle } from './_throttle'
