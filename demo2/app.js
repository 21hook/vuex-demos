// a module has an isolated namespace/context
// import the names/identifiers into the global scope of the module
/**
 * Create a Vue instance, render the component tree, and mount it into the DOM.
 */
import Vue from 'vue'
import store from './store/index'
import Counter from './Counter'

new Vue({
  el: '#app',
  store,
  render: h => h(Counter)
})
