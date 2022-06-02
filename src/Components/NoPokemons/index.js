import './style.css'

const NoPokemons = (type) => (
    // <img alt="noPokemons" src={NoPokemonsImage} width="50%" />
    <div className="noPokemonsContainer">
        <span className="noPokemons_title" >NO SE ENCONTRARON POKEMONS</span>
        {type === "no_data" && <span className="noPokemons_action">AGREGA UNO NUEVO</span>}
        {type === "not_found" && <span className="noPokemons_action">PRUEBA UN ID DIFERENTE</span>}
    </div>
)

export default NoPokemons