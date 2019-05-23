import m from 'mithril'
import { stopAudio, waitForBuffers } from 'Lib/audio'
import theme from 'Theme'

export * from './choices'
export * from './stats'


export function applyHintFilter( show = false ) {
  // Get hints
  const hints = document.querySelectorAll( '.hint' )

  if ( show ) {
    // Reset hint color to regular value.
    hints.forEach( hint => {
      hint.style.color = null
    })
  } else {
    // Override hint color with default text color.
    hints.forEach( hint => {
      hint.style.color = `${ theme.text }`
    })
  }
}

export function checkIfGameOver() {
  if ( // Lose
    // Economy tanks
    this.stats.economy <= 0
    // Industry tanks
    || this.stats.industry <= 0
    // Stability tanks
    || this.stats.stability <= 0
  )
    this.ctrl.end( false )
  else if ( this.stats.progress >= 100 ) // Win
    this.ctrl.end( true )
}

export function end( won = false ) {
  if ( won )
    this.hasWon = true

  this.ctrl.goTo( this.states.GameOver )
}

export function goTo( state ) {
  this.state = state
  m.redraw()
}

export async function load() {
  // Wait for audio to download.
  await waitForBuffers()

  // Game is ready.
  this.ready = true
  m.redraw()
}

export function restart() {
  stopAudio()

  this.choiceIndex = 0
  this.choices = []
  this.hasWon = false
  this.showMenu = false
  this.ctrl.clearStats()
  this.ctrl.goTo( this.states.Title )
}

export function reviewGame() {
  window.open(
    'https://ldjam.com/events/ludum-dare/43/there-will-come-soft-rains'
  )
}

export function start() {
  this.ctrl.initStats()
  this.ctrl.initChoices()
  this.ctrl.goTo( this.states.Play )
  this.music.nature.play()
}

export function toggleHints() {
  // Toggle
  this.showHints = !this.showHints

  // Apply filter
  this.ctrl.applyHintFilter( this.showHints )
}

export function toggleMenu() {
  this.showMenu = !this.showMenu
}
