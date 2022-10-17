import './App.css';
import NavBar from './components/NavBar';
import { useEffect, useState } from 'react';
import SideBar from './components/SideBar';
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom';
import MenuPage from './Pages/MenuPage';
import LoginPage from './Pages/LoginPage';
import Customize from './Pages/Customize';
import Cart from './components/Cart';
import Checkout from './Pages/Checkout';
import Success from './Pages/Success';


function App() {

  const [openSideBar, setOpenSideBar] = useState(false);
  const [cart, setCart] = useState([]);
  const [localStorage, setLocalStorage] = useState();
  const [customize, setCustomize] = useState();
  const [openCart, setOpenCart] = useState(false);
  const [subtotal, setSubtotal] = useState(0);
  const storage = window.localStorage.getItem('items');
  
useEffect(() => {
  setCart([])
  if(storage == undefined){
    setCart([])
    return
  }
  else {
    setCart(JSON.parse(storage))
    
  }
}, []);

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <NavBar cart={cart} openSideBar={openSideBar} openCart={openCart} setOpenCart={setOpenCart}  setOpenSideBar={setOpenSideBar}/>
          {openSideBar === true &&<SideBar/>}
          {openCart === true && <Cart/>}
        </header>
          <Routes>
            <Route path="/signup" element={<LoginPage/>}></Route>
            <Route index path="/" element={<MenuPage setCustomize={setCustomize}/>}></Route>
            <Route path="/customize" element={<Customize setLocalStorage={setLocalStorage} setCart={setCart} cart={cart} customize={customize}/>}></Route>
            <Route path="/cart" element={<Cart setSubtotal={setSubtotal} cart={cart} setOpenCart={setOpenCart}/>}></Route>
            <Route path="/checkout" element={<Checkout subtotal={subtotal} cart={cart} setOpenCart={setOpenCart}/>}></Route>
            <Route path="/success" element={<Success setCart={setCart}/>}/>
          </Routes>
          
      </div>
    </Router>
  );
}

export default App;
