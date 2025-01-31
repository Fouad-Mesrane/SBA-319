import e from "express";
import {
  getAllPosts,
  createPost,
  getPostById,
  updatePost,
  deletePost,
} from "../controllers/postsController.js";

const router = e.Router();

router.get("/posts", getAllPosts);
router.post("/posts", createPost);
router.get("/posts/:id", getPostById);
router.put("/posts/:id", updatePost);
router.delete("/posts/:id", deletePost);



export default router