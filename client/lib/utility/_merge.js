import union from 'arr-union'
import { clone, isObject } from './index'


export function merge( target, obj ) {
  for ( let key in obj ) {
    if ( !obj.hasOwnProperty( key )) {
      continue
    }

    const oldVal = obj[ key ]
    const newVal = target[ key ]

    if ( isObject( newVal ) && isObject( oldVal )) {
      target[key] = merge( newVal, oldVal )
    } else if ( Array.isArray( newVal )) {
      target[key] = union([], newVal, oldVal )
    } else {
      target[key] = clone( oldVal )
    }
  }
  return target
}