const express = require('express')
const app = express()

const data = {
  persons: [
    {
      name: "Arto Hellas",
      number: "040-123456",
      id: 1,
    },
    {
      name: "Ada Lovelace",
      number: "39-44-5323523",
      id: 2,
    },
    {
      name: "Dan Abramov",
      number: "12-43-234345",
      id: 3,
    },
    {
      name: "Mary Poppendieck",
      number: "39-23-6423122",
      id: 4,
    },
  ],
};


app.get('/api/notes', (request, response) => {
    response.json(data.persons)
})

app.get('/info', (request, response) => {
    const now = Date()
    const infoPageHTML = 
    `
    <p>Phonebook has info for ${data.persons.length} people</p>
    <p>${now}</p>
    `
    
    response.send(
        infoPageHTML
    )
})

const PORT = 3001
app.listen(PORT)
console.log(`Server running on port ${PORT}...`)
