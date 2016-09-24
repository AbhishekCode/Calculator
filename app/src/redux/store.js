import {
    createStore,
    applyMiddleware,
    compose
} from 'redux'

import rootReducer from './modules';

function thunkMiddleware({ dispatch, getState }) {
  return next => action =>
      typeof action === 'function' ?
          action(dispatch, getState) :
          next(action);
}

export default compose(
    applyMiddleware(thunkMiddleware)
)(createStore)(rootReducer);
