function SearchBar({ value, onChange }) {
  return (
    <div className="search-bar">
      <label htmlFor="emoji-search">Search emojis</label>
      <div className="search-field">
        <svg
          className="search-icon"
          viewBox="0 0 24 24"
          width="22"
          height="22"
          aria-hidden="true"
        >
          <circle cx="11" cy="11" r="7" />
          <path d="m16.2 16.2 4.1 4.1" />
        </svg>
        <input
          id="emoji-search"
          type="search"
          placeholder="Try “sparkle” or “celebrate”"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          autoComplete="off"
          spellCheck="false"
        />
      </div>
    </div>
  );
}

export default SearchBar;
