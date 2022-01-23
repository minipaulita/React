import "./App.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import Fo from "./Footer";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ItemDetailContainer from "./components/itemDetailContainer";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/">
            <ItemDetailContainer />
          </Route>

          <Route exact path="/tienda">
            <ItemListContainer greeting={"Bienvenidx a nuestra tienda"} />
          </Route>
        </Switch>
      </div>
      <Fo />
    </BrowserRouter>
  );
}

export default App;
