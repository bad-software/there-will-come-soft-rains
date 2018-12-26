export function applyStatChanges( stats ) {
  Object.entries( stats ).forEach(( stat ) => {
    // Increment or decrement based on value.
    if ( stat[ 1 ] > 0 )
      this.ctrl.incrementStat( stat[ 0 ], stat[ 1 ])
    else if ( stat[ 1 ] < 0 )
      this.ctrl.decrementStat( stat[ 0 ], stat[ 1 ])
  })
}

export function clearStats() {
  Object.keys( this.stats ).forEach( stat => this.stats[ stat ] =  0 )
}

export function initStats() {
  this.stats = { ...this.statDefaults[ this.region ]}
}

export function incrementStat( stat, amount = 0 ) {
  this.stats[ stat ]
    = Math.min( this.stats[ stat ]
    + Math.abs( amount )
    * this.statMultipliers[ this.region ][ stat ][ 0 ], 100 )
}

export function decrementStat( stat, amount = 0 ) {
  this.stats[ stat ]
    = Math.max( this.stats[ stat ]
    - Math.abs( amount )
    * this.statMultipliers[ this.region ][ stat ][ 1 ], 0 )
}

