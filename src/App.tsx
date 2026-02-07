import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import ProjectList from "./pages/ProjectList";
import ProjectDetail from "./pages/ProjectDetail";
import CreateProjectModal from "./components/CreateProjectModal";
import type { Project, TaskStatus } from "./types/project";

const STORAGE_KEY = "planner-projects";

export default function App() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [selectedProjectId, setSelectedProjectId] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // load
  useEffect(() => {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) setProjects(JSON.parse(raw));
  }, []);

  // save
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
  }, [projects]);

  const selectedProject = projects.find(p => p.id === selectedProjectId);

  function addProject(name: string, description: string) {
    setProjects(prev => [
      ...prev,
      { id: Date.now(), name, description, tasks: [] },
    ]);
  }

  function addTask(projectId: number, title: string) {
    setProjects(prev =>
      prev.map(p =>
        p.id === projectId
          ? { ...p, tasks: [...p.tasks, { id: Date.now(), title, status: "todo" }] }
          : p
      )
    );
  }

  function toggleTaskStatus(projectId: number, taskId: number, status: TaskStatus) {
    setProjects(prev =>
      prev.map(p =>
        p.id === projectId
          ? {
              ...p,
              tasks: p.tasks.map(t =>
                t.id === taskId ? { ...t, status } : t
              ),
            }
          : p
      )
    );
  }

  function deleteTask(projectId: number, taskId: number) {
    setProjects(prev =>
      prev.map(p =>
        p.id === projectId
          ? { ...p, tasks: p.tasks.filter(t => t.id !== taskId) }
          : p
      )
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar
        onCreate={() => setIsModalOpen(true)}
        onGoProjects={() => setSelectedProjectId(null)}
        isInDetail={!!selectedProject}
      />

      <main className="max-w-5xl mx-auto px-6 py-10">
        {selectedProject ? (
          <ProjectDetail
            project={selectedProject}
            onBack={() => setSelectedProjectId(null)}
            onAddTask={(title) => addTask(selectedProject.id, title)}
            onToggleStatus={(taskId, status) =>
              toggleTaskStatus(selectedProject.id, taskId, status)
            }
            onDeleteTask={(taskId) =>
              deleteTask(selectedProject.id, taskId)
            }
          />
        ) : (
          <ProjectList projects={projects} onSelect={setSelectedProjectId} />
        )}
      </main>

      {isModalOpen && (
        <CreateProjectModal
          onClose={() => setIsModalOpen(false)}
          onCreate={addProject}
        />
      )}
    </div>
  );
}
