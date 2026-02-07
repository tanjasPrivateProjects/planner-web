import { useState } from "react";

type Props = {
  onClose: () => void;
  onCreate: (name: string, description: string) => void;
};

export default function CreateProjectModal({ onClose, onCreate }: Props) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  function handleSubmit() {
    if (!name.trim()) return;
    onCreate(name, description);
    onClose();
  }

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
      <div className="bg-white rounded-xl w-full max-w-md p-6">
        <h2 className="text-xl font-semibold mb-4">Create Project</h2>

        <input
          className="w-full border rounded px-3 py-2 mb-3"
          placeholder="Project name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <textarea
          className="w-full border rounded px-3 py-2"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <div className="mt-6 flex justify-end gap-3">
          <button onClick={onClose} className="text-sm text-gray-500">
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 rounded bg-blue-600 text-white text-sm"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
