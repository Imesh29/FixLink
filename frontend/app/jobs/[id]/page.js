"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { getJob, updateJobStatus, deleteJob } from "@/lib/api";
import StatusBadge from "@/components/StatusBadge";

export default function JobDetailPage() {
  const params = useParams();
  const router = useRouter();

  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadJob() {
      try {
        const data = await getJob(params.id);
        setJob(data);
      } catch (error) {
        alert(error.message);
        router.push("/");
      } finally {
        setLoading(false);
      }
    }

    if (params?.id) {
      loadJob();
    }
  }, [params, router]);

  const handleStatusChange = async (e) => {
    try {
      const updatedJob = await updateJobStatus(params.id, e.target.value);
      setJob(updatedJob);
    } catch (error) {
      alert(error.message);
    }
  };

  const handleDelete = async () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this job?",
    );

    if (!confirmed) return;

    try {
      await deleteJob(params.id);
      router.push("/");
      router.refresh();
    } catch (error) {
      alert(error.message);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!job) {
    return <p>Job not found.</p>;
  }

  return (
    <div className="bg-white rounded-xl shadow p-6 space-y-4">
      <div className="flex justify-between items-start gap-4">
        <h1 className="text-3xl font-bold">{job.title}</h1>
        <StatusBadge status={job.status} />
      </div>

      <p className="text-gray-700">{job.description}</p>

      <div className="space-y-2">
        <p>
          <strong>Category:</strong> {job.category || "N/A"}
        </p>
        <p>
          <strong>Location:</strong> {job.location || "N/A"}
        </p>
        <p>
          <strong>Contact Name:</strong> {job.contactName || "N/A"}
        </p>
        <p>
          <strong>Contact Email:</strong> {job.contactEmail || "N/A"}
        </p>
      </div>

      <div>
        <label className="block mb-2 font-medium">Update Status</label>

        <select
          value={job.status}
          onChange={handleStatusChange}
          className="border p-3 rounded-lg"
        >
          <option value="Open">Open</option>
          <option value="In Progress">In Progress</option>
          <option value="Closed">Closed</option>
        </select>
      </div>

      <button
        onClick={handleDelete}
        className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg"
      >
        Delete Job
      </button>
    </div>
  );
}
