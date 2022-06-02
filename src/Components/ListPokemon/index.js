import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchGetAllPokemons } from '../../redux/main/getPokemons';
import IndividualPokemon from './IndividualPokemon'




import LoaderSpinner from "../LoaderSpinner";
import NoPokemons from "../NoPokemons";

import "./style.css";

const ListPokemon = () => {
  const {isLoading, data} = useSelector((state) => state.getPokemons);
  const dispatch = useDispatch();



  useEffect(() => {
    dispatch(fetchGetAllPokemons())
  }, []);



  
  return (
    <div className="pokemon_table_container">
      {isLoading && !data && <LoaderSpinner />}

      {!isLoading && data && (
        <>
          {data.length ? (
            <table>
              <tr>
                <th>Nombre</th>
                <th>Imagen</th>
                <th>Ataque</th>
                <th>Defensa</th>
                <th>Acciones</th>
              </tr>

              {data.map((pokemon) => (
                <IndividualPokemon pokemon={pokemon} />
              ))}
            </table>
          ) : (
            <NoPokemons type="no_data" />
          )}

        </>
      )}

      {!isLoading && !data && <NoPokemons type="not_found" />}
    </div>
  );
};

export default ListPokemon;
