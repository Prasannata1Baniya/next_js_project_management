import Link from "next/link";

export default function DashboardPage() {
  return (
    <div className="min-h-full bg-gray-100 p-8">

<div className="flex items-center justify-between">
  <div>
    <h1 className="text-3xl font-bold text-gray-900">
      Welcome Back
    </h1>

    <p className="mt-2 text-gray-600">
      Here's an overview of your workspace.
    </p>
  </div>

  <Link
    href="/projects/new"
    className="rounded-lg bg-orange-500 px-5 py-3 font-semibold text-white transition hover:bg-orange-600"
  >
    + Create Project
  </Link>
</div>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        <div className="rounded-xl bg-white p-6 shadow">
          <h2 className="text-sm font-medium text-gray-500">
            Total Projects
          </h2>

          <p className="mt-3 text-4xl font-bold text-orange-500">
            0
          </p>
        </div>

        <div className="rounded-xl bg-white p-6 shadow">
          <h2 className="text-sm font-medium text-gray-500">
            Total Tasks
          </h2>

          <p className="mt-3 text-4xl font-bold text-blue-500">
            0
          </p>
        </div>

        <div className="rounded-xl bg-white p-6 shadow">
          <h2 className="text-sm font-medium text-gray-500">
            Completed Tasks
          </h2>

          <p className="mt-3 text-4xl font-bold text-green-500">
            0
          </p>
        </div>
      </div>

      <div className="mt-8 rounded-xl bg-white p-6 shadow">
        <h2 className="text-xl font-semibold text-gray-900">
          Recent Projects
        </h2>

        <p className="mt-3 text-gray-500">
          No projects yet.
        </p>
      </div>
    </div>
  );
}