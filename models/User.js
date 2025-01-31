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




export default mongoose.model("User", userSchema);
