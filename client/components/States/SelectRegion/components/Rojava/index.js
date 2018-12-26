// @jsx m
import m from 'mithril'
//import { hooks } from './hooks'
import style from '../../selectRegion'
import { Game } from 'Models/Game'


export function Rojava() {
  return {
    //...hooks,

    view() {
      return [
        <div key="title" class={ style.info_title }>
          Democratic Federation of Northern Syria
        </div>,

        <div key="text" class={ style.info_txt }>
          The Democratic Federation of Northern Syria, commonly known as
          Rojava, is a Libertarian socialist federated semi-direct democracy.
          <br/><br/>

          The DFNS is divided into three administrative regions.
          As head of the newly formed Autonomous Administration of
          North and East Syria, you work together with each region in order to
          reach decisions that benefit everyone.<br/><br/>

          Unpopular decisions could quickly lead to you being&nbsp;
          <span class={ style.info_txt_stability }>
            forced out of power
          </span>
          . As a newly-formed region less than a decade old,
          you also have&nbsp;
          <span class={ style.info_txt_economy }>
            limited funds
          </span>
          &nbsp;and a&nbsp;
          <span class={`line ${ style.info_txt_industry }`}>
            young industrial sector.&nbsp;
          </span>
          However, a desire not to follow in the path of Syria has
          your leadership and citizens both&nbsp;
          <span class={`line ${ style.info_txt_progress }`}>
            eager for reform.
          </span>
        </div>
      ]
    }
  }
}
