import React from "react";

const ContactList = (props) => {
  let { contacts } = { ...props };

  return (
    <ul>
      {contacts.map((contact) => {
        const txt = `${contact.name} - ${contact.phone}`;
        return <li>{txt}</li>;
      })}
    </ul>
  );
};

export default ContactList;
