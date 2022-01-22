import "./App.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import { BrowserRouter, Switch, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/tienda">
            <ItemListContainer greeting={"Bienvenidx a nuestra tienda"} />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
