// @jsx m
import m from 'mithril'
import { Game } from 'Models/Game'
import { Choice } from './components/Choice'
import { Header } from './components/Header'
import { Info } from './components/Info'
import { Menu } from './components/Menu'
//import { hooks } from './hooks'
import style from './play.scss'


export function Play() {
  return {
    //...hooks,

    onupdate() {
      Game.ctrl.applyHintFilter( Game.showHints )
    },

    view() {
      return (
        <div class={ style.body }>
          { Game.showMenu && <Menu/> }
          <Header/>
          <div class={ style.text }>
            { m.trust( Game.currentChoice.text )}
          </div>
          <Choice/>
          <Info/>
        </div>
      )
    }
  }
}
