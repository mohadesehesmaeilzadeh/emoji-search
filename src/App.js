import { useMemo, useRef, useState } from "react";

import "./App.css";
import emojiList from "./data/emojiList.json";

import SearchBar from "./components/SearchBar";
import EmojiList from "./components/EmojiList";

const DEFAULT_EMOJI_COUNT = 20;

function App() {
  const [search, setSearch] = useState("");
  const [copyMessage, setCopyMessage] = useState("");
  const copyMessageTimeout = useRef(null);

  const normalizedSearch = search.trim().toLowerCase();

  const filteredEmojis = useMemo(() => {
    if (!normalizedSearch) {
      return emojiList.slice(0, DEFAULT_EMOJI_COUNT);
    }

    return emojiList.filter(({ title, keywords }) => {
      return (
        title.toLowerCase().includes(normalizedSearch) ||
        keywords.toLowerCase().includes(normalizedSearch)
      );
    });
  }, [normalizedSearch]);

  const handleCopyEmoji = async (symbol, title) => {
    window.clearTimeout(copyMessageTimeout.current);

    try {
      await navigator.clipboard.writeText(symbol);
      setCopyMessage(symbol + " " + title + " copied to your clipboard.");
    } catch {
      setCopyMessage("Copying is unavailable in this browser.");
    }

    copyMessageTimeout.current = window.setTimeout(() => {
      setCopyMessage("");
    }, 2400);
  };

  const resultLabel = normalizedSearch
    ? filteredEmojis.length +
      " " +
      (filteredEmojis.length === 1 ? "result" : "results")
    : DEFAULT_EMOJI_COUNT + " popular picks";

  return (
    <main className="app">
      <section className="hero" aria-labelledby="page-title">
        <div className="eyebrow">
          <span aria-hidden="true">✦</span>
          Quick emoji finder
        </div>

        <h1 id="page-title">
          Find the right <span>emoji</span>
        </h1>

        <p className="hero-description">
          Search by name or keyword, then select an emoji to copy it.
        </p>

        <SearchBar value={search} onChange={setSearch} />
      </section>

      <section className="results" aria-labelledby="results-title">
        <div className="results-header">
          <h2 id="results-title">
            {normalizedSearch ? "Search results" : "Start with a favorite"}
          </h2>
          <p aria-live="polite">{resultLabel}</p>
        </div>

        {normalizedSearch && filteredEmojis.length === 0 ? (
          <div className="empty-state">
            <span className="empty-state-emoji" aria-hidden="true">
              🫥
            </span>
            <h3>No emoji found</h3>
            <p>Try a broader word like “happy,” “food,” or “heart.”</p>
          </div>
        ) : (
          <EmojiList emojis={filteredEmojis} onEmojiClick={handleCopyEmoji} />
        )}
      </section>

      <div className="sr-only" role="status" aria-live="polite" aria-atomic="true">
        {copyMessage}
      </div>

      {copyMessage && (
        <div className="copy-message" aria-hidden="true">
          <span className="copy-message-icon" aria-hidden="true">
            ✓
          </span>
          {copyMessage}
        </div>
      )}
    </main>
  );
}

export default App;
