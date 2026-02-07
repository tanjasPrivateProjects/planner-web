import Navbar from "./components/Navbar";
import ProjectList from "./pages/ProjectList";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <main className="max-w-5xl mx-auto px-6 py-10">
        <ProjectList />
      </main>
    </div>
  );
}
