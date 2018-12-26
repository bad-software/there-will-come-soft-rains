// @flow strict
// @jsx m
import m from 'mithril'
import style from './default.scss'


export function Default() { return {
  view( v ) { return (
    <div class={ style.body }>
      { v.children }
    </div>
  )}
}}
