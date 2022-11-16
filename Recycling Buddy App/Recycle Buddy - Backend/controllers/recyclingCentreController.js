import asyncHandler from "express-async-handler";

/**
 * @desc    Get all recycling centres
 * @route   POST /recycling-centres/index
 */
const index = asyncHandler(async (req, res) => {});

/**
 * @desc    Show recycling centre
 * @route   POST /recycling-centres/show
 */
const show = asyncHandler(async (req, res) => {});

/**
 * @desc    Create a recycling centre
 * @route   POST /recycling-centres/create
 */
const create = asyncHandler(async (req, res) => {});

/**
 * @desc    Update recycling centre
 * @route   POST /recycling-centres/update
 */
const update = asyncHandler(async (req, res) => {});

/**
 * @desc    Remove recycling centre
 * @route   POST /recycling-centres/remove
 */
const remove = asyncHandler(async (req, res) => {});

export { index, show, create, update, remove };
