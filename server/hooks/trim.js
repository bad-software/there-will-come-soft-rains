import { callOnMultiple } from './common/call-on-multiple'


export function trim( fields ) {
  function trimString( data, field ) {
    data[ field ] = data[ field ].trim()
    return field
  }

  return async function( context ) {
    callOnMultiple( trimString, { data: context.data, fields })
    return context
  }
}
