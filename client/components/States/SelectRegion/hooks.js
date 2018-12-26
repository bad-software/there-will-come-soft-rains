import m from 'mithril'
import { Game } from 'Models/Game'

function clear( v ) {
  v.state.selectedRegion = null
  m.redraw()
}

function confirm( v ) {
  Game.region = v.state.selectedRegion
  Game.ctrl.start()
}

function select( v, region ) {
  v.state.selectedRegion = region
  m.redraw()
}

export const hooks = {
  clear,
  confirm,
  select,
}
