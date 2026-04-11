import { useState, useContext } from "react"

import { GlobalContext } from "../App";

function NewProjectForm({ handleAddProject }) {
  const [name, setName] = useState("");
  const [members, setMembers] = useState("");
  const [sprintDays, setSprintDays] = useState(14);
  const [taskInput, setTaskInput] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    const trimmed = taskInput.trim();
    if (!trimmed) return;
    setTasks((prev) => [...prev, { id: Date.now(), label: trimmed, done: false }]);
    setTaskInput("");
  };

  const removeTask = (id) => setTasks((prev) => prev.filter((t) => t.id !== id));

  const handleSubmit = () => {
    if (!name.trim()) return;
    handleAddProject({
      id: Date.now(),
      name: name.trim(),
      members: members.split(",").map((m) => m.trim()).filter(Boolean),
      sprintDays: Number(sprintDays),
      tasks: tasks,
    });
    setName(""); setMembers(""); setSprintDays(14);
    setTasks([]); setTaskInput("");
  };

  return (
    <div className="border border-gray-200 rounded-xl p-4 bg-white shadow-sm space-y-3">
      <h3 className="text-sm font-semibold text-gray-700">New project</h3>
      <div className="flex gap-2">
        <input
          className="flex-1 border border-gray-200 rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-indigo-400"
          placeholder="Project name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="w-20 border border-gray-200 rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-indigo-400"
          type="number"
          placeholder="Days"
          min={1}
          value={sprintDays}
          onChange={(e) => setSprintDays(e.target.value)}
        />
      </div>
      <input
        className="w-full border border-gray-200 rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-indigo-400"
        placeholder="Members ('Andrew, Mike, Eric')"
        value={members}
        onChange={(e) => setMembers(e.target.value)}
      />
      <div className="flex gap-2">
        <input
          className="flex-1 border border-gray-200 rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-indigo-400"
          placeholder="Add a task"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addTask()}
        />
        <button
          onClick={addTask}
          className="px-3 py-1.5 text-sm border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
        >
          + Add
        </button>
      </div>
      <button
        onClick={handleSubmit}
        className="w-full py-2 bg-indigo-500 text-white text-sm font-medium rounded-lg hover:bg-indigo-600 transition-colors"
      >
        Create project
      </button>
    </div>
  );
}

export default NewProjectForm