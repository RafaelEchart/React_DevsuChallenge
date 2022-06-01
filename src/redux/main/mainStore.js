

const FETCH_ALL_POKEMONS = 'FETCH_ALL_POKEMONS';
const IS_LOADING_POKEMONS = 'IS_LOADING_POKEMONS';

const initialState = {isLoading: false, data: undefined};

const fetchData = (data) => ({
  type: FETCH_ALL_POKEMONS,
  payload: data,
});

const isLoading = () => ({
  type: IS_LOADING_POKEMONS,
  data: initialState.isLoading
});




export const fetchGetAllPokemons = () => async (dispatch) => {
  try {
    dispatch(isLoading())
    let fetchAllPokemons = await fetch(
      "https://pokemon-pichincha.herokuapp.com/pokemons/?idAuthor=1"
    );
    fetchAllPokemons = await fetchAllPokemons.json();
    dispatch(fetchData(fetchAllPokemons));
    dispatch(isLoading())
  } catch (err) {
    dispatch(fetchData(undefined));
    dispatch(isLoading())
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL_POKEMONS:
     return initialState.data = action.payload;


    case IS_LOADING_POKEMONS:
     return initialState.isLoading = !action.payload

    default:
      return state;
  }
};

export default reducer;
