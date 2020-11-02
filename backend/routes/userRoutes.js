import express from "express";
const router = express.Router();
import { protect } from "../middleware/authMiddleware.js";

import {
  authUser,
  getUserProfile,
  registerUser,
  getUsers,
  getUser,
} from "../controllers/userController.js";

router.route("/").post(registerUser).get(getUsers);
router.route("/:id").get(getUser);
router.post("/login", authUser);
router.route("/profile").get(protect, getUserProfile);

export default router;
