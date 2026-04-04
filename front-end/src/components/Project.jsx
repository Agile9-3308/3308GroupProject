// src/pages/Project.jsx
import { useState } from "react";

const STATUS_COLORS = {
  "On track": "bg-green-100 text-green-700",
  Behind: "bg-yellow-100 text-yellow-700",
  "At risk": "bg-red-100 text-red-700",
};

function getStatus(tasks) {
  if (!tasks.length) return "On track";
  const pct = tasks.filter((t) => t.done).length / tasks.length;
  if (pct >= 0.6) return "On track";
  if (pct >= 0.3) return "Behind";
  return "At risk";
}

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

function ProjectCard({ project, onToggleTask, onDeleteProject, onAddTask, onDeleteTask }) {
  const [expanded, setExpanded] = useState(true);
  const [newTaskInput, setNewTaskInput] = useState("");
  const [confirmDelete, setConfirmDelete] = useState(false);

  const done = project.tasks.filter((t) => t.done).length;
  const pct = project.tasks.length ? Math.round((done / project.tasks.length) * 100) : 0;
  const status = getStatus(project.tasks);

  const handleAddTask = () => {
    const trimmed = newTaskInput.trim();
    if (!trimmed) return;
    onAddTask(project.id, trimmed);
    setNewTaskInput("");
  };

  return (
    <div className="border border-gray-200 rounded-xl p-4 bg-white shadow-sm">
      <div className="flex items-center justify-between">
        <div className="flex-1 cursor-pointer" onClick={() => setExpanded((e) => !e)}>
          <h3 className="font-semibold text-gray-800">{project.name}</h3>
          <p className="text-xs text-gray-400 mt-0.5">
            Sprint: {project.sprintDays} days &middot;{" "}
            {project.members.join(", ") || "No members"}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${STATUS_COLORS[status]}`}>
            {status}
          </span>
          {confirmDelete ? (
            <div className="flex items-center gap-1">
              <button
                onClick={() => onDeleteProject(project.id)}
                className="text-xs px-2 py-0.5 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
              >
                Confirm
              </button>
              <button
                onClick={() => setConfirmDelete(false)}
                className="text-xs px-2 py-0.5 border border-gray-200 rounded-md hover:bg-gray-50 transition-colors text-gray-500"
              >
                Cancel
              </button>
            </div>
          ) : (
            <button
              onClick={() => setConfirmDelete(true)}
              className="text-gray-300 hover:text-red-400 transition-colors text-lg leading-none"
              title="Delete project"
            >
              ×
            </button>
          )}
          <span
            className="text-gray-400 text-sm cursor-pointer"
            onClick={() => setExpanded((e) => !e)}
          >
            {expanded ? "▲" : "▼"}
          </span>
        </div>
      </div>

      {expanded && (
        <div className="mt-3 space-y-3">
          <div className="flex items-center gap-2">
            <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-indigo-500 rounded-full transition-all"
                style={{ width: `${pct}%` }}
              />
            </div>
            <span className="text-xs text-gray-400">{pct}%</span>
          </div>

          {project.tasks.length > 0 ? (
            <ul className="space-y-1.5">
              {project.tasks.map((task) => (
                <li key={task.id} className="flex items-center gap-2 group">
                  <div
                    className={`w-4 h-4 rounded border flex items-center justify-center cursor-pointer transition-colors flex-shrink-0 ${
                      task.done
                        ? "bg-indigo-500 border-indigo-500"
                        : "border-gray-300 hover:border-indigo-400"
                    }`}
                    onClick={() => onToggleTask(project.id, task.id)}
                  >
                    {task.done && (
                      <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 10 10">
                        <path
                          d="M1.5 5l2.5 2.5 4.5-5"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </div>
                  <span
                    className={`text-sm flex-1 cursor-pointer ${
                      task.done ? "line-through text-gray-400" : "text-gray-700"
                    }`}
                    onClick={() => onToggleTask(project.id, task.id)}
                  >
                    {task.label}
                  </span>
                  <button
                    onClick={() => onDeleteTask(project.id, task.id)}
                    className="text-gray-200 hover:text-red-400 transition-colors opacity-0 group-hover:opacity-100 text-base leading-none flex-shrink-0"
                    title="Delete task"
                  >
                    ×
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-xs text-gray-400 italic">No tasks yet.</p>
          )}

          <div className="flex gap-2 pt-1">
            <input
              className="flex-1 border border-gray-200 rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-indigo-400"
              placeholder="New task..."
              value={newTaskInput}
              onChange={(e) => setNewTaskInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleAddTask()}
            />
            <button
              onClick={handleAddTask}
              className="px-3 py-1.5 text-sm border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-gray-600"
            >
              + Add
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function Project({ initialProjects = dummyProjects }) {
  const [projects, setProjects] = useState(initialProjects);

  const toggleTask = (projectId, taskId) =>
    setProjects((prev) =>
      prev.map((p) =>
        p.id !== projectId
          ? p
          : { ...p, tasks: p.tasks.map((t) => (t.id === taskId ? { ...t, done: !t.done } : t)) }
      )
    );

  const deleteProject = (projectId) =>
    setProjects((prev) => prev.filter((p) => p.id !== projectId));

  const addTask = (projectId, label) =>
    setProjects((prev) =>
      prev.map((p) =>
        p.id !== projectId
          ? p
          : { ...p, tasks: [...p.tasks, { id: Date.now(), label, done: false }] }
      )
    );

  const deleteTask = (projectId, taskId) =>
    setProjects((prev) =>
      prev.map((p) =>
        p.id !== projectId
          ? p
          : { ...p, tasks: p.tasks.filter((t) => t.id !== taskId) }
      )
    );

  return (
    <div className="space-y-4">
      {projects.map((p) => (
        <ProjectCard
          key={p.id}
          project={p}
          onToggleTask={toggleTask}
          onDeleteProject={deleteProject}
          onAddTask={addTask}
          onDeleteTask={deleteTask}
        />
      ))}
    </div>
  );
}

export default Project;