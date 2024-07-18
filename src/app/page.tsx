import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <h1 className="text-2xl font-bold mb-4">
          Welcome to the External Link Handler Demo
        </h1>
        <p className="mb-4">
          This is a demo of handling external links in a Next.js application.
        </p>
        <div className="space-y-4">
          <Link
            href="/internal-page"
            className="text-blue-500 hover:underline mr-4"
          >
            Internal Link
          </Link>
          <a
            href="https://www.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline mr-4"
          >
            External Link to Google
          </a>
          <a
            href="https://trustedsite.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            External Link in whitelists
          </a>
        </div>
      </div>
    </div>
  );
}
