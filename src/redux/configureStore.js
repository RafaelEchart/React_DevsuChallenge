import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import dataReducerGetPokemons from './main/mainStore';

const reducer = combineReducers({
  getPokemons: dataReducerGetPokemons,
});

const store = createStore(
  reducer,
  applyMiddleware(thunk, logger),
);

export default store;