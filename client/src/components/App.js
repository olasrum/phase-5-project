import {Route, Switch} from "react-router-dom";
import {useState, useEffect} from "react";
import Home from "./Home";
import NavBar from "./NavBar";
import ItemDetail from "./ItemDetail";
import Footer from "./Footer";
import About from "./About";
import Contact from "./Contact";
import Cart from "./Cart";
import Login from "./Login";

function App() {
  const [user, setUser] = useState(null);
  const [items, setItems] = useState([]);
  const [cart, setCart] = useState([]);
  const [warning, setWarning] = useState(false);
  
  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  useEffect(() => {
      fetch("/items")
      .then((r) => r.json())
      .then((items) => setItems(items))
  }, []);

  const addItemToCart = (item) => {
    let isPresent = false;
    cart.forEach((product) => {
      if (item.id === product.id)
      isPresent = true;
    })
    if (isPresent) {
        setWarning(true);
        setTimeout(() => {
          setWarning(false);
        }, 2000);
        return;
    }  
    setCart([...cart, item]);
  }

  const updateCartItem = (item, change) => {
    let indx = -1;
    cart.forEach((data, index) => {
      if (data.id === item.id)
        indx = index;
    });
    const tempArr = cart;
    tempArr[indx].amount += change;
    if (tempArr[indx].amount === 0)  
      tempArr[indx].amount = 1;
    setCart([...tempArr])
  }

  if (!user) return <Login onLogin={setUser} />;

  return (
    <div className="main">
      <NavBar 
        size={cart.length}
        setUser={setUser}
      />
      {
        warning && <div className="warning">Item is already added to your cart</div>
      }
      <Switch>
        <Route exact path="/">
          <Home 
            onAddToCart={addItemToCart}
            items={items}
          />
        </Route>
        <Route exact path="/items/:id">
          <ItemDetail onAddToCart={addItemToCart}/>
        </Route>
        <Route exact path="/cart">
          <Cart 
            cart={cart} 
            setCart={setCart}
            onUpdateCartItem={updateCartItem}/>
        </Route>
        <Route exact path="/about">
          <About/>
        </Route>
        <Route exact path="/contact">
          <Contact/>
        </Route>
      </Switch> 
      <br></br>
      <Footer/>
    </div>
  );
}

export default App;
