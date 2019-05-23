// @jsx m
import m from 'mithril'
import { oneLine } from 'common-tags'
import { Game } from 'Models/Game'
//import { hooks } from './hooks'
import style from '../../gameOver.scss'
import { Icon } from 'Components/Icon'


export function Lose() {
  return {
    //...hooks,

    defaultMsg: oneLine`
      Oh no. We've bickered too long and climate change 
      has reared its ugly head. It was fun while it lasted!
    `,

    economyMsg: oneLine`
      Running a country is hard. 
      Resisting 
      <span class="economy">economic temptation</span> 
      is even harder.
      
      <div class=${ style.tagline }>
        On the plus side, it doesn't matter if burning your hard-won cash
        will keep you warm or not, because things are getting pretty toasty.
      </div>
    `,

    industryMsg: oneLine`
      Some people say that running a country is like 
      <span class="industry">running a business.</span>
      
      <div class=${ style.tagline }>
        But you don't know how to run one of those, either.
      </div>
    `,

    stabilityMsg: oneLine`
      Running a country is hard. 
      <span class="stability">Keeping people happy</span>
      is even harder.
      
      <div class=${ style.tagline }>
        Hope you and your head have said your goodbyes.
      </div>
    `,

    view({ state }) {
      return (
        <div class={ style.screen }>
          <div key="message">
            { m.trust( function() {
              if ( Game.stats.economy <= 0 )
                return state.economyMsg

              else if ( Game.stats.industry <= 0 )
                return state.industryMsg

              else if ( Game.stats.stability <= 0 )
                return state.stabilityMsg

              else
                return state.defaultMsg
            }())}
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
