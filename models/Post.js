import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  authorId: {
    // this is to match th mongodb id type
    type: mongoose.Types.ObjectId,
    // this is to refer to the id of the user
    ref: "User",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});


export default mongoose.model('Post', postSchema)