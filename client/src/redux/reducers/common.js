import { combineReducers } from 'redux'
import {
  TOGGLE_DRAWER,
  SET_ON_EPISODE_PAGE,
  CLEAR_ON_EPISODE_PAGE
} from '../../constants/actionTypes/commonActionTypes.js'

const isDrawerOpen = (state = false, action) => {
  switch (action.type) {
    case TOGGLE_DRAWER:
      return !state
    case CLEAR_ON_EPISODE_PAGE:
      return false
    default:
      return state
  }
}

const isOnEpisodePage = (state = false, action) => {
  switch (action.type) {
    case SET_ON_EPISODE_PAGE:
      return true
    case CLEAR_ON_EPISODE_PAGE:
      return false
    default:
      return state
  }
}

export default combineReducers({
  isDrawerOpen,
  isOnEpisodePage
})
