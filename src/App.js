import './App.css';
import { ItemDetailContainer } from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import Nabvar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nosotros from './components/Nosotros';
import Contacto from './components/Contacto';
import Carrito from './components/Carrito';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <div>
      <CartProvider>
      <BrowserRouter>

      <Nabvar/>
    
      <Routes>
        <Route path="/" element = {<ItemListContainer/>} />
        <Route path="/item/:id" element = {<ItemDetailContainer/>}/>
        <Route path="/productos" element = {<ItemListContainer/>}/>
        <Route path="/productos/:categoria" element = {<ItemListContainer/>}/>
        <Route path="/nosotros" element = {<Nosotros/>} />
        <Route path="/contacto" element = {<Contacto/>}/>
        <Route path="/carrito" element = {<Carrito/>}/>
      </Routes>

      </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
