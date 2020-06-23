import axios from "axios";

const apiURL = process.env.backendURL || "/api";

export async function fetchContacts() {
  return axios.get(apiURL + "/persons");
}

export async function createContact(contact) {
  if (!contact.name) {
    throw "bad input - need name";
  }
  const resp = axios.post(apiURL + "/persons", contact);
  console.log("resp:", resp);
  return resp;
}

export async function deleteContact(contactID) {
  const resp = axios.delete(apiURL + `/persons/${contactID}`);
  console.log("resp:", resp);
  return resp;
}

export async function updateContact(contact) {
  const resp = axios.put(
    `http://localhost:3001/persons/${contact.id}`,
    contact
  );
  console.log("resp:", resp);
  return resp;
}
