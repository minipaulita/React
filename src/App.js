import "./App.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting={"holis"} />
    </div>
  );
}

export default App;
