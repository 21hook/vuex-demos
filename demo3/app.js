// a module has an isolated namespace/context
// import the names/identifiers to the global scope of the module
/**
 * Create a Vue instance, render the component tree, and mount it into the DOM.
 */
import 'babel-polyfill'
import Vue from 'vue'
import store from './store/index'
import App from './components/App'

new Vue({
  store, // inject store to all children
  el: '#app',
  render: h => h(App)
});

