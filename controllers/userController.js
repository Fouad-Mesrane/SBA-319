import User from "../models/User.js";

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
export const deleteUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Delete the user (the pre-hook will delete their posts)
    await user.remove();  // This will trigger the 'pre' hook in the User schema

    res.json({ message: "User and their posts deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting user", error: error.message });
  }
};