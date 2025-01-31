import e from "express";
import { createUser, deleteUser, getAllUsers, getUserById, updateUser } from "../controllers/userController.js";

const router = e.Router()



// get all users route 
router.get("/", getAllUsers)

// create user route
router.post("/", createUser)
// get single user
router.get("/:id", getUserById)
// update a user
router.put("/:id", updateUser)
//delete a user
router.delete("/:id", deleteUser)


export default router