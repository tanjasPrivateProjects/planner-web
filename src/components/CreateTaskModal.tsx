import type { Project, TaskStatus } from "../types/project";

type Props = {
  project: Project;
  onBack: () => void;
  onAddTask: (title: string) => void;
  onToggleStatus: (taskId: number, status: TaskStatus) => void;
  onDeleteTask: (taskId: number) => void;
};

export default function ProjectDetail({
  project,
  onBack,
  onAddTask,
  onToggleStatus,
  onDeleteTask,
}: Props) {
  return (
    <div>
      {/* Header */}
      <div className="mb-6">
        <button
          onClick={onBack}
          className="text-sm text-gray-500 hover:text-gray-800 mb-2"
        >
          ← Back to projects
        </button>

        <h1 className="text-3xl font-bold">{project.name}</h1>
        <p className="text-gray-500">{project.description}</p>
      </div>

      {/* Add Task */}
      <button
        onClick={() => {
          const title = prompt("Task title?");
          if (title) onAddTask(title);
        }}
        className="mb-4 px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
      >
        + Add Task
      </button>

      {/* Tasks */}
      <div className="space-y-3">
        {project.tasks.map((task) => (
          <div
            key={task.id}
            className="flex items-center justify-between bg-white p-4 rounded border"
          >
            <span>{task.title}</span>

            <div className="flex items-center gap-3">
              <select
                value={task.status}
                onChange={(e) =>
                  onToggleStatus(
                    task.id,
                    e.target.value as TaskStatus
                  )
                }
                className="border rounded px-2 py-1 text-sm"
              >
                <option value="todo">todo</option>
                <option value="in-progress">In Progress</option>
                <option value="done">done</option>
              </select>

              <button
                onClick={() => onDeleteTask(task.id)}
                className="text-red-500 hover:text-red-700 text-sm"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
