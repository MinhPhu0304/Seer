import { combineReducers } from 'redux';

import { SET_ME } from '../actions/meAction'

const initialLoginState = {
  authenticated: false,
}

function loginStateReducer (state = initialLoginState, action) {
  switch(action.type){
    case SET_ME:
      const { payload } = action
      return {
        ...state,
        authenticated: true,
        ...payload,
      }
    default:
      return state;
  }
}

const rootReducer = combineReducers({ session: loginStateReducer })
export {
  rootReducer,
}
