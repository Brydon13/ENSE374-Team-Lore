const express = require("express");

const router = express.Router();

const {
  index,
  show,
  create,
  update,
  remove,
  login,
} = require("../controllers/userController.js");

// BASE_URL: /users

router.route("/index").post(index);
router.route("/show").post(show);
router.route("/create").post(create);
router.route("/update").post(update);
router.route("/remove").post(remove);
router.route("/login").post(login);

exports.router = router;
