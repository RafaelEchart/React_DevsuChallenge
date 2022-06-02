

const NEW_POKEMON = 'NEW_POKEMON';
const EDIT_POKEMON = 'EDIT_POKEMON';
const CANCEL_POKEMON = 'CANCEL_POKEMON';
const INPUT_POKEMON = 'INPUT_POKEMON';

const initialState = {open: false, pokemonData: {id: null, name: null, image: null, attack: null, defense: null}};

export const newPokemon = () => ({
  type: NEW_POKEMON,
  payload: {open: true, pokemonData: {id: null, name: '', image: '', attack: '0', defense: '0'}}
});

export const editPokemon = (id, name, image, attack, defense) => ({
  type: EDIT_POKEMON,
  payload: {open: true, pokemonData: {id, name, image, attack, defense}}
});

export const cancelPokemon = () => ({
  type: CANCEL_POKEMON,
  payload: {open: false, pokemonData: {id: null, name: null, image: null, attack: null, defense: null}}
});

export const handleInput = (data) => ({
  type: INPUT_POKEMON,
  payload: {open: true, pokemonData: data}
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

    default:
      return state;
  }
};

export default reducer;
