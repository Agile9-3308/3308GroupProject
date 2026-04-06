// src/pages/Dashboard.jsx
import { useEffect, useRef, useState } from "react";
import { Chart, registerables } from "chart.js";

import NewProjectForm from "../components/NewProjectForm";
import Projects from "../components/Projects";

Chart.register(...registerables);

function Dashboard() {

  const dummyProjects = [
    {
      id: 1,
      name: "Auth & Login Flow",
      members: ["Andrew", "Mike", "Eric"],
      sprintDays: 14,
      tasks: [
        { id: 1, label: "OAuth integration", done: true },
        { id: 2, label: "Session management", done: true },
        { id: 3, label: "Password reset flow", done: false },
      ],
    },
    {
      id: 2,
      name: "Dashboard UI",
      members: ["Andrew", "Mike", "Eric"],
      sprintDays: 10,
      tasks: [
        { id: 1, label: "Chart component", done: true },
        { id: 2, label: "Responsive layout", done: false },
        { id: 3, label: "Dark mode", done: false },
      ],
    },
  ];

  const chartRef = useRef(null);
  const chartInstance = useRef(null);
  const [projects, setProjects] = useState(dummyProjects);

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

  const handleAddProject = (newProject) => setProjects([...projects, newProject]);

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
          <NewProjectForm handleAddProject={handleAddProject} />
          {/* Renders dummy projects by default, then appends any newly created ones */}
          <Projects projects={projects} setProjects={setProjects} />
          {/* {newProjects.length > 0 && <Projects initialProjects={newProjects} />} */}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;