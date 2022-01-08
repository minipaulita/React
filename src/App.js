import "./App.css";
import NavBar from "./components/NavBar";
import ItemList from "./components/ItemListContainer";
function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemList greeting={"holis"} />
    </div>
  );
}

export default App;
