import { shuffle } from 'Lib/array'
import { common } from './common'


export function getShuffledList() {
  return shuffle([ ...common ])
}
