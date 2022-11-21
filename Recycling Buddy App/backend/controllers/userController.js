import asyncHandler from "express-async-handler";
import User from "../models/User.js";

/**
 * @desc    Get all users
 * @route   POST /users/index
 */
const index = asyncHandler(async (req, res) => {
  try {
    const users = await User.find({});
    res.json(users);
  } catch (e) {
    res.json({ message: "Error indexing users" });
  }
});

/**
 * @desc    Show user
 * @route   POST /users/show
 */
const show = asyncHandler(async (req, res) => {
  try {
    const user = await User.findById(req.body._id);
    res.json(user);
  } catch (e) {
    res.json({ message: "Error indexing user" });
  }
});

/**
 * @desc    Create a user
 * @route   POST /users/create
 */
const create = asyncHandler(async (req, res) => {
  try {
    const newUser = new User({
      email: req.body.email ?? "",
      username: req.body.username ?? "",
      password: req.body.password ?? "",
      avatar: "MVP2",
      isAdmin: req.body.isAdmin ?? false,
    });
    await newUser.save();
    res.json(newUser);
  } catch (e) {
    res.json({ message: "Error creating user" });
  }
});

/**
 * @desc    Update user
 * @route   POST /users/update
 */
const update = asyncHandler(async (req, res) => {
  try {
    let user = await User.findById(req.body._id);
    user.email = req.body.email ?? user.email;
    user.username = req.body.username ?? user.username;
    user.password = req.body.password ?? user.password;
    user.avatar = req.body.avatar ?? user.avatar;
    user.isAdmin = req.body.isAdmin ?? user.isAdmin;
    await user.save();
    res.json(user);
  } catch (e) {
    res.json({ message: "Error updating user" });
  }
});

/**
 * @desc    Remove user
 * @route   POST /users/remove
 */
const remove = asyncHandler(async (req, res) => {
  try {
    const user = await User.findById(req.body._id);
    await user.remove();
    res.json({ message: "User removed" });
  } catch (e) {
    res.json({ message: "Error removing user" });
  }
});

/**
 * @desc    Login
 * @route   POST /users/login
 */
const login = asyncHandler(async (req, res) => {
  try {
    const user = await User.findOne({
      email: req.body.email,
      password: req.body.password,
    });
    if (user) res.json({ success: true, user: user });
    else res.json({ success: false, user: null });
  } catch (e) {
    res.json({ message: "Error Logging In" });
  }
});

export { index, show, create, update, remove, login };
