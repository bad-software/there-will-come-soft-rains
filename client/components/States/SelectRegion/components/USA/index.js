// @jsx m
import m from 'mithril'
//import { hooks } from './hooks'
import style from '../../selectRegion'
import { Game } from 'Models/Game'


export function USA() {
  return {
    //...hooks,

    view() {
      return [
        <div key="title" class={ style.info_title }>
          The United States of America
        </div>,

        <div key="text" class={ style.info_txt }>
          The United States is a federal presidential
          constitutional republic. As president, you have
          a limited authority, which you share with Congress.<br/><br/>

          As a democratic nation, your citizens are generally
          less prone to&nbsp;
          <span class={ style.info_txt_stability }>
            unrest
          </span>
          . However, you don&apos;t have as much&nbsp;
          <span class={ style.info_txt_economy }>
            discretionary funds
          </span>
          &nbsp;at your disposal.
        </div>
      ]
    }
  }
}
