import { useState } from "react";

import "./App.css";
import emojiList from "./data/emojiList.json";
import SearchBar from "./components/SearchBar";

function App() {
  const [search, setSearch] = useState("");

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  console.log("Emoji List:", emojiList);
  console.log("Search:", search);

  return (
    <main className="app">
      <h1>Emoji Search 🔎</h1>

      <p>Search for your favorite emoji.</p>

      <SearchBar
        value={search}
        onChange={handleSearchChange}
      />
    </main>
  );
}

export default App;