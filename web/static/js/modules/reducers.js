import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import connection from './connection';

export default combineReducers({
  connection,
  routing: routerReducer
})

