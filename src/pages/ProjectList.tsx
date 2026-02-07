const projects = [
  {
    id: 1,
    name: "Planner App",
    description: "Build a project & task planner",
    tasks: 5,
    done: 2,
  },
  {
    id: 2,
    name: "Portfolio Website",
    description: "Personal CV & projects",
    tasks: 3,
    done: 1,
  },
];

export default function ProjectList() {
  return (
    <>
      <h1 className="text-3xl font-bold mb-6">My Projects</h1>

      <div className="grid gap-4 sm:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.id}
            className="rounded-xl bg-white p-5 border shadow-sm hover:shadow-md transition"
          >
            <h2 className="text-lg font-semibold">{project.name}</h2>
            <p className="text-sm text-gray-500 mb-4">
              {project.description}
            </p>

            <div className="flex gap-3 text-sm">
              <span className="px-2 py-1 rounded bg-blue-100 text-blue-700">
                {project.tasks} tasks
              </span>
              <span className="px-2 py-1 rounded bg-green-100 text-green-700">
                {project.done} done
              </span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
