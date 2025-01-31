import express from "express";
import { createComment, deleteComment, getAllComments, getCommentById, updateComment } from "../controllers/commentsController.js";

const router = express.Router();

router.get("/", getAllComments);
router.post("/", createComment);
router.get("/:id", getCommentById);
router.put("/:id", updateComment);
router.delete("/:id", deleteComment);

export default router;