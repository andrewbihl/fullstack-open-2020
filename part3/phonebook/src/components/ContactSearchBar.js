import React from "react";

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

export default ContactSearchBar;
    