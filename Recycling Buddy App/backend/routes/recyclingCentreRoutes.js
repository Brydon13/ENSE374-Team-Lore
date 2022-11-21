import express from "express";
const router = express.Router();

import {
  index,
  show,
  create,
  update,
  remove,
} from "../controllers/recyclingCentreController.js";

// BASE_URL: /recycling-centres

router.route("/index").post(index);
router.route("/show").post(show);
router.route("/create").post(create);
router.route("/update").post(update);
router.route("/remove").post(remove);

export default router;
