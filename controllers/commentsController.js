import Post from "../models/Post.js";
import User from "../models/User.js";
import Comment from "../models/Comment.js";

export const createComment = async (req, res) => {
  try {
    const { content, email } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    const comment = new Comment({
      content,
      authorId: user._id,
      postId: post._id,
    });
    await comment.save();
    res.status(200).json(comment);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to create a comment", error: error.message });
  }
};

// get all comments 
export const getAllComments = async (req, res) => {
  try {
    const comments = await Comment.find({});
    res.status(200).json(comments);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to fetch comments", error: error.message });
  }
};

// get all comments for a post
export const getCommentsByPostId = async (req, res) => {
  try {
    const comments = await Comment.find({ postId: req.params.id });
    res.status(200).json(comments);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to fetch comments", error: error.message });
  }
};

// get comment by id
export const getCommentById = async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.id);
    res.status(200).json(comment);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to fetch comment", error: error.message });
  }
};
export const updateComment = async (req, res) => {
  try {
    const updatedComment = await Comment.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    res.json({ message: "Comment updated" });
  } catch (error) {
    res
      .status(400)
      .json({ message: "Error updating comment", error: error.message });
  }
};
export const deleteComment = async (req, res) => {
  try {
    const comment = await Comment.findByIdAndDelete(req.params.id);
    if (!comment) {
      return res.status(404).json({ message: "Comment not found" });
    }
    res.json({ message: "Comment deleted successfully", comment });
  } catch (error) {
    res
      .status(400)
      .json({ message: "Error deleting comment", error: error.message });
  }
};
