const { User } = require("../models/User.js");
const { Recyclable } = require("../models/Recyclable.js");
const mongoose = require("mongoose");

const fs = require("fs");

function writeJson(object, filename) {
  fs.writeFileSync(
    __dirname + "/" + filename,
    JSON.stringify(object),
    "utf8",
    (err) => {
      if (err) {
        console.log("Error writing the file:", err);
      }
    }
  );
}

function readJson(filename) {
  let jsonString = fs.readFileSync(__dirname + "/" + filename, "utf8");
  const object = JSON.parse(jsonString);
  return object;
}

async function initializeDB() {
  await User.deleteMany();
  await Recyclable.deleteMany();
  let db = readJson("../db.json");
  let users = db.users ?? [];
  let recyclables = db.recyclables ?? [];

  for (let user of users) {
    const newUser = new User(user);
    await newUser.save();
  }
  for (let recyclable of recyclables) {
    const newRecyclable = new Recyclable(recyclable);
    await newRecyclable.save();
  }
}

async function updateJson() {
  const users = await User.find().select("+salt +hash");
  const recyclables = await Recyclable.find();

  const db = {
    users: users,
    recyclables: recyclables,
  };

  writeJson(db, "../db.json");
}

exports.initializeDB = initializeDB;
exports.updateJson = updateJson;
