/**
 * Define a set of functions to access the state in the app.
 *
 */

export const count = state => state.count

const limit = 5
/**
 * Slice the histories of the state.
 *
 * @param state the state
 * @return a list of state histories
 */
export const recentHistory = state => {
  const end = state.history.length
  const begin = end - limit < 0 ? 0 : end - limit
  return state.history
    .slice(begin, end)
    .join(', ')
}
