// src/pages/Dashboard.jsx
import { useEffect, useRef, useState } from "react";
import { Chart, registerables } from "chart.js";
import Project from "../components/Project";

Chart.register(...registerables);

function NewProjectForm({ onAdd }) {
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
    onAdd({
      id: Date.now(),
      name: name.trim(),
      members: members.split(",").map((m) => m.trim()).filter(Boolean),
      sprintDays: Number(sprintDays),
      tasks,
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
      {tasks.length > 0 && (
        <ul className="space-y-1">
          {tasks.map((t) => (
            <li key={t.id} className="flex items-center justify-between text-sm text-gray-600">
              <span>• {t.label}</span>
              <button
                onClick={() => removeTask(t.id)}
                className="text-gray-300 hover:text-red-400 text-xs"
              >
                ✕
              </button>
            </li>
          ))}
        </ul>
      )}
      <button
        onClick={handleSubmit}
        className="w-full py-2 bg-indigo-500 text-white text-sm font-medium rounded-lg hover:bg-indigo-600 transition-colors"
      >
        Create project
      </button>
    </div>
  );
}

function Dashboard() {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);
  const [newProjects, setNewProjects] = useState([]);

  useEffect(() => {
    if (chartInstance.current) chartInstance.current.destroy();
    chartInstance.current = new Chart(chartRef.current, {
      type: "line",
      data: {
        labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5"],
        datasets: [
          {
            label: "Ideal",
            data: [40, 30, 20, 10, 0],
            borderColor: "#94a3b8",
            borderDash: [6, 4],
            tension: 0,
            pointRadius: 3,
          },
          {
            label: "Actual",
            data: [40, 35, 28, 22, 15],
            borderColor: "#4f46e5",
            backgroundColor: "rgba(79,70,229,0.08)",
            fill: true,
            tension: 0.3,
            pointRadius: 4,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: { legend: { position: "top" } },
        scales: {
          y: { beginAtZero: true, title: { display: true, text: "Story points" } },
        },
      },
    });
    return () => chartInstance.current?.destroy();
  }, []);

  const handleAddProject = (project) => setNewProjects((prev) => [...prev, project]);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200 px-8 py-4 flex items-center gap-3">
        <h1 className="text-xl font-bold text-gray-800">Sprint Dashboard</h1>
        <span className="text-xs bg-indigo-50 text-indigo-600 px-2 py-0.5 rounded-full font-medium">
          Sprint 3
        </span>
      </div>

      <div className="flex gap-0 h-[calc(100vh-64px)]">
        {/* Left: Burndown chart */}
        <div className="flex-[3] p-8 border-r border-gray-200 overflow-y-auto">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">Burndown Chart</h2>
          <canvas ref={chartRef} />
        </div>

        {/* Right: Projects */}
        <div className="flex-[2] p-6 overflow-y-auto space-y-4">
          <h2 className="text-lg font-semibold text-gray-700">Projects</h2>
          <NewProjectForm onAdd={handleAddProject} />
          {/* Renders dummy projects by default, then appends any newly created ones */}
          <Project />
          {newProjects.length > 0 && <Project initialProjects={newProjects} />}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;