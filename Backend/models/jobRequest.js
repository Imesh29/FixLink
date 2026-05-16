import mongoose from "mongoose";

const jobRequestSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      trim: true,
    },
    description: {
      type: String,
      required: [true, "Description is required"],
      trim: true,
    },
    category: {
      type: String,
      default: "General",
      trim: true,
    },
    location: {
      type: String,
      default: "",
      trim: true,
    },
    contactName: {
      type: String,
      default: "",
      trim: true,
    },
    contactEmail: {
      type: String,
      validate: {
        validator: function (value) {
          if (!value) return true;
          return /^\S+@\S+\.\S+$/.test(value);
        },
        message: "Invalid email format",
      },
    },
    status: {
      type: String,
      enum: ["Open", "In Progress", "Closed"],
      default: "Open",
    },
  },
  {
    timestamps: { createdAt: true, updatedAt: false },
  },
);

const JobRequest = mongoose.model("JobRequest", jobRequestSchema);

export default JobRequest;
