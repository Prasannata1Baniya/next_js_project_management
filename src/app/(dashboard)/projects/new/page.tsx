import { createProject } from "@/actions/projects";

export default function NewProjectPage() {
  return (
    <div className="mx-auto max-w-2xl">
      <div className="rounded-xl bg-white p-8 shadow">
        <h1 className="text-3xl font-bold text-gray-900">
          Create Project
        </h1>

        <p className="mt-2 text-gray-600">
          Create a new project to start managing your tasks.
        </p>

        <form action={createProject} className="mt-8 space-y-6">

          <div>
            <label
              htmlFor="name"
              className="mb-2 block text-sm font-medium text-gray-400"
            >
              Project Name
            </label>

            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder="Enter project name"
              className="w-full rounded-lg text-gray-900 border border-gray-600 px-4 py-3 outline-none transition focus:border-orange-500"
            />
          </div>

          <div>
            <label
              htmlFor="description"
              className="mb-2 block text-sm font-medium text-gray-400"
            >
              Description
            </label>

            <textarea
              id="description"
              name="description"
              rows={5}
              placeholder="Write a short description..."
              className="w-full rounded-lg text-gray-900 border border-gray-700 px-4 py-3 outline-none transition focus:border-orange-500"
            />
          </div>

          <button
            type="submit"
            className="rounded-lg bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600"
          >
            Create Project
          </button>

        </form>
      </div>
    </div>
  );
}