import express from "express";

const router = express.Router();

import {
  index,
  show,
  create,
  update,
  remove,
  login,
} from "../controllers/userController.js";

// BASE_URL: /users

router.route("/index").post(index);
router.route("/show").post(show);
router.route("/create").post(create);
router.route("/update").post(update);
router.route("/remove").post(remove);
router.route("/login").post(login);

export default router;
