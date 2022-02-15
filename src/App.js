import './App.css';
import NavBar from './components/NavBar'
import ItemCount from './components/ItemCount'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import { Routes, Route } from 'react-router-dom'
import Error from './components/Error/Error';
import { CartContext } from './context/CartContext'

function App() {
  return (
    //<CartContext.Provider>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="Navegation Routing" />} />
          <Route path="/category/:catId" element={<ItemListContainer greeting="Navegation Routing" />} />
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />
          <Route path="*" element={<Error></Error>} />
        </Routes>

        {/*<ItemListContainer greeting="Bienvenido al Catálogo Cerocinco!" /> */}

      </div>
    //</CartContext.Provider>
  );
}

export default App;
