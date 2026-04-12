import { useState, useContext } from "react"

import { createTask, updateTask } from "../api/api"

import { GlobalContext } from "../App";

function TaskList({ tasks, sprint }) {

    const { currentUser } = useContext(GlobalContext)

    const [liveTasks, setLiveTasks] = useState(tasks)

    const [newTaskInput, setNewTaskInput] = useState("");
    const initTask = {
      title: "Test sdsdsdsdsdwdede!!!!!!!!",
      description: "Description added",
      due_at: new Date,
      value: 5,
      user_id: currentUser.id,
      sprint_id: sprint.id,
    }

    const toggleTask = (taskId, complete) => {
        const taskData = {complete: complete}
        updateTask(taskId, taskData)
        .then(res => {
            console.log(res.data)
            const otherTasks = liveTasks.filter(liveTask => {
                return liveTask.id !== taskId
            })
            console.log(otherTasks)
            setLiveTasks([...otherTasks, res.data])
        })
        .catch(err => console.error(err))
    }

    const addTask = (label) => {
        setProjects((prev) =>
            prev.map((p) =>
            p.id !== sprint.id
                ? p
                : { ...p, tasks: [...p.tasks, { id: Date.now(), label, done: false }] }
            )
        );
    }

    const deleteTask = (taskId) => {
        setProjects((prev) =>
            prev.map((p) =>
            p.id !== sprint.id
                ? p
                : { ...p, tasks: p.tasks.filter((t) => t.id !== taskId) }
            )
        );
    }

    function handleAddTask() {
        taskData.title = newTaskInput
        createTask(taskData)
        .then(res => console.log(res.data))
        .catch(err => console.error(err))
    }

    return (
        <div className="mt-3 space-y-3">
          {liveTasks.length > 0 ? (
            <ul className="space-y-1.5">
              {liveTasks.map((task) => (
                <li key={task.id} className="flex items-center gap-2 group">
                  <div
                    className={`w-4 h-4 rounded border flex items-center justify-center cursor-pointer transition-colors flex-shrink-0 ${task.complete
                        ? "bg-indigo-500 border-indigo-500"
                        : "border-gray-300 hover:border-indigo-400"
                      }`}
                    onClick={() => toggleTask(task.id, !task.complete)}
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
                    className={`text-sm flex-1 cursor-pointer ${task.done ? "line-through text-gray-400" : "text-gray-700"
                      }`}
                    onClick={() => toggleTask(task.id)}
                  >
                    {task.title}
                  </span>
                  <button
                    onClick={() => deleteTask(task.id)}
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
              className="px-2 py-1 text-xs border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-gray-600"
            >
              + Add
            </button>
          </div>
        </div>
    )
}

export default TaskList