/**
 * The sore subscribes as the listener of the local storage, & gets updated when there is a state change.
 */
import { STORAGE_KEY } from './mutations'
import createLogger from '../plugins/logger'

const localStoragePlugin = store => {
  store.subscribe((mutation, { todos }) => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
  })
}

export default process.env.NODE_ENV !== 'production'
  ? [createLogger(), localStoragePlugin]
  : [localStoragePlugin]
