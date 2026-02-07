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
          const total = project.tasks.length;
          const done = project.tasks.filter(t => t.status === "done").length;
          const progress = total === 0 ? 0 : Math.round((done / total) * 100);

          return (
            <button
              key={project.id}
              onClick={() => onSelect(project.id)}
              className="text-left bg-white border rounded-xl p-5 hover:shadow"
            >
              <h2 className="font-semibold text-lg">{project.name}</h2>
              <p className="text-sm text-gray-500 mb-4">
                {project.description}
              </p>

              {/* Progress */}
              <div className="mb-3">
                <div className="h-2 bg-gray-200 rounded">
                  <div
                    className="h-2 bg-green-500 rounded"
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <div className="mt-1 text-xs text-gray-500">
                  {done}/{total} done ({progress}%)
                </div>
              </div>

              <div className="flex gap-3 text-sm">
                <span className="px-2 py-1 rounded bg-blue-100 text-blue-700">
                  {total} tasks
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
