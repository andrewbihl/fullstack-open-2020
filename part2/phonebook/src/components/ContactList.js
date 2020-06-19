import React from "react";

const ContactList = (props) => {
  let { contacts, handleDelete } = { ...props };

  return (
    <ul>
      {contacts.map((contact) => (
        <li key={contact.id}>{`${contact.name} - ${contact.number}`}<button onClick={() => handleDelete(contact)}>Delete</button></li>
      ))}
    </ul>
  );
};

export default ContactList;
