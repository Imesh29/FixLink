import { getJobs } from "@/lib/api";
import JobCard from "@/components/JobCard";
import CategoryFilter from "@/components/CategoryFilter";

export default async function HomePage({ searchParams }) {
  const params = await searchParams;
  const category = params?.category || "";

  let jobs = [];

  try {
    const data = await getJobs(category);
    jobs = Array.isArray(data) ? data : [];
  } catch (error) {
    console.error("Failed to load jobs:", error.message);
    jobs = [];
  }

  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <h1 className="text-3xl font-bold">Service Requests</h1>
        <CategoryFilter />
      </div>

      {jobs.length === 0 ? (
        <div className="bg-white rounded-xl shadow p-8 text-center text-gray-500">
          No jobs available.
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map((job) => (
            <JobCard key={job._id} job={job} />
          ))}
        </div>
      )}
    </div>
  );
}
