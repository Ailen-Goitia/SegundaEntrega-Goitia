import './App.css';
import { ItemDetailContainer } from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import Nabvar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nosotros from './components/Nosotros';

function App() {
  return (
    <div>
      <BrowserRouter>

      <Nabvar/>
    
      <Routes>
        <Route path="/" element = {<ItemListContainer/>} />
        <Route path="/item/:id" element = {<ItemDetailContainer/>}/>
        <Route path="/productos" element = {<ItemListContainer/>}/>
        <Route path="/productos/:categoria" element = {<ItemListContainer/>}/>
        <Route path="/" element = {<ItemListContainer/>} />
      </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
