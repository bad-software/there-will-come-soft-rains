// @flow strict
import { paths } from 'Router/paths'
import { applyLayout as render } from 'Lib/mithril'
import { Game as C_Game } from 'Components/Game'

export const Main = {
  [ paths.main ]: { render,
    async onmatch() { return C_Game },
  }
}
