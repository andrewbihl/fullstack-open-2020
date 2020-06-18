import axios from "axios"


export function fetchContacts() {
    return axios.get("http://localhost:3001/persons")
}

export async function createContact(contact) {
    if (!contact.name) {
        throw "bad input - need name"
    }
    return axios.post("http://localhost:3001/persons",contact)
}