import React, { useState } from "react";
import Contact from "./components/Contact";
import ContactForm from "./components/ContactForm";

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

  function getFilteredContacts(persons, query) {
    return persons.filter((p) => p.name.toLowerCase().includes(query.toLowerCase()));
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
      <ContactList
        contacts={getFilteredContacts(persons, query)}
      ></ContactList>
    </div>
  );
};

const ContactSearchBar = (props) => {
  const { query, onChange } = { ...props };

  return (
    <input
      placeholder="Search contacts"
      value={query}
      onChange={onChange}
    ></input>
  );
};

const ContactList = (props) => {
  let { contacts, filterFunc } = { ...props };

  if (!filterFunc) {
    filterFunc = (v) => true;
  }

  return (
    <ul>
      {contacts.filter(filterFunc).map((c) => (
        <Contact contact={c} key={c.name + c.phone} />
      ))}
    </ul>
  );
};

export default App;
