// @jsx m
import m from 'mithril'
import { Game } from 'Models/Game'
import { Lose } from './components/Lose'
import { Win } from './components/Win'
//import { hooks } from './hooks'
import style from './gameOver.scss'
import { Rain } from 'Components/FX/Rain'


export function GameOver() {
  return {
    //...hooks,

    view() {
      return (
        <div class={ style.body }>
          { Game.hasWon
            ? <Win/>
            : <Lose/>
          }
          <Rain/>
        </div>
      )
    }
  }
}
