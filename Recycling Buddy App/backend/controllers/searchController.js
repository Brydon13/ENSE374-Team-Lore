import asyncHandler from "express-async-handler";
import Recyclable from "../models/Recyclable.js";

/**
 * @desc    Get search results from query
 * @route   POST /search
 */
const search = asyncHandler(async (req, res) => {
  try {
    const results = await Recyclable.find({
      $or: [
        { title: { $regex: req.body.keyword, $options: "i" } },
        { info: { $regex: req.body.keyword, $options: "i" } },
        { manufacturer: { $regex: req.body.keyword, $options: "i" } },
      ],
    });
    res.json(results);
  } catch (e) {
    res.json({ message: "Error searching" });
  }
});

export { search };
