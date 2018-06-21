/**
 * Define a set of functions to be triggered when the action occurs.
 */

/**
 * Increment the counter.
 *
 * @param state the state
 */
export const increment = state => {
  state.count++
  state.history.push('increment')
}

/**
 * Decrement the counter.
 *
 * @param state the state
 */
export const decrement = state => {
  state.count--
  state.history.push('decrement')
}
