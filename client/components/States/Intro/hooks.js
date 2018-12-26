import { Game } from 'Models/Game'


export async function oncreate() {
  // Load game
  Game.ctrl.load()

  // Add global key listener
  window.addEventListener( 'keydown', this.play )
}

export function onremove() {
  // Remove global key listener
  window.removeEventListener( 'keydown', this.play )
}

export function play() {
  Game.ctrl.goTo( Game.states.Title )
}

export const hooks = {
  oncreate,
  onremove,
  play,
}
