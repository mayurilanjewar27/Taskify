// backend/routes/taskRoutes.js
const express = require("express");
const router = express.Router();
const Task = require("../models/taskModel");

// Add new task
router.post("/", async (req, res) => {
  try {
    const task = new Task(req.body);
    await task.save();
    res.json({ message: "Task added successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Error adding task" });
  }
});

// Get all tasks for a user
router.get("/:userId", async (req, res) => {
  try {
    const tasks = await Task.find({ userId: req.params.userId });
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: "Error fetching tasks" });
  }
});

// Mark task as done
router.put("/:id", async (req, res) => {
  try {
    await Task.findByIdAndUpdate(req.params.id, { status: "Completed" });
    res.json({ message: "Task marked as completed!" });
  } catch (error) {
    res.status(500).json({ message: "Error updating task" });
  }
});

// Delete a task
router.delete("/:id", async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);
    res.json({ message: "Task deleted!" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting task" });
  }
});

module.exports = router;
