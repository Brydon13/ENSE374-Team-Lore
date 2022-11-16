import express from "express";
const router = express.Router();

import {
  index,
  show,
  create,
  update,
  remove,
} from "../controllers/recyclableController.js";

// BASE_URL: /recyclables

router.route("/index").get(index);
router.route("/show").post(show);
router.route("/create").post(create);
router.route("/update").post(update);
router.route("/remove").post(remove);

export default router;
