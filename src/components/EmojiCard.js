function EmojiCard({ symbol, title }) {
  return (
    <div className="emoji-card">
      <span className="emoji-symbol">{symbol}</span>

      <span className="emoji-title">{title}</span>
    </div>
  );
}

export default EmojiCard;