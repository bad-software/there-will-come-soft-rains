// @jsx m
import m from 'mithril'
import { Icon } from 'Components/Icon'
import { Game } from 'Models/Game'
import { Meter } from './components/Meter'
//import { hooks } from './hooks'
import style from './stats.scss'


export function Stats() {
  return {
    //...hooks,
    view() {
      return (
        <div class={ style.body }>
          <div
            class={ style.stat }
            title="Economy"
          >
            <div class={ style.icon__economy }>
              { function() {
                switch ( Game.region ) {
                  case Game.regions.USA: return '$'
                  case Game.regions.China: return '¥'
                  case Game.regions.Rojava: return '£'
                  default: return '$'
                }
              }()}
            </div>
            <Meter type="economy"/>
          </div>

          <div
            class={ style.stat }
            title="Industry"
          >
            <Icon
              name="maps.gasStation"
              class={ `${ style.icon } ${ style.icon__industry }` }
              noDefault
            />
            <Meter type="industry"/>
          </div>

          <div
            class={ style.stat }
            title="Stability"
          >
            <Icon
              name="action.favorite"
              class={ `${ style.icon } ${ style.icon__stability }` }
              noDefault
            />
            <Meter type="stability"/>
          </div>

          <div
            class={ style.stat }
            title="Progress"
          >
            <Icon
              name="toggle.star"
              class={ `${ style.icon } ${ style.icon__progress }` }
              noDefault
            />
            <Meter type="progress"/>
          </div>
        </div>
      )
    }
  }
}
