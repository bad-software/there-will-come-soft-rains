// @flow strict
import { toObject } from 'Lib/array'
import type { FunctionMap } from 'Flow'


/** Bind each function property of an object to a new context. */
export function bindProps( context: *, obj: FunctionMap ) {
  // Get entries, map each key/value pair to a new key/value pair
  // that's bound to the context.
  // Reduce back to an object.

  return Object.entries( obj )
    .map( entry => { return typeof entry[ 1 ] === 'function' ? [
      /* $FlowFixMe map */
      entry[ 0 ], entry[ 1 ].bind( context )
      /* $FlowFixMe entries */
    ] : entry }).reduce( toObject, {})
}
