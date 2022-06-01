import { useEffect, useState } from "react";
import LoaderSpinner from "../LoaderSpinner";
import NoPokemons from "../NoPokemons";

import "./style.css";

const ListPokemon = () => {
  const [pokemonList, setPokemonList] = useState(undefined);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    initialFetchPokemons();
  }, []);

  const initialFetchPokemons = async () => {
    try {
      setLoading(true);
      let fetchAllPokemons = await fetch(
        "https://pokemon-pichincha.herokuapp.com/pokemons/?idAuthor=1"
      );
      fetchAllPokemons = await fetchAllPokemons.json();
      console.log(fetchAllPokemons)
      setPokemonList(fetchAllPokemons);
      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  };

  return (
    <div className="pokemon_table_container">
      {loading && !pokemonList && <LoaderSpinner />}

      {!loading && pokemonList && (
        <>
          {pokemonList.length ? (
            <table>
              <tr>
                <th>Nombre</th>
                <th>Imagen</th>
                <th>Ataque</th>
                <th>Defensa</th>
                <th>Acciones</th>
              </tr>

              {pokemonList.map((pokemon) => (
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
                        <ion-icon name="trash-outline"></ion-icon>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </table>
          ) : (
            <NoPokemons />
          )}
        </>
      )}
    </div>
  );
};

export default ListPokemon;
