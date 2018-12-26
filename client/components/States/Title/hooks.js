import { Game } from 'Models/Game'
import m from 'mithril'


function oncreate() {
  Game.sounds.coin.play()

  // Start rain
  setTimeout(() => {
    this.rain = true
    Game.music.rain.play()
    m.redraw()
  }, 1000 )

  // Clear intro
  setTimeout(() => {
    this.intro = false
    Game.music.main.play()
    m.redraw()
  }, 3000 )
}


export const hooks = {
  oncreate,
}
