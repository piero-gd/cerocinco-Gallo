import './App.css';
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import AddItemContainer from './components/AddItemContainer'
import { Routes, Route } from 'react-router-dom'
import Error from './components/Error/Error';
import { CartContextProvider } from './context/CartContext'
import Cart from './components/Cart';
import Success from './components/Success';

function App() {
  return (
    <CartContextProvider>
      
        <div className="App">
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer greeting="Navegation Routing" />} />
            <Route path="/category/:catId" element={<ItemListContainer greeting="Navegation Routing" />} />
            <Route path="/item/:productId" element={<ItemDetailContainer />} />
            <Route path="/Cart" element={<Cart />} />
            <Route exact path="/item/add" element={<AddItemContainer />} />
            <Route path="/success" element ={<Success />} />
            <Route path="*" element={<Error></Error>} />
          </Routes>

          {/*<ItemListContainer greeting="Bienvenido al Catálogo Cerocinco!" /> */}
        </div>
      
    </CartContextProvider>
  );
}

export default App;
