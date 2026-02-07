import { useState } from "react";
import Navbar from "./components/Navbar";
import ProjectList from "./pages/ProjectList";
import CreateProjectModal from "./components/CreateProjectModal";
CreateProjectModal

import type { Project } from "./types/project";


export default function App() {
  const [projects, setProjects] = useState<Project[]>([
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
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  function addProject(name: string, description: string) {
    setProjects((prev) => [
      ...prev,
      {
        id: Date.now(),
        name,
        description,
        tasks: 0,
        done: 0,
      },
    ]);
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar onCreate={() => setIsModalOpen(true)} />

      <main className="max-w-5xl mx-auto px-6 py-10">
        <ProjectList projects={projects} />
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
