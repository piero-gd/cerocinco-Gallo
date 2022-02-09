import './App.css';
import NavBar from './components/NavBar'
import ItemCount from './components/ItemCount'
import ItemListContainer from './components/ItemListContainer'


function App() {
  return (
      <div className="App">
        <div>
          <NavBar />
          <ItemListContainer
            greeting="Bienvenido al Catálogo Cerocinco!" />
          <ItemCount stock={6} initial={0} />
        </div>

      </div>
  );
}

export default App;
