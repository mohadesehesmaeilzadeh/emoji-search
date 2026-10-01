import EmojiCard from "./EmojiCard";

function EmojiList({ emojis, onEmojiClick }) {
  return (
    <ul className="emoji-list" aria-label="Emojis">
      {emojis.map((emoji, index) => (
        <EmojiCard
          key={emoji.title + "-" + emoji.symbol + "-" + index}
          symbol={emoji.symbol}
          title={emoji.title}
          onClick={onEmojiClick}
        />
      ))}
    </ul>
  );
}

export default EmojiList;
