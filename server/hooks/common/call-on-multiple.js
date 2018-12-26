
// Run validate hook on one object or an array of objects
export function callOnMultiple( func, { data, fields }) {
  if ( Array.isArray( fields ))
    fields.forEach( f => func( data, f ))
  else func( data, fields )
}
