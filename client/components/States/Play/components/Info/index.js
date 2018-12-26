// @jsx m
import m from 'mithril'
import { Game } from 'Models/Game'
import { Stats } from './components/Stats'
//import { hooks } from './hooks'
import style from './info.scss'


export function Info() {
  return {
    //...hooks,

    view() {
      return (
        <div class={ style.body }>
          <Stats/>
        </div>
      )
    }
  }
}
