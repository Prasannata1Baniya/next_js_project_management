import {
  getProjectById,
  updateProject,
} from "@/actions/projects";

export default async function EditProjectPage({
  params,
}: {
  params: { id: string };
}) {
  const project = await getProjectById(params.id);

  if (!project) {
    return <p>Project not found.</p>;
  }

  return (
    <div className="mx-auto max-w-2xl">
      <div className="rounded-xl bg-white p-8 shadow">
        <h1 className="text-3xl font-bold">
          Edit Project
        </h1>

        <form
          action={updateProject.bind(null, project.id)}
          className="mt-8 space-y-6"
        >
          <div>
            <label>Project Name</label>

            <input
              name="name"
              defaultValue={project.name}
              className="w-full rounded-lg border px-4 py-3"
            />
          </div>

          <div>
            <label>Description</label>

            <textarea
              name="description"
              defaultValue={project.description ?? ""}
              rows={5}
              className="w-full rounded-lg border px-4 py-3"
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