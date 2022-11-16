import asyncHandler from "express-async-handler";

/**
 * @desc    Get all recyclables
 * @route   POST /recyclables/index
 */
const index = asyncHandler(async (req, res) => {
  res.send("hello");
});

/**
 * @desc    Show recyclable
 * @route   POST /recyclables/show
 */
const show = asyncHandler(async (req, res) => {});

/**
 * @desc    Create a recyclable
 * @route   POST /recyclables/create
 */
const create = asyncHandler(async (req, res) => {});

/**
 * @desc    Update recyclable
 * @route   POST /recyclables/update
 */
const update = asyncHandler(async (req, res) => {});

/**
 * @desc    Remove recyclable
 * @route   POST /recyclables/remove
 */
const remove = asyncHandler(async (req, res) => {});

export { index, show, create, update, remove };
