// this is created to check diff path
//trying to check pipeline
const express = require("express");
const app = express();
app.listen(3000);

app.use(express.json());

let users = {};

app.get("/users", (req, res) => {
  res.send(users);
});
//this is post method
app.post("/users", (req, res) => {
  console.log(req.body);
  users = req.body;
  res.json({
    message: "data received successfully",
    user: req.body,
  });
});
//update the data
app.patch("/users", (req, res) => {
  console.log(req.body);
  let newdata = req.body;
  for (key in newdata) {
    users[key] = newdata[key];
  }
  res.send(users);
});

app.delete("/users", (req, res) => {
  users = {};
  res.json({
    message: "delete the value",
    users: users,
  });
});
