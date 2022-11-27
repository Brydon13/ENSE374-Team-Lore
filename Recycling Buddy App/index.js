const express = require("express");
const mongoose = require("mongoose");

const userRoutes = require("./backend/routes/userRoutes.js");
const recyclableRoutes = require("./backend/routes/recyclableRoutes.js");
const searchRoutes = require("./backend/routes/searchRoutes.js");
const { initializeDB, updateJson } = require("./backend/utils/jsonSyncing.js");
const { Recyclable } = require("./backend/models/Recyclable.js");
const { User } = require("./backend/models/User.js");

// this is a canonical alias to make your life easier, like jQuery to $.
const app = express();

app.set("view engine", "ejs");
// a common localhost test port
const port = 3000;
const BASE_API = `http://localhost:${port}`;

mongoose.connect("mongodb://localhost:27017/recycleBuddy", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

initializeDB();

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// Simple server operation

app.get("/login", (req, res) => {
  res.render("login");
});

app.get("/signup", (req, res) => {
  res.render("signup");
});

app.get("/add-item", (req, res) => {
  res.render("add-item");
});

app.get("/profile", (req, res) => {
  res.render("profile");
});

app.get("/index", (req, res) => {
  const results = [1, 2, 3];
  res.render("index", { results: results });
});

app.get("/itempage", (req, res) => {
  res.render("itempage");
});

app.get("/search", (req, res) => {
  const results = [1, 2, 3];
  res.render("index", { results: results });
});

// app.use(`/users`, userRoutes);
// app.use(`/recyclables`, recyclableRoutes);
// app.use(`/recycling-centres`, recyclingCentreRoutes);
// app.use(`/search`, searchRoutes);

app.listen(port, () => {
  // template literal
  console.log(`Server is running on ${BASE_API}`);
});
