const express = require("express");
const app = express();

app.listen(3000);

// this middle ware must be used to detect every file in folder
app.use(express.static("./Views", { root: __dirname }));

app.get("/", (req, res) => {
  res.sendFile("./Views/index.html", { root: __dirname });
  console.log(req.url);
});
app.get("/about", (req, res) => {
  res.sendFile("./Views/about.html", { root: __dirname });
});

//Redirect
app.get("/about-me", (req, res) => {
  res.redirect("/about");
});

//This middleware must be used iat last position
//404 page

app.use((req, res) => {
  res.status(404).sendFile("./Views/404.html", { root: __dirname });
});
