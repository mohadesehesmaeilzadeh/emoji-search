import { useState } from "react";

import "./App.css";
import emojiList from "./data/emojiList.json";
import SearchBar from "./components/SearchBar";

function App() {
  const [search, setSearch] = useState("");

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const filteredEmojis = emojiList.filter((emoji) => {
    const searchText = search.toLowerCase();

    return (
      emoji.title.toLowerCase().includes(searchText) ||
      emoji.keywords.toLowerCase().includes(searchText)
    );
  });

  return (
    <main className="app">
      <h1>Emoji Search 🔎</h1>

      <p>Search for your favorite emoji.</p>

      <SearchBar
        value={search}
        onChange={handleSearchChange}
      />

      <p>
        Results: {filteredEmojis.length}
      </p>
    </main>
  );
}

export default App;