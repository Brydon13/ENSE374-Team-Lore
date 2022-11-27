const express = require("express");
const router = express.Router();

const { search } = require("../controllers/searchController.js");

// BASE_URL: /search

router.route("/").post(search);

exports.router = router;
