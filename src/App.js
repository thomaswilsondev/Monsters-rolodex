import "./App.scss";
import { useState, useEffect } from "react";
import CartList from "./components/cart-list/cart-list.component";
import SearchBox from "./components/search-box/search-box.components";
function App() {
  const [field, searchField] = useState("");
  const [monsters, setMonsters] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((user) => setMonsters(user));
  }, []);
  console.log(monsters.name);
  const filteredMonsters = monsters.filter((monster) =>
    monster.name.toLowerCase().includes(field.toLowerCase())
  );
  return (
    <div className="App">
      <h1 className="text-9xl font-bold text-cyan-500">Hello world!</h1>
      <SearchBox
        placeholder="search monsters"
        handleChange={(e) => searchField(e.target.value)}
      />
      <CartList monsters={filteredMonsters} />
    </div>
  );
}

export default App;
