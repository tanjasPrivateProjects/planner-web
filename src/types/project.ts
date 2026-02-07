export type TaskStatus = "todo" | "in-progress" | "done";

export type Task = {
  id: number;
  title: string;
  status: TaskStatus;
};

export type Project = {
  id: number;
  name: string;
  description: string;
  tasks: Task[];
};
