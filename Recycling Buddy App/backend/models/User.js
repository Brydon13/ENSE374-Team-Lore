const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
    },
    password: {
      type: String,
    },
    avatar: {
      type: String,
    },
    salt: {
      type: String,
    },
    hash: {
      type: String,
    },
    isAdmin: {
      type: Boolean,
    },
  },
  { timestamps: true }
);

userSchema.plugin(passportLocalMongoose);

const User = mongoose.model("User", userSchema);

exports.User = User;
