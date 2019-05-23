// @jsx m
import m from 'mithril'
import { Game } from 'Models/Game'
//import { hooks } from './hooks'
import style from '../../gameOver.scss'
import { Icon } from 'Components/Icon'


export function Win() {
  return {
    //...hooks,

    view() {
      return (
        <div class={ style.screen }>
          <div key="message">
            Congratulations!<br/><br/>

            Despite the&nbsp;
            <span class="sacrifice">
              sacrifices you&apos;ve made
            </span>,
            &nbsp;the future
            looks bright for the citizens of { Game.currentRegion }.
          </div>
          <button key="again" onclick={ Game.ctrl.restart }>
            Play again
          </button>

          <button key="rate" onclick={ Game.ctrl.reviewGame }>
            <Icon name="action.favorite" class={ style.feedbackIcon }/>
            Tell me what you think
          </button>
        </div>
      )
    }
  }
}
