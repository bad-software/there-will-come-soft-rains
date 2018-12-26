// @flow strict
import { oneLineTrim } from 'common-tags'

const days = [ 'Sunday', 'Monday', 'Tuesday',
  'Wednesday', 'Thursday', 'Friday', 'Saturday' ]

export function getDayName( date: Date ) {
  return days[ date.getDay() ]
}

export function getDayAndTime(
  date: Date,
  { seconds, short }: {
    seconds?: boolean,
    short?: boolean
  }
) {
  let dayName = getDayName( date )

  if ( short ) dayName = dayName.substring( 0, 3 )

  return `${ dayName } ${ getFormattedTime( date, { seconds })}`
}

export function getFormattedTime(
  date: Date,
  { seconds }: {
    seconds?: boolean
  }
) {
  // Get hours
  let hours = date.getHours()

  // Set flag if night time
  const pm = hours >= 12

  // Since hours is in 24-hour time,
  // use modulo to reset hours to 0 after it reaches 12
  // If hours equals 0, it's 12
  hours = hours % 12 || 12

  // Get time string
  let time = String( oneLineTrim`
    ${ hours }:
    ${ String( date.getMinutes()).padStart( 2, '0' )}
    ${ seconds
    ? `:${ String( date.getSeconds()).padStart( 2, '0' )}`
    : ''
    }`
  )

  // Augment if night time
  // OneLineTrim removes leading spaces,
  // so we concatenate after forming the template literal.
  time = time.concat( pm ? ' PM' : '' )

  return time
}
