import './App.css';
import NavBar from './components/NavBar';
import AccountInfo from './components/AccountInfo';
import ImageEstefania from './img/estefania-400x400.jpeg'
import ImagePoloBlanco from './img/polo-blanco-basico.jpg'
import ItemListContainer from './components/ItemListContainer'


function App() {
  return (
    <div className="App">
      <div>
        <NavBar />
        <h3>Artículos</h3>
        <ItemListContainer
        imgSrc={ImagePoloBlanco}
        greeting="Polo Blanco Básico Cerocinco"/>
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
