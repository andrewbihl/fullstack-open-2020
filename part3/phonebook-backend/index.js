const express = require("express");
const app = express();

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

app.get("/api/persons", (request, response) => {
  response.json(data.persons);
});

app.get("/api/persons/:id", (request, response) => {
  console.log(request.params);
  const p = data.persons.find((p) => p.id === Number(request.params.id));
  if (p) {
    response.json(p);
  } else {
    response.status(404).end()
  }
});

app.delete('/api/persons/:id', (request, response) => {
    const idToRemove = Number(request.params.id)
    const index = data.persons.findIndex(p => p.id === idToRemove)
    if (index === -1 ){
        response.status(404).end()
    }
    const ps = data.persons
    data.persons = ps.slice(0, index).concat(ps.slice(index+1))
    response.status(204).end()
})

app.get("/info", (request, response) => {
  const now = Date();
  const infoPageHTML = `
    <p>Phonebook has info for ${data.persons.length} people</p>
    <p>${now}</p>
    `;

  response.send(infoPageHTML);
});

const PORT = 3001;
app.listen(PORT);
console.log(`Server running on port ${PORT}...`);
