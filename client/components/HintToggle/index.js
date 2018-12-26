// @jsx m
import m from 'mithril'
import { oneLine } from 'common-tags'
import { Game } from 'Models/Game'
import theme from 'Theme'
//import { hooks } from './hooks'
import style from './hintToggle.scss'


export function HintToggle() {
  return {
    //...hooks,

    toggle() {
      Game.ctrl.toggleHints()

      // Trigger sound
      if ( Game.showHints ) Game.sounds.toggleTrue.play()
      else Game.sounds.toggleFalse.play()
    },

    view() {
      return (
        <div
          class={ style.body }
          onclick={ this.toggle }
        >
          Hints:&nbsp;
          <span
            class={ oneLine`
              ${ style.option }
              ${ Game.showHints ? style.selected : '' }
            `}
            style={ `--color: ${ theme.success }`}
          >
            On
          </span>&nbsp;|&nbsp;
          <span
            class={ oneLine`
              ${ style.option }
              ${ !Game.showHints ? style.selected : '' }
            `}
            style={ `--color: ${ theme.error }`}
          >
            Off
          </span>
        </div>
      )
    }
  }
}
