import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./database/connectDB.js"; // Make sure this file is correct
import userRoutes from "./routes/userRoutes.js"; // Import userRoute properly

dotenv.config(); // Load environment variables

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/user", userRoutes ); // Use userRoute for /api/user endpoint

// Test route
app.get("/", (req, res) => {
  res.status(200).json({ Message: "API changed successfully" });
});

// Heartbeat route for health checks
app.get("/api/heart-beat", (req, res) => {
  res.status(200).json({ data: "Heartbeat was successful" });
});

// Start the server
app.listen(process.env.PORT, () => {
  console.log(`Server running successfully at port ${process.env.PORT}`);
});

// Connect to the database
connectDB();
