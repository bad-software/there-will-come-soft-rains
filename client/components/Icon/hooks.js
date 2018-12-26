import m from 'mithril'


async function oninit( v ) {
  this.icon = await import( /* webpackPreload: true */ `${
    // Append default namespace if there isn't one.
    // Then dynamically import the resulting path.
    v.attrs.name.includes( '.' )
      ? './icons/'
      : './icons/misc/'
    }${ v.attrs.name.replace( /\./g,'/' )}.js`
  )

  m.redraw()
}


export const hooks = {
  oninit,
}
