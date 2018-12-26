import { merge } from './_merge'
import { clone, isObject } from './index'

export function mergeDeep( orig ) {
  // If orig isn't an object or an array, make it an empty object
  if ( !isObject( orig ) && !Array.isArray( orig )) {
    orig = {}
  }

  const target = clone( orig )
  // We will loop through the arguments
  const len = arguments.length

  // Keep track of the index
  let i = 0

  // Increment index to offset first argument
  while ( ++i < len ) {
    const value = arguments[ i ]

    if ( isObject( value ) || Array.isArray( value )) {
      merge( target, value )
    }
  }
  return target
}