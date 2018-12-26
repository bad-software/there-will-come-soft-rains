// @jsx m
import m from 'mithril'
//import { hooks } from './hooks'
import style from '../../selectRegion'
import { Game } from 'Models/Game'


export function China() {
  return {
    //...hooks,

    view() {
      return [
        <div key="title" class={ style.info_title }>
          People's Republic of China
        </div>,

        <div key="text" class={ style.info_txt }>
          China is a unitary "Marxist-Leninist" one-party socialist republic.
          As president of the People's Republic of China, general secretary
          of the Communist Party of China and chairman of the Central Military
          Commission,&nbsp;
          <span class={ style.info_txt_special }>
            you have near unlimited power.
          </span>
          <br/><br/>

          Decades of brainwashing ensure your citizens are less
          likely to&nbsp;
          <span class={ style.info_txt_stability }>
            revolt<br/><br/>
          </span>
          However, a large majority of the existing infrastructure in your&nbsp;
          <span class={ style.info_txt_industry }>
            industrial sector&nbsp;
          </span>
          is outdated and against code. It will be difficult balancing the
          reality of your situation with the reform that must be done.
        </div>
      ]
    }
  }
}
