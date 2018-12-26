export const toObject = ( obj, entry ) => {
  obj[ entry[ 0 ]] = entry[ 1 ]
  return obj
}

/**
 * Shuffles and returns a new array.
 * Hardly the pinnacle of performance, but it'll get the job done.
 * */
export function shuffle( arr ) {
  // Clone array
  const a = [ ...arr ]

  // Count down from array length
  for ( let i = a.length - 1; i > 0; i-- ) {
    // Get a random element
    const j = Math.floor( Math.random() * ( i + 1 ));
    // Switch em up with destructuring assignment
    [ a[ i ], a[ j ]] = [ a[ j ], a[ i ]]
  }

  return a
}
