const express = require("express");
const app = express();
app.use(express.json());


app.listen(3000);

let users = [
  {
    'id': 1,
    'name': "Pratik",
  },
  {
    'id': 2,
    'name': "ABC",
  },
  {
    'id': 3,
    'name': "CBA",
  },
];

app.get("/users",(req,res)=>{
  console.log(req.query)
  res.send(users)
})

app.get("/users/:username", (req, res) => {
  console.log(req.params.username);
  res.send("user name received");
 
});
