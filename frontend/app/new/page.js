import JobForm from "@/components/JobForm";

export const metadata = {
  title: "Create New Job | FixLink",
};

export default function NewJobPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Create New Job</h1>
      <JobForm />
    </div>
  );
}
