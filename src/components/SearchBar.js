function SearchBar({ handleChange }) {
  return (
    <div className="search-bar">
      <label>Filtrar usuarios: </label>
      <input
        onChange={handleChange}
        type="text"
        placeholder="Escribe usuario..."
      />
    </div>
  );
}

export default SearchBar;
