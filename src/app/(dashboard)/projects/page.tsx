import {getProjects} from "@/actions/projects";
import Link from "next/link";

export default async function ProjectsPage(){
    const projects = await getProjects();
    return (
        <div className="min-h-full bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-gray-900">
        My Projects
      </h1>

      <p className="mt-2 text-gray-600">
        Manage all your projects.
      </p>

     {projects.length === 0 ? (
  <div className="mt-8 rounded-xl bg-white p-6 shadow">
    <p className="text-gray-500">
      No projects found.
    </p>
  </div>
) : (
  <div className="mt-8 space-y-4">
    {projects.map((project) => (
      <div
        key={project.id}
        className="rounded-xl bg-white p-6 shadow"
      >
        <h2 className="text-xl font-bold text-gray-900">
          {project.name}
        </h2>

        <p className="mt-2 text-gray-600">
          {project.description}
        </p>
        <Link
  href={`/projects/${project.id}/edit`}
  className="text-orange-500"
>
  Edit
</Link>
      </div>
    ))}
  </div>
)}

    </div>
    );
}