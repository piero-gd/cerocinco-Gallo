import './App.css';
import NavBar from './components/NavBar'
import ItemCount from './components/ItemCount'
//import ImagePoloBlanco from './images/polo-blanco-basico.jpg'
import ItemListContainer from './components/ItemListContainer'


function App() {
  return (
    <div className="App">
      <div>
        <NavBar />
        {/*<h3>Artículos</h3>*/}
        <ItemListContainer
        //imgSrc={ImagePoloBlanco}
        greeting="Bienvenido al Catálogo Cerocinco!"/>
        <ItemCount stock={6} initial={0} />
      </div>

      {/*
      <h3>Who to Follow</h3>
      <AccountInfo
        imgSrc={ImageEstefania}
        accountInfo="@MrRobotUy"
        numeroSeguidores={2}
      />
      */}
      
    </div>
  );
}

export default App;
