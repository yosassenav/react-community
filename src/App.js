import "./App.css";
import SearchBar from "./components/SearchBar";
import UserCard from "./components/UserCard";
import { useEffect, useState } from "react";

function App() {
  const [usersList, setUsersList] = useState(null);
  //fetch data from randomuserapi
  useEffect(() => {
    fetch("https://randomuser.me/api/?results=30")
      .then((response) => response.json())
      .then((data) => setUsersList(data.results));
  }, []);
  return (
    <div className="App">
      <SearchBar userList={usersList} />
      {usersList ? (
        usersList.map((user) => {
          return (
            <div key={user.id.value ? user.id.value : user.email}>
              <UserCard {...user} />
            </div>
          );
        })
      ) : (
        <span>Cargando usuarios...</span>
      )}
    </div>
  );
}

export default App;
