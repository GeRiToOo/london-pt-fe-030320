import React, { useState } from "react";
import "./App.scss";
import UserCard from "./components/UserCard/UserCard";

/**
 * Exercise
 * 1. fetch data and store it in {users} state.
 * 2. Pass user data as {user} prop for UserCard component and render all users.
 * 3. In UserCard component, render user name, and user email.
 * Inside UserCard add class "card" to wrapper.
 *
 * NOTE: DB url - http://localhost:3000/contacts
 */

const App = () => {
  const [users, setUsers] = useState([]);

  const userFetched = async () => {
    const contactsFetched = await fetch(
      "http://localhost:3000/contacts"
    ).then((response) => response.json());
    setUsers([...users, ...contactsFetched]);
  };
  console.log(users);

  if (users.length === 0) {
    userFetched();
  }

  return (
    <div className="cards">
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};

export default App;
