/**
 * Define a set of functions to be registered as actions of the app.
 */

/**
 * The action to be committed.
 * Its caller(parent stack) is like:
 *  store.increment({commit: fn, state: {}})
 *
 *  // receive the object ref parameter
 *  increment(context) => {}
 *
 *  // receive the object literal parameter
 *  increment({commit, state}) => {}
 *
 * @param context the context object
 */
const increment = (context) => { // first-class function: assignment functions as values
  context.commit('increment')
}

/**
 * The action to be committed.
 *
 * @param {commit} the commit function
 */
const decrement = ({commit}) => {
  commit('decrement')
}

/**
 * The action to be committed.
 *
 * @param {commit, state} the commit function, the state of the app
 */
const incrementIfOdd = ({commit, state}) => {
  if ((state.count + 1) % 2 === 0) {
    commit('increment')
  }
}

/**
 * The action to be committed.
 *
 * @param {commit} the commit function
 */
const incrementAsync = ({commit}) => {
  setTimeout(() => {
    commit('increment')
  }, 1000)
}

export {increment, decrement, incrementIfOdd, incrementAsync}; // property name shorthand; object initializer
