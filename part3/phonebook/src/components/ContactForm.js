import React from "react";

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

export default ContactForm;
