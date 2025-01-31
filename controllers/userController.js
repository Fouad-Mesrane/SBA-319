import User from "../models/User.js";
import Post from "../models/Post.js";
import Comment from "../models/Comment.js";
// get all users
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res
      .status(500)
      .json({ message: "error fetching all users", error: error.message });
  }
};
// create new user
export const createUser = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    const user = new User({
      firstName,
      lastName,
      email,
      password,
    });
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res
      .status(500)
      .json({ message: "error creating user", error: error.message });
  }
};
// get user by id
export const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "User not found", error: error.message });
  }
};

// update user

export const updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body);
    res.json({ message: "User Updated successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "error updating user", error: error.message });
  }
};

// delete user
export const deleteUser = async (req, res) => {
  try {

    await Post.deleteMany({ "authorId": req.params.id });
    await Comment.deleteMany({ "authorId": req.params.id });
    await User.findByIdAndDelete(req.params.id);

    res.json({ message: "User and their posts deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting user", error: error.message });
  }
};
