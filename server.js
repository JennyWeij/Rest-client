const express = require("express");

const app = express();

//In-memory database
const users = [{
  id: 'string',
  name: 'My',
  age: 8,
}];

//endpoint
app.get("/api/users", (req, res) => {
  res.status(200).json(users);
});
app.post("/api/users", (req, res) => {
  const user = { ...req.body, id: Date.now().toString() };
  users.push(user);
  res.status(200).json(users);
});

app.listen(3000, () => console.log("http://localhost:3000"));
