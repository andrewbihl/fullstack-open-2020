import React, { useState } from "react";
import Contact from "./components/Contact";

const App = (props) => {
  const [persons, setPersons] = useState([{ name: "Andrew Bihl" }]);

  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");

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
      <ul>
        {persons.map((c) => (
          <Contact contact={c} key={c.name + c.phone} />
        ))}
      </ul>
    </div>
  );
};

const ContactForm = (props) => {
  const { fields, handleSubmit } = { ...props };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <table>
          <tbody>
            {fields.map((f) => (
              <ContactFormRow field={f} key={f.name}></ContactFormRow>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

const ContactFormRow = (props) => {
  const { field } = { ...props };

  const handleChange = (event, setter) => {
    setter(event.target.value);
  };

  return (
    <tr>
      <td>{`${field.name}: `}</td>
      <td>
        <input
          placeholder={`Enter ${field.name}`}
          value={field.value}
          onChange={(e) => handleChange(e, field.setter)}
        />
      </td>
    </tr>
  );
};

export default App;
