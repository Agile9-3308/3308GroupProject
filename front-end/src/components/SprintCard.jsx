import { useState, useContext, useEffect } from "react";

import { deleteSprint, createTask, updateTask } from "../api/api"

import TaskList from "./TaskList";

function SprintCard({ sprint, sprints, setSprints }) {
  console.log(sprint)
  
  const [expanded, setExpanded] = useState(true);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [liveTasks, setLiveTasks] = useState(sprint.tasks)
  const [liveStatus, setLiveStatus] = useState("")
  const [livePct, setLivePct] = useState(0)

  const start = new Date(sprint.start_at)
  const end = new Date(sprint.end_at)
  const days = Math.abs(end - start) / (1000 * 60 * 60 * 24)

  const STATUS_COLORS = {
    "On track": "bg-green-100 text-green-700",
    "Behind": "bg-yellow-100 text-yellow-700",
    "At risk": "bg-red-100 text-red-700",
  };

  const handleDeleteSprint = () => {
    deleteSprint(sprint.id)
    .then(res => {console.log(res.data)})
    .catch(err => {console.error(err)})
    setSprints(sprints.filter((s) => s.id !== sprint.id))
  }

  useEffect(() => {
    console.log("triggered status change")
    const pct = ((liveTasks.filter((t) => t.complete).length / liveTasks.length) * 100).toFixed(0)
    setLivePct(pct);
    if (!liveTasks.length) {
      setLiveStatus("On track")
    }
    if (pct >= 60) {
      setLiveStatus("On track");
    } else if (pct >= 30) {
      setLiveStatus("Behind");
    } else {
      setLiveStatus("At risk");
    }
  }, [liveTasks])


  return (
    <div className="border border-gray-200 rounded-md p-3 mt-4 bg-white shadow-sm">
      <div className="flex items-center justify-between">
        <div className="flex-1 cursor-pointer" onClick={() => setExpanded((e) => !e)}>
          <h3 className="font-semibold text-gray-800">{sprint.title}</h3>
          <p className="text-xs text-gray-400 mt-0.5">
            Sprint: {days} days &middot;{" "}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${STATUS_COLORS[liveStatus]}`}>
            {liveStatus}
          </span>
          {confirmDelete ? (
            <div className="flex items-center gap-1">
              <button
                onClick={() => handleDeleteSprint()}
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

      <div className="mt-3 space-y-3">
        <div className="flex items-center gap-2">
          <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-indigo-500 rounded-full transition-all"
              style={{ width: `${livePct}%` }}
            />
          </div>
          <span className="text-xs text-gray-400">{livePct}%</span>
        </div>
      </div>

      {expanded && (<TaskList liveTasks={liveTasks} setLiveTasks={setLiveTasks} sprint={sprint} />)}
    </div>
  );
}

export default SprintCard