// @jsx m
import m from 'mithril'
//import { hooks } from './hooks'
import style from './logo.scss'


export function Logo() {
  return {
    //...hooks,

    view( v ) {
      return (
        <div class={`${ style.body } ${
          v.attrs.corner ? style.body__corner : ''
        }`}>
          <span class={ style.bad }>
              Bad
          </span>
          &nbsp;Software
        </div>
      )
    }
  }
}
