// backend/models/taskModel.js
const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  title: String,
  description: String,
  deadline: Date,
  status: { type: String, default: "Pending" },
  userId: String
});

module.exports = mongoose.model("Task", taskSchema);
