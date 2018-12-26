// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks, see: http://docs.feathersjs.com/api/hooks.html
// TODO: Pull common lib out of client folder and into common folder
import { getDefaultAvatar } from 'Lib/utility/strings'


// eslint-disable-next-line no-unused-vars
export function gravatar ( options = {}) {
  return async context => {
    context.data.avatar =
      getDefaultAvatar( context.data.username, { size: 100 })
    return context
  }
}
