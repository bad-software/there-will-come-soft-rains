// @jsx m
import m from 'mithril'
import { Game } from 'Models/Game'
//import { hooks } from './hooks'
import style from './header.scss'
import { Icon } from 'Components/Icon'


export function Header() {
  return {
    //...hooks,

    view() {
      return (
        <div class={ style.body }>
          <div class={ style.item }>
            { Object.keys( Game.regions )[ Game.region ]}
          </div>

          <div class={ `${ style.item } ${ style.temperature }` }>
            +{ Game.temperature } °C
          </div>

          <div
            class={ `${ style.item } ${ style.menu }` }
            onclick={ Game.ctrl.toggleMenu }
          >
            <Icon name="action.settings" class={ style.menu_icon } noDefault/>
          </div>
        </div>
      )
    }
  }
}
