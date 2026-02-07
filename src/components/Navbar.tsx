type Props = {
  onCreate: () => void;
};

export default function Navbar({ onCreate }: Props) {
  return (
    <header className="bg-white border-b">
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <span className="font-semibold text-lg">Planner</span>

        <button
          onClick={onCreate}
          className="text-sm font-medium px-3 py-1.5 rounded bg-blue-600 text-white hover:bg-blue-700"
        >
          + New Project
        </button>
      </div>
    </header>
  );
}
