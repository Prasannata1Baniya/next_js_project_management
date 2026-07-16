import {
  getProjectById,
  updateProject,
} from "@/actions/projects";

export default async function EditProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const project = await getProjectById(id);

  if (!project) {
    return <p>Project not found.</p>;
  }

  return (
    <div className="mx-auto max-w-2xl">
      <div className="rounded-xl bg-white p-8 shadow">
        <h1 className="text-3xl text-gray-900 font-bold">
          Edit Project
        </h1>

        <form
          action={updateProject.bind(null, project.id)}
          className="mt-8 space-y-6"
        >
          <div>
            <label className="text-gray-500">Project Name</label>

            <input
              name="name"
              defaultValue={project.name}
              className="w-full rounded-lg text-gray-900 border px-4 py-3"
            />
          </div>

          <div>
             <label className="text-gray-500">Description</label>

            <textarea
              name="description"
              defaultValue={project.description ?? ""}
              rows={5}
              className="w-full text-gray-900 rounded-lg border px-4 py-3"
            />
          </div>

          <button
            type="submit"
            className="rounded-lg bg-orange-500 px-6 py-3 text-white"
          >
            Update Project
          </button>
        </form>
      </div>
    </div>
  );
}