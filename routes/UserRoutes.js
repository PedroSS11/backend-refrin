import express from "express";
const router = express.Router();

// controller
// import {
//   register,
//   getAllUsers,
//   getCurrentUser,
//   getUserById,
//   login,
//   updateUser,
//   deleteUser,
//   getByActor,
// } from "../controllers/UserController";

import UserController from "../controllers/UserController";

// middlewares
import checkToken from "../middlewares/checkToken";

// get current user
router.get("/", checkToken, UserController.getCurrentUser);
// get all users
router.get("/all", checkToken, UserController.getAllUsers);
//register user
router.post("/register", UserController.register);
// login
router.post("/login", UserController.login);
// get user by id
router.get("/:id", checkToken, UserController.getUserById);
// update user
router.put("/:id", checkToken, UserController.updateUser);
// delete a user
router.delete("/:id", checkToken, UserController.deleteUser);
// get by actor
router.get("/actor/:value", checkToken, UserController.getByActor);

module.exports = router;
