import Post from "../models/Post.js";
import User from "../models/User.js";

// get all posts
export const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to fetch posts", error: error.message });
  }
};
// create a posts
export const createPost = async (req, res) => {
  try {
    const { title, content, email } = req.body;
    const user = await User.findOne({email})
    if(!user) res.status(404).json({message : "User not found"})
    const post = new Post({
      title,
      content,
      authorId : user._id
    });
    // save to the db
    await post.save();
    res.status(200).json(post);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to create a posts", error: error.message });
  }
};

// get a post by id

export const getPostById = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).json(post);
  } catch (error) {
    res.status(404).json({ message: "User Not Found", error: error.message });
  }
};

// update
export const updatePost = async (req, res) => {
  try {
    const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body);
    res.json({ message: "Post updated" });
  } catch (error) {
    res
      .status(400)
      .json({ message: "Error updating post", error: error.message });
  }
};

// delete

export const deletePost = async (req, res) => {
  try {
    const post = await Post.findByIdAndDelete(req.params.id);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    res.json({ message: "Post deleted successfully", post });
  } catch (error) {
    res.status(400).json({ message: "Error deleting post", error: error.message });
  }
};
