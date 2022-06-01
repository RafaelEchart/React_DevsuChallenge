import { useState } from 'react'
import './App.css';
import Title from './Components/Title'
import SearchBar from './Components/SearchBar'
import NewButton from './Components/NewButton'
import ListPokemon from './Components/ListPokemon'
import NewPokemon from './Components/NewPokemon'

function App() {

  return (
    <div className="App">
      <Title/>
      <div className="Search_New_Align">
      <SearchBar/>
      <NewButton/>
      </div>
      <ListPokemon/>
      <NewPokemon/>

    </div>
  );
}

export default App;
