# Vuex Demos
Vuex state management pattern for Vue web application

## Project Structure
The general project structure for each Vuex demos

```
├── index.html
├── main.js
├── api
│   └── ... # abstractions for making API requests
├── components
│   ├── App.vue
│   └── ...
└── store
    ├── index.js          # where we assemble modules and export the store
    ├── actions.js        # root actions
    ├── mutations.js      # root mutations
    └── modules
        ├── cart.js       # cart module
        └── products.js   # products module
```

## Table of Contents
1. [Counter](https://github.com/21hook/vuex-demos#counter) 
2. [Counter with commit histories](https://github.com/21hook/vuex-counter#counter-with-commit-histories)
3. [Todo MVC](https://github.com/21hook/vuex-counter#todo-mvc)

## Counter
The mutation mutated the state of the app, the associated component will be reactive 
to the state transition in the state, then output the necessary data & render the 
component tree, automatically 

Application architecture    
   output the data in the component tree & render it   
 ↑--------------------------------------------------|
 |    mutate             commit                     ↓
 ▆ <------------- ▆ <------------- ▆                ▆ 
State          Mutations        Actions        Vue components

## Counter with commit histories
The Vue components dispatch a set of actions, each of which can be committed into 
the mutation; When the mutation mutated the state of the app, the associated component 
will be reactive to the state transition in the state, then output the necessary data & 
render it in the component tree, automatically.

Application architecture    
   output/access the data in the component tree & render it   
 ↑--------------------------------------------------|
 |    mutate             commit          dispatch   ↓
 ▆ <------------- ▆ <------------- ▆ <------------- ▆ 
State          Mutations        Actions           Vue components

## Todo MVC
The Vue components dispatch actions, each of which can be committed into 
the mutation; When the mutation mutated the state of the app, the associated component 
will be reactive to the state transition in the state, then output the necessary data & 
render it in the component tree, automatically.

Application architecture
   output/access the data in the component tree & render it   
 ↑--------------------------------------------------|
 |    mutate             commit          dispatch   ↓
 ▆ <------------- ▆ <------------- ▆ <------------- ▆ 
State          Mutations        Actions           Vue components

## Shopping cart
The Vue components dispatch actions, each of which can be committed into the mutation;
When the mutation mutated the state of the app, the associated component will be reactive 
to the state transition in the state, then output the payload & render it in the component
tree.

Application architecture
   output/access the data in the component tree & render it   
 ↑--------------------------------------------------|
 |    mutate             commit          dispatch   ↓
 ▆ <------------- ▆ <------------- ▆ <------------- ▆ 
State          Mutations        Actions           Vue components

## License
MIT
