import React, { useState, useEffect } from "react";
import "./App.css";

/**
 * 
 * Exercise:
 * 1. fetch data from the server(json-server)only if you don't
 * have contacts in state
 * 2. create input which will filter contacts on view based in user query(input value)
 * 3. render contacts
 * 
 * Contact HTML structure
 * =======================
 *	<li>
		<p>{name}</p>
		<p className={"company"}>{company}</p>
	</li>
 */

const App = () => {
  const [contacts, setContacts] = useState([]);

  const [selectedCategory, setSelectedCategory] = useState("All");

  // Change the selected category
  const handleChange = (event) => {
    setSelectedCategory(event.target.value.toLowerCase());
  };

  const contactsToRender =
    selectedCategory === "All"
      ? contacts
      : contacts.filter((contact) =>
          contact.name.toLowerCase().includes(selectedCategory)
        );

  const fetchContacts = async (event) => {
    const contactsFetched = await fetch(
      "http://localhost:3000/contacts"
    ).then((response) => response.json());

    setContacts([...contacts, ...contactsFetched]);
  };

  if (contacts.length === 0) {
    fetchContacts();
  }

  return (
    <div className="App">
      <input type="text" placeholder="Search by name" onChange={handleChange} />

      <ul className="contacts">
        {contactsToRender.map((contact) => (
          <li key={contact.id}>
            <p>{contact.name}</p>
            <p className={"company"}>{contact.company}</p>{" "}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
