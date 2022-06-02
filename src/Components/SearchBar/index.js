import { useDispatch } from 'react-redux'
import { fetchGetByIDPokemons } from '../../redux/main/getPokemons'
import { fetchGetAllPokemons } from '../../redux/main/getPokemons'
import './style.css'

const SearchBar = () => {
    const dispatch = useDispatch();


    const searchBarHandler = (input) => {
        console.log(input)
        if(input.length){
            console.log("by id")
            dispatch(fetchGetByIDPokemons(input))
        } else {
            console.log("all pokemons")
            dispatch(fetchGetAllPokemons())
        }
    }

    return (
        
        <div className="search_bar">
        <div className="search_bar_icon">
        <ion-icon name="search-outline"></ion-icon>
        </div>    
        <input placeholder="Buscar" onChange={(input) => searchBarHandler(input.target.value)} className="search_bar_input"/>
        </div>
        
    )

}

export default SearchBar;