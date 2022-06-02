import { useDispatch, useSelector } from 'react-redux';
import { isLoading } from '../redux/main/getPokemons';
import { fetchGetAllPokemons } from '../redux/main/getPokemons';

export const useHttpClient = () => {
  const {pokemonData} = useSelector((state) => state.postputPokemons);
  const dispatch = useDispatch();

 
  const deletePokemon = async (id) => {

    let deletedConfirmation = window.confirm(`Estas seguro de querer eliminar el registro ${id}`);


    if(deletedConfirmation){

      try {
        dispatch(isLoading(true))
        await fetch(
          `https://pokemon-pichincha.herokuapp.com/pokemons/${id}`, {
            method: 'DELETE'
          }
        );
        
        dispatch(fetchGetAllPokemons())
      } catch (err) {
        dispatch(isLoading(false))
      }


    }
  }
  
  const postPokemon = async () => {


      try {
        await fetch(
          `https://pokemon-pichincha.herokuapp.com/pokemons/?idAuthor=1`, {
            method: 'POST', 
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              name: pokemonData.name,
              image: pokemonData.image,
              attack: pokemonData.attack,
              defense: pokemonData.defense,
              type: 'normal',
              hp: 100,
              idAuthor: "1"
            })
          }
        );
        
        dispatch(fetchGetAllPokemons())
      } catch (err) {
        console.log('error')
        console.log(err)
        dispatch(isLoading(false))
      }


    
  }



    
  return { postPokemon, deletePokemon };
};
