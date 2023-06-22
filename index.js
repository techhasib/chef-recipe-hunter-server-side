const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;
const recipe = require("./data/recipe.json");

app.use(cors());

app.get("/", (req, res) => {
  res.send("Chef World!");
});

app.get("/recipe", (req, res) => {
  res.send(recipe);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
