// a module with an isolated namespace/context
// import the names/identifiers to the global scope of the module
/**
 *  Creates a Vuex store instance, which is a subroutine/subprogram of creating a Vue instance,
 *  & rendering the component tree.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import { mutations, STORAGE_KEY } from './mutations'
import actions from './actions'
import plugins from './plugins'

Vue.use(Vuex) // use the plugin

export default new Vuex.Store({ // export anonymous Vuex store object
  state: {
    todos: JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]')
  },
  actions,
  mutations,
  plugins // use the local storage plugin to listen the data of it
})
