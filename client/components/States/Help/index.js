// @jsx m
import m from 'mithril'
//import { hooks } from './hooks'
import style from './help.scss'
import { Game } from 'Models/Game'


export function Help() {
  return {
    //...hooks,

    view() {
      return (
        <div class={ style.body }>

          <div class={ style.title }>
            How to play
          </div>

          <div class={ style.text }>
            So it turns out those&nbsp;
            <span class={ style.text_climate }>
              climate change
            </span>
            &nbsp;guys were right.<br/><br/>
            Darn it.<br/><br/>

            Choose a region and try everything you can to keep it together
            despite overwhelming odds. You will have to manage your&nbsp;
            <span class={ style.text_economy }>
              economy
            </span>
            ,&nbsp;
            <span class={ style.text_stability }>
              social stability
            </span>
            &nbsp;&&nbsp;
            <span class={ style.text_industry }>
              industrial sector
            </span>
            &nbsp;while making as much progress as you
            can towards&nbsp;
            <span class={ style.text_progress }>
             environmental reform
            </span>
            .<br/><br/>

            It&nbsp;s not always clear what kind of impact
            a decision may have.<br/><br/>

            Whatever you do, it won&apos;t be easy, and&nbsp;
            <span class={ style.text_sacrifice }>
              sacrifices must be made.
            </span>
          </div>

          <button
            class={ style.btn }
            onclick={ () => Game.ctrl.goTo( Game.states.Title )}
          >
            Oh shit. Ok.
          </button>
        </div>
      )
    }
  }
}
