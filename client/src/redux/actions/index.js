import {
  TOGGLE_DRAWER,
  SET_ON_EPISODE_PAGE,
  CLEAR_ON_EPISODE_PAGE
} from '../../constants/actionTypes/commonActionTypes.js'

export const toggleDrawer = () => ({ type: TOGGLE_DRAWER })

export const setOnEpisodePage = () => ({ type: SET_ON_EPISODE_PAGE })

export const clearOnEpisodePage = () => ({ type: CLEAR_ON_EPISODE_PAGE })
