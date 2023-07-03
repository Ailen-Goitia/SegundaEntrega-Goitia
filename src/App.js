import './App.css';
import { ItemDetailContainer } from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import Nabvar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Carrito from './components/Carrito';
import { CartProvider } from './context/CartContext';
import Checkout from './components/Checkout';

function App() {
  return (
    <div>
      <CartProvider>
      <BrowserRouter>

      <Nabvar/>
    
      <Routes>
        <Route path="/" element = {<ItemListContainer/>}/>
        <Route path="/productos" element = {<ItemListContainer/>}/>
        <Route path="/item/:id" element = {<ItemDetailContainer/>}/>
        <Route path="/productos/:categoria" element = {<ItemListContainer/>}/>
        <Route path="/carrito" element = {<Carrito/>}/>
        <Route path="/checkout" element = {<Checkout/>}/>
      </Routes>

      </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
