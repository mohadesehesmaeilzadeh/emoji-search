function EmojiCard({ symbol, title, onClick }) {
  return (
    <li>
      <button
        className="emoji-card"
        type="button"
        onClick={() => onClick(symbol, title)}
        aria-label={"Copy " + title + " emoji"}
      >
        <span className="emoji-symbol" aria-hidden="true">
          {symbol}
        </span>
        <span className="emoji-title">{title}</span>
        <span className="copy-hint" aria-hidden="true">
          Copy
        </span>
      </button>
    </li>
  );
}

export default EmojiCard;
