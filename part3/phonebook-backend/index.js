const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

morgan.token("body", (req, res) => JSON.stringify(req.body));

app.use(morgan("tiny"));
app.use(morgan(":body"));


let data = {
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
  console.info("persons:", data.persons);
  response.json(data.persons);
});

app.get("/api/persons/:id", (request, response) => {
  console.log(request.params);
  const p = data.persons.find((p) => p.id === Number(request.params.id));
  if (p) {
    response.json(p);
  } else {
    response.status(404).end();
  }
});

app.post("/api/persons", (request, response) => {
  const failMessage = (errorMessage) => {
    response.status(422).json({ error: errorMessage }).end();
  };
  const newPerson = request.body;
  if (!newPerson.name) {
    return failMessage("name required");
  }
  if (!newPerson.number) {
    return failMessage("number required");
  }

  if (data.persons.find((p) => p.name === newPerson.name)) {
    return failMessage("name must be unique");
  }
  const newID = Math.floor(Math.random() * 4294967296);
  newPerson.id = newID;
  console.log(newPerson);
  data.persons.push(newPerson);
  response.status(200).json(newPerson).end();
});

app.delete("/api/persons/:id", (request, response) => {
  console.log("id:", request.params.id);
  console.log("data:", data);
  const idToRemove = Number(request.params.id);
  const index = data.persons.findIndex((p) => p.id === idToRemove);
  if (index === -1) {
    return response.status(404).end();
  }
  const ps = data.persons;
  console.log("index:", index);
  const newData = ps.slice(0, index).concat(ps.slice(index + 1));
  console.log("new data:", newData);
  data.persons = newData;
  return response.status(204).end();
});

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
