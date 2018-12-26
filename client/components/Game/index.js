// @flow strict
// @jsx m
import m from 'mithril'
import { HintToggle } from 'Components/HintToggle'
import { Icon } from 'Components/Icon'
import { Logo } from 'Components/Logo'
import { GameOver } from 'Components/States/GameOver'
import { Help } from 'Components/States/Help'
import { Intro } from 'Components/States/Intro'
import { Play } from 'Components/States/Play'
import { Poem } from 'Components/States/Poem'
import { SelectRegion } from 'Components/States/SelectRegion'
import { Title } from 'Components/States/Title'
import { Game as M_Game } from 'Models/Game'
import style from './game.scss'


export function Game() { return {
  view() { return (
    <div key="view" class={ style.body }>
      {/* States */}
      { function() {
        switch ( M_Game.state ) {
          case M_Game.states.Intro: return <Intro/>
          case M_Game.states.Title: return <Title/>
          case M_Game.states.Help: return <Help/>
          case M_Game.states.SelectRegion: return <SelectRegion/>
          case M_Game.states.Play: return <Play/>
          case M_Game.states.Poem: return <Poem/>
          case M_Game.states.GameOver: return <GameOver/>

          default: return `Invalid State: ${ M_Game.state }`
        }
      }()}


      <div class={ style.logo }>
        <Logo/>
      </div>

      <div class={ style.title }>
        There Will Come Soft Rains
      </div>

      <div class={ style.hints }>
        <HintToggle/>
      </div>

      <div class={ style.feedback } onclick={ M_Game.ctrl.reviewGame }>
        <Icon name="action.favorite" class={ style.feedback_icon }/>
        Feedback
      </div>
    </div>
  )}
}}
