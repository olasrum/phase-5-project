import {Route, Switch} from "react-router-dom";
import Home from "./Home";
import NavBar from "./NavBar";
import ItemDetail from "./ItemDetail";
import Footer from "./Footer";
import About from "./About";
import Contact from "./Contact";

function App() {
  return (
    <div>
      <NavBar/>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/items/:id">
          <ItemDetail/>
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
