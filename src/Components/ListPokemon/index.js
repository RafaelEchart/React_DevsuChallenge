import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchGetAllPokemons } from '../../redux/main/getPokemons';
import { useHttpClient } from '../../shared-hooks/http-hook'



import LoaderSpinner from "../LoaderSpinner";
import NoPokemons from "../NoPokemons";

import "./style.css";

const ListPokemon = () => {
  const {isLoading, data} = useSelector((state) => state.getPokemons);
  const dispatch = useDispatch();
  const { deletePokemon } = useHttpClient()



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
                <tr key={pokemon.id}>
                  <td>{pokemon.name}</td>
                  <td className="pokemon_image">
                    <img
                      src={pokemon.image}
                      width="25"
                      alt="pokemon_image"
                    />
                  </td>
                  <td>{pokemon.attack}</td>
                  <td>{pokemon.defense}</td>
                  <td>
                    <div className="pokemon_action_buttons">
                      <div className="pokemon_edit_icon">
                        <ion-icon name="create-outline"></ion-icon>
                      </div>

                      <div className="pokemon_delete_icon">
                        <ion-icon name="trash-outline" onClick={()=> deletePokemon(pokemon.id) }></ion-icon>
                      </div>
                    </div>
                  </td>
                </tr>
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
