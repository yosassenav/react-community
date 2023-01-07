import "./App.css";
import SearchBar from "./components/SearchBar";
import UserCard from "./components/UserCard";
import { useEffect, useState } from "react";

function App() {
  const [usersList, setUsersList] = useState(null);
  const [string, setString] = useState("");
  const [filteredUsers, setFilter] = useState(null);

  //fetch data from randomuserapi
  useEffect(() => {
    fetch("https://randomuser.me/api/?results=30")
      .then((response) => response.json())
      .then((data) => setUsersList(data.results));
  }, []);

  const handleChange = (event) => {
    setString(event.target.value);
    const filter = usersList.filter((user) =>
      user.name.first.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setFilter(filter);
  };

  return (
    <main className="App">
      <SearchBar handleChange={handleChange} />
      <ul className="user-list">
        {usersList && !string ? (
          usersList.map((user) => {
            return (
              <li key={user.id.value ? user.id.value : user.email}>
                <UserCard {...user} />
              </li>
            );
          })
        ) : usersList && string ? (
          filteredUsers.map((user) => {
            return (
              <li key={user.id.value ? user.id.value : user.email}>
                <UserCard {...user} />
              </li>
            );
          })
        ) : (
          <span>Cargando usuarios...</span>
        )}
      </ul>
    </main>
  );
}

export default App;
