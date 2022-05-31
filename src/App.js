import logo from './logo.svg';
import './App.css';
import Title from './Components/Title'
import SearchBar from './Components/SearchBar'
import NewButton from './Components/NewButton'

function App() {

  return (
    <div className="App">
      <Title/>
      <div className="Search_New_Align">
      <SearchBar/>
      <NewButton/>
      
      </div>
    </div>
  );
}

export default App;
