import asyncHandler from "express-async-handler";

/**
 * @desc    Get all users
 * @route   POST /users/index
 */
const index = asyncHandler(async (req, res) => {
  res.send("<h1>index working</h1>");
});

/**
 * @desc    Show user
 * @route   POST /users/show
 */
const show = asyncHandler(async (req, res) => {});

/**
 * @desc    Create a user
 * @route   POST /users/create
 */
const create = asyncHandler(async (req, res) => {});

/**
 * @desc    Update user
 * @route   POST /users/update
 */
const update = asyncHandler(async (req, res) => {});

/**
 * @desc    Remove user
 * @route   POST /users/remove
 */
const remove = asyncHandler(async (req, res) => {});

/**
 * @desc    Login
 * @route   POST /users/login
 */
const login = asyncHandler(async (req, res) => {});

export { index, show, create, update, remove, login };
