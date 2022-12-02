const express = require("express");
const mongoose = require("mongoose");
const { initializeDB } = require("./backend/utils/jsonSyncing.js");
const { User } = require("./backend/models/User.js");
const session = require("express-session");
const passport = require("passport");
require("dotenv").config();

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
app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

require("./backend/routes.js")(app);

app.listen(port, () => {
  // template literal
  console.log(`Server is running on ${BASE_API}`);
});
