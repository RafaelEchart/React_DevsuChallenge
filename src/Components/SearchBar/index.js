import './style.css'

const SearchBar = () => {

    return (
        
        <div className="search_bar">
        <div className="search_bar_icon">
        <ion-icon name="search-outline"></ion-icon>
        </div>    
        <input placeholder="Buscar" className="search_bar_input"/>
        </div>
        
    )

}

export default SearchBar;