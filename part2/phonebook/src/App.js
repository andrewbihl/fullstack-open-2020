import React, { useState, useEffect } from "react";
import ContactList from "./components/ContactList";
import ContactForm from "./components/ContactForm";
import ContactSearchBar from "./components/ContactSearchBar";
import SuccessMessage from "./components/SuccessMessage";
import FailureMessage from "./components/FailureMessage";
import {
  fetchContacts,
  createContact,
  deleteContact,
  updateContact,
} from "./services/contacts";

const App = (props) => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [query, setQuery] = useState("");
  const [submitEnabled, setSubmitEnabled] = useState(true);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailMessage, setShowFailMessage] = useState(false);

  useEffect(() => {
    fetchContacts().then((response) => {
      console.log("promised fulfilled:", response);
      setPersons(response.data);
    });
  }, []);

  const presentSuccessMessage = () => {
    setShowSuccessMessage(true);
    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 3000);
  };

  const presentFailureMessage = () => {
    setShowFailMessage(true);
    setTimeout(() => {
      setShowFailMessage(false);
    }, 3000);
  };

  const submitNewContact = () => {
    const newPerson = {
      name: newName,
      number: newPhone,
      id: persons.length + 1 || 0,
    };
    setSubmitEnabled(false);
    return createContact(newPerson)
      .then((response) => {
        setPersons(persons.concat(newPerson));
        setNewPhone("");
        setNewName("");
        setSubmitEnabled(true);
        presentSuccessMessage();
      })
      .catch((reject) => {
        console.log(reject);
        presentFailureMessage();
      });
  };

  const deleteExistingContact = (contactID) => {
    deleteContact(contactID)
      .then((response) => {
        if (response.status === 200) {
          setPersons(persons.filter((p) => p.id !== contactID));
        }
      })
      .catch((reject) => {
        presentFailureMessage();
      });
  };

  const updateExistingContact = (index) => {
    const newPerson = {
      id: persons[index].id,
      name: newName,
      number: newPhone,
    };

    updateContact(newPerson)
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          let newPersons = persons
            .slice(0, index)
            .concat(newPerson)
            .concat(persons.slice(index + 1));
          setPersons(newPersons);
          presentSuccessMessage();
        }
      })
      .catch((reject) => {
        console.log(reject);
        presentFailureMessage();
      });
  };

  const handleContactSubmit = (event) => {
    event.preventDefault();
    const names = persons.map((p) => p.name);
    let [index, person] = [-1, null];
    for (let i = 0; i < persons.length; i++) {
      const p = persons[i];
      if (p.name === newName) {
        index = i;
        person = p;
        break;
      }
    }

    if (index !== -1) {
      const shouldUpdate = window.confirm("Edit existing contact?");
      if (shouldUpdate) {
        updateExistingContact(index);
      }
    } else {
      event.target.enabled = false;
      submitNewContact();
    }
  };

  const handleContactDelete = (contact) => {
    const confirmed = window.confirm("You really wanna do that?");
    if (confirmed) {
      deleteExistingContact(contact.id);
    }
  };

  function filteredContacts(persons, query) {
    console.log(persons);
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
      <SuccessMessage show={showSuccessMessage}></SuccessMessage>
      <FailureMessage show={showFailMessage}></FailureMessage>
      <ContactForm
        enabled={submitEnabled}
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
        handleDelete={handleContactDelete}
        contacts={filteredContacts(persons, query)}
      ></ContactList>
    </div>
  );
};

export default App;
