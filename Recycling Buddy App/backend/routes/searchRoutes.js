import express from "express";
const router = express.Router();

import { search } from "../controllers/searchController.js";

// BASE_URL: /search

router.route("/").post(search);

export default router;
