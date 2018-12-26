import { mapObject, timeout } from 'Lib/utility'


const soundFiles = {
  coin: require( 'Audio/sounds/coin.wav' ),
  select: require( 'Audio/sounds/select.wav' ),
  toggleFalse: require( 'Audio/sounds/toggle-false.wav' ),
  toggleTrue: require( 'Audio/sounds/toggle-true.wav' ),
}

const musicFiles = {
  main: require( 'Audio/music/main-2.mp3' ),
  nature: require(
    'Audio/music/269570__vonora__cuckoo-the-nightingale-duet.mp3'
  ),
  rain: require( 'Audio/music/burza.mp3' )
}

export const sounds = mapObject( soundFiles, s => sound( s ))
export const music = mapObject( musicFiles, s => sound( s ))


// Mix it up!
mix()


/**
 Be careful using this willy nilly, as I don't think
 audio elements are removed from the DOM when the reference disappears.
 It's best just to use it once with the sounds function below and then
 just reference sounds from there.
*/
function sound( src ) {
  const s = {}
  s.sound = document.createElement( 'audio' )
  // Sigh... this is so dirty.
  //s.sound.src = `https://bl.ocks.org/bad-software/raw/3796f32ec43802b2184d35d4dcf434b7${ src }`
  s.sound.src = src
  s.sound.setAttribute( 'preload', 'auto' )
  s.sound.setAttribute( 'controls', 'none' )

  if ( String( src ).includes( '.mp3' ))
    s.sound.setAttribute( 'loop', '' )

  s.sound.style.display = 'none'

  // CONFIG
  // Lower volume
  s.sound.volume = 1
  // END CONFIG

  document.body.appendChild( s.sound )

  s.play = function(){
    s.sound.play()
  }

  s.stop = function(){
    s.sound.pause()
  }

  return s
}

function mix() {
  music.main.sound.volume = 0.3
  music.rain.sound.volume = 0.45
  music.nature.sound.volume = 0.2

  sounds.coin.sound.volume = 0.5
  sounds.select.sound.volume = 0.15
  sounds.toggleFalse.sound.volume = 0.2
  sounds.toggleTrue.sound.volume = 0.2
}

export function checkBuffers() {
  // Accumulate sounds into one array,
  // then reduce it checking each buffer value
  return [
    ...Object.values( music ),
    ...Object.values( sounds )
  ].reduce(( a, v ) => v.sound.buffered.length > 0 ? 1 : a, 0 )
}

export async function waitForBuffers() {
  while ( !checkBuffers()) {
    //console.log( checkBuffers())
    await timeout( 100 )
  }
}

export function stopAudio() {
  [
    ...Object.values( music ),
    ...Object.values( sounds )
  ].forEach( s => s.stop())

  return true
}
