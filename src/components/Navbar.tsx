export default function Navbar() {
  return (
    <header className="bg-white border-b">
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <span className="font-semibold text-lg">Planner</span>

        <button className="text-sm text-gray-500 hover:text-gray-900">
          Projects
        </button>
      </div>
    </header>
  );
}
