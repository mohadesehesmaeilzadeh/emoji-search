import EmojiCard from "./EmojiCard";

function EmojiList({ emojis }) {
  return (
    <div className="emoji-list">
      {emojis.map((emoji, index) => (
        <EmojiCard
          key={index}
          symbol={emoji.symbol}
          title={emoji.title}
        />
      ))}
    </div>
  );
}

export default EmojiList;