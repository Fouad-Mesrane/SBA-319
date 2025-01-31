import e from "express";
import { createUser, deleteUser, getAllUsers, getUserById, updateUser } from "../controllers/userController.js";

const router = e.Router()



// get all users route 
router.get("/users", getAllUsers)

// create user route
router.post("/users", createUser)
// get single user
router.get("/users/:id", getUserById)
// update a user
router.put("/users/:id", updateUser)
//delete a user
router.delete("/users/:id", deleteUser)


export default router