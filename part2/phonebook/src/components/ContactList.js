import React from "react";

const ContactList = (props) => {
  let { contacts } = { ...props };

  return (
    <ul>
      {contacts.map((contact) => (
        <li key={contact.id}>{`${contact.name} - ${contact.number}`}</li>
      ))}
    </ul>
  );
};

export default ContactList;
