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
      <button
        onClick={onBack}
        className="text-sm text-gray-500 mb-4 hover:underline"
      >
        ← Back to projects
      </button>

      <h1 className="text-3xl font-bold">{project.name}</h1>
      <p className="text-gray-500 mb-6">{project.description}</p>

      <button
        onClick={() => {
          const title = prompt("Task title?");
          if (title) onAddTask(title);
        }}
        className="mb-6 px-3 py-1.5 rounded bg-blue-600 text-white text-sm"
      >
        + Add Task
      </button>

      <div className="space-y-3">
        {project.tasks.map((task) => (
          <div
            key={task.id}
            className="flex items-center justify-between bg-white border rounded-lg px-4 py-2"
          >
            <div className="flex items-center gap-3">
              <span
                className={`text-xs font-semibold px-2 py-1 rounded-full
                  ${
                    task.status === "todo"
                      ? "bg-gray-200 text-gray-700"
                      : task.status === "in-progress"
                      ? "bg-yellow-100 text-yellow-800"
                      : "bg-green-100 text-green-700"
                  }
                `}
              >
                {task.status === "todo"
                  ? "Todo"
                  : task.status === "in-progress"
                  ? "In Progress"
                  : "Done"}
              </span>
              <span>{task.title}</span>
            </div>

            <div className="flex items-center gap-3">
              <select
                value={task.status}
                onChange={(e) =>
                  onToggleStatus(task.id, e.target.value as TaskStatus)
                }
                className="text-sm border rounded px-2 py-1 bg-white"
              >
                <option value="todo">Todo</option>
                <option value="in-progress">In Progress</option>
                <option value="done">Done</option>
              </select>

              <button
                onClick={() => onDeleteTask(task.id)}
                className="text-sm text-red-500 hover:underline"
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
