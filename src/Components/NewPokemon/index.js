import './style.css'

const NewPokemon = () => {

    return (
        <div className="new_pokemon_container" >
        <span className="new_pokemon_title">Nuevo Pokemon</span>

        <div className="new_pokemon_input_container">

        <div className="side_container">
          <div className="new_pokemon_one_input_container">
          <label>Nombre:</label>
          <input type="text" name="nombre"/>
          </div>  
          <div className="new_pokemon_one_input_container">
          <label>Imagen:</label>
          <input type="text" name="imagen"/>
          </div>  
        </div>
        
        
        <div className="side_container">
          <div className="new_pokemon_one_input_container">
          <label>Ataque:</label>
          <div className="new_pokemon_one_range">
          <span>
            1
          </span>
          <input type="range" min="1" max="100"/>
          <span>
            100
          </span>
          </div>

          </div>  
          <div className="new_pokemon_one_input_container">
          <label>Defensa:</label>
          <div className="new_pokemon_one_range">
          <span>
            1
          </span>
          <input type="range" min="1" max="100"/>
          <span>
            100
          </span>
          </div>

          </div>  
        </div>

        </div>

        <div className="action_button_container">
            <button type="button" className="newbutton action_button">
            <div className="newbutton_icon">
            <ion-icon name="save-outline"></ion-icon>
            </div>
            <div className="newbutton_text">
              Guardar
            </div>
            </button>
            <button type="button" className="newbutton action_button">
            <div className="newbutton_icon">
            <ion-icon name="close-outline"></ion-icon>
            </div>
            <div className="newbutton_text">
              Cancelar
            </div>
            </button>
        </div>

        </div>
    )
}

export default NewPokemon;