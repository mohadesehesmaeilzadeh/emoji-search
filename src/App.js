import "./App.css";
import emojiList from "./data/emojiList.json";

function App() {
  console.log("Emoji List:", emojiList);
  console.log("Emoji Count:", emojiList.length);

  return (
    <main className="app">
      <h1>Emoji Search 🔎</h1>

      <p>Search for your favorite emoji.</p>

      <h2>
        {emojiList[0].symbol} {emojiList[0].title}
      </h2>
    </main>
  );
}

export default App;