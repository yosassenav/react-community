import { useState } from "react";
function SearchBar(props) {
  const [string, setString] = useState("");

  const handleChange = (event) => {
    setString(event.target.value);
    const filter = props.userList.filter((user) =>
      user.name.first.toLowerCase().includes(event.target.value.toLowerCase())
    );
    console.log(filter);
  };
  return (
    <div>
      <label>Filtrar usuarios</label>
      <input
        onChange={handleChange}
        value={string}
        type="text"
        placeholder="Escribe usuario..."
      />
    </div>
  );
}

export default SearchBar;
