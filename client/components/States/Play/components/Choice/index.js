// @jsx m
import m from 'mithril'
//import { hooks } from './hooks'
import style from './choice.scss'
import { Game } from 'Models/Game'


export function Choice() {
  return {
    //...hooks,

    view() {
      return (
        <div class={ style.body }>
          <div
            class={ style.section }
            onclick={() => Game.ctrl.applyChoice( 0 )}
          >
            <div>{ m.trust( Game.currentChoice.A.text )}</div>
          </div>
          <div
            class={ style.section }
            onclick={() => Game.ctrl.applyChoice( 1 )}
          >
            <div>{ m.trust( Game.currentChoice.B.text )}</div>
          </div>
        </div>
      )
    }
  }
}
