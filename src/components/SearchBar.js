function SearchBar({ value, onChange }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search for an emoji..."
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default SearchBar;