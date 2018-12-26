// @jsx m
import m from 'mithril'
//import { hooks } from './hooks'
import style from './poem.scss'
import { Game } from 'Models/Game'
import { Rain } from 'Components/FX/Rain'


export function Poem() {
  return {
    //...hooks,

    view() {
      return ([
        <div key="poem" class={ style.body }>
          <span>
            <span class="sacrifice">
              There will come soft rains
            </span>
            &nbsp;and the smell of the ground,<br/>
            And swallows circling with their shimmering sound;
          </span>

          <span>
            And frogs in the pools singing at night,<br/>
            And wild plum-trees in tremulous white;
          </span>

          <span>
            Robins will wear their feathery fire<br/>
            Whistling their whims on a low fence-wire;
          </span>

          <span>
            And not one will know of the war, not one<br/>
            Will care at last when it is done.
          </span>

          <span>
            Not one would mind, neither bird nor tree<br/>
            If mankind perished utterly;
          </span>

          <span>
            And Spring herself, when she woke at dawn,<br/>
            Would scarcely know that we were gone.
          </span>

          <span class="sacrifice">
            — Sara Teasdale
          </span>

          <button
            key="start"
            class={`${ style.btn } ${ style.btn__start }`}
            onclick={() => Game.ctrl.goTo( Game.states.Title )}
          >
            Main Menu
          </button>
        </div>,

        <Rain key="rain"/>,
      ])
    }
  }
}
