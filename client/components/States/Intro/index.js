// @jsx m
import m from 'mithril'
import { Game } from 'Models/Game'
import { hooks } from './hooks'
import style from './intro.scss'


export function Intro() { return {
  ...hooks,
  view() { return (
    <div class={ style.body }>
      { Game.ready
            ? (
              <button
                class={ style.btn }
                onclick={ this.play }
                onkeyup={ this.play }
              >
                Play
              </button>
            )
            : <div>Loading...</div>
      }
    </div>
  )}
}}
