// @jsx m
import m from 'mithril'
import { Logo } from 'Components/Logo'
//import { hooks } from './hooks'
import style from './intro.scss'


export function Intro() {
  return {
    //...hooks,

    view() {
      return (
        <div class={ style.body }>
          <Logo/>
        </div>
      )
    }
  }
}
