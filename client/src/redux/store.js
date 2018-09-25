import { createStore } from 'redux'
import rootReducer from './reducers/'

let store
if (process.env.REACT_STATIC_ENV !== 'production') {
  const { logger } = require('redux-logger')
  const { applyMiddleware } = require('redux')
  store = createStore(rootReducer, applyMiddleware(logger))
} else {
  store = createStore(rootReducer)
}

export default store
