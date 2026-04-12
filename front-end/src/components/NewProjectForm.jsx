import { useState, useContext } from "react"

import { GlobalContext } from "../App";

function NewProjectForm({ handleAddProject }) {
  const [name, setName] = useState("");
  const [members, setMembers] = useState("");
  const [sprintDays, setSprintDays] = useState(14);
  const [taskInput, setTaskInput] = useState("");
  const [tasks, setTasks] = useState([]);


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
      </div>
    </div>
  );
}

export default NewProjectForm