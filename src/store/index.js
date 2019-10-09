import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import Test from './reducers/test'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose

const enhancer = composeEnhancers(applyMiddleware(thunk, logger))

const combs = combineReducers({
  Test
})

// const store = createStore(countReducer, enhancer)
const store = createStore(combs, enhancer)

export default store;