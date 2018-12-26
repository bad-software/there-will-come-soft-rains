// @flow strict
import md5 from 'crypto-js/md5'
import { oneLineTrim } from 'common-tags'


const
  // Gravatar URL prefix
  gravatarUrl = 'https://s.gravatar.com/avatar'


/**
 * Construct URL for avatar using gravatar API
 */
export function getDefaultAvatar( str, {
  size = 100,
  type = 'retro'
}: {
  size: number,
  type: string
} = {}): string {
  const
    // Build an MD5 hash from the provide string.
    hash = md5( str.trim().toLowerCase()),

    // Build query from options
    query = `s=${ size }?&d=${ type }`

  // Return url
  return `${ gravatarUrl }/${ hash }?${ query }`
}


/**
 * Generate random short ID.
 * Useful for namespacing IDs for forms, menus, etc.
 */
export function shortID(
  { underscore = false }: {
    underscore: boolean // Append underscore to ID
  } = {}
): string {
  /*
   * 1. Generate random float
   * 2. Clamp to (0, 1) (0 or 1 returns a blank string in step 3)
   * 3. Convert to base 36 (JS black magic)
   * 4. Get a substring
   */
  return oneLineTrim`
    ${ underscore ? `__` : `` }
    ${ Math.max( 0.000000000001, Math.random()).toString( 36 ).substr( 2, 6 )}
  `
}
