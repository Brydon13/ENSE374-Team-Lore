const express = require("express");
const router = express.Router();

const {
  index,
  show,
  create,
  update,
  remove,
} = require("../controllers/recyclingCentreController.js");

// BASE_URL: /recycling-centres

router.route("/index").post(index);
router.route("/show").post(show);
router.route("/create").post(create);
router.route("/update").post(update);
router.route("/remove").post(remove);

exports.router = router;
