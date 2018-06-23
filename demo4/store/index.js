/**
 * Create a Vuex Store instance, which is a subroutine/subprogram of
 * Create a Vue instance.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import cart from './modules/cart'
import products from './modules/products'
import createLogger from '../plugins/logger'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({ // export the object
  modules: { // define modules of the store
    cart,
    products
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
