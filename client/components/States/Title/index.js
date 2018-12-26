// @jsx m
import m from 'mithril'
import { Rain } from 'Components/FX/Rain'
import { Logo } from 'Components/Logo'
import { Game } from 'Models/Game'
import { Intro } from './components/Intro'
import { hooks } from './hooks'
import style from './title.scss'


export function Title() { return {
  ...hooks,
  intro: true,
  rain: false,

  view() { return (
    <div class={ style.body }>
      { this.intro
        ? <Intro/>
        : [
          <div key="title" class={ style.title_container }>
            <div class={ style.title_1 }>There Will Come</div>
            <div class={ style.title_2 }>Soft Rains</div>
          </div>,

          <button
            key="start"
            class={`${ style.btn } ${ style.btn__start }`}
            onclick={() => Game.ctrl.goTo( Game.states.SelectRegion )}
          >
            Start
          </button>,

          <button
            key="help"
            class={`${ style.btn } ${ style.btn__help }`}
            onclick={() => Game.ctrl.goTo( Game.states.Help )}
          >
            How to play
          </button>,

          <button
            key="help"
            class={`${ style.btn } ${ style.btn__poem }`}
            onclick={() => Game.ctrl.goTo( Game.states.Poem )}
          >
            There Will Come Soft Rains
          </button>,

          <div key="thanks" class={ style.thanks }>
            Special thanks:<br/>

            <a
              href="https://freesound.org/people/TUNABIZZ/"
              target="_blank"
              rel="noopener noreferrer"
            >
              TUNABIZZ
            </a>
            &nbsp;: Rain sounds |&nbsp;
            <a
              href="https://freesound.org/people/Vonora/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vonora
            </a>
            : Nature sounds<br/>
            Google (Icons) |&nbsp;
            <span class="line">
              Wikimedia Commons (Bases for maps)
            </span>
          </div>
        ]
      }
      { this.rain && <Rain/> }
    </div>
  )}
}}
