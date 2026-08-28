import "./App.css";
import emojiList from "./data/emojiList.json";
import SearchBar from "./components/SearchBar";

function App() {
  console.log("Emoji List:", emojiList);

  return (
    <main className="app">
      <h1>Emoji Search 🔎</h1>

      <p>Search for your favorite emoji.</p>

      <SearchBar
        value=""
        onChange={() => {}}
      />
    </main>
  );
}

export default App;