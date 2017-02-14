import {applyMiddleware, compose, createStore} from 'redux';
import reducer from 'redux/reducers';
import thunk from 'redux-thunk';

let finalCreateStore = compose (
  applyMiddleware(thunk)
)(createStore)

export function configureStore(initialState) {
  return finalCreateStore(reducer, initialState)
}

let initialState = {
  test: false
}

export {initialState};
