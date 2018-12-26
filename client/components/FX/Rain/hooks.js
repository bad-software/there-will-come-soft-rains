import { oneLine } from 'common-tags'
import theme from 'Theme'
import style from './rain.scss'


function oncreate( v ) {
  // CONFIG
  const
    drops = 250,
    startHeight = -100,
    spawnDelay = 50 //ms
  // END CONFIG

  const
    // Get rain container
    body = v.dom,

    // Generate raindrops
    interval = window.setInterval(() => {
      const drop = document.createElement( 'div' )
      drop.style.top = String( startHeight )
      drop.style.left = Math.round( Math.random() * theme.gameWidth ) + 'px'
      body.appendChild( drop )
      drop.className = oneLine`
        ${ style.drop } 
        ${ style[`drop__${ Math.floor( Math.random() * 6 )}`]}
      `
    }, spawnDelay )

  // Stop generating rain after a while.
  window.setTimeout(() =>
    window.clearInterval( interval )
  , spawnDelay * drops )
}


export const hooks = {
  oncreate,
}
