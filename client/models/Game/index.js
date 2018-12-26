import { Model } from 'Models'
import * as ctrl from './controller'

import { bindProps } from 'Lib/utility/bindProps'
import { music, sounds } from 'Lib/audio'


const regions = Object.freeze({
  USA: 0,
  China: 1,
  Rojava: 2,
})

const states = Object.freeze({
  Intro: 0,
  Title: 1,
  Help: 2,
  SelectRegion: 3,
  Play: 4,
  Poem: 5,
  GameOver: 6,
})


export const Game = new class C_Game extends Model {
  constructor() { super()}

  get currentChoice() {
    return this.choices[ this.choiceIndex ]
  }

  get currentRegion() {
    return Object.keys( this.regions )[ this.region ]
  }

  // Current temperature
  get temperature() {
    // Don't divide by zero!
    if ( this.choices.length - 1 <= 0 )
      return 0
    else return Math.floor(
      ( this.choiceIndex / ( this.choices.length - 1 )) * 4
    )
  }


  // Current choice
  choiceIndex = 0
  // Array of all choices for this game.
  choices = []

  // Game has been won
  hasWon = false

  // Chosen region
  region = regions.USA
  regions = regions

  showMenu = false

  // SFX
  music = music
  sounds = sounds

  // Play settings
  ready = false

  showHints = false

  // Current state
  state = states.Intro
  states = states

  statDefaults = {
    [ regions.USA ]: {
      economy: 50,
      industry: 50,
      stability: 50,
      progress: 0,
    },

    [ regions.China ]: {
      economy: 75,
      industry: 40,
      stability: 50,
      progress: 0,
    },

    [ regions.Rojava ]: {
      economy: 50,
      industry: 50,
      stability: 33,
      progress: 0,
    },
  }

  // stat: [ positive, negative ]
  statMultipliers = {
    [ regions.USA ]: {
      economy: [ 1, 1.5 ],
      industry: [ 1, 1 ],
      progress: [ 1, 1 ],
      stability: [ 1, 0.7 ],
    },

    [ regions.China ]: {
      economy: [ 0.7, 1.4 ],
      industry: [ 1, 0.5 ],
      progress: [ 1, 1 ],
      stability: [ 0.8, 0.8 ],
    },

    [ regions.Rojava ]: {
      economy: [ 1, 1.5 ],
      industry: [ 1, 1.5 ],
      progress: [ 1.4, 1 ],
      stability: [ 1, 1.5 ],
    },
  }

  // Stats
  stats = {
    economy: 0,
    industry: 0,
    progress: 0,
    stability: 0,
  }

  ctrl = bindProps( this, ctrl )
}
