import React, { useState } from "react";
import "./App.css";
// import Users from "./Users";
/**
 * Create a User List app
 *
 * 1. create a state where you will store your users.
 * 2. I want to render all users from my state.
 * 3. add button with class "newUser"
 * 4. when I click on a "newUser" button I want to fetch a new user,
 * add it to state.
 * 5. On user element I want to have full name and button to remove a user.
 * 6. when I click "remove" button, it should remove selected user from my state.
 
 * NOTE: API for random user - "https://randomuser.me/api/"
 *
 * FEEL FREE TO STYLE YOUR APP WITH CSS
 */

function App() {
  const [users, setUsers] = useState([]);

  const clickAndFetchNewUser = async () => {
    const user = await fetch("https://randomuser.me/api/").then((response) =>
      response.json()
    );

    setUsers([...users, ...user.results]);
  };

  const clickAndDeleteUser = (index) => {
    setUsers(users.filter((user, i) => i !== index));
  };

  return (
    <div className="wrapper">
      <button className="newUser" onClick={clickAndFetchNewUser}>
        New User
      </button>
      <ul className="users">
        {users.map((user, index) => (
          <li key={index} className="user">
            <div className="name">
              <div className="imageWrapper">
                <img src={user.picture.large} alt="" />
              </div>

              <h3>
                {user.name.title}. {user.name.first} {user.name.last}
              </h3>
            </div>
            <div className="details">
              <h4>Phone: </h4>
              <p>{user.phone}</p>
              <h4>Email: </h4>
              <p>{user.email}</p>
              <h4>Address: </h4>
              <p>
                {user.location.street.number} {user.location.street.name}
              </p>
              <p>{user.location.city}</p>
              <p>{user.location.country}</p>
            </div>
            <div className="button">
              <button onClick={() => clickAndDeleteUser(index)}>Remove</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
