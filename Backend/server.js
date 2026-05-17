import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import jobRoutes from "./routes/jobRoutes.js";
import errorHandler from "./middleware/errorHandler.js";

dotenv.config();

connectDB();

const app = express();
app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "FixLink API is running" });
});
app.use("/jobs", jobRoutes);

app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
