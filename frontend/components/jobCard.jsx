import Link from "next/link";
import StatusBadge from "./StatusBadge";

export default function JobCard({ job }) {
  return (
    <div className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition">
      <div className="flex justify-between items-start gap-4 mb-4">
        <h2 className="text-xl font-semibold">{job.title}</h2>
        <StatusBadge status={job.status} />
      </div>

      <p className="text-gray-600 mb-4 line-clamp-3">{job.description}</p>

      <div className="text-sm text-gray-500 mb-4">
        {job.category || "General"} • {job.location || "Unknown"}
      </div>

      <Link
        href={`/jobs/${job._id}`}
        className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
      >
        View Details
      </Link>
    </div>
  );
}
