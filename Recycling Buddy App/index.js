import express from "express";
import mongoose from "mongoose";

import userRoutes from "./backend/routes/userRoutes.js";
import recyclableRoutes from "./backend/routes/recyclableRoutes.js";
import searchRoutes from "./backend/routes/searchRoutes.js";

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

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// Simple server operation

app.get("/", (req, res) => {
  res.send(`<h1>Test<h1/>`);
});

app.use(`/users`, userRoutes);
app.use(`/recyclables`, recyclableRoutes);
// app.use(`/recycling-centres`, recyclingCentreRoutes);
app.use(`/search`, searchRoutes);

app.listen(port, () => {
  // template literal
  console.log(`Server is running on ${BASE_API}`);
});
