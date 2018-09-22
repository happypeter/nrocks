import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers/'

let store
if (process.env.REACT_STATIC_ENV !== 'production') {
  const { logger } = require('redux-logger')
  store = createStore(rootReducer, applyMiddleware(logger))
} else {
  store = createStore(rootReducer)
}

export default store
