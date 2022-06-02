import './style.css'

const NoPokemons = (props) => (
    <div className="noPokemonsContainer">
        <span className="noPokemons_title" >NO SE ENCONTRARON POKEMONS</span>
        {props.type === "no_data" && <span className="noPokemons_action">AGREGA UNO NUEVO</span>}
        {props.type === "not_found" && <span className="noPokemons_action">PRUEBA UN ID DIFERENTE</span>}
    </div>
)

export default NoPokemons