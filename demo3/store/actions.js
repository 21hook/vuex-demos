/**
 * Define a set of functions to be registered as actions of the app
 */
export default { // export anonymous object
  /**
   * Add a to do list.
   * Usage:
   *  store.addTodo({commit: fn}, text)
   *  addTodo({commit}, text) // receive as object destructing arguments
   *  addTodo(context, text) // receive as object reference
   *
   * @param commit the commit function
   * @param text the payload to be committed
   */
  addTodo ({ commit }, text) { // first-class function: assign functions as values
    commit('addTodo', {
      text,
      done: false
    })
  },

  /**
   * Remove a to do list.
   *
   * @param commit the commit function
   * @param todo the payload to be committed
   */
  removeTodo ({ commit }, todo) {
    commit('removeTodo', todo)
  },

  /**
   * Toggle a to do to be done or undone state.
   *
   * @param commit the commit function
   * @param todo the payload to be committed
   */
  toggleTodo ({ commit }, todo) {
    commit('editTodo', { todo, done: !todo.done })
  },

  /**
   * Mutate a to do list.
   * Usage:
   *  store.editTodo({commit: fn}, {todo: {}, value: {}})
   *
   * @param commit {Function} the commit function
   * @param todo {Object} the original state of all to do lists
   * @param value {Object} the value of the to do list mutated
   */
  editTodo ({ commit }, { todo, value }) {
    commit('editTodo', { todo, text: value })
  },

  /**
   * Toggle all to do list to be done or undone state.
   *
   * @param state {Object} the state of the app
   * @param commit {Function} the commit function
   * @param done {Boolean} the done flag of a to do list
   */
  toggleAll ({ state, commit }, done) {
    state.todos.forEach((todo) => {
      commit('editTodo', { todo, done })
    })
  },

  clearCompleted ({ state, commit }) {
    state.todos.filter(todo => todo.done)
      .forEach(todo => {
        commit('removeTodo', todo)
      })
  }
}
