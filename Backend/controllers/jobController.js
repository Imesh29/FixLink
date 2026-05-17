import JobRequest from "../models/JobRequest.js";

export const getJobs = async (req, res) => {
  const { category, status } = req.query;

  const filter = {};
  if (category) filter.category = category;
  if (status) filter.status = status;

  const jobs = await JobRequest.find(filter).sort({ createdAt: -1 });
  res.json(jobs);
};

export const getJobById = async (req, res) => {
  const job = await JobRequest.findById(req.params.id);

  if (!job) {
    res.status(404);
    throw new Error("Job not found");
  }

  res.json(job);
};

export const createJob = async (req, res) => {
  const job = await JobRequest.create(req.body);
  res.status(201).json(job);
};

export const updateJobStatus = async (req, res) => {
  const { status } = req.body;

  if (!["Open", "In Progress", "Closed"].includes(status)) {
    res.status(400);
    throw new Error("Invalid status");
  }

  const job = await JobRequest.findById(req.params.id);

  if (!job) {
    res.status(404);
    throw new Error("Job not found");
  }

  job.status = status;
  await job.save();

  res.json(job);
};

export const deleteJob = async (req, res) => {
  const job = await JobRequest.findById(req.params.id);

  if (!job) {
    res.status(404);
    throw new Error("Job not found");
  }

  await job.deleteOne();

  res.json({ message: "Job deleted successfully" });
};
