// @jsx m
import m from 'mithril'
import { hooks } from './hooks'
import style from './selectRegion.scss'
import { Game } from 'Models/Game'
import { China } from './components/China'
import { Rojava } from './components/Rojava'
import { USA } from './components/USA'
import { Icon } from 'Components/Icon'


export function SelectRegion() {
  return {
    ...hooks,
    selectedRegion: null,

    view( v ) {
      return (
        <div class={ style.body }>
          { v.state.selectedRegion !== null ?
            <div class={ style.info }>
              { function() {
                switch ( v.state.selectedRegion ) {
                  case Game.regions.USA: return <USA/>
                  case Game.regions.China: return <China/>
                  case Game.regions.Rojava: return <Rojava/>

                  default: return `Invalid Region: ${ v.state.selectedRegion }`
                }
              }()}

              <div class={ style.info_btn_container }>
                <button
                  class={ style.info_btn }
                  onclick={ () => this.clear( v )}
                >
                  Wait a minute
                </button>

                <button
                  class={ style.info_btn }
                  onclick={ () => this.confirm( v )}
                >
                  Sounds cool
                </button>
              </div>
            </div>
            :
            [
              <div
                key="title"
                class={ style.title }
              >
                Select a region
              </div>,
              <div
                key={ Game.regions.USA }
                class={ style.region }
                onclick={() => this.select( v, Game.regions.USA )}
              >
                <Icon name="map.usa" class={ style.region_map } noDefault/>
                <div class={ style.region_title }>
                  USA
                </div>
              </div>,

              <div
                key={ Game.regions.China }
                class={ style.region }
                onclick={() => this.select( v, Game.regions.China )}
              >
                <Icon name="map.china" class={ style.region_map } noDefault/>
                <div class={ style.region_title }>
                  China
                </div>
              </div>,

              <div
                key={ Game.regions.Rojava }
                class={ style.region }
                onclick={() => this.select( v, Game.regions.Rojava )}
              >
                <Icon name="map.rojava" class={ style.region_map } noDefault/>
                <div class={ style.region_title }>
                  Rojava
                </div>
              </div>,
            ]
          }
        </div>
      )
    }
  }
}
