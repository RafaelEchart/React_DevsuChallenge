import { useDispatch, useSelector } from 'react-redux';
import { cancelPokemon } from '../../redux/main/post_updatePokemon';
import { handleInput } from '../../redux/main/post_updatePokemon';
import { useHttpClient } from '../../shared-hooks/http-hook'
import LoaderSpinner from '../LoaderSpinner'
import "./style.css";

const NewPokemon = () => {

  const { postPokemon } = useHttpClient()


  const {open, pokemonData, isLoading} = useSelector((state) => state.postputPokemons);
  const dispatch = useDispatch();

  const inputHandler = (input) => {
    const inputName = input.target.name
    const inputValue = input.target.value
    
    dispatch(handleInput({...pokemonData, [inputName]: inputValue}))
  }

  return (
   <>
    {open && <div className="new_pokemon_container">
      <span className="new_pokemon_title">{pokemonData.id ? `Editando Pokemon ID ${pokemonData.id}` : "Nuevo Pokemon"}</span>

      <div className="new_pokemon_input_container">
        <div className="side_container">
          <div className="new_pokemon_one_input_container">
            <label>Nombre:</label>
            <input type="text" name="name" onChange={(e)=>inputHandler(e) } value={pokemonData.name ? `${pokemonData.name}` : ""} />
          </div>
          <div className="new_pokemon_one_input_container">
            <label>Imagen:</label>
            <input type="text" name="image" onChange={(e)=>inputHandler(e) } value={pokemonData.image ? `${pokemonData.image}` : ""}/>
          </div>
        </div>

        <div className="side_container">
          <div className="new_pokemon_one_input_container">
            <label>Ataque:</label>
            <div className="new_pokemon_one_range">
              <span>1</span>
              <div class="tooltip">
                <input
                  name="attack"
                  type="range"
                  min="1"
                  max="100"
                  className="new_pokemon_range"
                  onChange={(e)=>inputHandler(e) }
                  value={pokemonData.attack ? `${pokemonData.attack}` : "0"}
                />

                <span className="tooltiptext">{pokemonData.attack}</span>
              </div>
              <span>100</span>
            </div>
          </div>
          <div className="new_pokemon_one_input_container">
            <label>Defensa:</label>
            <div className="new_pokemon_one_range">
              <span>1</span>
              <div class="tooltip">
                <input
                  name="defense"
                  type="range"
                  min="1"
                  max="100"
                  className="new_pokemon_range"
                  onChange={(e)=>inputHandler(e) }
                  value={pokemonData.defense ? `${pokemonData.defense}` : "0"}
                />

                <span className="tooltiptext">{pokemonData.defense}</span>
              </div>
              <span>100</span>
            </div>
          </div>
        </div>
      </div>

      <div className="action_button_container">
        <button type="button" className="newbutton action_button" onClick={()=>{pokemonData.id ? postPokemon() : postPokemon()}}>
          <div className="newbutton_icon">
            <ion-icon name="save-outline"></ion-icon>
          </div>
          <div className="newbutton_text">Guardar</div>
        </button>
        <button type="button" className="newbutton action_button" onClick={()=>{dispatch(cancelPokemon())}}>
          <div className="newbutton_icon">
            <ion-icon name="close-outline"></ion-icon>
          </div>
          <div className="newbutton_text">Cancelar</div>
        </button>
      </div>
    </div>}

    {isLoading && <LoaderSpinner/>}
   </>
  );
};

export default NewPokemon;
