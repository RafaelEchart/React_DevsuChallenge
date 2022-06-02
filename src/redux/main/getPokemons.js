

const FETCH_ALL_POKEMONS = 'FETCH_ALL_POKEMONS';
const IS_LOADING_POKEMONS = 'IS_LOADING_POKEMONS';

const initialState = {isLoading: false, data: undefined};

export const fetchData = (data) => ({
  type: FETCH_ALL_POKEMONS,
  payload: data,
});

export const isLoading = (boolean) => ({
  type: IS_LOADING_POKEMONS,
  payload: boolean
});




export const fetchGetAllPokemons = () => async (dispatch) => {
  try {
    dispatch(isLoading(true))
    dispatch(fetchData(undefined));
    let fetchAllPokemons = await fetch(
      "https://pokemon-pichincha.herokuapp.com/pokemons/?idAuthor=1"
    );
    fetchAllPokemons = await fetchAllPokemons.json();
    dispatch(fetchData(fetchAllPokemons));
    dispatch(isLoading(false))
  } catch (err) {
    dispatch(fetchData(undefined));
    dispatch(isLoading(false))
  }
};

export const fetchGetByIDPokemons = (id) => async (dispatch) => {
  try {
    dispatch(isLoading(true))
    let fetchIDPokemons = await fetch(
      `https://pokemon-pichincha.herokuapp.com/pokemons/${id}`
    );


    if(fetchIDPokemons.ok === false){
      dispatch(fetchData(undefined));
      
    } else {
      fetchIDPokemons = await fetchIDPokemons.json();
      dispatch(fetchData([fetchIDPokemons]));

    }
    
    dispatch(isLoading(false))
  } catch (err) {
    dispatch(fetchData(undefined));
    dispatch(isLoading(false))
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL_POKEMONS:
     return {...state, data: action.payload};


    case IS_LOADING_POKEMONS:
      return {...state, isLoading: action.payload};

    default:
      return state;
  }
};

export default reducer;
