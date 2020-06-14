import React, { useState } from "react";
import ContactList from "./components/ContactList";
import ContactForm from "./components/ContactForm";
import ContactSearchBar from "./components/ContactSearchBar";

const App = (props) => {
  const [persons, setPersons] = useState([{ name: "Andrew Bihl" }]);

  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [query, setQuery] = useState("");

  const submitNewContact = () => {
    setPersons(persons.concat({ name: newName, phone: newPhone }));
    setNewPhone("");
    setNewName("");
  };

  const handleContactSubmit = (event) => {
    event.preventDefault();
    const names = persons.map((p) => p.name);
    if (names.includes(newName)) {
      alert("Already got that one yo");
    } else {
      submitNewContact();
    }
  };

  function filteredContacts(persons, query) {
    return persons.filter((p) =>
      p.name.toLowerCase().includes(query.toLowerCase())
    );
  }

  function handleSearchBarChange(event) {
    const query = event.target.value;
    setQuery(event.target.value);
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <ContactForm
        fields={[
          {
            name: "name",
            value: newName,
            setter: setNewName,
          },
          {
            name: "phone",
            value: newPhone,
            setter: setNewPhone,
          },
        ]}
        handleSubmit={handleContactSubmit}
      ></ContactForm>
      <h2>Contacts</h2>
      <ContactSearchBar
        query={query}
        onChange={handleSearchBarChange}
      ></ContactSearchBar>
      <ContactList contacts={filteredContacts(persons, query)}></ContactList>
    </div>
  );
};

export default App;
