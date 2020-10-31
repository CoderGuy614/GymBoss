import express from "express";
const router = express.Router();
import User from "../models/userModel.js";
import asyncHandler from "express-async-handler";

//@description Fetch all Users
//@route GET /api/users
//@access Public
router.get(
  "/",
  asyncHandler(async (req, res) => {
    const users = await User.find({});
    res.json(users);
  })
);

//@description Fetch a user by ID
//@route GET /api/users/:id
//@access Public
router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);
    res.json(user);
  })
);

export default router;
