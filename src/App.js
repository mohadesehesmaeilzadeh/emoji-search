import { useState } from "react";

import "./App.css";
import emojiList from "./data/emojiList.json";

import SearchBar from "./components/SearchBar";
import EmojiList from "./components/EmojiList";

function App() {
  const [search, setSearch] = useState("");
  const [copiedEmoji, setCopiedEmoji] = useState("");

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const handleCopyEmoji = async (symbol) => {
    await navigator.clipboard.writeText(symbol);

    setCopiedEmoji(symbol);

    setTimeout(() => {
      setCopiedEmoji("");
    }, 1500);
  };

  const normalizedSearch = search.trim().toLowerCase();

  const filteredEmojis = emojiList.filter((emoji) => {
    return (
      emoji.title.toLowerCase().includes(normalizedSearch) ||
      emoji.keywords.toLowerCase().includes(normalizedSearch)
    );
  });

  const displayedEmojis = normalizedSearch
    ? filteredEmojis
    : emojiList.slice(0, 20);

  return (
    <main className="app">
      <h1>Emoji Search 🔎</h1>

      <p>Search for your favorite emoji.</p>

      <SearchBar
        value={search}
        onChange={handleSearchChange}
      />

      {copiedEmoji && (
        <p className="copy-message">
          {copiedEmoji} Copied! ✅
        </p>
      )}

      {normalizedSearch && (
        <p className="result-count">
          Results: {filteredEmojis.length}
        </p>
      )}

      {normalizedSearch && filteredEmojis.length === 0 ? (
        <p className="no-results">
          No emojis found 😢
        </p>
      ) : (
        <EmojiList
          emojis={displayedEmojis}
          onEmojiClick={handleCopyEmoji}
        />
      )}
    </main>
  );
}

export default App;