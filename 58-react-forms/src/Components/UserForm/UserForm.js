import React, { useState } from "react";
import "./UseForm.css";

/* Exercise 2
 * 1. Create component UserForm.
 * 2. UserForm needs to have state {user} with properties:
 * 	- firstName, - lastName, - age, - gender.
 * 3. UserForm should contain 4 inputs:
 * - firstName(type: "text", class: firstName)
 * - lastName(type: "text", class: lastName)
 * - age(type: "number", class: age)
 * - gender(type="select" class: gender,)
 * 4. When the value of any input changes, user state needs to reflect that.
 * 5. On form submit post your user to database. Validate data.
 * If any value is missing, you shouldn't post user to database.
 *
 * IMPORTANT: create div with class "state" and render there
 * all properties from {user} state.
 */

const UserForm = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    age: 0,
    genders: "",
  });

  const postUser = async (user) => {
    await fetch("http://localhost:3001/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => {
        if (response.ok) {
          console.log("OK");
          return response;
        } else {
          console.log("Oops something went wrong");
        }
      })
      .catch((error) => {
        console.log("Ooops", error);
      });
  };

  const userAdd = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
    event.target.value = "";
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    postUser(user);
  };

  return (
    <div className="state">
      <form onSubmit={handleSubmit} className="userForm">
        <label htmlFor="">First name:</label>
        <input
          value={user.firstName}
          name="firstName"
          className="firstName"
          type="text"
          placeholder="First Name"
          onChange={userAdd}
          required
        />
        <label htmlFor=""> Last name:</label>
        <input
          value={user.lastName}
          name="lastName"
          className="lastName"
          type="text"
          placeholder="Last Name"
          onChange={userAdd}
          required
        />
        <label htmlFor=""> What is your age? </label>
        <input
          value={user.age}
          name="age"
          className="age"
          type="number"
          placeholder="Age"
          onChange={userAdd}
          required
        />

        <label htmlFor=""> Select your gender:</label>
        <select
          type="select"
          className="gender"
          name="genders"
          value={user.gender}
          onChange={userAdd}
          required
        >
          <option> - - - - - - - </option>
          <option value="male">male</option>
          <option value="female">female</option>
          <option value="Prefer, not to say">Prefer, not to say</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UserForm;
