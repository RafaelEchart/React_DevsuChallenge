

const NEW_POKEMON = 'NEW_POKEMON';
const EDIT_POKEMON = 'EDIT_POKEMON';
const CANCEL_POKEMON = 'CANCEL_POKEMON';
const INPUT_POKEMON = 'INPUT_POKEMON';
const LOADING_POKEMON = 'LOADING_POKEMON';

const initialState = {open: false, pokemonData: {id: null, name: null, image: null, attack: null, defense: null}, isLoading: false};

export const newPokemon = () => ({
  type: NEW_POKEMON,
  payload: {open: true, pokemonData: {id: null, name: '', image: '', attack: '0', defense: '0'}, isLoading: false}
});

export const editPokemon = (id, name, image, attack, defense) => ({
  type: EDIT_POKEMON,
  payload: {open: true, pokemonData: {id, name, image, attack, defense}, isLoading: false}
});

export const cancelPokemon = () => ({
  type: CANCEL_POKEMON,
  payload: {open: false, pokemonData: {id: null, name: null, image: null, attack: null, defense: null}, isLoading: false}
});

export const handleInput = (data) => ({
  type: INPUT_POKEMON,
  payload: {open: true, pokemonData: data, isLoading: false}
});

export const pokemonLoading = (boolean) => ({
  type: LOADING_POKEMON,
  payload: {open: false, pokemonData: initialState.pokemonData, isLoading: boolean}
});






const reducer = (state = initialState, action) => {
  switch (action.type) {
    case NEW_POKEMON:
     return action.payload
    
     case EDIT_POKEMON:
     return action.payload
  
     case CANCEL_POKEMON:
     return action.payload
     
     case INPUT_POKEMON:
     return action.payload
   
     case LOADING_POKEMON:
     return action.payload
     

    default:
      return state;
  }
};

export default reducer;
