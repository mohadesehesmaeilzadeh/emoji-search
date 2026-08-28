function EmojiCard({ symbol, title, onClick }) {
  return (
    <div
      className="emoji-card"
      onClick={() => onClick(symbol)}
    >
      <span className="emoji-symbol">
        {symbol}
      </span>

      <span className="emoji-title">
        {title}
      </span>
    </div>
  );
}

export default EmojiCard;