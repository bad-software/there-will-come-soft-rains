// @flow strict
export type Vnode = {
  tag: {} | string,
  key?: string,
  attrs?: {},
  children?: [] | string | number | boolean,
  text?: string | number | boolean,
  dom?: HTMLElement,
  domSize?: number,
  state?: {},
  events?: {},
  instance?: {},
  skip?: boolean,
}
