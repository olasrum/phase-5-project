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
import Checkout from "./Checkout";
import Confirmation from "./Confirmation";

function App() {
  const [user, setUser] = useState(null);
  const [items, setItems] = useState([]);
  const [cart, setCart] = useState([]);
  const [orders, setOrders] = useState([]);
  
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

  useEffect(() => {
    fetch("/orders")
    .then((r) => r.json())
    .then((orders) => setOrders(orders))
  }, []);

  const addItemToCart = (item) => {
    let isPresent = false;
    cart.forEach((product) => {
      if (item.id === product.id)
      isPresent = true;
    })
    if (isPresent)
        return;
    
    const requestOptions = {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({cart_item: {user_id: user.id, item_id: item.id, quantity: 1}})
    };

    fetch("/cart_items", requestOptions)
    .then(response => response.json())
    .then(data => {
      setCart([...cart, data]);
    })
  }

  const updateCartItem = (item, change) => {
    let indx = -1;
    cart.forEach((data, index) => {
      if (data.id === item.id)
        indx = index;
    });
    const tempArr = [...cart];
    tempArr[indx].quantity += change;
    if (tempArr[indx].quantity <= 0)  
      tempArr[indx].quantity = 1;

    const requestOptions = {
      method: "PATCH",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({cart_item: {quantity: tempArr[indx].quantity}})
    };

    fetch(`/cart_items/${tempArr[indx].id}`, requestOptions)
    .then(response => response.json())
    .then(() => {
      setCart(tempArr);
    })
  }

  if (!user) return <Login onLogin={setUser} />;

  return (
    <div className="main">
      <NavBar 
        size={cart.length}
        setUser={setUser}
      />
      <Switch>
        <Route exact path="/">
          <Home 
            onAddToCart={addItemToCart}
            items={items}
          />
        </Route>
        <Route exact path="/items/:id">
          <ItemDetail 
            onAddToCart={addItemToCart}
            user={user}
          />
        </Route>
        <Route exact path="/cart">
          <Cart 
            cart={cart} 
            setCart={setCart}
            onUpdateCartItem={updateCartItem}/>
        </Route>
        <Route exact path="/checkout">
          <Checkout 
            cart={cart}
            setCart={setCart}
            user={user}
            order={orders}
            />
        </Route>
        <Route path="/orders/:id">
          <Confirmation/>
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

