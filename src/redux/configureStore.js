import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import dataReducerGetPokemons from './main/getPokemons';
import dataReducerPostPUTPokemons from './main/post_updatePokemon';

export const reducer = combineReducers({
  getPokemons: dataReducerGetPokemons,
  postputPokemons: dataReducerPostPUTPokemons,
});

const store = createStore(
  reducer,
  applyMiddleware(thunk, logger),
);

export default store;