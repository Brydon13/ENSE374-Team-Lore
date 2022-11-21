import asyncHandler from "express-async-handler";
import Recyclable from "../models/Recyclable.js";

/**
 * @desc    Get all recyclables
 * @route   POST /recyclables/index
 */
const index = asyncHandler(async (req, res) => {
  try {
    const recyclables = await Recyclable.find({});
    res.json(recyclables);
  } catch (e) {
    res.json({ message: "Error indexing recyclables" });
  }
});

/**
 * @desc    Show recyclable
 * @route   POST /recyclables/show
 */
const show = asyncHandler(async (req, res) => {
  try {
    const recyclable = await Recyclable.findById(req.body._id);
    res.json(recyclable);
  } catch (e) {
    res.json({ message: "Error indexing recyclable" });
  }
});

/**
 * @desc    Create a recyclable
 * @route   POST /recyclables/create
 */
const create = asyncHandler(async (req, res) => {
  try {
    const newRecyclable = new Recyclable({
      title: req.body.title ?? "",
      info: req.body.info ?? "",
      isRecyclable: req.body.isRecyclable ?? false,
      manufacturer: req.body.manufacturer ?? "",
      isOfficial: req.body.isOfficial ?? false,
    });
    await newRecyclable.save();
    res.json(newRecyclable);
  } catch (e) {
    res.json({ message: "Error creating recyclable" });
  }
});

/**
 * @desc    Update recyclable
 * @route   POST /recyclables/update
 */
const update = asyncHandler(async (req, res) => {
  try {
    let recyclable = await Recyclable.findById(req.body._id);
    recyclable.title = req.body.title ?? recyclable.title;
    recyclable.info = req.body.info ?? recyclable.info;
    recyclable.isRecyclable = req.body.title ?? recyclable.isRecyclable;
    recyclable.manufacturer = req.body.title ?? recyclable.manufacturer;
    recyclable.isOfficial = req.body.title ?? recyclable.isOfficial;
    await recyclable.save();
    res.json(recyclable);
  } catch (e) {
    res.json({ message: "Error updating recyclable" });
  }
});

/**
 * @desc    Remove recyclable
 * @route   POST /recyclables/remove
 */
const remove = asyncHandler(async (req, res) => {
  try {
    const recyclable = await Recyclable.findById(req.body._id);
    await recyclable.remove();
    res.json({ message: "Recyclable removed" });
  } catch (e) {
    res.json({ message: "Error removing recyclable" });
  }
});

export { index, show, create, update, remove };
