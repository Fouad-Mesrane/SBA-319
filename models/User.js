import mongoose from "mongoose";
import Post from "./Post.js";
const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  joinedAt: { type: Date, default: Date.now },
});


userSchema.pre('remove', async function(next) {
  try {
    // Delete all posts where authorId matches the current user's _id
    await Post.deleteMany({ authorId: this._id });
    next(); // Proceed with user deletion
  } catch (error) {
    next(error); // If error, move to the next middleware with error
  }
});

export default mongoose.model("User", userSchema);
