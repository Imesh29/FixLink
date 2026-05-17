const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function getJobs(category = "") {
  const url = category
    ? `${API_URL}/jobs?category=${encodeURIComponent(category)}`
    : `${API_URL}/jobs`;

  const res = await fetch(url, { cache: "no-store" });
  return res.json();
}

export async function getJob(id) {
  const res = await fetch(`${API_URL}/jobs/${id}`, {
    cache: "no-store",
  });
  return res.json();
}

export async function createJob(data) {
  const res = await fetch(`${API_URL}/jobs`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) throw new Error("Failed to create job");
  return res.json();
}

export async function updateJobStatus(id, status) {
  const res = await fetch(`${API_URL}/jobs/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ status }),
  });

  if (!res.ok) throw new Error("Failed to update status");
  return res.json();
}

export async function deleteJob(id) {
  const res = await fetch(`${API_URL}/jobs/${id}`, {
    method: "DELETE",
  });

  if (!res.ok) throw new Error("Failed to delete job");
  return res.json();
}
