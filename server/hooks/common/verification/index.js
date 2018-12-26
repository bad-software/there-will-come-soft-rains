import { callOnMultiple } from '../call-on-multiple'


const notEmpty = /\S/

export function isNonEmpty( fields, errorMessage ) {
  function validate( data, field ) {
    if ( !notEmpty.test( data[ field ]))
      throw new Error( errorMessage || `Field "${ field }" is empty.` )
  }

  return async function( context ) {
    callOnMultiple( validate, { data: context.data, fields })
    return context
  }
}


export function isString( fields, errorMessage ) {
  function validate( data, field ) {
    if ( typeof data[ field ] !== 'string' )
      throw new Error( errorMessage || `Field "${ field }" is not a string.` )
  }

  return async function( context ) {
    callOnMultiple( validate, { data: context.data, fields })
    return context
  }
}

