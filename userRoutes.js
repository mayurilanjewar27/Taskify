// backend/routes/userRoutes.js
const express = require("express");
const router = express.Router();
const User = require("../models/userModel");

// Signup
router.post("/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const existing = await User.findOne({ email });
    if (existing) return res.status(400).json({ message: "Email already exists!" });

    const user = new User({ name, email, password });
    await user.save();
    res.json({ message: "Signup successful!" });
  } catch (error) {
    res.status(500).json({ message: "Error signing up" });
  }
});

// Login
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email, password });
    if (!user) return res.status(400).json({ message: "Invalid email or password" });

    res.json({ message: "Login successful", userId: user._id });
  } catch (error) {
    res.status(500).json({ message: "Login failed" });
  }
});

module.exports = router;
