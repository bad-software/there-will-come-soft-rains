// @flow strict

/**
 * Call a method corresponding to the event code
 * in a list of provided macros
 * @this {KeyMacro[]}
 */
export function doActionInMacros( e: KeyboardEvent ): boolean {
  for ( let macro of this ) {
    if ( e.code === macro.code ) {
      macro.action()
      return true
    }
  }

  return false
}


/** Execute `this` callback on confirmation */
export function handleMenuKeyEvent( e: KeyboardEvent ) {
  const items = e.target.parentNode.children

  if ( isConfirm( e )) this.callback()
  else if ( e.code === 'ArrowUp' )
    items[ Math.max( this.index - 1, 0 )].focus()
  else if ( e.code === 'ArrowDown' )
    items[ Math.min( this.index + 1, items.length - 1 )].focus()
}


/**
 * Execute `this` callback on confirmation
 * @this {Function} Callback
 */
export function doOnConfirm( e: KeyboardEvent ) {
  if ( isConfirm( e )) this()
}


/**
 * Checks if key code matches a list of confirmation keys
 * @return {boolean} Result
 */
export function isConfirm({ code }: KeyboardEvent ) {
  return code === 'Enter' || code === 'Space'
}
