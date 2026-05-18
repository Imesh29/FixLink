const API_URL = process.env.NEXT_PUBLIC_API_URL;

if (!API_URL) {
  throw new Error(
    "NEXT_PUBLIC_API_URL is not defined. Check your .env.local file.",
  );
}

async function handleResponse(res) {
  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Something went wrong");
  }

  return data;
}

export async function getJobs(category = "") {
  const url = category
    ? `${API_URL}/jobs?category=${encodeURIComponent(category)}`
    : `${API_URL}/jobs`;

  const res = await fetch(url, { cache: "no-store" });
  return handleResponse(res);
}

export async function getJob(id) {
  const res = await fetch(`${API_URL}/jobs/${id}`, {
    cache: "no-store",
  });

  return handleResponse(res);
}

export async function createJob(data) {
  const res = await fetch(`${API_URL}/jobs`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return handleResponse(res);
}

export async function updateJobStatus(id, status) {
  const res = await fetch(`${API_URL}/jobs/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ status }),
  });

  return handleResponse(res);
}

export async function deleteJob(id) {
  const res = await fetch(`${API_URL}/jobs/${id}`, {
    method: "DELETE",
  });

  return handleResponse(res);
}
