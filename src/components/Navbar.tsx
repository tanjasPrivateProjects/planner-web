type Props = {
  onCreate: () => void;
  onGoProjects: () => void;
  isInDetail: boolean;
};

export default function Navbar({ onCreate, onGoProjects, isInDetail }: Props) {
  return (
    <header className="bg-white border-b">
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <button onClick={onGoProjects} className="font-semibold text-lg">
          Planner
        </button>

        <div className="flex items-center gap-3">
          {isInDetail && (
            <button
              onClick={onGoProjects}
              className="text-sm text-gray-500 hover:text-black"
            >
              Projects
            </button>
          )}

          <button
            onClick={onCreate}
            className="px-3 py-1.5 rounded bg-blue-600 text-white text-sm"
          >
            + New Project
          </button>
        </div>
      </div>
    </header>
  );
}
