import type { Project } from "../types/project";

type Props = {
  projects: Project[];
  onSelect: (id: number) => void;
};

export default function ProjectList({ projects, onSelect }: Props) {
  return (
    <>
      <h1 className="text-3xl font-bold mb-6">My Projects</h1>

      <div className="grid gap-4 sm:grid-cols-2">
        {projects.map((project) => {
          const done = project.tasks.filter(
            (t) => t.status === "done"
          ).length;

          return (
            <button
              key={project.id}
              onClick={() => onSelect(project.id)}
              className="text-left rounded-xl bg-white p-5 border shadow-sm hover:shadow-md transition"
            >
              <h2 className="text-lg font-semibold">{project.name}</h2>
              <p className="text-sm text-gray-500 mb-4">
                {project.description}
              </p>

              <div className="flex gap-3 text-sm">
                <span className="px-2 py-1 rounded bg-blue-100 text-blue-700">
                  {project.tasks.length} tasks
                </span>
                <span className="px-2 py-1 rounded bg-green-100 text-green-700">
                  {done} done
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </>
  );
}
