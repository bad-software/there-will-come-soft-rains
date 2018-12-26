// @jsx m
import m from 'mithril'
import { hooks } from './hooks'
import style from './rain.scss'


export function Rain() {
  return {
    ...hooks,

    view() {
      return <div class={ style.body }/>
    }
  }
}
