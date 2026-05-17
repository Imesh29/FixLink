import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "FixLink",
  description: "Mini Service Request Board",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 min-h-screen">
        <nav className="bg-blue-600 text-white p-4 shadow">
          <div className="max-w-6xl mx-auto flex justify-between">
            <Link href="/" className="font-bold text-xl">
              FixLink
            </Link>
            <Link href="/new" className="bg-white text-blue-600 px-4 py-2 rounded">
              New Job
            </Link>
          </div>
        </nav>

        <main className="max-w-6xl mx-auto p-6">{children}</main>
      </body>
    </html>
  );
}