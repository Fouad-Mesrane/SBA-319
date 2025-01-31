import express from "express";
import { createComment, deleteComment, getAllComments, getCommentById, updateComment } from "../controllers/commentsController.js";

const router = express.Router();

// get all comments for a post
router.get("/posts/:id/comments", getAllComments);
// create a comment for a post
router.post("/posts/:id/comments", createComment);
// get a comment by id
router.get("/posts/:id/comments/:id", getCommentById);
router.put("/posts/:id/comments/:id", updateComment);
router.delete("/comments/:id", deleteComment);

export default router;