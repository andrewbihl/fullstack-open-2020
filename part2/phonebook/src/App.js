import React, { useState } from "react";
import Contact from "./components/Contact";

const App = (props) => {
  const [persons, setPersons] = useState([{ name: "Andrew Bihl" }]);

  const [newName, setNewName] = useState("");

  const submitNewName = () => {
    setPersons(persons.concat({ name: newName }));
    setNewName("");
  }

  const handleContactSubmit = (event) => {
    event.preventDefault()
    const names = persons.map(p => p.name)
    if (names.includes(newName)) {
        alert("Already got that one yo")
    } else {
        submitNewName()
    }
  };

  const handleContactInputChange = (event) => {
        console.log(event)
        console.log(event.target)
        console.log(event.target.value)
        setNewName(event.target.value)
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleContactSubmit}>
        <div>
          name:{" "}
          <input
            placeholder={"Enter name"}
            value={newName}  
            onChange={handleContactInputChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Contacts</h2>
      {persons.map((c) => (
        <Contact contact={c} key={c.name + c.phone} />
      ))}
    </div>
  );
};

export default App;
