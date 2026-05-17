"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createJob } from "@/lib/api";

export default function JobForm() {
  const router = useRouter();

  const [form, setForm] = useState({
    title: "",
    description: "",
    category: "Plumbing",
    location: "",
    contactName: "",
    contactEmail: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.title.trim() || !form.description.trim()) {
      alert("Title and Description are required.");
      return;
    }

    setLoading(true);

    try {
      await createJob(form);
      router.push("/");
      router.refresh();
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-xl shadow space-y-4"
    >
      <input
        type="text"
        name="title"
        placeholder="Job Title"
        value={form.title}
        onChange={handleChange}
        required
        className="w-full border p-3 rounded-lg"
      />

      <textarea
        name="description"
        placeholder="Job Description"
        value={form.description}
        onChange={handleChange}
        required
        rows="5"
        className="w-full border p-3 rounded-lg"
      />

      <select
        name="category"
        value={form.category}
        onChange={handleChange}
        className="w-full border p-3 rounded-lg"
      >
        <option value="Plumbing">Plumbing</option>
        <option value="Electrical">Electrical</option>
        <option value="Painting">Painting</option>
        <option value="Joinery">Joinery</option>
      </select>

      <input
        type="text"
        name="location"
        placeholder="Location"
        value={form.location}
        onChange={handleChange}
        className="w-full border p-3 rounded-lg"
      />

      <input
        type="text"
        name="contactName"
        placeholder="Contact Name"
        value={form.contactName}
        onChange={handleChange}
        className="w-full border p-3 rounded-lg"
      />

      <input
        type="email"
        name="contactEmail"
        placeholder="Contact Email"
        value={form.contactEmail}
        onChange={handleChange}
        className="w-full border p-3 rounded-lg"
      />

      <button
        type="submit"
        disabled={loading}
        className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white px-6 py-3 rounded-lg"
      >
        {loading ? "Creating..." : "Create Job"}
      </button>
    </form>
  );
}
