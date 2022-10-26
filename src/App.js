import "./App.css";
import NavBar from "./components/NavBar";
import { useEffect, useState } from "react";
import SideBar from "./components/SideBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MenuPage from "./Pages/MenuPage";
import LoginPage from "./Pages/LoginPage";
import Customize from "./Pages/Customize";
import Cart from "./components/Cart";
import Checkout from "./Pages/Checkout";
import Success from "./Pages/Success";
import LoginModule from "./components/Users/LoginModule";
import Aos from "aos";
import Landing from "./Pages/Landing";
import MainFooter from "./components/MainFooter";
import ItemEditor from "./Pages/ItemEditor";

function App() {
  Aos.init();
  const [user, setUser] = useState();
  const [openSideBar, setOpenSideBar] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);
  const [cart, setCart] = useState([]);
  const [localStorage, setLocalStorage] = useState();
  const [customize, setCustomize] = useState();
  const [openCart, setOpenCart] = useState(false);
  const [subtotal, setSubtotal] = useState(0);
  const [editingItem, setEditingItem] = useState();
  const [list, setList] = useState([]);
  const storage = window.localStorage.getItem("items");
  const isLoggedIn = window.localStorage.getItem("user");

  useEffect(() => {
    setCart([]);
    if (isLoggedIn && user === undefined) {
      setUser(isLoggedIn);
    }
    if (storage == undefined) {
      setCart([]);
      return;
    } else {
      setCart(JSON.parse(storage));
    }
  }, []);

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <NavBar
            openLogin={openLogin}
            setOpenLogin={setOpenLogin}
            user={user}
            cart={cart}
            openSideBar={openSideBar}
            openCart={openCart}
            setOpenCart={setOpenCart}
            setOpenSideBar={setOpenSideBar}
          />
          {openSideBar === true && <SideBar />}
          {openCart === true && <Cart />}
          {openLogin === true && (
            <LoginModule
              setUser={setUser}
              setOpenLogin={setOpenLogin}
              openLogin={openLogin}
              user={user}
            />
          )}
        </header>
        <Routes>
          <Route
            index
            path="/"
            element={
              <>
                <Landing />
                <MainFooter />
              </>
            }
          ></Route>
          <Route
            path="/signup"
            element={
              <>
                <LoginPage setUser={setUser} />
                <MainFooter />
              </>
            }
          ></Route>
          <Route
            path="/ItemEditor"
            element={
              <ItemEditor
                cart={cart}
                uid={editingItem}
                customize={customize}
                setLocalStorage={setLocalStorage}
                setCart={setCart}
              />
            }
          />
          <Route
            path="/menu"
            element={
              <>
                <MenuPage
                  setList={setList}
                  list={list}
                  setCustomize={setCustomize}
                />
                <MainFooter />
              </>
            }
          ></Route>
          <Route
            path="/customize"
            element={
              <>
                <Customize
                  setLocalStorage={setLocalStorage}
                  setCart={setCart}
                  cart={cart}
                  customize={customize}
                />
                <MainFooter />
              </>
            }
          ></Route>
          <Route
            path="/cart"
            element={
              <>
                <Cart
                  localStorage={storage}
                  setEditingItem={setEditingItem}
                  setSubtotal={setSubtotal}
                  cart={cart}
                  setCart={setCart}
                  setOpenCart={setOpenCart}
                />
                <MainFooter />
              </>
            }
          ></Route>
          <Route
            path="/checkout"
            element={
              <>
                <Checkout
                  subtotal={subtotal}
                  cart={cart}
                  setOpenCart={setOpenCart}
                />
                <MainFooter />
              </>
            }
          ></Route>
          <Route
            path="/success"
            element={<Success user={user} setCart={setCart} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
