import "./style.css";

const ListPokemon = () => {
  return (
    <div className="pokemon_table_container">
      <table>
        <tr>
          <th>Nombre</th>
          <th>Imagen</th>
          <th>Ataque</th>
          <th>Defensa</th>
          <th>Acciones</th>
        </tr>
       
        <tr>
          <td>Ivysaur</td>
          <td className="pokemon_image"><img src="https://assets.nintendo.com/image/upload/ar_4:3,c_pad,dpr_2.0,f_auto,q_auto,w_400/v1/ncom/en_US/games/switch/p/pokemon-legends-arceus-switch/egdp/pokemon-1" width="25" alt="pokemon_image"/></td>
          <td>65</td>
          <td>38</td>
          <td className="pokemon_action_buttons">
            <div className="pokemon_edit_icon">
            <ion-icon name="create-outline"></ion-icon>
            </div>

            <div className="pokemon_delete_icon">
            <ion-icon name="trash-outline"></ion-icon>
            </div>
            </td>
        </tr>
      </table>
    </div>
  );
};

export default ListPokemon;
