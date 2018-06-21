// the module has an isolated namespace/context
// import the names/identifiers into the global scope of it
/**
 * Create a Vuex Store instance as a subroutine/subprogram of
 * creating & rendering the Vue instance into the DOM
 */
import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import * as actions from './actions'
import * as mutations from './mutations'

Vue.use(Vuex) // use the plugin

// the state of the app
const state = { // app state; the root of the component tree(other thant root node)
  count: 0,
  history: []
}

const store = new Vuex.store({ // create a Vuex store instance
  state, // property name shorthand; object initializer
  actions,
  mutations,
  getters
})

/* hot module replacement */
if (module.hot) {
  module.hot.accept([ // the modules to be replaced
    './getters',
    './actions',
    './mutations'
  ], () => {
    store.hotUpdate({ // the replacement modules
      getters: require('./getters'),
      actions: require('./actions'),
      mutations: require('./mutations')
    })
  })
}

export default store
