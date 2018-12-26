// @jsx m
import m from 'mithril'
import { Rain } from 'Components/FX/Rain'
import { Game } from 'Models/Game'
//import { hooks } from './hooks'
import style from './menu.scss'
import { Logo } from 'Components/Logo'


export function Menu() {
  return {
    //...hooks,

    view() {
      return (
        <div class={ style.body }>
          <div class={ style.title }>
            There Will Come Soft Rains
          </div>
          <button
            class={ style.btn }
            onclick={ Game.ctrl.toggleMenu }
          >
            Resume
          </button>

          <button
            class={ style.btn }
            onclick={ Game.ctrl.restart }
          >
            Main Menu
          </button>

          <Rain/>
        </div>
      )
    }
  }
}
