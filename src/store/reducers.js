import { combineReducers } from 'redux'
import ROLLDICE from 'modules/gameSpace'
export function makeRootReducer(asyncReducers) {
  return combineReducers({
    // Add sync reducers here
    ROLLDICE,
    ...asyncReducers
  })
}

export function injectReducer(store, { key, reducer }) {
  store.asyncReducers[key] = reducer // eslint-disable-line no-param-reassign
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
