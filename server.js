// backend/server.js
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");
const taskRoutes = require("./routes/taskRoutes");
const connectDB = require("../database/mongoDB_connection");

const app = express();
app.use(cors());
app.use(express.json());

// connect to MongoDB
connectDB();

// routes
app.use("/api/users", userRoutes);
app.use("/api/tasks", taskRoutes);

// start server
const PORT = 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
