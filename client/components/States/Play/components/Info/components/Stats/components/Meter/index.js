// @jsx m
import m from 'mithril'
import { oneLine } from 'common-tags'
import { Game } from 'Models/Game'
import theme from 'Theme'
//import { hooks } from './hooks'
import style from './meter.scss'

export function Meter() {
  return {
    //...hooks,

    colors: {
      economy: theme.statEconomy,
      progress: theme.statProgress,
      industry: theme.statIndustry,
      stability: theme.statStability,
    },

    view( v ) {
      return (
        <div
          class={ style.body }
        >
          <div
            class={ style.bg }
            style={ `--color: ${ this.colors [ v.attrs.type ]};`}
          >

          </div>
          <div
            class={ style.fill }
            style={ oneLine`
              --color: ${ this.colors [ v.attrs.type ]};
              width: ${ Math.min( Game.stats[ v.attrs.type ], 100 )}%;
            `}
          />
        </div>
      )
    }
  }
}
