import shop from '../../api/shop'

// modular store state
const state = {
  all: []
}

// define getters to get the state of moduar store
const getters = {}

// define actions to trigger actions
const actions = {
  getAllProducts ({ commit }) {
    shop.getProducts(products => {
      commit('setProducts', products)
    })
  }
}

// define mutation handlers to be called when the mutation occurs
const mutations = {
  setProducts (state, products) {
    state.all = products
  },

  decrementProductInventory (state, { id }) {
    const product = state.all.find(product => product.id === id)
    product.inventory--
  }
}

export default {
  namespaced: true, // enable modular store namespace
  state,
  getters,
  actions,
  mutations
}
