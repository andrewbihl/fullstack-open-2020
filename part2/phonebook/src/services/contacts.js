import axios from "axios"


export async function fetchContacts() {
    return axios.get("http://localhost:3001/persons")
}

export async function createContact(contact) {
    if (!contact.name) {
        throw "bad input - need name"
    }
    return axios.post("http://localhost:3001/persons",contact)
}

export async function deleteContact(contactID) {
    return axios.delete(`http://localhost:3001/persons/${contactID}`)
}

export async function updateContact(contact) {
    return axios.put(`http://localhost:3001/persons/${contact.id}`, contact)
}