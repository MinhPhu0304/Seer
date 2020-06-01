import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'

import { rootReducer } from './reducers';

const store = createStore(rootReducer, composeWithDevTools());
const dispatcher = store.dispatch;
const getState = store.getState;

export {
  store,
  dispatcher,
  getState,
}
