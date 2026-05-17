"use client";

import { useRouter, useSearchParams } from "next/navigation";

const categories = ["All", "Plumbing", "Electrical", "Painting", "Joinery"];

export default function CategoryFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentCategory = searchParams.get("category") || "All";

  const handleChange = (e) => {
    const value = e.target.value;

    if (value === "All") {
      router.push("/");
    } else {
      router.push(`/?category=${encodeURIComponent(value)}`);
    }
  };

  return (
    <select
      value={currentCategory}
      onChange={handleChange}
      className="border p-3 rounded-lg bg-white"
    >
      {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
}
